import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  ShoppingBag, 
  Sparkles, 
  Tag, 
  Calendar, 
  Layers, 
  CheckCircle2, 
  Share2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function GoodsDetailModal({
  goods,
  member,
  allGoods,
  onClose,
  onSelectGoods,
  onSelectMember
}) {
  if (!goods) return null;

  // ESC key listener to close cleanly
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const targetUrl = goods.productUrl || goods.officialUrl || goods.fallbackSearchUrl || 'https://store.vspo.jp/';

  const handleOpenOfficialStore = () => {
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  // Find other goods of the same member
  const relatedGoods = member 
    ? allGoods.filter(g => g.memberId === member.id && g.id !== goods.id)
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto">
      {/* Dark backdrop with blur */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-3xl bg-[#0B101C] border border-slate-700/80 rounded-3xl shadow-2xl shadow-black/80 overflow-hidden flex flex-col my-auto animate-scaleIn">
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 z-30 bg-[#0B101C]/95 backdrop-blur-md border-b border-slate-800/80 px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-gaming font-black text-[#FF4687]">VSPO! OFFICIAL STORE</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400 font-bold">{goods.categoryName}</span>
          </div>

          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 text-xs font-bold transition-all hover:scale-105"
            title="閉じる"
          >
            <X className="w-4 h-4" />
            <span>閉じる (Esc)</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto custom-scrollbar">
          {/* Main Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Left: Product Image Box */}
            <div className="relative aspect-square w-full rounded-2xl bg-gradient-to-b from-[#141F33] to-[#0A0F1A] border border-slate-700/70 p-6 flex items-center justify-center overflow-hidden group shadow-inner">
              {/* Dynamic Glow */}
              <div 
                className="absolute inset-0 opacity-25 blur-2xl pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 50%, ${member ? member.color : '#FF4687'}, transparent 70%)` }}
              />

              <img 
                src={goods.image} 
                alt={goods.title}
                className="max-h-full max-w-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] group-hover:scale-105 transition-transform duration-300 z-10"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = member?.branch === 'EN' ? '/logos/vspo-en.png' : '/logos/vspo-jp.png';
                  e.currentTarget.className = 'max-h-32 max-w-32 object-contain opacity-60';
                }}
              />

              <div className="absolute top-3 left-3">
                <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border shadow-sm ${goods.statusBadgeColor}`}>
                  {goods.statusLabel}
                </span>
              </div>
            </div>

            {/* Right: Product Details & Purchase CTA */}
            <div className="space-y-4">
              {/* Member Tag */}
              {member && (
                <div 
                  onClick={() => {
                    onClose();
                    onSelectMember(member);
                  }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141E30] border border-slate-700/80 hover:border-[#00F0FF] transition-colors cursor-pointer group"
                  title={`${member.name}のプロフィールを見る`}
                >
                  <img src={member.avatar} alt={member.name} className="w-5 h-5 rounded-full object-cover" />
                  <span className="text-xs font-bold text-slate-200 group-hover:text-white">{member.name}</span>
                  <span className={`text-[10px] px-1.5 rounded font-black ${
                    member.branch === 'EN' ? 'bg-[#00F0FF]/20 text-[#00F0FF]' : 'bg-[#FF4687]/20 text-[#FF4687]'
                  }`}>
                    {member.branch}
                  </span>
                  <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-[#00F0FF] transition-colors" />
                </div>
              )}

              {/* Title */}
              <h2 className="text-lg sm:text-xl font-black text-white leading-snug">
                {goods.title}
              </h2>

              {/* Price Row */}
              <div className="flex items-baseline gap-3 bg-[#111726] p-3.5 rounded-xl border border-slate-800">
                <span className="text-xs text-slate-400 font-bold">公式価格</span>
                <span className="text-2xl sm:text-3xl font-black text-[#FF4687] font-mono tracking-tight">
                  {goods.priceFormatted}
                </span>
                <span className="text-[11px] text-slate-400 font-semibold ml-auto flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>オフィシャル正規品</span>
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#111724]/60 p-3.5 rounded-xl border border-slate-800/80">
                {goods.description}
              </p>

              {/* Main Call to Action (Official Store Link) */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={handleOpenOfficialStore}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#FF4687] via-[#FF6EA2] to-[#FF4687] hover:brightness-110 active:scale-[0.99] text-white py-3.5 px-6 rounded-2xl font-black text-sm sm:text-base shadow-xl shadow-pink-950/50 hover:shadow-glow-pink transition-all"
                >
                  <ShoppingBag className="w-5 h-5 fill-white" />
                  <span>公式ストアで購入する (store.vspo.jp)</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-slate-400 text-center font-medium">
                  ※ クリックするとぶいすぽっ！公式オンラインストアの該当ページが別タブで開きます
                </p>
              </div>
            </div>
          </div>

          {/* Product Specifications Table */}
          {goods.specs && (
            <div className="bg-[#101726] rounded-2xl border border-slate-800 p-4 space-y-2.5">
              <h4 className="text-xs font-black text-slate-200 flex items-center gap-1.5 font-gaming">
                <Layers className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>PRODUCT SPECIFICATIONS (製品仕様)</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {Object.entries(goods.specs).map(([key, val]) => (
                  <div key={key} className="bg-[#162033] px-3 py-2 rounded-lg border border-slate-700/60 flex flex-col">
                    <span className="text-[10px] text-slate-400 uppercase font-mono">{key}</span>
                    <span className="text-slate-200 font-semibold mt-0.5">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Goods from the same talent */}
          {relatedGoods.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <h4 className="text-xs sm:text-sm font-black text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FF4687]" />
                <span>{member ? `${member.name}の他の公式グッズ` : '関連グッズ'}</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {relatedGoods.slice(0, 4).map(rg => (
                  <div
                    key={rg.id}
                    onClick={() => onSelectGoods(rg)}
                    className="group/item bg-[#121927] hover:bg-[#182338] border border-slate-800 hover:border-[#00F0FF]/60 rounded-xl p-2.5 cursor-pointer transition-all flex flex-col justify-between"
                  >
                    <div className="aspect-square w-full rounded-lg bg-[#182335] overflow-hidden flex items-center justify-center p-2 mb-2">
                      <img 
                        src={rg.image} 
                        alt={rg.title} 
                        className="max-h-full max-w-full object-contain group-hover/item:scale-105 transition-transform" 
                      />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-white line-clamp-1 group-hover/item:text-[#00F0FF] transition-colors">
                        {rg.title}
                      </p>
                      <p className="text-[11px] font-black text-[#FF4687] font-mono mt-1">
                        {rg.priceFormatted}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
