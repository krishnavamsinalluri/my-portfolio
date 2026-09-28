import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: 'Frontend Frameworks & Languages',
    icon: 'fas fa-code',
    color: '#8b5cf6',
    skills: [
      { name: 'Angular', icon: 'fab fa-angular', color: '#dd0031' },
      { name: 'React.js', icon: 'fab fa-react', color: '#61dafb' },
      { name: 'Next.js', icon: 'fas fa-cube', color: '#f8fafc' },
      { name: 'TypeScript', icon: 'fas fa-code', color: '#3178c6' },
      { name: 'JavaScript', icon: 'fab fa-js-square', color: '#f7df1e' },
      { name: 'HTML5', icon: 'fab fa-html5', color: '#e34f26' },
      { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572b6' },
      { name: 'SCSS', icon: 'fab fa-sass', color: '#cc6699' },
      { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952b3' },
      { name: 'PrimeNG', icon: 'fas fa-gem', color: '#6c5ce7' },
    ],
  },
  {
    category: 'APIs & Integration',
    icon: 'fas fa-plug',
    color: '#06b6d4',
    skills: [
      { name: 'REST APIs', icon: 'fas fa-plug', color: '#10b981' },
      { name: 'Web Services', icon: 'fas fa-network-wired', color: '#06b6d4' },
      { name: 'Axios', icon: 'fas fa-exchange-alt', color: '#5a29e4' },
      { name: 'Firebase', icon: 'fas fa-fire', color: '#ffca28' },
      { name: 'Google Maps API', icon: 'fas fa-map-marked-alt', color: '#4285f4' },
      { name: 'API Integration', icon: 'fas fa-link', color: '#3b82f6' },
    ],
  },
  {
    category: 'Tools, CI/CD & Production Support',
    icon: 'fas fa-tools',
    color: '#10b981',
    skills: [
      { name: 'Git', icon: 'fab fa-git-alt', color: '#f05032' },
      { name: 'GitHub', icon: 'fab fa-github', color: '#f8fafc' },
      { name: 'GitLab', icon: 'fab fa-gitlab', color: '#fc6d26' },
      { name: 'VS Code', icon: 'fas fa-laptop-code', color: '#007acc' },
      { name: 'SoapUI', icon: 'fas fa-vial', color: '#eab308' },
      { name: 'CI/CD & Release', icon: 'fas fa-rocket', color: '#ef4444' },
      { name: 'Production Support', icon: 'fas fa-headset', color: '#8b5cf6' },
    ],
  },
  {
    category: 'AI-Assisted Dev & UI/UX',
    icon: 'fas fa-magic',
    color: '#ec4899',
    skills: [
      { name: 'GitHub Copilot', icon: 'fas fa-robot', color: '#6e40c9' },
      { name: 'Claude & Antigravity', icon: 'fas fa-brain', color: '#8b5cf6' },
      { name: 'AI Debugging', icon: 'fas fa-microchip', color: '#3b82f6' },
      { name: 'Figma-to-UI', icon: 'fab fa-figma', color: '#f24e1e' },
      { name: 'Pixel-Perfect UI', icon: 'fas fa-vector-square', color: '#ec4899' },
      { name: 'Responsive Design', icon: 'fas fa-mobile-alt', color: '#14b8a6' },
    ],
  },
];

export default function Skills() {
  return (
    <section className="wpo-skill-section section-padding" id="skills">
      <div className="container">
        <div className="wpo-section-title text-center">
          <span className="section-tag"><i className="fas fa-layer-group"></i> Technical Skills</span>
          <h2 className="gradient-text">Core Competencies & Stack</h2>
          <p style={{ margin: '0 auto' }}>
            Proven capabilities in frontend frameworks, REST API communication, modern UI systems, and AI-assisted workflows.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.category}
              className="skill-category-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="skill-category-header">
                <div className="skill-category-icon" style={{ background: `${group.color}20`, color: group.color }}>
                  <i className={group.icon}></i>
                </div>
                <h3>{group.category}</h3>
              </div>

              <div className="skill-items-wrap">
                {group.skills.map((s) => (
                  <span key={s.name} className="skill-badge">
                    <i className={s.icon} style={{ color: s.color }}></i>
                    {s.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
