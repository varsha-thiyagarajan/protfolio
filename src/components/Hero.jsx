import { useState, useEffect } from "react";
export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    setTimeout(() => setVisible(true), 120);
    const fn = e => setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  return (
    <section id="about" style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden",
      background: "#06060f", padding: "7rem 2rem 5rem",
    }}>
      {/* Dynamic cursor glow */}
      <div style={{
        position: "fixed", width: 700, height: 700, borderRadius: "50%", pointerEvents: "none", zIndex: 0,
        background: "radial-gradient(circle, rgba(253,150,68,0.07) 0%, transparent 65%)",
        left: `${mouse.x * 100}vw`, top: `${mouse.y * 100}vh`,
        transform: "translate(-50%,-50%)", transition: "left 1.2s ease, top 1.2s ease",
      }} />

      {/* Grid */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
      }} />

      {/* Orbs */}
      <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", top: "0%", right: "-18%", zIndex: 0, animation: "floatOrb 10s ease-in-out infinite", background: "radial-gradient(circle, rgba(253,150,68,0.09) 0%, transparent 70%)" }} />
      <div style={{ position: "absolute", width: 450, height: 450, borderRadius: "50%", bottom: "-5%", left: "-10%", zIndex: 0, animation: "floatOrb 13s ease-in-out infinite reverse", background: "radial-gradient(circle, rgba(195,166,255,0.07) 0%, transparent 70%)" }} />

      <div style={{
        position: "relative", zIndex: 1, maxWidth: 880, textAlign: "center",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "1.1rem",
      }}>

        {/* AVATAR */}
        <div style={{
          width: 112, height: 112, borderRadius: "50%",
          background: "linear-gradient(135deg, #fd9644, #ff6b6b, #c3a6ff)",
          padding: "3px",
          opacity: visible ? 1 : 0, transform: visible ? "scale(1)" : "scale(0.6)",
          transition: "all 0.9s cubic-bezier(0.34,1.56,0.64,1)",
          boxShadow: "0 0 48px rgba(253,150,68,0.32)",
        }}>
          <div style={{
            width: "100%", height: "100%", borderRadius: "50%",
            background: "#0e0e22", border: "3px solid #06060f",
            overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {/* ↓ REPLACE src WITH YOUR REAL PHOTO URL */}
            <img
              src="https://api.dicebear.com/7.x/initials/svg?seed=Varsha&backgroundColor=1a1a3a&fontFamily=Georgia&fontSize=38&fontColor=fd9644"
              alt="Varsha"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
            />
          </div>
        </div>

        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "0.74rem", letterSpacing: "0.24em",
          textTransform: "uppercase", color: "#fd9644", fontWeight: 600,
          opacity: visible ? 1 : 0, transition: "opacity 0.9s 0.25s",
        }}>
        
        </p>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(3rem, 9.5vw, 6.2rem)",
          lineHeight: 1.04, color: "#fff", margin: 0, fontWeight: 700,
          opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)",
          transition: "all 0.9s 0.35s cubic-bezier(0.16,1,0.3,1)",
        }}>
          Hi, I'm{" "}
          <span style={{ background: "linear-gradient(130deg,#fd9644,#ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Varsha
          </span>
        </h1>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
          fontSize: "clamp(1.1rem, 2.6vw, 1.75rem)",
          color: "rgba(255,255,255,0.42)", margin: 0, fontWeight: 400,
          opacity: visible ? 1 : 0, transition: "opacity 0.9s 0.55s",
        }}>
          Full-Stack Developer & Machine Learning Enthusiast
        </h2>

        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", lineHeight: 1.9,
          color: "rgba(255,255,255,0.52)", maxWidth: 580, margin: 0,
          opacity: visible ? 1 : 0, transition: "opacity 0.9s 0.7s",
        }}>
          I build intelligent, user-focused digital products by combining modern web development
          with practical ML — transforming real-world problems into clean, efficient, and impactful systems.
        </p>

        {/* Stats */}
        <div style={{
          display: "flex", gap: "3rem", flexWrap: "wrap", justifyContent: "center",
          padding: "0.5rem 0", opacity: visible ? 1 : 0, transition: "opacity 1s 0.85s",
        }}>
          {[["7+", "Projects Built"], ["3", "ML Systems"], ["10+", "Technologies"]].map(([n, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.1rem", color: "#fd9644", fontWeight: 700, lineHeight: 1 }}>{n}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.32)", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "0.3rem" }}>{l}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", opacity: visible ? 1 : 0, transition: "opacity 1s 1s" }}>
          <a href="#projects" style={{
            padding: "0.88rem 2.4rem", borderRadius: "50px",
            background: "linear-gradient(135deg, #fd9644, #ff6b6b)", color: "#fff",
            textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
            fontSize: "0.88rem", letterSpacing: "0.05em", transition: "transform 0.2s, box-shadow 0.2s",
            boxShadow: "0 4px 28px rgba(253,150,68,0.38)",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 38px rgba(253,150,68,0.52)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 28px rgba(253,150,68,0.38)"; }}
          >View My Work</a>
          <a href="#contact" style={{
            padding: "0.88rem 2.4rem", borderRadius: "50px",
            border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.72)",
            textDecoration: "none", fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.88rem", letterSpacing: "0.05em", transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#fd9644"; e.currentTarget.style.color = "#fd9644"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"; e.currentTarget.style.color = "rgba(255,255,255,0.72)"; }}
          >Get In Touch</a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: "2.2rem", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem",
        color: "rgba(255,255,255,0.22)", fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase",
        animation: "scrollBounce 2.5s ease-in-out infinite",
      }}>
        <span>Scroll</span>
        <div style={{ width: 1, height: 28, background: "linear-gradient(to bottom, rgba(253,150,68,0.45), transparent)" }} />
      </div>
    </section>
  );
}
