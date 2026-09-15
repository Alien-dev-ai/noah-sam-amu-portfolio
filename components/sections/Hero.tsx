import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { socials } from "@/data/nav";

type HeroProps = {
  hasPortrait: boolean;
  hasResume: boolean;
};

export default function Hero({ hasPortrait, hasResume }: HeroProps) {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-28 pb-16 sm:pt-32"
    >
      {/* Backdrop: restrained grid + single soft glow, no neon */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-noise opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="relative mx-auto grid w-full max-w-content items-center gap-14 container-px lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div>
          <Reveal>
            <p className="section-label">AI Engineer · Portfolio</p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-[4rem]">
              Noah Sam Amu
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-3 font-mono text-sm uppercase tracking-[0.22em] text-accent">
              AI Engineer
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-dim">
              Building intelligent systems that move from ideas to working
              products — across agentic AI, LLM applications, RAG, voice AI,
              computer vision, and edge AI.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-base transition-transform duration-200 hover:-translate-y-0.5 hover:bg-accent/90"
              >
                View Projects
              </a>
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-md border border-line px-5 py-2.5 text-sm text-ink transition-colors hover:border-accent/60 hover:text-accent"
              >
                GitHub
              </a>
              {socials.linkedin ? (
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-md border border-line px-5 py-2.5 text-sm text-ink transition-colors hover:border-accent/60 hover:text-accent"
                >
                  LinkedIn
                </a>
              ) : (
                <span
                  className="cursor-not-allowed rounded-md border border-line-soft px-5 py-2.5 text-sm text-ink-faint"
                  title="LinkedIn URL not yet provided"
                >
                  LinkedIn
                </span>
              )}
              {hasResume ? (
                <a
                  href="/resume.pdf"
                  download
                  className="rounded-md border border-line px-5 py-2.5 text-sm text-ink transition-colors hover:border-accent/60 hover:text-accent"
                >
                  Download Resume
                </a>
              ) : (
                <span
                  className="cursor-not-allowed rounded-md border border-line-soft px-5 py-2.5 text-sm text-ink-faint"
                  title="resume.pdf not yet added to /public"
                >
                  Download Resume
                </span>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="mx-auto w-full max-w-[340px] lg:mx-0">
          <div className="group relative aspect-[4/5] w-full">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2rem] border border-line-soft"
            />
            <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] border border-line bg-surface">
              {hasPortrait ? (
                <Image
                  src="/images/portrait.jpg"
                  alt="Portrait of Noah Sam Amu"
                  fill
                  priority
                  sizes="(min-width: 1024px) 340px, 70vw"
                  className="object-cover grayscale-[15%] transition-all duration-500 group-hover:grayscale-0"
                  style={{
                    objectPosition: "50% 50%",
                    transform: "scale(2.4)",
                    transformOrigin: "50% 50%",
                  }}
                />
              ) : (
                <PortraitPlaceholder />
              )}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-base/60 via-transparent to-transparent"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PortraitPlaceholder() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_30%_20%,rgba(124,156,255,0.16),transparent_60%)]">
      <div
        aria-hidden
        className="absolute inset-0 bg-noise opacity-60"
      />
      <span className="relative font-mono text-5xl font-medium tracking-tight text-ink-dim">
        NSA
      </span>
      <span className="relative font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
        Portrait pending
      </span>
    </div>
  );
}
