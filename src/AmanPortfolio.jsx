import { useEffect, useRef, useState } from "react";
import "./AmanPortfolio.css";

const DATA = {
  name: "Aman Kumar",
  tagline:
    "3rd-year B.Tech CSE student and self-driven full-stack builder creating MERN and AI-integrated applications.",
  email: "amankrit61@gmail.com",
  linkedin: "linkedin.com/in/amankumar-a73407285",
  github: "github.com/Amankumar259",
  about:
    "Passionate builder with 3+ deployed projects spanning MERN stack and AI-integrated applications. Experienced in REST APIs, JWT authentication, and role-based systems, and seeking a web development internship to apply project experience in a real-world engineering environment.",
  education: [
    {
      exam: "B.Tech (CSE)",
      field: "Computer Science",
      institute: "KIIT University",
      period: "2023 - 2027",
      result: "9.22 / 10.0",
    },
    {
      exam: "Intermediate (XII)",
      field: "PCM",
      institute: "Trident Public School",
      period: "2021 - 2023",
      result: "79%",
    },
    {
      exam: "Matriculation (X)",
      field: "General",
      institute: "SSPHS",
      period: "2009 - 2021",
      result: "89%",
    },
  ],
  experience: [
    {
      role: "MERN Stack Developer Intern",
      org: "WebStack Academy",
      period: "June 2026 - Present",
      desc: "Developing a full-stack food delivery application using the MERN stack, building responsive UIs, RESTful APIs, authentication, state management, and database integration in an Agile Git/GitHub workflow.",
    },
    {
      role: "Aspire Leaders Program Fellow",
      org: "Aspire Institute (Harvard-affiliated)",
      period: "Aug 2025 - Oct 2025",
      desc: "Collaborated with international peers on innovation-driven projects while developing strategic thinking and cross-cultural communication.",
    },
  ],
  projects: [
    {
      name: "BugPilot AI",
      type: "AI debugging assistant",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=85",
      tech: ["Next.js", "TypeScript", "GraphQL", "Lamatic", "Groq", "Gemini"],
      desc: "AI-powered debugging assistant that analyzes runtime errors and generates root cause analysis, severity assessment, fixes, corrected code, and prevention recommendations.",
      period: "May 2026 - Present",
      link: null,
    },
    {
      name: "SpendPilot",
      type: "AI cost optimization",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=85",
      tech: [
        "Next.js 16",
        "TypeScript",
        "Supabase",
        "Gemini",
        "GitHub Actions",
      ],
      desc: "Full-stack SaaS platform that audits AI tooling spend and generates optimization recommendations with persistent storage, audit summaries, emails, and CI/CD.",
      period: "Apr 2026 - May 2026",
      link: null,
    },
    {
      name: "ShopWave",
      type: "Full-stack commerce",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Redux", "JWT"],
      desc: "Full-stack e-commerce platform with JWT auth, dynamic MongoDB listings, category filtering, protected checkout, Redux state, and an admin dashboard.",
      period: "Aug 2024 - Nov 2024",
      link: "https://github.com/Amankumar259/E-comm-Aman-store/tree/master",
    },
    {
      name: "AGRI-SCAN",
      type: "Plant disease detection",
      image:
        "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1000&q=85",
      tech: ["React", "FastAPI", "TensorFlow", "Keras", "CNN"],
      desc: "Deep learning app that detects and classifies plant leaf diseases from uploaded images using a CNN model trained on PlantVillage.",
      period: "Personal project",
      link: "https://github.com/Amankumar259/AGRI-SCAN",
    },
  ],
  skills: [
    {
      group: "Languages",
      items: [
        "JavaScript (ES6+)",
        "TypeScript",
        "Python",
        "PHP",
        "C++",
        "SQL",
        "HTML5",
        "CSS3",
      ],
    },
    {
      group: "Frontend",
      items: [
        "ReactJS",
        "Next.js",
        "Redux Toolkit",
        "Tailwind CSS",
        "Bootstrap",
        "Framer Motion",
      ],
    },
    {
      group: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "GraphQL", "WebSockets"],
    },
    {
      group: "Database",
      items: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Firebase Realtime DB",
        "Redis",
      ],
    },
    {
      group: "DevOps & Tools",
      items: [
        "Git",
        "GitHub Actions",
        "Docker",
        "Vercel",
        "AWS S3",
        "Postman",
        "Figma",
        "VS Code",
      ],
    },
  ],
};

const NAV_ITEMS = ["Work", "About", "Contact"];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const projectTrackRef = useRef(null);
  const pointerLayerRef = useRef(null);
  useEffect(() => {
    const pointerLayer = pointerLayerRef.current;
    if (
      !pointerLayer ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return undefined;
    }

    let frameId = 0;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let targetX = pointerX;
    let targetY = pointerY;

    const renderPointer = () => {
      pointerX += (targetX - pointerX) * 0.18;
      pointerY += (targetY - pointerY) * 0.18;
      pointerLayer.style.setProperty("--pointer-x", `${pointerX}px`);
      pointerLayer.style.setProperty("--pointer-y", `${pointerY}px`);
      frameId = window.requestAnimationFrame(renderPointer);
    };
    const handlePointerMove = (event) => {
      if (event.pointerType === "touch") return;
      targetX = event.clientX;
      targetY = event.clientY;
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    frameId = window.requestAnimationFrame(renderPointer);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.cancelAnimationFrame(frameId);
    };
  }, []);
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };
  const slideProjects = (direction) => {
    const track = projectTrackRef.current;
    if (!track) return;
    const target = Math.min(
      Math.max(track.scrollLeft + direction * track.clientWidth * 0.86, 0),
      track.scrollWidth - track.clientWidth,
    );
    track.scrollTo({ left: target, behavior: "smooth" });
  };

  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#11130f",
        color: "#f2f2e9",
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative",
        isolation: "isolate",
      }}
    >
      <div className="ambient-layer" aria-hidden="true">
        <span className="ambient-orb" />
        <span className="ambient-orb" />
        <span className="ambient-orb" />
        <span className="ambient-orb" />
        <span className="ambient-orb" />
        <span className="ambient-orb" />
      </div>
      <div className="cursor-layer" ref={pointerLayerRef} aria-hidden="true">
        <span className="cursor-line" />
        <span className="cursor-line" />
        <span className="cursor-line" />
        <span className="cursor-line" />
        <span className="cursor-line" />
      </div>
      <nav className="site-nav">
        <button
          onClick={() => scrollTo("top")}
          style={{
            border: 0,
            background: "none",
            color: "#f2f2e9",
            font: "600 17px 'Space Grotesk'",
            letterSpacing: "-.04em",
            cursor: "pointer",
          }}
        >
          <span style={{ color: "#d5ff3f" }}>A/</span>AMAN
        </button>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "Close" : "Menu"}
        </button>
        <div
          className={`nav-menu ${menuOpen ? "" : "closed"}`}
          style={{ display: "flex", gap: 5 }}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              className="nav-link"
              onClick={() => scrollTo(item.toLowerCase())}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>
      <main id="top">
        <section
          style={{
            position: "relative",
            minHeight: 790,
            padding: "0 clamp(22px, 5vw, 74px)",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.15fr) minmax(300px, .85fr)",
            alignItems: "center",
            gap: "clamp(30px, 6vw, 110px)",
            maxWidth: 1500,
            margin: "0 auto",
          }}
        >
          <div className="hero-grid" />
          <div
            className="hero-copy"
            style={{ position: "relative", paddingTop: 90 }}
          >
            <div className="eyebrow" style={{ marginBottom: 22 }}>
              Creative developer / 01
            </div>
            <h1
              className="display hero-title"
              style={{
                fontSize: "clamp(5rem, 11vw, 10.5rem)",
                lineHeight: 0.82,
                margin: 0,
                maxWidth: 830,
              }}
            >
              BUILD
              <br />
              <span style={{ color: "#d5ff3f" }}>THE</span>
              <br />
              UNUSUAL.
            </h1>
            <p
              style={{
                color: "#aeb19c",
                fontSize: 15,
                lineHeight: 1.7,
                maxWidth: 420,
                margin: "35px 0 28px",
              }}
            >
              {DATA.tagline} I turn complex ideas into digital experiences that
              feel clear, alive, and a little unexpected.
            </p>
            <button
              onClick={() => scrollTo("work")}
              style={{
                background: "#d5ff3f",
                border: 0,
                color: "#11130f",
                padding: "15px 19px",
                font: "600 12px 'DM Sans'",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Explore selected work{" "}
              <span style={{ fontSize: 17, marginLeft: 16 }}>↘</span>
            </button>
          </div>
          <div
            className="image-panel"
            style={{ alignSelf: "end", marginBottom: 72 }}
          >
            <img
              src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=85"
              alt="Abstract green and black creative composition"
            />
            <div
              style={{
                position: "absolute",
                zIndex: 1,
                bottom: 18,
                left: 18,
                right: 18,
                display: "flex",
                justifyContent: "space-between",
                color: "#d5ff3f",
                fontSize: 10,
                letterSpacing: ".12em",
                textTransform: "uppercase",
              }}
            >
              <span>Digital / Human</span>
              <span>Scroll to explore ↓</span>
            </div>
          </div>
        </section>
        <div
          style={{
            borderTop: "1px solid #414732",
            borderBottom: "1px solid #414732",
            overflow: "hidden",
            padding: "17px 0",
            color: "#d5ff3f",
            font: "600 12px 'Space Grotesk'",
            letterSpacing: ".16em",
            textTransform: "uppercase",
          }}
        >
          <div className="ticker">
            MERN STACK · PRODUCT THINKING · CREATIVE TECHNOLOGY · MERN STACK ·
            PRODUCT THINKING · CREATIVE TECHNOLOGY ·{" "}
          </div>
        </div>
        <section
          id="work"
          style={{
            maxWidth: 1350,
            padding: "125px clamp(22px, 5vw, 74px)",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
              gap: 20,
              marginBottom: 50,
            }}
          >
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}>
                02 / Selected work
              </div>
              <h2
                className="display"
                style={{
                  fontSize: "clamp(3.5rem, 7vw, 7.5rem)",
                  lineHeight: 0.88,
                  margin: 0,
                }}
              >
                MADE
                <br />
                <span style={{ color: "#6c7447" }}>WITH INTENT.</span>
              </h2>
            </div>
            <div style={{ display: "flex", alignItems: "end", gap: 24 }}>
              <span
                style={{
                  color: "#8e927e",
                  fontSize: 12,
                  maxWidth: 170,
                  lineHeight: 1.6,
                }}
              >
                A selection of deployed and in-progress products I’ve built.
              </span>
              <div
                className="slider-controls"
                aria-label="Project slider controls"
              >
                <button
                  className="slider-button"
                  type="button"
                  onClick={() => slideProjects(-1)}
                  aria-label="Previous project"
                >
                  ←
                </button>
                <button
                  className="slider-button"
                  type="button"
                  onClick={() => slideProjects(1)}
                  aria-label="Next project"
                >
                  →
                </button>
              </div>
            </div>
          </div>
          <div className="project-viewport glass-panel">
            <div className="project-track" ref={projectTrackRef}>
              {DATA.projects.map((project, index) => (
                <article className="proj-card" key={project.name}>
                  <div className="project-image">
                    <img src={project.image} alt={project.name} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 15,
                      alignItems: "start",
                    }}
                  >
                    <div>
                      <div
                        className="eyebrow"
                        style={{ color: "#8e927e", marginBottom: 9 }}
                      >
                        0{index + 1} / {project.type}
                      </div>
                      <h3
                        className="display"
                        style={{
                          margin: 0,
                          fontSize: 26,
                          letterSpacing: "-.05em",
                        }}
                      >
                        {project.name}
                      </h3>
                      <div
                        style={{ color: "#6c7447", fontSize: 11, marginTop: 8 }}
                      >
                        {project.period}
                      </div>
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: "#d5ff3f",
                          fontSize: 23,
                          textDecoration: "none",
                        }}
                      >
                        ↗
                      </a>
                    )}
                  </div>
                  <p
                    style={{
                      color: "#9da18d",
                      fontSize: 13,
                      lineHeight: 1.65,
                      maxWidth: 440,
                      margin: "16px 0",
                    }}
                  >
                    {project.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                    {project.tech.map((item) => (
                      <span className="pill" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          id="about"
          style={{
            background: "#d5ff3f",
            color: "#11130f",
            padding: "105px clamp(22px, 5vw, 74px)",
          }}
        >
          <div
            style={{
              maxWidth: 1350,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.1fr) minmax(260px, .9fr)",
              gap: 80,
              alignItems: "end",
            }}
          >
            <div>
              <div
                className="eyebrow"
                style={{ color: "#3c4817", marginBottom: 20 }}
              >
                03 / The person behind the pixels
              </div>
              <h2
                className="display"
                style={{
                  fontSize: "clamp(3.4rem, 7vw, 8rem)",
                  lineHeight: 0.86,
                  margin: 0,
                }}
              >
                CURIOUS
                <br />
                BY DEFAULT.
              </h2>
            </div>
            <div>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.7,
                  maxWidth: 420,
                  margin: "0 0 35px",
                }}
              >
                {DATA.about}
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 14,
                  borderTop: "1px solid #899e28",
                  paddingTop: 20,
                }}
                className="stat-grid"
              >
                {[
                  ["9.22", "CPI"],
                  ["04", "Projects"],
                  ["2027", "Graduating"],
                ].map(([number, label]) => (
                  <div key={label}>
                    <strong className="display" style={{ fontSize: 30 }}>
                      {number}
                    </strong>
                    <div
                      style={{
                        fontSize: 10,
                        textTransform: "uppercase",
                        letterSpacing: ".1em",
                        marginTop: 6,
                      }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="glass-panel"
                style={{
                  marginTop: 28,
                  padding: "18px 20px",
                  color: "#11130f",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    marginBottom: 14,
                  }}
                >
                  Education
                </div>
                {DATA.education.map((item) => (
                  <div
                    key={item.exam}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto",
                      gap: 12,
                      padding: "10px 0",
                      borderTop: "1px solid #899e28",
                      fontSize: 12,
                    }}
                  >
                    <div>
                      <strong>{item.exam}</strong>
                      <div style={{ marginTop: 3, opacity: 0.72 }}>
                        {item.field} / {item.institute}
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <strong>{item.result}</strong>
                      <div style={{ marginTop: 3, opacity: 0.72 }}>
                        {item.period}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section
          style={{
            maxWidth: 1350,
            padding: "125px clamp(22px, 5vw, 74px)",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: "clamp(40px, 10vw, 180px)",
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>
              04 / Capabilities
            </div>
            <h2
              className="display"
              style={{
                fontSize: "clamp(3.4rem, 6vw, 6.5rem)",
                lineHeight: 0.87,
                margin: 0,
              }}
            >
              HOW I<br />
              <span style={{ color: "#6c7447" }}>WORK.</span>
            </h2>
          </div>
          <div>
            {DATA.skills.map((skill, index) => (
              <div
                key={skill.group}
                style={{
                  borderTop: "1px solid #414732",
                  padding: "22px 0",
                  display: "grid",
                  gridTemplateColumns: "70px 1fr",
                  gap: 20,
                }}
              >
                <span style={{ color: "#d5ff3f", fontSize: 11 }}>
                  0{index + 1}
                </span>
                <div>
                  <h3
                    className="display"
                    style={{ fontSize: 23, margin: "0 0 12px" }}
                  >
                    {skill.group}
                  </h3>
                  <p
                    style={{
                      color: "#aeb19c",
                      margin: 0,
                      fontSize: 14,
                      lineHeight: 1.7,
                    }}
                  >
                    {skill.items.join("  /  ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section
          style={{
            borderTop: "1px solid #414732",
            maxWidth: 1350,
            padding: "100px clamp(22px, 5vw, 74px) 130px",
            margin: "0 auto",
          }}
        >
          <div className="eyebrow" style={{ marginBottom: 20 }}>
            05 / Experience
          </div>
          {DATA.experience.map((item, index) => (
            <div
              key={item.role}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr auto",
                gap: 20,
                borderTop: index ? "1px solid #414732" : 0,
                padding: "24px 0",
                alignItems: "start",
              }}
            >
              <span style={{ color: "#d5ff3f", fontSize: 12 }}>
                0{index + 1}
              </span>
              <div>
                <h3
                  className="display"
                  style={{ fontSize: 24, margin: "0 0 6px" }}
                >
                  {item.role}
                </h3>
                <div style={{ color: "#9da18d", fontSize: 13 }}>{item.org}</div>
                <p
                  style={{
                    color: "#aeb19c",
                    fontSize: 13,
                    lineHeight: 1.65,
                    maxWidth: 650,
                    margin: "12px 0 0",
                  }}
                >
                  {item.desc}
                </p>
              </div>
              <span
                style={{ color: "#9da18d", fontSize: 11, textAlign: "right" }}
              >
                {item.period}
              </span>
            </div>
          ))}
        </section>
        <section
          id="contact"
          style={{
            background: "#252b19",
            padding: "110px clamp(22px, 5vw, 74px) 45px",
          }}
        >
          <div style={{ maxWidth: 1350, margin: "0 auto" }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>
              06 / Start a conversation
            </div>
            <h2
              className="display"
              style={{
                fontSize: "clamp(4rem, 10vw, 11rem)",
                lineHeight: 0.8,
                margin: "0 0 55px",
                maxWidth: 1000,
              }}
            >
              LET’S MAKE
              <br />
              <span style={{ color: "#d5ff3f" }}>SOMETHING.</span>
            </h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "end",
                gap: 30,
                flexWrap: "wrap",
                borderTop: "1px solid #59602f",
                paddingTop: 24,
              }}
            >
              <a className="outline-button" href={`mailto:${DATA.email}`}>
                {DATA.email} <span>↗</span>
              </a>
              <div style={{ display: "flex", gap: 20 }}>
                <a
                  href={`https://${DATA.github}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#d5ff3f",
                    fontSize: 12,
                    textDecoration: "none",
                  }}
                >
                  GitHub ↗
                </a>
                <a
                  href={`https://${DATA.linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#d5ff3f",
                    fontSize: 12,
                    textDecoration: "none",
                  }}
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
            <footer
              style={{
                color: "#89905c",
                fontSize: 10,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                marginTop: 105,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>© {new Date().getFullYear()} Aman Kumar</span>
              <span>Built with React / Curiosity</span>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
