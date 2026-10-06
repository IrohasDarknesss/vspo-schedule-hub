import fs from 'fs';
import path from 'path';

// Helper to extract Next.js stream payload
function extractLivestreams(html) {
  if (!html) return [];
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

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=120');

  try {
    // Current JST dates
    const now = new Date(Date.now() + 9 * 3600000);
    const formatYMD = d => d.toISOString().slice(0, 10);
    const todayDate = formatYMD(now);
    const yesterdayDate = formatYMD(new Date(now.getTime() - 86400000));
    const tomorrowDate = formatYMD(new Date(now.getTime() + 86400000));

    const headers = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' };

    // Fetch live, upcoming, today, yesterday, and tomorrow in parallel
    const [liveRes, upcomingRes, todayRes, yestRes, tomRes] = await Promise.all([
      fetch('https://vspo-schedule.com/schedule/live', { headers }).catch(() => null),
      fetch('https://vspo-schedule.com/schedule/upcoming', { headers }).catch(() => null),
      fetch(`https://vspo-schedule.com/schedule/all?date=${todayDate}`, { headers }).catch(() => null),
      fetch(`https://vspo-schedule.com/schedule/all?date=${yesterdayDate}`, { headers }).catch(() => null),
      fetch(`https://vspo-schedule.com/schedule/all?date=${tomorrowDate}`, { headers }).catch(() => null),
    ]);

    const liveItems = liveRes && liveRes.ok ? extractLivestreams(await liveRes.text()) : [];
    const upcomingItems = upcomingRes && upcomingRes.ok ? extractLivestreams(await upcomingRes.text()) : [];
    const todayItems = todayRes && todayRes.ok ? extractLivestreams(await todayRes.text()) : [];
    const yestItems = yestRes && yestRes.ok ? extractLivestreams(await yestRes.text()) : [];
    const tomItems = tomRes && tomRes.ok ? extractLivestreams(await tomRes.text()) : [];

    // Fallback or base data from public/schedules.json
    const localPath = path.join(process.cwd(), 'public', 'schedules.json');
    let baseSchedules = [];
    if (fs.existsSync(localPath)) {
      baseSchedules = JSON.parse(fs.readFileSync(localPath, 'utf8'));
    }

    const allFetched = [...yestItems, ...tomItems, ...todayItems, ...upcomingItems, ...liveItems];
    if (allFetched.length === 0) {
      return res.status(200).json(baseSchedules);
    }

    // Map by id
    const liveMap = new Map();
    allFetched.forEach(item => liveMap.set(item.id, item));

    const updated = baseSchedules.map(s => {
      if (liveMap.has(s.id)) {
        const fresh = liveMap.get(s.id);
        return {
          ...s,
          status: fresh.status || s.status,
          viewCount: fresh.viewCount || s.viewCount,
          thumbnail: fresh.thumbnailUrl || s.thumbnail,
        };
      }
      return s;
    });

    return res.status(200).json(updated);
  } catch (err) {
    console.error('API Error:', err);
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
