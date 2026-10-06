import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import LiveTicker from './components/LiveTicker';
import ScheduleView from './components/ScheduleView';
import TalentsView from './components/TalentsView';
import FavoritesView from './components/FavoritesView';
import TalentProfilePage from './components/TalentProfilePage';
import StreamDetailModal from './components/StreamDetailModal';
import TalentDetailModal from './components/TalentDetailModal';
import StoreView from './components/StoreView';
import AnalyticsView from './components/AnalyticsView';
import CommunityView from './components/CommunityView';
import YoutubeApiModal from './components/YoutubeApiModal';
import Footer from './components/Footer';

import { MEMBERS } from './data/members';
import { SCHEDULES, getLiveSchedules } from './data/schedules';
import { GOODS } from './data/goods';
import { getYoutubeApiKey, fetchLiveStreamsFromYouTube } from './utils/youtubeApi';

export default function App() {
  // Navigation: 'schedule' | 'talents' | 'favorites' | 'store'
  const [currentTab, setCurrentTab] = useState('schedule');
  const [storeMemberFilter, setStoreMemberFilter] = useState('ALL');

  // Real-time Dynamic Schedules state (updated automatically based on JST clock)
  const [schedules, setSchedules] = useState(() => getLiveSchedules());
  const [isRefreshing, setIsRefreshing] = useState(false);

  // YouTube Data API v3 States (Zero-Billing Safe Free Tier)
  const [isYoutubeModalOpen, setIsYoutubeModalOpen] = useState(false);
  const [youtubeApiKey, setYoutubeApiKey] = useState(() => getYoutubeApiKey());
  const [youtubeLiveStreams, setYoutubeLiveStreams] = useState([]);
  
  // Dedicated Full Talent Page state (when a user views an individual talent)
  const [viewingTalent, setViewingTalent] = useState(null);

  // Branch filter: 'ALL' | 'JP' | 'EN'
  const [selectedBranch, setSelectedBranch] = useState('ALL');

  // Timezone: 'JST' | 'UTC' | 'EST' | 'PST' etc.
  const [timezone, setTimezone] = useState('JST');

  // Modal states
  const [selectedStream, setSelectedStream] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);

  // Toast notification for user actions
  const [toast, setToast] = useState(null);

  // Sync real-time YouTube live streams if API key exists
  const syncYouTubeStreams = async (key = youtubeApiKey, force = false) => {
    if (!key) {
      setYoutubeLiveStreams([]);
      return;
    }
    try {
      const res = await fetchLiveStreamsFromYouTube(key, force);
      if (res.streams && res.streams.length > 0) {
        setYoutubeLiveStreams(res.streams);
      } else if (res.status === 'success') {
        setYoutubeLiveStreams([]);
      }
    } catch (e) {
      console.warn('YouTube sync error', e);
    }
  };

  // Initial YouTube sync
  useEffect(() => {
    if (youtubeApiKey) {
      syncYouTubeStreams(youtubeApiKey, false);
    }
  }, [youtubeApiKey]);

  // Real-time automatic background clock poll (every 10 seconds)
  // Ensures stream status switches from upcoming -> live -> ended in real-time!
  useEffect(() => {
    const interval = setInterval(() => {
      setSchedules(getLiveSchedules());
    }, 10000); // 10s auto-refresh
    return () => clearInterval(interval);
  }, []);

  // Merge real YouTube live streams into schedules if present
  const activeSchedules = useMemo(() => {
    if (!youtubeLiveStreams || youtubeLiveStreams.length === 0) {
      return schedules;
    }
    const realLiveMemberIds = new Set(youtubeLiveStreams.map(s => s.memberId));
    // Filter out mock live streams for members that have real YouTube streams
    const remaining = schedules.filter(s => !(s.status === 'live' && realLiveMemberIds.has(s.memberId)));
    return [...youtubeLiveStreams, ...remaining];
  }, [schedules, youtubeLiveStreams]);

  // Manual refresh handler
  const handleRefreshSchedules = async () => {
    setIsRefreshing(true);
    setSchedules(getLiveSchedules());
    if (youtubeApiKey) {
      await syncYouTubeStreams(youtubeApiKey, true);
      showToast('⚡ YouTube API実データ＆JST時計と同期しました', false);
    } else {
      showToast('⚡ JST時計と最新の配信状況に同期しました', false);
    }
    setTimeout(() => {
      setIsRefreshing(false);
    }, 600);
  };

  // Favorites state persisted in localStorage
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('vspo_favorites');
      return saved ? JSON.parse(saved) : ['ichinose-uruha', 'remia-aotsuki']; // Pre-populate Uruha & Remia
    } catch {
      return ['ichinose-uruha', 'remia-aotsuki'];
    }
  });

  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  // Persist favorites
  useEffect(() => {
    try {
      localStorage.setItem('vspo_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error('Failed to save favorites to localStorage', e);
    }
  }, [favorites]);

  // Key map of members for instant O(1) lookup
  const membersMap = useMemo(() => {
    const map = {};
    MEMBERS.forEach(m => {
      map[m.id] = m;
    });
    return map;
  }, []);

  // Filter currently live streams (dynamically computed from realtime schedules state)
  const liveStreams = useMemo(() => {
    return activeSchedules.filter(s => s.status === 'live');
  }, [activeSchedules]);

  // Show a toast alert
  const showToast = (message, isGold = true) => {
    setToast({ message, isGold });
    setTimeout(() => {
      setToast(null);
    }, 2800);
  };

  // Toggle favorite with toast feedback
  const handleToggleFavorite = (memberId) => {
    const targetMember = membersMap[memberId];
    const memberName = targetMember ? targetMember.name : memberId;

    setFavorites(prev => {
      if (prev.includes(memberId)) {
        showToast(`${memberName} を推しから解除しました`, false);
        return prev.filter(id => id !== memberId);
      } else {
        showToast(`★ ${memberName} を推しメンバーに登録しました！`, true);
        return [...prev, memberId];
      }
    });
  };

  // Browser History & URL Hash Sync
  // Handles back button navigation so the user NEVER gets stuck!
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#talent/')) {
        const talentId = hash.replace('#talent/', '');
        const member = membersMap[talentId];
        if (member) {
          setViewingTalent(member);
          setSelectedStream(null);
        }
      } else if (hash.startsWith('#stream/')) {
        const streamId = hash.replace('#stream/', '');
        const stream = SCHEDULES.find(s => s.id === streamId);
        if (stream) {
          setSelectedStream(stream);
        }
      } else if (hash === '#favorites') {
        setCurrentTab('favorites');
        setViewingTalent(null);
        setSelectedStream(null);
      } else if (hash === '#talents') {
        setCurrentTab('talents');
        setViewingTalent(null);
        setSelectedStream(null);
      } else if (hash.startsWith('#store')) {
        setCurrentTab('store');
        setViewingTalent(null);
        setSelectedStream(null);
        if (hash.startsWith('#store/')) {
          const memberId = hash.replace('#store/', '');
          setStoreMemberFilter(memberId);
        }
      } else if (hash === '#analytics') {
        setCurrentTab('analytics');
        setViewingTalent(null);
        setSelectedStream(null);
      } else if (hash === '#community') {
        setCurrentTab('community');
        setViewingTalent(null);
        setSelectedStream(null);
      } else if (hash === '#admin') {
        setIsYoutubeModalOpen(true);
      } else if (hash === '#schedule' || hash === '' || hash === '#') {
        setCurrentTab('schedule');
        setSelectedStream(null);
        setViewingTalent(null);
      }
    };

    syncFromHash();
    window.addEventListener('popstate', syncFromHash);
    window.addEventListener('hashchange', syncFromHash);
    return () => {
      window.removeEventListener('popstate', syncFromHash);
      window.removeEventListener('hashchange', syncFromHash);
    };
  }, [membersMap]);

  // Open stream detail with history push
  const handleOpenStream = (stream) => {
    setSelectedStream(stream);
    window.location.hash = `#stream/${stream.id}`;
  };

  // Close stream detail cleanly
  const handleCloseStream = () => {
    setSelectedStream(null);
    if (window.location.hash.startsWith('#stream/')) {
      if (viewingTalent) {
        window.location.hash = `#talent/${viewingTalent.id}`;
      } else {
        window.location.hash = `#${currentTab}`;
      }
    }
  };

  // Open dedicated talent page with history push
  const handleOpenTalentPage = (member) => {
    setSelectedStream(null);
    setViewingTalent(member);
    window.location.hash = `#talent/${member.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Back from dedicated talent page
  const handleBackFromTalent = () => {
    setViewingTalent(null);
    window.location.hash = `#${currentTab}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open Store page with optional member filter
  const handleGoToStore = (memberId = 'ALL') => {
    setSelectedStream(null);
    setViewingTalent(null);
    setStoreMemberFilter(memberId);
    setCurrentTab('store');
    window.location.hash = memberId && memberId !== 'ALL' ? `#store/${memberId}` : '#store';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard escape listener to close modals or talent page
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (selectedStream) {
          handleCloseStream();
        } else if (selectedMember) {
          setSelectedMember(null);
        } else if (viewingTalent) {
          handleBackFromTalent();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedStream, selectedMember, viewingTalent, currentTab]);

  return (
    <div className="min-h-screen bg-[#090D14] text-slate-100 flex flex-col font-sans relative selection:bg-[#FF4687] selection:text-white">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 bg-radial-gradient pointer-events-none z-0 opacity-80" />
      <div className="fixed inset-0 bg-radial-cyan pointer-events-none z-0 opacity-60" />
      <div className="fixed inset-0 bg-cyber-grid pointer-events-none z-0 opacity-40" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* Header */}
        <Header
          currentTab={currentTab}
          setCurrentTab={(tab) => {
            setViewingTalent(null);
            setCurrentTab(tab);
            window.location.hash = `#${tab}`;
          }}
          selectedBranch={selectedBranch}
          setSelectedBranch={setSelectedBranch}
          timezone={timezone}
          setTimezone={setTimezone}
          liveCount={liveStreams.length}
          favoriteCount={favorites.length}
          onOpenYoutubeModal={() => setIsYoutubeModalOpen(true)}
          hasYoutubeKey={Boolean(youtubeApiKey)}
        />

        {/* Live Ticker Bar (Top active streams) - only on schedule view when not viewing individual talent */}
        {currentTab === 'schedule' && !viewingTalent && (
          <LiveTicker
            liveStreams={liveStreams}
            membersMap={membersMap}
            onSelectStream={handleOpenStream}
            onSelectMember={handleOpenTalentPage}
          />
        )}

        {/* Main Content Area */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
          {/* Individual Talent Dedicated Page View */}
          {viewingTalent ? (
            <TalentProfilePage
              member={viewingTalent}
              allMembers={MEMBERS}
              membersMap={membersMap}
              schedules={activeSchedules}
              timezone={timezone}
              isFavorite={favorites.includes(viewingTalent.id)}
              onToggleFavorite={handleToggleFavorite}
              onBack={handleBackFromTalent}
              onSelectMember={handleOpenTalentPage}
              onSelectStream={handleOpenStream}
              allGoods={GOODS}
              onGoToStore={handleGoToStore}
            />
          ) : (
            <>
              {currentTab === 'schedule' && (
                <ScheduleView
                  schedules={activeSchedules}
                  members={MEMBERS}
                  membersMap={membersMap}
                  selectedBranch={selectedBranch}
                  setSelectedBranch={setSelectedBranch}
                  timezone={timezone}
                  favorites={favorites}
                  onToggleFavorite={handleToggleFavorite}
                  onSelectStream={handleOpenStream}
                  onSelectMember={handleOpenTalentPage}
                  showOnlyFavorites={showOnlyFavorites}
                  setShowOnlyFavorites={setShowOnlyFavorites}
                  onRefreshSchedules={handleRefreshSchedules}
                  isRefreshing={isRefreshing}
                  hasYoutubeKey={Boolean(youtubeApiKey)}
                  isYoutubeSyncActive={Boolean(youtubeApiKey && youtubeLiveStreams.length > 0)}
                  onOpenYoutubeModal={() => setIsYoutubeModalOpen(true)}
                />
              )}

              {currentTab === 'talents' && (
                <TalentsView
                  members={MEMBERS}
                  selectedBranch={selectedBranch}
                  setSelectedBranch={setSelectedBranch}
                  onSelectMember={handleOpenTalentPage}
                  favorites={favorites}
                  onToggleFavorite={handleToggleFavorite}
                />
              )}

              {currentTab === 'favorites' && (
                <FavoritesView
                  favorites={favorites}
                  members={MEMBERS}
                  membersMap={membersMap}
                  schedules={activeSchedules}
                  timezone={timezone}
                  onToggleFavorite={handleToggleFavorite}
                  onSelectStream={handleOpenStream}
                  onSelectMember={handleOpenTalentPage}
                  onExploreTalents={() => {
                    setCurrentTab('talents');
                    window.location.hash = '#talents';
                  }}
                />
              )}

              {currentTab === 'store' && (
                <StoreView
                  goods={GOODS}
                  members={MEMBERS}
                  membersMap={membersMap}
                  selectedBranch={selectedBranch}
                  setSelectedBranch={setSelectedBranch}
                  favorites={favorites}
                  onSelectMember={handleOpenTalentPage}
                  initialMemberFilter={storeMemberFilter}
                />
              )}

              {currentTab === 'analytics' && (
                <AnalyticsView
                  members={MEMBERS}
                  membersMap={membersMap}
                  selectedBranch={selectedBranch}
                  setSelectedBranch={setSelectedBranch}
                  onSelectMember={handleOpenTalentPage}
                />
              )}

              {currentTab === 'community' && (
                <CommunityView
                  members={MEMBERS}
                  membersMap={membersMap}
                  onSelectMember={handleOpenTalentPage}
                />
              )}
            </>
          )}
        </main>

        {/* Footer with subtle Admin Setting Gate for Operators */}
        <Footer onOpenAdmin={() => setIsYoutubeModalOpen(true)} />
      </div>

      {/* YouTube Data API v3 Settings Modal */}
      <YoutubeApiModal
        isOpen={isYoutubeModalOpen}
        onClose={() => setIsYoutubeModalOpen(false)}
        onKeyUpdated={(newKey) => {
          setYoutubeApiKey(newKey);
          syncYouTubeStreams(newKey, true);
        }}
      />

      {/* Stream Detail Modal (With comprehensive Back button & backdrop closing) */}
      {selectedStream && (
        <StreamDetailModal
          stream={selectedStream}
          member={membersMap[selectedStream.memberId]}
          membersMap={membersMap}
          onClose={handleCloseStream}
          onSelectMember={(member) => {
            handleCloseStream();
            handleOpenTalentPage(member);
          }}
          timezone={timezone}
        />
      )}

      {/* Talent Detail Modal (Fallback if invoked) */}
      {selectedMember && (
        <TalentDetailModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
          isFavorite={favorites.includes(selectedMember.id)}
          onToggleFavorite={handleToggleFavorite}
          upcomingStreams={SCHEDULES.filter(s => s.memberId === selectedMember.id && s.status === 'upcoming')}
          onSelectStream={(stream) => {
            setSelectedMember(null);
            handleOpenStream(stream);
          }}
          timezone={timezone}
        />
      )}

      {/* Toast Notification Alert */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce-short pointer-events-none">
          <div className={`px-4 py-3 rounded-2xl shadow-2xl backdrop-blur-md flex items-center gap-2.5 border text-xs sm:text-sm font-bold ${
            toast.isGold
              ? 'bg-[#18150C]/95 text-amber-300 border-amber-400/80 shadow-amber-950/60 ring-2 ring-amber-400/30'
              : 'bg-[#141C2B]/95 text-slate-200 border-slate-700/80 shadow-black/80'
          }`}>
            <span>{toast.message}</span>
          </div>
        </div>
      )}
    </div>
  );
}
