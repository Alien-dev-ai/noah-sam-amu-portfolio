import Reveal from "@/components/ui/Reveal";
import { socials } from "@/data/nav";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line-soft py-28 sm:py-32">
      <div className="mx-auto max-w-content container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            Let&apos;s build something intelligent.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-dim">
            If you&apos;re working on an AI product, automation system,
            intelligent agent, computer vision system, or voice AI
            application, I&apos;d be interested in hearing about it.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            {socials.email ? (
              <a
                href={`mailto:${socials.email}`}
                className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-base transition-transform duration-200 hover:-translate-y-0.5 hover:bg-accent/90"
              >
                Email me
              </a>
            ) : (
              <span
                className="cursor-not-allowed rounded-md border border-line-soft px-5 py-2.5 text-sm text-ink-faint"
                title="Public contact email not yet provided"
              >
                Email
              </span>
            )}
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
            {socials.phone ? (
              <a
                href={`tel:${socials.phone}`}
                className="rounded-md border border-line px-5 py-2.5 text-sm text-ink transition-colors hover:border-accent/60 hover:text-accent"
              >
                {socials.phone}
              </a>
            ) : (
              <span
                className="cursor-not-allowed rounded-md border border-line-soft px-5 py-2.5 text-sm text-ink-faint"
                title="Phone number not yet provided"
              >
                Phone
              </span>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
