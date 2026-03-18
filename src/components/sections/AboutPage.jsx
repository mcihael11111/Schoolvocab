import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { SEOHead } from "../ui/SEOHead.jsx";

// Full-page About view.
export function AboutPage({ onOpenLogin }) {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <SEOHead title="About" description="HSCVocab helps Year 12 students master the precise vocabulary examiners reward across Biology, Physics, Chemistry, Maths, English, and Visual Arts." />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px 96px" }}>

        {/* Back */}
        <Link
          to="/"
          style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "none", border: "none", cursor: "pointer", color: "#64748B", fontSize: 14, fontWeight: 600, padding: "0 0 40px", marginBottom: 0, textDecoration: "none" }}
        >
          <ChevronLeft size={15} strokeWidth={2.5}/> Back to home
        </Link>

        {/* Hero */}
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6366F1", marginBottom: 16 }}>
          About HSCVocab
        </p>
        <h1 style={{ fontSize: "clamp(36px, 6vw, 56px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05, fontFamily: "'DM Serif Display', Georgia, serif", color: "#1A1A2E", marginBottom: 24 }}>
          Master Year 12 vocabulary<br/>
          <span style={{ fontStyle: "italic", color: "#6366F1" }}>across every HSC subject.</span>
        </h1>
        <div style={{ fontSize: 18, color: "#475569", lineHeight: 1.75, marginBottom: 64, maxWidth: 620, display: "flex", flexDirection: "column", gap: 20 }}>
          <p style={{ margin: 0 }}>
            Every HSC subject has its own language — and examiners know immediately whether you know it or not. You can understand a concept perfectly and still lose marks because you didn't name it precisely, didn't use the right terminology, or couldn't explain why it matters.
          </p>
          <p style={{ margin: 0 }}>
            The problem isn't intelligence. It's exposure. Vocabulary is something you build through encounter — and HSCVocab is designed to accelerate that. Over 400 terms across Biology, Physics, Chemistry, Mathematics, English, and Visual Arts, each explained clearly so the knowledge actually sticks.
          </p>
          <p style={{ margin: 0 }}>
            No textbooks, no flashcard apps that quiz you on definitions alone. Every term here comes with a plain-language definition, why it matters in the context of your exam, a realistic scenario so you can see it in action, and related terms so the ideas connect instead of sitting in a list.
          </p>
        </div>

        <Divider/>

        {/* Why it exists */}
        <Section label="Why it exists">
          <p>
            There's a vocabulary gap in Year 12 that nobody talks about directly. Teachers assume you know certain terms. Textbooks use them without always explaining them. And in the exam, if you use vague language where precise language was expected — marks disappear.
          </p>
          <p>
            HSCVocab is here to close that gap. Not with more notes, not with practice papers — just with the vocabulary itself, explained the way a good tutor would: clearly, with context, and with enough depth that you actually understand why the term matters.
          </p>
        </Section>

        <Divider/>

        {/* Who it's for */}
        <Section label="Who it's for">
          <p>
            Any Year 12 student who wants to write with more precision and confidence in their exams. Specifically:
          </p>
          <p>
            You're studying Biology and want to be sure you can distinguish meiosis from mitosis in a sentence examiners reward. You're in an English exam and reach for 'language technique' when you should be writing 'sibilance' or 'anaphora'. You're finishing a Chemistry unit and realise you've been using 'equilibrium' loosely when the concept has a precise definition that unlocks a higher-band response.
          </p>
          <p>
            If you've ever written an answer you were proud of and still lost marks because the language wasn't specific enough — this is for you.
          </p>
        </Section>

        <Divider/>

        {/* The content */}
        <Section label="What you'll find here">
          <p>
            Every term was selected because it appears in HSC syllabuses, marking guidelines, and examiner feedback — the words that come up in extended responses, short answers, and multiple choice questions. Nothing obscure. Nothing purely theoretical. Just the vocabulary that actually shows up when it matters.
          </p>
          <p>
            Each term gives you a clear definition, the reason it matters in context, a realistic scenario showing the term in use, and related terms so your understanding builds outward from each concept. Because vocabulary sticks when you see how ideas connect — not when you memorise definitions in isolation.
          </p>
          <p>
            Right now there are over 430 terms across 29 categories and 6 subjects. More are added regularly as new syllabuses and examiner priorities are reviewed.
          </p>
        </Section>

        <Divider/>

        {/* The builder */}
        <Section label="Who built this">
          <p>
            Hi — I'm Michael Papanikolaou, a designer and product person based in Australia. I built HSCVocab because I kept noticing the same thing: students who understood the content were still being penalised for language that wasn't precise enough. The knowledge was there. The vocabulary wasn't.
          </p>
          <p>
            Language shouldn't be a gatekeeping thing. If you know the word, you can use it. And if you can use it precisely in an exam, you can demonstrate understanding that a vague paraphrase never could. That's the whole idea behind this.
          </p>
          <p style={{ marginBottom: 0 }}>
            You can see more of what I'm working on at{" "}
            <a href="https://www.madebymichael.com.au/uxuidesignportfolio" target="_blank" rel="noreferrer" style={{ color: "#6366F1", fontWeight: 600, textDecoration: "none" }}>
              madebymichael.com.au
            </a>
            .
          </p>
        </Section>

        <Divider/>

        {/* CTA */}
        <div style={{ paddingTop: 48, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 16 }}>
          <h2 style={{ fontSize: "clamp(24px,4vw,32px)", fontWeight: 700, letterSpacing: "-0.03em", fontFamily: "'DM Serif Display', serif", color: "#1A1A2E", margin: 0, lineHeight: 1.2 }}>
            Ready to start?
          </h2>
          <p style={{ fontSize: 16, color: "#64748B", margin: 0, lineHeight: 1.65, maxWidth: 480 }}>
            It's free. Sign up, save your progress, and work through the terms at whatever pace suits your study schedule.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
            <button
              onClick={onOpenLogin}
              style={{ background: "#1A1A2E", color: "#fff", border: "none", borderRadius: 12, padding: "14px 28px", fontSize: 15, fontWeight: 700, cursor: "pointer" }}
            >
              Start learning — it's free
            </button>
            <Link
              to="/categories"
              style={{ background: "none", color: "#64748B", border: "1.5px solid #E2E8F0", borderRadius: 12, padding: "13px 24px", fontSize: 15, fontWeight: 600, cursor: "pointer", textDecoration: "none", display: "inline-block" }}
            >
              Browse all subjects
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

function Divider() {
  return <div style={{ height: 1, background: "#F1F5F9", margin: "16px 0" }}/>;
}

function Section({ label, children }) {
  return (
    <div style={{ marginBottom: 0 }}>
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#94A3B8", marginBottom: 20 }}>
        {label}
      </p>
      <div style={{ fontSize: 17, color: "#334155", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: 20 }}>
        {children}
      </div>
    </div>
  );
}
