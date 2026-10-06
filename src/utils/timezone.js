// Timezone helper utilities
export const TIMEZONES = [
  { id: 'JST', name: 'JST (日本時間 UTC+9)', offset: 9, flag: '🇯🇵' },
  { id: 'UTC', name: 'UTC (協定世界時)', offset: 0, flag: '🌐' },
  { id: 'EST', name: 'EST / EDT (米東部 UTC-4)', offset: -4, flag: '🇺🇸' },
  { id: 'PST', name: 'PST / PDT (米西部 UTC-7)', offset: -7, flag: '🇺🇸' },
  { id: 'CET', name: 'CET (中央欧州 UTC+1)', offset: 1, flag: '🇪🇺' },
  { id: 'KST', name: 'KST (韓国標準時 UTC+9)', offset: 9, flag: '🇰🇷' },
];

/**
 * Converts a JST time string "HH:mm" on a given date "YYYY-MM-DD" to target timezone.
 * Returns formatted string like "19:00 (JST)" or converted hours.
 */
export function formatTimeInTimezone(dateStr, timeStr, targetTzId = 'JST') {
  if (!timeStr) return '';
  const [hours, minutes] = timeStr.split(':').map(Number);
  
  const targetTz = TIMEZONES.find(t => t.id === targetTzId) || TIMEZONES[0];
  const offsetDiff = targetTz.offset - 9; // Original is JST (+9)

  let convertedHour = hours + offsetDiff;
  let dayOffset = 0;

  if (convertedHour >= 24) {
    convertedHour -= 24;
    dayOffset = 1;
  } else if (convertedHour < 0) {
    convertedHour += 24;
    dayOffset = -1;
  }

  const paddedHour = String(convertedHour).padStart(2, '0');
  const paddedMinute = String(minutes).padStart(2, '0');
  const timeFormatted = `${paddedHour}:${paddedMinute}`;

  if (dayOffset === 1) {
    return `${timeFormatted} (+1日)`;
  } else if (dayOffset === -1) {
    return `${timeFormatted} (-1日)`;
  }

  return timeFormatted;
}
