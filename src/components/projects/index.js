import React from "react";
import "./styles.css";

function Projects({language}) {

  const projects = [
    {
      url: "https://medium.com/@miraxe/eda-seattle-houses-air-bnb-bussines-questions-6e8501df82eb",
      alt: "EDA - Seattle Houses AirBnb - Bussines Questions",
      name: "EDA - Seattle Houses AirBnb - Bussines Questions"
    },
    {
      url: "https://medium.com/@miraxe/eda-no-clima-de-cidades-da-paraiba-2373c9f463a4",
      alt: "EDA no clima de cidades da Paraiba — Parte 1",
      name: "EDA no clima de cidades da Paraiba — Parte 1"
    },
    {
      url: "https://medium.com/@miraxe/mais-eda-no-clima-de-jo%C3%A3o-pessoa-campina-grande-e-patos-parte-2-b882bec619cb",
      alt: "Mais EDA no clima de João Pessoa, Campina Grande e Patos — Parte 2",
      name: "Mais EDA no clima de João Pessoa, Campina Grande e Patos — Parte 2"
    },
    {
      url: "https://medium.com/@miraxe/mais-ainda-ultima-parte-de-eda-com-os-dados-clim%C3%A1tico-das-cidades-da-paraiba-7e6f8e1d521c",
      alt: "Mais ainda ? Ultima parte de EDA com os dados climático das cidades da Paraiba",
      name: "Mais ainda ? Ultima parte de EDA com os dados climático das cidades da Paraiba"
    },
    {
      url: "https://miraxe.medium.com/an%C3%A1lise-das-m%C3%BAsicas-de-luiz-gonzaga-no-spotify-ceb41662cf0f",
      alt: "Análise das músicas de Luiz Gonzaga no Spotify",
      name: "Análise das músicas de Luiz Gonzaga no Spotify"
    },
    {
      url: "https://miraxe.medium.com/an%C3%A1lise-das-participa%C3%A7%C3%B5es-em-filmes-do-nicolas-cage-agrupamento-3426ae688f0f",
      alt: "Análise das participações em filmes do Nicolas Cage (Agrupamento)",
      name: "Análise das participações em filmes do Nicolas Cage (Agrupamento)"
    },
    {
      url: "https://miraxe.medium.com/regress%C3%A3o-log%C3%ADstica-utilizando-dados-rom%C3%A2nticos-74154f8c5c03",
      alt: "Regressão Logística: Utilizando dados românticos",
      name: "Regressão Logística: Utilizando dados românticos"
    },
  ];

  return (
    <section className="projects">
      <h1 className="project-name">
        <span>{language.projects}</span>
      </h1>
      <div className="projects-cards">
        {projects.map((project, index) => (
        <div key={index} className="card-project">
          <p onClick={() => {
              console.log('asokasko');
              window.open(project.url, '_blank')
            }} className="project-title">{project.name}</p>
        </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
