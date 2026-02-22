 import { useState, useEffect } from "react";
 export default function ProjectCard({ project, index, inView }) {
  const [hov, setHov] = useState(false);
  const catColors = {
    "Full-Stack": "#4ecdc4", "Full-Stack + ML": "#fd9644",
    "Frontend": "#ffe66d", "Backend": "#c3a6ff", "ML / AI": "#a8edea",
  };
  const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);
  const accent = catColors[project.categoryLabel] || project.color;

  return (
    <a
      href={project.github} target="_blank" rel="noreferrer"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      title="View on GitHub"
      style={{
        display: "flex", flexDirection: "column", textDecoration: "none",
        background: hov ? "rgba(255,255,255,0.055)" : "rgba(255,255,255,0.025)",
        border: `1px solid ${hov ? accent + "55" : "rgba(255,255,255,0.07)"}`,
        borderRadius: "20px", padding: "1.8rem",
        opacity: inView ? 1 : 0,
        transform: inView ? (hov ? "translateY(-8px) scale(1.01)" : "translateY(0)") : "translateY(42px)",
        transition: `opacity 0.7s ${0.1 + index * 0.08}s, transform 0.7s ${0.1 + index * 0.08}s cubic-bezier(0.16,1,0.3,1), background 0.3s, border-color 0.3s, box-shadow 0.3s`,
        boxShadow: hov ? `0 24px 52px ${accent}22` : "none",
        cursor: "pointer", gap: "0.9rem", position: "relative", overflow: "hidden",
      }}
    >
      {/* top accent bar */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${accent},transparent)`, opacity: hov ? 1 : 0.25, transition: "opacity 0.3s" }} />
      {/* corner glow */}
      <div style={{ position: "absolute", width: 220, height: 220, borderRadius: "50%", top: -70, right: -70, background: `radial-gradient(circle,${accent}18 0%,transparent 70%)`, opacity: hov ? 1 : 0, transition: "opacity 0.4s", pointerEvents: "none" }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", fontWeight: 700,
          color: accent, background: `${accent}18`, border: `1px solid ${accent}38`,
          padding: "0.18rem 0.65rem", borderRadius: "50px", letterSpacing: "0.1em", textTransform: "uppercase",
        }}>{project.categoryLabel}</span>
        <span style={{ color: hov ? accent : "rgba(255,255,255,0.2)", transition: "color 0.2s", display: "flex", alignItems: "center", gap: "0.3rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem" }}>
          <GithubIcon size={14} /> View ↗
        </span>
      </div>

      <div>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.38rem", color: "#fff", margin: "0 0 0.2rem", fontWeight: 700 }}>{project.title}</h3>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.32)", margin: 0, fontStyle: "italic" }}>{project.subtitle}</p>
      </div>

      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.87rem", color: "rgba(255,255,255,0.52)", lineHeight: 1.75, margin: 0, flexGrow: 1 }}>{project.desc}</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {project.stack.map(t => (
          <span key={t} style={{
            fontFamily: "monospace", fontSize: "0.68rem",
            color: "rgba(255,255,255,0.38)", padding: "0.18rem 0.55rem",
            background: "rgba(255,255,255,0.035)", borderRadius: "5px",
            border: "1px solid rgba(255,255,255,0.06)",
          }}>{t}</span>
        ))}
      </div>
    </a>
  );
}