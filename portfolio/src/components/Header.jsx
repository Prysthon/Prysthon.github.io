import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">Tiago Prysthon</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#experience">Experiências</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
          <div className="nav-icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
            </a>
            <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/281/281769.png" alt="Gmail" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
