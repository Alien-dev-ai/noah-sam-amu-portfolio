"use client";

import { useState } from "react";
import type { FeaturedProject } from "@/data/projects";
import PipelineDiagram from "@/components/ui/PipelineDiagram";
import MetricsTable from "@/components/ui/MetricsTable";

export default function CaseStudyCard({
  project,
  index,
}: {
  project: FeaturedProject;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const panelId = `case-study-${project.slug}`;

  return (
    <article className="rounded-2xl border border-line bg-surface transition-colors hover:border-line/[.9]">
      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-ink-faint">
              {String(index + 1).padStart(2, "0")} · {project.category}
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
              {project.name}
            </h3>
            <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-ink-dim">
              {project.tagline}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            {project.links?.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-md border border-line px-3.5 py-2 text-xs text-ink transition-colors hover:border-accent/60 hover:text-accent"
              >
                Code
              </a>
            ) : (
              <span
                className="cursor-not-allowed rounded-md border border-line-soft px-3.5 py-2 text-xs text-ink-faint"
                title="Repository link not yet public"
              >
                Code
              </span>
            )}
            {project.links?.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-md border border-line px-3.5 py-2 text-xs text-ink transition-colors hover:border-accent/60 hover:text-accent"
              >
                Demo
              </a>
            ) : null}
          </div>
        </div>

        {project.status && (
          <span className="mt-4 inline-block rounded-full border border-accent/30 bg-accent-soft px-3 py-1 font-mono text-[11px] text-accent">
            {project.status}
          </span>
        )}

        <div className="mt-7 rounded-xl border border-line-soft bg-base/60 p-4 sm:p-6">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-wide text-ink-faint">
            Architecture — diagram
          </p>
          <PipelineDiagram steps={project.architecture} />
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-ink-dim"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="mt-7 flex items-center gap-2 text-sm font-medium text-accent transition-opacity hover:opacity-80"
        >
          {open ? "Hide case study" : "View case study"}
          <span
            aria-hidden
            className={`inline-block transition-transform duration-300 ${
              open ? "-rotate-90" : "rotate-90"
            }`}
          >
            ›
          </span>
        </button>
      </div>

      <div
        id={panelId}
        className={`grid overflow-hidden border-t border-line-soft transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <div className="space-y-6 p-6 sm:p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">
                  Problem
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-dim">
                  {project.problem}
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">
                  What I built
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-dim">
                  {project.build}
                </p>
              </div>
            </div>

            {project.engineering && project.engineering.length > 0 && (
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">
                  Engineering
                </p>
                <ul className="mt-3 space-y-2.5">
                  {project.engineering.map((point, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 text-sm leading-relaxed text-ink-dim"
                    >
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.constraint && (
              <div className="rounded-lg border border-accent/25 bg-accent-soft p-4">
                <p className="font-mono text-[11px] uppercase tracking-wide text-accent">
                  Design constraint
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-dim">
                  {project.constraint}
                </p>
              </div>
            )}

            {project.metricGroups && (
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">
                  Results
                </p>
                <div className="mt-3">
                  <MetricsTable groups={project.metricGroups} />
                </div>
                {project.disclaimer && (
                  <p className="mt-3 text-xs text-ink-faint">
                    {project.disclaimer}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
