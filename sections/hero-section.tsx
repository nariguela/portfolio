import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { MotionDiv, MotionSection } from "@/components/motion";
import { highlights, profile } from "@/data/portfolio";

export function HeroSection() {
  return (
    <MotionSection
      id="inicio"
      className="section-shell grid min-h-[calc(100vh-73px)] items-center gap-12 pt-16 lg:grid-cols-[1.05fr_0.95fr]"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div>
        <p className="eyebrow">Portfólio front-end</p>
        <h1 className="max-w-4xl text-5xl font-black leading-[1.05] text-white sm:text-6xl lg:text-7xl">
          Olá, eu sou <span className="text-electric">{profile.shortName}</span>{" "}
          Dias da Cunha.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          {profile.intro}
        </p>
        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
          <strong className="text-white">Bem-vindo ao meu portfólio!</strong>{" "}
          Aqui você encontrará alguns projetos de estudos que desenvolvi.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="#projetos"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-electric px-6 py-3 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-blue-500"
          >
            Ver projetos
            <ArrowRight size={18} />
          </Link>
          <Link
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-mint/70"
          >
            <Mail size={18} />
            Entrar em contato
          </Link>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <Link
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white"
          >
            <Github size={18} />
            Github
          </Link>
          <span className="h-1 w-1 rounded-full bg-slate-600" />
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white"
          >
            <Linkedin size={18} />
            LinkedIn
          </Link>
        </div>
      </div>

      <MotionDiv
        className="relative"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
      >
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-glow backdrop-blur">
          <Image
            src={profile.heroImage}
            alt="Ilustração de uma área de trabalho com projetos front-end"
            width={920}
            height={520}
            priority
            className="h-auto w-full rounded-[1.4rem] object-cover"
          />
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur"
              >
                <Icon className="mb-3 text-mint" size={22} />
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  {item.label}
                </p>
                <p className="mt-1 font-bold text-white">{item.value}</p>
              </div>
            );
          })}
        </div>
      </MotionDiv>
    </MotionSection>
  );
}
