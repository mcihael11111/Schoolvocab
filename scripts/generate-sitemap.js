#!/usr/bin/env node
// Generates a static sitemap.xml from the vocabulary data.
// Run: node scripts/generate-sitemap.js
// Output: public/sitemap.xml

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

// Parse categories file to extract year, domain, and id
const categoriesFile = readFileSync(resolve(ROOT, "src/data/categories.js"), "utf-8");

// Extract category objects with year, domain, and id
const catIdRegex = /id:\s*"([^"]+)"/g;
const categoryIds = [];
let match;
while ((match = catIdRegex.exec(categoriesFile)) !== null) {
  categoryIds.push(match[1]);
}

// Extract year-domain-id triples from the structured categories
// Parse the categories file to find year/domain/id combos
const yearRegex = /year:\s*(\d+)/g;
const domainRegex = /domain:\s*"([^"]+)"/g;
const idRegex2 = /id:\s*"([^"]+)"/g;

const years = [];
const domains = [];
const ids = [];
let m;
while ((m = yearRegex.exec(categoriesFile)) !== null) years.push(parseInt(m[1]));
domainRegex.lastIndex = 0;
while ((m = domainRegex.exec(categoriesFile)) !== null) domains.push(m[1]);
idRegex2.lastIndex = 0;
while ((m = idRegex2.exec(categoriesFile)) !== null) ids.push(m[1]);

// Build subject slug from domain name
function domainToSlug(domain) {
  return domain.toLowerCase().replace(/\s+/g, "-");
}

const DOMAIN = "https://schoolvocab.com.au";
const today = new Date().toISOString().split("T")[0];

const staticPages = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.6", changefreq: "monthly" },
  { path: "/categories", priority: "0.9", changefreq: "weekly" },
];

// Year landing pages
const yearSet = [...new Set(years)].sort((a, b) => a - b);
for (const y of yearSet) {
  staticPages.push({ path: `/year/${y}`, priority: "0.9", changefreq: "weekly" });
}

let urls = staticPages.map(p => `  <url>
    <loc>${DOMAIN}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`);

// Subject pages and category pages
for (let i = 0; i < ids.length && i < years.length && i < domains.length; i++) {
  const year = years[i];
  const domain = domains[i];
  const id = ids[i];
  const subjectSlug = domainToSlug(domain);

  // Subject page (deduplicated by year+subject)
  const subjectPath = `/year/${year}/${subjectSlug}`;
  if (!urls.some(u => u.includes(subjectPath))) {
    urls.push(`  <url>
    <loc>${DOMAIN}${subjectPath}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`);
  }

  // Category page
  urls.push(`  <url>
    <loc>${DOMAIN}/year/${year}/${subjectSlug}/${id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

mkdirSync(resolve(ROOT, "public"), { recursive: true });
writeFileSync(resolve(ROOT, "public/sitemap.xml"), sitemap);
console.log(`Sitemap generated: ${urls.length} URLs → public/sitemap.xml`);
