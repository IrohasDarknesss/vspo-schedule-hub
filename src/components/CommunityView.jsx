import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Send, 
  Heart, 
  Pin, 
  PlusCircle, 
  ArrowLeft, 
  Flame, 
  Clock, 
  User, 
  Star,
  CheckCircle2,
  X,
  Sparkles,
  ShieldCheck,
  Trophy,
  ShoppingBag,
  Bell,
  Lock,
  Eye,
  Rocket,
  Check,
  SlidersHorizontal,
  ChevronRight,
  LogIn,
  UserPlus
} from 'lucide-react';
import { getStoredCommunityThreads, saveCommunityThreads } from '../data/communityBoard';

export const CATEGORIES = [
  { id: 'all', label: 'すべて', icon: '💬' },
  { id: 'esports', label: '🏆 大会・実況', icon: '🏆' },
  { id: 'general', label: '✨ 全体雑談', icon: '✨' },
  { id: 'vspo-en', label: '🌐 VSPO! EN', icon: '🌐' },
  { id: 'goods', label: '🛍️ グッズ・イベント', icon: '🛍️' },
];

export default function CommunityView({ 
  members, 
  membersMap, 
  onSelectMember,
  onNavigateToLogin,
  onNavigateToRegister 
}) {
  // Production / Coming Soon Mode toggle (defaults to Teaser / Coming Soon)
  const [isAdminPreview, setIsAdminPreview] = useState(false);
  
  // Interactive teaser state
  const [cheerCount, setCheerCount] = useState(() => {
    if (typeof window === 'undefined') return 1248;
    return parseInt(localStorage.getItem('vspo_board_cheers') || '1248', 10);
  });
  const [hasCheered, setHasCheered] = useState(false);
  const [notifyEmail, setNotifyEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('vspo_board_subscribed') === 'true';
  });

  // Underlying board state (kept intact for admin preview & future launch)
  const [threads, setThreads] = useState(() => getStoredCommunityThreads());
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeThreadId, setActiveThreadId] = useState(null);
  
  // New thread modal
  const [isNewThreadModalOpen, setIsNewThreadModalOpen] = useState(false);
  const [newThreadTitle, setNewThreadTitle] = useState('');
  const [newThreadCategory, setNewThreadCategory] = useState('general');
  const [newThreadAuthor, setNewThreadAuthor] = useState(() => {
    if (typeof window === 'undefined') return '';
    return localStorage.getItem('vspo_user_name') || '';
  });
  const [newThreadFav, setNewThreadFav] = useState('kurumi-noah');
  const [newThreadContent, setNewThreadContent] = useState('');

  // New reply form inside active thread
  const [replyAuthor, setReplyAuthor] = useState(() => {
    if (typeof window === 'undefined') return '';
    return localStorage.getItem('vspo_user_name') || '';
  });
  const [replyFav, setReplyFav] = useState('ichinose-uruha');
  const [replyContent, setReplyContent] = useState('');

  // Persist threads
  useEffect(() => {
    saveCommunityThreads(threads);
  }, [threads]);

  // Handle cheer button
  const handleCheer = () => {
    const next = cheerCount + 1;
    setCheerCount(next);
    setHasCheered(true);
    localStorage.setItem('vspo_board_cheers', next.toString());
    setTimeout(() => setHasCheered(false), 2500);
  };

  // Handle email notification subscribe
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!notifyEmail || !notifyEmail.includes('@')) return;
    setIsSubscribed(true);
    localStorage.setItem('vspo_board_subscribed', 'true');
  };

  // Active thread object
  const activeThread = threads.find(t => t.id === activeThreadId) || null;

  // Filter threads
  const filteredThreads = threads.filter(t => {
    if (selectedCategory === 'all') return true;
    return t.category === selectedCategory;
  });

  // Handle like thread
  const handleLikeThread = (threadId, e) => {
    e?.stopPropagation();
    setThreads(prev => prev.map(t => {
      if (t.id === threadId) {
        return { ...t, likes: t.likes + 1 };
      }
      return t;
    }));
  };

  // Handle like post
  const handleLikePost = (threadId, postId) => {
    setThreads(prev => prev.map(t => {
      if (t.id === threadId) {
        return {
          ...t,
          posts: t.posts.map(p => p.id === postId ? { ...p, likes: p.likes + 1 } : p)
        };
      }
      return t;
    }));
  };

  // Handle create thread
  const handleCreateThread = (e) => {
    e.preventDefault();
    if (!newThreadTitle.trim() || !newThreadContent.trim()) return;

    const authorName = newThreadAuthor.trim() || '名無しのぶいすぽファン';
    localStorage.setItem('vspo_user_name', authorName);

    const now = new Date();
    const timeStr = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;

    const newId = `thread-${Date.now()}`;
    const newThread = {
      id: newId,
      title: newThreadTitle.trim(),
      category: newThreadCategory,
      pinned: false,
      author: authorName,
      authorFavId: newThreadFav,
      createdAt: timeStr,
      likes: 1,
      posts: [
        {
          id: `post-${Date.now()}-1`,
          author: authorName,
          authorFavId: newThreadFav,
          content: newThreadContent.trim(),
          createdAt: timeStr,
          likes: 1,
        }
      ]
    };

    const updated = [newThread, ...threads];
    setThreads(updated);
    setIsNewThreadModalOpen(false);
    setNewThreadTitle('');
    setNewThreadContent('');
    setActiveThreadId(newId);
  };

  // Handle post reply
  const handlePostReply = (e) => {
    e.preventDefault();
    if (!replyContent.trim() || !activeThreadId) return;

    const authorName = replyAuthor.trim() || '名無しのぶいすぽファン';
    localStorage.setItem('vspo_user_name', authorName);

    const now = new Date();
    const timeStr = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;

    const newPost = {
      id: `post-${Date.now()}`,
      author: authorName,
      authorFavId: replyFav,
      content: replyContent.trim(),
      createdAt: timeStr,
      likes: 0,
    };

    setThreads(prev => prev.map(t => {
      if (t.id === activeThreadId) {
        return {
          ...t,
          posts: [...t.posts, newPost]
        };
      }
      return t;
    }));

    setReplyContent('');
  };

  // ----------------------------------------------------
  // IF NOT IN ADMIN PREVIEW: RENDER COMING SOON TEASER VIEW
  // ----------------------------------------------------
  if (!isAdminPreview) {
    return (
      <div className="space-y-10 animate-fadeIn py-2">
        {/* Admin Secret Toggle Bar */}
        <div className="flex justify-end items-center">
          <button
            onClick={() => setIsAdminPreview(true)}
            className="inline-flex items-center gap-1.5 text-[11px] text-slate-500 hover:text-slate-300 bg-slate-900/60 hover:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-800 transition-colors font-mono"
            title="運営・開発者用のプレビュー画面に切り替えます"
          >
            <Lock className="w-3 h-3 text-amber-500" />
            <span>運営テストプレビューを開く</span>
          </button>
        </div>

        {/* Hero Showcase Card */}
        <div className="relative overflow-hidden rounded-3xl border border-pink-500/30 bg-gradient-to-br from-[#0D1322] via-[#141C30] to-[#250F28] p-8 sm:p-12 shadow-2xl text-center">
          {/* Ambient Lighting & Hologram Backgrounds */}
          <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-[#FF4687]/25 to-[#00F0FF]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            {/* Status Pills */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 border border-pink-500/40 px-4 py-1.5 rounded-full shadow-glow-pink">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF4687] animate-ping" />
              <span className="text-xs font-black text-white font-gaming tracking-wider uppercase">
                COMING SOON • UNDER DEVELOPMENT
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl font-black text-white font-gaming tracking-wide leading-tight">
              ぶいすぽっ！特設ラウンジ
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4687] via-[#FF88B4] to-[#00F0FF]">
                公式ファン掲示板システム
              </span>
            </h1>

            {/* Exciting Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium">
              推しタレントの熱い応援、大会スクリムの実況、切り抜きやファンアートの布教まで。
              ぶいすぽっ！を愛するすべてのファンが快適かつ治安よく熱狂できる、
              <strong className="text-white font-bold ml-1">公式コミュニティプラットフォーム</strong>を現在鋭意開発中です！
            </p>

            {/* Development Progress Bar */}
            <div className="bg-[#0B101A]/80 p-4 rounded-2xl border border-slate-700/70 max-w-xl mx-auto space-y-2 backdrop-blur-md">
              <div className="flex justify-between items-center text-xs font-bold font-gaming">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Rocket className="w-3.5 h-3.5 text-[#00F0FF]" />
                  開発進捗状況 (MODERATION & SECURITY INTEGRATION)
                </span>
                <span className="text-[#00F0FF] font-mono font-black text-sm">88% COMPLETED</span>
              </div>
              <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700">
                <div 
                  className="h-full bg-gradient-to-r from-[#FF4687] via-purple-500 to-[#00F0FF] rounded-full transition-all duration-1000 shadow-glow-cyan"
                  style={{ width: '88%' }}
                />
              </div>
              <p className="text-[11px] text-slate-400 text-left">
                ※ 現在、ファンの皆様が安心して交流できるよう「荒らし対策・推し認証バッジ」の最終テストを実施しています。
              </p>
            </div>

            {/* Member-Exclusive Unlock Banner & Buttons */}
            <div className="bg-[#0B101A]/90 p-5 rounded-2xl border border-pink-500/40 max-w-xl mx-auto space-y-3 backdrop-blur-md shadow-lg text-left">
              <div className="flex items-center gap-2 text-white font-bold text-xs sm:text-sm">
                <Lock className="w-4 h-4 text-[#FF4687]" />
                <span className="font-gaming">ファン掲示板は「会員登録・ログイン」で解放される限定機能です</span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
                ファンの治安維持と推し活の健全な交流のため、アカウント認証後に投稿・スレッド作成が解放されます。
                アカウント作成は完全無料です。
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
                  className="px-4 py-2 rounded-xl text-xs font-black text-white bg-gradient-to-r from-[#FF4687] to-[#00F0FF] hover:brightness-110 transition-all flex items-center gap-1.5 shadow-md"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>無料新規登録ページへ</span>
                </button>
                <span className="text-[10px] text-amber-400 font-medium ml-auto">
                  ※ DB設計中のため認証ボタンは準備中状態です
                </span>
              </div>
            </div>

            {/* Interactive Cheer Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleCheer}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#FF4687] to-pink-600 hover:from-[#FF6EA2] hover:to-pink-500 text-white rounded-2xl font-bold font-gaming text-sm sm:text-base shadow-xl shadow-pink-950/60 hover:shadow-glow-pink hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
              >
                <Flame className={`w-5 h-5 text-amber-300 ${hasCheered ? 'animate-bounce' : 'group-hover:scale-110 transition-transform'}`} />
                <span>公開を期待して応援する！</span>
                <span className="bg-black/30 px-2.5 py-0.5 rounded-full text-xs font-mono font-black text-pink-200">
                  {cheerCount.toLocaleString()} 期待
                </span>
              </button>
            </div>

            {hasCheered && (
              <p className="text-xs font-bold text-amber-300 animate-fadeIn">
                ✨ 応援ありがとうございます！公開に向けて急ピッチで準備を進めています！
              </p>
            )}
          </div>
        </div>

        {/* Feature Previews: 4 Grand Modules */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[11px] font-gaming text-[#00F0FF] tracking-wider uppercase">FEATURES PREVIEW</div>
              <h2 className="text-xl sm:text-2xl font-black text-white font-gaming">
                解禁予定の4大プレミアム機能
              </h2>
            </div>
            <span className="text-xs text-slate-400">実装予定機能の先行チラ見せ</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#101726] to-[#0D121D] border border-slate-800 hover:border-pink-500/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 mb-4 group-hover:scale-110 transition-transform">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-2 font-gaming flex items-center gap-2">
                <span>大会・スクリム リアルタイム実況ラウンジ</span>
                <span className="text-[10px] bg-pink-500/20 text-pink-300 px-2 py-0.5 rounded font-mono">LIVE SYNC</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                CRカップやV最協決定戦などのビッグイベント時、同じ推しやチームを応援するファン同士で秒単位の熱狂実況を共有できます。
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#101726] to-[#0D121D] border border-slate-800 hover:border-cyan-500/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-2 font-gaming flex items-center gap-2">
                <span>全32名 推し別・ユニット別スレッド</span>
                <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded font-mono">ALL TALENTS</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Lupinus、Iris Black、Cattleya、VGorilla、そしてVSPO! ENまで。推しタレントの魅力や神クリップ、おすすめ動画を心ゆくまで語り合えます。
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#101726] to-[#0D121D] border border-slate-800 hover:border-amber-500/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-2 font-gaming flex items-center gap-2">
                <span>公式グッズ＆イベント情報交換</span>
                <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-mono">GOODS & EXPO</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                ポップアップストアの現地レポや、コミケ・イベントでの同行者募集、新作グッズの感想など、ファン活動（推し活）をフルサポート。
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#101726] to-[#0D121D] border border-slate-800 hover:border-emerald-500/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-2 font-gaming flex items-center gap-2">
                <span>治安重視の安心モデレーション＆推しバッジ</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">CLEAN & SAFE</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                タレントや他ファンへの誹謗中傷・荒らしを徹底排除する安心設計。自分の推しマークを掲げて誇りを持って交流できるバッジ機能も搭載。
              </p>
            </div>
          </div>
        </div>

        {/* Roadmap Steps */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0F1625] border border-slate-800 space-y-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#00F0FF]" />
            <h3 className="text-base sm:text-lg font-bold text-white font-gaming">
              公開に向けたロードマップ (ROADMAP)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#141D2E] border border-emerald-500/40 space-y-1">
              <div className="text-[11px] font-bold text-emerald-400 flex items-center gap-1 font-mono">
                <Check className="w-3.5 h-3.5" /> PHASE 01
              </div>
              <div className="text-xs font-black text-white">基本設計・UI構築</div>
              <p className="text-[11px] text-slate-400">サイバー調デザイン及びスレッド構造完了</p>
            </div>

            <div className="p-4 rounded-xl bg-[#141D2E] border border-emerald-500/40 space-y-1">
              <div className="text-[11px] font-bold text-emerald-400 flex items-center gap-1 font-mono">
                <Check className="w-3.5 h-3.5" /> PHASE 02
              </div>
              <div className="text-xs font-black text-white">推し連携＆カテゴリ分類</div>
              <p className="text-[11px] text-slate-400">全32名タレントデータとの同期システム完成</p>
            </div>

            <div className="p-4 rounded-xl bg-[#1A2338] border border-cyan-500/60 space-y-1 shadow-lg shadow-cyan-950/40">
              <div className="text-[11px] font-bold text-[#00F0FF] flex items-center gap-1 font-mono">
                <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" /> PHASE 03 (進行中)
              </div>
              <div className="text-xs font-black text-white">治安モデレーション検証</div>
              <p className="text-[11px] text-cyan-200">通報機能及び不適切ワード除去の調整中</p>
            </div>

            <div className="p-4 rounded-xl bg-[#121927] border border-slate-800 space-y-1 opacity-70">
              <div className="text-[11px] font-bold text-slate-500 font-mono">
                PHASE 04
              </div>
              <div className="text-xs font-black text-slate-300">一般グランドオープン</div>
              <p className="text-[11px] text-slate-500">近日公開予定！お楽しみに</p>
            </div>
          </div>
        </div>

        {/* Pre-registration / Notification Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-[#161F32] to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Bell className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold text-amber-300 font-gaming">EARLY ACCESS NOTIFICATION</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              掲示板が一般解禁されたら通知を受け取りますか？
            </h4>
            <p className="text-xs text-slate-400">
              公開時にサイト上でいち早くアナウンスをお届けします（登録無料）。
            </p>
          </div>

          <div className="w-full sm:w-auto shrink-0">
            {isSubscribed ? (
              <div className="px-5 py-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>事前通知の受付が完了しています！お楽しみに！</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full sm:w-80">
                <input
                  type="email"
                  placeholder="メールアドレスを入力"
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00F0FF]"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#00F0FF] hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl font-gaming shrink-0 transition-colors"
                >
                  通知登録
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // IF IN ADMIN PREVIEW: RENDER FULL COMMUNITY BOARD VIEW
  // ----------------------------------------------------
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Admin Mode Notice Bar */}
      <div className="flex items-center justify-between bg-amber-500/10 border border-amber-500/40 px-4 py-2.5 rounded-xl text-xs">
        <div className="flex items-center gap-2 text-amber-300 font-bold">
          <Lock className="w-4 h-4" />
          <span>【運営専用プレビューモード】一般ユーザーには「準備中画面」が表示されています</span>
        </div>
        <button
          onClick={() => setIsAdminPreview(false)}
          className="text-slate-300 hover:text-white bg-slate-800 px-3 py-1 rounded-lg text-xs font-semibold hover:bg-slate-700 transition-colors"
        >
          準備中画面に戻す
        </button>
      </div>

      {/* Top Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-r from-[#0C1220] via-[#151D2F] to-[#201228] p-6 sm:p-7 shadow-xl">
        <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#FF4687]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#00F0FF]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="bg-[#FF4687]/20 text-[#FF4687] text-xs font-bold px-3 py-0.5 rounded-full border border-[#FF4687]/40 flex items-center gap-1.5 font-gaming">
                <MessageSquare className="w-3.5 h-3.5" />
                FAN COMMUNITY BOARD (ADMIN TEST)
              </span>
              <span className="text-xs text-slate-400">ファン交流・実況・応援掲示板</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white font-gaming tracking-wide">
              ぶいすぽっ！公式ファン掲示板
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              大会の応援、今日の配信の感想、推しタレントの布教など、ファン同士で自由に語り合おう！
            </p>
          </div>

          <button
            onClick={() => setIsNewThreadModalOpen(true)}
            className="px-5 py-3 bg-gradient-to-r from-[#FF4687] to-pink-600 hover:from-[#FF6EA2] hover:to-pink-500 text-white rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-pink-950/60 transition-all flex items-center gap-2 shrink-0 self-start md:self-auto"
          >
            <PlusCircle className="w-4 h-4" />
            新規スレッドを立てる
          </button>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => {
              setSelectedCategory(cat.id);
              setActiveThreadId(null);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 border ${
              selectedCategory === cat.id
                ? 'bg-[#18253D] text-[#00F0FF] border-[#00F0FF]/50 shadow-glow-cyan'
                : 'bg-[#101726] text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Thread List or Active Thread View */}
      {activeThread ? (
        // Thread Detail & Replies
        <div className="space-y-4">
          <button
            onClick={() => setActiveThreadId(null)}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors bg-[#121927] px-3 py-1.5 rounded-lg border border-slate-800"
          >
            <ArrowLeft className="w-4 h-4" />
            スレッド一覧に戻る
          </button>

          {/* Thread Header Post */}
          <div className="bg-[#101726] rounded-2xl border border-slate-700/80 p-6 shadow-xl space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  {activeThread.pinned && (
                    <span className="bg-amber-500/20 text-amber-400 border border-amber-500/40 text-[10px] px-2 py-0.5 rounded font-bold flex items-center gap-1 font-gaming">
                      <Pin className="w-3 h-3" /> PINNED
                    </span>
                  )}
                  <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-0.5 rounded-full font-bold">
                    {CATEGORIES.find(c => c.id === activeThread.category)?.label || '雑談'}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    {activeThread.createdAt}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white">
                  {activeThread.title}
                </h2>
              </div>

              <button
                onClick={(e) => handleLikeThread(activeThread.id, e)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 text-pink-400 border border-pink-500/30 text-xs font-bold transition-all shrink-0"
              >
                <Heart className="w-4 h-4 fill-pink-500/40" />
                <span>{activeThread.likes}</span>
              </button>
            </div>

            {/* Author */}
            <div className="flex items-center gap-2 pt-2 border-t border-slate-800/80 text-xs">
              <span className="text-slate-400">スレ主:</span>
              <strong className="text-slate-200">{activeThread.author}</strong>
              {membersMap[activeThread.authorFavId] && (
                <span className="inline-flex items-center gap-1 bg-[#141F32] px-2 py-0.5 rounded text-[11px] text-cyan-300 font-semibold border border-cyan-500/30">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  {membersMap[activeThread.authorFavId].name} 推し
                </span>
              )}
            </div>
          </div>

          {/* Posts / Replies List */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-400 px-1 font-gaming">
              レス一覧 ({activeThread.posts.length}件)
            </h3>

            {activeThread.posts.map((post, index) => {
              const fav = membersMap[post.authorFavId];
              return (
                <div 
                  key={post.id} 
                  className={`p-4 rounded-xl border transition-all ${
                    index === 0 
                      ? 'bg-[#121927] border-slate-700' 
                      : 'bg-[#0E1522] border-slate-800 hover:border-slate-700/80'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2 text-xs">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-slate-500 font-bold">#{index + 1}</span>
                      <strong className="text-white font-bold">{post.author}</strong>
                      {fav && (
                        <span className="inline-flex items-center gap-1 bg-[#162236] text-[10px] px-2 py-0.5 rounded text-cyan-300 border border-cyan-500/20 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: fav.color }} />
                          {fav.name} 推し
                        </span>
                      )}
                      <span className="text-[11px] text-slate-500 font-mono">{post.createdAt}</span>
                    </div>

                    <button
                      onClick={() => handleLikePost(activeThread.id, post.id)}
                      className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-pink-400 transition-colors p-1"
                    >
                      <Heart className="w-3.5 h-3.5" />
                      <span>{post.likes}</span>
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 whitespace-pre-wrap leading-relaxed">
                    {post.content}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Reply Form */}
          <form onSubmit={handlePostReply} className="p-4 sm:p-5 rounded-2xl bg-[#101726] border border-slate-700 space-y-3 shadow-lg">
            <div className="text-xs font-bold text-white font-gaming flex items-center gap-2">
              <Send className="w-3.5 h-3.5 text-[#00F0FF]" />
              このスレッドに返信する
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] text-slate-400 block mb-1">お名前 (ニックネーム)</label>
                <input
                  type="text"
                  placeholder="名無しのぶいすぽファン"
                  value={replyAuthor}
                  onChange={(e) => setReplyAuthor(e.target.value)}
                  className="w-full bg-[#0C121D] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00F0FF]"
                />
              </div>

              <div>
                <label className="text-[10px] text-slate-400 block mb-1">推しタレント</label>
                <select
                  value={replyFav}
                  onChange={(e) => setReplyFav(e.target.value)}
                  className="w-full bg-[#0C121D] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00F0FF]"
                >
                  {members.map(m => (
                    <option key={m.id} value={m.id}>{m.name} ({m.branch})</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="text-[10px] text-slate-400 block mb-1">返信メッセージ</label>
              <textarea
                rows={3}
                placeholder="みんなで楽しく盛り上がろう！誹謗中傷は禁止です。"
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                className="w-full bg-[#0C121D] border border-slate-700 rounded-lg p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00F0FF] resize-none"
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-5 py-2.5 bg-gradient-to-r from-[#00F0FF] to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                書き込む
              </button>
            </div>
          </form>
        </div>
      ) : (
        // Thread List
        <div className="space-y-3">
          {filteredThreads.map(thread => {
            const authorFav = membersMap[thread.authorFavId];
            return (
              <div
                key={thread.id}
                onClick={() => setActiveThreadId(thread.id)}
                className="p-4 sm:p-5 rounded-2xl bg-[#101726] border border-slate-800 hover:border-slate-700 hover:bg-[#131B2B] transition-all cursor-pointer group shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      {thread.pinned && (
                        <span className="bg-amber-500/20 text-amber-400 border border-amber-500/40 text-[10px] px-2 py-0.5 rounded font-bold flex items-center gap-1 font-gaming">
                          <Pin className="w-3 h-3" /> PINNED
                        </span>
                      )}
                      <span className="text-[10px] font-bold bg-[#172236] text-slate-300 px-2 py-0.5 rounded-full border border-slate-700/50">
                        {CATEGORIES.find(c => c.id === thread.category)?.label || '雑談'}
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono">
                        {thread.createdAt}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#00F0FF] transition-colors truncate">
                      {thread.title}
                    </h3>

                    {/* First post snippet */}
                    {thread.posts && thread.posts[0] && (
                      <p className="text-xs text-slate-400 line-clamp-1">
                        {thread.posts[0].content}
                      </p>
                    )}

                    {/* Author & Meta */}
                    <div className="flex items-center gap-3 pt-2 text-[11px] text-slate-400">
                      <span>投稿者: <strong className="text-slate-300">{thread.author}</strong></span>
                      {authorFav && (
                        <span className="inline-flex items-center gap-1 bg-[#131D2D] px-2 py-0.5 rounded text-[10px] text-cyan-300 border border-cyan-500/20">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: authorFav.color }} />
                          {authorFav.name}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Likes and replies counter */}
                  <div className="flex sm:flex-col items-center gap-2 shrink-0">
                    <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-slate-400 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                      <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                      {thread.posts.length}
                    </span>
                    <button
                      onClick={(e) => handleLikeThread(thread.id, e)}
                      className="inline-flex items-center gap-1 text-xs font-mono font-bold text-pink-400 bg-pink-500/10 px-2.5 py-1 rounded-lg border border-pink-500/30 hover:bg-pink-500/20 transition-colors"
                    >
                      <Heart className="w-3.5 h-3.5 fill-pink-500/30" />
                      {thread.likes}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* New Thread Modal */}
      {isNewThreadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#0E1524] rounded-2xl border border-slate-700 p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white font-gaming flex items-center gap-2">
                <PlusCircle className="w-4 h-4 text-[#FF4687]" />
                新規スレッド作成 (運営テスト)
              </h3>
              <button
                onClick={() => setIsNewThreadModalOpen(false)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateThread} className="space-y-4">
              <div>
                <label className="text-xs text-slate-300 font-bold block mb-1">スレッドタイトル</label>
                <input
                  type="text"
                  placeholder="例: 今日のCRカップスクリムについて語ろう！"
                  value={newThreadTitle}
                  onChange={(e) => setNewThreadTitle(e.target.value)}
                  className="w-full bg-[#121B2B] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00F0FF]"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-300 font-bold block mb-1">カテゴリ</label>
                  <select
                    value={newThreadCategory}
                    onChange={(e) => setNewThreadCategory(e.target.value)}
                    className="w-full bg-[#121B2B] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00F0FF]"
                  >
                    {CATEGORIES.filter(c => c.id !== 'all').map(c => (
                      <option key={c.id} value={c.id}>{c.icon} {c.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs text-slate-300 font-bold block mb-1">あなたの推し</label>
                  <select
                    value={newThreadFav}
                    onChange={(e) => setNewThreadFav(e.target.value)}
                    className="w-full bg-[#121B2B] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00F0FF]"
                  >
                    {members.map(m => (
                      <option key={m.id} value={m.id}>{m.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-300 font-bold block mb-1">お名前 (ニックネーム)</label>
                <input
                  type="text"
                  placeholder="名無しのぶいすぽファン"
                  value={newThreadAuthor}
                  onChange={(e) => setNewThreadAuthor(e.target.value)}
                  className="w-full bg-[#121B2B] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00F0FF]"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 font-bold block mb-1">本文</label>
                <textarea
                  rows={4}
                  placeholder="スレッドの最初の投稿内容を書いてください。"
                  value={newThreadContent}
                  onChange={(e) => setNewThreadContent(e.target.value)}
                  className="w-full bg-[#121B2B] border border-slate-700 rounded-xl p-3.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00F0FF] resize-none"
                  required
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsNewThreadModalOpen(false)}
                  className="px-4 py-2 text-xs text-slate-400 hover:text-white"
                >
                  キャンセル
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-gradient-to-r from-[#FF4687] to-pink-600 text-white font-bold text-xs rounded-xl shadow-md hover:from-pink-500 hover:to-pink-600 transition-colors"
                >
                  スレッドを作成する
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
