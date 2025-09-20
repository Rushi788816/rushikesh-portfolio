import React from "react";
import projects from "../data/projects";

const Projects = () => {
  // Show only first 3 projects (you can adjust the slice)
  const featuredProjects = projects.slice(0, 3);

  return (

    <section className="p-4">
      <div className={`text-center mb-5 `}>
        <h2 className="gradient-text display-4 mb-3" style={{ fontSize: '3.5rem', fontWeight: '800' }}>
          My Projects
        </h2>
       
      </div>
      {/* Projects Grid */}
      <div className="row g-4">
        {featuredProjects.map((project) => (
          <div key={project.id} className="col-lg-4 col-md-6 stagger-item">
            <div className="card animated-card glass-card h-100 border-0 shadow-lg">

              {/* Card Body */}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title gradient-text">{project.title}</h5>
                <p className="card-text text-muted">{project.description}</p>

                {/* Technologies */}
                <div className="mb-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="badge bg-gradient-primary me-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="list-unstyled text-muted flex-grow-1">
                  {project.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
