import React, { useState } from 'react';
import { Search, Star, ExternalLink, Play, Globe, Gamepad2, ArrowRight } from 'lucide-react';

export default function TalentsView({ 
  members, 
  selectedBranch, 
  setSelectedBranch, 
  onSelectMember, 
  favorites, 
  onToggleFavorite 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('ALL');

  // Filter members
  const filteredMembers = members.filter(member => {
    // Branch filter
    if (selectedBranch !== 'ALL' && member.branch !== selectedBranch) {
      return false;
    }
    // Unit filter
    if (selectedUnit !== 'ALL' && member.unit !== selectedUnit) {
      return false;
    }
    // Search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = member.name.toLowerCase().includes(q);
      const matchJp = member.jpName && member.jpName.toLowerCase().includes(q);
      const matchEn = member.enName && member.enName.toLowerCase().includes(q);
      const matchGame = member.mainGames.some(g => g.toLowerCase().includes(q));
      if (!matchName && !matchJp && !matchEn && !matchGame) return false;
    }
    return true;
  });

  // Extract units
  const units = ['ALL', ...new Set(members.map(m => m.unit))];

  return (
    <div className="space-y-6">
      {/* Top Banner & Control Bar */}
      <div className="bg-[#0E1522] rounded-2xl border border-slate-800 p-5 sm:p-6 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white font-gaming tracking-wide flex items-center gap-2">
              <span>TALENTS & ARCHIVES</span>
              <span className="text-xs bg-[#FF4687]/20 text-[#FF4687] px-2 py-0.5 rounded font-bold border border-[#FF4687]/40">
                メンバー一覧＆過去5回アーカイブ
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              気になるメンバーをクリックすると、プロフィールと<strong>直近過去5回分の配信動画</strong>をまとめてチェック・視聴できます。
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="メンバー名やゲーム名で検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#151E2E] text-slate-100 placeholder-slate-500 pl-9 pr-4 py-2 rounded-xl text-xs border border-slate-700/80 focus:outline-none focus:border-[#00F0FF] transition-colors"
            />
          </div>
        </div>

        {/* Filters: Branch & Units */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800/80 text-xs">
          {/* Branch Filter */}
          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-bold">所属:</span>
            <div className="flex items-center gap-1.5 bg-[#141C2B] p-1 rounded-lg border border-slate-700/60">
              <button
                onClick={() => setSelectedBranch('ALL')}
                className={`px-3 py-1 rounded text-xs font-bold transition-all ${
                  selectedBranch === 'ALL'
                    ? 'bg-gradient-to-r from-[#FF4687] to-[#FF6EA2] text-white shadow-sm font-black'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                全員 ({members.length})
              </button>
              <button
                onClick={() => setSelectedBranch('JP')}
                className={`px-3 py-1 rounded text-xs font-bold transition-all flex items-center gap-1 ${
                  selectedBranch === 'JP'
                    ? 'bg-[#FF4687] text-white shadow-sm font-black'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>JP ぶいすぽっ！</span>
                <span>({members.filter(m => m.branch === 'JP').length})</span>
              </button>
              <button
                onClick={() => setSelectedBranch('EN')}
                className={`px-3 py-1 rounded text-xs font-bold transition-all flex items-center gap-1 ${
                  selectedBranch === 'EN'
                    ? 'bg-[#00F0FF] text-black shadow-sm font-black'
                    : 'text-[#00F0FF] hover:bg-[#00F0FF]/10'
                }`}
              >
                <span>VSPO! EN</span>
                <span>({members.filter(m => m.branch === 'EN').length})</span>
              </button>
            </div>
          </div>

          {/* Unit Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1">
            <span className="text-slate-400 font-bold shrink-0">ユニット:</span>
            {units.map(unit => (
              <button
                key={unit}
                onClick={() => setSelectedUnit(unit)}
                className={`shrink-0 px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                  selectedUnit === unit
                    ? 'bg-[#1F2C42] text-[#00F0FF] border border-[#00F0FF]/40'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-[#151E2E]'
                }`}
              >
                {unit === 'ALL' ? 'すべて' : unit}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Talents Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredMembers.map(member => {
          const isFav = favorites.includes(member.id);
          const recentStream = member.past5Streams && member.past5Streams[0];

          return (
            <div
              key={member.id}
              className="group bg-[#0D131E] rounded-xl border border-slate-800 hover:border-slate-700 overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-black/60"
            >
              <div>
                {/* Banner / Header with Official Branch Logo */}
                <div className="relative h-24 w-full overflow-hidden bg-gradient-to-r from-[#0A0E18] via-[#121A2B] to-[#150F22] flex items-center justify-center p-3 border-b border-slate-800">
                  <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
                  <div 
                    className="absolute inset-0 opacity-20 pointer-events-none blur-xl"
                    style={{ background: `radial-gradient(circle, ${member.color}, transparent 70%)` }}
                  />

                  <img 
                    src={member.banner || (member.branch === 'EN' ? '/logos/vspo-en.png' : '/logos/vspo-jp.png')} 
                    alt={member.branch === 'EN' ? 'VSPO! EN 公式ロゴ' : 'ぶいすぽっ！ 公式ロゴ'}
                    className="h-10 sm:h-12 max-w-[150px] object-contain filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-300 relative z-10"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = member.branch === 'EN'
                        ? 'https://vspo.jp/wp-content/themes/vspo/assets/images/common/logo-en.png'
                        : 'https://vspo.jp/wp-content/themes/vspo/assets/images/common/logo.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D131E] via-transparent to-transparent pointer-events-none" />

                  {/* Branch Pill */}
                  <span className={`absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-black uppercase z-20 ${
                    member.branch === 'EN' ? 'bg-[#00F0FF] text-black shadow-sm font-black' : 'bg-[#FF4687] text-white shadow-sm font-black'
                  }`}>
                    {member.branch}
                  </span>

                  {/* Favorite Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavorite(member.id);
                    }}
                    className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-black/60 hover:bg-black/90 transition-colors"
                    title={isFav ? '推しから解除' : '推しメンバーに追加'}
                  >
                    <Star className={`w-3.5 h-3.5 ${isFav ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
                  </button>
                </div>

                {/* Avatar and Basic Info */}
                <div className="px-4 pb-3 -mt-8 relative z-10">
                  <div className="flex items-end justify-between mb-2">
                    <div 
                      className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr shadow-lg cursor-pointer"
                      style={{ background: `linear-gradient(135deg, ${member.color}, #00F0FF)` }}
                      onClick={() => onSelectMember(member)}
                    >
                      <img 
                        src={member.avatar} 
                        alt={member.name}
                        className="w-full h-full object-cover object-[center_12%] rounded-full bg-slate-900 ring-2 ring-[#0D131E]" 
                      />
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 font-mono block">
                        登録者数
                      </span>
                      <span className="text-xs font-bold text-white font-mono">
                        {member.subscribers}
                      </span>
                    </div>
                  </div>

                  <div className="cursor-pointer" onClick={() => onSelectMember(member)}>
                    <h3 className="text-base font-black text-white group-hover:text-[#00F0FF] transition-colors">
                      {member.name}
                    </h3>
                    <div className="text-[11px] text-slate-400 font-medium">
                      {member.enName || member.jpName} • {member.unit}
                    </div>
                  </div>

                  {/* Main Games */}
                  <div className="flex flex-wrap gap-1 mt-3">
                    {member.mainGames.slice(0, 3).map((game, i) => (
                      <span key={i} className="text-[10px] font-semibold bg-[#151F2F] text-slate-300 px-2 py-0.5 rounded border border-slate-700/60">
                        {game}
                      </span>
                    ))}
                  </div>

                  {/* Latest Stream preview */}
                  {recentStream && (
                    <div 
                      className="mt-3 bg-[#111722] p-2 rounded-lg border border-slate-800/80 cursor-pointer hover:border-slate-700 transition-colors"
                      onClick={() => onSelectMember(member)}
                    >
                      <div className="text-[10px] text-slate-400 font-mono flex items-center justify-between mb-1">
                        <span>最新アーカイブ:</span>
                        <span>{recentStream.date.split(' ')[0]}</span>
                      </div>
                      <p className="text-xs text-slate-200 line-clamp-1 font-medium">
                        {recentStream.title}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="p-3 pt-0">
                <button
                  onClick={() => onSelectMember(member)}
                  className="w-full flex items-center justify-center gap-2 bg-[#FF4687] hover:bg-[#FF6EA2] text-white text-xs font-bold py-2.5 rounded-lg esports-clip-badge shadow-md shadow-pink-950/40 transition-all hover:scale-[1.02]"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>タレント詳細情報 ＆ 過去5回配信</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
