import { skillCategories } from "../data/skills";
import SkillIcon from "./SkillIcon";
import SectionLabel from "./SectionLabel";
import useInView from "../hooks/useInView";
import { useState } from "react";

export default function Skills() {
  const [ref, inView] = useInView();
  const [active, setActive] = useState("All");

  const tabs = ["All", ...skillCategories.map((c) => c.label)];
  const displayed =
    active === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.label === active);

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: "6rem 2rem",
        background: "#ffffff",
        position: "relative",
      }}
    >
      {/* Light subtle background glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(253,150,68,0.06) 0%, transparent 55%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative" }}>
        <SectionLabel label="Skills & Tools" inView={inView} />

        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem,5vw,3.2rem)",
            color: "#111827",
            margin: "0 0 2.5rem",
            textAlign: "center",
            fontWeight: 700,
            opacity: inView ? 1 : 0,
            transition: "all 0.8s 0.1s",
          }}
        >
          What I Work With
        </h2>

        {/* Filter tabs */}
        <div
          style={{
            display: "flex",
            gap: "0.55rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "3rem",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.8s 0.2s",
          }}
        >
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              style={{
                padding: "0.4rem 1rem",
                borderRadius: "50px",
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.76rem",
                letterSpacing: "0.07em",
                fontWeight: 500,
                border: "1px solid",
                borderColor:
                  active === t ? "#fd9644" : "#e5e7eb",
                background:
                  active === t ? "#fff7ed" : "#f9fafb",
                color:
                  active === t ? "#fd9644" : "#6b7280",
                transition: "all 0.2s",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {displayed.map((cat, ci) => (
          <div key={cat.label} style={{ marginBottom: "2.8rem" }}>
            {/* Category Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.8rem",
                marginBottom: "1.4rem",
                opacity: inView ? 1 : 0,
                transition: `opacity 0.7s ${0.2 + ci * 0.08}s`,
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 1,
                  background: "#fd9644",
                }}
              />

              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.72rem",
                  color: "#fd9644",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                {cat.icon} {cat.label}
              </span>

              <div
                style={{
                  flex: 1,
                  height: 1,
                  background: "#e5e7eb",
                }}
              />
            </div>

            {/* Skills */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.3rem",
              }}
            >
              {cat.skills.map((sk, si) => (
                <SkillIcon
                  key={sk.name}
                  skill={sk}
                  delay={0.25 + ci * 0.04 + si * 0.06}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}