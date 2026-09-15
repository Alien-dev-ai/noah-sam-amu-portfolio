import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { specializations } from "@/data/specialization";

export default function Specialization() {
  return (
    <section className="border-t border-line-soft py-24 sm:py-28">
      <div className="mx-auto max-w-content container-px">
        <SectionHeading
          eyebrow="Where I work"
          title="One engineering approach."
          description="Each is a real discipline with its own tooling and failure modes — I treat them that way rather than flattening everything into a single 'AI' bucket."
        />

        <div className="mt-14 divide-y divide-line-soft border-y border-line-soft">
          {specializations.map((spec, i) => (
            <Reveal key={spec.index} delay={i * 60}>
              <div className="group relative grid gap-3 py-8 transition-colors sm:grid-cols-[80px_1fr] sm:gap-8 md:grid-cols-[100px_1.2fr_1fr] md:items-center">
                <span
                  aria-hidden
                  className="absolute left-[-1.25rem] top-0 h-full w-px scale-y-0 bg-accent transition-transform duration-300 group-hover:scale-y-100"
                  style={{ transformOrigin: "top" }}
                />
                <span className="font-mono text-sm text-ink-faint">
                  {spec.index}
                </span>
                <div>
                  <h3 className="text-xl font-medium tracking-tight text-ink transition-colors group-hover:text-accent">
                    {spec.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-dim">
                    {spec.description}
                  </p>
                </div>
                <div className="mt-1 flex flex-wrap gap-2 md:mt-0 md:justify-end">
                  {spec.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-ink-dim"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
