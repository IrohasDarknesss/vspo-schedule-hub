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

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=120');

  try {
    // 1. Fetch live and upcoming from vspo-schedule.com in parallel
    const [liveRes, upcomingRes] = await Promise.all([
      fetch('https://vspo-schedule.com/schedule/live', { headers: { 'User-Agent': 'Mozilla/5.0' } }).catch(() => null),
      fetch('https://vspo-schedule.com/schedule/upcoming', { headers: { 'User-Agent': 'Mozilla/5.0' } }).catch(() => null),
    ]);

    let liveItems = [];
    let upcomingItems = [];

    if (liveRes && liveRes.ok) {
      const html = await liveRes.text();
      liveItems = extractLivestreams(html);
    }
    if (upcomingRes && upcomingRes.ok) {
      const html = await upcomingRes.text();
      upcomingItems = extractLivestreams(html);
    }

    // Fallback or base data from public/schedules.json
    const localPath = path.join(process.cwd(), 'public', 'schedules.json');
    let baseSchedules = [];
    if (fs.existsSync(localPath)) {
      baseSchedules = JSON.parse(fs.readFileSync(localPath, 'utf8'));
    }

    if (liveItems.length === 0 && upcomingItems.length === 0) {
      // Return base schedules directly
      return res.status(200).json(baseSchedules);
    }

    // Merge live and upcoming updates into base schedules
    const liveMap = new Map();
    [...upcomingItems, ...liveItems].forEach(item => {
      liveMap.set(item.id, item);
    });

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
    // Safe fallback to public/schedules.json
    try {
      const localPath = path.join(process.cwd(), 'public', 'schedules.json');
      if (fs.existsSync(localPath)) {
        const baseSchedules = JSON.parse(fs.readFileSync(localPath, 'utf8'));
        return res.status(200).json(baseSchedules);
      }
    } catch (e) {
      // ignore
    }
    return res.status(500).json({ error: 'Failed to fetch schedules' });
  }
}
