import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Expertise', path: '/expertise' },
  { label: 'Skills', path: '/skills' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Education', path: '/education' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('vamsi_portfolio_theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('vamsi_portfolio_theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        const scrolledPct = (winScroll / height) * 100;
        setScrollProgress(Math.min(100, Math.max(0, scrolledPct)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* Scroll Progress Bar */}
      <div 
        className="nav-scroll-progress" 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '3px',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #8b5cf6 0%, #06b6d4 50%, #10b981 100%)',
          boxShadow: '0 0 10px rgba(6, 182, 212, 0.6)',
          transition: 'width 0.1s linear',
          pointerEvents: 'none'
        }}
      />

      <div className="container">
        <NavLink to="/" className="navbar-brand" onClick={() => setOpen(false)}>
          <div className="logo-badge">KV</div>
          Krishna <span>Vamsi</span>
        </NavLink>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button 
            className="navbar-toggler" 
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            <i className={open ? 'fas fa-times' : 'fas fa-bars'}></i>
          </button>

          <ul className={`nav-links${open ? ' open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="nav-actions-right">
            <button 
              className="theme-toggle-btn"
              onClick={toggleTheme}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
              aria-label="Toggle Light/Dark Theme"
            >
              <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
            </button>

            <a 
              href="/assets/pdf/Krishna_Vamsi_Resume.pdf" 
              className="nav-cta-btn"
              download
            >
              <i className="fas fa-download"></i> Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
