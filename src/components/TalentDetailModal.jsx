import React from 'react';
import { X, ExternalLink, Play, Star, Calendar, Trophy, Gamepad2, Users, ArrowLeft } from 'lucide-react';
import { YoutubeIcon, TwitchIcon, TwitterIcon } from './Icons';
import { formatTimeInTimezone } from '../utils/timezone';

export default function TalentDetailModal({ 
  member, 
  onClose, 
  isFavorite, 
  onToggleFavorite, 
  upcomingStreams, 
  onSelectStream, 
  timezone 
}) {
  if (!member) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn cursor-pointer"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-[#0D131E] rounded-2xl border border-slate-700/80 shadow-2xl shadow-black/90 overflow-hidden my-6 text-slate-100 cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner with Official Branch Logo (EN for VSPO! EN, JP for ぶいすぽっ！) */}
        <div className="relative h-32 sm:h-44 w-full overflow-hidden bg-gradient-to-r from-[#070B14] via-[#0F1728] to-[#160D24] flex items-center justify-center p-4 border-b border-slate-800">
          <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none blur-2xl"
            style={{ background: `radial-gradient(circle, ${member.color}, transparent 70%)` }}
          />

          <img 
            src={member.banner || (member.branch === 'EN' ? '/logos/vspo-en.png' : '/logos/vspo-jp.png')} 
            alt={member.branch === 'EN' ? 'VSPO! EN 公式ロゴ' : 'ぶいすぽっ！ 公式ロゴ'}
            className="h-14 sm:h-20 max-w-[240px] object-contain relative z-10 filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]" 
            onError={(e) => {
              e.currentTarget.src = member.branch === 'EN' 
                ? 'https://vspo.jp/wp-content/themes/vspo/assets/images/common/logo-en.png' 
                : 'https://vspo.jp/wp-content/themes/vspo/assets/images/common/logo.png';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D131E] via-transparent to-transparent pointer-events-none" />

          {/* Top Control Bar with Back & Close */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-none">
            <button
              onClick={onClose}
              className="pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 hover:bg-black text-slate-200 hover:text-white backdrop-blur-md border border-slate-700/60 shadow-lg text-xs font-bold transition-all hover:scale-105"
              title="戻る"
            >
              <ArrowLeft className="w-4 h-4 text-[#00F0FF]" />
              <span>← 戻る</span>
            </button>

            <button
              onClick={onClose}
              className="pointer-events-auto inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/75 hover:bg-black text-slate-300 hover:text-white backdrop-blur-md border border-slate-700/60 shadow-lg text-xs font-bold transition-all hover:scale-105"
              title="閉じる"
            >
              <X className="w-4 h-4" />
              <span>閉じる</span>
            </button>
          </div>

          {/* Branch Pill on Banner */}
          <div className="absolute bottom-3 right-4 z-10 flex items-center gap-2">
            <span className={`px-2.5 py-1 rounded text-xs font-black font-gaming uppercase tracking-wider ${
              member.branch === 'EN' ? 'bg-[#00F0FF] text-black shadow-glow-cyan' : 'bg-[#FF4687] text-white shadow-glow-pink'
            }`}>
              VSPO! {member.branch}
            </span>
            <span className="bg-black/70 backdrop-blur-sm text-slate-200 text-xs px-2.5 py-1 rounded border border-slate-700/60 font-semibold hidden sm:inline">
              {member.unit}
            </span>
          </div>
        </div>

        {/* Profile Body */}
        <div className="px-5 sm:px-6 pb-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-6 -mt-10 sm:-mt-14 items-start">
            {/* Left: Full Standing Illustration Showcase Card */}
            <div className="w-full md:w-60 shrink-0 bg-gradient-to-b from-[#141C2B] via-[#0F1624] to-[#0A0E17] rounded-2xl border border-slate-700/70 p-3.5 flex flex-col items-center shadow-xl relative overflow-hidden group">
              {/* Character Signature Color Ambient Glow */}
              <div 
                className="absolute inset-0 opacity-25 pointer-events-none blur-2xl"
                style={{ background: `radial-gradient(circle at 50% 30%, ${member.color}, transparent 70%)` }}
              ></div>

              <div className="relative w-full h-80 sm:h-96 md:h-[420px] flex items-end justify-center overflow-visible">
                <img 
                  src={member.visual || member.avatar} 
                  alt={member.name}
                  className="h-full w-auto max-w-full object-contain object-bottom filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] group-hover:scale-[1.03] transition-transform duration-300 z-10"
                  onError={(e) => {
                    if (member.avatar && e.currentTarget.src !== member.avatar) {
                      e.currentTarget.src = member.avatar;
                    }
                  }}
                />
              </div>

              {/* Talent Identification Footer */}
              <div className="w-full mt-2 pt-2 border-t border-slate-800 text-center relative z-10">
                <div className="text-[10px] uppercase font-gaming tracking-wider text-slate-400">
                  {member.role}
                </div>
                <div className="text-xs font-bold text-slate-200 flex items-center justify-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: member.color }} />
                  <span>イメージカラー</span>
                </div>
              </div>
            </div>

            {/* Right: Profile Info & Socials */}
            <div className="flex-1 min-w-0 pt-2 sm:pt-4 w-full">
              {/* Avatar & Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3.5">
                  <div 
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full p-[2px] bg-gradient-to-tr shadow-lg shrink-0"
                    style={{ background: `linear-gradient(135deg, ${member.color}, #00F0FF)` }}
                  >
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-full h-full object-cover object-[center_12%] rounded-full bg-slate-900 ring-2 ring-[#0D131E]" 
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl sm:text-2xl font-black text-white font-gaming tracking-wide">
                        {member.name}
                      </h2>
                      <button
                        onClick={() => onToggleFavorite(member.id)}
                        className="p-1 rounded-full hover:bg-slate-800 transition-colors"
                        title={isFavorite ? '推しから解除' : '推しメンバーに追加'}
                      >
                        <Star className={`w-5 h-5 ${isFavorite ? 'fill-amber-400 text-amber-400' : 'text-slate-400 hover:text-white'}`} />
                      </button>
                    </div>
                    <div className="text-xs text-slate-400 font-medium">
                      {member.enName || member.jpName} • {member.unit}
                    </div>
                  </div>
                </div>

                {/* Social Links & Subscribers */}
                <div className="flex items-center gap-2 self-start sm:self-auto flex-wrap">
                  <span className="text-xs font-mono font-semibold text-slate-300 bg-[#162133] px-3 py-1.5 rounded-lg border border-slate-700/60">
                    登録者: <strong className="text-white">{member.subscribers}</strong>
                  </span>

                  {member.socials.youtube && (
                    <a
                      href={member.socials.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/30 transition-all"
                      title="YouTube チャンネルを開く"
                    >
                      <YoutubeIcon className="w-4 h-4" />
                    </a>
                  )}

                  {member.socials.twitch && (
                    <a
                      href={member.socials.twitch}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-purple-600/20 hover:bg-purple-600 text-purple-400 hover:text-white border border-purple-500/30 transition-all"
                      title="Twitch チャンネルを開く"
                    >
                      <TwitchIcon className="w-4 h-4" />
                    </a>
                  )}

                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-sky-600/20 hover:bg-sky-600 text-sky-400 hover:text-white border border-sky-500/30 transition-all"
                      title="X (Twitter) を開く"
                    >
                      <TwitterIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Bio */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 bg-[#111722] p-3 rounded-xl border border-slate-800/80">
                {member.bio}
              </p>

              {/* Fan Information & Tags */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                <div className="bg-[#121926] p-2 rounded-lg border border-slate-800 text-xs">
                  <span className="text-[10px] text-slate-400 block font-bold">👥 ファンネーム</span>
                  <span className="font-bold text-[#00F0FF]">{member.fanName || 'ー'}</span>
                </div>
                <div className="bg-[#121926] p-2 rounded-lg border border-slate-800 text-xs">
                  <span className="text-[10px] text-slate-400 block font-bold">📌 ファンマーク</span>
                  <span className="font-bold text-amber-300">{member.fanMark || 'ー'}</span>
                </div>
                <div className="bg-[#121926] p-2 rounded-lg border border-slate-800 text-xs">
                  <span className="text-[10px] text-slate-400 block font-bold">💬 配信タグ</span>
                  <span className="font-mono text-slate-200 truncate block">{member.streamTag || '#ぶいすぽ'}</span>
                </div>
                <div className="bg-[#121926] p-2 rounded-lg border border-slate-800 text-xs">
                  <span className="text-[10px] text-slate-400 block font-bold">🎨 ファンアート</span>
                  <span className="font-mono text-slate-200 truncate block">{member.fanArtTag || '#ぶいすぽアート'}</span>
                </div>
              </div>

              {/* Main Games */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs text-slate-400 font-bold flex items-center gap-1">
                  <Gamepad2 className="w-3.5 h-3.5 text-[#00F0FF]" />
                  主なゲーム:
                </span>
                {member.mainGames.map((game, idx) => (
                  <span 
                    key={idx}
                    className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#182335] text-slate-200 border border-slate-700/60"
                  >
                    {game}
                  </span>
                ))}
              </div>

              {/* Upcoming scheduled streams for this member (if any) */}
              {upcomingStreams && upcomingStreams.length > 0 && (
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <h3 className="text-xs sm:text-sm font-bold text-white font-gaming">
                      今後の配信予定 (UPCOMING SCHEDULE)
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {upcomingStreams.map(stream => {
                      const timeFormatted = formatTimeInTimezone(stream.date, stream.time, timezone);
                      return (
                        <div 
                          key={stream.id}
                          className="flex items-center justify-between p-2.5 rounded-lg bg-[#141C2A] border border-slate-700/60 hover:border-amber-500/50 transition-colors"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20 shrink-0">
                              {stream.date} {timeFormatted}
                            </span>
                            <span className="text-xs text-slate-200 font-medium truncate">
                              {stream.title}
                            </span>
                          </div>

                          <a
                            href={stream.streamUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 ml-3 inline-flex items-center gap-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-2.5 py-1 rounded transition-colors"
                          >
                            <span>枠を開く</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ======================================================== */}
          {/* PAST 5 STREAMS SECTION - AS EXPLICITLY REQUESTED BY USER */}
          {/* ======================================================== */}
          <div className="border-t border-slate-800 pt-5 mt-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] shadow-glow-cyan"></span>
                <h3 className="text-sm sm:text-base font-black text-white font-gaming tracking-wide">
                  過去5回分の配信アーカイブ (RECENT 5 STREAMS)
                </h3>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                5件表示
              </span>
            </div>

            <div className="space-y-2.5">
              {member.past5Streams && member.past5Streams.map((vod, index) => (
                <div 
                  key={vod.id}
                  className="group bg-[#111722] hover:bg-[#162032] border border-slate-800 hover:border-[#00F0FF]/50 p-2.5 sm:p-3 rounded-xl transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Index Number */}
                    <div className="text-base font-black font-gaming text-slate-500 w-5 text-center shrink-0">
                      0{index + 1}
                    </div>

                    {/* VOD Thumbnail */}
                    <div className="relative w-24 sm:w-28 aspect-video rounded-lg overflow-hidden shrink-0 bg-slate-800">
                      <img 
                        src={vod.thumbnail} 
                        alt={vod.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                      />
                      <span className="absolute bottom-1 right-1 bg-black/80 text-[9px] font-mono font-bold text-slate-200 px-1 rounded">
                        {vod.duration}
                      </span>
                    </div>

                    {/* VOD Info */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[9px] font-black uppercase px-1.5 py-0.2 rounded ${
                          vod.platform === 'twitch' ? 'bg-[#9146FF] text-white' : 'bg-[#FF0000] text-white'
                        }`}>
                          {vod.platform}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {vod.date}
                        </span>
                        <span className="text-[10px] bg-[#1A2638] text-slate-300 px-1.5 py-0.2 rounded font-semibold border border-slate-700/60">
                          {vod.game}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
                          {vod.viewCount}
                        </span>
                      </div>

                      <h4 className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white line-clamp-1 transition-colors">
                        {vod.title}
                      </h4>
                    </div>
                  </div>

                  {/* Direct Watch Stream Link */}
                  <a
                    href={vod.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 flex items-center justify-center gap-1.5 bg-[#FF4687] hover:bg-[#FF6EA2] text-white text-xs font-bold px-3 py-1.5 rounded-lg esports-clip-badge transition-colors shadow-md shadow-pink-950/40"
                    title="アーカイブ配信を直接視聴"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>配信を見る</span>
                    <ExternalLink className="w-3 h-3 opacity-80" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
