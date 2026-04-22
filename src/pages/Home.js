import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className="static-hero" id="home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className="wpo-static-hero-text-nd">
                <h5>Hello, I am</h5>
                <h1>Krishna <span>Vamsi</span></h1>
                <p>Software Engineer @ <strong>SNAD Developers</strong></p>
                <div className="hero-btn">
                  <a href="/assets/pdf/Krishna_Vamsi_Resume.pdf" className="theme-btn" download>
                    Download CV
                  </a>
                  <Link to="/contact" className="theme-btn-s2">Hire Me</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="static-hero-img">
                <div className="hero-image-wrapper">
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

      <section className="wpo-stats-section" style={{ padding: '80px 0' }}>
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
