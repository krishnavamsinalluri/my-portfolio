const experiences = [
  {
    period: 'April 2026 – Present',
    role: 'Software Engineer',
    company: 'SNAD Developers, Hyderabad, India',
    badge: 'Promoted',
    points: [
      'Leading frontend development for enterprise-grade web applications using Angular and React.js.',
      'Architected and delivered the HR Management System — covering attendance, payroll, leave, and document management modules.',
      'Built Valam, a real-time ride-hailing platform with live tracking using Google Maps API and Firebase.',
      'Collaborating with backend (.NET / Java) teams to define API contracts and ensure smooth data flow.',
      'Maintaining code quality through Git/GitHub workflows, code reviews, and modular component architecture.',
    ],
  },
  {
    period: 'July 2024 – March 2026',
    role: 'Software Trainee Engineer',
    company: 'SNAD Developers, Hyderabad, India',
    badge: 'Promoted',
    points: [
      'Developed an E-commerce application with product listing, cart management, and secure checkout using React.js and Redux.',
      'Integrated REST APIs with Axios for seamless frontend-backend communication.',
      'Contributed to the Valam ride-hailing platform frontend using Angular and Google Maps API.',
      'Gained hands-on experience with TypeScript, PrimeNG, and component-based architecture.',
    ],
  },
  {
    period: 'March 2024 – June 2024',
    role: 'Intern – Frontend Developer',
    company: 'SNAD Developers, Hyderabad, India',
    badge: null,
    points: [
      'Joined as a Frontend Development Intern and worked on Angular-based internal tools.',
      'Learned enterprise coding standards, REST API integration, and Git workflows.',
      'Assisted in building UI components for the HR Management System.',
    ],
  },
  {
    period: 'March 2023 – August 2023',
    role: 'React Developer Intern',
    company: 'Edupoly Solutions Private Limited, Hyderabad, India',
    badge: null,
    points: [
      'Completed a 6-month internship focused on building React.js web applications.',
      'Developed reusable UI components and integrated REST APIs using Axios.',
      'Gained practical experience with React hooks,Redux, state management, and responsive design.',
    ],
  },
];

export default function Experience() {
  return (
    <section className="wpo-work-experience-area section-padding" id="experience">
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
          {experiences.map(({ period, role, company, badge, points }) => (
            <div className="wpo-work-experience-item" key={role + period}>
              <div className="wpo-work-experience-year">
                {period}
                {badge && <span className="exp-badge">{badge}</span>}
              </div>
              <div className="wpo-work-experience-content">
                <h3>{role}</h3>
                <p>{company}</p>
                <ul>
                  {points.map((pt, i) => <li key={i}>{pt}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
