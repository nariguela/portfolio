import { CheckCircle2 } from "lucide-react";
import { MotionArticle, MotionSection } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <MotionSection
      id="skills"
      className="section-shell"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <SectionHeading
        eyebrow="Skills"
        title="Tecnologias e fundamentos que uso nos estudos"
        description="A base atual do portfólio foi organizada em grupos para deixar claro o que já faz parte da sua prática front-end."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {skillGroups.map((group, index) => (
          <MotionArticle
            key={group.title}
            className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur transition hover:border-electric/50 hover:bg-white/[0.065]"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <h3 className="text-xl font-bold text-white">{group.title}</h3>
            <ul className="mt-5 space-y-3">
              {group.skills.map((skill) => (
                <li key={skill} className="flex gap-3 text-sm leading-6 text-slate-300">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-mint" size={18} />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </MotionArticle>
        ))}
      </div>
    </MotionSection>
  );
}
