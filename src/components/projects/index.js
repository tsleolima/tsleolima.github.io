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
            src="https://medium.com/@miraxe/eda-seattle-houses-air-bnb-bussines-questions-6e8501df82eb"
            alt="EDA - Seattle Houses AirBnb - Bussines Questions"
          />
          <p className="project-title">EDA - Seattle Houses AirBnb - Bussines Questions</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
