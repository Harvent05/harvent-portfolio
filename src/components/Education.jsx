import data from '../data/portfolioData'

function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container">
        <div className="section-heading text-center mb-5">
          <span>Academic Background</span>
          <h2>Education</h2>
        </div>

        <div className="row g-4 justify-content-center">
          {data.education.map((item, index) => (
            <div className="col-md-6" key={index}>
              <div className="info-card h-100">
                <div className="icon-box mb-3">
                  <i className="bi bi-mortarboard"></i>
                </div>
                <h4>{item.institution}</h4>
                <p className="mb-2 text-info fw-semibold">{item.program}</p>
                <p className="mb-0 text-secondary">{item.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education