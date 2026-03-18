#!/usr/bin/env node
// ─── MARKDOWN → JS CONTENT PIPELINE ─────────────────────────────────────────
// Reads content/**/*.md files and generates src/data/ JS modules.
// Run: node scripts/build-content.js
//
// Markdown format:
//   ---
//   category: Heredity
//   subject: Biology
//   year: 12
//   icon: Dna
//   color: "#EFF6FF"
//   accent: "#3B82F6"
//   description: Genes, alleles, and Mendelian genetics
//   ---
//
//   ## Allele
//
//   - type: know-it
//   - level: beginner
//   - related: Gene, Genotype, Dominant Trait
//
//   ### Definition
//   An allele is one of two or more alternative versions of a gene...
//
//   ### Why It Matters
//   Understanding alleles is the foundation...
//
//   ### Scenario
//   A Year 12 student was completing...
//
//   ### Example
//   > "The brown eye allele is dominant..."
//
//   ### Steps (do-it only)
//   1. First step
//   2. Second step
//
//   ### Prompt (think-about-it only)
//   Why does natural selection lead to speciation?
//
//   ### Model Response (think-about-it only)
//   Natural selection acts on variation within populations...

import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve, join, basename } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const CONTENT_DIR = resolve(ROOT, "content");
const OUTPUT_DIR = resolve(ROOT, "src/data");

function parseFrontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { meta: {}, body: text };
  const meta = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
    if (/^\d+$/.test(val)) val = parseInt(val);
    meta[key] = val;
  }
  return { meta, body: text.slice(match[0].length).trim() };
}

function parseConcepts(body, meta) {
  const concepts = [];
  const sections = body.split(/\n## /).filter(Boolean);

  for (const section of sections) {
    const lines = section.split("\n");
    const conceptName = lines[0].replace(/^#+\s*/, "").trim();
    if (!conceptName) continue;

    const concept = {
      type: "know-it",
      term: conceptName,
      year: meta.year,
      category: meta.category,
      level: "Beginner",
      definition: "",
      whyItMatters: "",
      scenario: "",
      example: "",
      related: [],
      steps: [],
      prompt: "",
      modelResponse: "",
      syllabusRef: "",
    };

    // Parse metadata lines (- key: value)
    for (const line of lines.slice(1)) {
      const m = line.match(/^-\s+(\w[\w\s]*?):\s*(.+)$/);
      if (!m) continue;
      const key = m[1].trim().toLowerCase();
      const val = m[2].trim();
      if (key === "type") concept.type = val;
      else if (key === "level") concept.level = val.charAt(0).toUpperCase() + val.slice(1);
      else if (key === "related") concept.related = val.split(",").map(s => s.trim()).filter(Boolean);
      else if (key === "syllabus" || key === "syllabusref") concept.syllabusRef = val;
    }

    // Parse content sections (### Header)
    const contentText = lines.slice(1).join("\n");
    const subSections = contentText.split(/\n### /);

    for (const sub of subSections) {
      const subLines = sub.split("\n");
      const header = subLines[0].trim().toLowerCase();
      const content = subLines.slice(1).join("\n").trim()
        .replace(/^>\s*/gm, "")  // Remove blockquote markers
        .replace(/^\d+\.\s+/gm, match => match); // Keep numbered lists

      if (header.includes("definition") || header.includes("what it is")) {
        concept.definition = content;
      } else if (header.includes("why it matters")) {
        concept.whyItMatters = content;
      } else if (header.includes("scenario") || header.includes("real-world")) {
        concept.scenario = content;
      } else if (header.includes("example")) {
        concept.example = content.replace(/^[""]|[""]$/g, "");
      } else if (header.includes("steps")) {
        concept.steps = content.split("\n")
          .map(l => l.replace(/^\d+\.\s*/, "").trim())
          .filter(Boolean);
      } else if (header.includes("prompt") || header.includes("the question")) {
        concept.prompt = content;
      } else if (header.includes("model response")) {
        concept.modelResponse = content;
      }
    }

    // Clean up empty optional fields
    if (!concept.steps.length) delete concept.steps;
    if (!concept.prompt) delete concept.prompt;
    if (!concept.modelResponse) delete concept.modelResponse;
    if (!concept.syllabusRef) delete concept.syllabusRef;

    concepts.push(concept);
  }

  return concepts;
}

function escapeJS(str) {
  return str.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");
}

function conceptToJS(c) {
  let js = "  {\n";
  js += `    type: "${c.type}",\n`;
  js += `    term: "${escapeJS(c.term)}",\n`;
  js += `    year: ${c.year},\n`;
  js += `    category: "${escapeJS(c.category)}",\n`;
  js += `    level: "${c.level}",\n`;
  js += `    definition: "${escapeJS(c.definition)}",\n`;
  js += `    whyItMatters: "${escapeJS(c.whyItMatters)}",\n`;
  js += `    scenario: "${escapeJS(c.scenario)}",\n`;
  js += `    example: "${escapeJS(c.example)}",\n`;
  if (c.steps) js += `    steps: [${c.steps.map(s => `"${escapeJS(s)}"`).join(", ")}],\n`;
  if (c.prompt) js += `    prompt: "${escapeJS(c.prompt)}",\n`;
  if (c.modelResponse) js += `    modelResponse: "${escapeJS(c.modelResponse)}",\n`;
  if (c.syllabusRef) js += `    syllabusRef: "${escapeJS(c.syllabusRef)}",\n`;
  js += `    related: [${c.related.map(r => `"${escapeJS(r)}"`).join(", ")}],\n`;
  js += "  }";
  return js;
}

// ─── MAIN ────────────────────────────────────────────────────────────────────
if (!existsSync(CONTENT_DIR)) {
  console.log("No content/ directory found. Create content/ with .md files to use the markdown pipeline.");
  console.log("Current JS data files in src/data/ will continue to be used.");
  process.exit(0);
}

const mdFiles = [];
function walkDir(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) walkDir(join(dir, entry.name));
    else if (entry.name.endsWith(".md")) mdFiles.push(join(dir, entry.name));
  }
}
walkDir(CONTENT_DIR);

if (mdFiles.length === 0) {
  console.log("No .md files found in content/. Nothing to build.");
  process.exit(0);
}

console.log(`Found ${mdFiles.length} markdown files in content/`);

const allConcepts = [];
const categoryMeta = [];

for (const file of mdFiles) {
  const raw = readFileSync(file, "utf-8");
  const { meta, body } = parseFrontmatter(raw);
  const concepts = parseConcepts(body, meta);
  allConcepts.push(...concepts);

  if (meta.category) {
    categoryMeta.push({
      id: meta.category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      name: meta.category,
      domain: meta.subject,
      year: meta.year,
      count: concepts.length,
      color: meta.color || "#F8FAFC",
      accent: meta.accent || "#475569",
      icon: meta.icon || "BookOpen",
      description: meta.description || "",
    });
  }

  console.log(`  ${basename(file)}: ${concepts.length} concepts (${meta.category})`);
}

// Write combined words file
const wordsJS = `// Auto-generated by scripts/build-content.js — DO NOT EDIT
// Source: content/**/*.md
// Generated: ${new Date().toISOString()}

const MD_WORDS = [
${allConcepts.map(conceptToJS).join(",\n")}
];

export { MD_WORDS };
`;

mkdirSync(resolve(OUTPUT_DIR, "generated"), { recursive: true });
writeFileSync(resolve(OUTPUT_DIR, "generated/words-from-md.js"), wordsJS);

console.log(`\nGenerated: src/data/generated/words-from-md.js (${allConcepts.length} concepts)`);
console.log("To use markdown content, import MD_WORDS from './generated/words-from-md.js' in words.js");
