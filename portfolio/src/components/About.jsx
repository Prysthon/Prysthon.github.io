import React from 'react';
import '../styles/About.css';
import { MdWorkOutline } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa6";
import { RiComputerLine } from "react-icons/ri";

function About() {
  return (
    <section id="about">
      <div>
        <h2>Sobre Mim</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
            Durante meu percurso acadêmico e profissional, adquiri uma base sólida em uma variedade de linguagens de programação, incluindo Python, C++, Javascript, Typescript e Java, bem como em HTML, CSS e SQL. Tenho experiência em construir aplicações web usando React e seus Hooks. Além disso, desenvolvi projetos voltados para o back-end usando Node.js, Express e banco de dados, como MySQL e MongoDB, com o uso de ORM's como Sequelize e Mongoose.
            </p>
            <p>Confira abaixo minhas experiências e projetos.</p>
          </div>
          <div className="about-info">
            <table>
              <tbody>
                <tr>
                  <td>
                    <div className="info-item">
                      <FaBook size={24} />
                      <div>
                        <strong>Educação:</strong>
                        <span> Graduando Engenharia da Computação</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="info-item">
                      <MdWorkOutline size={24} />
                      <div>
                        <strong>Empresa:</strong>
                        <span> iFood</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="info-item">
                      <FaLanguage size={24} />
                      <div>
                        <strong>Línguas:</strong>
                        <span> Português / Inglês</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="info-item">
                      <RiComputerLine size={24} />
                      <div>
                        <strong>Interesses:</strong>
                        <span> Data science, Business Intelligence, A.I.</span>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
