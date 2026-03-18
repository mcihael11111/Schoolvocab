import { ALL_WORDS } from "../data/words.js";
import { CATEGORIES } from "../data/categories.js";

// ─── CATEGORY MAP ────────────────────────────────────────────────────────────
// O(1) lookup: "12::Heredity" → category object.
// Compound key avoids collisions when the same category name appears in multiple years.
export const CAT_MAP = Object.fromEntries(
  CATEGORIES.map(c => [`${c.year}::${c.name}`, c])
);

/**
 * Get words for a specific category (year-aware).
 */
export function getWordsForCategory(cat) {
  return ALL_WORDS.filter(w => w.category === cat.name && w.year === cat.year);
}

/**
 * Find a term object by name (case-insensitive).
 * Returns undefined if not found.
 */
export function findTermByName(name) {
  return ALL_WORDS.find(w => w.term.toLowerCase() === name.toLowerCase());
}

// ─── FREEMIUM: 25% FREE PER CATEGORY ─────────────────────────────────────────
// First 25% of terms in each category (per year) are free (min 1 per category).
function computeFreeTerms() {
  const byKey = {};
  for (const w of ALL_WORDS) {
    const key = `${w.year}::${w.category}`;
    if (!byKey[key]) byKey[key] = [];
    byKey[key].push(w.term);
  }
  const free = new Set();
  for (const terms of Object.values(byKey)) {
    const n = Math.max(1, Math.ceil(terms.length * 0.25));
    terms.slice(0, n).forEach(t => free.add(t));
  }
  return free;
}

export const FREE_TERMS = computeFreeTerms();
export const isTermLocked = (termName) => !FREE_TERMS.has(termName);
