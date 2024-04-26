import React from "react";
import "./styles.css";

function Experience({ language, experiences }) {
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
                {e.experience_name}
              </p>
            </div>
            <p className="names">{e.experience_name}</p>
            <p className="sub-names">{e.experience_details}</p>
            <p className="sub-sub-desc">{e.experience_description}</p>
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
