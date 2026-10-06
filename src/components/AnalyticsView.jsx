import React, { useState, useMemo } from 'react';
import { 
  TrendingUp, 
  Users, 
  Award, 
  Calendar, 
  ArrowUpRight, 
  Sparkles, 
  ChevronRight, 
  Check, 
  Info,
  BarChart2
} from 'lucide-react';
import { SUBSCRIBER_STATS } from '../data/subscriberStats';

export default function AnalyticsView({ 
  members, 
  membersMap, 
  selectedBranch, 
  setSelectedBranch, 
  onSelectMember 
}) {
  // Selected members to compare on the chart (default: top 3: 橘ひなの, 小森めと, 胡桃のあ)
  const [selectedForCompare, setSelectedForCompare] = useState([
    'tachibana-hinano',
    'komori-met',
    'kurumi-noah'
  ]);
  const [timeRange, setTimeRange] = useState('6m'); // '6m'
  const [hoveredPoint, setHoveredPoint] = useState(null);

  // Filter stats by selected branch
  const filteredStats = useMemo(() => {
    return SUBSCRIBER_STATS.filter(stat => {
      const member = membersMap[stat.memberId];
      if (!member) return false;
      if (selectedBranch !== 'ALL' && member.branch !== selectedBranch) return false;
      return true;
    }).sort((a, b) => b.current - a.current);
  }, [membersMap, selectedBranch]);

  // Top fast-growing members
  const fastestGrowing = useMemo(() => {
    return [...SUBSCRIBER_STATS]
      .filter(stat => {
        const member = membersMap[stat.memberId];
        if (!member) return false;
        if (selectedBranch !== 'ALL' && member.branch !== selectedBranch) return false;
        return true;
      })
      .sort((a, b) => parseFloat(b.growthRate) - parseFloat(a.growthRate))
      .slice(0, 5);
  }, [membersMap, selectedBranch]);

  // Toggle member in chart comparison (max 4)
  const toggleCompareMember = (memberId) => {
    if (selectedForCompare.includes(memberId)) {
      if (selectedForCompare.length === 1) return; // Keep at least one
      setSelectedForCompare(selectedForCompare.filter(id => id !== memberId));
    } else {
      if (selectedForCompare.length >= 4) {
        // Replace oldest
        setSelectedForCompare([...selectedForCompare.slice(1), memberId]);
      } else {
        setSelectedForCompare([...selectedForCompare, memberId]);
      }
    }
  };

  // Chart data calculations
  const dates = ['2026-05', '2026-06', '2026-07', '2026-08', '2026-09', '2026-10'];
  const dateLabels = ['5月', '6月', '7月', '8月', '9月', '10月 (今月)'];

  // Min and max for chart scale
  const compareStats = selectedForCompare.map(id => SUBSCRIBER_STATS.find(s => s.memberId === id)).filter(Boolean);
  let minCount = Infinity;
  let maxCount = -Infinity;

  compareStats.forEach(stat => {
    stat.history.forEach(pt => {
      if (pt.count < minCount) minCount = pt.count;
      if (pt.count > maxCount) maxCount = pt.count;
    });
  });

  if (minCount === Infinity) minCount = 100000;
  if (maxCount === -Infinity) maxCount = 800000;

  // Add 10% padding
  const range = maxCount - minCount || 100000;
  const chartMin = Math.max(0, minCount - range * 0.1);
  const chartMax = maxCount + range * 0.1;

  // Total VSPO Project subscribers
  const totalSubscribers = useMemo(() => {
    return SUBSCRIBER_STATS.reduce((acc, curr) => acc + curr.current, 0);
  }, []);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-r from-[#0C111C] via-[#141C2B] to-[#1B1124] p-6 sm:p-8 shadow-2xl">
        <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />
        <div className="absolute top-0 right-10 w-80 h-80 bg-[#00F0FF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#FF4687]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="bg-[#00F0FF]/20 text-[#00F0FF] text-xs font-bold px-3 py-1 rounded-full border border-[#00F0FF]/40 flex items-center gap-1.5 font-gaming">
                <TrendingUp className="w-3.5 h-3.5" />
                OFFICIAL SUBSCRIBER ANALYTICS
              </span>
              <span className="text-xs text-slate-400">全32名 YouTube実データ準拠</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white font-gaming tracking-wider">
              タレント YouTube チャンネル登録者推移
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              ぶいすぽっ！所属タレント全員の月次成長推移、最新ランキング、勢い（成長率）を可視化。各タレントのYouTube公式チャンネルおよび集計データ（VSTATS / ユーチュラ）に基づく実数値を採用しています。
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-4 bg-slate-900/80 p-4 rounded-xl border border-slate-700/60 backdrop-blur-md shrink-0">
            <div>
              <div className="text-[11px] text-slate-400 font-semibold">プロジェクト総登録者数</div>
              <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#FF4687] font-mono">
                {(totalSubscribers / 10000).toFixed(1)}万人+
              </div>
            </div>
            <div className="h-10 w-[1px] bg-slate-700" />
            <div>
              <div className="text-[11px] text-slate-400 font-semibold">追跡タレント数</div>
              <div className="text-xl sm:text-2xl font-black text-white font-mono">
                32名 <span className="text-xs font-normal text-slate-400">(JP 25 / EN 7)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Chart Section */}
      <div className="bg-[#0E1522] rounded-2xl border border-slate-800 p-5 sm:p-7 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-[#00F0FF]" />
              <span>登録者推移 比較グラフ（過去6ヶ月間）</span>
            </h2>
            <p className="text-xs text-slate-400">
              下のメンバーバッジをクリックして最大4名まで同時比較できます
            </p>
          </div>

          {/* Selectable member chips for comparison */}
          <div className="flex flex-wrap items-center gap-2">
            {selectedForCompare.map(id => {
              const member = membersMap[id];
              const stat = SUBSCRIBER_STATS.find(s => s.memberId === id);
              if (!member || !stat) return null;
              return (
                <div 
                  key={id}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-bold bg-slate-900/90 shadow-md transition-all"
                  style={{ borderColor: `${member.color}80` }}
                >
                  <span 
                    className="w-2.5 h-2.5 rounded-full shadow" 
                    style={{ backgroundColor: member.color || '#00F0FF' }} 
                  />
                  <span className="text-slate-100">{member.name}</span>
                  <span className="font-mono text-slate-400 font-normal text-[11px]">{stat.currentFormatted}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* SVG Interactive Line Chart */}
        <div className="relative w-full h-72 sm:h-80 bg-slate-950/70 rounded-xl p-4 border border-slate-800/80 overflow-hidden">
          {/* Horizontal Grid lines */}
          <div className="absolute inset-x-8 inset-y-6 flex flex-col justify-between pointer-events-none opacity-20">
            {[0, 1, 2, 3, 4].map(idx => (
              <div key={idx} className="w-full border-b border-dashed border-slate-400" />
            ))}
          </div>

          <svg className="w-full h-full overflow-visible" viewBox="0 0 600 240" preserveAspectRatio="none">
            <defs>
              {compareStats.map(stat => {
                const member = membersMap[stat.memberId];
                const color = member?.color || '#00F0FF';
                return (
                  <linearGradient key={`grad-${stat.memberId}`} id={`grad-${stat.memberId}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity="0.25" />
                    <stop offset="100%" stopColor={color} stopOpacity="0.0" />
                  </linearGradient>
                );
              })}
            </defs>

            {/* Plot lines and area fills for each selected member */}
            {compareStats.map(stat => {
              const member = membersMap[stat.memberId];
              const color = member?.color || '#00F0FF';
              
              // Generate coordinate points (X: 40 -> 560, Y: 210 -> 20)
              const points = stat.history.map((pt, i) => {
                const x = 40 + (i / (dates.length - 1)) * 520;
                const ratio = (pt.count - chartMin) / (chartMax - chartMin);
                const y = 210 - ratio * 190;
                return { x, y, count: pt.count, date: pt.date, label: dateLabels[i] };
              });

              const pathString = points.reduce((acc, pt, i) => {
                return i === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`;
              }, '');

              const areaString = `${pathString} L ${points[points.length - 1].x} 210 L ${points[0].x} 210 Z`;

              return (
                <g key={stat.memberId}>
                  {/* Area fill */}
                  <path d={areaString} fill={`url(#grad-${stat.memberId})`} />
                  
                  {/* Line */}
                  <path
                    d={pathString}
                    fill="none"
                    stroke={color}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                  />

                  {/* Points */}
                  {points.map((pt, idx) => (
                    <circle
                      key={idx}
                      cx={pt.x}
                      cy={pt.y}
                      r="5.5"
                      fill="#0B0F17"
                      stroke={color}
                      strokeWidth="3"
                      className="cursor-pointer transition-transform hover:scale-150"
                      onMouseEnter={() => setHoveredPoint({
                        memberName: member.name,
                        color,
                        dateLabel: pt.label,
                        countFormatted: `${(pt.count / 10000).toFixed(1)}万人 (${pt.count.toLocaleString()}人)`,
                        x: pt.x,
                        y: pt.y,
                      })}
                      onMouseLeave={() => setHoveredPoint(null)}
                    />
                  ))}
                </g>
              );
            })}
          </svg>

          {/* Hover Tooltip */}
          {hoveredPoint && (
            <div 
              className="absolute z-20 pointer-events-none bg-slate-900 border border-slate-700 px-3 py-2 rounded-xl shadow-2xl text-xs space-y-0.5 animate-fadeIn"
              style={{
                left: `${(hoveredPoint.x / 600) * 100}%`,
                top: `${(hoveredPoint.y / 240) * 100 - 15}%`,
                transform: 'translate(-50%, -100%)',
              }}
            >
              <div className="flex items-center gap-1.5 font-bold text-white">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: hoveredPoint.color }} />
                <span>{hoveredPoint.memberName}</span>
              </div>
              <div className="text-[11px] text-slate-400">{hoveredPoint.dateLabel}</div>
              <div className="font-mono font-bold text-[#00F0FF]">{hoveredPoint.countFormatted}</div>
            </div>
          )}

          {/* X Axis Date Labels */}
          <div className="absolute inset-x-8 bottom-1.5 flex justify-between text-[11px] text-slate-400 font-mono">
            {dateLabels.map((lbl, idx) => (
              <span key={idx}>{lbl}</span>
            ))}
          </div>
        </div>

        {/* Member Selector Strip to toggle in/out of chart */}
        <div className="space-y-2">
          <div className="text-xs font-semibold text-slate-400 flex items-center justify-between">
            <span>比較するタレントを選択（タップで追加/除外・最大4名）:</span>
            <span className="text-[11px] text-cyan-400 font-mono">
              選択中: {selectedForCompare.length} / 4名
            </span>
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 custom-scrollbar">
            {filteredStats.map(stat => {
              const member = membersMap[stat.memberId];
              if (!member) return null;
              const isSelected = selectedForCompare.includes(stat.memberId);
              return (
                <button
                  key={stat.memberId}
                  onClick={() => toggleCompareMember(stat.memberId)}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold shrink-0 transition-all border ${
                    isSelected
                      ? 'bg-slate-800 text-white shadow-md border-cyan-400'
                      : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-4 h-4 rounded-full object-cover" 
                  />
                  <span>{member.name}</span>
                  {isSelected && <Check className="w-3 h-3 text-cyan-400" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Two-column layout: Fastest Growing & Complete Ranking */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Fastest Growing (High Momentum) */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-[#0E1522] rounded-2xl border border-slate-800 p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>直近の急上昇タレント TOP 5</span>
              </h3>
              <span className="text-[10px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded font-mono font-bold">
                月間成長率
              </span>
            </div>

            <div className="space-y-3">
              {fastestGrowing.map((stat, idx) => {
                const member = membersMap[stat.memberId];
                if (!member) return null;
                return (
                  <div 
                    key={stat.memberId}
                    onClick={() => onSelectMember(member)}
                    className="group flex items-center justify-between p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-800/60 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black font-mono ${
                        idx === 0 
                          ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-500/40' 
                          : idx === 1 
                          ? 'bg-slate-300 text-slate-950' 
                          : idx === 2 
                          ? 'bg-amber-700 text-white' 
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        {idx + 1}
                      </div>
                      <img 
                        src={member.avatar} 
                        alt={member.name} 
                        className="w-10 h-10 rounded-full object-cover border border-slate-700 group-hover:scale-105 transition-transform"
                      />
                      <div>
                        <div className="font-bold text-white text-xs group-hover:text-amber-300 transition-colors">
                          {member.name}
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono">
                          {stat.currentFormatted}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-xs font-bold text-emerald-400 font-mono flex items-center gap-0.5 justify-end">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                        <span>{stat.growthRate}</span>
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono">
                        {stat.monthlyGrowth}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Complete Rankings Table */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-[#0E1522] rounded-2xl border border-slate-800 p-5 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-pink-500" />
                <h3 className="font-bold text-white text-base">
                  タレント登録者数 ランキング一覧（全{filteredStats.length}名）
                </h3>
              </div>

              {/* Branch filter */}
              <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs">
                {['ALL', 'JP', 'EN'].map(br => (
                  <button
                    key={br}
                    onClick={() => setSelectedBranch(br)}
                    className={`px-3 py-1 rounded-md font-bold transition-colors ${
                      selectedBranch === br
                        ? 'bg-gradient-to-r from-[#FF4687] to-pink-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {br}
                  </button>
                ))}
              </div>
            </div>

            {/* List */}
            <div className="space-y-2 overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 font-semibold text-[11px]">
                    <th className="py-2.5 px-3">順位</th>
                    <th className="py-2.5 px-3">タレント名</th>
                    <th className="py-2.5 px-3">支部</th>
                    <th className="py-2.5 px-3 text-right">現在の登録者数</th>
                    <th className="py-2.5 px-3 text-right">前月比増加</th>
                    <th className="py-2.5 px-3 text-right">成長率</th>
                    <th className="py-2.5 px-3 text-center">詳細</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {filteredStats.map((stat, idx) => {
                    const member = membersMap[stat.memberId];
                    if (!member) return null;
                    return (
                      <tr 
                        key={stat.memberId}
                        onClick={() => onSelectMember(member)}
                        className="hover:bg-slate-800/40 transition-colors cursor-pointer group"
                      >
                        <td className="py-3 px-3 font-mono font-bold">
                          <span className={`inline-flex items-center justify-center w-5 h-5 rounded-md text-[11px] ${
                            idx === 0 
                              ? 'bg-amber-400 text-slate-950 font-black' 
                              : idx === 1 
                              ? 'bg-slate-300 text-slate-950 font-black' 
                              : idx === 2 
                              ? 'bg-amber-700 text-white font-black' 
                              : 'text-slate-400'
                          }`}>
                            {idx + 1}
                          </span>
                        </td>
                        <td className="py-3 px-3">
                          <div className="flex items-center gap-2.5">
                            <img 
                              src={member.avatar} 
                              alt={member.name} 
                              className="w-7 h-7 rounded-full object-cover border border-slate-700"
                            />
                            <div>
                              <div className="font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                                {member.name}
                              </div>
                              <div className="text-[10px] text-slate-500">
                                {member.nameEn}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-3">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            member.branch === 'EN'
                              ? 'bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/30'
                              : 'bg-[#FF4687]/15 text-[#FF4687] border border-[#FF4687]/30'
                          }`}>
                            {member.branch}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-right font-mono font-black text-white text-sm">
                          {stat.currentFormatted}
                        </td>
                        <td className="py-3 px-3 text-right font-mono text-emerald-400 font-bold">
                          {stat.monthlyGrowth}
                        </td>
                        <td className="py-3 px-3 text-right font-mono text-cyan-400">
                          {stat.growthRate}
                        </td>
                        <td className="py-3 px-3 text-center">
                          <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all inline-block" />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
