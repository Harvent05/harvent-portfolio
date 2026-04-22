import data from '../data/portfolioData'

function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="section-heading text-center mb-5">
          <span>Expertise</span>
          <h2>Core Skills</h2>
        </div>
        <div className="row g-3 justify-content-center">
          {data.skills.map((skill, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={index}>
              <div className="skill-card text-center h-100">
                <div className="skill-icon mb-3">
                  <i className="bi bi-stars"></i>
                </div>
                <h6 className="mb-0">{skill}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills