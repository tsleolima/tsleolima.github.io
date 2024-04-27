import "./App.css";
import React from "react";
import { useState } from "react";
import Header from "./components/header";
import AboutMe from "./components/about";
import Projects from "./components/projects";
import Tecnologies from "./components/tecnologies";
import Experience from "./components/experience";
import { dictionary } from "./strings/strings";


function App() {
  const [language, setLanguage] = useState(dictionary.br)

  return (
    <div className="App">
      <Header setLanguage={setLanguage} />
      <AboutMe language={language} className="about"/>
      <Experience language={language} />
      <Tecnologies language={language} />
      <Projects language={language} />
    </div>
  );
}

export default App;
