import data from '../data/portfolioData'

function Experience() {
  return (
    <section id="experience" className="section-padding bg-section-dark">
      <div className="container">
        <div className="section-heading text-center mb-5">
          <span>Career Journey</span>
          <h2>Work Experience</h2>
        </div>

        <div className="timeline">
          {data.experience.map((job, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-content glass-card">
                <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center mb-3">
                  <div>
                    <h4 className="mb-1">{job.role}</h4>
                    <h5 className="text-info mb-0">{job.company}</h5>
                  </div>
                  <span className="timeline-period mt-2 mt-lg-0">{job.period}</span>
                </div>
                <ul className="custom-list mb-0">
                  {job.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience