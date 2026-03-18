// ─── ALL WORDS ───────────────────────────────────────────────────────────────
// Aggregates all HSC subject word files into a single export.
// 437 terms across 29 categories and 6 subjects.

import { BIOLOGY_WORDS } from "./words-biology.js";
import { PHYSICS_WORDS } from "./words-physics.js";
import { CHEMISTRY_WORDS } from "./words-chemistry.js";
import { MATHS_WORDS } from "./words-maths.js";
import { ENGLISH_WORDS } from "./words-english.js";
import { ART_WORDS } from "./words-art.js";

const ALL_WORDS = [
  ...BIOLOGY_WORDS,
  ...PHYSICS_WORDS,
  ...CHEMISTRY_WORDS,
  ...MATHS_WORDS,
  ...ENGLISH_WORDS,
  ...ART_WORDS,
];

export { ALL_WORDS };
