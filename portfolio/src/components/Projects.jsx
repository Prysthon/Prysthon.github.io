// Projects.jsx
import React from 'react';
import '../styles/Projects.css';
import { projects } from '../assets/projectsData';

function Projects() {
  return (
    <section id="projects">
      <div className="container content">
        <h2>Projetos</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <div className="project-overlay">
                <p>{project.description}</p>
                <ul className="tech-list">
                  {project.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  Ver no GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
