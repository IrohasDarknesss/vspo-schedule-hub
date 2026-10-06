import React, { useState } from 'react';
import { 
  Star, 
  Play, 
  Calendar, 
  ExternalLink, 
  ArrowRight, 
  Heart, 
  Users, 
  Radio, 
  Plus, 
  Check, 
  Search, 
  Filter, 
  Sparkles, 
  Eye, 
  Trash2,
  Lock,
  Rocket,
  Bell,
  Globe2,
  Tv,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  LogIn,
  UserPlus
} from 'lucide-react';
import StreamCard from './StreamCard';

export default function FavoritesView({
  favorites,
  members,
  membersMap,
  schedules,
  timezone,
  onToggleFavorite,
  onSelectStream,
  onSelectMember,
  onExploreTalents,
  onNavigateToLogin,
  onNavigateToRegister
}) {
  // Coming Soon Mode toggle (defaults to false for public release)
  const [isAdminPreview, setIsAdminPreview] = useState(false);

  // Interactive teaser states
  const [cheerCount, setCheerCount] = useState(() => {
    if (typeof window === 'undefined') return 942;
    return parseInt(localStorage.getItem('vspo_favorites_cheers') || '942', 10);
  });
  const [hasCheered, setHasCheered] = useState(false);
  const [notifyEmail, setNotifyEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('vspo_favorites_subscribed') === 'true';
  });

  // Underlying management state
  const [showManageModal, setShowManageModal] = useState(false);
  const [searchMemberQuery, setSearchMemberQuery] = useState('');
  const [manageBranchFilter, setManageBranchFilter] = useState('ALL');

  const favoriteMembers = members.filter(m => favorites.includes(m.id));
  const favoriteStreams = schedules.filter(s => favorites.includes(s.memberId));

  const liveFavoriteStreams = favoriteStreams.filter(s => s.status === 'live');
  const upcomingFavoriteStreams = favoriteStreams.filter(s => s.status === 'upcoming');

  const filteredAllMembers = members.filter(m => {
    if (manageBranchFilter !== 'ALL' && m.branch !== manageBranchFilter) return false;
    if (searchMemberQuery.trim() !== '') {
      const q = searchMemberQuery.toLowerCase();
      const matchName = m.name.toLowerCase().includes(q);
      const matchJp = m.jpName && m.jpName.toLowerCase().includes(q);
      const matchUnit = m.unit.toLowerCase().includes(q);
      if (!matchName && !matchJp && !matchUnit) return false;
    }
    return true;
  });

  const handleCheer = () => {
    const next = cheerCount + 1;
    setCheerCount(next);
    setHasCheered(true);
    localStorage.setItem('vspo_favorites_cheers', next.toString());
    setTimeout(() => setHasCheered(false), 2500);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!notifyEmail || !notifyEmail.includes('@')) return;
    setIsSubscribed(true);
    localStorage.setItem('vspo_favorites_subscribed', 'true');
  };

  // ----------------------------------------------------
  // PUBLIC MODE: COMING SOON TEASER VIEW
  // ----------------------------------------------------
  if (!isAdminPreview) {
    return (
      <div className="space-y-10 animate-fadeIn py-2">
        {/* Admin Secret Preview Switch */}
        <div className="flex justify-end items-center">
          <button
            onClick={() => setIsAdminPreview(true)}
            className="inline-flex items-center gap-1.5 text-[11px] text-slate-500 hover:text-slate-300 bg-slate-900/60 hover:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-800 transition-colors font-mono"
            title="運営・開発確認用のプレビュー画面に切り替えます"
          >
            <Lock className="w-3 h-3 text-amber-500" />
            <span>運営テストプレビューを開く</span>
          </button>
        </div>

        {/* Hero Showcase Card */}
        <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-[#0E1524] via-[#161D32] to-[#24170E] p-8 sm:p-12 shadow-2xl text-center">
          {/* Ambient Lighting & Glow */}
          <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-amber-500/25 to-[#00F0FF]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-pink-500/20 border border-amber-500/40 px-4 py-1.5 rounded-full shadow-lg shadow-amber-950/40">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
              <span className="text-xs font-black text-amber-300 font-gaming tracking-wider uppercase">
                COMING SOON • GLOBAL CLOUD SYNC
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl font-black text-white font-gaming tracking-wide leading-tight">
              全世界対応 パーソナル推しポータル
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-[#00F0FF]">
                MY FAVORITES & CLOUD SYNC
              </span>
            </h1>

            {/* Exciting Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium">
              世界中（日本・英語圏・アジア・欧米）のファンの皆様に向けて、
              PC・スマホ・タブレット間での<strong className="text-amber-300 font-bold ml-1">推し設定リアルタイムクラウド同期</strong>や
              <strong className="text-cyan-300 font-bold ml-1">ゲリラ配信プッシュ通知</strong>を搭載した
              次世代のお気に入りシステムを現在鋭意準備中です！
            </p>

            {/* Progress Bar */}
            <div className="bg-[#0A101C]/80 p-4 rounded-2xl border border-slate-700/70 max-w-xl mx-auto space-y-2 backdrop-blur-md">
              <div className="flex justify-between items-center text-xs font-bold font-gaming">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Rocket className="w-3.5 h-3.5 text-amber-400" />
                  グローバル同期システム 開発進捗
                </span>
                <span className="text-amber-400 font-mono font-black text-sm">92% COMPLETED</span>
              </div>
              <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 via-orange-500 to-[#00F0FF] rounded-full transition-all duration-1000 shadow-glow-amber"
                  style={{ width: '92%' }}
                />
              </div>
              <p className="text-[11px] text-slate-400 text-left">
                ※ 世界各国のタイムゾーン自動追従およびクロスデバイス同期APIの最終負荷検証を実施しています。
              </p>
            </div>

            {/* Member-Exclusive Unlock Banner & Buttons */}
            <div className="bg-[#0A101C]/90 p-5 rounded-2xl border border-amber-500/40 max-w-xl mx-auto space-y-3 backdrop-blur-md shadow-lg text-left">
              <div className="flex items-center gap-2 text-white font-bold text-xs sm:text-sm">
                <Lock className="w-4 h-4 text-amber-400" />
                <span className="font-gaming">推しリスト・クラウド同期は「会員登録・ログイン」で解放されます</span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
                複数端末（スマホ・PC・タブレット）での推しタレント設定の自動同期とゲリラ通知機能は、アカウント連携後にご利用いただけます。
                会員登録は完全無料です。
              </p>
              <div className="pt-1 flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={onNavigateToLogin}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <LogIn className="w-3.5 h-3.5 text-[#00F0FF]" />
                  <span>ログインして確認</span>
                </button>
                <button
                  type="button"
                  onClick={onNavigateToRegister}
                  className="px-4 py-2 rounded-xl text-xs font-black text-slate-950 bg-gradient-to-r from-amber-400 to-[#00F0FF] hover:brightness-110 transition-all flex items-center gap-1.5 shadow-md"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>無料新規登録ページへ</span>
                </button>
                <span className="text-[10px] text-amber-400 font-medium ml-auto">
                  ※ DB設計中のため認証ボタンは準備中状態です
                </span>
              </div>
            </div>

            {/* Cheer Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleCheer}
                className="relative group bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-sm px-7 py-3 rounded-2xl shadow-xl shadow-amber-950/60 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2.5"
              >
                <Heart className={`w-5 h-5 fill-slate-950 transition-transform ${hasCheered ? 'scale-150 animate-bounce' : 'group-hover:scale-125'}`} />
                <span>推しポータル公開を応援する！</span>
                <span className="bg-slate-950/30 text-slate-950 px-2 py-0.5 rounded-full text-xs font-mono font-bold">
                  {cheerCount.toLocaleString()}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="space-y-4">
          <div className="text-center space-y-1">
            <h2 className="text-xl sm:text-2xl font-black text-white font-gaming tracking-wide flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>COMING SOON 4大主要機能</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              世界中のファンがストレスなく推し活を楽しめる機能がまもなく登場します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Card 1 */}
            <div className="bg-[#0E1524] rounded-2xl border border-slate-800 hover:border-amber-500/40 p-6 transition-all shadow-lg hover:shadow-amber-950/20 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>端末間 クラウド推し同期</span>
                <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/30">
                  Cloud Sync
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                PCで登録した推しタレント設定が、スマホやタブレットでも自動で同期。面倒なアカウント登録不要で、URLシェアやワンタップQRコード同期にも対応します。
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0E1524] rounded-2xl border border-slate-800 hover:border-pink-500/40 p-6 transition-all shadow-lg hover:shadow-pink-950/20 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
                <Bell className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>ゲリラ配信 リアルタイム通知</span>
                <span className="text-[10px] bg-pink-500/20 text-pink-300 px-2 py-0.5 rounded-full border border-pink-500/30">
                  Push Alerts
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                推しが突発配信やゲリラ配信を開始した瞬間、即座にブラウザ通知・Webプッシュでお知らせ。開始5分前のリマインダーで大切な瞬間を見逃しません。
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0E1524] rounded-2xl border border-slate-800 hover:border-cyan-500/40 p-6 transition-all shadow-lg hover:shadow-cyan-950/20 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-[#00F0FF]">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>全世界タイムゾーン＆多言語</span>
                <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full border border-cyan-500/30">
                  Worldwide
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                JST（日本時間）に加え、北米（EST/PST）、欧州（CET/GMT）、アジア各国など現地時間へワンタップ切り替え。日英バイリンガルで世界中どこからでも快適に閲覧できます。
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#0E1524] rounded-2xl border border-slate-800 hover:border-purple-500/40 p-6 transition-all shadow-lg hover:shadow-purple-950/20 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Tv className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>推し限定 マルチビューシアター</span>
                <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full border border-purple-500/30">
                  Multi-View
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                大会本番やスクリム、大型コラボの際に、お気に入り登録したメンバーの視点だけを2画面・4画面で同時に再生できる専用カスタムビューアです。
              </p>
            </div>
          </div>
        </div>

        {/* Launch Notification Signup */}
        <div className="bg-[#0B101C] rounded-2xl border border-slate-800 p-6 sm:p-8 max-w-xl mx-auto text-center space-y-4">
          <div className="inline-flex p-3 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-1">
            <Bell className="w-5 h-5" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white font-gaming">
            公開時に一番早く通知を受け取る
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            機能の一般公開と同時にブラウザ通知または案内をお届けします（登録無料・いつでも解除可能）
          </p>

          {isSubscribed ? (
            <div className="p-3 bg-emerald-950/40 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs font-bold flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>事前通知登録が完了しました！公開をお楽しみに。</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                value={notifyEmail}
                onChange={(e) => setNotifyEmail(e.target.value)}
                placeholder="メールアドレスを入力..."
                className="flex-1 bg-[#141C2B] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs px-5 py-2.5 rounded-xl transition-all shadow-md shrink-0"
              >
                登録する
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // ADMIN PREVIEW MODE: FULL FAVORITES MANAGEMENT
  // ----------------------------------------------------
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Admin Notice Bar */}
      <div className="bg-amber-950/40 border border-amber-500/40 rounded-xl p-3 flex items-center justify-between text-xs text-amber-200">
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4 text-amber-400" />
          <span className="font-bold">【運営テストプレビュー表示中】 現在一般ユーザーにはComing Soon画面が表示されています</span>
        </div>
        <button
          onClick={() => setIsAdminPreview(false)}
          className="text-xs bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 px-2.5 py-1 rounded-lg border border-amber-500/40 transition-colors font-bold"
        >
          Coming Soon表示に戻す
        </button>
      </div>

      {/* Header Bar with Stats & Quick Add Button */}
      <div className="bg-[#0E1522] rounded-2xl border border-slate-800 p-5 sm:p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-orange-500/20 text-amber-400 border border-amber-400/40 shadow-lg shadow-amber-950/40">
              <Star className="w-6 h-6 fill-amber-400" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white font-gaming tracking-wide flex items-center gap-2">
                <span>MY FAVORITES</span>
                <span className="text-xs bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded font-bold border border-amber-400/30">
                  推しタレント限定ポータル
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                お気に入りに登録したタレントの配信予定・LIVE通知・アーカイブをまとめてチェックできます。
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowManageModal(!showManageModal)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs px-4 py-2.5 rounded-xl shadow-lg shadow-amber-950/50 transition-all hover:scale-105"
            >
              <Plus className="w-4 h-4" />
              <span>推しメンバーを追加・管理</span>
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mt-5 pt-4 border-t border-slate-800/80">
          <div className="bg-[#141C2B] p-2.5 sm:p-3 rounded-xl border border-slate-700/60 text-center">
            <span className="text-[11px] text-slate-400 block font-semibold">登録推し人数</span>
            <span className="text-lg sm:text-xl font-black text-amber-400 font-mono">
              {favoriteMembers.length} 名
            </span>
          </div>

          <div className="bg-[#141C2B] p-2.5 sm:p-3 rounded-xl border border-slate-700/60 text-center">
            <span className="text-[11px] text-slate-400 block font-semibold">現在LIVE中</span>
            <span className="text-lg sm:text-xl font-black text-red-500 font-mono flex items-center justify-center gap-1">
              {liveFavoriteStreams.length > 0 && <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />}
              {liveFavoriteStreams.length} 件
            </span>
          </div>

          <div className="bg-[#141C2B] p-2.5 sm:p-3 rounded-xl border border-slate-700/60 text-center">
            <span className="text-[11px] text-slate-400 block font-semibold">今後の配信予定</span>
            <span className="text-lg sm:text-xl font-black text-[#00F0FF] font-mono">
              {upcomingFavoriteStreams.length} 件
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      {favoriteMembers.length === 0 ? (
        <div className="bg-[#0E1522] rounded-2xl border border-dashed border-slate-700 p-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400">
            <Star className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-white font-gaming">まだ推しタレントが登録されていません</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            推しメンバーを登録すると、そのメンバーだけの配信タイムテーブルやLIVE情報がここに集約されます。
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={() => setShowManageModal(true)}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs px-5 py-2.5 rounded-xl transition-all shadow-md"
            >
              推しメンバーを選ぶ
            </button>
            <button
              onClick={onExploreTalents}
              className="bg-[#1E293B] hover:bg-slate-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
            >
              タレント名鑑を見る
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>推しタレントの直近配信スケジュール</span>
            </h3>
            <span className="text-xs text-slate-400 font-mono">
              全 {favoriteStreams.length} 件
            </span>
          </div>

          {favoriteStreams.length === 0 ? (
            <div className="bg-[#0E1522] rounded-2xl border border-slate-800 p-8 text-center text-slate-400 text-xs">
              現在、登録した推しメンバーの配信予定はありません。
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {favoriteStreams.map(stream => {
                const member = membersMap[stream.memberId];
                if (!member) return null;
                return (
                  <StreamCard
                    key={stream.id}
                    stream={stream}
                    member={member}
                    timezone={timezone}
                    isFavorite={true}
                    onToggleFavorite={() => onToggleFavorite(member.id)}
                    onSelectStream={() => onSelectStream(stream)}
                    onSelectMember={() => onSelectMember(member)}
                  />
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Member Management Modal */}
      {showManageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#0E1522] border border-slate-800 rounded-3xl max-w-2xl w-full p-6 space-y-5 max-h-[90vh] flex flex-col shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                <h3 className="text-lg font-bold text-white font-gaming">推しメンバー管理</h3>
              </div>
              <button
                onClick={() => setShowManageModal(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchMemberQuery}
                  onChange={(e) => setSearchMemberQuery(e.target.value)}
                  placeholder="メンバー名で検索..."
                  className="w-full bg-[#141C2B] border border-slate-700/80 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>
              <div className="bg-[#141C2B] p-1 rounded-xl border border-slate-700 flex text-xs font-bold">
                {['ALL', 'JP', 'EN'].map(b => (
                  <button
                    key={b}
                    onClick={() => setManageBranchFilter(b)}
                    className={`px-3 py-1 rounded-lg transition-colors ${
                      manageBranchFilter === b ? 'bg-amber-400 text-slate-950 font-black' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
              {filteredAllMembers.map(m => {
                const isFav = favorites.includes(m.id);
                return (
                  <div
                    key={m.id}
                    onClick={() => onToggleFavorite(m.id)}
                    className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                      isFav 
                        ? 'bg-amber-500/10 border-amber-500/40 shadow-sm' 
                        : 'bg-[#141C2B]/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <img src={m.avatar} alt={m.name} className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-white">{m.name}</span>
                          <span className="text-[10px] text-slate-400">{m.unit}</span>
                        </div>
                        <span className="text-[11px] text-slate-400">{m.fanName}</span>
                      </div>
                    </div>

                    <button
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        isFav 
                          ? 'bg-amber-400 text-slate-950 shadow-md font-black' 
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {isFav ? '登録中 ★' : '+ 追加'}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex justify-end border-t border-slate-800">
              <button
                onClick={() => setShowManageModal(false)}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs px-5 py-2.5 rounded-xl transition-all"
              >
                完了
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
