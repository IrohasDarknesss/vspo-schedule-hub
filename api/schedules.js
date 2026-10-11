import fs from 'fs';
import path from 'path';

// VSPO Member master mapping with prioritized channel keys
const MEMBER_MAP = [
  { id: 'kaga-sumire', name: '花芽すみれ', branch: 'JP', channelKeys: ['花芽すみれ', 'sumire kaga', 'sumire_kaga'], keys: ['花芽すみれ', 'sumire'] },
  { id: 'kaga-nazuna', name: '花芽なずな', branch: 'JP', channelKeys: ['花芽なずな', 'nazuna kaga', 'nazuna_kaga'], keys: ['花芽なずな', 'nazuna'] },
  { id: 'ichinose-uruha', name: '一ノ瀬うるは', branch: 'JP', channelKeys: ['一ノ瀬うるは', 'uruha ichinose'], keys: ['一ノ瀬うるは', 'uruha'] },
  { id: 'kogara-toto', name: '小雀とと', branch: 'JP', channelKeys: ['小雀とと', 'toto kogara'], keys: ['小雀とと', 'toto'] },
  { id: 'kurumi-noah', name: '胡桃のあ', branch: 'JP', channelKeys: ['胡桃のあ', 'noah kurumi'], keys: ['胡桃のあ', 'noah'] },
  { id: 'tachibana-hinano', name: '橘ひなの', branch: 'JP', channelKeys: ['橘ひなの', 'hinano tachibana'], keys: ['橘ひなの', 'hinano'] },
  { id: 'kisaragi-ren', name: '如月れん', branch: 'JP', channelKeys: ['如月れん', 'ren kisaragi'], keys: ['如月れん', 'ren'] },
  { id: 'tosaki-mimi', name: '兎咲ミミ', branch: 'JP', channelKeys: ['兎咲ミミ', 'mimi tosaki'], keys: ['兎咲ミミ', 'mimi'] },
  { id: 'asumi-sena', name: '空澄セナ', branch: 'JP', channelKeys: ['空澄セナ', 'sena asumi'], keys: ['空澄セナ', 'sena'] },
  { id: 'hanabusa-lisa', name: '英リサ', branch: 'JP', channelKeys: ['英リサ', 'lisa hanabusa'], keys: ['英リサ', 'lisa'] },
  { id: 'yakumo-beni', name: '八雲べに', branch: 'JP', channelKeys: ['八雲べに', 'beni yakumo'], keys: ['八雲べに', 'beni'] },
  { id: 'aizawa-ema', name: '藍沢エマ', branch: 'JP', channelKeys: ['藍沢エマ', 'ema aizawa'], keys: ['藍沢エマ', 'ema'] },
  { id: 'shinomiya-runa', name: '紫宮るな', branch: 'JP', channelKeys: ['紫宮るな', 'runa shinomiya'], keys: ['紫宮るな', 'runa'] },
  { id: 'nekota-tsuna', name: '猫汰つな', branch: 'JP', channelKeys: ['猫汰つな', 'tsuna nekota'], keys: ['猫汰つな', 'tsuna'] },
  { id: 'shiranami-ramune', name: '白波らむね', branch: 'JP', channelKeys: ['白波らむね', 'ramune shiranami'], keys: ['白波らむね', 'ramune'] },
  { id: 'komori-met', name: '小森めと', branch: 'JP', channelKeys: ['小森めと', 'met channel', 'met komori'], keys: ['小森めと', 'めと'] },
  { id: 'yumeno-akari', name: '夢野あかり', branch: 'JP', channelKeys: ['夢野あかり', 'akari yumeno', 'akarindao'], keys: ['夢野あかり', 'あかりん'] },
  { id: 'yano-kuromu', name: '夜乃くろむ', branch: 'JP', channelKeys: ['夜乃くろむ', 'kuromu yano'], keys: ['夜乃くろむ', 'くろむ'] },
  { id: 'tsumugi-kokage', name: '紡木こかげ', branch: 'JP', channelKeys: ['紡木こかげ', 'kokage tsumugi'], keys: ['紡木こかげ', 'こかげ'] },
  { id: 'sendou-yuuhi', name: '千燈ゆうひ', branch: 'JP', channelKeys: ['千燈ゆうひ', 'yuuhi sendou'], keys: ['千燈ゆうひ', 'ゆうひ'] },
  { id: 'choya-hanabi', name: '蝶屋はなび', branch: 'JP', channelKeys: ['蝶屋はなび', 'hanabi choya'], keys: ['蝶屋はなび', 'はなび'] },
  { id: 'amayui-moka', name: '甘結もか', branch: 'JP', channelKeys: ['甘結もか', 'moka amayui'], keys: ['甘結もか', 'もか'] },
  { id: 'awane-meguru', name: '泡音めぐる', branch: 'JP', channelKeys: ['泡音めぐる', 'meguru awane'], keys: ['泡音めぐる', 'めぐる'] },
  { id: 'ginjo-saine', name: '銀城サイネ', branch: 'JP', channelKeys: ['銀城サイネ', 'saine ginjo'], keys: ['銀城サイネ', 'サイネ'] },
  { id: 'tatsumaki-chise', name: '龍巻ちせ', branch: 'JP', channelKeys: ['龍巻ちせ', 'chise tatsumaki'], keys: ['龍巻ちせ', 'ちせ'] },
  // EN
  { id: 'remia-aotsuki', name: 'Remia Aotsuki', branch: 'EN', channelKeys: ['remia aotsuki', 'remia'], keys: ['remia', 'aotsuki', '青月'] },
  { id: 'arya-kuroha', name: 'Arya Kuroha', branch: 'EN', channelKeys: ['arya kuroha', 'arya'], keys: ['arya', 'kuroha', '黒羽'] },
  { id: 'jili-cooper', name: 'Jili Cooper', branch: 'EN', channelKeys: ['jili cooper', 'jili'], keys: ['jili', 'cooper'] },
  { id: 'riko-solari', name: 'Riko Solari', branch: 'EN', channelKeys: ['riko solari', 'riko'], keys: ['riko', 'solari'] },
  { id: 'nisa-carnival', name: 'Nisa Carnival', branch: 'EN', channelKeys: ['nisa carnival', 'nisa'], keys: ['nisa', 'carnival'] },
  { id: 'juno-umezono', name: 'Juno Umezono', branch: 'EN', channelKeys: ['juno umezono', 'juno'], keys: ['juno', 'umezono', '梅園'] },
  { id: 'chelsea-tully', name: 'Chelsea Tully', branch: 'EN', channelKeys: ['chelsea tully', 'chelsea'], keys: ['chelsea', 'tully'] }
];

function resolveMember(channelTitle, title) {
  const chLower = (channelTitle || '').toLowerCase();
  // 1. Prioritize channelTitle
  for (const m of MEMBER_MAP) {
    for (const k of (m.channelKeys || [])) {
      if (chLower.includes(k.toLowerCase())) {
        return m;
      }
    }
  }

  // 2. Fallback to title keywords
  const titleLower = (title || '').toLowerCase();
  for (const m of MEMBER_MAP) {
    for (const k of m.keys) {
      if (titleLower.includes(k.toLowerCase())) {
        return m;
      }
    }
  }

  return null;
}

function detectGame(title) {
  const t = (title || '').toLowerCase();
  if (t.includes('apex')) return 'Apex Legends';
  if (t.includes('valorant') || t.includes('ヴァロ')) return 'VALORANT';
  if (t.includes('スト6') || t.includes('street fighter') || t.includes('sf6')) return 'Street Fighter 6';
  if (t.includes('lol') || t.includes('league of legends')) return 'League of Legends';
  if (t.includes('雑談') || t.includes('おはよ') || t.includes('ニチアサ') || t.includes('よるざつ')) return '雑談';
  if (t.includes('silent hill')) return 'SILENT HILL 2';
  if (t.includes('ペルソナ')) return 'Persona 5 Royal';
  if (t.includes('ramen')) return 'Japanese Ramen Simulator';
  if (t.includes('wuthering waves') || t.includes('鳴潮')) return 'Wuthering Waves';
  if (t.includes('maplestory') || t.includes('メイプル')) return 'MapleStory';
  if (t.includes('minecraft') || t.includes('マイクラ')) return 'Minecraft';
  if (t.includes('原神') || t.includes('genshin')) return '原神';
  if (t.includes('歌枠') || t.includes('singing')) return '歌枠';
  return 'ゲーム実況';
}

function extractLivestreams(html) {
  if (!html) return [];
  const scriptChunks = [];
  for (const match of html.matchAll(/self\.__next_f\.push\(\[1,\"(.*?)\"\]\)/gs)) {
    scriptChunks.push(match[1]);
  }
  const fullPayload = scriptChunks.join('').replace(/\\\"/g, '"').replace(/\\n/g, '\n');

  const regex = /\{"id":"([^"]+)","type":"livestream"(.*?)\}(?=(,\{"id"|\]))/gs;
  const items = [];

  for (const match of fullPayload.matchAll(regex)) {
    const raw = match[2];
    const id = match[1];

    const titleMatch = raw.match(/"title":"(.*?)"(?=,"description":)/s);
    const chTitleMatch = raw.match(/"channelTitle":"(.*?)"/);
    const schedMatch = raw.match(/"scheduledStartTime":"(.*?)"/);
    const statusMatch = raw.match(/"status":"(.*?)"/);
    const platformMatch = raw.match(/"platform":"(.*?)"/);
    const linkMatch = raw.match(/"link":"(.*?)"/);
    const thumbMatch = raw.match(/"thumbnailUrl":"(.*?)"/);
    const viewMatch = raw.match(/"viewCount":(\d+)/);

    const title = titleMatch ? titleMatch[1] : '';
    const channelTitle = chTitleMatch ? chTitleMatch[1] : '';
    const scheduledStartTime = schedMatch ? schedMatch[1] : '';
    const status = statusMatch ? statusMatch[1] : 'ended';
    const platform = platformMatch ? platformMatch[1] : 'youtube';
    const link = linkMatch ? linkMatch[1] : (platform === 'twitch' ? `https://www.twitch.tv/videos/${id}` : `https://www.youtube.com/watch?v=${id}`);
    const thumbnailUrl = thumbMatch ? thumbMatch[1] : (platform === 'youtube' ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : '');
    const viewCount = viewMatch ? parseInt(viewMatch[1], 10) : 0;

    // Convert UTC scheduledStartTime to JST date (YYYY-MM-DD) and time (HH:mm)
    let date = '';
    let time = '00:00';
    if (scheduledStartTime) {
      const utcDate = new Date(scheduledStartTime);
      if (!isNaN(utcDate.getTime())) {
        const jstDate = new Date(utcDate.getTime() + 9 * 3600000);
        date = jstDate.toISOString().slice(0, 10);
        time = `${String(jstDate.getUTCHours()).padStart(2, '0')}:${String(jstDate.getUTCMinutes()).padStart(2, '0')}`;
      }
    }

    const member = resolveMember(channelTitle, title);

    items.push({
      id,
      title,
      channelTitle,
      scheduledStartTime,
      time,
      date,
      memberId: member ? member.id : 'unknown',
      memberName: member ? member.name : channelTitle,
      branch: member ? member.branch : 'JP',
      game: detectGame(title),
      platform,
      streamUrl: link,
      thumbnail: thumbnailUrl,
      viewCount,
      status,
      tags: [detectGame(title), member ? member.name : 'ぶいすぽっ！'],
      collabMembers: [],
      description: title
    });
  }

  return items;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=120');

  try {
    // Current JST dates (UTC+9)
    const nowJst = new Date(Date.now() + 9 * 3600000);
    const formatYMD = d => d.toISOString().slice(0, 10);
    const todayDate = formatYMD(nowJst);
    const yesterdayDate = formatYMD(new Date(nowJst.getTime() - 86400000));
    const tomorrowDate = formatYMD(new Date(nowJst.getTime() + 86400000));

    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    };

    // Parallel fetch using WWW domain directly to prevent 301 redirects
    const [liveRes, todayRes, yestRes, tomRes] = await Promise.all([
      fetch('https://www.vspo-schedule.com/', { headers }).catch(() => null),
      fetch(`https://www.vspo-schedule.com/schedule/all?date=${todayDate}`, { headers }).catch(() => null),
      fetch(`https://www.vspo-schedule.com/schedule/all?date=${yesterdayDate}`, { headers }).catch(() => null),
      fetch(`https://www.vspo-schedule.com/schedule/all?date=${tomorrowDate}`, { headers }).catch(() => null),
    ]);

    const liveItems = liveRes && liveRes.ok ? extractLivestreams(await liveRes.text()) : [];
    const todayItems = todayRes && todayRes.ok ? extractLivestreams(await todayRes.text()) : [];
    const yestItems = yestRes && yestRes.ok ? extractLivestreams(await yestRes.text()) : [];
    const tomItems = tomRes && tomRes.ok ? extractLivestreams(await tomRes.text()) : [];

    const newlyFetched = [...yestItems, ...todayItems, ...tomItems, ...liveItems];

    // Read base schedules from disk
    const localPath = path.join(process.cwd(), 'public', 'schedules.json');
    let baseSchedules = [];
    if (fs.existsSync(localPath)) {
      baseSchedules = JSON.parse(fs.readFileSync(localPath, 'utf8'));
    }

    if (newlyFetched.length === 0) {
      return res.status(200).json(baseSchedules);
    }

    // Merge: ID map ensures dedup, latest real-time data takes precedence
    const scheduleMap = new Map();

    // 1. Put newly fetched items first
    newlyFetched.forEach(item => {
      if (item && item.id) {
        scheduleMap.set(item.id, item);
      }
    });

    // 2. Put base schedules if not already present or update status if fresh
    baseSchedules.forEach(item => {
      if (!scheduleMap.has(item.id)) {
        scheduleMap.set(item.id, item);
      }
    });

    const merged = Array.from(scheduleMap.values());

    return res.status(200).json(merged);
  } catch (err) {
    console.error('Schedules API Error:', err);
    try {
      const localPath = path.join(process.cwd(), 'public', 'schedules.json');
      if (fs.existsSync(localPath)) {
        return res.status(200).json(JSON.parse(fs.readFileSync(localPath, 'utf8')));
      }
    } catch (e) {
      // ignore
    }
    return res.status(500).json({ error: 'Failed to fetch schedules' });
  }
}
