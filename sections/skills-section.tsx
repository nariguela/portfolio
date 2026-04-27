import { CheckCircle2 } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { skillGroups } from "@/data/portfolio"

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="section-shell border-b-2 border-swiss-border"
    >
      <div className="grid gap-10 lg:grid-cols-[4fr_8fr]">
        <SectionHeading
          number="01"
          eyebrow="Skills"
          title="Tecnologias e fundamentos"
          className="lg:sticky lg:top-28 lg:self-start"
        />

        <div className="grid border-2 border-swiss-border md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className="swiss-card group border-0 border-b-2 border-swiss-border p-6 hover:bg-swiss-accent hover:text-white md:border-r-2 [&:nth-child(even)]:md:border-r-0 last:border-b-0"
            >
              <p className="mb-10 text-xs font-black uppercase tracking-[0.24em] text-swiss-accent group-hover:text-white">
                {(index + 1).toString().padStart(2, "0")}
              </p>
              <h3 className="text-2xl font-black uppercase leading-none tracking-tight">
                {group.title}
              </h3>
              <ul className="mt-6 space-y-3">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex gap-3 text-sm font-bold leading-6"
                  >
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-swiss-accent group-hover:text-white"
                      size={18}
                    />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
