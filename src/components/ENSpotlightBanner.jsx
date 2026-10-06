import React from 'react';
import { Globe, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function ENSpotlightBanner({ onSelectBranch, onSelectMember, enMembers }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#00F0FF]/30 bg-gradient-to-r from-[#081524] via-[#0E1E34] to-[#12102A] p-5 sm:p-6 mb-8 shadow-xl shadow-cyan-950/30">
      {/* Decorative cyber grid overlay & neon glow */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#9B51E0]/15 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Left: Info */}
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/40 text-xs font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider font-gaming">
              <Globe className="w-3.5 h-3.5" />
              GLOBAL EXPANSION
            </span>
            <span className="text-xs text-slate-400 font-bold">VSPO! EN 1st Generation</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide font-gaming mb-2">
            VSPO! ENGLISH BRANCH <span className="text-[#00F0FF]">NOW STREAMING</span>
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
            英語圏へ展開する「VSPO! EN」メンバーの配信予定・過去アーカイブも完全サポート！
            日・英バイリンガル配信やJP先輩メンバーとの熱い国際コラボスクリムを今すぐチェック。
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onSelectBranch('EN')}
              className="inline-flex items-center gap-2 bg-[#00F0FF] hover:bg-[#33F3FF] text-[#070B12] text-xs font-black px-4 py-2 rounded-lg esports-clip-badge shadow-glow-cyan transition-all hover:scale-105"
            >
              <span>VSPO! ENの配信予定に絞り込む</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <span className="text-xs text-slate-400">
              ※ タイムゾーン変更でEST / PST / UTC等現地時間でも確認可能
            </span>
          </div>
        </div>

        {/* Right: EN Member Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 shrink-0">
          {enMembers.map(member => (
            <div
              key={member.id}
              onClick={() => onSelectMember(member)}
              className="group cursor-pointer bg-[#0A101C]/80 hover:bg-[#152238] border border-slate-700/60 hover:border-[#00F0FF] p-3 rounded-xl transition-all duration-200 text-center hover:-translate-y-1 shadow-md hover:shadow-glow-cyan"
            >
              <div 
                className="w-14 h-14 mx-auto rounded-full p-[2px] mb-2 group-hover:scale-105 transition-transform relative"
                style={{ background: `linear-gradient(135deg, ${member.color}, #00F0FF)` }}
              >
                <img 
                  src={member.avatar} 
                  alt={member.name}
                  className="w-full h-full object-cover object-[center_12%] rounded-full" 
                />
              </div>

              <div className="text-xs font-bold text-white group-hover:text-[#00F0FF] transition-colors truncate">
                {member.name}
              </div>
              <div className="text-[10px] text-slate-400 truncate mb-1">
                {member.jpName}
              </div>

              <span className="inline-block text-[9px] font-extrabold text-[#00F0FF] bg-[#00F0FF]/15 px-2 py-0.5 rounded-full border border-[#00F0FF]/30">
                過去5回アーカイブ ❯
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
