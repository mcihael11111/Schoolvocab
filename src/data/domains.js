// ─── DOMAINS & STATS ────────────────────────────────────────────────────────
// Derived automatically from CATEGORIES — no manual updates needed.

import { CATEGORIES } from "./categories.js";

const domainNames = [...new Set(CATEGORIES.map(c => c.domain))];

const DOMAINS = [
  { id: "All", name: "All" },
  ...domainNames.map(d => ({ id: d, name: d })),
];

const totalTerms = CATEGORIES.reduce((sum, c) => sum + c.count, 0);
const yearSet = [...new Set(CATEGORIES.map(c => c.year))];

const STATS = [
  { value: `${totalTerms}+`, label: "Key concepts" },
  { value: `${CATEGORIES.length}`, label: "Categories" },
  { value: `${domainNames.length}`, label: "Subjects" },
  { value: `${yearSet.length}`, label: "Year levels" },
];

export { DOMAINS, STATS };
