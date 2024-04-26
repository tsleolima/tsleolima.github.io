import React from "react";
import "./styles.css";

function Projects({language, projects}) {


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
