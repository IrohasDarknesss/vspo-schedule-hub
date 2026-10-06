import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.hash = '#schedule';
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#090D14] text-slate-100 flex items-center justify-center p-6">
          <div className="max-w-lg w-full bg-[#0E1522] border border-red-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-5 text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-black text-white font-gaming">
                ページの表示中にエラーが発生しました
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                一時的なレンダリングの不具合が発生しました。下のボタンからホーム画面に戻ることができます。
              </p>
              {this.state.error && (
                <div className="p-3 bg-slate-950 rounded-xl text-left font-mono text-[11px] text-red-300 overflow-x-auto border border-red-900/40">
                  {this.state.error.toString()}
                </div>
              )}
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={this.handleReset}
                className="px-5 py-2.5 bg-gradient-to-r from-[#FF4687] to-pink-600 hover:from-[#FF6EA2] hover:to-pink-500 text-white font-bold rounded-xl text-xs flex items-center gap-2 shadow-lg transition-all"
              >
                <Home className="w-4 h-4" />
                ホーム（スケジュール）に戻る
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
