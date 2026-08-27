import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/', targetId: 'home' },
  { label: 'About', path: '/about', targetId: 'about' },
  { label: 'Expertise', path: '/expertise', targetId: 'expertise' },
  { label: 'Skills', path: '/skills', targetId: 'skills' },
  { label: 'Experience', path: '/experience', targetId: 'experience' },
  { label: 'Projects', path: '/projects', targetId: 'projects' },
  { label: 'Education', path: '/education', targetId: 'education' },
  { label: 'Contact', path: '/contact', targetId: 'contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const item of navItems) {
        const el = document.getElementById(item.targetId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.targetId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, item) => {
    setOpen(false);
    const element = document.getElementById(item.targetId);

    if (element) {
      e.preventDefault();
      const yOffset = -70; // 70px navbar height offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(item.targetId);
      window.history.pushState(null, '', item.path);
    } else {
      navigate(item.path);
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <NavLink
          to="/"
          className="navbar-brand"
          onClick={(e) => handleNavClick(e, { targetId: 'home', path: '/' })}
        >
          Krishna <span>Vamsi</span>
        </NavLink>
        <button className="navbar-toggler" onClick={() => setOpen(!open)}>☰</button>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {navItems.map((item) => {
            const isActive = activeSection === item.targetId || location.pathname === item.path;
            return (
              <li key={item.path}>
                <a
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item)}
                  className={isActive ? 'active' : ''}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
