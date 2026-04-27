import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { navigation, profile } from "@/data/portfolio";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10"
        aria-label="Navegação principal"
      >
        <Link href="#inicio" className="text-sm font-bold text-white sm:text-base">
          Pedro<span className="text-electric">.</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`mailto:${profile.email}`}
            aria-label="Enviar e-mail para Pedro"
            className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-electric/70 hover:text-white"
          >
            <Mail size={18} />
          </Link>
          <Link
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir Github de Pedro"
            className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-electric/70 hover:text-white"
          >
            <Github size={18} />
          </Link>
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir LinkedIn de Pedro"
            className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-electric/70 hover:text-white"
          >
            <Linkedin size={18} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
