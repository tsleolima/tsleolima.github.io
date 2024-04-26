import "./styles.css";
import React from "react";
import { ReactComponent as GithubIcon } from "../../assets/github_icon.svg";
import { ReactComponent as BRFlagIcon } from "../../assets/brazil_icon.svg";
import { ReactComponent as USAFlagIcon } from "../../assets/united_states_icon.svg";
import Typical from "react-typical";
import { dictionary } from "../../strings/strings";
import computerImage from "../../assets/computer.png";

function Header({setLanguage}) {
  const titles = [
    "MOBILE DEVELOPER",
    1000,
    "DATA SCIENTIST",
    1000,
    "FULL STACK DEVELOPER",
    1000,
  ];

  const HeaderTitleTypeAnimation = React.memo(
    () => {
      return (
        <Typical className="title-styles" steps={titles} loop={Infinity} />
      );
    },
    (props, prevProp) => true
  );

  return (
    <header className="App-header">
      <div className="github-header">
        <a
          className="github-corner"
          href="https://github.com/tsleolima"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon />
        </a>
      </div>
      <div className="middle-header">
        <img src={computerImage} className="computer-icon" alt="Imagem de um computador"/>
        <p className="header-name">LEONARDO</p>
        <p className="header-name-sub">LIMA FELIX DA SILVA</p>
        <div className="title-container">
          <HeaderTitleTypeAnimation />
        </div>
      </div>
      <div>
        <BRFlagIcon alt="brazil flag" className="flag-icon" onClick={() => {setLanguage(dictionary.br)}}/>
        <USAFlagIcon alt="united states flag" className="flag-icon" onClick={() => {setLanguage(dictionary.us)}}/>
      </div>
    </header>
  );
}

export default Header;
