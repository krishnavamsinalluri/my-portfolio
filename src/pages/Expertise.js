const expertiseItems = [
  { icon: 'fab fa-angular', title: 'Frontend Development', desc: 'Expertise in building scalable SPAs using Angular and React.js, focusing on component-based architecture and performance.' },
  { icon: 'fas fa-layer-group', title: 'State Management', desc: 'Proficient in managing complex application states using Redux and RxJS, ensuring predictable data flow.' },
  { icon: 'fas fa-server', title: 'API Integration', desc: 'Seamlessly connecting frontends with backends via REST APIs using Axios and modern asynchronous techniques.' },
  { icon: 'fas fa-mobile-alt', title: 'Responsive UI/UX', desc: 'Designing mobile-first interfaces with Bootstrap and PrimeNG for a consistent user experience across devices.' },
  { icon: 'fab fa-github', title: 'Version Control', desc: 'Fluent in Git/GitHub workflows for collaborative development, code reviews, and version tracking.' },
  { icon: 'fas fa-location-arrow', title: 'Real-time Solutions', desc: 'Implementing real-time features like tracking and notifications using Google Maps API and Firebase.' },
];

export default function Expertise() {
  return (
    <section className="wpo-service-section section-padding" id="expertise">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12">
            <div className="wpo-section-title text-center">
              <span>Technical Expertise</span>
              <h2>My Core Competencies</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {expertiseItems.map(({ icon, title, desc }) => (
            <div className="col-lg-4 col-md-6 col-12" key={title}>
              <div className="wpo-service-item">
                <div className="icon"><i className={icon}></i></div>
                <h2>{title}</h2>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
