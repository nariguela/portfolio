import React from "react";

const projects = [
  {
    name: "Projeto 1",
    description: "Descrição do projeto 1",
    image: "link_para_imagem_1",
    technologies: ["React", "Node.js"],
    link: "link_para_projeto_1",
  },
  {
    name: "Projeto 2",
    description: "Descrição do projeto 2",
    image: "link_para_imagem_2",
    technologies: ["React", "Node.js"],
    link: "link_para_projeto_2",
  },
  {
    name: "Projeto 3",
    description: "Descrição do projeto 3",
    image: "link_para_imagem_3",
    technologies: ["React", "Node.js"],
    link: "link_para_projeto_3",
  },
  {
    name: "Projeto 4",
    description: "Descrição do projeto 4",
    image: "link_para_imagem_4",
    technologies: ["React", "Node.js"],
    link: "link_para_projeto_4",
  },
  {
    name: "Projeto 5",
    description: "Descrição do projeto 5",
    image: "link_para_imagem_5",
    technologies: ["React", "Node.js"],
    link: "link_para_projeto_5",
  },
  {
    name: "Projeto 6",
    description: "Descrição do projeto 6",
    image: "link_para_imagem_6",
    technologies: ["React", "Node.js"],
    link: "link_para_projeto_6",
  },
  {
    name: "Projeto 7",
    description: "Descrição do projeto 7",
    image: "link_para_imagem_7",
    technologies: ["React", "Node.js"],
    link: "link_para_projeto_7",
  },
];

const Projects = () => {
  return (
    <section className="portfolio-projects">
      {projects.map((project) => (
        <div key={project.name} className="project-card">
          <h2>{project.name}</h2>
          <p>
            Descrição breve do projeto {project.description}. Tecnologias
            utilizadas, objetivos e resultados.
          </p>
        </div>
      ))}
    </section>
  );
};

export default Projects;
