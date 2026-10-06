import React, { useState } from 'react';
import { 
  Star, 
  Play, 
  Calendar, 
  ExternalLink, 
  ArrowRight, 
  Heart, 
  Users, 
  Radio, 
  Plus, 
  Check, 
  Search, 
  Filter, 
  Sparkles,
  Eye,
  Trash2
} from 'lucide-react';
import StreamCard from './StreamCard';

export default function FavoritesView({
  favorites,
  members,
  membersMap,
  schedules,
  timezone,
  onToggleFavorite,
  onSelectStream,
  onSelectMember,
  onExploreTalents
}) {
  const [showManageModal, setShowManageModal] = useState(false);
  const [searchMemberQuery, setSearchMemberQuery] = useState('');
  const [manageBranchFilter, setManageBranchFilter] = useState('ALL');

  const favoriteMembers = members.filter(m => favorites.includes(m.id));
  const favoriteStreams = schedules.filter(s => favorites.includes(s.memberId));

  // Count live streams among favorites
  const liveFavoriteStreams = favoriteStreams.filter(s => s.status === 'live');
  const upcomingFavoriteStreams = favoriteStreams.filter(s => s.status === 'upcoming');

  // Filter members in the manage drawer
  const filteredAllMembers = members.filter(m => {
    if (manageBranchFilter !== 'ALL' && m.branch !== manageBranchFilter) return false;
    if (searchMemberQuery.trim() !== '') {
      const q = searchMemberQuery.toLowerCase();
      const matchName = m.name.toLowerCase().includes(q);
      const matchJp = m.jpName && m.jpName.toLowerCase().includes(q);
      const matchUnit = m.unit.toLowerCase().includes(q);
      if (!matchName && !matchJp && !matchUnit) return false;
    }
    return true;
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Bar with Stats & Quick Add Button */}
      <div className="bg-[#0E1522] rounded-2xl border border-slate-800 p-5 sm:p-6 shadow-xl relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-orange-500/20 text-amber-400 border border-amber-400/40 shadow-lg shadow-amber-950/40">
              <Star className="w-6 h-6 fill-amber-400" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white font-gaming tracking-wide flex items-center gap-2">
                <span>MY FAVORITES</span>
                <span className="text-xs bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded font-bold border border-amber-400/30">
                  推しタレント限定ポータル
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                お気に入りに登録したタレントの配信予定・LIVE通知・アーカイブをまとめてチェックできます。
              </p>
            </div>
          </div>

          {/* Quick Action: Manage Favorites Drawer Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowManageModal(!showManageModal)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs px-4 py-2.5 rounded-xl shadow-lg shadow-amber-950/50 transition-all hover:scale-105"
            >
              <Plus className="w-4 h-4" />
              <span>推しメンバーを追加・管理</span>
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mt-5 pt-4 border-t border-slate-800/80">
          <div className="bg-[#141C2B] p-2.5 sm:p-3 rounded-xl border border-slate-700/60 text-center">
            <span className="text-[11px] text-slate-400 block font-semibold">登録推し人数</span>
            <span className="text-lg sm:text-xl font-black text-amber-400 font-mono">
              {favoriteMembers.length} 名
            </span>
          </div>

          <div className="bg-[#141C2B] p-2.5 sm:p-3 rounded-xl border border-slate-700/60 text-center">
            <span className="text-[11px] text-slate-400 block font-semibold">現在配信中</span>
            <span className="text-lg sm:text-xl font-black text-red-400 font-mono flex items-center justify-center gap-1">
              {liveFavoriteStreams.length > 0 && <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />}
              {liveFavoriteStreams.length} 枠
            </span>
          </div>

          <div className="bg-[#141C2B] p-2.5 sm:p-3 rounded-xl border border-slate-700/60 text-center">
            <span className="text-[11px] text-slate-400 block font-semibold">今後の配信予定</span>
            <span className="text-lg sm:text-xl font-black text-[#00F0FF] font-mono">
              {upcomingFavoriteStreams.length} 枠
            </span>
          </div>
        </div>
      </div>

      {/* Quick Add / Manage Modal or Drawer (Collapsible) */}
      {showManageModal && (
        <div className="bg-[#0D1420] rounded-2xl border-2 border-amber-500/50 p-5 shadow-2xl animate-fadeIn space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
            <div>
              <h3 className="text-sm font-black text-white font-gaming flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>推しタレントの登録・一括管理</span>
              </h3>
              <p className="text-[11px] text-slate-400">
                カードをクリックすると「★ 推し登録」をオン/オフできます（ブラウザに自動保存されます）。
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-[#151E2E] p-1 rounded-lg border border-slate-700/60 text-xs">
                <button
                  onClick={() => setManageBranchFilter('ALL')}
                  className={`px-2.5 py-1 rounded font-bold ${manageBranchFilter === 'ALL' ? 'bg-[#FF4687] text-white' : 'text-slate-400'}`}
                >
                  全員
                </button>
                <button
                  onClick={() => setManageBranchFilter('JP')}
                  className={`px-2.5 py-1 rounded font-bold ${manageBranchFilter === 'JP' ? 'bg-[#FF4687] text-white' : 'text-slate-400'}`}
                >
                  JP
                </button>
                <button
                  onClick={() => setManageBranchFilter('EN')}
                  className={`px-2.5 py-1 rounded font-bold ${manageBranchFilter === 'EN' ? 'bg-[#00F0FF] text-black' : 'text-[#00F0FF]'}`}
                >
                  EN
                </button>
              </div>

              <button
                onClick={() => setShowManageModal(false)}
                className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg font-bold"
              >
                閉じる
              </button>
            </div>
          </div>

          {/* Quick Selector Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2.5 max-h-72 overflow-y-auto p-1">
            {filteredAllMembers.map(m => {
              const isFav = favorites.includes(m.id);
              return (
                <button
                  key={m.id}
                  onClick={() => onToggleFavorite(m.id)}
                  className={`p-2 rounded-xl border text-center transition-all flex flex-col items-center justify-between ${
                    isFav
                      ? 'bg-amber-500/15 border-amber-400 text-white shadow-md shadow-amber-950/40 ring-1 ring-amber-400/50'
                      : 'bg-[#121A28] border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <div className="relative mb-1.5">
                    <img 
                      src={m.avatar} 
                      alt={m.name}
                      className="w-10 h-10 rounded-full object-cover object-[center_12%] bg-slate-900 ring-2 ring-[#0D131E]" 
                    />
                    <span className={`absolute -top-1 -right-1 p-0.5 rounded-full ${isFav ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-500'}`}>
                      <Star className={`w-2.5 h-2.5 ${isFav ? 'fill-slate-950' : ''}`} />
                    </span>
                  </div>

                  <span className="text-[11px] font-bold truncate max-w-full">
                    {m.name}
                  </span>
                  <span className={`text-[9px] font-extrabold uppercase px-1 rounded mt-0.5 ${
                    isFav ? 'text-amber-300 font-bold' : 'text-slate-500'
                  }`}>
                    {isFav ? '推し登録中' : '+ 追加'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Empty State when no favorites */}
      {favoriteMembers.length === 0 ? (
        <div className="bg-[#0E1522] rounded-2xl border border-slate-800 p-12 text-center my-6 max-w-2xl mx-auto shadow-xl">
          <div className="w-16 h-16 mx-auto rounded-full bg-amber-400/10 flex items-center justify-center text-amber-400 mb-4 border border-amber-400/30">
            <Star className="w-8 h-8 fill-amber-400" />
          </div>
          <h3 className="text-lg sm:text-xl font-black text-white mb-2 font-gaming">
            推しメンバーがまだ登録されていません
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
            上の「推しメンバーを追加・管理」ボタンや、各メンバー・配信カードの「★」マークをクリックすると、
            推しメンバーとして保存されます。推しのスケジュールや直近アーカイブだけを快適に追うことができます！
          </p>
          <button
            onClick={() => setShowManageModal(true)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg shadow-amber-950/50 transition-all hover:scale-105"
          >
            <Plus className="w-4 h-4" />
            <span>今すぐ推しメンバーを登録する</span>
          </button>
        </div>
      ) : (
        <>
          {/* Section 1: Favorite Talents Cards Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-400" />
                <h3 className="text-base sm:text-lg font-black text-white font-gaming">
                  登録推しタレント一覧 ({favoriteMembers.length}名)
                </h3>
              </div>
              <span className="text-xs text-slate-400">
                カードをクリックすると詳細プロフィールへジャンプ
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {favoriteMembers.map(member => {
                const memberLive = schedules.find(s => s.memberId === member.id && s.status === 'live');
                const memberUpcoming = schedules.find(s => s.memberId === member.id && s.status === 'upcoming');

                return (
                  <div
                    key={member.id}
                    onClick={() => onSelectMember(member)}
                    className="group cursor-pointer bg-[#0D131E] hover:bg-[#141C2C] border border-slate-800 hover:border-amber-400/60 p-4 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-glow-orange flex flex-col justify-between relative hover:-translate-y-1"
                  >
                    {/* Un-favorite button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(member.id);
                      }}
                      className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 hover:bg-black text-amber-400 hover:text-red-400 transition-colors z-10"
                      title="推しから解除"
                    >
                      <Star className="w-4 h-4 fill-amber-400 hover:fill-none" />
                    </button>

                    <div>
                      {/* Top: Avatar & Live Status */}
                      <div className="flex items-center gap-3.5 mb-3">
                        <div 
                          className="w-14 h-14 rounded-full p-[2px] shadow-lg shrink-0 relative group-hover:scale-105 transition-transform"
                          style={{ background: `linear-gradient(135deg, ${member.color}, #FFB800)` }}
                        >
                          <img 
                            src={member.avatar} 
                            alt={member.name}
                            className="w-full h-full object-cover object-[center_12%] rounded-full bg-slate-900" 
                          />
                          {memberLive && (
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-red-600 text-[8px] font-black text-white px-1.5 py-0.2 rounded-full uppercase tracking-wider animate-pulse">
                              LIVE
                            </span>
                          )}
                        </div>

                        <div className="min-w-0 pr-6">
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className="text-sm font-black text-white group-hover:text-amber-400 transition-colors truncate">
                              {member.name}
                            </span>
                            <span className={`text-[9px] font-black px-1 rounded uppercase ${
                              member.branch === 'EN' ? 'bg-[#00F0FF]/20 text-[#00F0FF]' : 'bg-[#FF4687]/20 text-[#FF4687]'
                            }`}>
                              {member.branch}
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-400 truncate">
                            {member.unit}
                          </div>
                        </div>
                      </div>

                      {/* Stream Status Info */}
                      <div className="bg-[#121927] p-2.5 rounded-xl border border-slate-800/80 mb-3 text-xs">
                        {memberLive ? (
                          <div className="flex items-center gap-1.5 text-red-400 font-bold">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                            <span className="truncate">配信中: {memberLive.title}</span>
                          </div>
                        ) : memberUpcoming ? (
                          <div className="text-slate-300">
                            <span className="text-amber-400 font-bold mr-1">次回予定:</span>
                            <span>{memberUpcoming.date.split('-').slice(1).join('/')} {memberUpcoming.time}〜</span>
                          </div>
                        ) : (
                          <div className="text-slate-400">
                            直近アーカイブ 5件あり
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Bottom Action Links */}
                    <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-800 text-xs">
                      <span className="text-[11px] font-bold text-[#00F0FF] group-hover:underline flex items-center gap-0.5">
                        <span>プロフィール ＆ 5件動画</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>

                      <span className="text-[10px] text-slate-400 font-mono">
                        {member.subscribers}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 2: Schedules for Favorite Talents Only */}
          <div className="space-y-4 pt-4 border-t border-slate-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#FF4687]" />
                <h3 className="text-base sm:text-lg font-black text-white font-gaming">
                  推しメンバーの配信スケジュール ({favoriteStreams.length}枠)
                </h3>
              </div>
              <span className="text-xs text-slate-400">
                お気に入りタレント限定の配信枠一覧
              </span>
            </div>

            {favoriteStreams.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {favoriteStreams.map(stream => {
                  const member = membersMap[stream.memberId];
                  return (
                    <StreamCard
                      key={stream.id}
                      stream={stream}
                      member={member}
                      membersMap={membersMap}
                      timezone={timezone}
                      isFavorite={true}
                      onToggleFavorite={onToggleFavorite}
                      onSelectStream={onSelectStream}
                      onSelectMember={onSelectMember}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="bg-[#0E1522] rounded-xl border border-slate-800 p-8 text-center text-slate-400 text-xs">
                現在、推しメンバーの直近配信予定はありません。
              </div>
            )}
          </div>

          {/* Section 3: Recent Archives from Favorite Talents */}
          <div className="space-y-4 pt-4 border-t border-slate-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                <h3 className="text-base sm:text-lg font-black text-white font-gaming">
                  推しメンバーの最新アーカイブ (VOD)
                </h3>
              </div>
              <span className="text-xs text-slate-400">
                見逃した過去配信をチェック
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {favoriteMembers.flatMap(m => (m.past5Streams ? m.past5Streams.slice(0, 2).map(v => ({ ...v, member: m })) : [])).map((vod, idx) => (
                <div
                  key={`${vod.member.id}-${vod.id}-${idx}`}
                  className="bg-[#0D1420] hover:bg-[#151E2E] border border-slate-800 hover:border-slate-700 p-3 rounded-xl transition-all flex items-center gap-3 shadow-md group"
                >
                  <div className="relative w-24 aspect-video rounded-lg overflow-hidden shrink-0 bg-slate-900">
                    <img 
                      src={vod.thumbnail} 
                      alt={vod.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                    />
                    <span className="absolute bottom-1 right-1 bg-black/80 text-[8px] font-mono text-slate-200 px-1 rounded">
                      {vod.duration}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-[10px] font-bold text-amber-400 truncate">
                        {vod.member.name}
                      </span>
                      <span className="text-[9px] bg-[#162133] text-slate-400 px-1.5 rounded">
                        {vod.game}
                      </span>
                    </div>

                    <h4 className="text-xs font-semibold text-slate-200 line-clamp-1 group-hover:text-white mb-2">
                      {vod.title}
                    </h4>

                    <a
                      href={vod.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-[#FF4687] hover:bg-[#FF6EA2] text-white text-[10px] font-bold px-2.5 py-1 rounded esports-clip-badge transition-colors shadow-sm"
                    >
                      <Play className="w-2.5 h-2.5 fill-white" />
                      <span>再生</span>
                      <ExternalLink className="w-2.5 h-2.5 opacity-80" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
