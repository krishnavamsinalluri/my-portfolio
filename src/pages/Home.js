import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export default function Home() {
  const textRef = useRef();
  const imgRef = useRef();
  const statsRef = useRef();

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
      if (entry.isIntersecting) {
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
  }, []);

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
                <p className="hero-tagline">Building scalable web apps with Angular, React &amp; TypeScript</p>
                <div className="hero-btn">
                  <a href="/assets/pdf/Krishna_Vamsi_Resume.pdf" className="theme-btn" download>
                    Download CV
                  </a>
                  <Link to="/contact" className="theme-btn-s2">Hire Me</Link>
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
                  <div className="floating-badge fb-top-left">
                    <i className="fab fa-angular" style={{ color: '#dd0031' }}></i>
                  </div>
                  <div className="floating-badge fb-top-right">
                    <i className="fab fa-react" style={{ color: '#61dafb' }}></i>
                  </div>
                  <div className="floating-badge fb-bottom-right">
                    <i className="fab fa-js-square" style={{ color: '#f7df1e' }}></i>
                  </div>
                  <div className="floating-badge fb-bottom-left">
                    <span style={{ color: '#3178c6', fontFamily: 'sans-serif', fontWeight: 800, fontSize: 28 }}>TS</span>
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
            {[
              { value: '2+', label: 'Years Experience' },
              { value: '3+', label: 'Major Projects' },
              { value: '12+', label: 'Technical Skills' },
              { value: '100%', label: 'Commitment' },
            ].map(({ value, label }) => (
              <div className="wpo-stats-content" key={label}>
                <h3>{value}</h3>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
