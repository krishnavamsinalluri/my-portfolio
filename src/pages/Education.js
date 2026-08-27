import { useEffect, useRef } from 'react';

const education = [
  {
    years: '2019 – 2023',
    degree: 'B.Tech — Civil Engineering',
    institution: 'JNTUK, Sasi Institute of Technology & Engineering',
    details: 'Transitioned into software development through hands-on project work and focused self-driven upskilling.',
  },
  {
    years: '2017 – 2019',
    degree: 'Intermediate',
    institution: 'Narayana Junior College',
    details: 'Higher Secondary Education with focus on Mathematics, Physics, and Chemistry.',
  },
  {
    years: '2016',
    degree: 'SSC',
    institution: 'Manasa English Medium High School',
    details: 'Board of Secondary Education',
  },
];

const certifications = [
  {
    title: 'ReactJS Training',
    issuer: 'Edupoly Solutions Private Limited',
    details: 'Components, hooks, state management, API integration, and scalable web application development.',
  },
  {
    title: 'ChatGPT for Everyone',
    issuer: 'Learn Prompting',
    details: 'Issued Apr 3, 2026; Expires Apr 3, 2027',
    id: 'ut1yxkaefd',
  },
];

export default function Education() {
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const eduItems = sectionRef.current?.querySelectorAll('.wpo-edu-item');
        eduItems?.forEach((item, i) => {
          item.style.opacity = '0';
          item.style.transform = 'translateY(35px) scale(0.96)';
          setTimeout(() => {
            item.style.transition = 'all 0.65s cubic-bezier(0.2, 0.8, 0.2, 1)';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0) scale(1)';
          }, i * 140);
        });

        const certItems = sectionRef.current?.querySelectorAll('.cert-item');
        certItems?.forEach((item, i) => {
          item.style.opacity = '0';
          item.style.transform = 'translateY(30px)';
          setTimeout(() => {
            item.style.transition = 'all 0.65s cubic-bezier(0.2, 0.8, 0.2, 1)';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 450 + i * 150);
        });

        observer.disconnect();
      }
    }, { threshold: 0.15 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="wpo-education-section section-padding" id="education" ref={sectionRef}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12">
            <div className="wpo-section-title text-center">
              <span>Education & Certifications</span>
              <h2>Academic & Training Background</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {education.map(({ years, degree, institution, details }) => (
            <div className="col-lg-4 col-md-6 col-12" key={degree}>
              <div className="wpo-edu-item">
                <h3>{years}</h3>
                <h2>{degree}</h2>
                <p><strong>{institution}</strong></p>
                <span>{details}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="certification-wrap mt-5">
          <h3>Training & Certifications</h3>
          <div className="row" style={{ marginTop: '20px' }}>
            {certifications.map(({ title, issuer, details, id }) => (
              <div className="col-lg-6 col-12 mb-4" key={title}>
                <div className="cert-item">
                  <h4><i className="fas fa-certificate" style={{ color: '#6c5ce7', marginRight: '8px' }}></i>{title}</h4>
                  <p className="cert-issuer"><strong>{issuer}</strong></p>
                  <p className="cert-details">{details} {id && <span className="cert-id">| Certificate ID: {id}</span>}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
