import { useEffect, useRef } from 'react';

const experiences = [
  {
    period: 'March 2024 – Present',
    role: 'Software Engineer',
    company: 'SNAD Developers, Hyderabad, India',
    badge: 'Present',
    projects: [
      {
        name: 'Project: HR Management System',
        tech: 'Angular, .NET, Bootstrap, PrimeNG',
        points: [
          'Developed and implemented a comprehensive HR Management System enabling employee self-service and automating HR operations such as My Info, Settings, Assets, Attendance, Expenses, Events, Documents, Timesheet, and Letter Generation.',
          'Enhanced UI/UX using Bootstrap and PrimeNG for responsive, interactive interfaces; integrated REST APIs for efficient data handling between frontend and backend.',
          'Performed root cause analysis and troubleshooting on production issues, providing fixes and improvement recommendations.',
        ],
      },
      {
        name: 'Project: Valam (Client Project)',
        tech: 'Angular, Java, Bootstrap, PrimeNG, REST APIs, Firebase, Google Maps API',
        points: [
          'Contributed to an on-demand ride-hailing application (similar to Uber/Rapido) with role-based modules for customers, drivers, and administrators.',
          'Built features for real-time driver tracking, secure payments, trip history, fare calculation, ratings, and notifications; integrated Google Maps API for location tracking and routing.',
          'Implemented secure authentication (Google/Facebook OAuth 2.0) and a Refer-a-Friend module with referral tracking and rewards.',
        ],
      },
    ],
  },
  {
    period: 'Internship',
    role: 'ReactJS Developer Intern',
    company: 'Edupoly Solutions Private Limited, Hyderabad, India',
    badge: null,
    projects: [
      {
        name: 'ReactJS Web Application Development',
        tech: 'React.js, JavaScript, Redux, HTML5, CSS3, REST APIs',
        points: [
          'Completed an intensive ReactJS internship focused on building scalable, component-based web applications.',
          'Developed interactive UI components, managed application state, and integrated REST APIs.',
          'Practiced modern web development standards, modular component architecture, and responsive design.',
        ],
      },
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const items = sectionRef.current?.querySelectorAll('.wpo-work-experience-item');
        items?.forEach((item, i) => {
          item.style.opacity = '0';
          item.style.transform = 'translateY(45px)';
          setTimeout(() => {
            item.style.transition = 'all 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, i * 180);
        });
        observer.disconnect();
      }
    }, { threshold: 0.15 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="wpo-work-experience-area section-padding" id="experience" ref={sectionRef}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12">
            <div className="wpo-section-title text-center">
              <span>Work Experience</span>
              <h2>Professional Journey</h2>
            </div>
          </div>
        </div>
        <div className="wpo-work-experience-wrap">
          {experiences.map(({ period, role, company, badge, projects }) => (
            <div className="wpo-work-experience-item" key={role + period}>
              <div className="wpo-work-experience-year">
                {period}
                {badge && <span className="exp-badge">{badge}</span>}
              </div>
              <div className="wpo-work-experience-content">
                <h3>{role}</h3>
                <p className="exp-company">{company}</p>
                {projects.map((proj, pIdx) => (
                  <div className="exp-project-block" key={pIdx}>
                    <h4 className="exp-project-title">{proj.name}</h4>
                    <span className="exp-project-tech">{proj.tech}</span>
                    <ul>
                      {proj.points.map((pt, i) => <li key={i}>{pt}</li>)}
                    </ul>
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
