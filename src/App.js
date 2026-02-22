import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #06060f; color: #fff; }
        button { cursor: pointer; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #06060f; }
        ::-webkit-scrollbar-thumb { background: rgba(253,150,68,0.3); border-radius: 3px; }
        @keyframes floatOrb {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.04); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.22; }
          50% { transform: translateX(-50%) translateY(9px); opacity: 0.52; }
        }
      `}</style>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <footer style={{
        background: "#06060f", borderTop: "1px solid rgba(255,255,255,0.04)",
        padding: "1.4rem 2rem", textAlign: "center",
        fontFamily: "'DM Sans', sans-serif", fontSize: "0.76rem",
        color: "rgba(255,255,255,0.18)", letterSpacing: "0.06em",
      }}>
        Designed & Built by <span style={{ color: "#fd9644" }}>Varsha</span> · {new Date().getFullYear()}
      </footer>
    </>
  );
}
