import React from "react";

const projects = [
  {
    name: "Meu e-commerce",
    description:
      "Um e-commerce fictício onde você pode navegar por produtos e adicioná-los ao carrinho",
    image: "../../assets/meu-ecommerce.png",
    technologies: ["React", "React Router", "Git", "Javascript", "CSS"],
    link: "https://meu-ecommerce-nrg.netlify.app/",
  },
  {
    name: "Movie Rating usePopcorn",
    description:
      "Você pode buscar filmes, visualizar detalhes, adicionar à sua lista de assistidos e avaliar os filmes que já viu.",
    image: "../../assets/usepopcorn.png",
    technologies: ["React", "Git", "Javascript", "CSS", "API REST"],
    link: "https://usepopcorn-nrg.netlify.app/",
  },
  {
    name: "To-do List",
    description:
      "Uma lista de tarefas simples onde você pode adicionar, remover e marcar tarefas como concluídas.",
    image: "../../assets/to-do-list.png",
    technologies: ["React", "Git", "Javascript", "CSS"],
    link: "https://to-do-list-nrg.netlify.app/",
  },
  {
    name: "Travel List",
    description:
      "Uma checklist de coisas para levar em uma viagem. Você pode adicionar itens à lista e marcá-los como já concluídos.",
    image: "../../assets/travel-list.png",
    technologies: ["React", "Git", "Javascript", "CSS"],
    link: "https://travel-list-nrg.netlify.app/",
  },
  {
    name: "Eat 'N Split",
    description:
      "Um aplicativo para dividir contas de restaurantes entre amigos. Você pode adicionar amigos e indicar o total da conta e quem pagou.",
    image: "../../assets/eat-n-split.png",
    technologies: ["React", "Git", "Javascript", "CSS"],
    link: "https://eat-n-split-nrg.netlify.app/",
  },
  {
    name: "Rock Paper Scissors Game",
    description:
      "Um jogo simples de Pedra, Papel e Tesoura. Você pode jogar contra o computador e ver quem ganha.",
    image: "../../assets/rock-paper-scissors-game.png",
    technologies: ["Javascript", "CSS"],
    link: "https://rock-paper-scissors-game-nrg.netlify.app/",
  },
  {
    name: "Wave Memory Game",
    description: "Um jogo de memória simples com temática de praia.",
    image: "../../assets/wave-memory-game.png",
    technologies: ["Javascript", "CSS"],
    link: "https://wave-memory-game.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section className="portfolio-projects">
      {projects.map((project) => (
        <div key={project.name} className="project-card">
          <div className="project-header">
            <h2>{project.name}</h2>
            <button>
              <a href={project.link} target="_blank" rel="noreferrer">
                Acessar
              </a>
            </button>
          </div>
          <p className="project-description">{project.description}</p>
          <img
            src={project.image}
            alt={project.name}
            className="project-image"
          />
          <p className="project-technologies">
            Tecnologias: {project.technologies.join(", ")}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Projects;
