import React from "react";
import "./styles.css";

function Experience({ experiences }) {
  return (
    <section className="experience">
      <h1 className="project-name">
        <span>EXPERIÊNCIA</span>
      </h1>
      <div className="timeline">
        {experiences.map((e, i) => (
          <div className="card">
            <div className="card-arrow" />
            <div className="badge">
              <p className="badge-name" key={i}>
                {e.tech_name}
              </p>
            </div>
            <p className="names">{e.experience_name}</p>
            <p className="sub-names">{e.experience_details}</p>
            <div className="keywords">
              {e.keywords.map((k, j) => (
                <p className="keyword-name" key={j}>
                  {k}
                </p>
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
