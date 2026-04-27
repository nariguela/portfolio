import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ExternalLink, Github } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { projects } from "@/data/portfolio"

export function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="section-shell swiss-grid-pattern border-b-4 border-swiss-border bg-swiss-muted"
    >
      <div className="mb-10 grid gap-8 lg:grid-cols-[7fr_5fr] lg:items-end">
        <SectionHeading
          number="02"
          eyebrow="Projetos"
          title="Aplicações web modernas"
          description="Projetos construídos com React, Next.js e ecossistema frontend, priorizando experiência do usuário e arquitetura consistente."
        />
        <div className="hidden justify-end lg:flex">
          <div className="h-28 w-28 rounded-full border-4 border-swiss-border bg-white" />
          <div className="-ml-10 mt-10 h-24 w-24 bg-swiss-accent" />
        </div>
      </div>

      <div className="grid gap-0 border-4 border-swiss-border bg-white md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className="group flex h-full flex-col border-b-4 border-swiss-border bg-white transition duration-200 hover:-translate-y-1 hover:bg-swiss-foreground hover:text-white md:border-r-4 md:[&:nth-child(2n)]:border-r-0 xl:[&:nth-child(2n)]:border-r-4 xl:[&:nth-child(3n)]:border-r-0"
          >
            <div className="relative aspect-[16/10] overflow-hidden border-b-4 border-swiss-border bg-swiss-muted">
              <Image
                src={project.image}
                alt={`Captura de tela do projeto ${project.name}`}
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover grayscale transition duration-300 group-hover:scale-105 group-hover:grayscale-0"
              />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-swiss-accent">
                    {(index + 1).toString().padStart(2, "0")}
                  </p>
                  <h3 className="text-3xl font-black uppercase leading-[0.9] tracking-tighter">
                    {project.name}
                  </h3>
                </div>
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir repositorio do projeto ${project.name}`}
                  className="flex size-12 shrink-0 items-center justify-center border-2 border-current transition hover:bg-swiss-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-swiss-accent focus-visible:ring-offset-2"
                >
                  <Github size={18} />
                </Link>
              </div>

              <p className="mt-6 flex-1 text-sm font-medium leading-7 text-current/75">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="border-2 border-current px-3 py-1 text-xs font-black uppercase tracking-[0.14em]"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <Link
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex min-h-12 items-center justify-between border-t-2 border-current pt-4 text-sm font-black uppercase tracking-[0.18em] transition hover:text-swiss-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-swiss-accent focus-visible:ring-offset-2"
              >
                Acessar projeto
                <span className="relative flex size-8 items-center justify-center">
                  <ExternalLink
                    className="transition group-hover:hidden"
                    size={18}
                  />
                  <ArrowUpRight
                    className="hidden transition group-hover:block"
                    size={20}
                  />
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
