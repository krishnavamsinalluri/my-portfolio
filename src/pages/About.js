import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function About() {
  const infoList = [
    { label: 'Name', value: 'Krishna Vamsi', icon: 'fas fa-user' },
    { label: 'Role', value: 'Software Engineer @ SNAD', icon: 'fas fa-laptop-code' },
    { label: 'Location', value: 'Hyderabad, India', icon: 'fas fa-map-marker-alt' },
    { label: 'Availability', value: 'Open for Roles', icon: 'fas fa-check-circle' },
    { label: 'Email', value: 'vamsinalluri806@gmail.com', href: 'mailto:vamsinalluri806@gmail.com', icon: 'fas fa-envelope' },
    { label: 'Phone', value: '+91 9573660370', href: 'tel:+919573660370', icon: 'fas fa-phone' },
    { label: 'LinkedIn', value: 'krishna-vamsi', href: 'https://www.linkedin.com/in/krishna-vamsi-503986249', icon: 'fab fa-linkedin' },
    { label: 'GitHub', value: 'krishnavamsinalluri', href: 'https://github.com/krishnavamsinalluri', icon: 'fab fa-github' },
  ];

  return (
    <section className="wpo-about-section section-padding" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Profile photo container */}
          <motion.div 
            className="about-image-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="/assets/images/Hero-image.jpeg" 
              alt="Krishna Vamsi"
              onError={(e) => {
                e.target.src = '/assets/images/PROFILE-PHOTO.jpeg';
              }}
            />
            <div className="about-experience-badge">
              <h3>2+</h3>
              <p>Years Experience<br /><span style={{ color: 'var(--accent-violet-light)' }}>Frontend Engineering</span></p>
            </div>
          </motion.div>

          {/* About text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="wpo-section-title" style={{ marginBottom: '20px' }}>
              <span className="section-tag"><i className="fas fa-user-check"></i> About Me</span>
              <h2 className="gradient-text">Frontend Developer Building Scalable Web Apps</h2>
            </div>

            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '14px' }}>
              Software Engineer with 2+ years of experience engineering enterprise HR platforms, ride-hailing applications, and corporate websites across Angular, React, Next.js, and TypeScript.
            </p>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              Transitioned into software engineering from a Civil Engineering background (B.Tech JNTUK SITE) through dedicated self-upskilling and hands-on production application development. Skilled in Figma-to-UI conversion, REST API integration, state management, and production troubleshooting.
            </p>

            <div className="info-grid">
              {infoList.map((item) => (
                <div className="info-item" key={item.label}>
                  <i className={item.icon}></i>
                  <div>
                    <label>{item.label}</label>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      <span>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href="/assets/pdf/Krishna_Vamsi_Resume.pdf" className="btn-primary" download>
                <i className="fas fa-download"></i> Download Resume
              </a>
              <Link to="/contact" className="btn-secondary">
                <i className="fas fa-paper-plane"></i> Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
