import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { moreProjects } from "@/data/projects";

export default function MoreProjects() {
  return (
    <section className="border-t border-line-soft py-24 sm:py-28">
      <div className="mx-auto max-w-content container-px">
        <SectionHeading eyebrow="More Projects" title="Also built and shipped." />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {moreProjects.map((project, i) => (
            <Reveal key={project.name} delay={i * 40}>
              <div className="flex h-full flex-col justify-between rounded-xl border border-line-soft p-5 transition-colors hover:border-line">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-medium text-ink">
                      {project.name}
                    </h3>
                    {project.metric && (
                      <span className="shrink-0 rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[10.5px] text-accent">
                        {project.metric.label} {project.metric.value}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-faint">
                    {project.pending
                      ? "Details to be added."
                      : project.description}
                  </p>

                  {project.pipeline && (
                    <p className="mt-3 font-mono text-[10.5px] leading-relaxed text-ink-faint">
                      {project.pipeline.join(" → ")}
                    </p>
                  )}

                  {project.technologies && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10.5px] text-ink-dim"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="mt-4">
                  {project.links?.github || project.links?.demo ? (
                    <a
                      href={project.links.github ?? project.links.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-xs font-medium text-accent hover:opacity-80"
                    >
                      View →
                    </a>
                  ) : (
                    <span
                      className="cursor-not-allowed text-xs text-ink-faint"
                      title="Link not yet available"
                    >
                      Link coming soon
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
