import "./styles.css";
import React from "react";
import { ReactComponent as ReactIcon } from "../../assets/react_icon.svg";
import { ReactComponent as CircleIcon } from "../../assets/circle_icon.svg";
import MyPicture from "../../assets/perfil.jpeg";

function About() {
  return (
    <section className="about">
      <h1 className="about-name">
        <span>SOBRE MIM</span>
      </h1>
      <div className="details">
        <div className="photograph">
          <img
            className="pic"
            height="250px"
            src={MyPicture}
            alt="my photograph"
          />
          <ReactIcon alt="react icon" className="tech-icon" />
          <ReactIcon alt="react icon" className="tech-icon" />
          <ReactIcon alt="react icon" className="tech-icon" />
        </div>
        <div className="card">
          <div className="header-card">
            <CircleIcon
              alt="red circle"
              fill="#ed4c5c"
              className="fcircle-icon"
            />
            <CircleIcon
              alt="yellow circle"
              fill="#FDCB58"
              className="circle-icon"
            />
            <CircleIcon
              alt="green circle"
              fill="#78B159"
              className="circle-icon"
            />
          </div>
          <div className="internal-card">
            <br />
            <span className="hi">Hi :)</span>
            <br />
            <br />
            Hi :) 👋 I'm Davina Griss. Fictional person for preview purposes :)
            I'm working with newest front-end frameworks like Angular, React and
            Vue. What you are seeing now is portfolio template from Dorota1997.
            If you like this portfolio template, make sure to ⭐ the repository
            to make it more recognizable for other users. Thank you 💜
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
