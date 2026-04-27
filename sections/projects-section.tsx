import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { MotionArticle, MotionSection } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <MotionSection
      id="projetos"
      className="section-shell"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
    >
      <SectionHeading
        eyebrow="Projetos"
        title="Projetos de estudo com foco em front-end"
        description="Os mesmos projetos do portfólio anterior, agora em cards responsivos com links de acesso e repositório mais evidentes."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <MotionArticle
            key={project.name}
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-cloud text-ink shadow-2xl shadow-black/20"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
              <Image
                src={project.image}
                alt={`Captura de tela do projeto ${project.name}`}
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-black leading-tight text-ink">
                  {project.name}
                </h3>
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir repositório do projeto ${project.name}`}
                  className="rounded-full bg-ink p-2 text-white transition hover:bg-electric"
                >
                  <Github size={18} />
                </Link>
              </div>

              <p className="mt-4 flex-1 text-sm leading-7 text-slate-700">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-slate-300 px-3 py-1 text-xs font-bold text-slate-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <Link
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-electric px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-500"
              >
                Acessar projeto
                <ExternalLink size={17} />
              </Link>
            </div>
          </MotionArticle>
        ))}
      </div>
    </MotionSection>
  );
}
