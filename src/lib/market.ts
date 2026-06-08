// ─────────────────────────────────────────────
// Marketplace types and category definitions
// Add new categories here — they auto-appear as filter chips
// ─────────────────────────────────────────────

export const MARKET_CATEGORIES = [
  "Queens",
  "Nucs",
  "Packages",
  "Honey",
  "Beeswax Products",
  "Equipment",
  "Services",
] as const;

export type MarketCategory = (typeof MARKET_CATEGORIES)[number];

export interface MarketMember {
  id: string;
  name: string;
  companyName: string;        // empty string if none
  email: string;
  phone: string;
  location: string;           // city/area, e.g. "Columbus, GA"
  categories: MarketCategory[];
  description: string;        // short freeform blurb
  availability: string;       // e.g. "Spring only" or "Year-round"
  website: string;            // empty string if none
  memberSince: number;        // year as number, e.g. 2019
  active: boolean;            // set false to hide without deleting
}
