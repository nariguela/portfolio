import React from "react";

const Home = () => {
  return (
    <section className="portfolio-home">
      <div className="portfolio-home-presentation">
        <div className="portfolio-home-presentation-text">
          <h1>
            Olá, eu sou <br />
            <span>Pedro</span> Dias da Cunha
          </h1>
          <p>
            Desenvolvedor front-end que ama tecnologia e está sempre explorando
            coisas novas.
          </p>
          <p>
            <strong>Bem-vindo ao meu portfólio!</strong> Aqui você encontrará
            alguns projetos de estudos que desenvolvi.
          </p>
        </div>
        <div>
          <img src="https://picsum.photos/500/300" alt="Portfolio" />
        </div>
      </div>
      <div className="home-skills">
        <div className="home-skill-box">
          <h3>Conhecimentos Técnicos</h3>
          <ul>
            <li>React</li>
            <li>JavaScript (ES6+)</li>
            <li>CSS</li>
            <li>Git/ Github</li>
            <li>API REST</li>
          </ul>
        </div>
        <div className="home-skill-box">
          <h3>React</h3>
          <ul>
            <li>Props e State</li>
            <li>Componentização (Ciclo de vida e reutilização)</li>
            <li>Hooks (useState, useEffect, useRef, ...)</li>
          </ul>
        </div>
        <div className="home-skill-box">
          <h3>Ferramentas e boas práticas</h3>
          <ul>
            <li>Estruturação de código limpo e reutilizável</li>
            <li>Metodologias ágeis</li>
            <li>Base em lógica de programação</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;
