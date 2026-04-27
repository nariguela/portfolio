import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { navigation, profile } from "@/data/portfolio";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-swiss-border bg-white">
      <nav
        className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-stretch px-5 sm:px-8 md:grid-cols-[1fr_auto_auto] lg:px-10"
        aria-label="Navegação principal"
      >
        <Link
          href="#inicio"
          className="flex min-h-16 items-center border-r-4 border-swiss-border pr-6 text-xl font-black uppercase tracking-tighter text-swiss-foreground transition duration-150 hover:text-swiss-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-swiss-accent focus-visible:ring-offset-2"
        >
          Pedro<span className="text-swiss-accent">.</span>
        </Link>

        <div className="hidden items-stretch md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative grid min-h-16 min-w-32 place-items-center overflow-hidden border-r-4 border-swiss-border px-5 text-xs font-black uppercase tracking-[0.22em] text-swiss-foreground transition duration-150 hover:bg-swiss-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-swiss-accent focus-visible:ring-offset-2"
            >
              <span className="col-start-1 row-start-1 transition duration-150 ease-linear group-hover:-translate-y-5 group-hover:opacity-0">
                {item.label}
              </span>
              <span className="col-start-1 row-start-1 translate-y-5 text-swiss-accent opacity-0 transition duration-150 ease-linear group-hover:translate-y-0 group-hover:opacity-100">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        <div className="flex items-center">
          <Link
            href={`mailto:${profile.email}`}
            aria-label="Enviar email para Pedro"
            className="flex size-16 items-center justify-center border-r-4 border-swiss-border text-swiss-foreground transition duration-150 hover:bg-swiss-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-swiss-accent focus-visible:ring-offset-2"
          >
            <Mail size={18} />
          </Link>
          <Link
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir Github de Pedro"
            className="flex size-16 items-center justify-center border-r-4 border-swiss-border text-swiss-foreground transition duration-150 hover:bg-swiss-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-swiss-accent focus-visible:ring-offset-2"
          >
            <Github size={18} />
          </Link>
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir LinkedIn de Pedro"
            className="flex size-16 items-center justify-center text-swiss-foreground transition duration-150 hover:bg-swiss-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-swiss-accent focus-visible:ring-offset-2"
          >
            <Linkedin size={18} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
