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
  Sparkles
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
  onSelectMember 
}) {
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

  return (
    <div className="space-y-6 animate-fadeIn">
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
                FAN COMMUNITY BOARD
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

      {/* Main Container: Thread Detail View OR Thread List */}
      {activeThread ? (
        /* --- THREAD DETAIL VIEW --- */
        <div className="bg-[#0E1522] rounded-2xl border border-slate-800 p-5 sm:p-7 shadow-xl space-y-6">
          {/* Thread Detail Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <button
              onClick={() => setActiveThreadId(null)}
              className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors self-start"
            >
              <ArrowLeft className="w-4 h-4" />
              スレッド一覧に戻る
            </button>

            <div className="flex items-center gap-3">
              <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-lg font-bold border border-slate-700">
                {CATEGORIES.find(c => c.id === activeThread.category)?.label || '雑談'}
              </span>
              <button
                onClick={(e) => handleLikeThread(activeThread.id, e)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-pink-950/40 text-pink-300 border border-pink-500/30 hover:bg-pink-900/40 rounded-xl text-xs font-bold transition-colors"
              >
                <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500" />
                <span>{activeThread.likes}</span>
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white leading-snug flex items-center gap-2">
              {activeThread.pinned && <Pin className="w-5 h-5 text-amber-400 shrink-0" />}
              <span>{activeThread.title}</span>
            </h2>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span>スレ主: <strong className="text-slate-200">{activeThread.author}</strong></span>
              <span>•</span>
              <span>{activeThread.createdAt}</span>
              <span>•</span>
              <span className="font-mono text-cyan-400">{activeThread.posts.length} 件の投稿</span>
            </div>
          </div>

          {/* Posts List */}
          <div className="space-y-4 pt-2">
            {activeThread.posts.map((post, idx) => {
              const favMember = membersMap[post.authorFavId];
              return (
                <div 
                  key={post.id}
                  className="bg-slate-900/80 rounded-xl border border-slate-800 p-4 sm:p-5 space-y-3 transition-colors hover:border-slate-700/80"
                >
                  <div className="flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono font-bold text-slate-500 text-xs">
                        #{idx + 1}
                      </span>
                      {favMember ? (
                        <div 
                          className="flex items-center gap-1.5 px-2 py-0.5 rounded-lg border text-[11px] font-semibold cursor-pointer"
                          style={{ 
                            backgroundColor: `${favMember.color}15`,
                            borderColor: `${favMember.color}40`,
                            color: favMember.color 
                          }}
                          onClick={() => onSelectMember(favMember)}
                          title={`${favMember.name}の推しファン`}
                        >
                          <img 
                            src={favMember.avatar} 
                            alt={favMember.name} 
                            className="w-3.5 h-3.5 rounded-full object-cover"
                          />
                          <span>{favMember.name}推し</span>
                        </div>
                      ) : null}
                      <span className="font-bold text-white">
                        {post.author}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-slate-500 text-[11px]">
                      <span>{post.createdAt}</span>
                      <button
                        onClick={() => handleLikePost(activeThread.id, post.id)}
                        className="flex items-center gap-1 text-slate-400 hover:text-pink-400 transition-colors"
                      >
                        <Heart className="w-3 h-3 hover:fill-pink-400" />
                        <span>{post.likes}</span>
                      </button>
                    </div>
                  </div>

                  <p className="text-sm text-slate-200 leading-relaxed whitespace-pre-wrap pl-6">
                    {post.content}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Reply Form */}
          <form onSubmit={handlePostReply} className="pt-4 border-t border-slate-800 space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Send className="w-4 h-4 text-[#00F0FF]" />
              <span>このスレッドに書き込む</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                  ニックネーム
                </label>
                <input
                  type="text"
                  value={replyAuthor}
                  onChange={(e) => setReplyAuthor(e.target.value)}
                  placeholder="名無しのぶいすぽファン"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-[#00F0FF]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                  推しタレント（バッジに表示）
                </label>
                <select
                  value={replyFav}
                  onChange={(e) => setReplyFav(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00F0FF]"
                >
                  {members.map(m => (
                    <option key={m.id} value={m.id}>
                      {m.name} ({m.branch})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                コメント内容
              </label>
              <textarea
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                placeholder="応援メッセージや感想を入力... (誹謗中傷等はご遠慮ください)"
                rows={3}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-[#00F0FF] resize-none"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!replyContent.trim()}
                className="px-5 py-2.5 bg-gradient-to-r from-[#00F0FF] to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-2 shadow-lg transition-all disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
                書き込む
              </button>
            </div>
          </form>
        </div>
      ) : (
        /* --- THREADS LIST VIEW --- */
        <div className="bg-[#0E1522] rounded-2xl border border-slate-800 p-5 sm:p-7 shadow-xl space-y-6">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-[#FF4687] to-pink-600 text-white shadow-md'
                    : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Threads List */}
          <div className="space-y-3">
            {filteredThreads.map(thread => {
              const favMember = membersMap[thread.authorFavId];
              return (
                <div
                  key={thread.id}
                  onClick={() => setActiveThreadId(thread.id)}
                  className={`group p-4 sm:p-5 rounded-xl border bg-slate-900/70 hover:bg-slate-800/60 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    thread.pinned
                      ? 'border-amber-500/40 bg-gradient-to-r from-amber-950/15 via-slate-900/80 to-slate-900/80 shadow-md'
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      {thread.pinned && (
                        <span className="flex items-center gap-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold px-2 py-0.5 rounded">
                          <Pin className="w-3 h-3" />
                          ピン留め
                        </span>
                      )}
                      <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-semibold border border-slate-700/60">
                        {CATEGORIES.find(c => c.id === thread.category)?.label || '雑談'}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#00F0FF] transition-colors leading-snug">
                      {thread.title}
                    </h3>

                    <div className="flex items-center gap-2.5 text-[11px] text-slate-400">
                      {favMember && (
                        <span 
                          className="flex items-center gap-1 text-[10px] font-semibold"
                          style={{ color: favMember.color }}
                        >
                          <img 
                            src={favMember.avatar} 
                            alt="" 
                            className="w-3 h-3 rounded-full object-cover"
                          />
                          {favMember.name}推し
                        </span>
                      )}
                      <span>{thread.author}</span>
                      <span>•</span>
                      <span className="font-mono">{thread.createdAt}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0 self-end sm:self-center">
                    <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-mono font-bold bg-cyan-950/30 px-3 py-1.5 rounded-xl border border-cyan-500/20">
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>{thread.posts.length}</span>
                    </div>

                    <button
                      onClick={(e) => handleLikeThread(thread.id, e)}
                      className="flex items-center gap-1 text-xs text-pink-400 hover:text-pink-300 bg-pink-950/20 hover:bg-pink-900/30 px-3 py-1.5 rounded-xl border border-pink-500/20 transition-colors"
                    >
                      <Heart className="w-3.5 h-3.5" />
                      <span>{thread.likes}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* New Thread Modal */}
      {isNewThreadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div 
            className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <PlusCircle className="w-5 h-5 text-[#FF4687]" />
                新規スレッドを立てる
              </h3>
              <button
                onClick={() => setIsNewThreadModalOpen(false)}
                className="p-1 text-slate-400 hover:text-white rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateThread} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-semibold text-slate-300 mb-1">
                  スレッドタイトル
                </label>
                <input
                  type="text"
                  value={newThreadTitle}
                  onChange={(e) => setNewThreadTitle(e.target.value)}
                  placeholder="例: 【CRカップ】出場メンバーのスクリム感想スレ"
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white placeholder-slate-600 focus:outline-none focus:border-[#FF4687]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">
                    カテゴリー
                  </label>
                  <select
                    value={newThreadCategory}
                    onChange={(e) => setNewThreadCategory(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#FF4687]"
                  >
                    {CATEGORIES.filter(c => c.id !== 'all').map(c => (
                      <option key={c.id} value={c.id}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1">
                    推しタレント
                  </label>
                  <select
                    value={newThreadFav}
                    onChange={(e) => setNewThreadFav(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#FF4687]"
                  >
                    {members.map(m => (
                      <option key={m.id} value={m.id}>
                        {m.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-300 mb-1">
                  ニックネーム
                </label>
                <input
                  type="text"
                  value={newThreadAuthor}
                  onChange={(e) => setNewThreadAuthor(e.target.value)}
                  placeholder="名無しのぶいすぽファン"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white placeholder-slate-600 focus:outline-none focus:border-[#FF4687]"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-300 mb-1">
                  最初の投稿内容 (本文)
                </label>
                <textarea
                  value={newThreadContent}
                  onChange={(e) => setNewThreadContent(e.target.value)}
                  placeholder="スレッドの主旨や最初の感想を入力してください..."
                  rows={4}
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-[#FF4687] resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsNewThreadModalOpen(false)}
                  className="px-4 py-2 bg-slate-800 text-slate-300 rounded-xl font-semibold hover:bg-slate-700 transition-colors"
                >
                  キャンセル
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-gradient-to-r from-[#FF4687] to-pink-600 text-white font-bold rounded-xl shadow-lg transition-all"
                >
                  スレッドを作成
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
