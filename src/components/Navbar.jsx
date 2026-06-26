import './Navbar.css';

function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <span className="navbar-logo">mahip.dev</span>
      <div className="navbar-links">
        <button onClick={() => scrollTo('about')}>About</button>
        <button onClick={() => scrollTo('skills')}>Skills</button>
        <button onClick={() => scrollTo('projects')}>Projects</button>
        <button onClick={() => scrollTo('contact')}>Contact</button>
      </div>
    </nav>
  );
}

export default Navbar;
