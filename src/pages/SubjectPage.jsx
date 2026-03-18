import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { findSubjectBySlug, YEARS } from "../data/subjects.js";
import { CATEGORIES } from "../data/categories.js";
import { getWordsForCategory } from "../utils/termLookup.js";
import { Breadcrumbs } from "../components/ui/Breadcrumbs.jsx";
import { SEOHead } from "../components/ui/SEOHead.jsx";
import { ArrowRight, Trophy } from "lucide-react";

export function SubjectPage({ completedTerms = new Set(), user }) {
  const { year, subjectSlug } = useParams();
  const yearNum = parseInt(year, 10);
  const subject = findSubjectBySlug(subjectSlug);

  if (!YEARS.includes(yearNum) || !subject || !subject.years.includes(yearNum)) {
    return <Navigate to={`/year/${yearNum || 7}`} replace />;
  }

  const cats = CATEGORIES.filter(c => c.year === yearNum && c.domain === subject.name);
  const Icon = subject.icon;

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px 96px" }}>
      <SEOHead
        title={`Year ${yearNum} ${subject.name}`}
        description={`Explore ${cats.length} ${subject.name} categories and vocabulary terms for Year ${yearNum}.`}
      />

      <Breadcrumbs items={[
        { label: "Home", to: "/" },
        { label: `Year ${yearNum}`, to: `/year/${yearNum}` },
        { label: subject.name },
      ]} />

      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 32 }}>
        <span style={{ width: 52, height: 52, display: "flex", alignItems: "center", justifyContent: "center", background: subject.color, borderRadius: 14, flexShrink: 0 }}>
          <Icon size={26} color={subject.accent} strokeWidth={1.75} />
        </span>
        <div>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: subject.accent, margin: "0 0 4px" }}>Year {yearNum}</p>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 700, letterSpacing: "-0.03em", fontFamily: "'DM Serif Display', serif", color: "#1A1A2E", margin: 0 }}>{subject.name}</h1>
        </div>
      </div>

      {cats.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 24px", color: "#94A3B8" }}>
          <p style={{ fontSize: 18, fontWeight: 600, margin: "0 0 8px", color: "#64748B" }}>Content coming soon</p>
          <p style={{ fontSize: 14, margin: 0 }}>Year {yearNum} {subject.name} terms are being added.</p>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(260px, 100%), 1fr))", gap: 14 }}>
          {cats.map(cat => {
            const words = getWordsForCategory(cat);
            const done = user ? words.filter(w => completedTerms.has(w.term)).length : undefined;
            const CatIcon = cat.icon;
            return (
              <CategoryCardLink
                key={cat.id}
                cat={cat}
                wordCount={words.length}
                completedCount={done}
                yearNum={yearNum}
                subjectSlug={subjectSlug}
                CatIcon={CatIcon}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

function CategoryCardLink({ cat, wordCount, completedCount, yearNum, subjectSlug, CatIcon }) {
  const [hov, setHov] = useState(false);
  const allDone = completedCount !== undefined && completedCount === wordCount && wordCount > 0;

  return (
    <Link
      to={`/year/${yearNum}/${subjectSlug}/${cat.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div style={{
        background: "#fff",
        border: `1.5px solid ${hov ? cat.accent : "#E2E8F0"}`,
        borderRadius: 14,
        padding: "20px 20px 16px",
        cursor: "pointer",
        transition: "all 0.2s cubic-bezier(0.4,0,0.2,1)",
        transform: hov ? "translateY(-2px)" : "none",
        boxShadow: hov ? "0 6px 20px rgba(0,0,0,0.07)" : "0 1px 3px rgba(0,0,0,0.04)",
      }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 10 }}>
          <span style={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", background: cat.color, borderRadius: 10, flexShrink: 0 }}>
            <CatIcon size={20} color={cat.accent} strokeWidth={1.75} />
          </span>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1A1A2E", margin: "0 0 4px", lineHeight: 1.3 }}>{cat.name}</h3>
            <p style={{ fontSize: 12, color: "#94A3B8", margin: 0, lineHeight: 1.4 }}>{cat.description}</p>
          </div>
          {allDone ? (
            <Trophy size={16} color="#22C55E" />
          ) : (
            <ArrowRight size={16} color={hov ? cat.accent : "#CBD5E1"} style={{ transition: "color 0.2s", marginTop: 2 }} />
          )}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, fontWeight: 600, color: "#64748B" }}>
          <span>{wordCount} terms</span>
          {completedCount !== undefined && <span>{completedCount}/{wordCount} done</span>}
        </div>
      </div>
    </Link>
  );
}
