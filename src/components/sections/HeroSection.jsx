import { STATS } from "../../data/domains.js";

export function HeroSection() {
  return (
    <section
      id="hero"
      style={{ maxWidth: 900, margin: "0 auto", padding: "clamp(28px,5vw,52px) 24px 28px", textAlign: "center" }}
    >
      <div className="fade-up" style={{ animationDelay: "0ms" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 99, padding: "5px 14px", marginBottom: 20, fontSize: 12, fontWeight: 600, color: "#16A34A", letterSpacing: "0.04em" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E", display: "inline-block" }}/>
          {STATS[0].value} concepts across {STATS[2].value} subjects
        </div>
      </div>

      <h1
        className="fade-up"
        style={{ animationDelay: "80ms", fontSize: "clamp(36px, 6vw, 60px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.08, fontFamily: "'DM Serif Display', Georgia, serif", color: "#1A1A2E", marginBottom: 16 }}
      >
        Master key concepts<br/>
        <span style={{ fontStyle: "italic", color: "#64748B" }}>from Year 7 to Year 12.</span>
      </h1>

      <p
        className="fade-up"
        style={{ animationDelay: "160ms", fontSize: 16, color: "#475569", lineHeight: 1.6, maxWidth: 480, margin: "0 auto", fontWeight: 400 }}
      >
        Learn the key concepts your teachers and examiners reward — across every subject, every year level — one concept at a time.
      </p>
    </section>
  );
}
