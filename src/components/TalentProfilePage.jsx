import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight,
  Star, 
  ExternalLink, 
  Play, 
  Calendar, 
  Clock, 
  Radio, 
  Gamepad2, 
  Share2, 
  Check, 
  Sparkles, 
  Heart, 
  Users,
  ChevronRight,
  ChevronLeft,
  Trophy,
  Tag,
  Cake,
  Ruler,
  Droplet,
  ShoppingBag,
  TrendingUp
} from 'lucide-react';
import { YoutubeIcon, TwitchIcon, TwitterIcon } from './Icons';
import { formatTimeInTimezone } from '../utils/timezone';
import { getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';
import { getMemberSubscriberStats } from '../data/subscriberStats';

export default function TalentProfilePage({
  member,
  allMembers,
  membersMap,
  schedules,
  timezone,
  isFavorite,
  onToggleFavorite,
  onBack,
  onSelectMember,
  onSelectStream,
  allGoods = [],
  onGoToStore
}) {
  const [copied, setCopied] = useState(false);

  if (!member) return null;

  // Filter streams for this member
  const memberStreams = schedules.filter(s => s.memberId === member.id);
  const liveStream = memberStreams.find(s => s.status === 'live');
  const upcomingStreams = memberStreams.filter(s => s.status === 'upcoming');

  // Find other members in the same unit
  const unitMembers = allMembers.filter(m => m.unit === member.unit && m.id !== member.id);

  // Goods of this member
  const memberGoods = allGoods.filter(g => g.memberId === member.id);

  // Subscriber statistics & history
  const subStats = getMemberSubscriberStats(member.id);

  // Member navigation (previous & next)
  const currentIndex = allMembers.findIndex(m => m.id === member.id);
  const prevMember = currentIndex > 0 ? allMembers[currentIndex - 1] : allMembers[allMembers.length - 1];
  const nextMember = currentIndex < allMembers.length - 1 ? allMembers[currentIndex + 1] : allMembers[0];

  const handleCopyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#talent/${member.id}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* Top Breadcrumb & Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-[#0D1420] p-4 rounded-2xl border border-slate-800 shadow-lg">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 bg-[#172233] hover:bg-[#202E44] text-slate-200 hover:text-white px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border border-slate-700/80 shadow-sm hover:scale-105"
            title="前の画面に戻る"
          >
            <ArrowLeft className="w-4 h-4 text-[#00F0FF]" />
            <span>← 一覧に戻る</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
            <span>VSPO!</span>
            <span>/</span>
            <span>{member.branch === 'EN' ? 'VSPO! EN' : 'JP メンバー'}</span>
            <span>/</span>
            <span className="text-white font-bold">{member.name}</span>
          </div>
        </div>

        {/* Action Controls: Share & Prev/Next Member */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 bg-[#151F2F] hover:bg-[#1E2B40] text-slate-300 hover:text-white px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-700/60 transition-colors"
            title="このタレントページのURLをコピー"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-bold">コピー完了！</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-slate-400" />
                <span>共有リンク</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-1 bg-[#131B28] p-0.5 rounded-lg border border-slate-800">
            <button
              onClick={() => onSelectMember(prevMember)}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
              title={`前のタレント (${prevMember.name})`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => onSelectMember(nextMember)}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
              title={`次のタレント (${nextMember.name})`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Official Project Branch Banner (Requested: VSPO EN official logo for EN, normal VSPO logo for JP) */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-r from-[#070A12] via-[#0E1524] to-[#140D20] p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
        <div 
          className="absolute inset-0 opacity-25 pointer-events-none blur-2xl"
          style={{ background: `radial-gradient(circle at 20% 50%, ${member.color}, transparent 60%)` }}
        />

        {/* Official Branch Logo Image */}
        <div className="relative z-10 flex items-center gap-4">
          <div className="h-12 sm:h-16 w-36 sm:w-48 flex items-center justify-center p-2 rounded-xl bg-black/50 border border-slate-700/60 backdrop-blur-md shadow-md">
            <img 
              src={member.branch === 'EN' ? '/logos/vspo-en.png' : '/logos/vspo-jp.png'} 
              alt={member.branch === 'EN' ? 'VSPO! EN 公式ロゴ' : 'ぶいすぽっ！ 公式ロゴ'}
              className="max-h-full max-w-full object-contain filter drop-shadow-[0_2px_12px_rgba(255,70,135,0.4)]"
              onError={(e) => {
                e.currentTarget.src = member.branch === 'EN' 
                  ? 'https://vspo.jp/wp-content/themes/vspo/assets/images/common/logo-en.png' 
                  : 'https://vspo.jp/wp-content/themes/vspo/assets/images/common/logo.png';
              }}
            />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded text-[11px] font-black font-gaming uppercase tracking-wider ${
                member.branch === 'EN' 
                  ? 'bg-[#00F0FF] text-black shadow-glow-cyan' 
                  : 'bg-[#FF4687] text-white shadow-glow-pink'
              }`}>
                {member.branch === 'EN' ? 'VSPO! ENGLISH OFFICIAL' : 'ぶいすぽっ！ 公式メンバー'}
              </span>
              <span className="text-xs text-slate-400 font-semibold hidden md:inline">
                {member.unit}
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-1 font-medium">
              {member.branch === 'EN' 
                ? 'VSPO! English 所属 公式ストリーマー・過去配信アーカイブ' 
                : 'ぶいすぽっ！ (Virtual eSports Project) 公式タレントアーカイブ'}
            </p>
          </div>
        </div>

        {/* Right branch highlight info */}
        <div className="relative z-10 flex items-center gap-3 text-xs">
          <div className="text-right hidden sm:block">
            <span className="text-[10px] text-slate-400 font-mono block">PROJECT BRANCH</span>
            <span className="font-gaming font-black text-sm text-white">
              {member.branch === 'EN' ? 'GLOBAL DIVISION' : 'JAPAN DIVISION'}
            </span>
          </div>
          <span className={`w-2.5 h-2.5 rounded-full ${
            member.branch === 'EN' ? 'bg-[#00F0FF] shadow-glow-cyan' : 'bg-[#FF4687] shadow-glow-pink'
          } animate-pulse`} />
        </div>
      </div>

      {/* Main Hero Showcase: Cyber Stage & Standing Illustration */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-700/70 bg-gradient-to-br from-[#0B111C] via-[#0E1624] to-[#120F24] p-6 sm:p-8 lg:p-10 shadow-2xl">
        {/* Dynamic ambient color glowing backgrounds */}
        <div 
          className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ background: `radial-gradient(circle, ${member.color}, transparent 70%)` }}
        />
        <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Standing Character Visual Showcase (Official Full-Body Character Portrait) */}
          <div className="w-full sm:w-[380px] lg:w-[440px] shrink-0 flex flex-col items-center">
            {/* Full-body display container with generous height to ensure head-to-toe visibility */}
            <div className="relative w-full h-[520px] sm:h-[620px] lg:h-[720px] flex items-end justify-center group overflow-visible">
              {/* Pedestal / Holographic Stage Effect */}
              <div 
                className="absolute bottom-2 w-64 sm:w-80 h-16 rounded-full blur-2xl opacity-70 pointer-events-none"
                style={{ backgroundColor: member.color }}
              />
              <div className="absolute bottom-1 w-72 sm:w-88 h-10 rounded-full border border-white/20 bg-white/5 backdrop-blur-md pointer-events-none -skew-x-12 shadow-lg" />
              <div 
                className="absolute bottom-2.5 w-60 sm:w-72 h-6 rounded-full border pointer-events-none opacity-80"
                style={{ borderColor: member.color }}
              />

              {/* Full body standing visual */}
              <img 
                src={member.visual || member.avatar} 
                alt={`${member.name} 公式全身立ち絵`}
                className="h-full w-auto max-w-full object-contain object-bottom filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] group-hover:scale-[1.03] transition-transform duration-300 z-10"
                onError={(e) => {
                  if (member.avatar && e.currentTarget.src !== member.avatar) {
                    e.currentTarget.src = member.avatar;
                  }
                }}
              />
            </div>

            {/* Official Character Signature Color Indicator */}
            <div className="mt-4 flex items-center gap-2 bg-[#121927]/90 px-4 py-1.5 rounded-full border border-slate-700/70 text-xs font-bold text-slate-300 shadow-md">
              <span className="w-3.5 h-3.5 rounded-full shadow-sm ring-1 ring-white/20" style={{ backgroundColor: member.color }} />
              <span>イメージカラー:</span>
              <span className="font-mono text-[#00F0FF] font-black">{member.color}</span>
            </div>
          </div>

          {/* Character Dossier & Details */}
          <div className="flex-1 w-full space-y-6">
            {/* Header: Badges & Name */}
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className={`px-3 py-1 rounded text-xs font-black font-gaming uppercase tracking-wider ${
                  member.branch === 'EN' ? 'bg-[#00F0FF] text-black shadow-glow-cyan' : 'bg-[#FF4687] text-white shadow-glow-pink'
                }`}>
                  VSPO! {member.branch}
                </span>

                <span className="bg-[#141E30] text-slate-200 text-xs px-3 py-1 rounded-md border border-slate-700/80 font-bold">
                  {member.unit}
                </span>

                <span className="bg-[#1A1830] text-purple-300 text-xs px-3 py-1 rounded-md border border-purple-500/40 font-semibold">
                  {member.role}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-gaming tracking-wide">
                    {member.name}
                  </h1>
                  <p className="text-sm sm:text-base text-slate-400 font-medium mt-1">
                    {member.enName || member.jpName}
                  </p>
                </div>

                {/* Big Favorite Button */}
                <button
                  onClick={() => onToggleFavorite(member.id)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg hover:scale-105 ${
                    isFavorite
                      ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-amber-950/40 ring-2 ring-amber-400/50'
                      : 'bg-[#182335] hover:bg-[#202E44] text-slate-200 border border-slate-700/80'
                  }`}
                >
                  <Star className={`w-5 h-5 ${isFavorite ? 'fill-slate-950' : 'text-amber-400'}`} />
                  <span>{isFavorite ? '推し登録中 ★' : '推しメンバーに追加'}</span>
                </button>
              </div>

              {/* Official Catchphrase */}
              {member.catchphrase && (
                <div className="mt-4 p-3.5 rounded-xl bg-[#131C2A]/80 border-l-4 border-[#00F0FF] border-y border-r border-slate-800">
                  <p className="text-xs sm:text-sm text-cyan-200 italic font-medium">
                    "{member.catchphrase}"
                  </p>
                </div>
              )}
            </div>

            {/* Socials & Channel Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-800">
              <span className="text-xs font-mono font-semibold text-slate-300 bg-[#151F2F] px-3 py-1.5 rounded-lg border border-slate-700/60">
                YouTube登録者数: <strong className="text-white ml-1">{member.subscribers}</strong>
              </span>

              {member.socials.youtube && (
                <a
                  href={member.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white border border-red-500/40 text-xs font-bold transition-all"
                >
                  <YoutubeIcon className="w-4 h-4" />
                  <span>YouTube チャンネル</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}

              {member.socials.twitch && (
                <a
                  href={member.socials.twitch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-purple-600/20 hover:bg-purple-600 text-purple-300 hover:text-white border border-purple-500/40 text-xs font-bold transition-all"
                >
                  <TwitchIcon className="w-4 h-4" />
                  <span>Twitch チャンネル</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}

              {member.socials.twitter && (
                <a
                  href={member.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-sky-600/20 hover:bg-sky-600 text-sky-300 hover:text-white border border-sky-500/40 text-xs font-bold transition-all"
                >
                  <TwitterIcon className="w-4 h-4" />
                  <span>公式 X (Twitter)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

            {/* Official Specifications Grid (Birthday, Height, Debut, Blood Type, etc.) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              <div className="bg-[#121926] p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold flex items-center gap-1 mb-0.5">
                  <Cake className="w-3 h-3 text-pink-400" />
                  誕生日
                </span>
                <span className="text-xs sm:text-sm font-black text-white">
                  {member.birthday || '公開中'}
                </span>
              </div>

              <div className="bg-[#121926] p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold flex items-center gap-1 mb-0.5">
                  <Ruler className="w-3 h-3 text-emerald-400" />
                  身長
                </span>
                <span className="text-xs sm:text-sm font-black text-white">
                  {member.height || '非公開'}
                </span>
              </div>

              <div className="bg-[#121926] p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold flex items-center gap-1 mb-0.5">
                  <Droplet className="w-3 h-3 text-red-400" />
                  血液型
                </span>
                <span className="text-xs sm:text-sm font-black text-white">
                  {member.bloodType || '不明'}
                </span>
              </div>

              <div className="bg-[#121926] p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold flex items-center gap-1 mb-0.5">
                  <Calendar className="w-3 h-3 text-blue-400" />
                  デビュー日
                </span>
                <span className="text-[11px] font-bold text-white leading-tight">
                  {member.debutDate || '公式加入'}
                </span>
              </div>
            </div>

            {/* Tags & Fan Information (Fan Name, Fan Mark, Stream Tag, Fan Art Tag) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="bg-[#121926] p-2.5 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold block mb-0.5">
                  👥 ファンネーム:
                </span>
                <span className="text-xs font-bold text-[#00F0FF] break-words">
                  {member.fanName || member.name + 'ファン'}
                </span>
              </div>

              <div className="bg-[#121926] p-2.5 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold block mb-0.5">
                  📌 ファンマーク:
                </span>
                <span className="text-sm font-bold text-amber-300">
                  {member.fanMark || 'ー'}
                </span>
              </div>

              <div className="bg-[#121926] p-2.5 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold block mb-0.5">
                  💬 配信タグ:
                </span>
                <span className="text-xs font-mono font-bold text-slate-200 break-all">
                  {member.streamTag || '#ぶいすぽ'}
                </span>
              </div>

              <div className="bg-[#121926] p-2.5 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold block mb-0.5">
                  🎨 ファンアートタグ:
                </span>
                <span className="text-xs font-mono font-bold text-slate-200 break-all">
                  {member.fanArtTag || '#ぶいすぽアート'}
                </span>
              </div>
            </div>

            {/* Favorite Weapons & Main Games */}
            <div className="bg-[#121926] p-3.5 rounded-xl border border-slate-800 space-y-2">
              {member.favoriteWeapon && (
                <div className="text-xs text-slate-300">
                  <strong className="text-amber-400 mr-1.5 font-bold">🎯 得意ブキ・スタイル:</strong>
                  <span>{member.favoriteWeapon}</span>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <strong className="text-xs text-slate-400 flex items-center gap-1 mr-1">
                  <Gamepad2 className="w-3.5 h-3.5 text-[#00F0FF]" />
                  主なゲーム:
                </strong>
                {member.mainGames.map((game, i) => (
                  <span 
                    key={i}
                    className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-[#182335] text-slate-200 border border-slate-700/60"
                  >
                    {game}
                  </span>
                ))}
              </div>
            </div>

            {/* Biography */}
            <div className="bg-[#111723] p-4 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong className="text-white block mb-1 font-bold">【プロフィール詳細】</strong>
              {member.bio}
            </div>
          </div>
        </div>
      </div>

      {/* Currently Live Stream (If active right now!) */}
      {liveStream && (
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-red-950/60 via-[#161226] to-[#0E1624] border-2 border-red-500/80 shadow-2xl shadow-red-950/50">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 bg-red-600 text-white font-gaming text-xs font-black px-3 py-1 rounded shadow-lg animate-pulse">
                <Radio className="w-4 h-4" />
                <span>NOW STREAMING (配信中)</span>
              </span>
              <span className="text-xs text-red-300 font-mono">
                {liveStream.viewers || '10,000+'} 人が観戦中
              </span>
            </div>

            <a
              href={liveStream.streamUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-lg hover:scale-105"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>今すぐ配信を見る (YouTube/Twitch)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="mt-3">
            <h3 className="text-base sm:text-lg font-bold text-white">
              {liveStream.title}
            </h3>
            <span className="mt-1 inline-block text-xs bg-[#24172B] text-slate-200 px-2.5 py-0.5 rounded font-semibold border border-purple-500/40">
              {liveStream.game}
            </span>
          </div>
        </div>
      )}

      {/* Upcoming Stream Schedules */}
      {upcomingStreams.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
            <h2 className="text-lg font-black text-white font-gaming tracking-wide">
              今後の配信予定 (UPCOMING SCHEDULE)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {upcomingStreams.map(stream => {
              const formattedTime = formatTimeInTimezone(stream.date, stream.time, timezone);
              const googleCalUrl = getGoogleCalendarUrl(stream, member);

              return (
                <div 
                  key={stream.id}
                  className="bg-[#0E1522] rounded-xl border border-slate-800 hover:border-amber-500/50 p-3.5 flex flex-col justify-between transition-colors shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-bold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20">
                        {stream.date} {formattedTime} ({timezone})
                      </span>
                      <span className="text-[10px] bg-[#162133] text-slate-300 px-2 py-0.5 rounded font-semibold">
                        {stream.game}
                      </span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-2 mb-2">
                      {stream.title}
                    </h4>
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-800">
                    <a
                      href={stream.streamUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <span>配信枠を開く</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <a
                      href={googleCalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                      title="Googleカレンダーに追加"
                    >
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      <span>カレンダー登録</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* PAST 5 STREAMS SECTION (AS EXPLICITLY REQUESTED) */}
      {/* ======================================================== */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#00F0FF] shadow-glow-cyan"></span>
            <h2 className="text-lg sm:text-xl font-black text-white font-gaming tracking-wide">
              直近過去5回分の配信アーカイブ (RECENT 5 ARCHIVES)
            </h2>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            全5件掲載・クリックでYouTube再生
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {member.past5Streams && member.past5Streams.map((vod, index) => (
            <div 
              key={vod.id}
              className="group bg-[#0D131E] hover:bg-[#141D2C] border border-slate-800 hover:border-[#00F0FF]/60 rounded-2xl overflow-hidden transition-all duration-200 flex flex-col justify-between shadow-lg hover:shadow-glow-cyan hover:-translate-y-1"
            >
              <div>
                {/* Thumbnail with overlay duration & play */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                  <img 
                    src={vod.thumbnail} 
                    alt={vod.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = member.branch === 'EN' ? '/logos/vspo-en.png' : '/logos/vspo-jp.png';
                      e.currentTarget.className = 'w-full h-full object-contain p-8 bg-[#111724]';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D131E] via-transparent to-black/30" />

                  {/* VOD Index */}
                  <span className="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur-sm text-slate-200 text-[10px] font-gaming font-black px-2 py-0.5 rounded border border-slate-700/60">
                    VOD #0{index + 1}
                  </span>

                  {/* Duration */}
                  <span className="absolute bottom-2 right-2 bg-black/85 text-[10px] font-mono font-bold text-slate-100 px-1.5 py-0.5 rounded">
                    {vod.duration}
                  </span>
                </div>

                {/* Info */}
                <div className="p-3.5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={`text-[9px] font-black uppercase px-1.5 py-0.2 rounded ${
                      vod.platform === 'twitch' ? 'bg-[#9146FF] text-white' : 'bg-[#FF0000] text-white'
                    }`}>
                      {vod.platform}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {vod.date}
                    </span>
                    <span className="text-[10px] bg-[#182335] text-slate-300 px-1.5 py-0.2 rounded font-semibold border border-slate-700/50">
                      {vod.game}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono ml-auto">
                      {vod.viewCount}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white line-clamp-2 leading-snug">
                    {vod.title}
                  </h3>
                </div>
              </div>

              {/* Direct Watch Link Button */}
              <div className="p-3 pt-0">
                <a
                  href={vod.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#FF4687] hover:bg-[#FF6EA2] text-white text-xs font-bold py-2 px-3 rounded-xl esports-clip-badge transition-all shadow-md shadow-pink-950/40"
                  title="アーカイブ動画を直接視聴"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>配信を見る</span>
                  <ExternalLink className="w-3 h-3 opacity-80" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* SUBSCRIBER GROWTH & ANALYTICS SECTION */}
      {/* ======================================================== */}
      {subStats && (
        <div className="space-y-4 pt-4 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-glow-cyan"></span>
              <h2 className="text-lg sm:text-xl font-black text-white font-gaming tracking-wide flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                <span>チャンネル登録者数の推移 (SUBSCRIBER ANALYTICS)</span>
              </h2>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="text-slate-400">現在登録者: <strong className="text-white font-mono font-black">{subStats.currentFormatted}</strong></span>
              <span className="bg-emerald-500/10 text-emerald-400 px-2.5 py-0.5 rounded-full font-bold border border-emerald-500/30 font-mono">
                月間 {subStats.monthlyGrowth} ({subStats.growthRate})
              </span>
            </div>
          </div>

          <div className="bg-[#0E1522] rounded-2xl border border-slate-800 p-5 shadow-xl space-y-3">
            <div className="relative w-full h-44 sm:h-52 bg-slate-950/80 rounded-xl p-4 border border-slate-800/80 overflow-hidden">
              {/* Horizontal dashed lines */}
              <div className="absolute inset-x-8 inset-y-4 flex flex-col justify-between pointer-events-none opacity-20">
                {[0, 1, 2, 3].map(idx => (
                  <div key={idx} className="w-full border-b border-dashed border-slate-400" />
                ))}
              </div>

              {(() => {
                const history = subStats.history;
                const min = Math.min(...history.map(h => h.count));
                const max = Math.max(...history.map(h => h.count));
                const pad = (max - min) * 0.15 || 20000;
                const cMin = Math.max(0, min - pad);
                const cMax = max + pad;

                const points = history.map((pt, i) => {
                  const x = 30 + (i / (history.length - 1)) * 540;
                  const ratio = (pt.count - cMin) / (cMax - cMin);
                  const y = 140 - ratio * 110;
                  return { x, y, count: pt.count, date: pt.date };
                });

                const pathString = points.reduce((acc, pt, i) => {
                  return i === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`;
                }, '');

                const areaString = `${pathString} L ${points[points.length - 1].x} 145 L ${points[0].x} 145 Z`;

                return (
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 600 160" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id={`prof-grad-${member.id}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={member.color || '#00F0FF'} stopOpacity="0.3" />
                        <stop offset="100%" stopColor={member.color || '#00F0FF'} stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Area */}
                    <path d={areaString} fill={`url(#prof-grad-${member.id})`} />

                    {/* Line */}
                    <path
                      d={pathString}
                      fill="none"
                      stroke={member.color || '#00F0FF'}
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Circles & Value Labels */}
                    {points.map((pt, idx) => (
                      <g key={idx}>
                        <circle
                          cx={pt.x}
                          cy={pt.y}
                          r="5"
                          fill="#0E1522"
                          stroke={member.color || '#00F0FF'}
                          strokeWidth="3"
                        />
                        <text
                          x={pt.x}
                          y={pt.y - 12}
                          textAnchor="middle"
                          fill="#e2e8f0"
                          fontSize="10"
                          fontFamily="monospace"
                          fontWeight="bold"
                        >
                          {(pt.count / 10000).toFixed(1)}万
                        </text>
                      </g>
                    ))}
                  </svg>
                );
              })()}

              {/* X Axis Labels */}
              <div className="absolute inset-x-8 bottom-1 flex justify-between text-[10px] text-slate-400 font-mono">
                {subStats.history.map(h => (
                  <span key={h.date}>{h.date.replace('2026-', '')}月</span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
              <span>※ 過去6ヶ月間の公式推移（月次集計データ）</span>
              <span className="font-mono text-cyan-400">
                全体順位: 第<strong className="text-white text-xs">{subStats.rank}位</strong> / 32名中
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TALENT OFFICIAL GOODS SECTION (REQUESTED FEATURE) */}
      {/* ======================================================== */}
      {memberGoods.length > 0 && (
        <div className="space-y-4 pt-4 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-[#FF4687] shadow-glow-pink"></span>
              <h2 className="text-lg sm:text-xl font-black text-white font-gaming tracking-wide flex items-center gap-2">
                <span>{member.name} 公式グッズコレクション</span>
                <span className="text-xs bg-[#FF4687]/20 text-[#FF4687] px-2 py-0.5 rounded font-bold border border-[#FF4687]/40">
                  全{memberGoods.length}件
                </span>
              </h2>
            </div>

            <div className="flex items-center gap-2 text-xs">
              {onGoToStore && (
                <button
                  onClick={() => onGoToStore(member.id)}
                  className="inline-flex items-center gap-1.5 bg-[#172233] hover:bg-[#202E44] text-[#00F0FF] hover:text-white px-3 py-1.5 rounded-xl font-bold transition-all border border-slate-700/80"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>ストアで全商品を見る</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
              <a
                href={memberGoods[0]?.fallbackSearchUrl || 'https://store.vspo.jp/'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#FF4687] hover:bg-[#FF6EA2] text-white px-3 py-1.5 rounded-xl font-bold transition-all shadow-md shadow-pink-950/40"
              >
                <span>公式ストアを開く</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {memberGoods.map(item => (
              <div
                key={item.id}
                className="group/item bg-[#0D1422] hover:bg-[#131D2F] border border-slate-800 hover:border-[#FF4687]/60 rounded-2xl overflow-hidden p-3 transition-all flex flex-col justify-between shadow-md hover:-translate-y-1"
              >
                <div>
                  <div className="relative aspect-square w-full rounded-xl bg-gradient-to-b from-[#141E30] to-[#0A0F1A] p-3 flex items-center justify-center overflow-hidden mb-2.5">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="max-h-full max-w-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)] group-hover/item:scale-105 transition-transform duration-300" 
                      loading="lazy"
                    />
                    <span className="absolute top-2 left-2 text-[9px] font-black px-1.5 py-0.5 rounded-full border bg-black/60 text-slate-300 border-slate-700">
                      {item.categoryName}
                    </span>
                  </div>

                  <h3 className="text-xs font-bold text-white line-clamp-2 leading-snug group-hover/item:text-[#00F0FF] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between gap-1">
                  <span className="text-xs sm:text-sm font-black text-[#FF4687] font-mono">
                    {item.priceFormatted}
                  </span>

                  <a
                    href={item.officialUrl || item.fallbackSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-[#FF4687] hover:bg-[#FF6EA2] text-white transition-colors"
                    title="公式ストアの商品ページを開く"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Unit Teammates (Same Unit Members) */}
      {unitMembers.length > 0 && (
        <div className="bg-[#0D1420] p-6 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#00F0FF]" />
            <h3 className="text-sm font-bold text-white font-gaming">
              所属ユニット「{member.unit}」の他メンバー
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {unitMembers.map(uMember => (
              <div
                key={uMember.id}
                onClick={() => onSelectMember(uMember)}
                className="group cursor-pointer bg-[#121926] hover:bg-[#1A263B] border border-slate-700/60 hover:border-[#00F0FF] p-3 rounded-xl transition-all flex items-center gap-2.5 shadow-sm"
              >
                <div 
                  className="w-10 h-10 rounded-full p-[1.5px] shrink-0"
                  style={{ background: `linear-gradient(135deg, ${uMember.color}, #00F0FF)` }}
                >
                  <img 
                    src={uMember.avatar} 
                    alt={uMember.name}
                    className="w-full h-full object-cover object-[center_12%] rounded-full bg-slate-900" 
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-white group-hover:text-[#00F0FF] truncate">
                    {uMember.name}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">
                    {uMember.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
