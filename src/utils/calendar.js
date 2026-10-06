// Calendar generator utility for Google Calendar and iCal (.ics)

export function getGoogleCalendarUrl(stream, member) {
  if (!stream || !stream.date || !stream.time) return '#';
  
  // Stream date in JST format YYYY-MM-DD and HH:mm
  const [year, month, day] = stream.date.split('-');
  const [hour, minute] = stream.time.split(':');
  
  // JST is UTC+9, calculate start in UTC
  const startDate = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day), Number(hour) - 9, Number(minute)));
  const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000); // 2 hours default
  
  const formatUtc = (d) => d.toISOString().replace(/-|:|\.\d\d\d/g, '');
  
  const dates = `${formatUtc(startDate)}/${formatUtc(endDate)}`;
  const title = encodeURIComponent(`【ぶいすぽ】${stream.title}`);
  const details = encodeURIComponent(
    `配信者: ${member ? member.name : ''}\n` +
    `ゲーム: ${stream.game}\n` +
    `プラットフォーム: ${stream.platform.toUpperCase()}\n` +
    `URL: ${stream.streamUrl}\n\n` +
    `${stream.description || ''}`
  );
  const location = encodeURIComponent(stream.streamUrl || 'YouTube / Twitch');

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
}

export function downloadIcsFile(stream, member) {
  if (!stream || !stream.date || !stream.time) return;

  const [year, month, day] = stream.date.split('-');
  const [hour, minute] = stream.time.split(':');
  
  const startDate = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day), Number(hour) - 9, Number(minute)));
  const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000);
  
  const formatUtc = (d) => d.toISOString().replace(/-|:|\.\d\d\d/g, '');

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//VSPO Schedule//JP',
    'BEGIN:VEVENT',
    `UID:${stream.id}@vspo-schedule.app`,
    `DTSTAMP:${formatUtc(new Date())}`,
    `DTSTART:${formatUtc(startDate)}`,
    `DTEND:${formatUtc(endDate)}`,
    `SUMMARY:【ぶいすぽ】${stream.title.replace(/,/g, '\\,')}`,
    `DESCRIPTION:${(stream.description || stream.title).replace(/\n/g, '\\n')}\\n\\nURL: ${stream.streamUrl}`,
    `LOCATION:${stream.streamUrl}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${stream.id}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
