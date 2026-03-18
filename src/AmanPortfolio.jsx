import { useState, useEffect } from "react";

const DATA = {
  name: "Aman Kumar",
  title: "Aspiring Web Developer",
  tagline: "MERN stack developer building scalable web apps and solving real-world problems.",
  email: "amankrit61@gmail.com",
  phone: "+91 9771126099",
  linkedin: "linkedin.com/in/amankumar-a73407285",
  github: "github.com/Amankumar259",
  about:
    "Computer Science student at KIIT with hands-on experience in full-stack development using the MERN stack. Passionate about learning new technologies, improving user experience, and collaborating on innovative projects.",
  education: {
    institution: "Kalinga Institute of Industrial Technology (KIIT)",
    degree: "B.Tech in Computer Science and Communication",
    period: "July 2023 – July 2027",
    cgpa: "9.09 / 10.0",
    location: "Bhubaneswar, India",
  },
  experience: [
    {
      role: "Aspire Leaders Program Fellow",
      org: "Aspire Institute (Harvard-affiliated)",
      period: "Aug 2025 – Oct 2025",
      points: [
        "Selected from a competitive global applicant pool for an elite leadership program with Harvard affiliation.",
        "Collaborated with international peers on innovation-driven projects addressing global challenges.",
        "Developed strategic thinking and cross-cultural communication through mentorship with industry leaders.",
      ],
    },
    {
      role: "Graphic Design Intern",
      org: "Odisha Development Management Program (ODMP)",
      period: "Oct 2025",
      points: [
        "Designed visual content and marketing materials for government development initiatives.",
        "Collaborated with cross-functional teams to deliver creative solutions aligned with organizational goals.",
      ],
    },
  ],
  projects: [
    {
      name: "E-Commerce Platform",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"],
      desc: "Full-stack e-commerce app with user auth, product catalog, shopping cart, payment integration, and real-time inventory tracking.",
      link: "https://github.com/Amankumar259/E-comm-Aman-store/tree/master",
    },
    {
      name: "Plant Disease Detection",
      tech: ["React", "FastAPI", "TensorFlow", "Keras", "CNN"],
      desc: "Deep learning app that detects and classifies plant leaf diseases from uploaded images using a CNN model trained on the PlantVillage dataset.",
      link: null,
    },
  ],
  skills: [
    { group: "Languages", items: ["C/C++", "JavaScript", "Python", "Java", "HTML", "CSS", "SQL"] },
    { group: "Frameworks", items: ["React.js", "Node.js", "Express.js", "FastAPI", "REST APIs"] },
    { group: "Databases", items: ["MongoDB", "MySQL"] },
    { group: "Tools", items: ["Git", "GitHub", "AWS", "Postman", "npm", "Webpack"] },
    { group: "Soft Skills", items: ["Leadership", "Problem-Solving", "Team Collaboration", "Project Management"] },
  ],
};

const NAV_ITEMS = ["Projects", "Skills", "Experience", "Contact"];

function useTypewriter(text, speed = 38) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const id = setInterval(() => {
      if (i < text.length) { setDisplayed(text.slice(0, i + 1)); i++; }
      else clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text]);
  return displayed;
}

function Cursor() {
  const [vis, setVis] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setVis(v => !v), 500);
    return () => clearInterval(id);
  }, []);
  return (
    <span style={{
      display: "inline-block", width: "10px", height: "1.1em",
      background: "#00ff87", verticalAlign: "text-bottom",
      marginLeft: "2px", opacity: vis ? 1 : 0, transition: "opacity 0.1s",
    }} />
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("Projects");
  const typed = useTypewriter(DATA.tagline);

  const scrollTo = (sec) => {
    setActive(sec);
    document.getElementById("main-content")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{
      fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
      background: "#080c0f", color: "#c8d3dc",
      minHeight: "100vh", margin: 0, padding: 0,
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Syne:wght@700;800&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #080c0f; }
        ::-webkit-scrollbar-thumb { background: #1e2e20; border-radius: 2px; }
        .nav-link {
          background: none; border: none; cursor: pointer;
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px; letter-spacing: 0.08em;
          color: #5a7a6a; padding: 6px 14px;
          border-radius: 4px; transition: all 0.2s; text-transform: uppercase;
        }
        .nav-link:hover { color: #00ff87; }
        .nav-link.active { color: #00ff87; background: rgba(0,255,135,0.07); border: 1px solid rgba(0,255,135,0.18); }
        .proj-card {
          border: 1px solid #1a2820; border-radius: 8px;
          padding: 1.4rem; background: #0b1114;
          transition: border-color 0.25s, transform 0.2s;
        }
        .proj-card:hover { border-color: rgba(0,255,135,0.35); transform: translateY(-2px); }
        .skill-pill {
          font-size: 11px; letter-spacing: 0.06em; padding: 4px 10px;
          border-radius: 3px; background: #111c15; border: 1px solid #1e3025;
          color: #5fcc88; display: inline-block; margin: 3px;
        }
        .exp-item { border-left: 2px solid #1e3025; padding-left: 1.2rem; margin-bottom: 1.8rem; transition: border-color 0.2s; }
        .exp-item:hover { border-color: #00ff87; }
        .tab-btn {
          background: none; border: none; cursor: pointer;
          font-family: 'JetBrains Mono', monospace; font-size: 13px;
          padding: 8px 18px; border-bottom: 2px solid transparent;
          color: #3d5a48; transition: all 0.2s; text-transform: uppercase; letter-spacing: 0.08em;
        }
        .tab-btn.active { color: #00ff87; border-bottom-color: #00ff87; }
        .tab-btn:hover { color: #00ff87; }
        .contact-link {
          display: flex; align-items: center; gap: 10px; padding: 12px 16px;
          border-radius: 6px; border: 1px solid #1a2820; background: #0b1114;
          color: #7ea88e; font-size: 13px; text-decoration: none; transition: all 0.2s;
        }
        .contact-link:hover { border-color: rgba(0,255,135,0.4); color: #00ff87; background: rgba(0,255,135,0.04); }
        .tech-tag {
          font-size: 10px; padding: 2px 8px; background: rgba(0,255,135,0.06);
          border: 1px solid rgba(0,255,135,0.15); border-radius: 3px;
          color: #3faa68; letter-spacing: 0.04em;
        }
        .section-label { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #2e4a38; margin-bottom: 1rem; }
        .gh-link { font-size: 12px; color: #00ff87; text-decoration: none; letter-spacing: 0.04em; display: inline-flex; align-items: center; gap: 4px; opacity: 0.8; transition: opacity 0.2s; }
        .gh-link:hover { opacity: 1; }
        .grid-overlay {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(0,255,135,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,135,0.025) 1px, transparent 1px);
          background-size: 40px 40px; pointer-events: none;
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(8,12,15,0.92)", backdropFilter: "blur(10px)",
        borderBottom: "1px solid #0f1f18",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 2rem", height: "56px",
      }}>
        <span style={{ fontSize: "13px", color: "#2e5a3e", letterSpacing: "0.06em" }}>
          <span style={{ color: "#00ff87" }}>~/</span>aman<span style={{ color: "#00ff87" }}>.</span>dev
        </span>
        <div style={{ display: "flex", gap: "4px" }}>
          {NAV_ITEMS.map(n => (
            <button key={n} className={`nav-link ${active === n ? "active" : ""}`} onClick={() => scrollTo(n)}>{n}</button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden", padding: "6rem 2rem 5rem", maxWidth: "1000px", margin: "0 auto" }}>
        <div className="grid-overlay" />
        <div style={{ position: "relative" }}>
          <p style={{ fontSize: "14px", color: "#6a9a7a", marginBottom: "1.8rem" }}>
            <span style={{ color: "#2e5a3e", marginRight: "6px" }}>$</span>
            <span style={{ color: "#00ff87" }}>whoami</span>
          </p>
          <h1 style={{
            fontFamily: "'Syne', sans-serif", fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 800, lineHeight: 0.95, color: "#e8f2ed",
            letterSpacing: "-0.03em", margin: "0 0 0.3rem",
          }}>{DATA.name}</h1>
          <p style={{ fontSize: "13px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#00ff87", marginBottom: "1.5rem" }}>
            {DATA.title}
          </p>
          <p style={{ fontSize: "14px", color: "#6a9a7a", lineHeight: 1.7, maxWidth: "520px", marginBottom: "2.5rem" }}>
            <span style={{ color: "#2e5a3e", marginRight: "6px" }}>→</span>{typed}<Cursor />
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <button onClick={() => scrollTo("Projects")} style={{
              background: "#00ff87", color: "#060f09", border: "none", borderRadius: "5px",
              padding: "10px 22px", fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700, fontSize: "13px", letterSpacing: "0.08em",
              cursor: "pointer", textTransform: "uppercase", transition: "opacity 0.2s",
            }}
              onMouseOver={e => e.target.style.opacity = 0.85}
              onMouseOut={e => e.target.style.opacity = 1}
            >View Projects</button>
            <button onClick={() => scrollTo("Contact")} style={{
              background: "none", border: "1px solid #1e3025", color: "#5fcc88",
              borderRadius: "5px", padding: "10px 22px",
              fontFamily: "'JetBrains Mono', monospace", fontSize: "13px",
              letterSpacing: "0.08em", cursor: "pointer", textTransform: "uppercase", transition: "all 0.2s",
            }}
              onMouseOver={e => { e.target.style.borderColor = "#00ff87"; e.target.style.color = "#00ff87"; }}
              onMouseOut={e => { e.target.style.borderColor = "#1e3025"; e.target.style.color = "#5fcc88"; }}
            >Get in Touch</button>
          </div>
          <div style={{ display: "flex", gap: "2.5rem", marginTop: "3.5rem", borderTop: "1px solid #0f1f18", paddingTop: "2rem", flexWrap: "wrap" }}>
            {[["9.09", "CGPA at KIIT"], ["2", "Projects shipped"], ["2025", "Aspire Fellow"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontSize: "28px", fontWeight: 700, color: "#e8f2ed", lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: "11px", color: "#3d5a48", marginTop: "4px", letterSpacing: "0.1em", textTransform: "uppercase" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN */}
      <div id="main-content" style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 2rem 6rem" }}>
        <div style={{ borderBottom: "1px solid #0f1f18", marginBottom: "2.5rem", display: "flex" }}>
          {NAV_ITEMS.map(n => (
            <button key={n} className={`tab-btn ${active === n ? "active" : ""}`} onClick={() => setActive(n)}>{n}</button>
          ))}
        </div>

        {active === "Projects" && (
          <div>
            <p className="section-label">// selected work</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
              {DATA.projects.map(p => (
                <div key={p.name} className="proj-card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                    <span style={{ fontWeight: 700, fontSize: "15px", color: "#ddeee5" }}>{p.name}</span>
                    {p.link ? <a href={p.link} target="_blank" rel="noreferrer" className="gh-link">GitHub ↗</a>
                      : <span style={{ fontSize: "11px", color: "#2e4a38" }}>private</span>}
                  </div>
                  <p style={{ fontSize: "13px", color: "#5a7a6a", lineHeight: 1.7, margin: "0 0 14px" }}>{p.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {active === "Skills" && (
          <div>
            <p className="section-label">// tech stack</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px" }}>
              {DATA.skills.map(sg => (
                <div key={sg.group} style={{ border: "1px solid #0f1f18", borderRadius: "8px", padding: "1.2rem", background: "#0b1114" }}>
                  <div style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#00ff87", marginBottom: "12px", textTransform: "uppercase" }}>{sg.group}</div>
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {sg.items.map(it => <span key={it} className="skill-pill">{it}</span>)}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "1.5rem", padding: "1.2rem", background: "#0b1114", border: "1px solid #0f1f18", borderRadius: "8px" }}>
              <p className="section-label" style={{ marginBottom: "0.6rem" }}>// about</p>
              <p style={{ fontSize: "14px", color: "#5a7a6a", lineHeight: 1.8, margin: 0 }}>{DATA.about}</p>
            </div>
          </div>
        )}

        {active === "Experience" && (
          <div>
            <p className="section-label">// work history</p>
            {DATA.experience.map(e => (
              <div key={e.role} className="exp-item">
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "4px", marginBottom: "4px" }}>
                  <span style={{ fontWeight: 700, color: "#ddeee5", fontSize: "15px" }}>{e.role}</span>
                  <span style={{ fontSize: "11px", color: "#2e4a38", letterSpacing: "0.08em" }}>{e.period}</span>
                </div>
                <div style={{ fontSize: "12px", color: "#00ff87", marginBottom: "8px", letterSpacing: "0.06em" }}>{e.org}</div>
                <ul style={{ paddingLeft: "1rem" }}>
                  {e.points.map((pt, i) => (
                    <li key={i} style={{ fontSize: "13px", color: "#5a7a6a", lineHeight: 1.8, marginBottom: "4px" }}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div style={{ marginTop: "2.5rem" }}>
              <p className="section-label">// education</p>
              <div className="exp-item">
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "4px", marginBottom: "4px" }}>
                  <span style={{ fontWeight: 700, color: "#ddeee5", fontSize: "15px" }}>{DATA.education.institution}</span>
                  <span style={{ fontSize: "11px", color: "#2e4a38", letterSpacing: "0.08em" }}>{DATA.education.period}</span>
                </div>
                <div style={{ fontSize: "12px", color: "#00ff87", marginBottom: "8px" }}>{DATA.education.degree}</div>
                <div style={{ fontSize: "13px", color: "#5a7a6a" }}>
                  CGPA: <span style={{ color: "#e8f2ed", fontWeight: 700 }}>{DATA.education.cgpa}</span> · {DATA.education.location}
                </div>
              </div>
            </div>
          </div>
        )}

        {active === "Contact" && (
          <div>
            <p className="section-label">// get in touch</p>
            <p style={{ fontSize: "14px", color: "#5a7a6a", lineHeight: 1.8, marginBottom: "2rem", maxWidth: "480px" }}>
              Open to internships, collaborations, and interesting projects. Response time: <span style={{ color: "#00ff87" }}>&lt; 24h</span>.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "420px" }}>
              <a href={`mailto:${DATA.email}`} className="contact-link"><span style={{ color: "#00ff87" }}>✉</span>{DATA.email}</a>
              <a href={`tel:${DATA.phone}`} className="contact-link"><span style={{ color: "#00ff87" }}>☏</span>{DATA.phone}</a>
              <a href={`https://${DATA.linkedin}`} target="_blank" rel="noreferrer" className="contact-link"><span style={{ color: "#00ff87" }}>◈</span>{DATA.linkedin}</a>
              <a href={`https://${DATA.github}`} target="_blank" rel="noreferrer" className="contact-link"><span style={{ color: "#00ff87" }}>⌥</span>{DATA.github}</a>
            </div>
          </div>
        )}
      </div>

      <footer style={{ borderTop: "1px solid #0f1f18", padding: "1.2rem 2rem", textAlign: "center", fontSize: "11px", color: "#2e4a38", letterSpacing: "0.1em" }}>
        <span style={{ color: "#00ff87" }}>~/</span>aman.dev — built with React · {new Date().getFullYear()}
      </footer>
    </div>
  );
}
