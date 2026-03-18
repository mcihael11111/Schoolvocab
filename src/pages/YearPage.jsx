import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { getSubjectsForYear, YEARS } from "../data/subjects.js";
import { CATEGORIES } from "../data/categories.js";
import { ALL_WORDS } from "../data/words.js";
import { Breadcrumbs } from "../components/ui/Breadcrumbs.jsx";
import { SEOHead } from "../components/ui/SEOHead.jsx";
import { ArrowRight } from "lucide-react";

export function YearPage({ completedTerms = new Set(), user }) {
  const { year } = useParams();
  const yearNum = parseInt(year, 10);

  if (!YEARS.includes(yearNum)) {
    return <Navigate to="/" replace />;
  }

  const subjects = getSubjectsForYear(yearNum);
  const yearCats = CATEGORIES.filter(c => c.year === yearNum);
  const yearWords = ALL_WORDS.filter(w => w.year === yearNum);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px 96px" }}>
      <SEOHead
        title={`Year ${yearNum} Subjects`}
        description={`Browse ${subjects.length} subjects and ${yearWords.length} vocabulary terms for Year ${yearNum}.`}
      />

      <Breadcrumbs items={[
        { label: "Home", to: "/" },
        { label: `Year ${yearNum}` },
      ]} />

      <div style={{ marginBottom: 32 }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#94A3B8", marginBottom: 8 }}>
          {subjects.length} subjects · {yearWords.length} terms
        </p>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 700, letterSpacing: "-0.03em", fontFamily: "'DM Serif Display', serif", color: "#1A1A2E", margin: 0 }}>
          Year {yearNum}
        </h1>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(280px, 100%), 1fr))", gap: 16 }}>
        {subjects.map(subj => {
          const subjCats = yearCats.filter(c => c.domain === subj.name);
          const subjWords = yearWords.filter(w => {
            return subjCats.some(c => c.name === w.category);
          });
          const completedCount = user ? subjWords.filter(w => completedTerms.has(w.term)).length : 0;
          const Icon = subj.icon;

          return (
            <Link
              key={subj.id}
              to={`/year/${yearNum}/${subj.slug}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubjectCard
                subj={subj}
                catCount={subjCats.length}
                termCount={subjWords.length}
                completedCount={user ? completedCount : undefined}
                Icon={Icon}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function SubjectCard({ subj, catCount, termCount, completedCount, Icon }) {
  const [hov, setHov] = useState(false);
  const pct = completedCount !== undefined && termCount > 0
    ? Math.round((completedCount / termCount) * 100) : null;

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "#fff",
        border: `1.5px solid ${hov ? subj.accent : "#E2E8F0"}`,
        borderRadius: 16,
        padding: "24px 24px 20px",
        cursor: "pointer",
        transition: "all 0.2s cubic-bezier(0.4,0,0.2,1)",
        transform: hov ? "translateY(-2px)" : "none",
        boxShadow: hov ? "0 8px 24px rgba(0,0,0,0.08)" : "0 1px 3px rgba(0,0,0,0.04)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
        <span style={{ width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", background: subj.color, borderRadius: 12, flexShrink: 0 }}>
          <Icon size={24} color={subj.accent} strokeWidth={1.75} />
        </span>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, fontFamily: "'DM Serif Display', serif", color: "#1A1A2E", margin: 0 }}>{subj.name}</h3>
          <p style={{ fontSize: 13, color: "#94A3B8", margin: "2px 0 0", fontWeight: 500 }}>
            {catCount} {catCount === 1 ? "category" : "categories"} · {termCount} terms
          </p>
        </div>
        <ArrowRight size={18} color={hov ? subj.accent : "#CBD5E1"} style={{ transition: "color 0.2s" }} />
      </div>

      {pct !== null && (
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, fontWeight: 600, color: "#64748B", marginBottom: 6 }}>
            <span>{completedCount}/{termCount} terms</span>
            <span>{pct}%</span>
          </div>
          <div style={{ height: 4, background: "#F1F5F9", borderRadius: 99, overflow: "hidden" }}>
            <div style={{ height: "100%", borderRadius: 99, background: subj.accent, width: `${pct}%`, transition: "width 0.4s ease" }} />
          </div>
        </div>
      )}
    </div>
  );
}
