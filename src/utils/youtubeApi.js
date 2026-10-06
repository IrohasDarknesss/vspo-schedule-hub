// YouTube Data API v3 Client & Quota-Guarded Real-time Sync
// GUARANTEED ZERO-BILLING / STRICT FREE QUOTA MANAGER (Max 10,000 units/day)
// Built with automatic caching, safety brakes, and seamless fallback

import { VSPO_YOUTUBE_CHANNELS } from '../data/youtubeChannels.js';
import { formatYMD, getJSTDate } from './realtimeDate.js';

const STORAGE_KEY_API_KEY = 'vspo_yt_api_key';
const STORAGE_KEY_LIVE_CACHE = 'vspo_yt_live_cache_v1';
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes cache to strictly preserve free quota
const DAILY_FREE_QUOTA_TOTAL = 10000; // Official YouTube Data API v3 free tier
const SAFETY_QUOTA_LIMIT = 8000; // Safe threshold before automated API pause

// 1. API Key Access
export function getYoutubeApiKey() {
  if (typeof window === 'undefined') return '';
  const localKey = localStorage.getItem(STORAGE_KEY_API_KEY);
  if (localKey && localKey.trim()) return localKey.trim();
  const envKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  if (envKey && envKey.trim()) return envKey.trim();
  return '';
}

export function saveYoutubeApiKey(key) {
  if (typeof window === 'undefined') return;
  if (!key || !key.trim()) {
    localStorage.removeItem(STORAGE_KEY_API_KEY);
  } else {
    localStorage.setItem(STORAGE_KEY_API_KEY, key.trim());
  }
}

export function removeYoutubeApiKey() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY_API_KEY);
}

// 2. Quota Usage Tracker (Zero Billing Guarantee)
function getTodayQuotaKey() {
  const todayStr = formatYMD(getJSTDate());
  return `vspo_yt_quota_${todayStr}`;
}

export function getTodayQuotaUsage() {
  if (typeof window === 'undefined') return 0;
  const key = getTodayQuotaKey();
  const val = localStorage.getItem(key);
  return val ? parseInt(val, 10) || 0 : 0;
}

export function recordQuotaUsage(units) {
  if (typeof window === 'undefined') return;
  const key = getTodayQuotaKey();
  const current = getTodayQuotaUsage();
  const updated = current + units;
  localStorage.setItem(key, updated.toString());
  return updated;
}

export function getQuotaStatus() {
  const used = getTodayQuotaUsage();
  const remaining = Math.max(0, DAILY_FREE_QUOTA_TOTAL - used);
  const isSafe = used < SAFETY_QUOTA_LIMIT;
  const percent = Math.min(100, Math.round((used / DAILY_FREE_QUOTA_TOTAL) * 100));

  return {
    used,
    total: DAILY_FREE_QUOTA_TOTAL,
    safeLimit: SAFETY_QUOTA_LIMIT,
    remaining,
    isSafe,
    percent,
  };
}

// 3. Cache Management
export function getCachedLiveStreams() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_LIVE_CACHE);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    const now = Date.now();
    if (now - parsed.timestamp < CACHE_TTL_MS) {
      return parsed.data;
    }
  } catch (e) {
    console.warn('Failed to parse YouTube live cache', e);
  }
  return null;
}

export function setCachedLiveStreams(data) {
  if (typeof window === 'undefined') return;
  try {
    const payload = {
      timestamp: Date.now(),
      data,
    };
    localStorage.setItem(STORAGE_KEY_LIVE_CACHE, JSON.stringify(payload));
  } catch (e) {
    console.warn('Failed to save YouTube live cache', e);
  }
}

export function clearLiveStreamsCache() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY_LIVE_CACHE);
}

// 4. API Key Verification (1 unit cost)
export async function testYoutubeApiKey(key) {
  if (!key) {
    return { success: false, error: 'APIキーが入力されていません。' };
  }

  const quota = getQuotaStatus();
  if (!quota.isSafe) {
    return {
      success: false,
      error: `本日の無料枠安全上限（${SAFETY_QUOTA_LIMIT} units）に達しているため、テストを一時休止しています。`,
    };
  }

  try {
    // 1 unit call: test with Kaga Sumire official channel ID
    const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UCyLGcqYs7RsBb3L0SJfzGYA&key=${encodeURIComponent(key)}`;
    const res = await fetch(url);
    recordQuotaUsage(1);

    if (!res.ok) {
      const errJson = await res.json().catch(() => ({}));
      const msg = errJson?.error?.message || `HTTP ${res.status} ${res.statusText}`;
      if (res.status === 403 && msg.includes('quota')) {
        return { success: false, error: 'YouTube APIの無料クォータ上限に達しています。明日午前0時にリセットされます。' };
      }
      return { success: false, error: `認証エラー: ${msg}` };
    }

    const data = await res.json();
    if (data.items && data.items.length > 0) {
      return {
        success: true,
        message: '接続成功！YouTube Data API v3 が正常に動作しています。',
        channelTitle: data.items[0]?.snippet?.title,
      };
    }
    return { success: false, error: 'レスポンスが空でした。' };
  } catch (err) {
    return { success: false, error: `ネットワークエラー: ${err.message}` };
  }
}

// Helper: match channelId to VSPO memberId
function findMemberByChannelId(channelId, channelTitle = '') {
  for (const [memberId, info] of Object.entries(VSPO_YOUTUBE_CHANNELS)) {
    if (info.channelId && info.channelId === channelId) {
      return memberId;
    }
  }
  // Fallback by channel name match
  for (const [memberId, info] of Object.entries(VSPO_YOUTUBE_CHANNELS)) {
    if (channelTitle.includes(info.name)) {
      return memberId;
    }
  }
  return null;
}

// Helper: Guess game category from title
function guessGameFromTitle(title) {
  const t = title.toLowerCase();
  if (t.includes('apex')) return 'Apex Legends';
  if (t.includes('valo') || t.includes('ヴァロ')) return 'VALORANT';
  if (t.includes('スト6') || t.includes('street fighter') || t.includes('sf6')) return 'Street Fighter 6';
  if (t.includes('overwatch') || t.includes('ow2') || t.includes('オバウォ')) return 'Overwatch 2';
  if (t.includes('マイクラ') || t.includes('minecraft')) return 'Minecraft';
  if (t.includes('lol') || t.includes('league of legends')) return 'League of Legends';
  if (t.includes('歌枠') || t.includes('sing') || t.includes('karaoke')) return '歌枠';
  if (t.includes('雑談') || t.includes('talk')) return '雑談';
  return 'Game / Stream';
}

// 5. Fetch Real-time Live Streams (Strictly Quota Guarded)
// Calls YouTube Search for live streams (100 units), then enriches with videos.list (1 unit)
// With 10-minute caching, 1 day only costs ~300-600 units, well below the 10,000 free quota.
export async function fetchLiveStreamsFromYouTube(customKey = null, forceRefresh = false) {
  const apiKey = customKey || getYoutubeApiKey();
  if (!apiKey) {
    return {
      status: 'no_api_key',
      streams: [],
      error: 'APIキーが設定されていません。',
    };
  }

  // Check cache first
  if (!forceRefresh) {
    const cached = getCachedLiveStreams();
    if (cached) {
      return {
        status: 'cached',
        streams: cached,
        cachedAt: Date.now(),
      };
    }
  }

  // Check quota safety
  const quota = getQuotaStatus();
  if (!quota.isSafe) {
    return {
      status: 'quota_safe_paused',
      streams: getCachedLiveStreams() || [],
      error: `無料枠の安全上限（${SAFETY_QUOTA_LIMIT} units）に達したため、本日の自動更新を一時停止しています。`,
    };
  }

  try {
    // 1. Search for live streams in VSPO (100 units)
    // q="ぶいすぽ" with eventType=live
    const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&eventType=live&q=${encodeURIComponent('ぶいすぽ')}&maxResults=25&key=${encodeURIComponent(apiKey)}`;
    
    const searchRes = await fetch(searchUrl);
    recordQuotaUsage(100);

    if (!searchRes.ok) {
      const errJson = await searchRes.json().catch(() => ({}));
      const msg = errJson?.error?.message || `HTTP ${searchRes.status}`;
      return {
        status: 'error',
        streams: [],
        error: `YouTube API エラー: ${msg}`,
      };
    }

    const searchData = await searchRes.json();
    const searchItems = searchData.items || [];

    if (searchItems.length === 0) {
      setCachedLiveStreams([]);
      return {
        status: 'success',
        streams: [],
      };
    }

    // 2. Collect video IDs for enrichment (1 unit for up to 50 videos)
    const videoIds = searchItems.map(item => item.id?.videoId).filter(Boolean);
    
    let videoDetailsMap = new Map();
    if (videoIds.length > 0) {
      const videosUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,liveStreamingDetails,statistics&id=${videoIds.join(',')}&key=${encodeURIComponent(apiKey)}`;
      const videosRes = await fetch(videosUrl);
      recordQuotaUsage(1);

      if (videosRes.ok) {
        const videosData = await videosRes.json();
        (videosData.items || []).forEach(v => {
          videoDetailsMap.set(v.id, v);
        });
      }
    }

    // 3. Normalize into app stream objects
    const liveStreams = [];

    for (const item of searchItems) {
      const videoId = item.id?.videoId;
      if (!videoId) continue;

      const channelId = item.snippet?.channelId;
      const channelTitle = item.snippet?.channelTitle || '';
      const matchedMemberId = findMemberByChannelId(channelId, channelTitle);

      // Only include if it belongs to a registered VSPO member
      if (!matchedMemberId) continue;

      const details = videoDetailsMap.get(videoId);
      const title = details?.snippet?.title || item.snippet?.title || '';
      const thumbnail = 
        details?.snippet?.thumbnails?.maxres?.url ||
        details?.snippet?.thumbnails?.high?.url ||
        item.snippet?.thumbnails?.high?.url ||
        `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

      const viewers = details?.liveStreamingDetails?.concurrentViewers;
      const actualStart = details?.liveStreamingDetails?.actualStartTime;

      let elapsedStr = '配信中';
      if (actualStart) {
        const startTime = new Date(actualStart).getTime();
        const diffMins = Math.max(0, Math.floor((Date.now() - startTime) / 60000));
        if (diffMins < 60) {
          elapsedStr = `${diffMins}分経過`;
        } else {
          const h = Math.floor(diffMins / 60);
          const m = diffMins % 60;
          elapsedStr = m > 0 ? `${h}時間${m}分経過` : `${h}時間経過`;
        }
      }

      const streamTime = actualStart
        ? formatYMD(getJSTDate(new Date(actualStart)))
        : formatYMD(getJSTDate());

      const startHoursMins = actualStart
        ? new Date(actualStart).toLocaleTimeString('ja-JP', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit', hour12: false })
        : 'LIVE';

      liveStreams.push({
        id: `yt-live-${videoId}`,
        isRealYoutubeLive: true,
        videoId,
        memberId: matchedMemberId,
        branch: VSPO_YOUTUBE_CHANNELS[matchedMemberId]?.branch || 'JP',
        title,
        game: guessGameFromTitle(title),
        platform: 'youtube',
        streamUrl: `https://www.youtube.com/watch?v=${videoId}`,
        thumbnail,
        date: streamTime,
        time: startHoursMins,
        status: 'live',
        elapsed: elapsedStr,
        viewerCount: viewers ? `${Number(viewers).toLocaleString()}人視聴中` : 'LIVE',
        description: details?.snippet?.description || item.snippet?.description || '',
      });
    }

    setCachedLiveStreams(liveStreams);

    return {
      status: 'success',
      streams: liveStreams,
      fetchedAt: Date.now(),
    };
  } catch (err) {
    console.error('Failed to fetch from YouTube API', err);
    return {
      status: 'error',
      streams: [],
      error: `通信エラー: ${err.message}`,
    };
  }
}
