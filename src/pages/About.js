import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className="wpo-about-section section-padding" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="wpo-about-img">
              <img src="\assets\images\Hero-image.jpeg" alt="Krishna Vamsi" />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="wpo-about-text">
              <div className="wpo-section-title">
                <span>About Me</span>
                <h2>Innovative Software Engineer Driving Digital Excellence</h2>
              </div>
              <p>Results-driven Software Engineer with 2+ years of hands-on experience in building dynamic, responsive web applications using Angular, React.js, TypeScript, and REST APIs. Proven ability to deliver end-to-end frontend solutions through real-world projects including an HR Management System and a ride-hailing platform (Valam).</p>
              <p style={{ marginTop: '15px' }}>Passionate about writing clean, scalable code and creating seamless user experiences that drive business value.</p>

              <div className="about-info">
                <ul>
                  <li><strong>Name:</strong> Krishna Vamsi</li>
                  <li><strong>Date of Birth:</strong> 12 August 2001</li>
                  <li><strong>Address:</strong> West Godavari Dist, Andhra Pradesh</li>
                  <li><strong>Email:</strong> <a href="mailto:vamsinalluri806@gmail.com">vamsinalluri806@gmail.com</a></li>
                  <li><strong>Phone:</strong> <a href="tel:+919573660370">+91 9573660370</a></li>
                  <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/krishna-vamsi-503986249" target="_blank" rel="noreferrer">linkedin.com/in/krishna-vamsi</a></li>
                  <li><strong>GitHub:</strong> <a href="https://github.com/krishnavamsinalluri" target="_blank" rel="noreferrer">github.com/krishnavamsinalluri</a></li>
                  <li><strong>Availability:</strong> Open to Opportunities</li>
                </ul>
              </div>

              <div className="about-btns">
                <a href="/assets/pdf/Krishna_Vamsi_Resume.pdf" className="theme-btn" download>Download CV</a>
                <Link to="/contact" className="theme-btn-s2">Hire Me</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
