import { useEffect, useRef } from 'react';

const expertiseItems = [
  { icon: 'fab fa-react', title: 'Frontend & Modern Web Apps', desc: 'Expertise in building scalable SPAs and web applications using Angular, React.js, Next.js, and TypeScript with clean modular architecture.' },
  { icon: 'fas fa-globe', title: 'Product & Corporate Websites', desc: 'Developed and deployed production web applications like RightlyHR (Next.js/Java) and Sirisampada Infratech (Angular/PrimeNG) from scratch.' },
  { icon: 'fas fa-server', title: 'APIs & Backend Integration', desc: 'Seamlessly connecting frontends with REST APIs and Java/.NET-based backends using Axios and asynchronous data handling.' },
  { icon: 'fas fa-mobile-alt', title: 'Pixel-Perfect UI / Figma-to-UI', desc: 'Converting UX/UI and Figma designs into pixel-perfect, mobile-responsive, and reusable interfaces with Bootstrap, PrimeNG, and SCSS.' },
  { icon: 'fas fa-robot', title: 'AI-Assisted Development', desc: 'Leveraging AI tools like GitHub Copilot, Claude, and Antigravity for rapid prototyping, AI-assisted coding, and issue debugging.' },
  { icon: 'fas fa-tools', title: 'CI/CD, Support & Debugging', desc: 'Proficient in Git workflows, CI/CD releases, production support, root cause analysis, and troubleshooting production issues.' },
];

export default function Expertise() {
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const cards = sectionRef.current?.querySelectorAll('.wpo-service-item');
        cards?.forEach((card, i) => {
          card.style.opacity = '0';
          card.style.transform = 'translateY(40px) scale(0.96)';
          setTimeout(() => {
            card.style.transition = 'all 0.65s cubic-bezier(0.2, 0.8, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, i * 120);
        });
        observer.disconnect();
      }
    }, { threshold: 0.15 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="wpo-service-section section-padding" id="expertise" ref={sectionRef}>
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
