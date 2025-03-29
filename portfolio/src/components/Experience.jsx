import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { experiences } from '../assets/experiencesData';
import '../styles/Experience.css';

function Experience() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentExp, setCurrentExp] = useState(null);

  const openModal = (exp) => {
    setCurrentExp(exp);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentExp(null);
  };

  return (
    <section id="experience">
      <div className="container content">
        <h2>Experiências</h2>
        <div className="marquee-wrapper">
          <Marquee gradient={true} speed={50}>
            {experiences.map((exp, index) => (
              <div className="experience-item" key={index} onClick={() => openModal(exp)}>
                <img src={exp.logo} alt={`${exp.empresa} logo`} />
              </div>
            ))}
          </Marquee>
        </div>

        {modalOpen && currentExp && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>&times;</button>
              <div className="modal-header">
                <img src={currentExp.logo} alt={`${currentExp.empresa} logo`} className="modal-logo" />
                <h3>{currentExp.empresa}</h3>
              </div>
              <div className="modal-body">
                <p><strong>Cargo:</strong> {currentExp.cargo}</p>
                <p><strong>Período:</strong> {currentExp.periodo}</p>
                {currentExp.local && <p><strong>Local:</strong> {currentExp.local}</p>}
                <p><strong>Funções:</strong></p>
                <ul>
                  {currentExp.descricao.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                {currentExp.website && (
                  <p>
                    <strong>Website:</strong>{' '}
                    <a href={currentExp.website} target="_blank" rel="noopener noreferrer">
                      {currentExp.website}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Experience;
