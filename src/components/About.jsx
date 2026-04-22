import data from '../data/portfolioData'

function About() {
  return (
    <section id="about" className="section-padding bg-section-dark">
      <div className="container">
        <div className="section-heading text-center mb-5">
          <span>About Me</span>
          <h2>Professional Profile</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="glass-card p-4 p-md-5">
              {data.about.map((paragraph, index) => (
                <p className="mb-3 fs-5" key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About