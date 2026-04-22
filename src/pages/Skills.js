const skillGroups = [
  {
    category: 'Languages',
    icon: 'fas fa-code',
    skills: [
      { name: 'HTML5',      icon: 'fab fa-html5',      color: '#e34f26' },
      { name: 'CSS3',       icon: 'fab fa-css3-alt',   color: '#1572b6' },
      { name: 'JavaScript', icon: 'fab fa-js-square',  color: '#f7df1e' },
      { name: 'TypeScript', icon: 'fas fa-code',       color: '#3178c6' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    icon: 'fas fa-layer-group',
    skills: [
      { name: 'Angular',  icon: 'fab fa-angular',  color: '#dd0031' },
      { name: 'React.js', icon: 'fab fa-react',    color: '#61dafb' },
      { name: 'Redux',    icon: 'fas fa-database', color: '#764abc' },
      { name: 'Bootstrap',icon: 'fab fa-bootstrap',color: '#7952b3' },
      { name: 'PrimeNG',  icon: 'fas fa-gem',      color: '#6c5ce7' },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: 'fas fa-tools',
    skills: [
      { name: 'GitHub',        icon: 'fab fa-github',   color: '#333' },
      { name: 'REST APIs',     icon: 'fas fa-plug',     color: '#10b981' },
      { name: 'Axios',         icon: 'fas fa-exchange-alt', color: '#5a29e4' },
      { name: 'Firebase',      icon: 'fas fa-fire',     color: '#ffca28' },
      { name: 'Google Maps API', icon: 'fas fa-map-marked-alt', color: '#4285f4' },
      { name: 'VS Code',       icon: 'fas fa-laptop-code', color: '#007acc' },
    ],
  },
];

export default function Skills() {
  return (
    <section className="wpo-skill-section section-padding" id="skill">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12">
            <div className="wpo-section-title text-center">
              <span>My Skills</span>
              <h2>Technical Proficiencies</h2>
            </div>
          </div>
        </div>

        <div className="skills-groups">
          {skillGroups.map(({ category, icon, skills }) => (
            <div className="skill-group" key={category}>
              <div className="skill-group-header">
                <i className={icon}></i>
                <h3>{category}</h3>
              </div>
              <div className="skill-cards">
                {skills.map(({ name, icon: sIcon, color }) => (
                  <div className="skill-card" key={name}>
                    <div className="skill-card-icon" style={{ background: `${color}18`, color }}>
                      <i className={sIcon}></i>
                    </div>
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
