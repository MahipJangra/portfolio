import "./Projects.css";

const projects = [
  {
    name: "Smart India Hackathon 2025",
    badge: "University Level",
    badgeType: "sih",
    desc: "Led complete frontend development for our SIH 2025 project. Built a responsive React UI, integrated REST APIs with the backend team, and delivered a polished interface under tight hackathon deadlines.",
    stack: ["React.js", "REST APIs", "Team Project", "Hackathon"],
    link: null,
  },
  {
    name: "Launchpad — AI Startup Roadmap Generator",
    badge: "Live ↗",
    badgeType: "live",
    desc: "Full-stack AI SaaS app that converts startup ideas into structured 8-tab business roadmaps. Multi-step conversational UI with suggestion chips, global state via Context API, and Groq LLM backend integration.",
    stack: ["React.js", "Node.js", "Express.js", "Groq API", "Context API"],
    link: "https://launchpad-frontend-fvqh.onrender.com",
  },
  {
    name: "QR Forge — Chrome Extension",
    badge: "Demo ↗",
    badgeType: "live",
    desc: "Published Chrome extension for real-time QR code generation with URL/vCard support and one-click PNG export. Demonstrates browser extension architecture, DOM manipulation, and shipping real software.",
    stack: ["JavaScript", "HTML/CSS", "Chrome API", "QRCode.js"],
    link: "https://www.linkedin.com/posts/mahip-jangra-74649730a_chromeextension-webdevelopment-javascript-activity-7438508630171176960-4GWe",
  },
];

function Projects() {
  return (
    <section className="section" id="projects">
      <p className="section-label">03 / projects</p>
      <h2 className="section-title">Things I've built</h2>

      <div className="projects-list">
        {projects.map((p) =>
          p.link ? (
            <a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`proj-card ${
                p.badgeType === "sih" ? "proj-card--sih" : ""
              }`}
            >
              <div className="proj-header">
                <h3 className="proj-name">{p.name}</h3>

                <span className={`proj-badge proj-badge--${p.badgeType}`}>
                  {p.badge}
                </span>
              </div>

              <p className="proj-desc">{p.desc}</p>

              <div className="proj-stack">
                {p.stack.map((tag) => (
                  <span className="proj-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ) : (
            <div
              key={p.name}
              className={`proj-card proj-card--sih`}
            >
              <div className="proj-header">
                <h3 className="proj-name">{p.name}</h3>

                <span className="proj-badge proj-badge--sih">
                  {p.badge}
                </span>
              </div>

              <p className="proj-desc">{p.desc}</p>

              <div className="proj-stack">
                {p.stack.map((tag) => (
                  <span className="proj-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default Projects;
