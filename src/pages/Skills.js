import { useEffect, useRef } from 'react';

const skillGroups = [
  {
    category: 'Frontend Development',
    icon: 'fas fa-code',
    skills: [
      { name: 'Angular', icon: 'fab fa-angular', color: '#dd0031' },
      { name: 'React.js', icon: 'fab fa-react', color: '#61dafb' },
      { name: 'Next.js', icon: 'fas fa-cube', color: '#000000' },
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
    category: 'Tools, CI/CD & Support',
    icon: 'fas fa-tools',
    skills: [
      { name: 'Git', icon: 'fab fa-git-alt', color: '#f05032' },
      { name: 'GitHub', icon: 'fab fa-github', color: '#333333' },
      { name: 'GitLab', icon: 'fab fa-gitlab', color: '#fc6d26' },
      { name: 'VS Code', icon: 'fas fa-laptop-code', color: '#007acc' },
      { name: 'SoapUI', icon: 'fas fa-vial', color: '#eab308' },
      { name: 'CI/CD & Deployment', icon: 'fas fa-rocket', color: '#ef4444' },
      { name: 'Production Support', icon: 'fas fa-headset', color: '#8b5cf6' },
    ],
  },
  {
    category: 'AI-Assisted Dev & UI/UX',
    icon: 'fas fa-magic',
    skills: [
      { name: 'GitHub Copilot', icon: 'fas fa-robot', color: '#6e40c9' },
      { name: 'Claude & Antigravity', icon: 'fas fa-brain', color: '#8b5cf6' },
      { name: 'AI Coding & Debugging', icon: 'fas fa-microchip', color: '#3b82f6' },
      { name: 'Figma-to-UI', icon: 'fab fa-figma', color: '#f24e1e' },
      { name: 'Pixel-Perfect UI', icon: 'fas fa-vector-square', color: '#ec4899' },
      { name: 'Responsive Design', icon: 'fas fa-mobile-alt', color: '#14b8a6' },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const groups = sectionRef.current?.querySelectorAll('.skill-group');
        groups?.forEach((group, groupIdx) => {
          const cards = group.querySelectorAll('.skill-card');
          cards.forEach((card, cardIdx) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(25px) scale(0.92)';
            setTimeout(() => {
              card.style.transition = 'all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0) scale(1)';
            }, groupIdx * 150 + cardIdx * 45);
          });
        });
        observer.disconnect();
      }
    }, { threshold: 0.15 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="wpo-skill-section section-padding" id="skills" ref={sectionRef}>
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
