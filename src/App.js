import "./App.css";
import React from "react";
import Header from "./components/header";
import AboutMe from "./components/about";
import Projects from "./components/projects";
import Tecnologies from "./components/tecnologies";
import Experience from "./components/experience";

function App() {
  const experiences = [
    {
      tech_name: "Angular 8/9/10",
      experience_name: "Front-End Developer",
      experience_details: "DevOpenSource",
      keywords: ["REST API", "RXJS", "JavaScript", "Bootstrap", ".NETCORE"],
      date: "10.2019 - present",
    },
  ];

  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
      <Tecnologies />
      <Experience experiences={experiences} />
    </div>
  );
}

export default App;
