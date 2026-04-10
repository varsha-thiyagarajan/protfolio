import { useState, useEffect } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    setTimeout(() => setVisible(true), 120);
    const fn = (e) =>
      setMouse({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #ffffff, #f3f4f6)",
        padding: "7rem 2rem 5rem",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "fixed",
          width: 700,
          height: 700,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 0,
          background:
            "radial-gradient(circle, rgba(253,150,68,0.08) 0%, transparent 65%)",
          left: `${mouse.x * 100}vw`,
          top: `${mouse.y * 100}vh`,
          transform: "translate(-50%,-50%)",
          transition: "left 1.2s ease, top 1.2s ease",
        }}
      />

      {/* MAIN CONTAINER */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1100,
          width: "100%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "3rem",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT SIDE (TEXT) */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem, 6vw, 5rem)",
              lineHeight: 1.1,
              color: "#111827",
              margin: "0 0 1rem",
              fontWeight: 700,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.9s",
            }}
          >
            Hi, I'm{" "}
            <span
              style={{
                background:
                  "linear-gradient(130deg,#fd9644,#ff6b6b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Varsha
            </span>
          </h1>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "1.4rem",
              color: "#6b7280",
              marginBottom: "1rem",
            }}
          >
            Full-Stack Developer & Machine Learning Enthusiast
          </h2>

          <p
            style={{
              fontSize: "1rem",
              color: "#4b5563",
              lineHeight: 1.8,
              maxWidth: 500,
            }}
          >
            I build intelligent, user-focused digital products by combining
            modern web development with practical ML — transforming real-world
            problems into clean, efficient, and impactful systems.
          </p>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "2rem",
              marginTop: "2rem",
              flexWrap: "wrap",
            }}
          >
            {[
              ["7+", "Projects"],
              ["3", "ML Systems"],
              ["10+", "Tech"],
            ].map(([n, l]) => (
              <div key={l}>
                <div style={{ color: "#fd9644", fontSize: "1.6rem" }}>
                  {n}
                </div>
                <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>
                  {l}
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
            <a
              href="#projects"
              style={{
                padding: "0.8rem 2rem",
                borderRadius: "50px",
                background:
                  "linear-gradient(135deg, #fd9644, #ff6b6b)",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              View My Work
            </a>

            <a
              href="#contact"
              style={{
                padding: "0.8rem 2rem",
                borderRadius: "50px",
                border: "1px solid #d1d5db",
                color: "#111827",
                textDecoration: "none",
              }}
            >
              Contact
            </a>
          </div>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            minWidth: "280px",
          }}
        >
          <div
            style={{
              width: 400,
height: 400,
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, #fd9644, #ff6b6b, #c3a6ff)",
              padding: "4px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                background: "#fff",
              }}
            >
              <img
                src="/profile.jpeg"
                alt="Varsha"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}