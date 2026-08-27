import { useEffect, useRef, useState } from 'react';
import About from './About';
import Expertise from './Expertise';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';

const statsData = [
  { target: 2, suffix: '+', label: 'Years Experience' },
  { target: 5, suffix: '+', label: 'Major Projects' },
  { target: 15, suffix: '+', label: 'Technical Skills' },
  { target: 100, suffix: '%', label: 'Commitment' },
];

export default function Home() {
  const textRef = useRef();
  const imgRef = useRef();
  const statsRef = useRef();
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const [hasAnimatedStats, setHasAnimatedStats] = useState(false);

  useEffect(() => {
    const els = [textRef.current, imgRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = i === 0 ? 'translateX(-40px)' : 'translateX(40px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateX(0)';
      }, 200 + i * 200);
    });

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimatedStats) {
        setHasAnimatedStats(true);
        const duration = 1800; // ms duration for count-up
        const startTime = performance.now();

        const animate = (currentTime) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          // Ease out cubic function for smooth decelerating count
          const easeProgress = 1 - Math.pow(1 - progress, 3);

          setCounts(
            statsData.map((item) => Math.floor(easeProgress * item.target))
          );

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCounts(statsData.map((item) => item.target));
          }
        };

        requestAnimationFrame(animate);

        const items = statsRef.current?.querySelectorAll('.wpo-stats-content');
        items?.forEach((item, i) => {
          item.style.opacity = '0';
          item.style.transform = 'translateY(30px)';
          setTimeout(() => {
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, i * 150);
        });
        observer.disconnect();
      }
    }, { threshold: 0.3 });

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimatedStats]);

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const yOffset = -70;
      const y = contactEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="static-hero" id="home">
        {/* Animated background blobs */}
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>
        <div className="hero-blob hero-blob-3"></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row align-items-center">
            <div className="col-lg-6 col-12" ref={textRef}>
              <div className="wpo-static-hero-text-nd">
                <h5 className="hero-greeting">Hello, I am</h5>
                <h1>Krishna <span>Vamsi</span></h1>
                <p>Software Engineer @ <strong>SNAD Developers</strong></p>
                <p className="hero-tagline">Frontend Developer | React.js, Angular, Next.js, TypeScript</p>
                <div className="hero-btn">
                  <a href="/assets/pdf/Krishna_Vamsi_Resume.pdf" className="theme-btn" download>
                    Download CV
                  </a>
                  <a href="#contact" onClick={scrollToContact} className="theme-btn-s2">Hire Me</a>
                </div>
                <div className="hero-socials">
                  <a href="https://www.linkedin.com/in/krishna-vamsi-503986249" target="_blank" rel="noreferrer" title="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://github.com/krishnavamsinalluri" target="_blank" rel="noreferrer" title="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="mailto:vamsinalluri806@gmail.com" title="Email">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12" ref={imgRef}>
              <div className="static-hero-img">
                <div className="hero-image-wrapper">
                  <div className="hero-ring hero-ring-1"></div>
                  <div className="hero-ring hero-ring-2"></div>
                  <div className="static-hero-img-inner">
                    <img src="\assets\images\Hero-image.jpeg" alt="Krishna Vamsi" />
                  </div>
                  <div className="floating-badge fb-top-left" title="Angular">
                    <i className="fab fa-angular" style={{ color: '#dd0031' }}></i>
                  </div>
                  <div className="floating-badge fb-top-right" title="React.js">
                    <i className="fab fa-react" style={{ color: '#61dafb' }}></i>
                  </div>
                  <div className="floating-badge fb-bottom-right" title="Next.js">
                    <span style={{ color: '#000000', fontFamily: 'sans-serif', fontWeight: 900, fontSize: 20 }}>N</span>
                  </div>
                  <div className="floating-badge fb-bottom-left" title="TypeScript">
                    <span style={{ color: '#3178c6', fontFamily: 'sans-serif', fontWeight: 800, fontSize: 24 }}>TS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wpo-stats-section" style={{ padding: '80px 0' }} ref={statsRef}>
        <div className="container">
          <div className="wpo-stats-wrap">
            {statsData.map(({ suffix, label }, idx) => (
              <div className="wpo-stats-content" key={label}>
                <h3>{counts[idx]}{suffix}</h3>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Render all sections in sequence for seamless single-page scrolling */}
      <About />
      <Expertise />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}
