import Link from "next/link";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t-2 border-swiss-border bg-swiss-foreground text-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 text-sm font-black uppercase tracking-[0.18em] sm:grid-cols-[1fr_auto] sm:items-center sm:px-8 lg:px-10">
        <p className="leading-6">
          © {new Date().getFullYear()} {profile.name}. Portfólio front-end.
        </p>
        <Link
          href="#inicio"
          className="text-white transition hover:text-swiss-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-swiss-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          Voltar ao topo
        </Link>
      </div>
    </footer>
  );
}
