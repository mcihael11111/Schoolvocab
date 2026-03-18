// ─── CATEGORIES ─────────────────────────────────────────────────────────────
// NESA syllabus-aligned categories across Years 7-12.
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
  Eye, Beaker, Microscope, Sun, Thermometer,
  Shield, Users, Brain, Hammer, Utensils,
  Building, Vote, Briefcase, Wallet, TrendingDown,
  Palette, Camera, Music2, Boxes, Telescope,
} from "lucide-react";

const CATEGORIES = [

  // ═══════════════════════════════════════════════════════════════════════════
  // YEAR 12 — HSC (NESA Module-aligned)
  // ═══════════════════════════════════════════════════════════════════════════

  // ── Year 12 Biology (Modules 5-8) ──────────────────────────────────────
  { id: "y12-heredity", name: "Heredity", domain: "Biology", year: 12, count: 15, color: "#EFF6FF", accent: "#3B82F6", icon: Dna, description: "DNA, genes, alleles, inheritance patterns, and Mendelian genetics." },
  { id: "y12-genetic-change", name: "Genetic Change", domain: "Biology", year: 12, count: 15, color: "#FDF4FF", accent: "#A855F7", icon: Dna, description: "Mutations, biotechnology, genetic engineering, and molecular evolution." },
  { id: "y12-infectious-disease", name: "Infectious Disease", domain: "Biology", year: 12, count: 15, color: "#FEF2F2", accent: "#EF4444", icon: Bug, description: "Pathogens, immune responses, vaccination, and epidemiology." },
  { id: "y12-non-infectious", name: "Non-infectious Disease", domain: "Biology", year: 12, count: 15, color: "#FFF7ED", accent: "#F97316", icon: HeartPulse, description: "Cancer, genetic disorders, cardiovascular disease, and preventive medicine." },

  // ── Year 12 Physics (Modules 5-8) ──────────────────────────────────────
  { id: "y12-adv-mechanics", name: "Advanced Mechanics", domain: "Physics", year: 12, count: 15, color: "#EFF6FF", accent: "#3B82F6", icon: MoveRight, description: "Projectile motion, circular motion, gravitation, and orbital mechanics." },
  { id: "y12-electromagnetism", name: "Electromagnetism", domain: "Physics", year: 12, count: 15, color: "#FEFCE8", accent: "#EAB308", icon: BatteryCharging, description: "Electromagnetic induction, motors, generators, and transformers." },
  { id: "y12-nature-of-light", name: "The Nature of Light", domain: "Physics", year: 12, count: 15, color: "#ECFEFF", accent: "#06B6D4", icon: Sun, description: "EMR spectrum, wave-particle duality, photoelectric effect, and spectra." },
  { id: "y12-origins-universe", name: "From the Universe to the Atom", domain: "Physics", year: 12, count: 15, color: "#F5F3FF", accent: "#8B5CF6", icon: Atom, description: "Nuclear physics, standard model, radioactivity, and mass-energy equivalence." },

  // ── Year 12 Chemistry (Modules 5-8) ────────────────────────────────────
  { id: "y12-equilibrium", name: "Equilibrium & Acid Reactions", domain: "Chemistry", year: 12, count: 15, color: "#F0FDF4", accent: "#16A34A", icon: Scale, description: "Chemical equilibrium, Le Chatelier's principle, pH, buffers, and titration." },
  { id: "y12-acid-base", name: "Acid-Base Reactions", domain: "Chemistry", year: 12, count: 15, color: "#EFF6FF", accent: "#2563EB", icon: Beaker, description: "Brønsted-Lowry theory, pH, indicators, titration curves, and buffers." },
  { id: "y12-organic-chem", name: "Organic Chemistry", domain: "Chemistry", year: 12, count: 15, color: "#ECFDF5", accent: "#059669", icon: Hexagon, description: "Hydrocarbons, functional groups, reactions, polymers, and isomerism." },
  { id: "y12-applying-chem", name: "Applying Chemical Ideas", domain: "Chemistry", year: 12, count: 15, color: "#F8FAFC", accent: "#475569", icon: FlaskConical, description: "Electrochemistry, galvanic cells, electrolysis, and analytical techniques." },

  // ── Year 12 Mathematics (Advanced) ─────────────────────────────────────
  { id: "y12-functions", name: "Functions", domain: "Mathematics", year: 12, count: 15, color: "#EFF6FF", accent: "#3B82F6", icon: LineChart, description: "Polynomials, exponentials, logarithms, and composite functions." },
  { id: "y12-differentiation", name: "Calculus: Differentiation", domain: "Mathematics", year: 12, count: 15, color: "#FEF2F2", accent: "#DC2626", icon: TrendingUp, description: "Derivatives, chain rule, applications, optimisation, and related rates." },
  { id: "y12-integration", name: "Calculus: Integration", domain: "Mathematics", year: 12, count: 15, color: "#F5F3FF", accent: "#7C3AED", icon: ArrowUpRight, description: "Integrals, fundamental theorem, area, volume, and trapezoidal rule." },
  { id: "y12-trig-functions", name: "Trigonometric Functions", domain: "Mathematics", year: 12, count: 15, color: "#FFF7ED", accent: "#EA580C", icon: Triangle, description: "Trig identities, equations, graphs, inverse trig, and applications." },
  { id: "y12-stats-prob", name: "Statistics & Probability", domain: "Mathematics", year: 12, count: 15, color: "#F0FDFA", accent: "#0D9488", icon: Dice5, description: "Distributions, normal distribution, hypothesis testing, and bivariate data." },

  // ── Year 12 English (Advanced) ─────────────────────────────────────────
  { id: "y12-textual-analysis", name: "Textual Analysis", domain: "English", year: 12, count: 15, color: "#EEF2FF", accent: "#4F46E5", icon: BookOpen, description: "Close reading, representation, theme, context, and critical perspectives." },
  { id: "y12-essay-writing", name: "Essay Writing", domain: "English", year: 12, count: 15, color: "#FFFBEB", accent: "#D97706", icon: PenTool, description: "Thesis, argument, evidence integration, analytical structure, and cohesion." },
  { id: "y12-literary-techniques", name: "Literary Techniques", domain: "English", year: 12, count: 15, color: "#F5F3FF", accent: "#7C3AED", icon: Sparkles, description: "Figurative language, rhetorical devices, narrative techniques, and form." },
  { id: "y12-creative-writing", name: "Creative Writing", domain: "English", year: 12, count: 15, color: "#FFF1F2", accent: "#E11D48", icon: Feather, description: "Voice, style, imaginative composition, and craft of writing." },
  { id: "y12-comparative", name: "Comparative & Critical", domain: "English", year: 12, count: 15, color: "#F8FAFC", accent: "#475569", icon: Search, description: "Comparative analysis, critical frameworks, intertextuality, and readings." },

  // ── Year 12 Visual Arts ────────────────────────────────────────────────
  { id: "y12-four-frames", name: "The Four Frames", domain: "Visual Arts", year: 12, count: 15, color: "#EFF6FF", accent: "#2563EB", icon: Frame, description: "Subjective, cultural, structural, and postmodern frames of analysis." },
  { id: "y12-art-history", name: "Art Movements & History", domain: "Visual Arts", year: 12, count: 15, color: "#FFFBEB", accent: "#D97706", icon: Landmark, description: "Modernism, postmodernism, contemporary art, and historical context." },
  { id: "y12-art-making", name: "Art Making & Practice", domain: "Visual Arts", year: 12, count: 15, color: "#FFF1F2", accent: "#E11D48", icon: Paintbrush, description: "Media, techniques, Body of Work, studio practice, and material exploration." },
  { id: "y12-art-criticism", name: "Art Criticism & Writing", domain: "Visual Arts", year: 12, count: 15, color: "#F0FDF4", accent: "#16A34A", icon: FileText, description: "Critical writing, case studies, gallery analysis, and exhibition review." },

  // ═══════════════════════════════════════════════════════════════════════════
  // YEAR 11 — Preliminary HSC (NESA Module-aligned)
  // ═══════════════════════════════════════════════════════════════════════════

  // ── Year 11 Biology ────────────────────────────────────────────────────
  { id: "y11-cells", name: "Cells as the Basis of Life", domain: "Biology", year: 11, count: 15, color: "#F0FDF4", accent: "#22C55E", icon: Microscope, description: "Cell structure, organelles, membrane transport, and cell processes." },
  { id: "y11-organisation", name: "Organisation of Living Things", domain: "Biology", year: 11, count: 15, color: "#EFF6FF", accent: "#3B82F6", icon: TreeDeciduous, description: "Levels of organisation, nutrient and gas requirements, and transport systems." },
  { id: "y11-bio-diversity", name: "Biological Diversity", domain: "Biology", year: 11, count: 15, color: "#FDF4FF", accent: "#A855F7", icon: Leaf, description: "Classification, binomial nomenclature, phylogenetics, and biodiversity." },
  { id: "y11-ecosystem", name: "Ecosystem Dynamics", domain: "Biology", year: 11, count: 15, color: "#FFFBEB", accent: "#D97706", icon: Globe2, description: "Ecosystems, food webs, population dynamics, and human impact." },

  // ── Year 11 Physics ────────────────────────────────────────────────────
  { id: "y11-kinematics", name: "Kinematics", domain: "Physics", year: 11, count: 15, color: "#EFF6FF", accent: "#3B82F6", icon: MoveRight, description: "Scalars, vectors, displacement, velocity, acceleration, and graphical analysis." },
  { id: "y11-dynamics", name: "Dynamics", domain: "Physics", year: 11, count: 15, color: "#FFFBEB", accent: "#F59E0B", icon: Zap, description: "Newton's laws, friction, inclined planes, momentum, and equilibrium." },
  { id: "y11-waves-thermo", name: "Waves & Thermodynamics", domain: "Physics", year: 11, count: 15, color: "#ECFEFF", accent: "#06B6D4", icon: Waves, description: "Wave properties, sound, light, reflection, refraction, and heat." },
  { id: "y11-electricity", name: "Electricity & Magnetism", domain: "Physics", year: 11, count: 15, color: "#FEFCE8", accent: "#EAB308", icon: BatteryCharging, description: "Charge, electric fields, circuits, resistance, and magnetism." },

  // ── Year 11 Chemistry ──────────────────────────────────────────────────
  { id: "y11-matter", name: "Properties of Matter", domain: "Chemistry", year: 11, count: 15, color: "#EFF6FF", accent: "#2563EB", icon: Atom, description: "Atomic structure, periodic table, electron configuration, and isotopes." },
  { id: "y11-quantitative", name: "Quantitative Chemistry", domain: "Chemistry", year: 11, count: 15, color: "#F0FDF4", accent: "#16A34A", icon: Scale, description: "The mole concept, stoichiometry, gas laws, and concentration." },
  { id: "y11-reactive", name: "Reactive Chemistry", domain: "Chemistry", year: 11, count: 15, color: "#FEF2F2", accent: "#EF4444", icon: FlaskConical, description: "Reaction types, oxidation-reduction, activity series, and electrochemistry." },
  { id: "y11-drivers", name: "Drivers of Reactions", domain: "Chemistry", year: 11, count: 15, color: "#ECFDF5", accent: "#059669", icon: TrendingUp, description: "Enthalpy, entropy, Gibbs free energy, collision theory, and equilibrium." },

  // ── Year 11 Mathematics ────────────────────────────────────────────────
  { id: "y11-functions", name: "Functions", domain: "Mathematics", year: 11, count: 15, color: "#EFF6FF", accent: "#3B82F6", icon: LineChart, description: "Linear, quadratic, cubic functions, transformations, and modelling." },
  { id: "y11-trig", name: "Trigonometric Functions", domain: "Mathematics", year: 11, count: 15, color: "#FFF7ED", accent: "#EA580C", icon: Triangle, description: "Unit circle, radian measure, trig graphs, identities, and exact values." },
  { id: "y11-intro-calculus", name: "Introduction to Calculus", domain: "Mathematics", year: 11, count: 15, color: "#FEF2F2", accent: "#DC2626", icon: TrendingUp, description: "Limits, first principles, derivative rules, and stationary points." },
  { id: "y11-exponentials", name: "Exponentials & Logarithms", domain: "Mathematics", year: 11, count: 15, color: "#F5F3FF", accent: "#7C3AED", icon: ArrowUpRight, description: "Exponential growth/decay, logarithmic functions, and applications." },
  { id: "y11-stats", name: "Statistical Analysis", domain: "Mathematics", year: 11, count: 15, color: "#F0FDFA", accent: "#0D9488", icon: Dice5, description: "Data collection, normal distribution, z-scores, and bivariate data." },

  // ── Year 11 English ────────────────────────────────────────────────────
  { id: "y11-reading", name: "Reading Texts", domain: "English", year: 11, count: 15, color: "#EEF2FF", accent: "#4F46E5", icon: BookOpen, description: "Close reading, annotation, narrative perspective, and textual features." },
  { id: "y11-crafting", name: "Crafting Texts", domain: "English", year: 11, count: 15, color: "#FFFBEB", accent: "#D97706", icon: PenTool, description: "Creative writing, voice, style, sensory detail, and composition." },
  { id: "y11-lit-techniques", name: "Literary Techniques", domain: "English", year: 11, count: 15, color: "#F5F3FF", accent: "#7C3AED", icon: Sparkles, description: "Figurative language, imagery, symbolism, and rhetorical devices." },
  { id: "y11-analytical", name: "Analytical Writing", domain: "English", year: 11, count: 15, color: "#FFF1F2", accent: "#E11D48", icon: FileText, description: "Essay structure, thesis, evidence integration, and sustained argument." },

  // ── Year 11 Visual Arts ────────────────────────────────────────────────
  { id: "y11-artmaking", name: "Art Making", domain: "Visual Arts", year: 11, count: 15, color: "#FFF1F2", accent: "#E11D48", icon: Paintbrush, description: "Materials, techniques, studio practice, and experimentation." },
  { id: "y11-art-study", name: "Art Criticism & History", domain: "Visual Arts", year: 11, count: 15, color: "#FFFBEB", accent: "#D97706", icon: Landmark, description: "Art movements, critical analysis, and the frames of interpretation." },
  { id: "y11-conceptual", name: "Conceptual Framework", domain: "Visual Arts", year: 11, count: 15, color: "#EFF6FF", accent: "#2563EB", icon: Frame, description: "Artist, artwork, world, audience — meaning-making in art." },

  // ═══════════════════════════════════════════════════════════════════════════
  // YEARS 7-10 — NESA Stage 4-5 (topic-aligned per stage)
  // ═══════════════════════════════════════════════════════════════════════════

  // ── English (Years 7-10, by curriculum unit) ────────────────────────────
  { id: "y7-poetry-verse", name: "Poetry and Verse", domain: "English", year: 7, count: 12, color: "#EEF2FF", accent: "#4F46E5", icon: Feather, description: "Poetic forms, rhyme, rhythm, imagery, and verse techniques." },
  { id: "y7-narrative", name: "Narrative and Story", domain: "English", year: 7, count: 12, color: "#FFFBEB", accent: "#D97706", icon: BookOpen, description: "Plot, setting, character, conflict, and narrative structure." },
  { id: "y7-lang-features", name: "Language Features", domain: "English", year: 7, count: 12, color: "#F5F3FF", accent: "#7C3AED", icon: Sparkles, description: "Simile, metaphor, alliteration, personification, and figurative language." },
  { id: "y8-drama", name: "Drama and Performance", domain: "English", year: 8, count: 12, color: "#FFF1F2", accent: "#E11D48", icon: Users, description: "Shakespeare, dramatic techniques, dialogue, stage directions, and soliloquy." },
  { id: "y8-media-persuasion", name: "Media and Persuasion", domain: "English", year: 8, count: 12, color: "#FEF2F2", accent: "#EF4444", icon: MessageSquare, description: "Advertising, propaganda, bias, media techniques, and persuasive devices." },
  { id: "y8-lang-features", name: "Language Features", domain: "English", year: 8, count: 12, color: "#F5F3FF", accent: "#7C3AED", icon: Sparkles, description: "Symbolism, irony, juxtaposition, oxymoron, and advanced figurative language." },
  { id: "y9-aus-literature", name: "Australian Literature", domain: "English", year: 9, count: 12, color: "#F0FDF4", accent: "#22C55E", icon: BookOpen, description: "Indigenous perspectives, national identity, Australian voices, and belonging." },
  { id: "y9-classic-lit", name: "Classic Literature", domain: "English", year: 9, count: 12, color: "#FFFBEB", accent: "#D97706", icon: BookOpen, description: "Extended novels, historical context, intertextuality, and critical reading." },
  { id: "y9-lang-features", name: "Language Features", domain: "English", year: 9, count: 12, color: "#F5F3FF", accent: "#7C3AED", icon: Sparkles, description: "Allegory, paradox, anaphora, dramatic irony, and rhetorical techniques." },
  { id: "y10-text-analysis", name: "Textual Analysis and Argument", domain: "English", year: 10, count: 12, color: "#EEF2FF", accent: "#4F46E5", icon: Search, description: "Critical essay, comparative analysis, evaluative thesis, and close reading." },
  { id: "y10-contemporary", name: "Contemporary Literature", domain: "English", year: 10, count: 12, color: "#FFF1F2", accent: "#E11D48", icon: BookOpen, description: "Modern contexts, diverse voices, postmodernism, and representation." },
  { id: "y10-lang-features", name: "Language Features", domain: "English", year: 10, count: 12, color: "#F5F3FF", accent: "#7C3AED", icon: Sparkles, description: "Chiasmus, enjambment, volta, metafiction, and HSC-bridging techniques." },

  // ── Mathematics (Years 7-10, by strand) ─────────────────────────────────
  ...[7,8,9,10].flatMap(y => [
    { id: `y${y}-number-algebra`, name: "Number & Algebra", domain: "Mathematics", year: y, count: 12, color: "#EFF6FF", accent: "#3B82F6", icon: Calculator, description: `Year ${y} number operations, algebraic expressions, equations, and patterns.` },
    { id: `y${y}-measurement-geo`, name: "Measurement & Geometry", domain: "Mathematics", year: y, count: 12, color: "#FFF7ED", accent: "#EA580C", icon: Ruler, description: `Year ${y} units, area, volume, angles, shapes, and geometric reasoning.` },
    { id: `y${y}-stats-prob`, name: "Statistics & Probability", domain: "Mathematics", year: y, count: 12, color: "#F5F3FF", accent: "#7C3AED", icon: Dice5, description: `Year ${y} data representation, chance, measures of centre, and probability.` },
  ]),

  // ── Science (Years 7-10, by NESA focus area) ────────────────────────────
  // Stage 4 (Years 7-8)
  { id: "y7-observing-universe", name: "Observing the Universe", domain: "Science", year: 7, count: 12, color: "#F5F3FF", accent: "#8B5CF6", icon: Telescope, description: "Solar system, stars, galaxies, light, and space exploration." },
  { id: "y7-forces", name: "Forces", domain: "Science", year: 7, count: 12, color: "#EFF6FF", accent: "#3B82F6", icon: Zap, description: "Contact and non-contact forces, gravity, friction, and simple machines." },
  { id: "y7-cells-classification", name: "Cells and Classification", domain: "Science", year: 7, count: 12, color: "#F0FDF4", accent: "#22C55E", icon: Microscope, description: "Cell structure, microscopy, kingdoms of life, and organism classification." },
  { id: "y8-solutions-mixtures", name: "Solutions and Mixtures", domain: "Science", year: 8, count: 12, color: "#ECFEFF", accent: "#06B6D4", icon: FlaskConical, description: "Dissolving, separation techniques, solubility, and pure substances." },
  { id: "y8-living-systems", name: "Living Systems", domain: "Science", year: 8, count: 12, color: "#F0FDF4", accent: "#22C55E", icon: Leaf, description: "Body systems, digestion, circulation, respiration, and multicellular organisms." },
  { id: "y8-periodic-table", name: "Periodic Table & Atoms", domain: "Science", year: 8, count: 12, color: "#FEFCE8", accent: "#EAB308", icon: Atom, description: "Elements, compounds, atomic structure, chemical symbols, and periodicity." },
  // Stage 5 (Years 9-10)
  { id: "y9-energy", name: "Energy", domain: "Science", year: 9, count: 12, color: "#FFF7ED", accent: "#EA580C", icon: Zap, description: "Energy forms, transfer, transformation, conservation, and efficiency." },
  { id: "y9-disease", name: "Disease", domain: "Science", year: 9, count: 12, color: "#FEF2F2", accent: "#EF4444", icon: Bug, description: "Pathogens, immune system, vaccination, antibiotics, and epidemiology." },
  { id: "y9-chemical-reactions", name: "Chemical Reactions", domain: "Science", year: 9, count: 12, color: "#ECFDF5", accent: "#059669", icon: FlaskConical, description: "Reaction types, balancing equations, conservation of mass, and rates." },
  { id: "y10-genetics", name: "Genetics & Evolution", domain: "Science", year: 10, count: 12, color: "#FDF4FF", accent: "#A855F7", icon: Dna, description: "DNA, genes, inheritance, natural selection, speciation, and biotechnology." },
  { id: "y10-motion-waves", name: "Waves and Motion", domain: "Science", year: 10, count: 12, color: "#EFF6FF", accent: "#3B82F6", icon: Waves, description: "Speed, acceleration, Newton's laws, wave properties, and the EM spectrum." },
  { id: "y10-sustainability", name: "Environmental Sustainability", domain: "Science", year: 10, count: 12, color: "#F0FDF4", accent: "#22C55E", icon: Globe2, description: "Climate change, carbon cycle, biodiversity, conservation, and human impact." },

  // ── History (Years 7-10, by NESA depth study) ───────────────────────────
  { id: "y7-ancient-past", name: "The Ancient Past", domain: "History", year: 7, count: 12, color: "#FFFBEB", accent: "#D97706", icon: Landmark, description: "Ancient Egypt, Greece, Rome, China — civilisations and their legacies." },
  { id: "y7-historical-skills", name: "Historical Skills", domain: "History", year: 7, count: 12, color: "#F8FAFC", accent: "#475569", icon: Search, description: "Sources, chronology, cause and effect, evidence, and historical inquiry." },
  { id: "y8-medieval-world", name: "The Medieval World", domain: "History", year: 8, count: 12, color: "#FFFBEB", accent: "#D97706", icon: Landmark, description: "Feudalism, Crusades, Black Death, Vikings, and medieval societies." },
  { id: "y8-colonisation", name: "The Era of Colonisation", domain: "History", year: 8, count: 12, color: "#FEF2F2", accent: "#EF4444", icon: Globe2, description: "European exploration, colonisation, First Nations impact, and resistance." },
  { id: "y9-making-modern", name: "Making the Modern World", domain: "History", year: 9, count: 12, color: "#EEF2FF", accent: "#4F46E5", icon: Factory, description: "Industrial Revolution, WWI, Gallipoli, ANZAC, and global conflict." },
  { id: "y9-rights-freedoms", name: "Rights and Freedoms", domain: "History", year: 9, count: 12, color: "#F0FDF4", accent: "#22C55E", icon: Scale, description: "Civil rights, suffrage, Indigenous rights, and freedom movements." },
  { id: "y10-modern-world", name: "The Modern World", domain: "History", year: 10, count: 12, color: "#EFF6FF", accent: "#3B82F6", icon: Globe2, description: "WWII, Cold War, decolonisation, globalisation, and terrorism." },
  { id: "y10-australia-world", name: "Australia in the World", domain: "History", year: 10, count: 12, color: "#F0FDF4", accent: "#22C55E", icon: Landmark, description: "Federation, migration, multiculturalism, and Australia's global role." },

  // ── Geography (Years 7-10, by NESA topic) ───────────────────────────────
  { id: "y7-landscapes", name: "Landscapes and Landforms", domain: "Geography", year: 7, count: 12, color: "#ECFEFF", accent: "#06B6D4", icon: Globe2, description: "Geomorphic processes, landform types, weathering, erosion, and landscapes." },
  { id: "y7-liveability", name: "Place and Liveability", domain: "Geography", year: 7, count: 12, color: "#F0FDFA", accent: "#0D9488", icon: MapPin, description: "Urban planning, quality of life, access to services, and community." },
  { id: "y8-water-world", name: "Water in the World", domain: "Geography", year: 8, count: 12, color: "#EFF6FF", accent: "#3B82F6", icon: Waves, description: "Water cycle, scarcity, management, catchments, and water security." },
  { id: "y8-interconnections", name: "Interconnections", domain: "Geography", year: 8, count: 12, color: "#FFFBEB", accent: "#D97706", icon: Globe2, description: "Trade, tourism, technology, migration, and global connections." },
  { id: "y9-biomes", name: "Sustainable Biomes", domain: "Geography", year: 9, count: 12, color: "#F0FDF4", accent: "#22C55E", icon: Leaf, description: "Biome types, food production, sustainability, and land management." },
  { id: "y9-changing-places", name: "Changing Places", domain: "Geography", year: 9, count: 12, color: "#FFF7ED", accent: "#EA580C", icon: Building, description: "Urbanisation, migration, spatial change, and community transformation." },
  { id: "y10-env-change", name: "Environmental Change", domain: "Geography", year: 10, count: 12, color: "#FEF2F2", accent: "#EF4444", icon: Thermometer, description: "Climate change, environmental management, conservation, and human impact." },
  { id: "y10-human-wellbeing", name: "Human Wellbeing", domain: "Geography", year: 10, count: 12, color: "#EEF2FF", accent: "#4F46E5", icon: HeartPulse, description: "Development, inequality, health, education, and global wellbeing." },

  // ── PDHPE (Years 7-10, by NESA focus area) ──────────────────────────────
  ...[7,8,9,10].flatMap(y => [
    { id: `y${y}-health-wellbeing`, name: "Health & Wellbeing", domain: "PDHPE", year: y, count: 12, color: "#FEF2F2", accent: "#EF4444", icon: HeartPulse, description: `Year ${y} mental health, nutrition, relationships, and personal safety.` },
    { id: `y${y}-movement`, name: "Movement & Physical Activity", domain: "PDHPE", year: y, count: 12, color: "#FFF7ED", accent: "#F97316", icon: Activity, description: `Year ${y} fitness, body systems in movement, and sports science.` },
  ]),

  // ── Commerce (Years 7-10, by NESA core area) ────────────────────────────
  ...[7,8,9,10].flatMap(y => [
    { id: `y${y}-consumer-finance`, name: "Consumer & Financial Literacy", domain: "Commerce", year: y, count: 12, color: "#F5F3FF", accent: "#7C3AED", icon: Wallet, description: `Year ${y} budgeting, consumer rights, banking, and financial decisions.` },
    { id: `y${y}-law-society`, name: "Law & Society", domain: "Commerce", year: y, count: 12, color: "#F8FAFC", accent: "#475569", icon: Gavel, description: `Year ${y} legal system, rights and responsibilities, and employment law.` },
  ]),

  // ── Technology (Years 7-10, by NESA domain) ─────────────────────────────
  ...[7,8,9,10].flatMap(y => [
    { id: `y${y}-design-production`, name: "Design & Production", domain: "Technology", year: y, count: 12, color: "#F8FAFC", accent: "#475569", icon: Cog, description: `Year ${y} design process, materials, tools, and project management.` },
    { id: `y${y}-digital-tech`, name: "Digital Technologies", domain: "Technology", year: y, count: 12, color: "#EFF6FF", accent: "#3B82F6", icon: Cpu, description: `Year ${y} computational thinking, coding, data, and digital systems.` },
  ]),
];

export { CATEGORIES };
