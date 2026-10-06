// JST Real-time Date and Live Status Helper
// NO PAID APIS / NO BILLING - Pure client-side dynamic real-time scheduling

export function getJSTDate(baseDate = new Date()) {
  // Convert any date to JST (UTC+9)
  const utcTime = baseDate.getTime() + baseDate.getTimezoneOffset() * 60000;
  return new Date(utcTime + 9 * 3600000);
}

export function formatYMD(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function formatMD(date) {
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${m}/${d}`;
}

export function getRelativeJSTDateString(offsetDays = 0) {
  const jst = getJSTDate();
  jst.setDate(jst.getDate() + offsetDays);
  return formatYMD(jst);
}

export function getRelativeJSTDateLabel(offsetDays = 0) {
  const jst = getJSTDate();
  jst.setDate(jst.getDate() + offsetDays);
  return formatMD(jst);
}

// Compute real-time status and labels based on current JST time
export function evaluateStreamRealtime(stream) {
  const now = getJSTDate();
  const currentYMD = formatYMD(now);
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const [streamHours, streamMins] = stream.time.split(':').map(Number);
  const streamStartMinutes = streamHours * 60 + streamMins;

  // Expected stream duration in minutes (default 150 mins = 2.5 hours)
  const expectedDurationMins = stream.estimatedDurationMins || 150;
  const streamEndMinutes = streamStartMinutes + expectedDurationMins;

  let computedStatus = stream.status;
  let startsIn = null;
  let elapsed = null;

  if (stream.date < currentYMD) {
    // Past day -> Ended
    computedStatus = 'ended';
  } else if (stream.date > currentYMD) {
    // Future day -> Upcoming
    computedStatus = 'upcoming';
    startsIn = `${stream.date.slice(5)} ${stream.time}`;
  } else {
    // Today! Evaluate by time of day
    if (stream.status === 'live') {
      computedStatus = 'live';
      const elapsedMins = Math.max(0, currentMinutes - streamStartMinutes);
      if (elapsedMins < 60) {
        elapsed = `${elapsedMins}分経過`;
      } else {
        const h = Math.floor(elapsedMins / 60);
        const m = elapsedMins % 60;
        elapsed = m > 0 ? `${h}時間${m}分経過` : `${h}時間経過`;
      }
    } else if (stream.status === 'ended') {
      computedStatus = 'ended';
    } else if (currentMinutes < streamStartMinutes - 5) {
      // Before start
      computedStatus = 'upcoming';
      const diffMins = streamStartMinutes - currentMinutes;
      if (diffMins < 60) {
        startsIn = `あと${diffMins}分`;
      } else {
        const hours = Math.floor(diffMins / 60);
        const mins = diffMins % 60;
        startsIn = mins > 0 ? `あと${hours}時間${mins}分` : `あと${hours}時間`;
      }
    } else if (currentMinutes >= streamStartMinutes - 5 && currentMinutes < streamEndMinutes) {
      // Started / Live window
      computedStatus = 'live';
      const elapsedMins = Math.max(0, currentMinutes - streamStartMinutes);
      if (elapsedMins < 60) {
        elapsed = `${elapsedMins}分経過`;
      } else {
        const h = Math.floor(elapsedMins / 60);
        const m = elapsedMins % 60;
        elapsed = m > 0 ? `${h}時間${m}分経過` : `${h}時間経過`;
      }
    } else {
      computedStatus = 'ended';
    }
  }

  return {
    ...stream,
    status: computedStatus,
    startsIn: startsIn || stream.startsIn,
    elapsed: elapsed || stream.elapsed,
  };
}
