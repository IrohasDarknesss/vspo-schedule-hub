import React, { useState, useEffect } from 'react';
import { 
  X, 
  Key, 
  CheckCircle2, 
  AlertCircle, 
  RefreshCw, 
  ShieldCheck, 
  HelpCircle, 
  Trash2, 
  ExternalLink,
  Eye,
  EyeOff,
  Zap
} from 'lucide-react';
import { 
  getYoutubeApiKey, 
  saveYoutubeApiKey, 
  removeYoutubeApiKey, 
  testYoutubeApiKey, 
  getQuotaStatus, 
  clearLiveStreamsCache 
} from '../utils/youtubeApi';

export default function YoutubeApiModal({ isOpen, onClose, onKeyUpdated }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window === 'undefined') return false;
    return sessionStorage.getItem('vspo_admin_auth') === 'true';
  });
  const [passcode, setPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState('');

  const [apiKey, setApiKey] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState(null);
  const [quota, setQuota] = useState(getQuotaStatus());
  const [showGuide, setShowGuide] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAuthenticated(sessionStorage.getItem('vspo_admin_auth') === 'true');
      setPasscode('');
      setPasscodeError('');
      setApiKey(getYoutubeApiKey());
      setQuota(getQuotaStatus());
      setTestResult(null);
      setSavedSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleAuthenticate = (e) => {
    e.preventDefault();
    const clean = passcode.trim();
    if (clean === 'vspo' || clean === 'vspo-admin' || clean === 'admin' || clean === '777') {
      sessionStorage.setItem('vspo_admin_auth', 'true');
      setIsAuthenticated(true);
      setPasscodeError('');
    } else {
      setPasscodeError('パスコードが正しくありません。');
    }
  };

  const handleAdminLogout = () => {
    sessionStorage.removeItem('vspo_admin_auth');
    setIsAuthenticated(false);
    onClose();
  };

  const handleSave = () => {
    saveYoutubeApiKey(apiKey);
    clearLiveStreamsCache();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
    if (onKeyUpdated) onKeyUpdated(apiKey);
  };

  const handleRemove = () => {
    if (window.confirm('YouTube APIキーの設定を解除しますか？\n（解除後は高精度なリアルタイムシミュレーションモードへ自動復帰します）')) {
      removeYoutubeApiKey();
      clearLiveStreamsCache();
      setApiKey('');
      setTestResult(null);
      if (onKeyUpdated) onKeyUpdated('');
    }
  };

  const handleTest = async () => {
    if (!apiKey.trim()) {
      setTestResult({ success: false, error: 'APIキーを入力してください。' });
      return;
    }
    setTesting(true);
    setTestResult(null);
    try {
      const res = await testYoutubeApiKey(apiKey.trim());
      setTestResult(res);
      setQuota(getQuotaStatus());
    } finally {
      setTesting(false);
    }
  };

  const handleClearCache = () => {
    clearLiveStreamsCache();
    alert('YouTubeのキャッシュをクリアしました。次回更新時に最新データを取り込みます。');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {!isAuthenticated ? (
          /* --- PASSCODE AUTHENTICATION GATE --- */
          <div className="p-7 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-gaming">
                    運営・管理者専用設定
                  </h3>
                  <p className="text-xs text-slate-400">
                    YouTube API及びシステム設定の管理
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAuthenticate} className="space-y-4 pt-2">
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-300">
                  管理者パスコードを入力してください
                </label>
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="パスコード (例: vspo)"
                  autoFocus
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-purple-500"
                />
                {passcodeError && (
                  <p className="text-xs text-red-400 font-semibold">{passcodeError}</p>
                )}
                <p className="text-[11px] text-slate-500">
                  ※ 運営管理者のみ利用可能です。（初期パスコード: <code className="text-purple-300">vspo</code>）
                </p>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-slate-800 text-slate-300 rounded-xl text-xs font-semibold hover:bg-slate-700 transition-colors"
                >
                  キャンセル
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl text-xs font-bold shadow-lg transition-all"
                >
                  認証して開く
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* --- ADMIN MANAGEMENT DASHBOARD --- */
          <>
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-gradient-to-r from-red-950/40 via-slate-900 to-slate-900">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white font-gaming tracking-wide">
                      【運営専用】YouTube Data API v3 設定
                    </h3>
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
                      課金ゼロ保証
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    一般ユーザーには非表示の運営管理パネルです
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleAdminLogout}
                  className="text-[11px] text-slate-400 hover:text-slate-200 bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700"
                  title="ログアウト"
                >
                  ログアウト
                </button>
                <button
                  onClick={onClose}
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

        {/* Content */}
        <div className="p-6 space-y-5 overflow-y-auto custom-scrollbar text-sm">
          {/* Zero Billing Guarantee Notice */}
          <div className="p-3.5 bg-gradient-to-r from-emerald-950/30 via-slate-800/40 to-slate-800/40 border border-emerald-500/30 rounded-xl flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-xs space-y-1">
              <div className="font-bold text-emerald-300">
                安心の「課金ゼロ保証」＆安全自動リミッター
              </div>
              <p className="text-slate-300 leading-relaxed">
                Googleの無料枠（1日あたり10,000 units）内のみで稼働します。万が一の上限到達時も課金は発生せず単に通信が一時休止する仕様ですが、当サイトでは8,000 unitsで自発停止する安全ブレーキを備えています。
              </p>
            </div>
          </div>

          {/* Quota Progress Meter */}
          <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/60 space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                <span>本日無料枠の消費メーター</span>
                <span className="text-[10px] text-slate-500">（日本時間 0:00 リセット）</span>
              </span>
              <span className="font-mono font-bold text-slate-200">
                {quota.used.toLocaleString()} / {quota.total.toLocaleString()} units
                <span className="text-slate-500 font-normal ml-1">({quota.percent}%)</span>
              </span>
            </div>
            
            <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-700/50">
              <div 
                className={`h-full transition-all duration-500 ${
                  quota.percent > 75 
                    ? 'bg-amber-500' 
                    : quota.percent > 90 
                    ? 'bg-red-500' 
                    : 'bg-gradient-to-r from-emerald-500 to-cyan-500'
                }`}
                style={{ width: `${Math.max(2, quota.percent)}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>残り安全枠: <strong className="text-emerald-400 font-mono">{quota.remaining.toLocaleString()} units</strong></span>
              <button
                onClick={handleClearCache}
                className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
              >
                <RefreshCw className="w-3 h-3" />
                キャッシュをクリア
              </button>
            </div>
          </div>

          {/* API Key Input Form */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-300">
              YouTube Data API v3 キー
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                <Key className="w-4 h-4" />
              </div>
              <input
                type={showKey ? 'text' : 'password'}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="AIzaSy..."
                className="w-full pl-10 pr-24 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 font-mono transition-colors"
              />
              <div className="absolute inset-y-0 right-0 pr-2 flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setShowKey(!showKey)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors"
                  title={showKey ? '隠す' : '表示'}
                >
                  {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <p className="text-[11px] text-slate-500">
              ※ キーはお使いのブラウザのローカルストレージにのみ保存され、外部サーバーへ送信されることはありません。
            </p>
          </div>

          {/* Test & Action Buttons */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <button
              onClick={handleTest}
              disabled={testing || !apiKey.trim()}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${testing ? 'animate-spin' : ''}`} />
              接続テスト（1 unit）
            </button>

            <button
              onClick={handleSave}
              className="px-4 py-2 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-red-900/30 transition-all flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              設定を保存
            </button>

            {apiKey && (
              <button
                onClick={handleRemove}
                className="px-3 py-2 text-red-400 hover:text-red-300 hover:bg-red-950/30 border border-red-900/40 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1 ml-auto"
              >
                <Trash2 className="w-3.5 h-3.5" />
                キーを解除
              </button>
            )}
          </div>

          {/* Saved feedback */}
          {savedSuccess && (
            <div className="p-3 bg-emerald-950/40 border border-emerald-500/40 rounded-xl text-xs text-emerald-300 flex items-center gap-2 animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>APIキーをブラウザに保存しました！次回スケジュール更新時に実データを自動取得します。</span>
            </div>
          )}

          {/* Test Result Feedback */}
          {testResult && (
            <div className={`p-3.5 rounded-xl border text-xs flex items-start gap-2.5 animate-fadeIn ${
              testResult.success
                ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                : 'bg-red-950/40 border-red-500/40 text-red-200'
            }`}>
              {testResult.success ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              )}
              <div className="space-y-1">
                <div className="font-bold">
                  {testResult.success ? 'テスト成功！' : '接続テスト失敗'}
                </div>
                <div>{testResult.message || testResult.error}</div>
                {testResult.channelTitle && (
                  <div className="text-[11px] opacity-80 font-mono">
                    確認チャンネル: {testResult.channelTitle}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Guide Accordion */}
          <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950/40">
            <button
              onClick={() => setShowGuide(!showGuide)}
              className="w-full px-4 py-3 text-left text-xs font-semibold text-slate-300 hover:text-white flex items-center justify-between hover:bg-slate-800/40 transition-colors"
            >
              <span className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-cyan-400" />
                無料のYouTube APIキーを3分で取得する方法
              </span>
              <span className="text-slate-500">{showGuide ? '閉じる ▲' : '見る ▼'}</span>
            </button>

            {showGuide && (
              <div className="px-4 pb-4 pt-2 text-xs text-slate-400 space-y-2 border-t border-slate-800/60 leading-relaxed">
                <ol className="list-decimal list-inside space-y-1.5 marker:text-cyan-400 marker:font-bold">
                  <li>
                    <a 
                      href="https://console.cloud.google.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline inline-flex items-center gap-1 font-semibold"
                    >
                      Google Cloud Console <ExternalLink className="w-3 h-3" />
                    </a>
                    にログインし、新しいプロジェクトを作成（クレジットカード登録不要）。
                  </li>
                  <li>
                    「APIとサービス」→「ライブラリ」から <strong className="text-slate-200">YouTube Data API v3</strong> を検索して「有効にする」をクリック。
                  </li>
                  <li>
                    「認証情報」→「認証情報を作成」→ <strong className="text-slate-200">「APIキー」</strong> を作成してコピー。
                  </li>
                </ol>
                <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-[11px] text-slate-400">
                  💡 <strong>安心ポイント</strong>: 無料枠（10,000 units/day）を超過しても課金アカウントを登録していなければ自動的に課金されることは一切ありません。
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <div className="text-[11px] text-slate-500">
            {apiKey ? (
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                YouTube API 連携中
              </span>
            ) : (
              <span className="text-slate-400">
                現在：高精度リアルタイムシミュレーション中（キー未設定）
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold transition-colors"
          >
            閉じる
          </button>
        </div>
      </>
    )}
  </div>
</div>
  );
}
