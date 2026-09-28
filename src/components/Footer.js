import { NavLink } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/', id: 'home' },
  { label: 'About', path: '/about', id: 'about' },
  { label: 'Expertise', path: '/expertise', id: 'expertise' },
  { label: 'Skills', path: '/skills', id: 'skills' },
  { label: 'Experience', path: '/experience', id: 'experience' },
  { label: 'Projects', path: '/projects', id: 'projects' },
  { label: 'Education', path: '/education', id: 'education' },
  { label: 'Contact', path: '/contact', id: 'contact' },
];

const socials = [
  { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/krishna-vamsi-503986249', label: 'LinkedIn' },
  { icon: 'fab fa-github', href: 'https://github.com/krishnavamsinalluri', label: 'GitHub' },
  { icon: 'fas fa-envelope', href: 'mailto:vamsinalluri806@gmail.com', label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Column 1: Brand & Bio */}
          <div>
            <NavLink to="/" className="footer-logo navbar-brand" onClick={scrollToTop}>
              <div className="logo-badge" style={{ display: 'inline-flex', width: '28px', height: '28px', fontSize: '14px', borderRadius: '8px', marginRight: '6px' }}>KV</div>
              Krishna <span style={{ color: 'var(--accent-cyan)' }}>Vamsi</span>
            </NavLink>
            <p className="footer-bio">
              Software Engineer specializing in Angular, React.js, Next.js, and TypeScript. Engineering clean, intuitive, and responsive web experiences.
            </p>
            <div className="hero-socials">
              {socials.map(({ icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" title={label} className="social-link" style={{ width: '36px', height: '36px', fontSize: '15px' }}>
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="footer-links-title">Quick Navigation</h4>
            <ul className="footer-links-list">
              {navLinks.slice(0, 5).map(({ label, path }) => (
                <li key={path}>
                  <NavLink to={path}>{label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Resume */}
          <div>
            <h4 className="footer-links-title">Get in Touch</h4>
            <ul className="footer-links-list" style={{ marginBottom: '16px' }}>
              <li>
                <i className="fas fa-map-marker-alt" style={{ marginRight: '8px', color: 'var(--accent-violet-light)' }}></i>
                Hyderabad, India
              </li>
              <li>
                <i className="fas fa-envelope" style={{ marginRight: '8px', color: 'var(--accent-cyan-light)' }}></i>
                <a href="mailto:vamsinalluri806@gmail.com">vamsinalluri806@gmail.com</a>
              </li>
              <li>
                <i className="fas fa-phone" style={{ marginRight: '8px', color: '#10b981' }}></i>
                <a href="tel:+919573660370">+91 9573660370</a>
              </li>
            </ul>

            <a 
              href="/assets/pdf/Krishna_Vamsi_Resume.pdf" 
              className="btn-outline" 
              style={{ padding: '8px 16px', fontSize: '13px' }}
              download
            >
              <i className="fas fa-download"></i> Download CV
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} <strong>Krishna Vamsi Nalluri</strong>. All rights reserved.</p>
          <p>
            Built with React &amp; Framer Motion
            <button 
              onClick={scrollToTop}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                padding: '4px 10px',
                borderRadius: '6px',
                marginLeft: '12px',
                cursor: 'pointer',
                fontSize: '12px'
              }}
            >
              <i className="fas fa-arrow-up"></i> Top
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
}
