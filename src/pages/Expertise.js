import { motion } from 'framer-motion';

const expertiseItems = [
  { 
    icon: 'fab fa-react', 
    title: 'Frontend & Modern Web Apps', 
    desc: 'Expertise in building scalable SPAs and web applications using Angular, React.js, Next.js, and TypeScript with clean modular architecture.',
    color: '#38bdf8'
  },
  { 
    icon: 'fas fa-globe', 
    title: 'Product & Corporate Websites', 
    desc: 'Developed and deployed production web applications like RightlyHR (Next.js/Java) and Sirisampada Infratech (Angular/PrimeNG) from scratch.',
    color: '#ec4899'
  },
  { 
    icon: 'fas fa-server', 
    title: 'APIs & Backend Integration', 
    desc: 'Seamlessly connecting frontends with REST APIs and Java/.NET-based backends using Axios and asynchronous data handling.',
    color: '#10b981'
  },
  { 
    icon: 'fas fa-mobile-alt', 
    title: 'Pixel-Perfect UI / Figma-to-UI', 
    desc: 'Converting UX/UI and Figma designs into pixel-perfect, mobile-responsive, and reusable interfaces with Bootstrap, PrimeNG, and SCSS.',
    color: '#8b5cf6'
  },
  { 
    icon: 'fas fa-robot', 
    title: 'AI-Assisted Development', 
    desc: 'Leveraging AI tools like GitHub Copilot, Claude, and Antigravity for rapid prototyping, AI-assisted coding, and issue debugging.',
    color: '#06b6d4'
  },
  { 
    icon: 'fas fa-tools', 
    title: 'CI/CD, Support & Debugging', 
    desc: 'Proficient in Git workflows, CI/CD releases, production support, root cause analysis, and troubleshooting production issues.',
    color: '#f59e0b'
  },
];

export default function Expertise() {
  return (
    <section className="wpo-service-section section-padding" id="expertise">
      <div className="container">
        <div className="wpo-section-title text-center">
          <span className="section-tag"><i className="fas fa-cubes"></i> Core Focus</span>
          <h2 className="gradient-text">Technical Expertise</h2>
          <p style={{ margin: '0 auto' }}>
            Key areas of specialization across frontend development, API integration, and user interface delivery.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {expertiseItems.map((item, idx) => (
            <motion.div
              key={item.title}
              className="skill-category-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div className="skill-category-header">
                <div className="skill-category-icon" style={{ background: `${item.color}20`, color: item.color }}>
                  <i className={item.icon}></i>
                </div>
                <h3>{item.title}</h3>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
