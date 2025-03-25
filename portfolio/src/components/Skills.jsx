import React from 'react';
import '../styles/Skills.css';

function Skills() {
  return (
    <section id="skills">
      <div className="container content">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Python</li>
          {/* Adicione outras skills conforme necessário */}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
