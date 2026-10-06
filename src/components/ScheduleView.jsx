import React, { useState } from 'react';
import { Calendar, Search, Filter, Radio, Clock, CheckCircle2, Star, Sparkles, RefreshCw, Users, Activity } from 'lucide-react';
import StreamCard from './StreamCard';
import { getRelativeJSTDateString, getRelativeJSTDateLabel } from '../utils/realtimeDate.js';

export default function ScheduleView({
  schedules,
  members,
  membersMap,
  selectedBranch,
  setSelectedBranch,
  timezone,
  favorites,
  onToggleFavorite,
  onSelectStream,
  onSelectMember,
  showOnlyFavorites,
  setShowOnlyFavorites,
  onRefreshSchedules,
  isRefreshing,
  hasYoutubeKey,
  isYoutubeSyncActive,
  onOpenYoutubeModal,
  autoSyncCountdown = 60,
  lastSyncTime = ''
}) {
  // Date tab: 'today' | 'yesterday' | 'tomorrow' | 'week'
  const [selectedDateTab, setSelectedDateTab] = useState('today');
  // Status filter: 'all' | 'live' | 'upcoming' | 'ended'
  const [statusFilter, setStatusFilter] = useState('all');
  // Game filter
  const [selectedGame, setSelectedGame] = useState('ALL');
  // Search text
  const [searchQuery, setSearchQuery] = useState('');

  // Dynamically computed real-time dates based on current JST
  const yesterdayDateStr = getRelativeJSTDateString(-1);
  const todayDateStr = getRelativeJSTDateString(0);
  const tomorrowDateStr = getRelativeJSTDateString(1);

  const yesterdayLabel = getRelativeJSTDateLabel(-1);
  const todayLabel = getRelativeJSTDateLabel(0);
  const tomorrowLabel = getRelativeJSTDateLabel(1);

  const dateMapping = {
    yesterday: yesterdayDateStr,
    today: todayDateStr,
    tomorrow: tomorrowDateStr,
  };

  // Filter streams
  const filteredStreams = schedules.filter(stream => {
    const member = membersMap[stream.memberId];
    if (!member) return false;

    // Date filter
    if (selectedDateTab === 'week') {
      if ([yesterdayDateStr, todayDateStr, tomorrowDateStr].includes(stream.date)) return false;
    } else {
      const targetDate = dateMapping[selectedDateTab];
      if (stream.date !== targetDate) return false;
    }

    // Branch filter
    if (selectedBranch !== 'ALL' && member.branch !== selectedBranch) {
      return false;
    }

    // Favorites only filter
    if (showOnlyFavorites && !favorites.includes(member.id)) {
      return false;
    }

    // Status filter
    if (statusFilter !== 'all' && stream.status !== statusFilter) {
      return false;
    }

    // Game filter
    if (selectedGame !== 'ALL' && !stream.game.toLowerCase().includes(selectedGame.toLowerCase())) {
      return false;
    }

    // Search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = stream.title.toLowerCase().includes(q);
      const matchMember = member.name.toLowerCase().includes(q) || (member.enName && member.enName.toLowerCase().includes(q));
      const matchGame = stream.game.toLowerCase().includes(q);
      if (!matchTitle && !matchMember && !matchGame) return false;
    }

    return true;
  });

  // Sort streams: Live first, then chronological by time
  const sortedStreams = [...filteredStreams].sort((a, b) => {
    if (a.status === 'live' && b.status !== 'live') return -1;
    if (b.status === 'live' && a.status !== 'live') return 1;
    return a.time.localeCompare(b.time);
  });

  // Games list for pill filters
  const gameFilters = [
    'ALL',
    'VALORANT',
    'Apex',
    'Street Fighter',
    'Overwatch',
    'Minecraft',
    '歌枠',
    '雑談'
  ];

  return (
    <div className="space-y-6">
      {/* Unified VSPO! Project Banner (Equal presentation of all talents JP & EN) */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-r from-[#0A0F19] via-[#121A2B] to-[#150F22] p-5 sm:p-6 shadow-xl">
        <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#FF4687]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#00F0FF]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            {/* Logos for JP & EN side-by-side */}
            <div className="flex items-center gap-3 shrink-0 bg-black/40 px-3 py-1.5 rounded-xl border border-slate-700/60 backdrop-blur-sm">
              <img 
                src="/logos/vspo-jp.png" 
                alt="ぶいすぽっ！ 公式ロゴ"
                className="h-8 sm:h-9 object-contain filter drop-shadow-[0_0_10px_rgba(255,70,135,0.4)]"
                onError={(e) => {
                  e.currentTarget.src = "https://vspo.jp/wp-content/themes/vspo/assets/images/common/logo.png";
                }}
              />
              <span className="text-slate-600 font-light text-lg">/</span>
              <img 
                src="/logos/vspo-en.png" 
                alt="VSPO! EN 公式ロゴ"
                className="h-8 sm:h-9 object-contain filter drop-shadow-[0_0_10px_rgba(0,240,255,0.4)]"
                onError={(e) => {
                  e.currentTarget.src = "https://vspo.jp/wp-content/themes/vspo/assets/images/common/logo-en.png";
                }}
              />
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-black text-white font-gaming tracking-wide flex items-center justify-center sm:justify-start gap-2">
                <span>VIRTUAL ESPORTS PROJECT TIMETABLE</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                ぶいすぽっ！＆ VSPO! EN 所属タレント（全{members.length}名）の配信予定・LIVE・アーカイブをリアルタイム集約
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold">
            <span className="bg-[#FF4687]/15 text-[#FF4687] px-2.5 py-1 rounded-lg border border-[#FF4687]/30">
              JP {members.filter(m => m.branch === 'JP').length}名
            </span>
            <span className="bg-[#00F0FF]/15 text-[#00F0FF] px-2.5 py-1 rounded-lg border border-[#00F0FF]/30">
              EN {members.filter(m => m.branch === 'EN').length}名
            </span>
            <span className="text-slate-400 font-mono">
              全{members.length}名
            </span>
          </div>
        </div>
      </div>

      {/* Control Bar: Date Switcher & Holodule Tabs */}
      <div className="bg-[#0E1522] rounded-2xl border border-slate-800 p-4 sm:p-5 shadow-xl">
        {/* Top: Date Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <button
              onClick={() => setSelectedDateTab('yesterday')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
                selectedDateTab === 'yesterday'
                  ? 'bg-[#1E293B] text-slate-100 border border-slate-600 shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              昨日 ({yesterdayLabel})
            </button>

            <button
              onClick={() => setSelectedDateTab('today')}
              className={`relative px-5 py-2 rounded-xl text-xs sm:text-sm font-black transition-all shrink-0 flex items-center gap-1.5 ${
                selectedDateTab === 'today'
                  ? 'bg-gradient-to-r from-[#FF4687] to-[#FF6EA2] text-white shadow-lg shadow-pink-950/60 scale-105'
                  : 'text-slate-300 hover:text-white bg-[#162032] border border-slate-700/60'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span>今日 ({todayLabel})</span>
              <span className="text-[10px] bg-black/30 px-1.5 py-0.2 rounded font-mono">TODAY</span>
            </button>

            <button
              onClick={() => setSelectedDateTab('tomorrow')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
                selectedDateTab === 'tomorrow'
                  ? 'bg-[#1E293B] text-slate-100 border border-slate-600 shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              明日 ({tomorrowLabel})
            </button>

            <button
              onClick={() => setSelectedDateTab('week')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
                selectedDateTab === 'week'
                  ? 'bg-[#1E293B] text-slate-100 border border-slate-600 shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              週間予定
            </button>
          </div>

          {/* Right: Live Sync Indicator & Manual Refresh & Search Input */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Realtime Live Indicator with 60s Countdown & Manual Refresh */}
            <div className="flex items-center gap-2 bg-[#141C2B] px-3 py-1.5 rounded-xl border border-slate-700/60 text-xs shadow-sm">
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="hidden sm:inline">毎分自動更新中</span>
                <span className="font-mono text-emerald-300 text-[11px] bg-emerald-950/60 px-1.5 py-0.2 rounded border border-emerald-500/30">
                  {autoSyncCountdown}s
                </span>
              </span>

              {onRefreshSchedules && (
                <button
                  onClick={onRefreshSchedules}
                  disabled={isRefreshing}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/60 transition-colors disabled:opacity-50 ml-0.5"
                  title="スケジュールを手動更新（今すぐ同期）"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-[#00F0FF]' : ''}`} />
                </button>
              )}
            </div>

            {/* Search Input */}
            <div className="relative flex-1 md:w-56">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="タイトルやメンバー名で検索..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#151E2E] text-slate-100 placeholder-slate-500 pl-9 pr-4 py-2 rounded-xl text-xs border border-slate-700/80 focus:outline-none focus:border-[#00F0FF] transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Bottom: Status & Game Filters */}
        <div className="pt-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4 text-xs">
          {/* Status Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0">
            <span className="text-slate-400 font-bold shrink-0 mr-1">状態:</span>
            
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-3 py-1 rounded-lg font-bold transition-colors shrink-0 ${
                statusFilter === 'all'
                  ? 'bg-[#1F2C42] text-[#00F0FF] border border-[#00F0FF]/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              すべて ({schedules.filter(s => {
                const targetDate = dateMapping[selectedDateTab];
                return selectedDateTab === 'week' ? !['2026-10-02', '2026-10-03', '2026-10-04'].includes(s.date) : s.date === targetDate;
              }).length})
            </button>

            <button
              onClick={() => setStatusFilter('live')}
              className={`px-3 py-1 rounded-lg font-bold transition-colors shrink-0 flex items-center gap-1 ${
                statusFilter === 'live'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-red-400'
              }`}
            >
              <Radio className="w-3 h-3 animate-pulse" />
              <span>配信中</span>
            </button>

            <button
              onClick={() => setStatusFilter('upcoming')}
              className={`px-3 py-1 rounded-lg font-bold transition-colors shrink-0 flex items-center gap-1 ${
                statusFilter === 'upcoming'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-amber-400'
              }`}
            >
              <Clock className="w-3 h-3" />
              <span>配信予定</span>
            </button>

            <button
              onClick={() => setStatusFilter('ended')}
              className={`px-3 py-1 rounded-lg font-bold transition-colors shrink-0 flex items-center gap-1 ${
                statusFilter === 'ended'
                  ? 'bg-slate-700 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-300'
              }`}
            >
              <CheckCircle2 className="w-3 h-3" />
              <span>アーカイブ</span>
            </button>

            {/* Favorite toggle */}
            <button
              onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
              className={`ml-2 px-3 py-1 rounded-lg font-bold transition-all shrink-0 flex items-center gap-1.5 border shadow-sm ${
                showOnlyFavorites
                  ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-amber-950/40 ring-2 ring-amber-400/50'
                  : 'text-amber-400 bg-amber-400/10 border-amber-400/30 hover:bg-amber-400/20'
              }`}
            >
              <Star className={`w-3.5 h-3.5 ${showOnlyFavorites ? 'fill-slate-950' : 'fill-amber-400'}`} />
              <span>★ 推しメンバーのみ ({favorites.length})</span>
            </button>
          </div>

          {/* Game Tag Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0">
            <span className="text-slate-400 font-bold shrink-0 mr-1">ゲーム:</span>
            {gameFilters.map(game => (
              <button
                key={game}
                onClick={() => setSelectedGame(game)}
                className={`shrink-0 px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                  selectedGame === game
                    ? 'bg-[#FF4687]/20 text-[#FF4687] border border-[#FF4687]/40'
                    : 'text-slate-400 hover:text-slate-200 bg-[#141C2B] hover:bg-[#1A2538]'
                }`}
              >
                {game === 'ALL' ? '全タイトル' : game}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stream Cards Grid */}
      {sortedStreams.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {sortedStreams.map(stream => {
            const member = membersMap[stream.memberId];
            const isFav = favorites.includes(member?.id);

            return (
              <StreamCard
                key={stream.id}
                stream={stream}
                member={member}
                membersMap={membersMap}
                timezone={timezone}
                isFavorite={isFav}
                onToggleFavorite={onToggleFavorite}
                onSelectStream={onSelectStream}
                onSelectMember={onSelectMember}
              />
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-[#0E1522] rounded-2xl border border-slate-800 p-8 sm:p-12 text-center my-6">
          <div className="w-16 h-16 mx-auto rounded-full bg-slate-800/80 flex items-center justify-center text-slate-500 mb-4">
            <Filter className="w-8 h-8 text-[#FF4687]" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white mb-2 font-gaming">
            {showOnlyFavorites 
              ? `推しメンバー（${favorites.length}名）の配信予定がありません` 
              : '該当する配信予定が見つかりませんでした'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto mb-5">
            {showOnlyFavorites 
              ? '選択中の日付には、推しメンバーの配信予定がありません。「全員の配信を表示」ボタンを押すと、すべてのタレントの配信予定（全件）を確認できます。'
              : '選択中の日付、所属ブランチ（JP/EN）、状態フィルターなどの設定を見直してみてください。'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {showOnlyFavorites && (
              <button
                onClick={() => setShowOnlyFavorites(false)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-xs font-black px-4 py-2.5 rounded-xl transition-all shadow-md shadow-amber-950/40 hover:scale-105"
              >
                <Star className="w-4 h-4 fill-slate-950" />
                <span>全員の配信を表示する (推しフィルター解除)</span>
              </button>
            )}

            <button
              onClick={() => {
                setSelectedDateTab('today');
                setSelectedBranch('ALL');
                setStatusFilter('all');
                setSelectedGame('ALL');
                setSearchQuery('');
                setShowOnlyFavorites(false);
              }}
              className="inline-flex items-center gap-2 bg-[#FF4687] hover:bg-[#FF6EA2] text-white text-xs font-bold px-4 py-2.5 rounded-xl esports-clip-badge transition-colors shadow-md shadow-pink-950/40"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>すべてのフィルターをリセットする</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
