import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBar from "@/components/ui/SkillBar";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line-soft py-24 sm:py-28">
      <div className="mx-auto max-w-content container-px">
        <SectionHeading
          eyebrow="What I Work With"
          title="Tools I reach for, organized by what they're for."
          description="Percentages are shown only where there's a real basis for them — my own resume or a number I gave directly. Everything else is listed without a number attached."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line-soft sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <Reveal key={category.title} delay={i * 50}>
              <div className="h-full bg-surface p-6">
                <h3 className="font-mono text-xs uppercase tracking-wide text-accent">
                  {category.title}
                </h3>

                {category.rated && (
                  <div className="mt-5 space-y-4">
                    {category.rated.map((skill) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        percent={skill.percent}
                      />
                    ))}
                  </div>
                )}

                {category.items && (
                  <ul
                    className={`flex flex-wrap gap-2 ${
                      category.rated ? "mt-5" : "mt-4"
                    }`}
                  >
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-line px-3 py-1 text-sm text-ink-dim"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
