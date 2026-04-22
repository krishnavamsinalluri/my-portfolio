const skills = ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'TypeScript', 'Angular', 'React.js', 'Redux', 'PrimeNG', 'Axios', 'REST APIs', 'GitHub'];

export default function Skills() {
  return (
    <section className="wpo-skill-section section-padding" id="skill">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-12">
            <div className="wpo-skill-text">
              <div className="wpo-section-title">
                <span>My Skills</span>
                <h2>Technical Proficiencies</h2>
              </div>
              <p>Comprehensive knowledge of modern web technologies, from core fundamentals to advanced frameworks and tools.</p>
            </div>
          </div>
          <div className="col-lg-7 col-12">
            <div className="wpo-skill-wrap">
              {skills.map(skill => (
                <span className="skill-badge" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
