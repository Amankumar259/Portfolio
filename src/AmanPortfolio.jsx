import { useEffect, useRef, useState } from "react";

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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; } body { margin: 0; } html { scroll-behavior: smooth; }
        ::selection { color: #11130f; background: #d5ff3f; } ::-webkit-scrollbar { width: 7px; } ::-webkit-scrollbar-track { background: #11130f; } ::-webkit-scrollbar-thumb { background: #566323; border-radius: 10px; }
        .site-nav { position: absolute; z-index: 5; top: 18px; left: clamp(16px, 4vw, 58px); right: clamp(16px, 4vw, 58px); display: flex; justify-content: space-between; align-items: center; padding: 12px 16px 12px 20px; border: 1px solid rgba(213,255,63,.2); border-radius: 14px; background: linear-gradient(105deg, rgba(52,63,42,.62), rgba(17,19,15,.32)); box-shadow: inset 0 1px rgba(242,242,233,.14), 0 16px 45px rgba(0,0,0,.18); backdrop-filter: blur(20px) saturate(125%); -webkit-backdrop-filter: blur(20px) saturate(125%); }
        main { position: relative; z-index: 1; }
        .ambient-layer { position: fixed; z-index: 0; inset: 0; overflow: hidden; pointer-events: none; }
        .ambient-orb { position: absolute; width: clamp(150px, 24vw, 360px); aspect-ratio: 1; border-radius: 50%; filter: blur(54px); opacity: .18; mix-blend-mode: screen; will-change: transform, opacity; animation: ambient-drift 18s ease-in-out infinite, ambient-pulse 7s ease-in-out infinite; }
        .ambient-orb:nth-child(1) { top: 5%; left: -5%; background: #d5ff3f; animation-delay: -2s, -1s; }
        .ambient-orb:nth-child(2) { top: 24%; right: -8%; width: clamp(180px, 28vw, 420px); background: #55d7ff; animation-delay: -8s, -4s; }
        .ambient-orb:nth-child(3) { top: 43%; left: 30%; width: clamp(120px, 18vw, 270px); background: #ff6b9d; animation-delay: -12s, -2s; }
        .ambient-orb:nth-child(4) { top: 61%; left: -7%; width: clamp(190px, 30vw, 450px); background: #ffb45c; animation-delay: -5s, -5s; }
        .ambient-orb:nth-child(5) { top: 78%; right: 12%; width: clamp(140px, 22vw, 320px); background: #b78cff; animation-delay: -15s, -3s; }
        .ambient-orb:nth-child(6) { top: 94%; left: 42%; width: clamp(170px, 26vw, 390px); background: #8effbd; animation-delay: -10s, -6s; }
        @keyframes ambient-drift { 0%, 100% { transform: translate3d(-3vw, -2vh, 0) scale(.86); } 33% { transform: translate3d(4vw, 3vh, 0) scale(1.08); } 66% { transform: translate3d(-2vw, 6vh, 0) scale(.94); } }
        @keyframes ambient-pulse { 0%, 100% { opacity: .1; } 50% { opacity: .24; } }
        .cursor-layer { position: fixed; z-index: 20; inset: 0; pointer-events: none; overflow: hidden; --pointer-x: 50vw; --pointer-y: 40vh; }
        .cursor-line { position: absolute; left: var(--pointer-x); top: var(--pointer-y); width: clamp(110px, 15vw, 240px); height: 30px; border-top: 2px solid currentColor; border-radius: 50% 50% 0 0; background: transparent; transform-origin: 0 50%; opacity: .7; box-shadow: 0 -2px 10px currentColor; will-change: transform; }
        .cursor-line:nth-child(1) { color: #d5ff3f; background: currentColor; animation: water-flow-one 4.8s ease-in-out infinite; }
        .cursor-line:nth-child(2) { color: #ff6b9d; background: currentColor; animation: water-flow-two 5.6s ease-in-out -.9s infinite; }
        .cursor-line:nth-child(3) { color: #6be7ff; background: currentColor; animation: water-flow-three 5.1s ease-in-out -1.7s infinite; }
        .cursor-line:nth-child(4) { color: #ffb45c; background: currentColor; animation: water-flow-four 6.2s ease-in-out -2.4s infinite; }
        .cursor-line:nth-child(5) { color: #c89cff; background: currentColor; animation: water-flow-five 5.4s ease-in-out -3.1s infinite; opacity: .42; }
        @keyframes water-flow-one { 0%, 100% { transform: translate3d(-18px, -21px, 0) rotate(-17deg) scale(.84, .7); } 50% { transform: translate3d(-4px, -10px, 0) rotate(-7deg) scale(1.08, 1.35); } }
        @keyframes water-flow-two { 0%, 100% { transform: translate3d(-8px, -8px, 0) rotate(-8deg) scale(1.08, 1.25); } 50% { transform: translate3d(-22px, 2px, 0) rotate(4deg) scale(.82, .65); } }
        @keyframes water-flow-three { 0%, 100% { transform: translate3d(-3px, 7px, 0) rotate(5deg) scale(.8, .65); } 50% { transform: translate3d(-17px, 19px, 0) rotate(15deg) scale(1.12, 1.35); } }
        @keyframes water-flow-four { 0%, 100% { transform: translate3d(-14px, 21px, 0) rotate(15deg) scale(1.1, 1.3); } 50% { transform: translate3d(2px, 31px, 0) rotate(25deg) scale(.78, .62); } }
        @keyframes water-flow-five { 0%, 100% { transform: translate3d(-30px, 32px, 0) rotate(24deg) scale(.78, .65); } 50% { transform: translate3d(-8px, 43px, 0) rotate(34deg) scale(1.08, 1.35); } }
        .nav-link { background: none; border: 0; cursor: pointer; color: #9b9f89; font: 500 12px 'DM Sans', sans-serif; letter-spacing: .12em; text-transform: uppercase; padding: 8px 14px; transition: color .2s; }
        .nav-link:hover { color: #d5ff3f; } .menu-button { display: none; background: none; color: #d5ff3f; border: 1px solid #53621e; padding: 9px 12px; font: 600 11px 'DM Sans', sans-serif; letter-spacing: .1em; text-transform: uppercase; }
        .eyebrow { color: #d5ff3f; font: 600 11px 'DM Sans', sans-serif; letter-spacing: .16em; text-transform: uppercase; } .display { font-family: 'Space Grotesk', sans-serif; font-weight: 500; letter-spacing: -.075em; }
        .hero-grid { position: absolute; inset: 0; pointer-events: none; opacity: .23; background-image: linear-gradient(rgba(213,255,63,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(213,255,63,.18) 1px, transparent 1px); background-size: 75px 75px; mask-image: linear-gradient(90deg, black, transparent 72%); }
        .glass-panel { background: linear-gradient(135deg, rgba(39,48,33,.68), rgba(17,19,15,.45)); border: 1px solid rgba(213,255,63,.18); box-shadow: inset 0 1px rgba(242,242,233,.1), 0 24px 70px rgba(0,0,0,.16); backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); }
        .image-panel { position: relative; min-height: 505px; background: #273021; overflow: hidden; } .image-panel::after { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(213,255,63,.12), transparent 45%, rgba(10,12,9,.45)); mix-blend-mode: screen; }
        .image-panel img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(1) contrast(1.12); mix-blend-mode: luminosity; opacity: .9; } .project-viewport { overflow: hidden; padding: 2px 1px 18px; } .project-track { display: flex; gap: 28px; overflow-x: auto; scroll-behavior: smooth; scroll-snap-type: x mandatory; scrollbar-width: none; } .project-track::-webkit-scrollbar { display: none; }
        .proj-card { position: relative; flex: 0 0 calc(50% - 14px); scroll-snap-align: start; border-top: 1px solid #535a40; padding: 16px; transition: transform .3s ease, border-color .3s ease; border-radius: 2px; } .proj-card:hover { transform: translateY(-8px); border-color: #d5ff3f; }
        .project-image { aspect-ratio: 1.35 / 1; overflow: hidden; background: #23281a; margin-bottom: 17px; border: 1px solid rgba(213,255,63,.12); } .project-image img { width: 100%; height: 100%; object-fit: cover; filter: saturate(.7); transition: transform .5s ease, filter .5s ease; } .proj-card:hover .project-image img { transform: scale(1.05); filter: saturate(1); }
        .pill { display: inline-flex; color: #d5ff3f; border: 1px solid #64752a; padding: 6px 9px; font-size: 10px; letter-spacing: .09em; text-transform: uppercase; background: rgba(213,255,63,.04); } .slider-controls { display: flex; gap: 8px; } .slider-button { width: 42px; height: 42px; border: 1px solid #64752a; background: rgba(213,255,63,.04); color: #d5ff3f; cursor: pointer; font-size: 20px; transition: background .2s, color .2s; } .slider-button:hover { background: #d5ff3f; color: #11130f; } .outline-button { display: inline-flex; align-items: center; gap: 16px; border: 1px solid #69753b; padding: 14px 17px; color: #f2f2e9; text-decoration: none; font-size: 12px; text-transform: uppercase; letter-spacing: .1em; transition: background .2s, color .2s; } .outline-button:hover { background: #d5ff3f; color: #11130f; }
        .ticker { white-space: nowrap; animation: drift 22s linear infinite; } @keyframes drift { to { transform: translateX(-50%); } }
        @media (max-width: 700px), (pointer: coarse) { .cursor-layer { display: none; } .site-nav { top: 12px; left: 14px; right: 14px; padding: 10px 12px 10px 16px; } .menu-button { display: block; } .nav-menu { display: flex !important; position: absolute; top: calc(100% + 8px); right: 0; flex-direction: column; align-items: flex-end; background: rgba(25,29,20,.78); border: 1px solid rgba(213,255,63,.2); border-radius: 12px; padding: 8px; box-shadow: 0 16px 35px rgba(0,0,0,.2); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); } .nav-menu.closed { display: none !important; } .hero-copy { padding-top: 130px !important; } .hero-title { font-size: clamp(4rem, 20vw, 7rem) !important; } .image-panel { min-height: 340px; } .stat-grid { grid-template-columns: repeat(2, 1fr) !important; } .proj-card { flex-basis: 86%; } }
        @media (max-width: 700px), (pointer: coarse) { .ambient-orb { filter: blur(42px); opacity: .12; } }
        @media (prefers-reduced-motion: reduce) { .cursor-layer { display: none; } .ambient-orb { animation: none; } }
      `}</style>
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
