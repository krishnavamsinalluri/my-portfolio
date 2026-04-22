const education = [
  {
    years: '2019 – 2023',
    degree: 'B.Tech – Civil Engineering',
    institution: 'JNTUK, Sasi Institute of Technology & Engineering',
    grade: 'CGPA: 6.2',
  },
  {
    years: '2017 – 2019',
    degree: 'Intermediate (MPC)',
    institution: 'Narayana Junior College',
    grade: 'CGPA: 7.6',
  },
  {
    years: '2016',
    degree: 'SSC',
    institution: 'Manasa English Medium High School',
    grade: 'CGPA: 7.5',
  },
];

const certifications = [
  {
    title: 'ChatGPT for Everyone – Learn Prompting',
    issuer: 'Online Certification',
    date: 'April 2024',
    id: 'ut1yxkaefd',
  },
];

export default function Education() {
  return (
    <section className="wpo-education-section section-padding" id="education">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12">
            <div className="wpo-section-title text-center">
              <span>Education</span>
              <h2>Academic Background</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {education.map(({ years, degree, institution, grade }) => (
            <div className="col-lg-4 col-md-6 col-12" key={degree}>
              <div className="wpo-edu-item">
                <h3>{years}</h3>
                <h2>{degree}</h2>
                <p>{institution}</p>
                <span>{grade}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="certification-wrap mt-5">
          <h3>Certifications</h3>
          {certifications.map(({ title, issuer, date, id }) => (
            <div className="cert-item" key={id}>
              <h4>{title}</h4>
              <p>{issuer} &nbsp;|&nbsp; {date} &nbsp;|&nbsp; ID: {id}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
