import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Server,
  ShieldCheck,
  Sparkles,
  Sun,
  Terminal,
  Trophy,
  X,
} from "lucide-react";
import {
  aboutSummary,
  achievements,
  education,
  experience,
  landingIntro,
  mission,
  navLinks,
  personalInfo,
  projects,
  skillCategories,
} from "./data/portfolioData";
import "./App.css";

const iconMap = { Server, Code2, Sparkles, ShieldCheck, BriefcaseBusiness };

// Prefix public asset paths with Vite's configured base path.
const assetUrl = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const terminalLines = [
  ["proxy", "JWT verified", "role check passed · CORS ok"],
  ["gateway", "REST request", "SOAP envelope built"],
  ["backend", "SOAP response", "200 OK"],
  ["gateway", "SOAP → REST JSON", "DTO mapped"],
  ["ui", "session active", "timeout watch on"],
  ["review", "commit event", "critique queued"],
  ["rag", "pgvector search", "context loaded"],
];

const themes = [
  { id: "light", label: "Light", Icon: Sun },
  { id: "terminal", label: "Terminal", Icon: Terminal },
  { id: "dark", label: "Dark", Icon: Moon },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState("All");
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("portfolio-theme") || "dark";
    } catch {
      return "dark";
    }
  });
  const [logIndex, setLogIndex] = useState(0);
  const [staticTerminal, setStaticTerminal] = useState(false);

  const logHistory = staticTerminal
    ? terminalLines
    : Array.from(
        { length: 5 },
        (_, index) => terminalLines[(logIndex + index) % terminalLines.length],
      );

  const filters = ["All", "Frontend", "Backend", "AI"];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) {
      themeMeta.content =
        theme === "light"
          ? "#f6f7f9"
          : theme === "terminal"
            ? "#070b08"
            : "#0a1628";
    }

    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // Browser storage can be disabled.
    }
  }, [theme]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStaticTerminal(true);
      return undefined;
    }

    const interval = window.setInterval(
      () => setLogIndex((index) => index + 1),
      1700,
    );

    return () => window.clearInterval(interval);
  }, []);

  const visibleProjects = projects.filter((project) => {
    if (projectFilter === "All") return true;

    const text =
      `${project.title} ${project.subtitle} ${project.description} ${project.technologies.join(" ")}`.toLowerCase();

    return projectFilter === "Frontend"
      ? /react|frontend|portal|ui/.test(text)
      : projectFilter === "Backend"
        ? /spring|java|api|middleware|proxy|security/.test(text)
        : /ai|ollama|rag|llm|langchain|pgvector/.test(text);
  });

  return (
    <div className="app">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header">
        <a className="brand" href="#landing" aria-label="Lokesh Adireddi home">
          <span className="brand-mark">{personalInfo.logoInitials}</span>
          <span>
            Lokesh Adireddi<span className="brand-dot">.</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav
          className={menuOpen ? "nav-links open" : "nav-links"}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-tools">
          <div className="theme-switcher" role="group" aria-label="Colour theme">
            {themes.map(({ id, label, Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => setTheme(id)}
                aria-label={`${label} theme`}
                aria-pressed={theme === id}
                title={`${label} theme`}
              >
                <Icon size={15} />
              </button>
            ))}
          </div>

          <a className="header-contact" href="#contact">
            Let’s talk <ArrowUpRight size={16} />
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="hero section" id="landing">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> Available for opportunities
            </div>
            <p className="hero-kicker">Hello, I’m</p>
            <h1>
              Lokesh
              <br />
              <span className="main-surname">Adireddi</span>
            </h1>
            <p className="hero-role">
              Java Full Stack Developer <span>·</span> Generative AI
            </p>
            <p className="hero-description">{landingIntro}</p>
            <p className="hero-quote">“Legacy systems, modern interfaces.”</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowDown size={17} />
              </a>
              <a
                className="button button-quiet"
                href={assetUrl(personalInfo.resumeUrl)}
                target="_blank"
                rel="noreferrer"
              >
                <Download size={17} /> Download résumé
              </a>
            </div>

            <div className="hero-socials">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
              <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                <Mail />
              </a>
              <span className="hero-location">
                <MapPin size={15} /> {personalInfo.location}
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="portrait-frame">
              <img
                src={assetUrl("/images/profile/head-shot-img.jpg")}
                alt="Portrait of Lokesh Adireddy"
              />
            </div>
            <div className="hero-chip chip-top">
              <Code2 size={16} /> Full Stack
            </div>
            <div className="hero-chip chip-bottom">
              <Sparkles size={16} /> AI Engineering
            </div>
            <div className="hero-caption">
              Building software
              <br />
              <strong>that moves ideas forward.</strong>
            </div>
            <div className="terminal-panel" aria-hidden="true">
              <div className="terminal-heading">
                <span />
                <span />
                <span />
                <b>production.log — tail -f</b>
              </div>
              <pre>
                {logHistory.map(([tag, message, detail], index) => (
                  <span className="terminal-line" key={`${tag}-${index}`}>
                    <strong>[{tag}]</strong> {message} · <em>{detail}</em>
                  </span>
                ))}
                <i className="terminal-cursor" />
              </pre>
            </div>
          </div>

          <a className="scroll-cue" href="#about">
            Scroll to explore
          </a>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">A little about me</p>
            <h2>
              Engineering with <span>purpose.</span>
            </h2>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p>{aboutSummary}</p>
              <div className="mission-card">
                <Sparkles size={20} />
                <div>
                  <strong>My mission</strong>
                  <p>{mission}</p>
                </div>
              </div>
            </div>
            <div className="stat-grid">
              <div className="stat-card">
                <strong>
                  2<span>+</span>
                </strong>
                <p>Years of experience</p>
              </div>
              <div className="stat-card">
                <strong>
                  6<span>+</span>
                </strong>
                <p>Enterprise &amp; AI projects</p>
              </div>
              <div className="stat-card">
                <strong>
                  30<span>%</span>
                </strong>
                <p>Faster UI delivery</p>
              </div>
              <div className="stat-card">
                <strong>5</strong>
                <p>Sports certificates</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">Where I’ve worked</p>
            <h2>
              Experience that <span>scales.</span>
            </h2>
            <p className="section-lede">
              Building reliable products and practical tools with teams that
              care about quality.
            </p>
          </div>
          <div className="timeline">
            {experience.map((job) => (
              <article className="timeline-card" key={job.company}>
                <div className="timeline-marker">
                  <BriefcaseBusiness size={18} />
                </div>
                <div className="timeline-top">
                  <div>
                    <h3>{job.designation}</h3>
                    <p className="company">
                      {job.company} <span>· {job.type}</span>
                    </p>
                  </div>
                  <span className="date-pill">{job.duration}</span>
                </div>
                <p className="muted">
                  <MapPin size={15} /> {job.location}
                </p>
                <ul className="detail-list">
                  {job.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="highlight-box">
                  <strong>Highlights</strong>
                  {job.achievements.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="section-heading">
            <p className="eyebrow">Learning foundation</p>
            <h2>
              Education &amp; <span>growth.</span>
            </h2>
          </div>
          <div className="education-grid">
            {education.map((item) => (
              <article className="education-card" key={item.institution}>
                <span className="card-icon">
                  <Code2 />
                </span>
                <span className="date-pill">{item.duration}</span>
                <h3>{item.qualification}</h3>
                <p className="company">{item.institution}</p>
                <ul className="detail-list">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>
              Projects built to <span>solve.</span>
            </h2>
            <p className="section-lede">
              A selection of enterprise platforms, integrations, and developer
              tools.
            </p>
          </div>
          <div className="filter-row" role="group" aria-label="Filter projects">
            {filters.map((filter) => (
              <button
                className={
                  projectFilter === filter
                    ? "filter-button active"
                    : "filter-button"
                }
                key={filter}
                onClick={() => setProjectFilter(filter)}
                aria-pressed={projectFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="project-grid">
            {visibleProjects.map((project, index) => (
              <article className="project-card" key={project.id}>
                <div className="project-card-top">
                  <span className="project-index">0{index + 1}</span>
                  <span className="project-type">{project.type}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>
                <ul className="detail-list">
                  {project.outcomes.slice(0, 2).map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
                <div className="tech-list">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">My toolkit</p>
            <h2>
              Skills &amp; <span>technology.</span>
            </h2>
            <p className="section-lede">
              A practical stack for building secure, polished, production-ready
              systems.
            </p>
          </div>
          <div className="skills-grid">
            {skillCategories.map((category) => {
              const Icon = iconMap[category.icon] || Code2;
              return (
                <article className="skill-card" key={category.title}>
                  <div className="skill-title">
                    <span className="card-icon">
                      <Icon />
                    </span>
                    <h3>{category.title}</h3>
                  </div>
                  <div className="skill-list">
                    {category.skills.map((skill) => (
                      <div className="skill" key={skill.name}>
                        <div className="skill-label">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="skill-track">
                          <span style={{ width: `${skill.level}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section achievement-section" id="achievements">
          <div className="section-heading">
            <p className="eyebrow">Beyond the day job</p>
            <h2>
              Milestones &amp; <span>recognition.</span>
            </h2>
          </div>
          <div className="achievement-grid">
            {achievements.map((item) => (
              <article className="achievement-card" key={item.title}>
                {item.image ? (
                  <img
                    className="achievement-image"
                    src={assetUrl(item.image)}
                    alt="Ball badminton award certificate"
                    loading="lazy"
                  />
                ) : (
                  <span className="achievement-icon">
                    {item.icon === "Trophy" ? <Trophy /> : <Check />}
                  </span>
                )}
                <div>
                  <span className="achievement-meta">
                    {item.category} · {item.year}
                  </span>
                  <h3>{item.title}</h3>
                  <p className="company">{item.institution}</p>
                  <p className="project-description">{item.description}</p>
                  {item.gallery && (
                    <div className="gallery">
                      {item.gallery.map((src) => (
                        <a
                          key={src}
                          href={assetUrl(src)}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={assetUrl(src)}
                            alt="Additional ball badminton award certificate"
                            loading="lazy"
                          />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-panel">
            <div>
              <p className="eyebrow">Have a project in mind?</p>
              <h2>
                Let’s build something <span>meaningful.</span>
              </h2>
              <p className="section-lede">
                I’m open to conversations about full-stack engineering, AI
                tooling, and thoughtful product work.
              </p>
              <div className="contact-links">
                <a href={`mailto:${personalInfo.email}`}>
                  <Mail size={18} />
                  {personalInfo.email}
                  <ArrowUpRight size={16} />
                </a>
                <a href={`tel:${personalInfo.phone.replaceAll(" ", "")}`}>
                  <Phone size={18} />
                  {personalInfo.phone}
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
            <a
              className="button button-primary contact-cta"
              href={`mailto:${personalInfo.email}?subject=Let%27s%20work%20together`}
            >
              Start a conversation <ArrowUpRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#landing">
          <span className="brand-mark">AL</span>
          <span>
            Lokesh Adireddi<span className="brand-dot">.</span>
          </span>
        </a>
        <p>Designed and built with care.</p>
        <div className="footer-links">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>
          <a href={`mailto:${personalInfo.email}`} aria-label="Email">
            <Mail />
          </a>
        </div>
        <span className="copyright">
          © {new Date().getFullYear()} Lokesh Adireddi
        </span>
      </footer>
    </div>
  );
}

export default App;