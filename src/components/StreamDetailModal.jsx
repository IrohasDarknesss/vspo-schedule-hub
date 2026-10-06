import React from 'react';
import { X, ExternalLink, Play, Calendar, Clock, Eye, Users, Share2, ArrowLeft } from 'lucide-react';
import { YoutubeIcon, TwitchIcon } from './Icons';
import { formatTimeInTimezone } from '../utils/timezone';
import { getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';

export default function StreamDetailModal({ 
  stream, 
  member, 
  membersMap, 
  onClose, 
  onSelectMember, 
  timezone 
}) {
  if (!stream || !member) return null;

  const isLive = stream.status === 'live';
  const isUpcoming = stream.status === 'upcoming';
  const formattedTime = formatTimeInTimezone(stream.date, stream.time, timezone);
  const googleCalUrl = getGoogleCalendarUrl(stream, member);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn cursor-pointer"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#0D131E] rounded-2xl border border-slate-700/80 shadow-2xl shadow-black/90 overflow-hidden my-6 text-slate-100 cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Top Control Bar with Big Clear Back & Close Buttons */}
        <div className="sticky top-0 z-40 bg-[#0D131E]/95 backdrop-blur-md border-b border-slate-800/80 px-4 py-3 flex items-center justify-between shadow-xl">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#162133] hover:bg-[#202E46] text-white border border-slate-700 text-xs font-bold transition-all shadow-md hover:scale-105 active:scale-95"
            title="スケジュール一覧に戻る"
          >
            <ArrowLeft className="w-4 h-4 text-[#00F0FF]" />
            <span>← スケジュール一覧に戻る</span>
          </button>

          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 text-xs font-bold transition-all hover:scale-105"
            title="モーダルを閉じる"
          >
            <X className="w-4 h-4" />
            <span>閉じる (Esc)</span>
          </button>
        </div>

        {/* Video / Thumbnail Player Stage */}
        <div className="relative aspect-video w-full bg-black overflow-hidden group">
          <img 
            src={stream.thumbnail} 
            alt={stream.title}
            className="w-full h-full object-cover" 
            onError={(e) => {
              e.currentTarget.onerror = null;
              if (member && (member.visual || member.avatar)) {
                e.currentTarget.src = member.visual || member.avatar;
                e.currentTarget.className = 'w-full h-full object-cover object-top filter brightness-90 bg-[#101726]';
              } else {
                e.currentTarget.src = member?.branch === 'EN' ? '/logos/vspo-en.png' : '/logos/vspo-jp.png';
                e.currentTarget.className = 'w-full h-full object-contain p-12 bg-[#111724]';
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D131E] via-transparent to-black/30" />

          {/* Big Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <a
              href={stream.streamUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#FF4687] hover:bg-[#FF6EA2] text-white px-5 py-3 rounded-full font-bold shadow-2xl shadow-pink-900/60 hover:scale-105 transition-all group/btn"
            >
              <Play className="w-5 h-5 fill-white" />
              <span className="text-sm font-black">
                {isLive ? 'LIVE配信ページを開く' : '配信ページで視聴する'}
              </span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>
          </div>

          {/* Stream Status Badge */}
          <div className="absolute top-14 left-3 flex items-center gap-2">
            {isLive ? (
              <span className="flex items-center gap-1.5 bg-red-600 text-white font-gaming text-xs font-black px-3 py-1 rounded shadow-lg animate-pulse">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                <span>LIVE NOW ({stream.viewers || '10,000+'} 視聴中)</span>
              </span>
            ) : (
              <span className="bg-amber-500 text-slate-950 font-gaming text-xs font-black px-3 py-1 rounded shadow-md">
                ⏰ {stream.startsIn || '配信予定'}
              </span>
            )}

            <span className={`px-2.5 py-1 rounded text-xs font-bold uppercase flex items-center gap-1 ${
              stream.platform === 'twitch' ? 'bg-[#9146FF] text-white' : 'bg-[#FF0000] text-white'
            }`}>
              {stream.platform === 'twitch' ? <TwitchIcon className="w-3.5 h-3.5" /> : <YoutubeIcon className="w-3.5 h-3.5" />}
              <span>{stream.platform}</span>
            </span>
          </div>

          {/* Bottom time bar */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
            <span className="bg-black/70 backdrop-blur-md text-[#00F0FF] font-gaming font-bold px-3 py-1 rounded border border-slate-700/60">
              配信日時: {stream.date} {formattedTime} ({timezone})
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-5 sm:p-6 space-y-5">
          {/* Member Card */}
          <div 
            className="flex items-center justify-between bg-[#121926] p-3 rounded-xl border border-slate-700/60 cursor-pointer hover:border-[#00F0FF]/60 transition-colors"
            onClick={() => {
              onClose();
              onSelectMember(member);
            }}
            title={`${member.name}のプロフィール＆過去5回アーカイブを表示`}
          >
            <div className="flex items-center gap-3">
              <div 
                className="w-12 h-12 rounded-full p-[2px]"
                style={{ background: `linear-gradient(135deg, ${member.color}, #00F0FF)` }}
              >
                <img 
                  src={member.avatar} 
                  alt={member.name}
                  className="w-full h-full object-cover object-[center_12%] rounded-full" 
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-white hover:text-[#00F0FF] transition-colors">
                    {member.name}
                  </h4>
                  <span className={`text-[10px] font-black px-1.5 py-0.2 rounded uppercase ${
                    member.branch === 'EN' ? 'bg-[#00F0FF]/20 text-[#00F0FF]' : 'bg-[#FF4687]/20 text-[#FF4687]'
                  }`}>
                    {member.branch}
                  </span>
                </div>
                <div className="text-xs text-slate-400">
                  {member.unit} • {member.role}
                </div>
              </div>
            </div>

            <span className="text-xs font-bold text-[#00F0FF] hover:underline flex items-center gap-1">
              過去5回配信を見る ❯
            </span>
          </div>

          {/* Title */}
          <h2 className="text-base sm:text-lg font-bold text-white leading-snug">
            {stream.title}
          </h2>

          {/* Description */}
          {stream.description && (
            <p className="text-xs sm:text-sm text-slate-300 bg-[#101622] p-3 rounded-xl border border-slate-800/80 leading-relaxed">
              {stream.description}
            </p>
          )}

          {/* Collaborators List */}
          {stream.collabMembers && stream.collabMembers.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#FF4687]" />
                コラボ参加メンバー (クリックで過去配信へ):
              </h4>
              <div className="flex flex-wrap gap-2">
                {stream.collabMembers.map(cId => {
                  const cMember = membersMap[cId];
                  if (!cMember) return null;
                  return (
                    <button
                      key={cId}
                      onClick={() => {
                        onClose();
                        onSelectMember(cMember);
                      }}
                      className="flex items-center gap-2 bg-[#141C2A] hover:bg-[#1D273B] border border-slate-700/60 hover:border-[#00F0FF] px-2.5 py-1.5 rounded-lg transition-all"
                    >
                      <img 
                        src={cMember.avatar} 
                        alt={cMember.name}
                        className="w-5 h-5 rounded-full object-cover object-[center_12%]" 
                      />
                      <span className="text-xs font-semibold text-slate-200">
                        {cMember.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tags */}
          {stream.tags && stream.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {stream.tags.map((tag, i) => (
                <span key={i} className="text-[11px] font-medium text-slate-400 bg-[#162133] px-2 py-0.5 rounded border border-slate-700/40">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Bottom Actions: Back Button, Stream Link & Add to Calendar */}
          <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="flex items-center gap-1.5 bg-[#172233] hover:bg-[#202E44] text-slate-200 hover:text-white px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm border border-slate-700/80 transition-all shadow-md"
              >
                <ArrowLeft className="w-4 h-4 text-[#00F0FF]" />
                <span>← 戻る</span>
              </button>

              {/* Primary Action Button */}
              <a
                href={stream.streamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#FF4687] hover:bg-[#FF6EA2] text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-lg shadow-pink-950/50"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>{stream.platform === 'youtube' ? 'YouTubeで開く' : 'Twitchで開く'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Calendar Buttons */}
            {isUpcoming && (
              <div className="flex items-center gap-2">
                <a
                  href={googleCalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-[#172233] hover:bg-[#202F46] text-slate-200 text-xs font-semibold px-3 py-2 rounded-lg border border-slate-700/80 transition-colors"
                  title="Googleカレンダーに予定を登録"
                >
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>Googleカレンダー</span>
                </a>

                <button
                  onClick={() => downloadIcsFile(stream, member)}
                  className="flex items-center gap-1.5 bg-[#172233] hover:bg-[#202F46] text-slate-200 text-xs font-semibold px-3 py-2 rounded-lg border border-slate-700/80 transition-colors"
                  title="Apple / Outlook カレンダー用 .icsファイルをダウンロード"
                >
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>.ics 保存</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
