 import { useState, useEffect } from "react";
 export default function SkillIcon({ skill, delay, inView }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", flexDirection: "column", alignItems: "center", gap: "0.55rem",
        cursor: "default",
        opacity: inView ? 1 : 0, transform: inView ? (hov ? "translateY(-6px) scale(1.1)" : "translateY(0) scale(1)") : "translateY(18px) scale(0.8)",
        transition: `opacity 0.6s ${delay}s, transform 0.35s ease`,
      }}
    >
      <div style={{
        width: 66, height: 66, borderRadius: "18px",
        background: hov ? `${skill.color}22` : "rgba(255,255,255,0.04)",
        border: `1.5px solid ${hov ? skill.color + "70" : "rgba(255,255,255,0.08)"}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all 0.3s",
        boxShadow: hov ? `0 10px 28px ${skill.color}30` : "none",
      }}>
        <img src={skill.svg} alt={skill.name} style={{ width: 36, height: 36, objectFit: "contain" }} />
      </div>
      <span style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem",
        color: hov ? skill.color : "rgba(255,255,255,0.4)",
        letterSpacing: "0.04em", transition: "color 0.25s",
      }}>{skill.name}</span>
    </div>
  );
}