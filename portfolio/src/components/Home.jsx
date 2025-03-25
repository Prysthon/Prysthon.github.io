import React from 'react';
import '../styles/Home.css';

// Importando ícones dos frameworks
import { DiPython, DiReact, DiNodejsSmall, DiDocker, DiMysql } from 'react-icons/di';

function Hero() {
  return (
    <section id="hero">
      {/* Camada de fundo */}
      <div className="hero-background"></div>
      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-small">Olá Sou</p>
          <h1>Tiago Prysthon</h1>
          <p className="hero-medium">Estudante de Engenharia da Computação</p>
          <p className="hero-small">
            Desenvolvedor Full Stack e estagiário de inteligência competitiva do iFood
          </p>
          {/* Seção de ícones dos frameworks */}
          <div className="tech-icons">
            <DiPython size={40} title="Python" />
            <DiReact size={40} title="React" />
            <DiNodejsSmall size={40} title="Node.js" />
            <DiDocker size={40} title="Docker" />
            <DiMysql size={40} title="MySQL" />
          </div>
        </div>
        <div className="hero-image">
          <img src="photo.jpeg" alt="Foto de Tiago Prysthon" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
