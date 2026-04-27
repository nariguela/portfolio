import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Plus } from "lucide-react"
import { highlights, profile } from "@/data/portfolio"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="section-shell grid min-h-[calc(100vh-66px)] gap-10 border-b-4 border-swiss-border bg-white pt-10 lg:grid-cols-[7fr_5fr] lg:items-stretch"
    >
      <div className="flex flex-col justify-between gap-10 border-4 border-swiss-border bg-white p-5 sm:p-8 lg:p-10">
        <div>
          <p className="eyebrow">
            <span className="text-swiss-accent">00.</span> Portfolio front-end
          </p>
          <h1 className="max-w-5xl text-6xl font-black uppercase leading-[0.82] tracking-tighter text-swiss-foreground sm:text-8xl lg:text-[8.6rem]">
            {profile.shortName}
            <span className="block text-swiss-accent">Dias</span>
            da Cunha
          </h1>
        </div>

        <div className="grid gap-8 border-t-4 border-swiss-border pt-8 lg:grid-cols-[5fr_4fr]">
          <div className="border-l-4 border-swiss-accent pl-5">
            <p className="max-w-2xl text-xl font-bold leading-8 text-swiss-foreground sm:text-2xl">
              {profile.intro}
            </p>
            <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-swiss-foreground/70">
              {profile.welcome}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Link href="#projetos" className="swiss-button-primary w-full">
              Ver projetos
              <ArrowRight size={18} />
            </Link>
            <Link
              href={`mailto:${profile.email}`}
              className="swiss-button-secondary w-full"
            >
              <Mail size={18} />
              Contato
            </Link>
          </div>
        </div>
      </div>

      <div className="grid min-h-[520px] border-4 border-swiss-border bg-swiss-foreground text-white lg:min-h-full">
        <div className="grid grid-rows-[1fr_auto]">
          <div className="swiss-grid-pattern relative overflow-hidden border-b-4 border-swiss-border bg-swiss-muted">
            <Image
              src={profile.heroImage}
              alt="Ilustracao de uma area de trabalho com projetos front-end"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover mix-blend-multiply grayscale"
            />
            <div className="absolute left-8 top-8 h-24 w-24 rounded-full border-4 border-swiss-border bg-white" />
          </div>

          <div className="grid sm:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="group border-t-4 border-swiss-border bg-swiss-foreground p-5 text-white transition duration-200 hover:bg-swiss-accent sm:border-r-4 sm:border-t-0 last:sm:border-r-0"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <Icon size={24} strokeWidth={2.5} />
                    <Plus
                      className="text-swiss-accent transition duration-200 group-hover:rotate-90 group-hover:text-white"
                      size={18}
                    />
                  </div>
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-swiss-accent group-hover:text-white">
                    {item.label}
                  </p>
                  <p className="mt-2 text-xl font-black uppercase leading-none">
                    {item.value}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 border-x-4 border-b-4 border-swiss-border bg-swiss-foreground px-5 py-4 text-white lg:col-span-2">
        <Link
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-black uppercase tracking-[0.18em] transition hover:text-swiss-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-swiss-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          <Github size={18} />
          Github
        </Link>
        <Link
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-black uppercase tracking-[0.18em] transition hover:text-swiss-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-swiss-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          <Linkedin size={18} />
          LinkedIn
        </Link>
      </div>
    </section>
  )
}
