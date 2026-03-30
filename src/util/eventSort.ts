import { EventPageData } from "./types";

const MONTH_INDEX: Record<string, number> = {
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11,
};

export function parseEventStartDate(event: EventPageData): Date | null {
  // Prefer eventDate because it includes year in our dataset.
  const raw = (event.eventDate || "").trim();
  if (!raw) return null;

  // Common formats we currently have in the data set:
  // - "January 29, 2026"
  // - "February 17-18, 2026" (range, take the first day)
  // - "May 27-28, 2026" (range, take the first day)
  // - Some legacy: "28th of March, 2025" (best-effort)

  // Normalize "17-18" => "17"
  const rangeNormalized = raw.replace(
    /(\b\d{1,2})\s*-\s*\d{1,2}(\b)/,
    "$1$2"
  );

  // Normalize "28th of March, 2025" => "March 28, 2025"
  const legacyNormalized = rangeNormalized.replace(
    /(\b\d{1,2})(st|nd|rd|th)\s+of\s+([A-Za-z]+),\s*(\d{4})/i,
    (_m, day: string, _suf: string, month: string, year: string) =>
      `${month} ${day}, ${year}`
  );

  const dt = new Date(legacyNormalized);
  if (!Number.isNaN(dt.getTime())) return dt;

  // Fallback: use eventMonth + first day we can find.
  const monthIdx = MONTH_INDEX[(event.eventMonth || "").toLowerCase()];
  if (monthIdx === undefined) return null;

  const dayMatch = raw.match(/\b(\d{1,2})\b/);
  const yearMatch = raw.match(/\b(20\d{2})\b/);
  const day = dayMatch ? Number(dayMatch[1]) : 1;
  const year = yearMatch ? Number(yearMatch[1]) : new Date().getFullYear();

  const fallback = new Date(year, monthIdx, day);
  return Number.isNaN(fallback.getTime()) ? null : fallback;
}

export function filterActiveEvents(events: EventPageData[]): EventPageData[] {
  return events.filter((e) => e.eventStatus === "active");
}

export function sortActiveEventsByOccurrence(
  events: EventPageData[]
): EventPageData[] {
  return sortEventsByOccurrence(filterActiveEvents(events));
}

export function sortEventsByOccurrence(events: EventPageData[]): EventPageData[] {
  return [...events].sort((a, b) => {
    const da = parseEventStartDate(a);
    const db = parseEventStartDate(b);

    if (da && db) return da.getTime() - db.getTime();
    if (da && !db) return -1;
    if (!da && db) return 1;

    const ma = MONTH_INDEX[(a.eventMonth || "").toLowerCase()] ?? 99;
    const mb = MONTH_INDEX[(b.eventMonth || "").toLowerCase()] ?? 99;
    if (ma !== mb) return ma - mb;

    return a.event.localeCompare(b.event);
  });
}

export function getNextUpcomingEvent(
  events: EventPageData[],
  now: Date = new Date()
): EventPageData | null {
  const sorted = sortEventsByOccurrence(events);

  // Compare using start-of-day to avoid time-of-day surprises.
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();

  for (const ev of sorted) {
    const dt = parseEventStartDate(ev);
    if (!dt) continue;
    const evDay = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate()).getTime();
    if (evDay >= today) return ev;
  }

  // If everything is in the past (or unparsable), don't lie—return null.
  return null;
}

