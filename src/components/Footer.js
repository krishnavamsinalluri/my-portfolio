import { NavLink } from 'react-router-dom';

const navLinks = [
  { label: 'Home',       path: '/',          targetId: 'home' },
  { label: 'About',      path: '/about',     targetId: 'about' },
  { label: 'Expertise',  path: '/expertise', targetId: 'expertise' },
  { label: 'Skills',     path: '/skills',    targetId: 'skills' },
  { label: 'Experience', path: '/experience',targetId: 'experience' },
  { label: 'Projects',   path: '/projects',  targetId: 'projects' },
  { label: 'Education',  path: '/education', targetId: 'education' },
  { label: 'Contact',    path: '/contact',   targetId: 'contact' },
];

const socials = [
  { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/krishna-vamsi-503986249', label: 'LinkedIn' },
  { icon: 'fab fa-github',      href: 'https://github.com/krishnavamsinalluri',              label: 'GitHub' },
  { icon: 'fas fa-envelope',    href: 'mailto:vamsinalluri806@gmail.com',                    label: 'Email' },
];

export default function Footer() {
  const handleNavClick = (e, targetId, path) => {
    const element = document.getElementById(targetId);
    if (element) {
      e.preventDefault();
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      window.history.pushState(null, '', path);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">

            {/* Brand */}
            <div className="footer-brand-col">
              <NavLink to="/" className="footer-logo" onClick={(e) => handleNavClick(e, 'home', '/')}>
                Krishna <span>Vamsi</span>
              </NavLink>
              <p className="footer-bio">
                Software Engineer specializing in Angular, React.js, Next.js &amp; TypeScript. Building clean, scalable web experiences.
              </p>
              <div className="footer-socials">
                {socials.map(({ icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" title={label} className="footer-social-btn">
                    <i className={icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links-col">
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-nav">
                {navLinks.map(({ label, path, targetId }) => (
                  <li key={path}>
                    <a href={path} onClick={(e) => handleNavClick(e, targetId, path)}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-contact-col">
              <h4 className="footer-col-title">Contact</h4>
              <ul className="footer-contact-list">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Hyderabad, India</span>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:vamsinalluri806@gmail.com">vamsinalluri806@gmail.com</a>
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  <a href="tel:+919573660370">+91 9573660370</a>
                </li>
              </ul>

              <a href="/assets/pdf/Krishna_Vamsi_Resume.pdf" className="footer-cv-btn" download>
                <i className="fas fa-download"></i> Download CV
              </a>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} <strong>Krishna Vamsi</strong>. All rights reserved.</p>
          <p>Developed By <i className="fas fa-heart" style={{ color: '#e74c3c', margin: '0 4px' }}></i> Krishna Vamsi</p>
        </div>
      </div>
    </footer>
  );
}
