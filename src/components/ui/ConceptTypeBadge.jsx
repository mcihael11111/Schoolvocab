// Badge showing the concept card type (Know It, Do It, Think About It, Apply It)
const TYPE_CONFIG = {
  "know-it":         { label: "Know It",         color: "#3B82F6", bg: "#EFF6FF", icon: "📚" },
  "do-it":           { label: "Do It",           color: "#16A34A", bg: "#F0FDF4", icon: "⚙️" },
  "think-about-it":  { label: "Think About It",  color: "#9333EA", bg: "#F5F3FF", icon: "💭" },
  "apply-it":        { label: "Apply It",        color: "#EA580C", bg: "#FFF7ED", icon: "🚀" },
};

export function ConceptTypeBadge({ type }) {
  const cfg = TYPE_CONFIG[type] || TYPE_CONFIG["know-it"];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 4,
      fontSize: 11, fontWeight: 700, letterSpacing: "0.04em",
      color: cfg.color, background: cfg.bg,
      border: `1px solid ${cfg.color}20`,
      borderRadius: 99, padding: "3px 10px",
    }}>
      <span style={{ fontSize: 12 }}>{cfg.icon}</span>
      {cfg.label}
    </span>
  );
}

export { TYPE_CONFIG };
