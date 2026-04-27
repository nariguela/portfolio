import Link from "next/link";
import { MotionDiv, MotionSection } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { contactLinks, profile } from "@/data/portfolio";

export function ContactSection() {
  return (
    <MotionSection
      id="contato"
      className="section-shell"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
        <SectionHeading
          eyebrow="Contato"
          title="Entre em contato"
          description="Fique à vontade para me chamar por e-mail ou nas redes abaixo."
        />

        <MotionDiv
          className="flex flex-col justify-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link
            href={`mailto:${profile.email}`}
            className="rounded-2xl border border-white/10 bg-ink/50 p-5 text-base font-bold text-white transition hover:border-electric/60"
          >
            E-mail: <span className="text-electric">{profile.email}</span>
          </Link>

          <div className="grid gap-3 sm:grid-cols-3">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              const isEmail = link.href.startsWith("mailto:");

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noreferrer"}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-mint/70"
                >
                  <Icon size={18} />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
