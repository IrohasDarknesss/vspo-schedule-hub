import React, { useState } from 'react';
import { 
  LogIn, 
  UserPlus, 
  Lock, 
  Mail, 
  User, 
  Key, 
  ShieldAlert, 
  Sparkles, 
  ArrowLeft, 
  CheckCircle2, 
  Star, 
  MessageSquare, 
  Bell, 
  Heart,
  Globe2
} from 'lucide-react';

export default function AuthView({ 
  mode = 'login', 
  onSwitchMode, 
  onBackToHome,
  members = [] 
}) {
  const isLogin = mode === 'login';

  // Form states (controlled inputs for full interactive fidelity)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [favoriteTalent, setFavoriteTalent] = useState('ichinose-uruha');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  return (
    <div className="max-w-4xl mx-auto py-6 sm:py-10 px-4 space-y-8 animate-fadeIn">
      {/* Back to Home Button */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white bg-[#0E1524] hover:bg-slate-800 px-4 py-2 rounded-xl border border-slate-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>配信スケジュールへ戻る</span>
        </button>

        {/* Global Fans Badge */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
          <Globe2 className="w-4 h-4 text-[#00F0FF]" />
          <span>VSPO! GLOBAL ACCOUNT SYSTEM</span>
        </div>
      </div>

      {/* Main Auth Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Form Card */}
        <div className="lg:col-span-7 bg-[#0E1524] rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -ml-16 -mb-16" />

          {/* Mode Tabs */}
          <div className="flex bg-[#141C2B] p-1 rounded-2xl border border-slate-700/80 mb-6">
            <button
              onClick={() => onSwitchMode('login')}
              className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-2 ${
                isLogin
                  ? 'bg-gradient-to-r from-[#FF4687] to-[#FF6EA2] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LogIn className="w-4 h-4" />
              <span>ログイン</span>
            </button>
            <button
              onClick={() => onSwitchMode('register')}
              className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-2 ${
                !isLogin
                  ? 'bg-gradient-to-r from-[#00F0FF] to-[#38E8FF] text-[#080C14] shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <UserPlus className="w-4 h-4" />
              <span>新規登録</span>
            </button>
          </div>

          {/* Title Header */}
          <div className="space-y-1 mb-6">
            <h2 className="text-xl sm:text-2xl font-black text-white font-gaming tracking-wide flex items-center gap-2">
              <span>{isLogin ? 'VSPO! ID ログイン' : 'VSPO! ID 新規アカウント作成'}</span>
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isLogin 
                ? '登録済みのアカウントでログインし、ファン掲示板・推しポータルをアンロックします。'
                : 'アカウントを作成して、ファン掲示板への投稿や推しリストのクラウド同期を利用しましょう。'
              }
            </p>
          </div>

          {/* CRITICAL NOTICE: Database Design in Progress Alert */}
          <div className="bg-amber-950/40 border border-amber-500/40 rounded-2xl p-4 mb-6 text-xs text-amber-200 flex items-start gap-3 shadow-lg">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-bold text-amber-300">
                【準備中】認証データベース（DB）設計・セキュリティ審査中
              </p>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                現在、世界中からの同時アクセスに耐えうる安全な認証データベースおよびアカウント基盤を構築中のため、
                <strong>送信・確定ボタンは現在まだ押せない（無効化）状態</strong>となっております。DB設計完了次第、近日中に正式解放いたします！
              </p>
            </div>
          </div>

          {/* Form Fields */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  ユーザー名 / ニックネーム
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="例: のせらー1号"
                    className="w-full bg-[#141C2B] text-slate-100 placeholder-slate-500 pl-10 pr-4 py-2.5 rounded-xl text-xs border border-slate-700 focus:outline-none focus:border-[#00F0FF] transition-colors"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                メールアドレス
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="vspo_fan@example.com"
                  className="w-full bg-[#141C2B] text-slate-100 placeholder-slate-500 pl-10 pr-4 py-2.5 rounded-xl text-xs border border-slate-700 focus:outline-none focus:border-[#FF4687] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                パスワード
              </label>
              <div className="relative">
                <Key className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-[#141C2B] text-slate-100 placeholder-slate-500 pl-10 pr-4 py-2.5 rounded-xl text-xs border border-slate-700 focus:outline-none focus:border-[#FF4687] transition-colors"
                />
              </div>
            </div>

            {!isLogin && (
              <>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    パスワード（確認用）
                  </label>
                  <div className="relative">
                    <Key className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full bg-[#141C2B] text-slate-100 placeholder-slate-500 pl-10 pr-4 py-2.5 rounded-xl text-xs border border-slate-700 focus:outline-none focus:border-[#00F0FF] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center justify-between">
                    <span>一番の推しタレント（初期設定）</span>
                    <span className="text-[10px] text-amber-400">※いつでも変更可能</span>
                  </label>
                  <select
                    value={favoriteTalent}
                    onChange={(e) => setFavoriteTalent(e.target.value)}
                    className="w-full bg-[#141C2B] text-slate-100 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#00F0FF]"
                  >
                    {members.map(m => (
                      <option key={m.id} value={m.id}>
                        {m.name} ({m.unit || m.branch})
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}

            {/* Checkboxes */}
            <div className="pt-2 text-xs">
              {isLogin ? (
                <label className="flex items-center gap-2 cursor-pointer text-slate-400 hover:text-slate-300">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded bg-[#141C2B] border-slate-700 text-[#FF4687] focus:ring-0"
                  />
                  <span>ログイン状態を保持する</span>
                </label>
              ) : (
                <label className="flex items-center gap-2 cursor-pointer text-slate-400 hover:text-slate-300">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="rounded bg-[#141C2B] border-slate-700 text-[#00F0FF] focus:ring-0"
                  />
                  <span>利用規約およびファンコミュニティ指針に同意する</span>
                </label>
              )}
            </div>

            {/* DISABLED SUBMIT BUTTON (As requested: DB design needed, unclickable for now) */}
            <div className="pt-4">
              <button
                type="button"
                disabled={true}
                className="w-full py-3.5 rounded-2xl font-black text-xs sm:text-sm bg-slate-800 text-slate-500 border border-slate-700/80 cursor-not-allowed flex items-center justify-center gap-2 shadow-inner select-none opacity-60"
                title="現在認証データベースを準備中のため、まだ押せません"
              >
                <Lock className="w-4 h-4 text-amber-500" />
                <span>
                  {isLogin 
                    ? 'ログインする（DB連携準備中・近日解放）' 
                    : 'アカウントを作成する（DB連携準備中・近日解放）'
                  }
                </span>
              </button>
              <p className="text-[11px] text-center text-slate-500 mt-2 font-mono">
                STATUS: DATABASE INTEGRATION IN PROGRESS
              </p>
            </div>
          </form>
        </div>

        {/* Right Column: Perks & Explanation Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#0E1524] rounded-3xl border border-slate-800 p-6 sm:p-7 shadow-xl space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 rounded-xl bg-pink-500/10 text-[#FF4687] border border-pink-500/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-gaming">
                  会員登録で解放される3大特典
                </h3>
                <p className="text-xs text-slate-400">
                  無料登録ですべての機能がアンロックされます
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              {/* Perk 1 */}
              <div className="bg-[#141C2B]/70 p-4 rounded-2xl border border-slate-700/60 space-y-1.5">
                <div className="flex items-center gap-2 text-white font-bold text-xs">
                  <MessageSquare className="w-4 h-4 text-purple-400" />
                  <span>ファン掲示板の投稿・スレッド作成</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  公式ファン掲示板にて、推しスレッドの作成、大会実況へのコメント、ファンアートの布教が可能になります。
                </p>
              </div>

              {/* Perk 2 */}
              <div className="bg-[#141C2B]/70 p-4 rounded-2xl border border-slate-700/60 space-y-1.5">
                <div className="flex items-center gap-2 text-white font-bold text-xs">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>推しリストのクラウド・端末間同期</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  PCで選んだ推しタレント設定が外出先のスマートフォンにも自動同期。専用タイムテーブルが手元ですぐ開けます。
                </p>
              </div>

              {/* Perk 3 */}
              <div className="bg-[#141C2B]/70 p-4 rounded-2xl border border-slate-700/60 space-y-1.5">
                <div className="flex items-center gap-2 text-white font-bold text-xs">
                  <Bell className="w-4 h-4 text-[#00F0FF]" />
                  <span>推しのゲリラ配信 リアルタイムPush通知</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  登録した推しメンバーが突発配信やゲリラ枠を立てた瞬間、ブラウザや端末へリアルタイムに通知が届きます。
                </p>
              </div>
            </div>

            <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-[11px] text-slate-400 space-y-1">
              <span className="text-white font-bold block">🔒 安全性とお約束</span>
              <p>
                本アカウント機能は完全無料です。個人情報は安全に暗号化管理され、スパム送信や課金請求等は一切ございません。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
