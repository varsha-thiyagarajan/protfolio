import useInView from "../hooks/useInView";
import SectionLabel from "./SectionLabel";
import { useState, useEffect } from "react";
export default function Contact() {
  const [ref, inView] = useInView();
  return (
    <section id="contact" ref={ref} style={{ padding: "6rem 2rem 8rem", background: "#06060f", textAlign: "center" }}>
      <div style={{ maxWidth: 580, margin: "0 auto" }}>
        <SectionLabel label="Contact" inView={inView} />
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem,5vw,3.2rem)", color: "#fff",
          margin: "0 0 1.2rem", fontWeight: 700,
          opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)", transition: "all 0.8s 0.1s",
        }}>Let's Build Something</h2>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "1rem",
          color: "rgba(255,255,255,0.48)", lineHeight: 1.9, marginBottom: "2.5rem",
          opacity: inView ? 1 : 0, transition: "opacity 0.8s 0.3s",
        }}>
          I'm open to internships, collaborations, and exciting projects. Feel free to reach out!
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", opacity: inView ? 1 : 0, transition: "opacity 0.8s 0.5s" }}>
          {[
            { label: "GitHub", href: "https://github.com/varsha-thiyagarajan" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/varsha-thiyagarajan-3009b3321/" },
            { label: "varsha120707@gmail.com", href: "varsha120707@gmail.com" },
          ].map(link => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" style={{
              padding: "0.85rem 2rem", borderRadius: "50px",
              border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.62)",
              textDecoration: "none", fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.88rem", fontWeight: 500, transition: "all 0.25s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#fd9644"; e.currentTarget.style.color = "#fd9644"; e.currentTarget.style.background = "rgba(253,150,68,0.08)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "rgba(255,255,255,0.62)"; e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = ""; }}
            >{link.label}</a>
          ))}
        </div>
      </div>
    </section>
  );
}
