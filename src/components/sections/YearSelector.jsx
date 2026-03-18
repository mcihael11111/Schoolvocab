import { useState } from "react";
import { Link } from "react-router-dom";
import { YEARS, getSubjectsForYear } from "../../data/subjects.js";
import { CATEGORIES } from "../../data/categories.js";
import { ALL_WORDS } from "../../data/words.js";
import { ArrowRight } from "lucide-react";

const YEAR_LABELS = {
  7: "Year 7",
  8: "Year 8",
  9: "Year 9",
  10: "Year 10",
  11: "Year 11",
  12: "Year 12",
};

const YEAR_DESCRIPTIONS = {
  7: "Build your foundation",
  8: "Strengthen core skills",
  9: "Expand your knowledge",
  10: "Prepare for senior study",
  11: "Preliminary HSC",
  12: "HSC year",
};

export function YearSelector() {
  return (
    <section style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(40px,7vw,72px) 24px 0" }}>
      <div style={{ marginBottom: 24 }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#94A3B8", marginBottom: 8 }}>Choose your year</p>
        <h2 style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-0.03em", fontFamily: "'DM Serif Display', serif", color: "#1A1A2E", margin: 0 }}>
          Browse by year level
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(170px, 100%), 1fr))", gap: 12 }}>
        {YEARS.map(y => {
          const subjects = getSubjectsForYear(y);
          const cats = CATEGORIES.filter(c => c.year === y);
          const terms = ALL_WORDS.filter(w => w.year === y);
          return (
            <YearCard
              key={y}
              year={y}
              label={YEAR_LABELS[y]}
              description={YEAR_DESCRIPTIONS[y]}
              subjectCount={subjects.length}
              termCount={terms.length}
            />
          );
        })}
      </div>
    </section>
  );
}

function YearCard({ year, label, description, subjectCount, termCount }) {
  const [hov, setHov] = useState(false);
  const hasContent = termCount > 0;

  return (
    <Link
      to={`/year/${year}`}
      style={{ textDecoration: "none", color: "inherit" }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div style={{
        background: "#fff",
        border: `1.5px solid ${hov ? "#6366F1" : "#E2E8F0"}`,
        borderRadius: 14,
        padding: "20px 18px 16px",
        cursor: "pointer",
        transition: "all 0.2s cubic-bezier(0.4,0,0.2,1)",
        transform: hov ? "translateY(-2px)" : "none",
        boxShadow: hov ? "0 6px 20px rgba(0,0,0,0.07)" : "0 1px 3px rgba(0,0,0,0.04)",
        minHeight: 120,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 28, fontWeight: 700, fontFamily: "'DM Serif Display', serif", color: "#1A1A2E", letterSpacing: "-0.02em" }}>{year}</span>
            <ArrowRight size={16} color={hov ? "#6366F1" : "#CBD5E1"} style={{ transition: "color 0.2s" }} />
          </div>
          <p style={{ fontSize: 13, fontWeight: 600, color: "#64748B", margin: "0 0 4px" }}>{description}</p>
        </div>
        <div style={{ fontSize: 12, color: "#94A3B8", fontWeight: 500, marginTop: 8 }}>
          {subjectCount} subjects{hasContent ? ` · ${termCount} terms` : " · coming soon"}
        </div>
      </div>
    </Link>
  );
}
