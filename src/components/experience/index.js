import React from "react";
import "./styles.css";

function Experience({ language }) {

  console.log(language)

  const experiences = language.experiences

  return (
    <section className="experience">
      <h1 className="project-name">
        <span>{language.experience}</span>
      </h1>
      <div className="timeline">
        {experiences.map((e, i) => (
          <div key={i} className="card-experience">
            <div className="badge">
              <p className="badge-name" key={i}>
                {e.name}
              </p>
            </div>
            <p className="names">{e.name}</p>
            <p className="sub-names">{e.details}</p>
            <p className="sub-sub-desc">{e.description}</p>
            <div className="keywords">
              {e.keywords.map((k, j) => (
                <span className="keyword-name" key={j}>
                  {k}
                </span>
              ))}
            </div>
            <p className="sub-sub-names">{e.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
