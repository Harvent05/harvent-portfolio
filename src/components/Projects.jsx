import data from '../data/portfolioData'

function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="section-heading text-center mb-5">
          <span>Portfolio</span>
          <h2>Highlighted Projects</h2>
        </div>

        <div className="row g-4">
          {data.projects.map((project, index) => (
            <div className="col-lg-4" key={index}>
              <div className="project-card h-100">
                <div className="project-top">
                  <span className="project-category">{project.category}</span>
                  <h4 className="mt-3">{project.title}</h4>
                  <p>{project.description}</p>
                </div>
                <div className="mt-auto">
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {project.tech.map((item, i) => (
                      <span key={i} className="tech-badge">
                        {item}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="btn btn-outline-info w-100" target="_blank" rel="noreferrer">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects