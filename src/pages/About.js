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
                  <li><strong>Name:</strong> Krishna Vamsi  </li>
                  <li><strong>Date of Birth:</strong> 12 August 2001</li>
                  <li><strong>Address:</strong> West Godavari Dist, Andhra Pradesh</li>
                  <li><strong>Email:</strong> vamsinalluri806@gmail.com</li>
                  <li><strong>Phone:</strong> +91 9573660370</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
