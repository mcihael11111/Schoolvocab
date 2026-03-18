// ─── CATEGORIES ─────────────────────────────────────────────────────────────
// Categories across Years 7-12 and all subjects.
// Shape: { id, name, domain, year, count, color, accent, icon, description }

import {
  Dna, Bug, HeartPulse, TreeDeciduous,
  MoveRight, Zap, Waves, BatteryCharging, Atom,
  Link, Scale, Hexagon, FlaskConical, Factory,
  LineChart, TrendingUp, Dice5, Triangle, ArrowUpRight,
  BookOpen, Feather, PenTool, Sparkles, Search,
  Landmark, Frame, Layers, Paintbrush,
  Globe2, DollarSign, Cpu, Ruler, MapPin,
  Activity, ShoppingCart, Gavel, Cog, Leaf,
  FileText, MessageSquare, Calculator,
} from "lucide-react";

const CATEGORIES = [
  // ── Biology ──────────────────────────────────────────────────────────────
  {
    id: "heredity",
    name: "Heredity",
    domain: "Biology",
    year: 12,
    count: 18,
    color: "#EFF6FF",
    accent: "#3B82F6",
    icon: Dna,
    description: "Genes, alleles, inheritance patterns, and Mendelian genetics.",
  },
  {
    id: "genetic-change",
    name: "Genetic Change",
    domain: "Biology",
    year: 12,
    count: 15,
    color: "#FDF4FF",
    accent: "#A855F7",
    icon: Dna,
    description: "Mutations, DNA replication, biotechnology, and genetic engineering.",
  },
  {
    id: "infectious-disease",
    name: "Infectious Disease",
    domain: "Biology",
    year: 12,
    count: 16,
    color: "#FEF2F2",
    accent: "#EF4444",
    icon: Bug,
    description: "Pathogens, immune responses, vaccination, and epidemiology.",
  },
  {
    id: "non-infectious-disease",
    name: "Non-infectious Disease & Disorders",
    domain: "Biology",
    year: 12,
    count: 12,
    color: "#FFF7ED",
    accent: "#F97316",
    icon: HeartPulse,
    description: "Cancer, genetic disorders, cardiovascular disease, and preventive medicine.",
  },
  {
    id: "evolution",
    name: "Evolution",
    domain: "Biology",
    year: 12,
    count: 16,
    color: "#F0FDF4",
    accent: "#22C55E",
    icon: TreeDeciduous,
    description: "Natural selection, speciation, genetic drift, and the fossil record.",
  },

  // ── Physics ───────────────────────────────────────────────────────────────
  {
    id: "kinematics",
    name: "Kinematics",
    domain: "Physics",
    year: 12,
    count: 15,
    color: "#EFF6FF",
    accent: "#3B82F6",
    icon: MoveRight,
    description: "Displacement, velocity, acceleration, projectile motion, and equations of motion.",
  },
  {
    id: "dynamics",
    name: "Dynamics",
    domain: "Physics",
    year: 12,
    count: 15,
    color: "#FFFBEB",
    accent: "#F59E0B",
    icon: Zap,
    description: "Forces, Newton's laws, momentum, energy, and conservation principles.",
  },
  {
    id: "waves-thermodynamics",
    name: "Waves & Thermodynamics",
    domain: "Physics",
    year: 12,
    count: 15,
    color: "#ECFEFF",
    accent: "#06B6D4",
    icon: Waves,
    description: "Wave behaviour, sound, electromagnetic spectrum, and heat transfer.",
  },
  {
    id: "electricity-magnetism",
    name: "Electricity & Magnetism",
    domain: "Physics",
    year: 12,
    count: 15,
    color: "#FEFCE8",
    accent: "#EAB308",
    icon: BatteryCharging,
    description: "Electric fields, circuits, electromagnetic induction, and motors.",
  },
  {
    id: "quantum-nuclear",
    name: "Quantum & Nuclear",
    domain: "Physics",
    year: 12,
    count: 15,
    color: "#F5F3FF",
    accent: "#8B5CF6",
    icon: Atom,
    description: "Photons, wave-particle duality, radioactive decay, and nuclear reactions.",
  },

  // ── Chemistry ────────────────────────────────────────────────────────────
  {
    id: "chemical-bonding",
    name: "Chemical Bonding",
    domain: "Chemistry",
    year: 12,
    count: 15,
    color: "#EFF6FF",
    accent: "#2563EB",
    icon: Link,
    description: "Ionic, covalent, and metallic bonds, electronegativity, and molecular structure.",
  },
  {
    id: "equilibrium-acid-base",
    name: "Equilibrium & Acid-Base",
    domain: "Chemistry",
    year: 12,
    count: 15,
    color: "#F0FDF4",
    accent: "#16A34A",
    icon: Scale,
    description: "Chemical equilibrium, Le Chatelier's principle, pH, buffers, and titration.",
  },
  {
    id: "organic-chemistry",
    name: "Organic Chemistry",
    domain: "Chemistry",
    year: 12,
    count: 15,
    color: "#ECFDF5",
    accent: "#059669",
    icon: Hexagon,
    description: "Hydrocarbons, functional groups, reactions, polymers, and isomerism.",
  },
  {
    id: "chemical-monitoring",
    name: "Chemical Monitoring",
    domain: "Chemistry",
    year: 12,
    count: 15,
    color: "#FFF7ED",
    accent: "#EA580C",
    icon: FlaskConical,
    description: "Qualitative and quantitative analysis, spectroscopy, and measurement accuracy.",
  },
  {
    id: "applying-chemistry",
    name: "Applying Chemistry",
    domain: "Chemistry",
    year: 12,
    count: 15,
    color: "#F8FAFC",
    accent: "#475569",
    icon: Factory,
    description: "Electrochemistry, corrosion, industrial processes, and green chemistry.",
  },

  // ── Mathematics ──────────────────────────────────────────────────────────
  {
    id: "functions-graphs",
    name: "Functions & Graphs",
    domain: "Mathematics",
    year: 12,
    count: 15,
    color: "#EFF6FF",
    accent: "#3B82F6",
    icon: LineChart,
    description: "Functions, domains, transformations, and key function families.",
  },
  {
    id: "calculus",
    name: "Calculus",
    domain: "Mathematics",
    year: 12,
    count: 15,
    color: "#FEF2F2",
    accent: "#DC2626",
    icon: TrendingUp,
    description: "Derivatives, integration, rates of change, and the fundamental theorem.",
  },
  {
    id: "probability-statistics",
    name: "Probability & Statistics",
    domain: "Mathematics",
    year: 12,
    count: 15,
    color: "#F5F3FF",
    accent: "#7C3AED",
    icon: Dice5,
    description: "Probability distributions, random variables, hypothesis testing, and regression.",
  },
  {
    id: "trigonometry",
    name: "Trigonometry",
    domain: "Mathematics",
    year: 12,
    count: 15,
    color: "#FFF7ED",
    accent: "#EA580C",
    icon: Triangle,
    description: "Trigonometric functions, identities, the unit circle, and periodic motion.",
  },
  {
    id: "proof-vectors",
    name: "Proof & Vectors",
    domain: "Mathematics",
    year: 12,
    count: 15,
    color: "#F0FDFA",
    accent: "#0D9488",
    icon: ArrowUpRight,
    description: "Mathematical proof techniques, vector operations, and parametric equations.",
  },

  // ── English ───────────────────────────────────────────────────────────────
  {
    id: "textual-concepts",
    name: "Textual Concepts",
    domain: "English",
    year: 12,
    count: 15,
    color: "#EEF2FF",
    accent: "#4F46E5",
    icon: BookOpen,
    description: "Theme, tone, voice, genre, context, and the elements of textual meaning.",
  },
  {
    id: "narrative-poetry",
    name: "Narrative & Poetry",
    domain: "English",
    year: 12,
    count: 15,
    color: "#FFF1F2",
    accent: "#E11D48",
    icon: Feather,
    description: "Narrative structure, character, conflict, poetic forms, and verse techniques.",
  },
  {
    id: "essay-composition",
    name: "Essay & Composition",
    domain: "English",
    year: 12,
    count: 15,
    color: "#FFFBEB",
    accent: "#D97706",
    icon: PenTool,
    description: "Thesis, argument, evidence, paragraph structure, and analytical writing.",
  },
  {
    id: "language-techniques",
    name: "Language Techniques",
    domain: "English",
    year: 12,
    count: 15,
    color: "#F5F3FF",
    accent: "#7C3AED",
    icon: Sparkles,
    description: "Figurative language, rhetorical devices, and literary techniques.",
  },
  {
    id: "critical-analysis",
    name: "Critical Analysis",
    domain: "English",
    year: 12,
    count: 15,
    color: "#F8FAFC",
    accent: "#475569",
    icon: Search,
    description: "Critical frameworks, intertextuality, deconstruction, and cultural readings.",
  },

  // ── Visual Arts ───────────────────────────────────────────────────────────
  {
    id: "art-criticism-history",
    name: "Art Criticism & History",
    domain: "Visual Arts",
    year: 12,
    count: 15,
    color: "#FFFBEB",
    accent: "#D97706",
    icon: Landmark,
    description: "Art movements, modernism, postmodernism, curation, and art history.",
  },
  {
    id: "conceptual-framework",
    name: "Conceptual Framework",
    domain: "Visual Arts",
    year: 12,
    count: 15,
    color: "#EFF6FF",
    accent: "#2563EB",
    icon: Frame,
    description: "Artist, artwork, world, audience — the four frames of meaning-making.",
  },
  {
    id: "structural-frame",
    name: "Structural Frame",
    domain: "Visual Arts",
    year: 12,
    count: 15,
    color: "#F0FDF4",
    accent: "#16A34A",
    icon: Layers,
    description: "Composition, colour theory, form, line, space, and the formal elements.",
  },
  {
    id: "art-making",
    name: "Art Making",
    domain: "Visual Arts",
    year: 12,
    count: 15,
    color: "#FFF1F2",
    accent: "#E11D48",
    icon: Paintbrush,
    description: "Media, processes, studio practice, Body of Work, and material exploration.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // YEAR 11 — Preliminary HSC (same 6 subjects, different modules)
  // ═══════════════════════════════════════════════════════════════════════════

  // ── Year 11 Biology ─────────────────────────────────────────────────────
  { id: "y11-cells", name: "Cells as the Basis of Life", domain: "Biology", year: 11, count: 15, color: "#F0FDF4", accent: "#22C55E", icon: Dna, description: "Cell structure, organelles, membrane transport, and cell processes." },
  { id: "y11-organisation", name: "Organisation of Living Things", domain: "Biology", year: 11, count: 15, color: "#EFF6FF", accent: "#3B82F6", icon: TreeDeciduous, description: "Levels of organisation, nutrient and gas requirements, and transport systems." },
  { id: "y11-bio-diversity", name: "Biological Diversity", domain: "Biology", year: 11, count: 15, color: "#FDF4FF", accent: "#A855F7", icon: Leaf, description: "Classification, binomial nomenclature, phylogenetics, and biodiversity." },
  { id: "y11-ecosystem-dynamics", name: "Ecosystem Dynamics", domain: "Biology", year: 11, count: 15, color: "#FFFBEB", accent: "#D97706", icon: Globe2, description: "Ecosystems, food webs, population dynamics, and human impact." },

  // ── Year 11 Physics ─────────────────────────────────────────────────────
  { id: "y11-kinematics", name: "Kinematics", domain: "Physics", year: 11, count: 15, color: "#EFF6FF", accent: "#3B82F6", icon: MoveRight, description: "Scalars, vectors, displacement, velocity, acceleration, and graphical analysis." },
  { id: "y11-dynamics", name: "Dynamics", domain: "Physics", year: 11, count: 15, color: "#FFFBEB", accent: "#F59E0B", icon: Zap, description: "Newton's laws, friction, inclined planes, and equilibrium." },
  { id: "y11-waves-thermo", name: "Waves & Thermodynamics", domain: "Physics", year: 11, count: 15, color: "#ECFEFF", accent: "#06B6D4", icon: Waves, description: "Wave properties, sound, light, reflection, refraction, and heat." },
  { id: "y11-electricity", name: "Electricity & Magnetism", domain: "Physics", year: 11, count: 15, color: "#FEFCE8", accent: "#EAB308", icon: BatteryCharging, description: "Charge, electric fields, circuits, resistance, and magnetism." },

  // ── Year 11 Chemistry ───────────────────────────────────────────────────
  { id: "y11-properties-matter", name: "Properties of Matter", domain: "Chemistry", year: 11, count: 15, color: "#EFF6FF", accent: "#2563EB", icon: Atom, description: "Atomic structure, periodic table, electron configuration, and isotopes." },
  { id: "y11-quantitative", name: "Quantitative Chemistry", domain: "Chemistry", year: 11, count: 15, color: "#F0FDF4", accent: "#16A34A", icon: Scale, description: "The mole concept, stoichiometry, gas laws, and concentration." },
  { id: "y11-reactive-chem", name: "Reactive Chemistry", domain: "Chemistry", year: 11, count: 15, color: "#FEF2F2", accent: "#EF4444", icon: FlaskConical, description: "Types of reactions, oxidation-reduction, and reaction rates." },
  { id: "y11-drivers-reactions", name: "Drivers of Reactions", domain: "Chemistry", year: 11, count: 15, color: "#ECFDF5", accent: "#059669", icon: TrendingUp, description: "Enthalpy, entropy, Gibbs free energy, and Hess's law." },

  // ── Year 11 Mathematics ─────────────────────────────────────────────────
  { id: "y11-functions", name: "Functions", domain: "Mathematics", year: 11, count: 15, color: "#EFF6FF", accent: "#3B82F6", icon: LineChart, description: "Linear, quadratic, and cubic functions, transformations, and modelling." },
  { id: "y11-trig", name: "Trigonometric Functions", domain: "Mathematics", year: 11, count: 15, color: "#FFF7ED", accent: "#EA580C", icon: Triangle, description: "Trigonometric ratios, the unit circle, graphs, and identities." },
  { id: "y11-calculus", name: "Introduction to Calculus", domain: "Mathematics", year: 11, count: 15, color: "#FEF2F2", accent: "#DC2626", icon: TrendingUp, description: "Limits, differentiation from first principles, and basic derivative rules." },
  { id: "y11-exponentials", name: "Exponentials & Logarithms", domain: "Mathematics", year: 11, count: 15, color: "#F5F3FF", accent: "#7C3AED", icon: ArrowUpRight, description: "Exponential growth/decay, logarithmic functions, and applications." },
  { id: "y11-stats", name: "Statistical Analysis", domain: "Mathematics", year: 11, count: 15, color: "#F0FDFA", accent: "#0D9488", icon: Dice5, description: "Data collection, measures of spread, normal distribution, and bivariate data." },

  // ── Year 11 English ─────────────────────────────────────────────────────
  { id: "y11-reading-texts", name: "Reading Texts", domain: "English", year: 11, count: 15, color: "#EEF2FF", accent: "#4F46E5", icon: BookOpen, description: "Close reading, annotation, narrative voice, and textual features." },
  { id: "y11-crafting-texts", name: "Crafting Texts", domain: "English", year: 11, count: 15, color: "#FFFBEB", accent: "#D97706", icon: PenTool, description: "Creative writing, composition, voice, style, and editing." },
  { id: "y11-lit-techniques", name: "Literary Techniques", domain: "English", year: 11, count: 15, color: "#F5F3FF", accent: "#7C3AED", icon: Sparkles, description: "Figurative language, imagery, symbolism, and rhetorical devices." },
  { id: "y11-analytical-writing", name: "Analytical Writing", domain: "English", year: 11, count: 15, color: "#FFF1F2", accent: "#E11D48", icon: FileText, description: "Essay structure, thesis development, evidence integration, and argument." },

  // ── Year 11 Visual Arts ─────────────────────────────────────────────────
  { id: "y11-artmaking", name: "Art Making", domain: "Visual Arts", year: 11, count: 15, color: "#FFF1F2", accent: "#E11D48", icon: Paintbrush, description: "Materials, techniques, studio practice, and experimentation." },
  { id: "y11-art-study", name: "Art Criticism & History", domain: "Visual Arts", year: 11, count: 15, color: "#FFFBEB", accent: "#D97706", icon: Landmark, description: "Art movements, critical analysis, and the frames of interpretation." },
  { id: "y11-conceptual", name: "Conceptual Framework", domain: "Visual Arts", year: 11, count: 15, color: "#EFF6FF", accent: "#2563EB", icon: Frame, description: "Artist, artwork, world, audience — meaning-making in art." },

  // ═══════════════════════════════════════════════════════════════════════════
  // YEARS 7-10 — Core subjects
  // ═══════════════════════════════════════════════════════════════════════════

  // ── English (Years 7-10) ────────────────────────────────────────────────
  ...[7,8,9,10].flatMap(y => [
    { id: `y${y}-reading`, name: "Reading & Comprehension", domain: "English", year: y, count: 12, color: "#EEF2FF", accent: "#4F46E5", icon: BookOpen, description: `Year ${y} reading strategies, comprehension skills, and textual analysis.` },
    { id: `y${y}-writing`, name: "Writing & Composition", domain: "English", year: y, count: 12, color: "#FFFBEB", accent: "#D97706", icon: PenTool, description: `Year ${y} writing forms, paragraph structure, persuasion, and narrative craft.` },
    { id: `y${y}-lang-features`, name: "Language Features", domain: "English", year: y, count: 12, color: "#F5F3FF", accent: "#7C3AED", icon: Sparkles, description: `Year ${y} literary and language techniques, figurative language, and rhetorical devices.` },
  ]),

  // ── Mathematics (Years 7-10) ────────────────────────────────────────────
  ...[7,8,9,10].flatMap(y => [
    { id: `y${y}-number-algebra`, name: "Number & Algebra", domain: "Mathematics", year: y, count: 12, color: "#EFF6FF", accent: "#3B82F6", icon: Calculator, description: `Year ${y} number operations, algebraic expressions, equations, and patterns.` },
    { id: `y${y}-measurement`, name: "Measurement & Geometry", domain: "Mathematics", year: y, count: 12, color: "#FFF7ED", accent: "#EA580C", icon: Ruler, description: `Year ${y} units, area, volume, angles, shapes, and geometric reasoning.` },
    { id: `y${y}-stats-prob`, name: "Statistics & Probability", domain: "Mathematics", year: y, count: 12, color: "#F5F3FF", accent: "#7C3AED", icon: Dice5, description: `Year ${y} data representation, chance, measures of centre, and probability.` },
  ]),

  // ── Science (Years 7-10) ────────────────────────────────────────────────
  ...[7,8,9,10].flatMap(y => [
    { id: `y${y}-bio-science`, name: "Biological Sciences", domain: "Science", year: y, count: 12, color: "#F0FDF4", accent: "#22C55E", icon: Leaf, description: `Year ${y} living things, cells, body systems, ecosystems, and genetics.` },
    { id: `y${y}-chem-phys`, name: "Chemical & Physical Sciences", domain: "Science", year: y, count: 12, color: "#ECFEFF", accent: "#06B6D4", icon: FlaskConical, description: `Year ${y} matter, energy, forces, chemical reactions, and the periodic table.` },
    { id: `y${y}-earth-space`, name: "Earth & Space Sciences", domain: "Science", year: y, count: 12, color: "#FEFCE8", accent: "#EAB308", icon: Globe2, description: `Year ${y} geology, the solar system, climate, natural resources, and plate tectonics.` },
  ]),

  // ── History (Years 7-10) ────────────────────────────────────────────────
  ...[7,8,9,10].flatMap(y => [
    { id: `y${y}-historical-knowledge`, name: "Historical Knowledge", domain: "History", year: y, count: 12, color: "#FFFBEB", accent: "#D97706", icon: Landmark, description: `Year ${y} key events, people, societies, and turning points in history.` },
    { id: `y${y}-historical-skills`, name: "Historical Skills", domain: "History", year: y, count: 12, color: "#F8FAFC", accent: "#475569", icon: Search, description: `Year ${y} source analysis, chronology, cause and effect, and historical inquiry.` },
  ]),

  // ── Geography (Years 7-10) ──────────────────────────────────────────────
  ...[7,8,9,10].flatMap(y => [
    { id: `y${y}-geo-knowledge`, name: "Geographical Knowledge", domain: "Geography", year: y, count: 12, color: "#ECFEFF", accent: "#06B6D4", icon: Globe2, description: `Year ${y} landscapes, environments, sustainability, and human geography.` },
    { id: `y${y}-geo-skills`, name: "Geographical Skills", domain: "Geography", year: y, count: 12, color: "#F0FDFA", accent: "#0D9488", icon: MapPin, description: `Year ${y} maps, fieldwork, spatial data, and geographical inquiry.` },
  ]),

  // ── PDHPE (Years 7-10) ──────────────────────────────────────────────────
  ...[7,8,9,10].flatMap(y => [
    { id: `y${y}-health`, name: "Health & Wellbeing", domain: "PDHPE", year: y, count: 12, color: "#FEF2F2", accent: "#EF4444", icon: HeartPulse, description: `Year ${y} mental health, nutrition, relationships, and personal safety.` },
    { id: `y${y}-movement`, name: "Movement & Physical Activity", domain: "PDHPE", year: y, count: 12, color: "#FFF7ED", accent: "#F97316", icon: Activity, description: `Year ${y} fitness, body systems in movement, and sports science.` },
  ]),

  // ── Commerce (Years 7-10) ───────────────────────────────────────────────
  ...[7,8,9,10].flatMap(y => [
    { id: `y${y}-financial`, name: "Consumer & Financial Literacy", domain: "Commerce", year: y, count: 12, color: "#F5F3FF", accent: "#7C3AED", icon: ShoppingCart, description: `Year ${y} budgeting, consumer rights, banking, insurance, and financial decisions.` },
    { id: `y${y}-law-society`, name: "Law & Society", domain: "Commerce", year: y, count: 12, color: "#F8FAFC", accent: "#475569", icon: Gavel, description: `Year ${y} legal system, rights and responsibilities, employment law, and contracts.` },
  ]),

  // ── Technology (Years 7-10) ─────────────────────────────────────────────
  ...[7,8,9,10].flatMap(y => [
    { id: `y${y}-design-production`, name: "Design & Production", domain: "Technology", year: y, count: 12, color: "#F8FAFC", accent: "#475569", icon: Cog, description: `Year ${y} design process, materials, tools, and project management.` },
    { id: `y${y}-digital-tech`, name: "Digital Technologies", domain: "Technology", year: y, count: 12, color: "#EFF6FF", accent: "#3B82F6", icon: Cpu, description: `Year ${y} computational thinking, coding, data, and digital systems.` },
  ]),
];

export { CATEGORIES };
