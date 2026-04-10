import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0.9rem 3rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        // LIGHT BACKGROUND
        background: scrolled
          ? "rgba(255,255,255,0.85)"
          : "rgba(255,255,255,0.6)",

        backdropFilter: "blur(18px)",

        borderBottom: scrolled
          ? "1px solid rgba(0,0,0,0.06)"
          : "none",

        boxShadow: scrolled
          ? "0 4px 20px rgba(0,0,0,0.05)"
          : "none",

        transition: "all 0.3s ease",
      }}
    >
      {/* LOGO */}
      <span
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.6rem",
          color: "#111827",
        }}
      >
        <span style={{ color: "#fd9644" }}>V</span>arsha's Portfolio
      </span>

      {/* NAV LINKS */}
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {["About", "Skills", "Projects", "Contact"].map((n) => (
          <a
            key={n}
            href={`#${n.toLowerCase()}`}
            style={{
              color: "#6b7280",
              textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#fd9644")}
            onMouseLeave={(e) => (e.target.style.color = "#6b7280")}
          >
            {n}
          </a>
        ))}

        {/* RESUME BUTTON */}
        <a href="/resume.pdf" download style={{ textDecoration: "none" }}>
        <button
          style={{
            padding: "0.45rem 1.2rem",
            borderRadius: "50px",
            border: "1px solid #fd9644",
            color: "#fd9644",
            background: "transparent",
            fontFamily: "'DM Sans', sans-serif",
            cursor: "pointer",
            transition: "all 0.25s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#fd9644";
            e.target.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.color = "#fd9644";
          }}
        >
          Resume
        </button>
        </a>
      </div>
    </nav>
  );
}