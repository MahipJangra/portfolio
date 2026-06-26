import './Contact.css';

function Contact() {
  return (
    <section className="section" id="contact">
      <p className="section-label">04 / contact</p>
      <h2 className="section-title">Let's connect</h2>
      <div className="contact-box">
        <p className="contact-email">mahipjangra8@gmail.com</p>
        <p className="contact-sub">Open to frontend roles, collaborations, and interesting projects.</p>
        <div className="contact-links">
          <a href="mailto:mahipjangra8@gmail.com" className="contact-link">
            Email me
          </a>
          <a href="https://github.com/MahipJangra" target="_blank" rel="noreferrer" className="contact-link">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/mahip-jangra-74649730a/" target="_blank" rel="noreferrer" className="contact-link">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
