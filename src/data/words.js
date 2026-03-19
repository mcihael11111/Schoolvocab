// ─── ALL WORDS ───────────────────────────────────────────────────────────────
// Aggregates all year-level word files into a single export.

// Year 12 (HSC)
import { BIOLOGY_WORDS } from "./year12/words-biology.js";
import { PHYSICS_WORDS } from "./year12/words-physics.js";
import { CHEMISTRY_WORDS } from "./year12/words-chemistry.js";
import { MATHS_WORDS } from "./year12/words-maths.js";
import { ENGLISH_WORDS } from "./year12/words-english.js";
import { ART_WORDS } from "./year12/words-art.js";

// Year 11 (Preliminary HSC)
import { Y11_BIOLOGY } from "./year11/words-biology.js";
import { Y11_PHYSICS } from "./year11/words-physics.js";
import { Y11_CHEMISTRY } from "./year11/words-chemistry.js";
import { Y11_MATHS } from "./year11/words-maths.js";
import { Y11_ENGLISH } from "./year11/words-english.js";
import { Y11_ART } from "./year11/words-art.js";

// Years 7-10
import { Y7_WORDS } from "./year7/words-all.js";
import { Y8_WORDS } from "./year8/words-all.js";
import { Y9_WORDS } from "./year9/words-all.js";
import { Y10_WORDS } from "./year10/words-all.js";

// D&T, Visual Arts 7-10, expanded VA 11-12 (from markdown pipeline)
import { MD_WORDS } from "./generated/words-from-md.js";

const ALL_WORDS = [
  // Year 12
  ...BIOLOGY_WORDS, ...PHYSICS_WORDS, ...CHEMISTRY_WORDS,
  ...MATHS_WORDS, ...ENGLISH_WORDS, ...ART_WORDS,
  // Year 11
  ...Y11_BIOLOGY, ...Y11_PHYSICS, ...Y11_CHEMISTRY,
  ...Y11_MATHS, ...Y11_ENGLISH, ...Y11_ART,
  // Years 7-10
  ...Y7_WORDS, ...Y8_WORDS, ...Y9_WORDS, ...Y10_WORDS,
  // Markdown-generated content (D&T, Visual Arts 7-10, expanded VA HSC)
  ...MD_WORDS,
];

export { ALL_WORDS };
