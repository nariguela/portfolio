import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { contactLinks, profile } from "@/data/portfolio"

export function ContactSection() {
  return (
    <section id="contato" className="section-shell bg-white">
      <div className="grid border-4 border-swiss-border lg:grid-cols-[5fr_7fr]">
        <div className="swiss-diagonal border-b-4 border-swiss-border bg-swiss-muted p-6 sm:p-10 lg:border-b-0 lg:border-r-4">
          <SectionHeading
            number="03"
            eyebrow="Contato"
            title="Vamos conversar"
            description="Fique à vontade para chamar por email ou abrir os perfis."
          />
        </div>

        <div className="flex flex-col justify-center gap-0 bg-white">
          <Link
            href={`mailto:${profile.email}`}
            className="group flex min-h-28 items-center justify-between gap-6 border-b-2 border-swiss-border bg-swiss-accent p-6 text-lg font-black uppercase tracking-tight text-white transition hover:bg-swiss-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-swiss-accent focus-visible:ring-offset-2 sm:p-8 sm:text-2xl"
          >
            <span className="break-all">{profile.email}</span>
            <ArrowRight
              className="shrink-0 transition group-hover:translate-x-1"
              size={28}
            />
          </Link>

          <div className="grid sm:grid-cols-3">
            {contactLinks.map((link) => {
              const Icon = link.icon
              const isEmail = link.href.startsWith("mailto:")

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noreferrer"}
                  className="group flex min-h-32 flex-col justify-between border-b-2 border-swiss-border p-6 font-black uppercase tracking-[0.18em] transition hover:bg-swiss-foreground hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-swiss-accent focus-visible:ring-offset-2 sm:border-b-0 sm:border-r-2 last:sm:border-r-0"
                >
                  <Icon
                    className="text-swiss-accent transition group-hover:rotate-90 group-hover:text-white"
                    size={24}
                  />
                  <span>{link.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
