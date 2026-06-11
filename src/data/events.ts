// ============================================
// SUNBITE — Upcoming Appearances
// Romana updates this file directly — no developer needed.
// Add new objects to the array; remove past events.
// ============================================

export type SunbiteEvent = {
  date: string      // e.g. "Saturday, 28 June"
  location: string  // venue or market name
  city: string      // city name
  type: 'Market' | 'Festival' | 'Pop-up' | 'Private Event'
}

export const upcomingEvents: SunbiteEvent[] = [
  // Example — replace with real dates:
  // { date: 'Saturday, 5 July', location: 'Aarauer Wochenmarkt', city: 'Aarau', type: 'Market' },
]
