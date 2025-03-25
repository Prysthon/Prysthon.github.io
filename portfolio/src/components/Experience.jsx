import React, { useState } from 'react';
import '../styles/Experience.css';

const experiences = [
  {
    empresa: "iFood",
    cargo: "Estagiário em Inteligência Competitiva",
    periodo: "fevereiro de 2025 - Presente",
    descricao: "Atuando na análise de dados e suporte estratégico para tomadas de decisão.",
    local: "",
    logo: "https://media.licdn.com/dms/image/v2/C510BAQFupNOyDYF1sg/company-logo_100_100/company-logo_100_100/0/1631315877254?e=1747872000&v=beta&t=KstMKCrcF85vnkTnI51Kiu4G4Dj5sMFrI4MtbDiVN9E",
    website: "https://www.ifood.com.br"
  },
  {
    empresa: "Senai Cimatec",
    cargo: "Pesquisador Voluntário",
    periodo: "março de 2024 - agosto de 2020",
    descricao: "Pesquisador na Planta de Manufatura Avançada sobre Sistemas Multiagentes.",
    local: "Salvador, Bahia, Brasil",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGheBD3a96yAQ/company-logo_100_100/company-logo_100_100/0/1732547443380/senaicimatec_logo?e=1747872000&v=beta&t=dEWh9KPSvMOaetGEFYBBwIwron34m1-cF76mu5oTKvw",
    website: "https://www.senaicimatec.com.br"
  },
  {
    empresa: "RAS CIMATEC",
    cargo: "Voluntário",
    periodo: "março de 2023 - Presente",
    descricao: "Colaboração em projetos acadêmicos e desenvolvimento de habilidades em robótica e automação.",
    local: "Salvador, Bahia, Brasil",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQHxvye0mjoRow/company-logo_100_100/company-logo_100_100/0/1654696369970/rascimatec_logo?e=1747872000&v=beta&t=nEExK9NTAz3mgX8xnjs94T61wAk6rYS9JTbzp_XlN8s",
    website: "https://www.cimatec.org.br"
  },
  {
    empresa: "Cogitt Consultoria",
    cargo: "Estagiário em desenvolvimento de software",
    periodo: "maio de 2024 - novembro de 2024",
    descricao: "Desenvolvimento de aplicações móveis e web com React, Node.js e Redux.",
    local: "",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQG0WZ1HY_plOQ/company-logo_100_100/company-logo_100_100/0/1718812823998/cogitt_consultoria_logo?e=1747872000&v=beta&t=2VmBC6MVSNsJYmpP7sPD_yJfGIGXtdKSCiArAPNWNFo",
    website: "https://www.cogitt.com.br"
  },
  {
    empresa: "LNJ Engenharia LTDA",
    cargo: "Estagiário de Instalações Prediais",
    periodo: "janeiro de 2022 - junho de 2022",
    descricao: "Participação em projetos de instalações prediais e gestão de equipes utilizando metodologias ágeis.",
    local: "Salvador, Bahia, Brasil",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQH3oSKCl5nHEw/company-logo_100_100/company-logo_100_100/0/1630558705918?e=1747872000&v=beta&t=yU-rVUh9u1jsXWVut3x33qsZDIwmLAVa7ujtTUgFb5c",
    website: "https://www.lnjengenharia.com.br"
  },
  {
    empresa: "Otimiza Consultoria Jr",
    cargo: "Trainee",
    periodo: "março de 2021 - maio de 2021",
    descricao: "Gerenciamento de projetos e desenvolvimento de soft skills através de desafios práticos.",
    local: "Salvador, Bahia, Brasil",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQHunG7fkt8veg/company-logo_100_100/company-logo_100_100/0/1631380953507?e=1747872000&v=beta&t=LARvnFTbtIcuFJfZlCmIe-ZPrKK4KmQFfLnqDa038l0",
    website: "https://www.otimizaconsultoriajr.com"
  },
  {
    empresa: "ENGETOP",
    cargo: "Trainee",
    periodo: "março de 2020 - Presente",
    descricao: "Participação em projetos de instalações prediais e desenvolvimento de habilidades técnicas e de trabalho em equipe.",
    local: "Salvador, Bahia, Brasil",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQE2xPy91uDMuQ/company-logo_100_100/company-logo_100_100/0/1631307027384?e=1747872000&v=beta&t=ehFWl02Z8XCY1lZpfhIlrZ1bstEPMdCG_RjPjANTF5o",
    website: "https://www.engetop.com.br"
  }
];

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
        <div className="experience-marquee">
          <div className="experience-grid">
            {experiences.map((exp, index) => (
              <div className="experience-item" key={index} onClick={() => openModal(exp)}>
                <img src={exp.logo} alt={`${exp.empresa} logo`} />
              </div>
            ))}
          </div>
        </div>

        {modalOpen && currentExp && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="modal-close" onClick={closeModal}>&times;</span>
              <div className="modal-body">
                <div className="card-back-header">
                  <a href={currentExp.website || '#'} target="_blank" rel="noopener noreferrer">
                    <img src={currentExp.logo} alt={`${currentExp.empresa} logo`} className="company-logo-back" />
                  </a>
                  <h3>{currentExp.cargo}</h3>
                </div>
                <p><strong>Empresa:</strong> {currentExp.empresa}</p>
                <p><strong>Período:</strong> {currentExp.periodo}</p>
                <p><strong>Local:</strong> {currentExp.local ? currentExp.local : "remoto"}</p>
                <p>{currentExp.descricao}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Experience;
