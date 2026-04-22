import data from '../data/portfolioData'

function Contact() {
  return (
    <section id="contact" className="section-padding bg-section-dark">
      <div className="container">
        <div className="section-heading text-center mb-5">
          <span>Let’s Connect</span>
          <h2>Contact</h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="glass-card p-4 p-md-5 text-center">
              <p className="fs-5 mb-4">
                I am open to collaborations, academic opportunities, IT infrastructure roles,
                software projects, and technical leadership discussions.
              </p>

              <div className="row g-4 text-start">
                <div className="col-md-4">
                  <div className="contact-box h-100">
                    <i className="bi bi-envelope-fill"></i>
                    <h6>Email</h6>
                    <a href={`mailto:${data.email}`}>{data.email}</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-box h-100">
                    <i className="bi bi-telephone-fill"></i>
                    <h6>Phone</h6>
                    <a href={`tel:${data.phone}`}>{data.phone}</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-box h-100">
                    <i className="bi bi-geo-alt-fill"></i>
                    <h6>Location</h6>
                    <p className="mb-0">{data.location}</p>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
                <a href={data.github} target="_blank" rel="noreferrer" className="btn btn-info">
                  <i className="bi bi-github me-2"></i>GitHub
                </a>
                {/*<a href={data.netlify} target="_blank" rel="noreferrer" className="btn btn-outline-light">
                  <i className="bi bi-globe2 me-2"></i>Live Portfolio
                </a>*/}
                <a href={data.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline-light">
                  <i className="bi bi-linkedin me-2"></i>Linkedin
                </a>
                <a href={data.youtube} target="_blank" rel="noreferrer" className="btn btn-outline-light">
                  <i className="bi bi-youtube me-2"></i>Youtube
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact