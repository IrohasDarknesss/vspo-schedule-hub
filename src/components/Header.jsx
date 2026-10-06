import React, { useState, useEffect } from 'react';
import { Calendar, Users, Star, Globe, Radio, Sparkles, ChevronDown, ExternalLink, ShoppingBag, TrendingUp, MessageSquare } from 'lucide-react';
import { TIMEZONES } from '../utils/timezone';

export default function Header({ 
  currentTab, 
  setCurrentTab, 
  selectedBranch, 
  setSelectedBranch, 
  timezone, 
  setTimezone,
  liveCount,
  favoriteCount,
  autoSyncCountdown = 60,
  lastSyncTime = '',
  isRefreshing = false,
  onRefreshSchedules
}) {
  const [showTzDropdown, setShowTzDropdown] = useState(false);
  const [currentClock, setCurrentClock] = useState('');

  // Live real-time clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const jst = new Date(utc + 9 * 3600000);
      const m = jst.getMonth() + 1;
      const d = jst.getDate();
      const hh = String(jst.getHours()).padStart(2, '0');
      const mm = String(jst.getMinutes()).padStart(2, '0');
      const ss = String(jst.getSeconds()).padStart(2, '0');
      setCurrentClock(`${m}/${d} ${hh}:${mm}:${ss}`);
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  const currentTzObj = TIMEZONES.find(t => t.id === timezone) || TIMEZONES[0];

  return (
    <header className="sticky top-0 z-40 bg-[#0B0F17]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40">
      {/* Top micro bar for live status & timezone */}
      <div className="bg-[#111722] border-b border-slate-800/50 px-4 py-1.5 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-bold text-red-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span>LIVE NOW</span>
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-emerald-400 font-bold font-mono">現在 {liveCount} 名が配信中！</span>
            <span className="hidden sm:inline-block text-slate-500">|</span>
            <span className="hidden sm:flex items-center gap-1.5 font-mono text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>JST現在時刻: {currentClock || '取得中...'}</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Minute-by-minute Auto-Sync live indicator */}
            <div className="hidden md:flex items-center gap-1.5 font-mono text-[11px] text-cyan-300 bg-[#142032] px-2.5 py-0.5 rounded-full border border-cyan-500/40 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse"></span>
              <span className="text-cyan-200">毎分自動更新中</span>
              <span className="text-white font-bold bg-[#0D1522] px-1.5 py-0.2 rounded-full text-[10px] border border-cyan-500/20">
                次回 {autoSyncCountdown}s
              </span>
            </div>
            {/* Timezone Switcher */}
            <div className="relative">
              <button
                onClick={() => setShowTzDropdown(!showTzDropdown)}
                className="flex items-center gap-1.5 bg-[#17202F] hover:bg-[#1F2A3D] text-slate-200 px-2.5 py-1 rounded border border-slate-700/60 transition-all font-mono text-xs"
                title="タイムゾーンを変更"
              >
                <span>{currentTzObj.flag}</span>
                <span className="font-semibold text-[#00F0FF]">{currentTzObj.id}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showTzDropdown ? 'rotate-180' : ''}`} />
              </button>

              {showTzDropdown && (
                <div 
                  className="absolute right-0 mt-1.5 w-60 bg-[#161F2E] border border-slate-700/80 rounded-lg shadow-xl shadow-black/60 py-1.5 z-50 text-xs backdrop-blur-lg"
                  onMouseLeave={() => setShowTzDropdown(false)}
                >
                  <div className="px-3 py-1 text-[11px] font-semibold text-slate-400 border-b border-slate-800">
                    表示タイムゾーンを選択
                  </div>
                  {TIMEZONES.map(tz => (
                    <button
                      key={tz.id}
                      onClick={() => {
                        setTimezone(tz.id);
                        setShowTzDropdown(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 flex items-center justify-between hover:bg-[#1F2E45] transition-colors ${
                        tz.id === timezone ? 'bg-[#FF4687]/15 text-[#FF4687] font-bold' : 'text-slate-300'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{tz.flag}</span>
                        <span>{tz.name}</span>
                      </span>
                      {tz.id === timezone && <span className="text-[#FF4687]">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Official Portal Link */}
            <a 
              href="https://vspo.jp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors"
            >
              <span>公式サイト</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Logo & Subtitle */}
          <div className="flex items-center gap-3">
            <div className="relative group cursor-pointer flex items-center gap-3" onClick={() => setCurrentTab('schedule')}>
              <img 
                src="/logos/vspo-jp.png" 
                alt="ぶいすぽっ！"
                className="h-9 sm:h-11 object-contain filter drop-shadow-[0_0_12px_rgba(255,110,162,0.4)] hover:scale-105 transition-transform"
                onError={(e) => {
                  e.currentTarget.src = "https://vspo.jp/wp-content/themes/vspo/assets/images/common/logo.png";
                }}
              />
              <div className="hidden sm:block h-7 w-[1px] bg-slate-800" />
              <div>
                <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                  <h1 className="text-xl sm:text-2xl font-black tracking-wider text-white font-gaming">
                    SCHEDULE
                  </h1>
                  <span className="whitespace-nowrap shrink-0 bg-gradient-to-r from-[#FF4687]/20 to-[#00F0FF]/20 text-[#FF4687] text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-[#FF4687]/40 tracking-normal shadow-sm">
                    ぶいすぽジュール
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-sans tracking-wide">
                  Virtual eSports Project • 全タレント（JP & EN）公式スケジュール
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Tabs & Branch Filter */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {/* Branch Filter Switcher (ALL / JP / EN - Equal & Fair Representation) */}
            <div className="bg-[#111724] p-1 rounded-lg border border-slate-700/80 flex items-center gap-1 shadow-inner">
              <button
                onClick={() => setSelectedBranch('ALL')}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                  selectedBranch === 'ALL'
                    ? 'bg-gradient-to-r from-[#FF4687] to-[#FF6EA2] text-white shadow-md shadow-pink-950/60 font-black'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                ALL (全員)
              </button>
              <button
                onClick={() => setSelectedBranch('JP')}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
                  selectedBranch === 'JP'
                    ? 'bg-[#FF4687] text-white shadow-md shadow-pink-950/60 font-black'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <span>JP ぶいすぽっ！</span>
              </button>
              <button
                onClick={() => setSelectedBranch('EN')}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
                  selectedBranch === 'EN'
                    ? 'bg-[#00F0FF] text-[#090D14] shadow-md shadow-cyan-950/60 font-black'
                    : 'text-[#00F0FF] hover:bg-[#00F0FF]/10'
                }`}
              >
                <span>VSPO! EN</span>
              </button>
            </div>

            {/* View Navigation Tabs */}
            <div className="bg-[#111724] p-1 rounded-xl border border-slate-700/80 flex items-center gap-1 shadow-inner">
              <button
                onClick={() => setCurrentTab('schedule')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currentTab === 'schedule'
                    ? 'bg-gradient-to-r from-[#FF4687] to-[#FF6EA2] text-white shadow-md shadow-pink-950/60 font-black scale-[1.02]'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>配信スケジュール</span>
              </button>

              <button
                onClick={() => setCurrentTab('talents')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currentTab === 'talents'
                    ? 'bg-gradient-to-r from-[#00F0FF] to-[#38E8FF] text-[#080C14] shadow-md shadow-cyan-950/60 font-black scale-[1.02]'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>タレント一覧・詳細情報</span>
              </button>

              <button
                onClick={() => setCurrentTab('favorites')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currentTab === 'favorites'
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md shadow-amber-950/60 font-black scale-[1.02]'
                    : 'text-amber-400 hover:text-amber-300 hover:bg-slate-800/60'
                }`}
              >
                <Star className={`w-3.5 h-3.5 ${currentTab === 'favorites' ? 'fill-slate-950 text-slate-950' : 'fill-amber-400 text-amber-400'}`} />
                <span>推しリスト</span>
                <span className="bg-amber-500/20 text-amber-300 text-[9px] font-black px-1.5 rounded-full border border-amber-500/40 font-gaming">
                  SOON
                </span>
              </button>

              <button
                onClick={() => setCurrentTab('store')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currentTab === 'store'
                    ? 'bg-gradient-to-r from-[#FF4687] via-[#FF6EA2] to-[#FF4687] text-white shadow-md shadow-pink-950/60 font-black scale-[1.02]'
                    : 'text-slate-300 hover:text-[#FF4687] hover:bg-slate-800/60'
                }`}
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>ストア</span>
              </button>

              <button
                onClick={() => setCurrentTab('analytics')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currentTab === 'analytics'
                    ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 shadow-md shadow-emerald-950/60 font-black scale-[1.02]'
                    : 'text-slate-300 hover:text-emerald-400 hover:bg-slate-800/60'
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5" />
                <span>登録者推移</span>
                <span className="bg-emerald-500/20 text-emerald-400 text-[9px] font-black px-1.5 rounded-full border border-emerald-500/40">
                  NEW
                </span>
              </button>

              <button
                onClick={() => setCurrentTab('community')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currentTab === 'community'
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md shadow-purple-950/60 font-black scale-[1.02]'
                    : 'text-slate-300 hover:text-purple-400 hover:bg-slate-800/60'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>ファン掲示板</span>
                <span className="bg-amber-500/20 text-amber-300 text-[9px] font-black px-1.5 rounded-full border border-amber-500/40 font-gaming">
                  SOON
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
