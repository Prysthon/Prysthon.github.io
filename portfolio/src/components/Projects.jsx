import React from 'react';
import '../styles/Projects.css';

function Projects() {
  return (
    <section id="projects">
      <div className="container content">
        <h2>Projetos</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src="https://via.placeholder.com/300x200" alt="Projeto Mobile" />
            <h3>Aplicativo Mobile com React Native</h3>
            <p>
              Projeto desenvolvido durante o estágio na Cogitt Consultoria, focado em oferecer uma experiência intuitiva e responsiva para gerenciamento de dados em tempo real.
            </p>
          </div>
          <div className="project-card">
            <img src="https://via.placeholder.com/300x200" alt="Sistema Web" />
            <h3>Sistema Web Full Stack</h3>
            <p>
              Desenvolvido na Trybe, este projeto integra um back-end robusto com Node.js e Express a um front-end dinâmico em React, demonstrando minha capacidade de criar aplicações completas.
            </p>
          </div>
          <div className="project-card">
            <img src="https://via.placeholder.com/300x200" alt="Dashboard de Dados" />
            <h3>Dashboard de Dados com Python &amp; Power BI</h3>
            <p>
              Projeto que une a análise de dados com visualizações interativas, utilizando bibliotecas como Pandas e ferramentas de BI para transformar dados em insights valiosos.
            </p>
          </div>
          <div className="project-card">
            <img src="https://via.placeholder.com/300x200" alt="Inteligência Competitiva" />
            <h3>Sistema de Inteligência Competitiva</h3>
            <p>
              Desenvolvido durante minha experiência no iFood, este sistema coleta e analisa dados estratégicos para auxiliar na tomada de decisões.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
