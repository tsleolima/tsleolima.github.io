import "./styles.css";
import React from "react";
import { ReactComponent as CircleIcon } from "../../assets/circle_icon.svg";
import MyPicture from "../../assets/perfil.jpg";
import Python from "../../assets/python.png";
import Juyter from "../../assets/juyter.png";
import Scikit from "../../assets/scikit-learn.png";

function About({language}) {
  return (
    <section className="about">
      <h1 className="about-name">
        <span>{language.About}</span>
      </h1>
      <div className="details">
        <div className="photograph">
          <img
            className="pic"
            height="300px"
            src={MyPicture}
            alt="my photograph"
          />
          <div className="tech-div">
          <img src={Python} alt="python icon" className="tech-icon" />
          <img src={Juyter} alt="jupyter icon" className="tech-icon" />
          <img src={Scikit} alt="scikitlearn icon" className="tech-icon" />
          </div>
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
            <span className="hi">{language.hi}</span>
            <br />
            <br />
            {language.bio}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
