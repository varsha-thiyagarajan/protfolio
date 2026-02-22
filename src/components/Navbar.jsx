import { useState, useEffect } from "react";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "0.9rem 3rem",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      background: scrolled ? "rgba(6,6,18,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(24px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
      transition: "all 0.4s ease",
    }}>
      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", color: "#fff" }}>
        <span style={{ color: "#fd9644" }}>V</span>arsha Portfolio's
      </span>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {["About", "Skills", "Projects", "Contact"].map(n => (
          <a key={n} href={`#${n.toLowerCase()}`} style={{
            color: "rgba(255,255,255,0.55)", textDecoration: "none",
            fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem",
            letterSpacing: "0.1em", textTransform: "uppercase", transition: "color 0.2s",
          }}
            onMouseEnter={e => e.target.style.color = "#fd9644"}
            onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.55)"}
          >{n}</a>
        ))}
        <a href="#" onClick={e => e.preventDefault()} style={{
          padding: "0.45rem 1.2rem", borderRadius: "50px",
          border: "1px solid #fd9644", color: "#fd9644",
          textDecoration: "none", fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase",
          fontWeight: 700, transition: "all 0.25s",
          display: "flex", alignItems: "center", gap: "0.35rem",
        }}
          onMouseEnter={e => { e.currentTarget.style.background = "#fd9644"; e.currentTarget.style.color = "#06060f"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#fd9644"; }}
        >
          ↓ Resume
        </a>
      </div>
    </nav>
  );
}
