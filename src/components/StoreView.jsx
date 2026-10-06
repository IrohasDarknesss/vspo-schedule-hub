import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Star, 
  ExternalLink, 
  Filter, 
  Sparkles, 
  Check, 
  X, 
  SlidersHorizontal,
  ChevronDown,
  RefreshCw,
  CheckCircle2,
  Clock,
  Radio
} from 'lucide-react';
import GoodsCard from './GoodsCard';
import GoodsDetailModal from './GoodsDetailModal';
import { GOODS_CATEGORIES } from '../data/goods';

export default function StoreView({
  goods: initialGoods,
  members,
  membersMap,
  selectedBranch,
  setSelectedBranch,
  favorites,
  onSelectMember,
  initialMemberFilter = null
}) {
  // Real-time synced goods state
  const [currentGoods, setCurrentGoods] = useState(initialGoods);
  const [isStoreSyncing, setIsStoreSyncing] = useState(false);
  const [lastStoreSyncTime, setLastStoreSyncTime] = useState(() => {
    const d = new Date();
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}`;
  });

  // Real-time fetch from official store API
  const fetchStoreSync = useCallback(async () => {
    setIsStoreSyncing(true);
    try {
      const res = await fetch('/api/goods');
      if (res.ok) {
        const data = await res.json();
        if (data && data.goods && Array.isArray(data.goods)) {
          // Merge official live catalog with existing goods
          // Map by handle or title
          const officialMap = new Map();
          data.goods.forEach(p => {
            if (p.handle) officialMap.set(p.handle, p);
            if (p.title) officialMap.set(p.title.trim(), p);
          });

          setCurrentGoods(prevGoods => {
            return prevGoods.map(item => {
              // Extract handle from productUrl if available
              let handle = null;
              if (item.productUrl && item.productUrl.includes('/products/')) {
                handle = item.productUrl.split('/products/')[1]?.split('?')[0];
              }
              const matched = (handle && officialMap.get(handle)) || officialMap.get(item.title.trim());
              if (matched) {
                return {
                  ...item,
                  productUrl: matched.productUrl || item.productUrl,
                  officialUrl: matched.productUrl || item.officialUrl,
                  status: matched.status || item.status,
                  statusLabel: matched.statusLabel || item.statusLabel,
                  statusBadgeColor: matched.statusBadgeColor || item.statusBadgeColor,
                  price: matched.price > 0 ? matched.price : item.price,
                  priceFormatted: matched.priceFormatted || item.priceFormatted
                };
              }
              return item;
            });
          });

          const d = new Date();
          setLastStoreSyncTime(`${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}`);
        }
      }
    } catch (e) {
      console.warn('Realtime store fetch error:', e);
    } finally {
      setIsStoreSyncing(false);
    }
  }, []);

  // Sync on mount and periodic 5-minute background refresh
  useEffect(() => {
    fetchStoreSync();
    const interval = setInterval(fetchStoreSync, 300000);
    return () => clearInterval(interval);
  }, [fetchStoreSync]);

  // Filters
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedMemberId, setSelectedMemberId] = useState(initialMemberFilter || 'ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [sortBy, setSortBy] = useState('featured'); // 'featured' | 'price-asc' | 'price-desc'

  // Modal state
  const [selectedGoods, setSelectedGoods] = useState(null);

  // Sync initialMemberFilter if passed from outside
  useEffect(() => {
    if (initialMemberFilter) {
      setSelectedMemberId(initialMemberFilter);
    }
  }, [initialMemberFilter]);

  // Filter members list based on selected branch for the talent selector bar
  const selectorMembers = useMemo(() => {
    if (selectedBranch === 'ALL') return members;
    return members.filter(m => m.branch === selectedBranch);
  }, [members, selectedBranch]);

  // Filtered goods computation
  const filteredGoods = useMemo(() => {
    return currentGoods.filter(item => {
      // 1. Branch filter
      if (selectedBranch !== 'ALL' && item.branch !== 'ALL' && item.branch !== selectedBranch) {
        return false;
      }

      // 2. Member filter
      if (selectedMemberId !== 'ALL' && item.memberId !== selectedMemberId) {
        return false;
      }

      // 3. Category filter
      if (selectedCategory !== 'ALL' && item.category !== selectedCategory) {
        return false;
      }

      // 4. Favorites filter
      if (showOnlyFavorites) {
        if (!item.memberId || !favorites.includes(item.memberId)) {
          return false;
        }
      }

      // 5. Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchMember = item.memberId && membersMap[item.memberId]?.name.toLowerCase().includes(q);
        const matchTag = item.tags && item.tags.some(t => t.toLowerCase().includes(q));
        if (!matchTitle && !matchMember && !matchTag) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'featured') {
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
      }
      return 0;
    });
  }, [currentGoods, selectedBranch, selectedMemberId, selectedCategory, showOnlyFavorites, searchQuery, sortBy, membersMap, favorites]);

  // Active filter count
  const hasActiveFilters = selectedCategory !== 'ALL' || selectedMemberId !== 'ALL' || showOnlyFavorites || searchQuery.trim() !== '' || selectedBranch !== 'ALL';

  const handleResetFilters = () => {
    setSelectedCategory('ALL');
    setSelectedMemberId('ALL');
    setSearchQuery('');
    setShowOnlyFavorites(false);
    setSelectedBranch('ALL');
  };

  const selectedMemberObj = selectedMemberId !== 'ALL' ? membersMap[selectedMemberId] : null;

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* ======================================================== */}
      {/* 1. Official Store Hero Banner */}
      {/* ======================================================== */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-700/80 bg-gradient-to-r from-[#0E1524] via-[#161226] to-[#120E22] p-6 sm:p-8 shadow-2xl">
        <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#FF4687]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#00F0FF]/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4687]/20 border border-[#FF4687]/40 text-[#FF4687] text-xs font-black tracking-wider uppercase">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>VSPO! OFFICIAL STORE CATALOG</span>
              </div>

              {/* Real-time Status Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-[11px] font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>公式ストア在庫 リアルタイム同期中</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-gaming tracking-wide">
              ぶいすぽっ！ 公式グッズストア
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              JP 25名・EN 7名の全32名の公式グッズを網羅！定番のアクリルスタンドから生誕記念セット、マウスパッド、ボイスまで、気になるグッズを押すと実際の公式ストア（<strong>store.vspo.jp</strong>）の個別商品ページへ直接ジャンプしてお買い求めいただけます。
            </p>

            {/* Real-time Sync Details & Manual Refresh */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1 font-mono">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>最終在庫確認: {lastStoreSyncTime}</span>
              </span>
              <span>•</span>
              <button
                onClick={fetchStoreSync}
                disabled={isStoreSyncing}
                className="inline-flex items-center gap-1.5 text-xs text-[#00F0FF] hover:text-[#38E8FF] font-bold hover:underline disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isStoreSyncing ? 'animate-spin' : ''}`} />
                <span>{isStoreSyncing ? '在庫更新中...' : '最新在庫を再確認'}</span>
              </button>
            </div>
          </div>

          {/* Jump to Real store.vspo.jp Button */}
          <div className="shrink-0 flex flex-col items-start md:items-end gap-2">
            <a
              href="https://store.vspo.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#FF4687] to-[#FF6EA2] hover:brightness-110 active:scale-95 text-white px-5 py-3 rounded-2xl font-black text-sm shadow-xl shadow-pink-950/50 hover:shadow-glow-pink transition-all"
            >
              <ShoppingBag className="w-4 h-4 fill-white" />
              <span>公式オンラインストアへ行く</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <span className="text-[11px] text-slate-400 font-mono">
              URL: store.vspo.jp (オフィシャル正規品)
            </span>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. Interactive Control Bar (Search, Branch, Favorites) */}
      {/* ======================================================== */}
      <div className="bg-[#0E1524] rounded-2xl border border-slate-800 p-4 sm:p-5 shadow-xl space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="グッズ名、タレント名、キーワードで検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#141C2B] text-slate-100 placeholder-slate-500 pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm border border-slate-700/80 focus:outline-none focus:border-[#FF4687] transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Filters: Branch, Only Favorites, Sort */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs">
            {/* Branch Filter */}
            <div className="bg-[#121927] p-1 rounded-xl border border-slate-700/80 flex items-center gap-1">
              <button
                onClick={() => {
                  setSelectedBranch('ALL');
                  setSelectedMemberId('ALL');
                }}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  selectedBranch === 'ALL'
                    ? 'bg-gradient-to-r from-[#FF4687] to-[#FF6EA2] text-white shadow-sm font-black'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                全員
              </button>
              <button
                onClick={() => {
                  setSelectedBranch('JP');
                  if (selectedMemberObj && selectedMemberObj.branch !== 'JP') {
                    setSelectedMemberId('ALL');
                  }
                }}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  selectedBranch === 'JP'
                    ? 'bg-[#FF4687] text-white shadow-sm font-black'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                JP ぶいすぽっ！
              </button>
              <button
                onClick={() => {
                  setSelectedBranch('EN');
                  if (selectedMemberObj && selectedMemberObj.branch !== 'EN') {
                    setSelectedMemberId('ALL');
                  }
                }}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  selectedBranch === 'EN'
                    ? 'bg-[#00F0FF] text-[#090D14] shadow-sm font-black'
                    : 'text-[#00F0FF] hover:bg-[#00F0FF]/10'
                }`}
              >
                VSPO! EN
              </button>
            </div>

            {/* Favorite Filter Toggle */}
            <button
              onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl font-bold border transition-all ${
                showOnlyFavorites
                  ? 'bg-amber-400/20 text-amber-300 border-amber-400/60 shadow-sm'
                  : 'bg-[#121927] text-slate-300 border-slate-700/80 hover:text-white'
              }`}
            >
              <Star className={`w-3.5 h-3.5 ${showOnlyFavorites ? 'fill-amber-400 text-amber-400' : 'text-slate-400'}`} />
              <span>推しグッズのみ</span>
              {favorites.length > 0 && (
                <span className="bg-amber-400 text-black text-[10px] font-black px-1.5 rounded-full">
                  {favorites.length}
                </span>
              )}
            </button>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#121927] text-slate-200 border border-slate-700/80 rounded-xl px-3 py-2 font-medium focus:outline-none focus:border-[#00F0FF] cursor-pointer"
            >
              <option value="featured">おすすめ順</option>
              <option value="price-asc">価格が安い順</option>
              <option value="price-desc">価格が高い順</option>
            </select>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 3. Talent Selector Strip (Requested: Filter by Talent) */}
        {/* ======================================================== */}
        <div className="pt-3 border-t border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400 font-bold flex items-center gap-1.5">
              <span>タレントで絞り込み:</span>
              {selectedMemberObj && (
                <span className="text-white font-black bg-[#FF4687]/20 text-[#FF4687] px-2 py-0.5 rounded border border-[#FF4687]/40">
                  {selectedMemberObj.name}
                </span>
              )}
            </span>

            {selectedMemberId !== 'ALL' && (
              <button
                onClick={() => setSelectedMemberId('ALL')}
                className="text-[11px] text-[#00F0FF] hover:underline font-bold flex items-center gap-1"
              >
                <X className="w-3 h-3" />
                <span>タレント絞り込みを解除 (全員表示)</span>
              </button>
            )}
          </div>

          {/* Horizontally scrollable Talent Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 custom-scrollbar">
            {/* "All Talents" chip */}
            <button
              onClick={() => setSelectedMemberId('ALL')}
              className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedMemberId === 'ALL'
                  ? 'bg-gradient-to-r from-[#FF4687] to-[#FF6EA2] text-white shadow-md font-black scale-105'
                  : 'bg-[#141C2B] text-slate-400 hover:text-white border border-slate-700/60'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>全タレント ({selectorMembers.length})</span>
            </button>

            {/* Individual member chips with official avatar */}
            {selectorMembers.map(m => {
              const isSelected = selectedMemberId === m.id;
              const isFav = favorites.includes(m.id);
              return (
                <button
                  key={m.id}
                  onClick={() => setSelectedMemberId(isSelected ? 'ALL' : m.id)}
                  className={`shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold transition-all border ${
                    isSelected
                      ? 'bg-white text-slate-950 border-white shadow-md scale-105 font-black ring-2 ring-[#FF4687]'
                      : 'bg-[#141C2B] text-slate-300 hover:text-white border-slate-700/60 hover:border-slate-500'
                  }`}
                >
                  <img src={m.avatar} alt={m.name} className="w-4 h-4 rounded-full object-cover" />
                  <span>{m.name}</span>
                  {isFav && <Star className="w-3 h-3 fill-amber-400 text-amber-400" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* 4. Category Tabs */}
        {/* ======================================================== */}
        <div className="pt-2 border-t border-slate-800 flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <button
            onClick={() => setSelectedCategory('ALL')}
            className={`shrink-0 px-3 py-1.5 rounded-lg font-bold transition-all ${
              selectedCategory === 'ALL'
                ? 'bg-[#1D283D] text-[#00F0FF] border border-[#00F0FF]/50 shadow-sm font-black'
                : 'text-slate-400 hover:text-white hover:bg-[#141C2B]'
            }`}
          >
            すべてのカテゴリ ({goods.length})
          </button>

          {GOODS_CATEGORIES.map(cat => {
            const count = goods.filter(g => g.category === cat.id).length;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`shrink-0 px-3 py-1.5 rounded-lg font-bold transition-all ${
                  isSelected
                    ? 'bg-[#1D283D] text-[#00F0FF] border border-[#00F0FF]/50 shadow-sm font-black'
                    : 'text-slate-400 hover:text-white hover:bg-[#141C2B]'
                }`}
              >
                <span>{cat.name}</span>
                <span className="text-[10px] ml-1 opacity-70">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ======================================================== */}
      {/* 5. Results Counter & Reset Action */}
      {/* ======================================================== */}
      <div className="flex items-center justify-between text-xs px-1">
        <div className="text-slate-400 font-medium flex items-center gap-2">
          <span>表示中のグッズ:</span>
          <span className="text-white font-black text-sm font-mono">{filteredGoods.length}</span>
          <span>点</span>
          {selectedMemberObj && (
            <span className="bg-[#141C2B] text-slate-300 px-2 py-0.5 rounded border border-slate-700">
              対象: {selectedMemberObj.name}
            </span>
          )}
        </div>

        {hasActiveFilters && (
          <button
            onClick={handleResetFilters}
            className="text-slate-400 hover:text-[#FF4687] flex items-center gap-1 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
            <span>絞り込みをすべてリセット</span>
          </button>
        )}
      </div>

      {/* ======================================================== */}
      {/* 6. Goods Grid Showcase */}
      {/* ======================================================== */}
      {filteredGoods.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
          {filteredGoods.map(item => {
            const memberObj = item.memberId ? membersMap[item.memberId] : null;
            return (
              <GoodsCard
                key={item.id}
                goods={item}
                member={memberObj}
                onSelectGoods={setSelectedGoods}
                onSelectMember={onSelectMember}
              />
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-[#0E1524] rounded-3xl border border-slate-800 space-y-4">
          <ShoppingBag className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="text-lg font-bold text-white">該当するグッズが見つかりませんでした</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            検索キーワードや絞り込み条件（タレント・カテゴリ・所属）を変更してお試しください。
          </p>
          <button
            onClick={handleResetFilters}
            className="bg-[#FF4687] text-white text-xs font-bold px-4 py-2 rounded-xl shadow-md hover:bg-[#FF6EA2] transition-colors"
          >
            条件をリセットして全グッズを表示
          </button>
        </div>
      )}

      {/* ======================================================== */}
      {/* 7. Goods Detail Modal */}
      {/* ======================================================== */}
      {selectedGoods && (
        <GoodsDetailModal
          goods={selectedGoods}
          member={selectedGoods.memberId ? membersMap[selectedGoods.memberId] : null}
          allGoods={goods}
          onClose={() => setSelectedGoods(null)}
          onSelectGoods={setSelectedGoods}
          onSelectMember={onSelectMember}
        />
      )}
    </div>
  );
}
