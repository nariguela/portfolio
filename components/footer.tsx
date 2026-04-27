import Link from "next/link";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <p>
          © {new Date().getFullYear()} {profile.name}. Portfólio front-end.
        </p>
        <Link href="#inicio" className="font-medium text-slate-300 transition hover:text-white">
          Voltar ao topo
        </Link>
      </div>
    </footer>
  );
}
