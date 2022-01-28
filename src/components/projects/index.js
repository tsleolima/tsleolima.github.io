import React from "react";
import "./styles.css";

function Projects() {
  return (
    <section className="projects">
      <h1 className="project-name">
        <span>PROJETOS</span>
      </h1>
      <div className="projects-cards">
        <div className="card-project">
          <img
            className="project-image"
            src="https://dorota1997.github.io/react-frontend-dev-portfolio/images/portfolio/animal-shelter/p1.jpg"
            alt="primeiro projeto"
          />
          <p className="project-title">ANIMAL SHELTER</p>
        </div>
        <div className="card-project">
          <img
            className="project-image"
            src="https://dorota1997.github.io/react-frontend-dev-portfolio/images/portfolio/animal-shelter/p1.jpg"
            alt="primeiro projeto"
          />
          <p className="project-title">ANIMAL SHELTER</p>
        </div>
        <div className="card-project">
          <img
            className="project-image"
            src="https://dorota1997.github.io/react-frontend-dev-portfolio/images/portfolio/animal-shelter/p1.jpg"
            alt="primeiro projeto"
          />
          <p className="project-title">ANIMAL SHELTER</p>
        </div>
        <div className="card-project">
          <img
            className="project-image"
            src="https://dorota1997.github.io/react-frontend-dev-portfolio/images/portfolio/animal-shelter/p1.jpg"
            alt="primeiro projeto"
          />
          <p className="project-title">ANIMAL SHELTER</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
