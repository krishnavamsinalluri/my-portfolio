import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroDashboard from '../components/HeroDashboard';
import CounterUp from '../components/CounterUp';

export default function Home() {
  const pageCards = [
    {
      title: 'Featured Projects',
      desc: 'Case studies for HRMS, Valam Ride-Hailing, RightlyHR, Sirisampada, and E-Commerce.',
      path: '/projects',
      icon: 'fas fa-folder-open',
      color: '#8b5cf6'
    },
    {
      title: 'Work Experience',
      desc: '2+ years software engineering journey at SNAD Developers and Edupoly Solutions.',
      path: '/experience',
      icon: 'fas fa-briefcase',
      color: '#06b6d4'
    },
    {
      title: 'Technical Skills',
      desc: 'Proficiencies across Angular, React, Next.js, TypeScript, REST APIs & AI Dev tools.',
      path: '/skills',
      icon: 'fas fa-layer-group',
      color: '#10b981'
    },
    {
      title: 'About Krishna Vamsi',
      desc: 'Software Engineer background, transition story, core focus, and contact details.',
      path: '/about',
      icon: 'fas fa-user-check',
      color: '#ec4899'
    }
  ];

  return (
    <>
      {/* ─── Hero Section ─────────────────────────── */}
      <section className="hero-section" id="home">
        <div className="container">
          {/* Top Hero Split Grid: Left Image, Right Text */}
          <div className="hero-grid">
            {/* Left Column: Hero Image (vamsiwithpc.png) */}
            <motion.div
              className="hero-image-column"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="hero-image-card">
                <div className="hero-image-wrapper">
                  <img
                    src="/assets/images/vamsiwithpc.png"
                    alt="Krishna Vamsi working on laptop"
                    onError={(e) => {
                      e.target.src = '/assets/images/PROFILE-PHOTO.jpeg';
                    }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Column: Hero Text & Actions */}
            <motion.div
              className="hero-content-column"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="hero-tag">
                <span className="status-dot"></span>
                <span>Software Engineer @ SNAD Developers</span>
              </div>

              <h1 className="hero-title">
                Building interfaces that <span className="gradient-accent-text">feel effortless.</span>
              </h1>

              <div className="hero-subtitle">
                Software Engineer · Angular, React, Next.js, TypeScript, .NET & SQL
              </div>

              <p className="hero-desc">
                2+ years of experience engineering responsive, accessible, and high-performance web applications with Angular, React, Next.js, TypeScript, and REST APIs.
              </p>

              <div className="hero-actions">
                <Link to="/projects" className="btn-primary">
                  Explore Work <i className="fas fa-arrow-right"></i>
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Contact Me
                </Link>
                <a href="/assets/pdf/Krishna_Vamsi_Resume.pdf" className="btn-outline" download>
                  <i className="fas fa-download"></i> Download Resume
                </a>
              </div>

              <div className="hero-socials">
                <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '600', marginRight: '6px' }}>
                  Connect:
                </span>
                <a 
                  href="https://www.linkedin.com/in/krishna-vamsi-503986249" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-link" 
                  title="LinkedIn Profile"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a 
                  href="https://github.com/krishnavamsinalluri" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-link" 
                  title="GitHub Profile"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a 
                  href="mailto:vamsinalluri806@gmail.com" 
                  className="social-link" 
                  title="Email Krishna Vamsi"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Bottom Hero Element: Interactive Developer Workspace Visual */}
          <motion.div
            className="hero-dashboard-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <HeroDashboard />
          </motion.div>
        </div>
      </section>

      {/* ─── Animated Key Stats Section ────────────── */}
      <section className="home-stats-section">
        <div className="container">
          <div className="home-stats-grid">
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
              <div style={{ fontSize: '36px', fontWeight: '800', color: 'var(--accent-cyan)' }}>
                <CounterUp end={2} suffix="+" />
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: '500', marginTop: '4px' }}>
                Years Software Engineering
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}>
              <div style={{ fontSize: '36px', fontWeight: '800', color: 'var(--accent-violet)' }}>
                <CounterUp end={5} suffix="+" />
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: '500', marginTop: '4px' }}>
                Deployed Major Projects
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }}>
              <div style={{ fontSize: '36px', fontWeight: '800', color: '#10b981' }}>
                <CounterUp end={15} suffix="+" />
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: '500', marginTop: '4px' }}>
                Tech Skills & Tools
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 }}>
              <div style={{ fontSize: '36px', fontWeight: '800', color: '#ec4899' }}>
                <CounterUp end={100} suffix="%" />
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: '500', marginTop: '4px' }}>
                Pixel-Perfect & Responsive
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Quick Navigation Cards Section ──────────── */}
      <section className="section-padding home-explore-section">
        <div className="container">
          <div className="wpo-section-title text-center">
            <span className="section-tag"><i className="fas fa-compass"></i> Explore Portfolio</span>
            <h2 className="gradient-text">Explore Sections</h2>
            <p style={{ margin: '0 auto' }}>
              Select any section to view detailed project case studies, work experience, technical skills, or contact info.
            </p>
          </div>

          <div className="explore-grid">
            {pageCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                style={{ height: '100%' }}
              >
                <Link to={card.path} className="skill-category-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div className="skill-category-header">
                    <div className="skill-category-icon" style={{ background: `${card.color}20`, color: card.color }}>
                      <i className={card.icon}></i>
                    </div>
                    <h3>{card.title}</h3>
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '20px', flex: 1 }}>
                    {card.desc}
                  </p>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: card.color, display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: 'auto' }}>
                    View {card.title} <i className="fas fa-arrow-right" style={{ fontSize: '11px' }}></i>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
