import React from 'react';
import { Radio, ExternalLink, Users, Eye } from 'lucide-react';

export default function LiveTicker({ liveStreams, membersMap, onSelectStream, onSelectMember }) {
  if (!liveStreams || liveStreams.length === 0) return null;

  return (
    <div className="bg-gradient-to-r from-[#170E1A] via-[#161226] to-[#0E1726] border-y border-[#FF4687]/30 py-3 px-4 shadow-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-2.5">
          <div className="flex items-center gap-1.5 bg-red-600/90 text-white font-gaming text-xs font-black px-2.5 py-0.5 rounded esports-clip-tag shadow-glow-pink">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>NOW ON AIR</span>
          </div>
          <span className="text-xs text-slate-300 font-bold">
            ただいま配信中！リアルタイム観戦しよう
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {liveStreams.map(stream => {
            const member = membersMap[stream.memberId];
            if (!member) return null;

            return (
              <div 
                key={stream.id}
                className="group relative bg-[#0E1420]/90 hover:bg-[#151E30] rounded-xl border border-slate-700/60 hover:border-[#FF4687]/60 p-3 transition-all duration-200 shadow-md hover:shadow-glow-pink flex items-center gap-3 cursor-pointer"
                onClick={() => onSelectStream(stream)}
              >
                {/* Member avatar with live ring */}
                <div 
                  className="relative shrink-0 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectMember(member);
                  }}
                  title={`${member.name}の過去5回アーカイブを見る`}
                >
                  <div 
                    className="w-12 h-12 rounded-full p-[2px] shadow-sm relative group-hover:scale-105 transition-transform"
                    style={{ background: `linear-gradient(135deg, ${member.color}, #00F0FF)` }}
                  >
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-full h-full object-cover object-[center_12%] rounded-full" 
                    />
                  </div>
                  {/* Live badge under avatar */}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-red-600 text-[9px] font-black text-white px-1.5 py-0.2 rounded-full uppercase tracking-wider animate-pulse">
                    LIVE
                  </span>
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span 
                      className="text-xs font-bold text-white hover:text-[#00F0FF] transition-colors truncate cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectMember(member);
                      }}
                    >
                      {member.name}
                    </span>
                    <span className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded ${
                      member.branch === 'EN' ? 'bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/30' : 'bg-[#FF4687]/20 text-[#FF4687]'
                    }`}>
                      {member.branch}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono ml-auto flex items-center gap-1">
                      <Eye className="w-3 h-3 text-red-400" />
                      {stream.viewers}人
                    </span>
                  </div>

                  <h4 className="text-xs font-medium text-slate-200 truncate group-hover:text-white transition-colors mb-1.5">
                    {stream.title}
                  </h4>

                  <div className="flex items-center justify-between text-[11px]">
                    <span className="bg-[#1C2638] text-slate-300 px-2 py-0.5 rounded text-[10px] font-semibold border border-slate-700/50">
                      {stream.game}
                    </span>
                    
                    <a
                      href={stream.streamUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 bg-[#FF4687] hover:bg-[#FF6EA2] text-white text-[11px] font-bold px-2 py-0.5 rounded esports-clip-badge transition-colors shadow-sm"
                    >
                      <span>視聴</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
