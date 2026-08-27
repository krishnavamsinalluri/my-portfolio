import { useEffect, useRef } from 'react';

const projects = [
  {
    title: 'HR Management System',
    period: 'Sept 2024 – Jan 2025',
    tech: 'Angular · .NET · Bootstrap · PrimeNG',
    points: [
      'Streamlined employee self-service and automated core HR operations across My Info, Settings, Assets, Attendance, Expenses, Events, Documents, Letter Generation, and Timesheet Management.',
      'Designed responsive, user-friendly interfaces and integrated REST APIs for seamless frontend-backend communication.',
      'Ensured form validation, data consistency, and optimized performance across modules.',
    ],
    icon: 'fas fa-users-cog',
    color: '#6c5ce7',
    img: '/assets/images/hrms.png',
  },
  {
    title: 'Valam — Ride-Hailing Platform',
    period: 'Feb 2025 – Present',
    tech: 'Angular · Java · Bootstrap · PrimeNG · REST APIs · Firebase · Google Maps API',
    points: [
      'Built ride booking, real-time driver tracking, and secure payment features across customer, driver, and admin roles.',
      'Implemented trip history, fare calculation, ratings, notifications, and a referral rewards module.',
      'Integrated Google Maps API for location tracking/routing and implemented OAuth 2.0 authentication.',
    ],
    icon: 'fas fa-car',
    color: '#0ea5e9',
    img: '/assets/images/valam.png',
  },
  {
    title: 'Shopping E-commerce Application',
    period: 'Jan 2024 – Mar 2024',
    tech: 'ReactJS · Redux · JavaScript · HTML · CSS · Bootstrap · Formik · Yup · React Router · Axios',
    points: [
      'Built a fully functional e-commerce frontend with dynamic product listings, cart management, and Formik/Yup form validation.',
      'Configured client-side routing with React Router and integrated REST APIs via Axios for product data, auth, and orders.',
      'Applied Redux for centralized state management across cart, wishlist, and user profile.',
    ],
    icon: 'fas fa-shopping-bag',
    color: '#f59e0b',
    img: '/assets/images/ecommerce.png',
  },
  {
    title: 'Sirisampada Infratech — Corporate Website',
    period: 'Production Deployment',
    tech: 'Angular · PrimeNG · HTML · CSS · TypeScript',
    points: [
      'Developed and deployed a responsive corporate website for Sirisampada Building using Angular and PrimeNG.',
      'Designed modern, user-friendly, and mobile-responsive UI components to enhance the user experience.',
      'Implemented reusable Angular components, integrated PrimeNG UI elements, and optimized application performance across devices and browsers.',
    ],
    website: 'https://sirisampadainfratech.in/',
    icon: 'fas fa-building',
    color: '#10b981',
    img: '/assets/images/sirisampada.png',
  },
  {
    title: 'RightlyHR — Product Website',
    period: 'Production Deployment',
    tech: 'Next.js · React.js · JavaScript · TypeScript · Bootstrap · HTML5 · CSS3 · SCSS · Java (backend APIs)',
    points: [
      'Developed and deployed the RightlyHR product website from scratch using Next.js, React.js, JavaScript, TypeScript, Bootstrap, HTML5, CSS3, and SCSS, with Java backend APIs.',
      'Converted Figma/UX designs into pixel-perfect, responsive, and reusable UI components.',
      'Integrated frontend with Java REST APIs for dynamic data, responsive layouts, animations, forms, and navigation.',
    ],
    website: 'https://rightlyhr.com/',
    icon: 'fas fa-globe',
    color: '#ec4899',
    img: '/assets/images/rightlyhr.png',
  },
];

export default function Projects() {
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const cards = sectionRef.current?.querySelectorAll('.project-card');
        cards?.forEach((card, i) => {
          card.style.opacity = '0';
          card.style.transform = 'translateY(40px) scale(0.95)';
          setTimeout(() => {
            card.style.transition = 'all 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, i * 130);
        });
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="wpo-portfolio-section section-padding" id="projects" ref={sectionRef}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12">
            <div className="wpo-section-title text-center">
              <span>Portfolio</span>
              <h2>Featured Projects</h2>
            </div>
          </div>
        </div>
        <div className="projects-grid">
          {projects.map(({ title, period, tech, points, website, icon, color }) => (
            <div className="project-card" key={title}>
              <div className="project-card-header" style={{ borderTop: `4px solid ${color}` }}>
                <div className="project-title-row">
                  <div className="project-icon" style={{ background: `${color}18`, color }}>
                    <i className={icon}></i>
                  </div>
                  <div>
                    <h3>{title}</h3>
                    {period && <span className="project-period">{period}</span>}
                  </div>
                </div>
                <span className="tech-tag">{tech}</span>
              </div>
              <div className="project-body">
                <ul className="project-points-list">
                  {points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
                {website && (
                  <div className="project-website-link">
                    <a href={website} target="_blank" rel="noreferrer" className="website-btn" style={{ borderColor: color, color: color }}>
                      <i className="fas fa-external-link-alt"></i> Visit Live Website
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
