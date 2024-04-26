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

  const experiences = [
    {
      experience_description: `Participation in a project to identify legislative matters of interest to the bank, involving data scraping from the Chamber and Senate websites, data exploration, modeling, implementation, and iterative validation. 
      
      Development of RAG (Retrieval Augmented Generation) using databases of parliamentarians with Llama index to create indexed databases and prompts that seek information more effectively. Participation in a project using RAG (Retrieval Augmented Generation) with multiple agents, the purpose being to respond to client requests using the most suitable agent. 
      
      Creation of various APIs with FastAPI, monitoring in Argo, and deployment in production.`,
      experience_name: "Machine Learning Engineer",
      experience_details: "Banco do Brasil · Tempo integral",
      keywords: [
        "Python", 
        "Sklearn", 
        "FastAPI", 
        "NLP", 
        "Llama Index", 
        "GPT", 
        "Jenkins",
        "Argo",
        "PowerShift",
      ],
      date: "04.2023 - present",
    },
    {
      experience_description: `A partnership project with DELL EMC focused on data science using NLP, the project aims to analyze chats related to sales in order to find some factor that can boost them.`,
      experience_name: "Machine Learning Researcher",
      experience_details: "Dell EMC · Tempo integral",
      keywords: [
        "Python", 
        "C#", 
        "Sklearn", 
        "Hugging face", 
        "Fastai",
        "NLP",
        "GIT & Pipeline deployment",
        "Numpy",
        "Matplotlib",
        "TensorFlow/Keras",
        "PyTorch",
        "GPT",
        "Llama",
        "Llama Index",
        "LangChain",
      ],
      date: "07.2020 - present",
    },
  ];

  const projects = [
    {
      url: "https://medium.com/@miraxe/eda-seattle-houses-air-bnb-bussines-questions-6e8501df82eb",
      alt: "EDA - Seattle Houses AirBnb - Bussines Questions",
      name: "EDA - Seattle Houses AirBnb - Bussines Questions"
    },
  ];

  return (
    <div className="App">
      <Header setLanguage={setLanguage} />
      <AboutMe language={language} className="about"/>
      <Projects language={language} projects={projects} />
      <Tecnologies language={language} />
      <Experience language={language} experiences={experiences} />
    </div>
  );
}

export default App;
