import React from "react";
import "./styles.css";

function Tecnologies({language}) {

  const techs = [
    {
      icone: "python-plain",
      name: "Python"
    },
    {
      icone: "jupyter-plain",
      name: "Jupyter"
    },
    {
      icone: "pandas-plain",
      name: "Pandas"
    },
    {
      icone: "numpy-plain",
      name: "Numpy"
    },
    {
      icone: "tensorflow-original",
      name: "TensorFlow"
    },
    {
      icone: "java-plain",
      name: "Java"
    },
    {
      icone: "spring-plain",
      name: "Spring"
    },
    {
      icone: "git-plain",
      name: "Git"
    },
    {
      icone: "docker-plain",
      name: "Docker"
    },
  ]

  return (
    <section className="skills">
      <h1 className="skill-name">
        <span>{language.tech}</span>
      </h1>
      <div className="techs">
        {techs.map((element, index) => (
          <div key={index} className="skill-icon-box">      
            <i className={`devicon-${element.icone} skill-icon`}></i>
            <p className="tech-name">{element.name}</p>
          </div>
        ))}
      </div>
      <p className="skill-name-subtitle">More: Scikit-learn, Matplotlib, Seaborn, Pytest.</p>
    </section>
  );
}

export default Tecnologies;
