import './About.css';

const stats = [
  { num: '3+', label: 'Projects Shipped' },
  { num: 'SIH', label: '2025 Participant' },
  { num: 'MERN', label: 'Stack' },
];

function About() {
  return (
    <section className="section" id="about">
      <p className="section-label">01 / about</p>
      <h2 className="section-title">Who I am</h2>
      <p className="about-text">
        BSc Computer Science student at Guru Jambheshwar University with a passion for
        building polished, production-ready web apps. I love working on the frontend —
        crafting UIs that feel great to use — and I'm actively growing my MERN stack
        skills. I participated in Smart India Hackathon 2025 where I owned the entire
        frontend for our team's project at university level.
      </p>
      <div className="stats-grid">
        {stats.map((s) => (
          <div className="stat-box" key={s.label}>
            <span className="stat-num">{s.num}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
