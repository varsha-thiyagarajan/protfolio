
import { projects } from "../data/projects";
import SectionLabel from "./SectionLabel";
import ProjectCard from "./ProjectCard";
import useInView from "../hooks/useInView";
import { useState } from "react";
export default function Projects() {
  const [ref, inView] = useInView();
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Full-Stack", "ML / AI", "Frontend"];
  const filterMap = {
    "All": projects, "Full-Stack": projects.filter(p => p.category === "fullstack"),
    "ML / AI": projects.filter(p => p.category === "ml"),
    "Frontend": projects.filter(p => p.category === "frontend"),
  };

  return (
    <section id="projects" ref={ref} style={{ padding: "6rem 2rem", background: "radial-gradient(ellipse at 15% 60%, rgba(195,166,255,0.05) 0%, transparent 55%), #06060f" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel label="Projects" inView={inView} />
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem,5vw,3.2rem)", color: "#fff",
          margin: "0 0 0.4rem", textAlign: "center", fontWeight: 700,
          opacity: inView ? 1 : 0, transition: "all 0.8s 0.1s",
        }}>Things I've Built</h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.3)", textAlign: "center", fontSize: "0.82rem", marginBottom: "2.5rem", opacity: inView ? 1 : 0, transition: "opacity 0.8s 0.2s" }}>
          Click any card to view on GitHub →
        </p>

        {/* Filters */}
        <div style={{ display: "flex", gap: "0.7rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3rem", opacity: inView ? 1 : 0, transition: "opacity 0.8s 0.3s" }}>
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: "0.5rem 1.4rem", borderRadius: "50px", cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 600, border: "1px solid",
              borderColor: filter === f ? "#fd9644" : "rgba(255,255,255,0.1)",
              background: filter === f ? "rgba(253,150,68,0.12)" : "transparent",
              color: filter === f ? "#fd9644" : "rgba(255,255,255,0.45)",
              transition: "all 0.2s",
            }}>{f}</button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {(filterMap[filter] || projects).map((p, i) => <ProjectCard key={p.id} project={p} index={i} inView={inView} />)}
        </div>
      </div>
    </section>
  );
}