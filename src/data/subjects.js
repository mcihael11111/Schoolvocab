// ─── SUBJECTS & YEARS ───────────────────────────────────────────────────────
// Which subjects are available in each year level.

import {
  BookOpen, LineChart, FlaskConical, Landmark, Globe2,
  HeartPulse, DollarSign, Cpu, Dna, Atom, Paintbrush, Ruler,
} from "lucide-react";

const SUBJECTS = [
  // Shared across 7-12
  { id: "english",      name: "English",       slug: "english",      years: [7,8,9,10,11,12], color: "#EEF2FF", accent: "#4F46E5", icon: BookOpen },
  { id: "mathematics",  name: "Mathematics",    slug: "mathematics",  years: [7,8,9,10,11,12], color: "#EFF6FF", accent: "#3B82F6", icon: LineChart },

  // Years 7-10 only
  { id: "science",      name: "Science",        slug: "science",      years: [7,8,9,10],       color: "#F0FDF4", accent: "#22C55E", icon: FlaskConical },
  { id: "history",      name: "History",        slug: "history",      years: [7,8,9,10],       color: "#FFFBEB", accent: "#D97706", icon: Landmark },
  { id: "geography",    name: "Geography",      slug: "geography",    years: [7,8,9,10],       color: "#ECFEFF", accent: "#06B6D4", icon: Globe2 },
  { id: "pdhpe",        name: "PDHPE",          slug: "pdhpe",        years: [7,8,9,10],       color: "#FEF2F2", accent: "#EF4444", icon: HeartPulse },
  { id: "commerce",     name: "Commerce",       slug: "commerce",     years: [7,8,9,10],       color: "#F5F3FF", accent: "#7C3AED", icon: DollarSign },
  { id: "technology",   name: "Technology",     slug: "technology",   years: [7,8,9,10],       color: "#F8FAFC", accent: "#475569", icon: Cpu },

  // Years 7-12 (expanded)
  { id: "visual-arts",  name: "Visual Arts",    slug: "visual-arts",  years: [7,8,9,10,11,12], color: "#FFFBEB", accent: "#D97706", icon: Paintbrush },

  // Years 11-12 only (HSC electives)
  { id: "biology",      name: "Biology",        slug: "biology",      years: [11,12],          color: "#F0FDF4", accent: "#22C55E", icon: Dna },
  { id: "physics",      name: "Physics",        slug: "physics",      years: [11,12],          color: "#EFF6FF", accent: "#3B82F6", icon: Atom },
  { id: "chemistry",    name: "Chemistry",      slug: "chemistry",    years: [11,12],          color: "#ECFDF5", accent: "#059669", icon: FlaskConical },
  { id: "design-tech",  name: "Design & Technology", slug: "design-technology", years: [11,12], color: "#F0FDF4", accent: "#22C55E", icon: Ruler },
];

const YEARS = [7, 8, 9, 10, 11, 12];

function getSubjectsForYear(year) {
  return SUBJECTS.filter(s => s.years.includes(year));
}

function findSubjectBySlug(slug) {
  return SUBJECTS.find(s => s.slug === slug);
}

export { SUBJECTS, YEARS, getSubjectsForYear, findSubjectBySlug };
