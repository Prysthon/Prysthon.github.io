import React from 'react';
import '../styles/Home.css';
import { DiPython, DiReact, DiNodejsSmall, DiDocker, DiMysql } from 'react-icons/di';

function Home() {
  return (
    <section id="home">
      <div className="hero-left">
        <p className="hero-small">Olá, Sou</p>
        <h1>Tiago Prysthon</h1>
        <p className="hero-medium">Estudante de Engenharia da Computação</p>
        <p className="hero-small">
          Desenvolvedor Full Stack e estagiário de inteligência competitiva do iFood
        </p>
        <div className="tech-icons">
          <DiPython size={40} title="Python" />
          <DiReact size={40} title="React" />
          <DiNodejsSmall size={40} title="Node.js" />
          <DiDocker size={40} title="Docker" />
          <DiMysql size={40} title="MySQL" />
        </div>
      </div>
      <div className="hero-right">
      </div>
    </section>
  );
}

export default Home;
