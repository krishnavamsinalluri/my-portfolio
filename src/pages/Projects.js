const projects = [
  {
    img: '/assets/images/hrms.png',
    title: 'HR Management System',
    tech: 'Angular · .NET · PrimeNG',
    desc: 'Automated HR operations including attendance, payroll, leave management, and document management with role-based access control.',
    icon: 'fas fa-users-cog',
    color: '#6c5ce7',
  },
  {
    img: '/assets/images/valam.png',
    title: 'Valam (Ride-Hailing)',
    tech: 'Angular · Google Maps API · Firebase · Java',
    desc: 'Real-time ride booking and live tracking system for bike and car rides with driver-rider matching.',
    icon: 'fas fa-car',
    color: '#0ea5e9',
  },
  {
    img: '/assets/images/ecommerce.png',
    title: 'E-commerce Application',
    tech: 'React.js · Redux · Axios',
    desc: 'Dynamic product listing, cart management, wishlist, and secure checkout flows with REST API integration.',
    icon: 'fas fa-shopping-bag',
    color: '#f59e0b',
  },
];

export default function Projects() {
  return (
    <section className="wpo-portfolio-section section-padding" id="portfolio">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12">
            <div className="wpo-section-title text-center">
              <span>Portfolio</span>
              <h2>Recent Projects</h2>
            </div>
          </div>
        </div>
        <div className="projects-grid">
          {projects.map(({ img, title, tech, desc, icon, color }) => (
            <div className="project-card" key={title}>
              <div className="project-img-wrap">
                <img src={img} alt={title} />
              </div>
              <div className="project-body">
                <div className="project-title-row">
                  <div className="project-icon" style={{ background: `${color}18`, color }}>
                    <i className={icon}></i>
                  </div>
                  <h3>{title}</h3>
                </div>
                <span className="tech-tag">{tech}</span>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
