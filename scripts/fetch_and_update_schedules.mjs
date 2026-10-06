import fs from 'fs';
import path from 'path';

// Helper to extract Next.js stream payload
function extractLivestreams(html) {
  const scriptChunks = [];
  for (const match of html.matchAll(/self\.__next_f\.push\(\[1,\"(.*?)\"\]\)/gs)) {
    scriptChunks.push(match[1]);
  }
  const fullPayload = scriptChunks.join('').replace(/\\\"/g, '"').replace(/\\n/g, '\n');
  
  const regex = /\{"id":"([^"]+)","type":"livestream"(.*?)\}(?=(,\{"id"|\]))/gs;
  const items = [];
  let match;
  while ((match = regex.exec(fullPayload)) !== null) {
    const titleMatch = match[2].match(/"title":"(.*?)"(?=,"description":)/s);
    const chTitleMatch = match[2].match(/"channelTitle":"(.*?)"(?=,"channelThumbnailUrl")/);
    const schedMatch = match[2].match(/"scheduledStartTime":"(.*?)"/);
    const statusMatch = match[2].match(/"status":"(.*?)"/);
    const platformMatch = match[2].match(/"platform":"(.*?)"/);
    const linkMatch = match[2].match(/"link":"(.*?)"/);
    const thumbMatch = match[2].match(/"thumbnailUrl":"(.*?)"/);
    const viewMatch = match[2].match(/"viewCount":(\d+)/);
    items.push({
      id: match[1],
      title: titleMatch ? titleMatch[1] : "",
      channelTitle: chTitleMatch ? chTitleMatch[1] : "",
      scheduledStartTime: schedMatch ? schedMatch[1] : "",
      status: statusMatch ? statusMatch[1] : "",
      platform: platformMatch ? platformMatch[1] : "youtube",
      link: linkMatch ? linkMatch[1] : "",
      thumbnailUrl: thumbMatch ? thumbMatch[1] : "",
      viewCount: viewMatch ? parseInt(viewMatch[1], 10) : 0
    });
  }
  return items;
}

function detectGame(title) {
  const t = title.toLowerCase();
  if (t.includes('pubg') || t.includes('バトロワ')) return 'PUBG';
  if (t.includes('apex') || t.includes('エーペックス')) return 'Apex Legends';
  if (t.includes('valorant') || t.includes('ヴァロラント') || t.includes('ヴァロ')) return 'VALORANT';
  if (t.includes('ストリートファイター') || t.includes('スト6') || t.includes('sf6') || t.includes('sfl')) return 'Street Fighter 6';
  if (t.includes('counter-strike') || t.includes('cs2')) return 'Counter-Strike 2';
  if (t.includes('雀魂') || t.includes('じゃんたま') || t.includes('麻雀')) return '雀魂';
  if (t.includes('lol') || t.includes('league of legends')) return 'League of Legends';
  if (t.includes('minecraft') || t.includes('マイクラ')) return 'Minecraft';
  if (t.includes('bombanana')) return 'BOMBANANA!';
  if (t.includes('wuthering waves') || t.includes('鳴潮')) return 'Wuthering Waves';
  if (t.includes('maplestory') || t.includes('メイプルストーリー')) return 'MapleStory';
  if (t.includes('雑談') || t.includes('おはよ') || t.includes('昼活') || t.includes('朝活') || t.includes('まったり')) return '雑談';
  if (t.includes('歌枠') || t.includes('singing') || t.includes('歌ってみた')) return '歌枠';
  if (t.includes('激ロー') || t.includes('公式')) return '公式企画';
  return 'ゲーム実況';
}

async function main() {
  const membersModule = await import('../src/data/members.js');
  const MEMBERS = membersModule.MEMBERS;

  function matchMember(stream) {
    const ch = (stream.channelTitle || '').toLowerCase();
    const title = (stream.title || '').toLowerCase();

    for (const mem of MEMBERS) {
      const name = mem.name.toLowerCase();
      const jpName = (mem.jpName || '').toLowerCase();
      const nameEn = (mem.nameEn || '').toLowerCase();

      if (ch.includes(name) || (jpName && ch.includes(jpName)) || (nameEn && ch.includes(nameEn))) {
        return mem;
      }
    }
    for (const mem of MEMBERS) {
      if (title.includes(mem.name.toLowerCase())) {
        return mem;
      }
    }
    return null;
  }

  console.log('Fetching live and upcoming streams from vspo-schedule.com...');
  const headers = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' };
  
  const [liveRes, upcomingRes, archiveRes] = await Promise.all([
    fetch('https://vspo-schedule.com/schedule/live', { headers }).catch(e => { console.warn('live fetch err', e); return null; }),
    fetch('https://vspo-schedule.com/schedule/upcoming', { headers }).catch(e => { console.warn('upcoming fetch err', e); return null; }),
    fetch('https://vspo-schedule.com/schedule/archive', { headers }).catch(e => { console.warn('archive fetch err', e); return null; }),
  ]);

  let liveItems = [];
  let upcomingItems = [];
  let archiveItems = [];

  if (liveRes && liveRes.ok) liveItems = extractLivestreams(await liveRes.text());
  if (upcomingRes && upcomingRes.ok) upcomingItems = extractLivestreams(await upcomingRes.text());
  if (archiveRes && archiveRes.ok) archiveItems = extractLivestreams(await archiveRes.text());

  console.log(`Fetched counts -> live: ${liveItems.length}, upcoming: ${upcomingItems.length}, archive: ${archiveItems.length}`);

  // If fetch failed completely, keep existing
  if (liveItems.length === 0 && upcomingItems.length === 0 && archiveItems.length === 0) {
    console.log('No items fetched, keeping existing data.');
    return;
  }

  // Load existing public/schedules.json to preserve past days
  const localPath = path.join(process.cwd(), 'public', 'schedules.json');
  const existingMap = new Map();
  if (fs.existsSync(localPath)) {
    const old = JSON.parse(fs.readFileSync(localPath, 'utf8'));
    old.forEach(s => existingMap.set(s.id, s));
  }

  // Merge in order
  const streamMap = new Map();
  [...archiveItems, ...upcomingItems, ...liveItems].forEach(s => {
    streamMap.set(s.id, s);
  });

  const formattedStreams = [];
  const memberRecentMap = {};

  for (const s of streamMap.values()) {
    const member = matchMember(s);
    if (!member) continue;

    const d = new Date(s.scheduledStartTime || Date.now());
    const jst = new Date(d.getTime() + 9 * 3600000);
    const jstDate = jst.toISOString().slice(0, 10);
    const jstTime = jst.toISOString().slice(11, 16);

    const game = detectGame(s.title);
    const platform = s.platform || (s.link && s.link.includes('twitch') ? 'twitch' : 'youtube');
    let thumb = s.thumbnailUrl;
    if (!thumb && platform === 'youtube') {
      thumb = `https://i.ytimg.com/vi/${s.id}/hqdefault.jpg`;
    }

    const collabMembers = MEMBERS.filter(m => m.id !== member.id && s.title.includes(m.name)).map(m => m.id);

    const formatted = {
      id: s.id,
      time: jstTime,
      date: jstDate,
      memberId: member.id,
      memberName: member.name,
      branch: member.branch,
      title: s.title,
      game: game,
      platform: platform,
      streamUrl: s.link || (platform === 'youtube' ? `https://www.youtube.com/watch?v=${s.id}` : `https://www.twitch.tv/videos/${s.id}`),
      thumbnail: thumb,
      viewCount: s.viewCount || (s.status === 'live' ? 1500 : 0),
      status: s.status,
      tags: [game, member.name],
      collabMembers: collabMembers,
      description: s.title
    };

    existingMap.set(formatted.id, formatted);
  }

  const allMerged = [...existingMap.values()];
  allMerged.sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`));

  fs.writeFileSync(localPath, JSON.stringify(allMerged, null, 2), 'utf8');

  const schedulesJsContent = `// VSPO Schedule Data (Real Official VSPO Streams)
// Updated with ACTUAL real-world streams from October 2026
// Live, upcoming and recent archives for all members

import { getRelativeJSTDateString, evaluateStreamRealtime } from '../utils/realtimeDate.js';

export const REAL_SCHEDULES = ${JSON.stringify(allMerged, null, 2)};

export function getLiveSchedules() {
  return REAL_SCHEDULES.map(item => evaluateStreamRealtime(item));
}

export const SCHEDULES = getLiveSchedules();
`;
  fs.writeFileSync(path.resolve('src/data/schedules.js'), schedulesJsContent, 'utf8');
  console.log(`Successfully synced ${allMerged.length} streams to public/schedules.json and src/data/schedules.js`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
