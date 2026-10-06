import React from 'react';
import { ExternalLink, Heart, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenAdmin }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 bg-[#070B11] border-t border-slate-800/80 text-slate-400 text-xs py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-gaming font-black text-lg text-white">VSPO!</span>
            <span className="font-gaming font-bold text-lg text-[#FF4687]">SCHEDULE</span>
            <span className="text-[10px] bg-[#162133] text-slate-300 px-2 py-0.5 rounded border border-slate-700/60">
              ぶいすぽジュール
            </span>
          </div>
          <p className="text-slate-400 max-w-md leading-relaxed text-[11px]">
            本サイトは「ぶいすぽっ！(Virtual eSports Project)」および「VSPO! EN」ファンのための非公式総合スケジュール＆アーカイブまとめツールです。
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
          <a
            href="https://vspo.jp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-[#00F0FF] transition-colors flex items-center gap-1"
          >
            <span>ぶいすぽっ！公式サイト</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://store.vspo.jp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-[#FF4687] transition-colors flex items-center gap-1"
          >
            <span>公式オフィシャルショップ</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://twitter.com/Vspo77"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-[#00F0FF] transition-colors flex items-center gap-1"
          >
            <span>公式X (Twitter)</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-[#141C2B] hover:bg-[#1D273B] text-slate-200 border border-slate-700/60 hover:border-[#FF4687] transition-all ml-2"
            title="ページ先頭に戻る"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400">
        <div className="flex items-center gap-3">
          <span>© Virtual eSports Project (VSPO!) All rights reserved.</span>
          {onOpenAdmin && (
            <button
              onClick={onOpenAdmin}
              className="text-slate-600 hover:text-slate-400 text-[10px] transition-colors font-mono hover:underline"
              title="運営・システム管理者用設定"
            >
              [ 運営管理設定 ]
            </button>
          )}
        </div>
        <div className="flex items-center gap-1 mt-2 sm:mt-0">
          <span>Crafted with</span>
          <Heart className="w-3 h-3 text-[#FF4687] fill-[#FF4687]" />
          <span>for VSPO! JP & EN fans</span>
        </div>
      </div>
    </footer>
  );
}
