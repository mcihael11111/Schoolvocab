// ─── FEATURED TERMS ─────────────────────────────────────────────────────────
// 12 hand-picked terms shown in the "Start with these" flashcard section.
// 2 terms per subject: Biology, Physics, Chemistry, Mathematics, English, Visual Arts.
// Add or swap term names here to update featured content — no other change needed.

import { ALL_WORDS } from "./words.js";

const FEATURED_TERMS = [
  // Biology
  "Natural Selection",
  "CRISPR-Cas9",
  // Physics
  "Newton's Second Law",
  "Wave-Particle Duality",
  // Chemistry
  "Covalent Bond",
  "Le Chatelier's Principle",
  // Mathematics
  "Derivative",
  "Normal Distribution",
  // English
  "Metaphor",
  "Intertextuality",
  // Visual Arts
  "Appropriation",
  "Composition",
];

const FEATURED_WORDS = ALL_WORDS.filter(w => FEATURED_TERMS.includes(w.term));

export { FEATURED_WORDS };
