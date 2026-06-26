import './Skills.css';

const skillGroups = [
  {
    cat: 'Frontend',
    tags: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'JavaScript ES6+', 'Context API', 'React Router', 'Responsive Design'],
  },
  {
    cat: 'Backend',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Firebase', 'Firestore'],
  },
  {
    cat: 'AI & APIs',
    tags: ['Groq API', 'Llama 3.3 70B', 'LLM Prompting', 'OpenStreetMap'],
  },
  {
    cat: 'Tools',
    tags: ['Git', 'GitHub', 'Render', 'VS Code', 'Firebase Deploy', 'Chrome Extensions API'],
  },
];

function Skills() {
  return (
    <section className="section" id="skills">
      <p className="section-label">02 / skills</p>
      <h2 className="section-title">What I work with</h2>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.cat}>
            <p className="skill-cat">{group.cat}</p>
            <div className="skill-tags">
              {group.tags.map((tag) => (
                <span className="skill-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
