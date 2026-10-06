import React from 'react';
import { Play, ExternalLink, Calendar, Star, Clock, Eye, Users } from 'lucide-react';
import { YoutubeIcon, TwitchIcon } from './Icons';
import { formatTimeInTimezone } from '../utils/timezone';

export default function StreamCard({ 
  stream, 
  member, 
  membersMap, 
  timezone,
  isFavorite, 
  onToggleFavorite, 
  onSelectStream, 
  onSelectMember 
}) {
  if (!stream || !member) return null;

  const isLive = stream.status === 'live';
  const isUpcoming = stream.status === 'upcoming';
  const isEnded = stream.status === 'ended';

  const formattedTime = formatTimeInTimezone(stream.date, stream.time, timezone);

  return (
    <div 
      className={`group relative bg-[#0D131E] rounded-xl border overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 ${
        isLive 
          ? 'border-[#FF4687]/60 shadow-lg shadow-pink-950/40 ring-1 ring-[#FF4687]/30' 
          : 'border-slate-800 hover:border-slate-700 shadow-md'
      }`}
    >
      {/* Top Media / Thumbnail Area */}
      <div 
        className="relative aspect-video w-full overflow-hidden bg-slate-900 cursor-pointer"
        onClick={() => onSelectStream(stream)}
      >
        <img 
          src={stream.thumbnail} 
          alt={stream.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = member.branch === 'EN' ? '/logos/vspo-en.png' : '/logos/vspo-jp.png';
            e.currentTarget.className = 'w-full h-full object-contain p-8 bg-[#111724]';
          }}
        />
        
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D131E] via-transparent to-black/40" />

        {/* Status Badge (Top Left) */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 z-10 flex-wrap">
          {isLive && (
            <span className="flex items-center gap-1.5 bg-red-600 text-white font-gaming text-[11px] font-black px-2.5 py-0.5 rounded shadow-lg animate-pulse-fast">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              <span>LIVE NOW</span>
            </span>
          )}

          {isLive && stream.isRealYoutubeLive && (
            <span className="bg-red-950/80 text-red-200 border border-red-500/50 text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-md">
              YouTube公式連動
            </span>
          )}

          {isUpcoming && (
            <span className="flex items-center gap-1 bg-amber-500/90 text-slate-950 font-gaming text-[11px] font-black px-2 py-0.5 rounded shadow-md">
              <Clock className="w-3 h-3" />
              <span>{stream.startsIn || 'SCHEDULED'}</span>
            </span>
          )}

          {isEnded && (
            <span className="bg-slate-700/80 text-slate-300 font-gaming text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-sm">
              ENDED • {stream.duration || 'ARCHIVE'}
            </span>
          )}
        </div>

        {/* Platform & Favorite (Top Right) */}
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(member.id);
            }}
            className="p-1.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md transition-colors"
            title={isFavorite ? '推しから解除' : '推しに追加'}
          >
            <Star 
              className={`w-4 h-4 transition-transform hover:scale-110 ${
                isFavorite ? 'fill-amber-400 text-amber-400' : 'text-slate-300 hover:text-white'
              }`} 
            />
          </button>

          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 ${
            stream.platform === 'twitch' ? 'bg-[#9146FF] text-white' : 'bg-[#FF0000] text-white'
          }`}>
            {stream.platform === 'twitch' ? <TwitchIcon className="w-3 h-3" /> : <YoutubeIcon className="w-3 h-3" />}
            <span>{stream.platform}</span>
          </span>
        </div>

        {/* Viewers or Time pill on bottom of thumbnail */}
        <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-xs">
          <span className="bg-[#17202F]/90 backdrop-blur-md text-[#00F0FF] font-gaming font-bold px-2.5 py-0.5 rounded border border-slate-700/60 shadow-sm flex items-center gap-1">
            <Clock className="w-3 h-3 text-[#00F0FF]" />
            <span>{formattedTime}</span>
          </span>

          {isLive && stream.viewers && (
            <span className="bg-black/75 backdrop-blur-md text-red-400 font-mono font-bold px-2 py-0.5 rounded flex items-center gap-1">
              <Eye className="w-3 h-3" />
              <span>{stream.viewers}</span>
            </span>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-3.5 flex-1 flex flex-col justify-between">
        <div>
          {/* Member Profile Row */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <div 
              className="flex items-center gap-2 cursor-pointer group/member min-w-0"
              onClick={() => onSelectMember(member)}
              title={`${member.name}のプロフィール＆過去5回の配信を見る`}
            >
              <div 
                className="w-9 h-9 rounded-full p-[1.5px] shrink-0 transition-transform group-hover/member:scale-110 shadow-sm"
                style={{ background: `linear-gradient(135deg, ${member.color}, #00F0FF)` }}
              >
                <img 
                  src={member.avatar} 
                  alt={member.name}
                  className="w-full h-full object-cover object-[center_12%] rounded-full bg-slate-900" 
                  loading="lazy"
                />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-white group-hover/member:text-[#00F0FF] transition-colors truncate">
                    {member.name}
                  </span>
                  <span className={`text-[9px] font-black px-1.5 py-0.2 rounded uppercase ${
                    member.branch === 'EN' ? 'bg-[#00F0FF]/20 text-[#00F0FF]' : 'bg-[#FF4687]/20 text-[#FF4687]'
                  }`}>
                    {member.branch}
                  </span>
                </div>
                <div className="text-[10px] text-slate-400 truncate">
                  {member.unit}
                </div>
              </div>
            </div>

            {/* Game Badge */}
            <span className="shrink-0 bg-[#162133] text-slate-200 text-[10px] font-semibold px-2 py-0.5 rounded border border-slate-700/60">
              {stream.game}
            </span>
          </div>

          {/* Stream Title */}
          <h3 
            onClick={() => onSelectStream(stream)}
            className="text-xs sm:text-sm font-semibold text-slate-100 hover:text-[#FF4687] cursor-pointer line-clamp-2 leading-snug transition-colors mb-2"
            title={stream.title}
          >
            {stream.title}
          </h3>

          {/* Collab Members (if any) */}
          {stream.collabMembers && stream.collabMembers.length > 0 && (
            <div className="flex items-center gap-1.5 mb-3 bg-[#111722] p-1.5 rounded-lg border border-slate-800/80">
              <span className="text-[10px] text-slate-400 font-bold flex items-center gap-1">
                <Users className="w-3 h-3 text-[#FF4687]" />
                コラボ:
              </span>
              <div className="flex items-center -space-x-1.5 overflow-hidden">
                {stream.collabMembers.map(collabId => {
                  const cMember = membersMap[collabId];
                  if (!cMember) return null;
                  return (
                    <div 
                      key={collabId}
                      onClick={() => onSelectMember(cMember)}
                      className="cursor-pointer group/collab relative"
                      title={`${cMember.name} (クリックで過去配信表示)`}
                    >
                      <img 
                        src={cMember.avatar} 
                        alt={cMember.name}
                        className="w-5 h-5 rounded-full ring-2 ring-[#0D131E] object-cover object-[center_12%] hover:scale-125 transition-transform" 
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons: Direct Stream Link & Details */}
        <div className="pt-2 border-t border-slate-800/80 flex items-center gap-2 mt-auto">
          {/* Main Direct Watch Link Button - As specifically requested! */}
          <a
            href={stream.streamUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-bold transition-all shadow-md ${
              isLive
                ? 'bg-gradient-to-r from-[#FF4687] to-[#FF6EA2] hover:from-[#FF6EA2] hover:to-[#FF85B5] text-white shadow-pink-950/50'
                : 'bg-[#1A2538] hover:bg-[#25354E] text-slate-200 border border-slate-700/60'
            }`}
          >
            <Play className={`w-3.5 h-3.5 ${isLive ? 'fill-white' : ''}`} />
            <span>{isLive ? '今すぐ配信を見る' : isEnded ? 'アーカイブを視聴' : '配信枠を開く'}</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>

          {/* Quick Details Modal Button */}
          <button
            onClick={() => onSelectStream(stream)}
            className="px-2.5 py-1.5 rounded-lg bg-[#141B28] hover:bg-[#1D273B] text-slate-400 hover:text-white border border-slate-800 transition-colors text-xs font-semibold"
            title="配信詳細＆カレンダー登録"
          >
            詳細
          </button>
        </div>
      </div>
    </div>
  );
}
