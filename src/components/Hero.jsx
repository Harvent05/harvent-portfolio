import data from '../data/portfolioData'
import profileImg from '../assets/Harvent.jpg'

function Hero() {
  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            {/*<span className="badge hero-badge mb-3">Open to opportunities</span>*/}
            <h1 className="display-5 fw-bold mb-3">{data.name}</h1>
            <h2 className="h3 text-info mb-3">{data.role}</h2>
            <p className="lead text-light-emphasis mb-4">{data.tagline}</p>
            <p className="hero-text mb-4">{data.intro}</p>

            <div className="d-flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-info btn-lg px-4">
                View My Work
              </a>
              <a
                href={data.resumeLink}
                className="btn btn-outline-light btn-lg px-4"
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="hero-card card border-0 shadow-lg">
              <div className="card-body p-4 p-md-5">
                {/*<div className="avatar-circle mx-auto mb-4">
                  <i className="bi bi-person-workspace"></i>
                </div>*/}
                <div className="text-center mb-4">
                  <img
                    src={profileImg}
                    alt="Harvent"
                    className="profile-img"
                  />
                </div>
                <div className="row g-3">
                  {data.stats.map((item, index) => (
                    <div className="col-12" key={index}>
                      <div className="stat-box">
                        <h5 className="mb-1">{item.value}</h5>
                        <p className="mb-0">{item.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero