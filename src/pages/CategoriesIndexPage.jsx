import { useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../data/categories.js";
import { DOMAINS } from "../data/domains.js";
import { getWordsForCategory } from "../utils/termLookup.js";
import { filterCategories } from "../utils/filterUtils.js";
import { FilterPills } from "../components/ui/FilterPills.jsx";
import { Breadcrumbs } from "../components/ui/Breadcrumbs.jsx";
import { SEOHead } from "../components/ui/SEOHead.jsx";
import { YEARS } from "../data/subjects.js";
import { Trophy } from "lucide-react";

function domainToSlug(domain) {
  return domain.toLowerCase().replace(/\s+/g, "-");
}

export function CategoriesIndexPage({ completedTerms = new Set(), user }) {
  const [activeDomain, setActiveDomain] = useState("All");
  const [activeYear, setActiveYear] = useState("All");

  const yearOptions = [{ id: "All", name: "All" }, ...YEARS.map(y => ({ id: String(y), name: `Year ${y}` }))];

  let cats = filterCategories(CATEGORIES, activeDomain, "");
  if (activeYear !== "All") {
    cats = cats.filter(c => c.year === parseInt(activeYear));
  }

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px 96px" }}>
      <SEOHead
        title="Browse Categories"
        description="Explore vocabulary categories across Years 7 to 12 — every subject, every year level."
      />

      <Breadcrumbs items={[
        { label: "Home", to: "/" },
        { label: "Categories" },
      ]} />

      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 16, flexWrap: "wrap", gap: 16 }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#94A3B8", marginBottom: 8 }}>Browse by category</p>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 700, letterSpacing: "-0.03em", fontFamily: "'DM Serif Display', serif", color: "#1A1A2E", margin: 0 }}>
            {activeDomain !== "All" ? activeDomain : activeYear !== "All" ? `Year ${activeYear}` : "All categories"}
          </h1>
        </div>
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
        <FilterPills options={yearOptions} active={activeYear} onChange={setActiveYear} />
        <FilterPills options={DOMAINS} active={activeDomain} onChange={setActiveDomain} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(220px, 100%), 1fr))", gap: 14, alignItems: "start" }}>
        {cats.map(cat => {
          const catWords = user ? getWordsForCategory(cat) : [];
          const completedCount = user ? catWords.filter(w => completedTerms.has(w.term)).length : undefined;
          const totalCount = user ? catWords.length : undefined;
          const hasProgress = completedCount !== undefined && totalCount > 0;
          const allDone = hasProgress && completedCount === totalCount;

          return (
            <CategoryCardLink
              key={cat.id}
              cat={cat}
              completedCount={completedCount}
              totalCount={totalCount}
              hasProgress={hasProgress}
              allDone={allDone}
            />
          );
        })}
      </div>

      {cats.length === 0 && (
        <div style={{ textAlign: "center", padding: "60px 24px", color: "#94A3B8" }}>
          <p style={{ fontSize: 16, fontWeight: 500, margin: 0 }}>No categories match these filters</p>
        </div>
      )}
    </div>
  );
}

function CategoryCardLink({ cat, completedCount, totalCount, hasProgress, allDone }) {
  const [hov, setHov] = useState(false);
  const pct = hasProgress ? Math.round((completedCount / totalCount) * 100) : 0;
  const subjectSlug = domainToSlug(cat.domain);

  return (
    <Link
      to={`/year/${cat.year}/${subjectSlug}/${cat.id}`}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: allDone ? "#F0FDF4" : "#fff",
        border: `1.5px solid ${allDone ? "#86EFAC" : hov ? cat.accent : "#E2E8F0"}`,
        borderRadius: 14, padding: "18px 20px 16px", cursor: "pointer",
        transition: "transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease",
        transform: hov ? "translateY(-2px)" : "none",
        boxShadow: hov ? "0 8px 24px rgba(0,0,0,0.09)" : "0 1px 4px rgba(0,0,0,0.05)",
        display: "flex", flexDirection: "column", gap: 8, textDecoration: "none", color: "inherit",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span style={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", background: cat.color, borderRadius: 10 }}>
          <cat.icon size={20} color={cat.accent} strokeWidth={1.75} />
        </span>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.04em", color: "#94A3B8", background: "#F8FAFC", padding: "3px 8px", borderRadius: 99 }}>
          Y{cat.year}
        </span>
      </div>
      <div>
        <div style={{ fontWeight: 700, fontSize: 15, color: "#1A1A2E", marginBottom: 3 }}>{cat.name}</div>
        <div style={{ fontSize: 12, color: "#64748B", lineHeight: 1.5 }}>{cat.description}</div>
      </div>
      {hasProgress && !allDone && completedCount > 0 && (
        <div style={{ height: 3, background: "#E2E8F0", borderRadius: 99, overflow: "hidden" }}>
          <div style={{ height: "100%", borderRadius: 99, background: cat.accent, width: `${pct}%`, transition: "width 0.4s ease" }} />
        </div>
      )}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 2 }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: hov ? cat.accent : "#94A3B8", transition: "color 0.15s" }}>
          {hasProgress ? `${completedCount} / ${totalCount} terms` : `${cat.count} terms`}
        </span>
        {allDone && (
          <span style={{ display: "flex", alignItems: "center", gap: 3, fontSize: 11, fontWeight: 700, color: "#16A34A" }}>
            <Trophy size={11} strokeWidth={2.5} /> Done
          </span>
        )}
      </div>
    </Link>
  );
}
