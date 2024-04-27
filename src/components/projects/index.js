import React from "react";
import "./styles.css";

function Projects({language}) {

  const projects = [
    {
      url: "https://medium.com/@miraxe/eda-seattle-houses-air-bnb-bussines-questions-6e8501df82eb",
      alt: "EDA - Seattle Houses AirBnb - Bussines Questions",
      name: "EDA - Seattle Houses AirBnb - Bussines Questions"
    },
  ];

  return (
    <section className="projects">
      <h1 className="project-name">
        <span>{language.projects}</span>
      </h1>
      <div className="projects-cards">
        {projects.map((project, index) => (
        <div key={index} className="card-project">
          <p onClick={() => {
              console.log('asokasko');
              window.open(project.url, '_blank')
            }} className="project-title">{project.name}</p>
        </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
