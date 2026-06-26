import './Hero.css';

function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <p className="hero-tag">// hello, world</p>
      <h1 className="hero-name">
        Mahip Jangra<span className="cursor" aria-hidden="true" />
      </h1>
      <p className="hero-sub">
        Frontend Developer building with React &amp; MERN stack.<br />
        Turning ideas into clean, fast, real-world web apps.
      </p>
      <div className="hero-btns">
        <button className="btn-primary" onClick={() => scrollTo('projects')}>
          View Projects
        </button>
        <button className="btn-ghost" onClick={() => scrollTo('contact')}>
          Get in Touch
        </button>
      </div>
    </section>
  );
}

export default Hero;
