import { Code2, Github, Linkedin, Mail, Rocket, Sparkles } from "lucide-react"

export const profile = {
  name: "Pedro Dias da Cunha",
  shortName: "Pedro",
  role: "Desenvolvedor front-end",
  email: "pedrodiasdacunha@gmail.com",
  github: "https://github.com/nariguela",
  linkedin: "https://linkedin.com/in/pedro-dias-da-cunha",
  heroImage: "/assets/projects.png",
  intro:
    "Desenvolvedor front-end que ama tecnologia e está sempre explorando coisas novas.",
  welcome:
    "Bem-vindo ao meu portfólio! Aqui você encontrará alguns projetos que desenvolvi.",
}

export const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
]

export const highlights = [
  {
    label: "Foco",
    value: "Front-end",
    icon: Code2,
  },
  {
    label: "Projetos",
    value: "Veja abaixo",
    icon: Rocket,
  },
  {
    label: "Prática",
    value: "React & Next",
    icon: Sparkles,
  },
]

export const skillGroups = [
  {
    title: "Core Frontend",
    skills: [
      "React",
      "Next.js (App Router, SSR, SSG)",
      "JavaScript (ES6+)",
      "TypeScript (tipagem avançada)",
      "Arquitetura SPA/SSR híbrida",
    ],
  },
  {
    title: "Ecossistema React",
    skills: [
      "React Hook Form",
      "Zod (validação e parsing)",
      "TanStack Query (server-state management)",
      "Context API (client-state) & Redux",
      "Custom Hooks & composição de lógica",
    ],
  },
  {
    title: "Engenharia de UI",
    skills: [
      "Tailwind CSS",
      "Design Systems (tokens, escalabilidade)",
      "Radix UI / Headless UI",
      "Componentização orientada a domínio",
      "Acessibilidade (ARIA, semantics)",
    ],
  },
  {
    title: "Web & Mobile Experience",
    skills: [
      "Responsive Design",
      "Mobile First",
      "Ionic + Capacitor",
      "Integração Web ↔ Mobile",
    ],
  },
  {
    title: "Data Fetching & API Layer",
    skills: [
      "Axios / Fetch API",
      "Consumo de APIs REST",
      "Cache, revalidação e sincronização de dados",
      "Error handling & loading states",
    ],
  },
  {
    title: "Arquitetura & Padrões",
    skills: [
      "Clean Code",
      "Separation of Concerns",
      "Component-Driven Development",
      "Feature-based architecture",
      "Escalabilidade de front-end",
    ],
  },
  {
    title: "Performance & SEO",
    skills: [
      "Code Splitting",
      "Lazy Loading",
      "Otimização de render (memoization)",
      "SEO técnico com Next.js",
    ],
  },
  {
    title: "Tooling & Workflow",
    skills: ["Git & GitHub", "Node.js", "NPM", "Vite", "ESLint + Prettier"],
  },
]

export const projects = [
  {
    name: "Grimório D&D 5e",
    description:
      "Uma lista de magias para usar em jogos de RPG Dungeons & Dragons",
    image: "/assets/magias-5e.png",
    technologies: ["React", "React Router", "Git", "JavaScript", "Tailwind"],
    link: "https://magias5e.netlify.app/",
    githubLink: "https://github.com/nariguela/spells-list",
  },
  {
    name: "Meu e-commerce",
    description:
      "Um e-commerce fictício onde você pode navegar por produtos e adicioná-los ao carrinho.",
    image: "/assets/meu-ecommerce.png",
    technologies: ["React", "React Router", "Git", "JavaScript", "CSS"],
    link: "https://meu-ecommerce-nrg.netlify.app/",
    githubLink: "https://github.com/nariguela/meu-ecommerce-react",
  },
  {
    name: "Movie Rating usePopcorn",
    description:
      "Você pode buscar filmes, visualizar detalhes, adicionar à sua lista de assistidos e avaliar os filmes que já viu.",
    image: "/assets/usepopcorn.png",
    technologies: ["React", "Git", "JavaScript", "CSS", "API REST"],
    link: "https://usepopcorn-nrg.netlify.app/",
    githubLink: "https://github.com/nariguela/usePopcorn",
  },
  {
    name: "To-do List",
    description:
      "Uma lista de tarefas simples onde você pode adicionar, remover e marcar tarefas como concluídas.",
    image: "/assets/to-do-list.png",
    technologies: ["React", "Git", "JavaScript", "CSS"],
    link: "https://to-do-list-nrg.netlify.app/",
    githubLink: "https://github.com/nariguela/to-do-list",
  },
  {
    name: "Travel List",
    description:
      "Uma checklist de coisas para levar em uma viagem. Você pode adicionar itens à lista e marcá-los como já concluídos.",
    image: "/assets/travel-list.png",
    technologies: ["React", "Git", "JavaScript", "CSS"],
    link: "https://travel-list-nrg.netlify.app/",
    githubLink: "https://github.com/nariguela/travel-list",
  },
  {
    name: "Eat 'N Split",
    description:
      "Um aplicativo para dividir contas de restaurantes entre amigos. Você pode adicionar amigos e indicar o total da conta e quem pagou.",
    image: "/assets/eat-n-split.png",
    technologies: ["React", "Git", "JavaScript", "CSS"],
    link: "https://eat-n-split-nrg.netlify.app/",
    githubLink: "https://github.com/nariguela/eat-n-split",
  },
  // {
  //   name: "Rock Paper Scissors Game",
  //   description:
  //     "Um jogo simples de Pedra, Papel e Tesoura. Você pode jogar contra o computador e ver quem ganha.",
  //   image: "/assets/rock-paper-scissors-game.png",
  //   technologies: ["JavaScript", "CSS"],
  //   link: "https://rock-paper-scissors-game-nrg.netlify.app/",
  //   githubLink: "https://github.com/nariguela/rock-paper-scissors-game",
  // },
  // {
  //   name: "Wave Memory Game",
  //   description: "Um jogo de memória simples com temática de praia.",
  //   image: "/assets/wave-memory-game.png",
  //   technologies: ["JavaScript", "CSS"],
  //   link: "https://wave-memory-game.netlify.app/",
  //   githubLink: "https://github.com/nariguela/wave-memory-game",
  // },
]

export const contactLinks = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Github",
    href: profile.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: Linkedin,
  },
]
