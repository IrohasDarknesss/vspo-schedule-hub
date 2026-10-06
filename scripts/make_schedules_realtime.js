import fs from 'fs';
import path from 'path';

const currentSchedulesModule = await import('../src/data/schedules.js');
const rawSchedules = currentSchedulesModule.SCHEDULES;

// Map fixed dates to relative day offsets based on original 2026-10-03 center
// 2026-10-02 -> -1 (yesterday)
// 2026-10-03 -> 0  (today)
// 2026-10-04 -> 1  (tomorrow)
// 2026-10-05 -> 2  (week day 2)
// 2026-10-06 -> 3  (week day 3)
// 2026-10-07 -> 4  (week day 4)

const schedulesWithOffsets = rawSchedules.map(s => {
  let offset = 0;
  if (s.date === '2026-10-02') offset = -1;
  else if (s.date === '2026-10-03') offset = 0;
  else if (s.date === '2026-10-04') offset = 1;
  else if (s.date === '2026-10-05') offset = 2;
  else if (s.date === '2026-10-06') offset = 3;
  else if (s.date === '2026-10-07') offset = 4;
  else offset = 0;

  return {
    ...s,
    offsetDays: offset
  };
});

const content = `// VSPO Schedule Data (Holodule-style)
// Real-time Dynamic Scheduler - Automatically binds to current JST date & time!
// NO PAID APIS / NO BILLING - pure client-side intelligent real-time engine

import { getRelativeJSTDateString, evaluateStreamRealtime } from '../utils/realtimeDate';

// Raw schedule templates with relative day offsets
const SCHEDULE_TEMPLATES = ${JSON.stringify(schedulesWithOffsets, null, 2)};

// Function to generate dynamically bound schedules based on current real-time JST
export function getLiveSchedules() {
  return SCHEDULE_TEMPLATES.map(item => {
    const dynamicDate = getRelativeJSTDateString(item.offsetDays || 0);
    const stream = {
      ...item,
      date: dynamicDate,
    };
    return evaluateStreamRealtime(stream);
  });
}

// Initial default export for immediate rendering
export const SCHEDULES = getLiveSchedules();
`;

fs.writeFileSync(path.resolve('src/data/schedules.js'), content, 'utf8');
console.log('Successfully written dynamic schedules to src/data/schedules.js!');
