import { motion } from 'framer-motion';

const caseStudies = [
  {
    id: 'hrms',
    title: 'HR Management System (HRMS)',
    period: 'Sept 2024 – Jan 2025',
    category: 'Enterprise SaaS Application',
    tech: ['Angular', '.NET', 'SQL', 'Bootstrap', 'PrimeNG', 'REST APIs'],
    img: '/assets/images/hrms.png',
    problem: 'Enterprise organization required a streamlined self-service platform to eliminate fragmented manual workflows for attendance, leave management, expense tracking, and corporate documents.',
    contribution: 'Architected and built core self-service modules across My Info, Settings, Assets, Attendance, Expenses, Events, Documents, Letter Generation, and Timesheets. Integrated REST APIs, applied PrimeNG components, and led root-cause troubleshooting for production stability.',
    points: [
      'Automated core HR operations across 9+ employee self-service modules.',
      'Designed responsive UI components using PrimeNG & Bootstrap for seamless multi-device access.',
      'Ensured strict data validation, frontend state consistency, and REST API error handling.'
    ],
    accent: '#8b5cf6',
    badge: 'Enterprise Core'
  },
  {
    id: 'valam',
    title: 'Valam — Ride-Hailing Platform',
    period: 'Feb 2025 – Present',
    category: 'On-Demand Mobility System',
    tech: ['Angular', 'Java', 'SQL', 'Bootstrap', 'PrimeNG', 'REST APIs', 'Firebase', 'Google Maps API'],
    img: '/assets/images/valam.png',
    problem: 'An on-demand ride-hailing client required real-time driver tracking, automated fare calculations, multi-role access (customer, driver, admin), and secure payment processing.',
    contribution: 'Engineered ride booking workflows, live location tracking with Google Maps API integration, trip history analytics, ratings, referral rewards, and OAuth 2.0 authentication.',
    points: [
      'Built multi-role portals (Customer, Driver, Administrator) with role-based routing.',
      'Integrated Google Maps API for live location tracking, route mapping, and ETA estimation.',
      'Implemented OAuth 2.0 social auth and a Refer-a-Friend module with automated reward tracking.'
    ],
    accent: '#06b6d4',
    badge: 'Active Production'
  },
  {
    id: 'rightlyhr',
    title: 'RightlyHR — Product Website',
    period: 'Production Deployment',
    category: 'Product Landing & Platform Website',
    tech: ['Next.js', 'React.js', 'TypeScript', 'JavaScript', 'Bootstrap', 'SCSS', 'Java APIs'],
    img: '/assets/images/rightlyhr.png',
    website: 'https://rightlyhr.com/',
    problem: 'RightlyHR needed a high-performance, responsive marketing and product platform to showcase its software features and capture customer inquiries efficiently.',
    contribution: 'Built and deployed the product website from scratch using Next.js, React, TypeScript, and SCSS. Converted Figma UX designs into pixel-perfect UI components integrated with Java backend APIs.',
    points: [
      'Engineered SSR & static pages in Next.js for high SEO scores and rapid load speed.',
      'Translated Figma mockups into reusable, mobile-responsive React components.',
      'Integrated Java REST APIs for lead generation, form validation, and dynamic content.'
    ],
    accent: '#ec4899',
    badge: 'Live Production'
  },
  {
    id: 'sirisampada',
    title: 'Sirisampada Infratech — Corporate Website',
    period: 'Production Deployment',
    category: 'Corporate Real Estate Website',
    tech: ['Angular', 'PrimeNG', 'TypeScript', 'HTML5', 'CSS3'],
    img: '/assets/images/sirisampada.png',
    website: 'https://sirisampadainfratech.in/',
    problem: 'Sirisampada Infratech required a modern digital showcase to present corporate projects, property portfolios, and client inquiry pipelines.',
    contribution: 'Developed and deployed the corporate website using Angular and PrimeNG. Created modular UI components, responsive layout structures, and fast page transitions.',
    points: [
      'Designed and deployed responsive corporate UI layouts tailored for mobile & desktop.',
      'Implemented reusable Angular components and PrimeNG elements for interactive property views.',
      'Optimized load times and cross-browser visual consistency.'
    ],
    accent: '#10b981',
    badge: 'Live Production'
  },
  {
    id: 'ecommerce',
    title: 'Shopping E-Commerce Application',
    period: 'Jan 2024 – Mar 2024',
    category: 'E-Commerce Frontend App',
    tech: ['ReactJS', 'Redux', 'JavaScript', 'Bootstrap', 'Formik', 'Yup', 'React Router', 'Axios'],
    img: '/assets/images/ecommerce.png',
    problem: 'A scalable e-commerce storefront needed centralized cart state, dynamic product catalog searching, and validated checkout flows.',
    contribution: 'Created a component-driven React application with Redux state management for cart/wishlist items, Formik/Yup checkout validation, and Axios REST API synchronization.',
    points: [
      'Configured client-side routing with React Router for seamless single-page navigation.',
      'Applied Redux for global state sync across product listings, shopping cart, and user profile.',
      'Integrated REST APIs for catalog fetching, user auth, and simulated order placement.'
    ],
    accent: '#f59e0b',
    badge: 'Featured App'
  }
];

export default function Projects() {
  return (
    <section className="wpo-portfolio-section section-padding" id="projects">
      <div className="container">
        <div className="wpo-section-title text-center">
          <span className="section-tag"><i className="fas fa-folder-open"></i> Portfolio Case Studies</span>
          <h2 className="gradient-text">Featured Projects & Deliverables</h2>
          <p style={{ margin: '0 auto' }}>
            Production-deployed web applications, enterprise platforms, and ride-hailing systems built with Angular, React, Next.js, and REST APIs.
          </p>
        </div>

        <div className="projects-grid">
          {caseStudies.map((project, index) => (
            <motion.div
              key={project.id}
              className="case-study-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Visual preview column */}
              <div className="case-study-visual">
                <img 
                  src={project.img} 
                  alt={project.title}
                  onError={(e) => {
                    // Fallback visual if screenshot file is missing
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `
                      <div style="
                        width:100%; height:100%; min-height:260px;
                        display:flex; flex-direction:column; align-items:center; justify-content:center;
                        background: radial-gradient(circle at center, rgba(139,92,246,0.15) 0%, rgba(17,23,38,0.9) 100%);
                        border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 24px; text-align: center;
                      ">
                        <i class="${project.category.includes('Mobility') ? 'fas fa-car' : project.category.includes('Enterprise') ? 'fas fa-users-cog' : 'fas fa-globe'}" style="font-size: 48px; color: ${project.accent}; margin-bottom: 14px;"></i>
                        <h4 style="font-size: 18px; color: #ffffff; margin-bottom: 6px;">${project.title}</h4>
                        <span style="font-size: 12px; color: var(--text-secondary); font-family: 'Fira Code', monospace;">${project.tech.slice(0, 3).join(' · ')}</span>
                      </div>
                    `;
                  }}
                />
              </div>

              {/* Info & case breakdown column */}
              <div className="case-study-info">
                <div className="project-meta-row">
                  <span className="project-category" style={{ color: project.accent }}>
                    {project.category}
                  </span>
                  <span className="tech-tag-sm" style={{ borderColor: `${project.accent}40`, color: project.accent }}>
                    {project.badge}
                  </span>
                </div>

                <h3>{project.title}</h3>
                <span className="project-period" style={{ display: 'block', marginBottom: '16px' }}>
                  <i className="far fa-calendar-alt" style={{ marginRight: '6px' }}></i>{project.period}
                </span>

                <div className="case-study-block">
                  <div className="case-study-block-title">Problem & Context</div>
                  <p>{project.problem}</p>
                </div>

                <div className="case-study-block">
                  <div className="case-study-block-title">Key Contributions</div>
                  <ul className="project-bullets">
                    {project.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech-tags">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag-sm">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline"
                      style={{ padding: '10px 20px', fontSize: '13px' }}
                    >
                      <i className="fas fa-external-link-alt"></i> Visit Live Website
                    </a>
                  )}
                  <a 
                    href="https://github.com/krishnavamsinalluri" 
                    target="_blank" 
                    rel="noreferrer"
                    className="social-link"
                    title="View GitHub Repository"
                    style={{ width: '38px', height: '38px', fontSize: '16px' }}
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
