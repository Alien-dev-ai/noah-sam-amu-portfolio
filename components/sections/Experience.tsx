import SectionHeading from "@/components/ui/SectionHeading";
import { achievements, education, experience } from "@/data/resume";

function EmptyState({ label }: { label: string }) {
  return (
    <div className="rounded-xl border border-dashed border-line p-6 text-sm text-ink-faint">
      {label} content will appear here once added to{" "}
      <code className="rounded bg-surface-raised px-1.5 py-0.5 font-mono text-[12px] text-ink-dim">
        data/resume.ts
      </code>
      .
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-line-soft py-24 sm:py-28"
    >
      <div className="mx-auto max-w-content container-px">
        <SectionHeading eyebrow="Experience" title="Professional background." />

        <div className="mt-12 grid gap-16 lg:grid-cols-[1.3fr_1fr]">
          <div>
            {experience.length === 0 ? (
              <EmptyState label="Experience" />
            ) : (
              <ol className="space-y-10 border-l border-line-soft pl-8">
                {experience.map((entry) => (
                  <li key={`${entry.organization}-${entry.role}`} className="relative">
                    <span
                      aria-hidden
                      className="absolute -left-[2.31rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-base"
                    />
                    <p className="font-mono text-xs text-ink-faint">
                      {entry.start} — {entry.end}
                      {entry.location ? ` · ${entry.location}` : ""}
                    </p>
                    <h3 className="mt-1 text-lg font-medium text-ink">
                      {entry.role}
                    </h3>
                    <p className="text-sm text-ink-dim">{entry.organization}</p>
                    <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-ink-dim">
                      {entry.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            )}
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="section-label">Education</h3>
              <div className="mt-4">
                {education.length === 0 ? (
                  <EmptyState label="Education" />
                ) : (
                  <ul className="space-y-5">
                    {education.map((entry) => (
                      <li key={entry.institution}>
                        <p className="font-mono text-xs text-ink-faint">
                          {entry.start} — {entry.end}
                        </p>
                        <p className="mt-1 text-sm font-medium text-ink">
                          {entry.credential}
                        </p>
                        <p className="text-sm text-ink-dim">
                          {entry.institution}
                        </p>
                        {entry.notes && (
                          <p className="mt-1 text-xs text-ink-faint">
                            {entry.notes}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div>
              <h3 className="section-label">Achievements</h3>
              <div className="mt-4">
                {achievements.length === 0 ? (
                  <EmptyState label="Achievements" />
                ) : (
                  <ul className="space-y-4">
                    {achievements.map((entry) => (
                      <li key={entry.title}>
                        <p className="text-sm font-medium text-ink">
                          {entry.title}
                        </p>
                        {entry.detail && (
                          <p className="text-sm text-ink-dim">
                            {entry.detail}
                          </p>
                        )}
                        {entry.date && (
                          <p className="font-mono text-xs text-ink-faint">
                            {entry.date}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
