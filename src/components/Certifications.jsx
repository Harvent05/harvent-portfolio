import data from '../data/portfolioData'

function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-section-dark">
      <div className="container">
        <div className="section-heading text-center mb-5">
          <span>Credentials</span>
          <h2>Certifications</h2>
        </div>

        <div className="row g-3">
          {data.certifications.map((cert, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="cert-card h-100">
                <div className="d-flex align-items-start gap-3">
                  <i className="bi bi-patch-check-fill text-info fs-4"></i>
                  <p className="mb-0">{cert}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications