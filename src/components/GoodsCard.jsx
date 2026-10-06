import React from 'react';
import { ExternalLink, ShoppingBag, Sparkles, Tag, ChevronRight } from 'lucide-react';

export default function GoodsCard({ 
  goods, 
  member, 
  onSelectGoods, 
  onSelectMember 
}) {
  if (!goods) return null;

  const handleOfficialStoreClick = (e) => {
    e.stopPropagation();
    // Direct link to official store product or search
    const targetUrl = goods.productUrl || goods.officialUrl || goods.fallbackSearchUrl || 'https://store.vspo.jp/';
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  const handleMemberClick = (e) => {
    e.stopPropagation();
    if (member && onSelectMember) {
      onSelectMember(member);
    }
  };

  return (
    <div 
      onClick={() => onSelectGoods(goods)}
      className="group relative bg-[#0D1422] rounded-2xl border border-slate-800 hover:border-[#FF4687]/70 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
      style={{
        boxShadow: member ? `0 4px 20px -5px ${member.color}15` : undefined
      }}
    >
      {/* Top Media / Goods Showcase Area */}
      <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-b from-[#141E30] to-[#0A0F1A] flex items-center justify-center p-4">
        {/* Ambient Color Glow */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none blur-xl group-hover:opacity-35 transition-opacity"
          style={{ background: `radial-gradient(circle at 50% 50%, ${member ? member.color : '#00F0FF'}, transparent 70%)` }}
        />

        {/* Product Image */}
        <img 
          src={goods.image} 
          alt={goods.title}
          className="max-h-full max-w-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-300 z-10"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = member?.branch === 'EN' ? '/logos/vspo-en.png' : '/logos/vspo-jp.png';
            e.currentTarget.className = 'max-h-24 max-w-24 object-contain opacity-60';
          }}
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-20 pointer-events-none">
          {/* Status Badge */}
          <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border backdrop-blur-md ${goods.statusBadgeColor}`}>
            {goods.statusLabel}
          </span>

          {/* Category Tag */}
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-black/60 text-slate-300 border border-slate-700/60 backdrop-blur-md">
            {goods.categoryName}
          </span>
        </div>

        {/* Quick View Hover Indicator */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 z-20 pointer-events-none">
          <span className="bg-[#FF4687] text-white text-xs font-black px-3.5 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <span>詳細を見る</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Card Body & Info */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3 bg-[#0D1422]">
        <div>
          {/* Member Info Row */}
          {member ? (
            <div 
              onClick={handleMemberClick}
              className="inline-flex items-center gap-2 mb-2 px-2 py-0.5 rounded-full bg-[#141C2B] border border-slate-700/60 hover:border-slate-500 transition-colors cursor-pointer group/mem"
              title={`${member.name}のプロフィールを見る`}
            >
              <img 
                src={member.avatar} 
                alt={member.name}
                className="w-4 h-4 rounded-full object-cover" 
              />
              <span className="text-[11px] font-bold text-slate-300 group-hover/mem:text-white transition-colors">
                {member.name}
              </span>
              <span className={`text-[9px] px-1 rounded font-black ${
                member.branch === 'EN' ? 'bg-[#00F0FF]/20 text-[#00F0FF]' : 'bg-[#FF4687]/20 text-[#FF4687]'
              }`}>
                {member.branch}
              </span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 mb-2 px-2 py-0.5 rounded-full bg-[#141C2B] border border-slate-700/60 text-[11px] font-bold text-slate-400">
              <span>ぶいすぽっ！ 公式アイテム</span>
            </div>
          )}

          {/* Title */}
          <h3 className="text-xs sm:text-sm font-bold text-white line-clamp-2 leading-snug group-hover:text-[#00F0FF] transition-colors">
            {goods.title}
          </h3>
        </div>

        {/* Price & Official Action Button */}
        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] text-slate-400 block font-mono">PRICE</span>
            <span className="text-base sm:text-lg font-black text-[#FF4687] font-mono tracking-tight">
              {goods.priceFormatted}
            </span>
          </div>

          {/* Official Store Direct Jump Button */}
          <button
            onClick={handleOfficialStoreClick}
            className="inline-flex items-center gap-1.5 bg-[#FF4687] hover:bg-[#FF6EA2] active:scale-95 text-white px-3 py-1.5 rounded-xl text-xs font-black transition-all shadow-md shadow-pink-950/40 hover:shadow-glow-pink"
            title="公式ストアの商品ページを開く"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>公式ストア</span>
            <ExternalLink className="w-3 h-3 opacity-90" />
          </button>
        </div>
      </div>
    </div>
  );
}
