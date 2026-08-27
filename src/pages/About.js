import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  const sectionRef = useRef();
  const imgRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (imgRef.current) {
          imgRef.current.style.opacity = '0';
          imgRef.current.style.transform = 'translateX(-40px)';
          setTimeout(() => {
            imgRef.current.style.transition = 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
            imgRef.current.style.opacity = '1';
            imgRef.current.style.transform = 'translateX(0)';
          }, 100);
        }
        if (textRef.current) {
          textRef.current.style.opacity = '0';
          textRef.current.style.transform = 'translateX(40px)';
          setTimeout(() => {
            textRef.current.style.transition = 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
            textRef.current.style.opacity = '1';
            textRef.current.style.transform = 'translateX(0)';
          }, 250);
        }
        observer.disconnect();
      }
    }, { threshold: 0.15 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const infoList = [
    { label: 'Name', value: 'Krishna Vamsi', icon: 'fas fa-user' },
    { label: 'Role', value: 'Software Engineer', icon: 'fas fa-laptop-code' },
    { label: 'Location', value: 'Hyderabad, India', icon: 'fas fa-map-marker-alt' },
    { label: 'Availability', value: 'Open to Work', icon: 'fas fa-check-circle' },
    { label: 'Email', value: 'vamsinalluri806@gmail.com', href: 'mailto:vamsinalluri806@gmail.com', icon: 'fas fa-envelope' },
    { label: 'Phone', value: '+91 9573660370', href: 'tel:+919573660370', icon: 'fas fa-phone' },
    { label: 'LinkedIn', value: 'krishna-vamsi', href: 'https://www.linkedin.com/in/krishna-vamsi-503986249', icon: 'fab fa-linkedin' },
    { label: 'GitHub', value: 'krishnavamsinalluri', href: 'https://github.com/krishnavamsinalluri', icon: 'fab fa-github' },
  ];

  return (
    <section className="wpo-about-section section-padding" id="about" ref={sectionRef}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-12 mb-4 mb-lg-0" ref={imgRef}>
            <div className="wpo-about-img-wrap">
              <div className="wpo-about-img">
                <img src="\assets\images\Hero-image.jpeg" alt="Krishna Vamsi" />
                <div className="about-exp-badge">
                  <h3>2+</h3>
                  <p>Years Exp.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-12" ref={textRef}>
            <div className="wpo-about-text-card">
              <div className="wpo-section-title" style={{ marginBottom: '20px' }}>
                <span>About Me</span>
                <h2>Innovative Software Engineer Driving Digital Excellence</h2>
              </div>
              <p className="about-desc">
                Software Engineer with 2+ years of experience building and supporting web and enterprise applications across the full development lifecycle — analysis, design, development, testing, deployment, and production support. Transitioned into software development from a Civil Engineering background through hands-on project work and focused self-driven upskilling.
              </p>
              <p className="about-desc" style={{ marginTop: '12px' }}>
                Strong expertise in Angular, React.js, Next.js, TypeScript, JavaScript, HTML5, CSS3, Bootstrap, and SCSS, with hands-on experience integrating REST APIs and Java/.NET-based backends. Skilled in converting UX/UI and Figma designs into pixel-perfect, responsive, and reusable interfaces.
              </p>

              <div className="about-info-grid">
                {infoList.map(({ label, value, href, icon }) => (
                  <div className="about-info-item" key={label}>
                    <div className="info-icon"><i className={icon}></i></div>
                    <div className="info-content">
                      <span className="info-label">{label}</span>
                      {href ? (
                        <a href={href} target={href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer" className="info-link">
                          {value}
                        </a>
                      ) : (
                        <span className="info-val">{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="about-btns">
                <a href="/assets/pdf/Krishna_Vamsi_Resume.pdf" className="theme-btn" download>
                  <i className="fas fa-download"></i> Download CV
                </a>
                <Link to="/contact" className="theme-btn-s2">
                  <i className="fas fa-paper-plane"></i> Hire Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
