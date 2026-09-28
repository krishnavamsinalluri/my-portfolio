import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'SNAD Developers, Hyderabad, India',
    period: 'March 2024 – Present',
    badge: 'Current Role',
    projects: [
      {
        name: 'Project: HR Management System (HRMS)',
        tech: 'Angular · .NET · Bootstrap · PrimeNG · REST APIs',
        points: [
          'Developed employee self-service modules automating HR operations for My Info, Settings, Assets, Attendance, Expenses, Events, Documents, Timesheets, and Letter Generation.',
          'Enhanced UI/UX using Bootstrap and PrimeNG for responsive, accessible interfaces; integrated REST APIs for efficient data handling.',
          'Performed root cause analysis on production issues, delivering quick bug fixes and performance optimizations.'
        ]
      },
      {
        name: 'Project: Valam (On-Demand Ride-Hailing)',
        tech: 'Angular · Java · Bootstrap · PrimeNG · REST APIs · Firebase · Google Maps API',
        points: [
          'Contributed to an on-demand ride-hailing application with role-based portals for customers, drivers, and administrators.',
          'Built features for real-time driver tracking, secure payments, trip history, fare calculations, ratings, and push notifications; integrated Google Maps API for live location tracking and routing.',
          'Implemented OAuth 2.0 security (Google/Facebook) and a Refer-a-Friend module with referral rewards.'
        ]
      }
    ]
  },
  {
    role: 'ReactJS Developer Intern',
    company: 'Edupoly Solutions Private Limited, Hyderabad, India',
    period: 'Internship',
    badge: 'Internship',
    projects: [
      {
        name: 'ReactJS Web Application Development',
        tech: 'React.js · JavaScript · Redux · HTML5 · CSS3 · REST APIs',
        points: [
          'Completed an intensive ReactJS development internship focused on component-driven web applications.',
          'Built interactive UI components, managed application state with Redux, and integrated REST APIs.',
          'Practiced modern web development standards, modular component architecture, and responsive layout design.'
        ]
      }
    ]
  }
];

export default function Experience() {
  return (
    <section className="wpo-work-experience-area section-padding" id="experience">
      <div className="container">
        <div className="wpo-section-title text-center">
          <span className="section-tag"><i className="fas fa-briefcase"></i> Work Experience</span>
          <h2 className="gradient-text">Professional Journey</h2>
          <p style={{ margin: '0 auto' }}>
            2+ years of experience engineering web and enterprise applications at SNAD Developers and Edupoly.
          </p>
        </div>

        <div className="timeline-container">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role + exp.company}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className="timeline-node"></div>

              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <div className="timeline-company">
                      <i className="fas fa-building" style={{ marginRight: '6px' }}></i>{exp.company}
                    </div>
                  </div>
                  <span className="timeline-period">
                    <i className="far fa-calendar-alt" style={{ marginRight: '6px' }}></i>{exp.period}
                  </span>
                </div>

                {exp.projects.map((proj, pIdx) => (
                  <div key={pIdx} className="exp-project-box">
                    <h4 className="exp-project-name">{proj.name}</h4>
                    <span className="exp-project-stack">{proj.tech}</span>
                    <ul className="project-bullets" style={{ margin: '8px 0 0 0' }}>
                      {proj.points.map((pt, ptIdx) => (
                        <li key={ptIdx}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
