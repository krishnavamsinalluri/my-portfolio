import { motion } from 'framer-motion';

const education = [
  {
    years: '2019 – 2023',
    degree: 'B.Tech — Civil Engineering',
    institution: 'JNTUK, Sasi Institute of Technology & Engineering',
    details: 'Transitioned into software engineering through hands-on project work and focused self-driven upskilling.',
    icon: 'fas fa-graduation-cap'
  },
  {
    years: '2017 – 2019',
    degree: 'Intermediate (MPC)',
    institution: 'Narayana Junior College',
    details: 'Higher Secondary Education with focus on Mathematics, Physics, and Chemistry.',
    icon: 'fas fa-school'
  },
  {
    years: '2016',
    degree: 'SSC',
    institution: 'Manasa English Medium High School',
    details: 'Board of Secondary Education',
    icon: 'fas fa-book-reader'
  },
];

const certifications = [
  {
    title: 'ReactJS Training',
    issuer: 'Edupoly Solutions Private Limited',
    details: 'Components, hooks, state management, API integration, and scalable web application development.',
    icon: 'fab fa-react',
    color: '#61dafb'
  },
  {
    title: 'ChatGPT for Everyone',
    issuer: 'Learn Prompting',
    details: 'Issued Apr 3, 2026; Expires Apr 3, 2027',
    id: 'ut1yxkaefd',
    icon: 'fas fa-robot',
    color: '#8b5cf6'
  },
];

export default function Education() {
  return (
    <section className="wpo-education-section section-padding" id="education">
      <div className="container">
        <div className="wpo-section-title text-center">
          <span className="section-tag"><i className="fas fa-university"></i> Background</span>
          <h2 className="gradient-text">Education & Certifications</h2>
          <p style={{ margin: '0 auto' }}>
            Academic qualifications and professional development certifications.
          </p>
        </div>

        <div className="edu-cert-grid">
          {/* Education column */}
          <div>
            <h3 style={{ fontSize: '20px', marginBottom: '20px', color: 'var(--accent-cyan-light)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fas fa-graduation-cap"></i> Academic Education
            </h3>
            {education.map((item, idx) => (
              <motion.div
                key={item.degree}
                className="edu-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="edu-years">
                  <i className="far fa-calendar-alt" style={{ marginRight: '6px' }}></i>{item.years}
                </div>
                <h3>{item.degree}</h3>
                <div className="edu-institution">{item.institution}</div>
                <p className="edu-desc">{item.details}</p>
              </motion.div>
            ))}
          </div>

          {/* Certifications column */}
          <div>
            <h3 style={{ fontSize: '20px', marginBottom: '20px', color: 'var(--accent-violet-light)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fas fa-certificate"></i> Training & Certifications
            </h3>
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.title}
                className="cert-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                  <i className={cert.icon} style={{ fontSize: '24px', color: cert.color }}></i>
                  <div>
                    <h4 style={{ fontSize: '18px', color: 'var(--text-primary)' }}>{cert.title}</h4>
                    <span style={{ fontSize: '13px', color: 'var(--accent-cyan-light)', fontWeight: '600' }}>{cert.issuer}</span>
                  </div>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                  {cert.details} {cert.id && <span style={{ color: 'var(--text-secondary)', fontFamily: 'Fira Code, monospace', display: 'block', marginTop: '4px' }}>Certificate ID: {cert.id}</span>}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
