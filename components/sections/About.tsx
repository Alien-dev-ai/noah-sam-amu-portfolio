import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const focusAreas = [
  "LLM engineering",
  "Agentic AI",
  "RAG",
  "Computer Vision",
  "Voice AI",
  "NLP",
  "Edge AI",
  "AI deployment",
];

export default function About() {
  return (
    <section id="about" className="border-t border-line-soft py-24 sm:py-28">
      <div className="mx-auto max-w-content container-px">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow="About"
            title="I work across the applied-AI stack, not one corner of it."
          />

          <Reveal delay={100} className="space-y-6">
            <p className="text-[15px] leading-relaxed text-ink-dim">
              I&rsquo;m an AI Engineer who builds systems end to end — from model
              and pipeline design through to the interfaces and
              infrastructure that make them usable. My work spans LLM
              applications and agentic systems, retrieval-augmented
              generation, computer vision, and voice AI, with a consistent
              focus on getting things from a working prototype to something
              production-shaped.
            </p>
            <p className="text-[15px] leading-relaxed text-ink-dim">
              That range shows up in the projects below: a multi-agent
              research platform, an evidence-based screening tool, a
              real-time voice cloning pipeline, a scheduling simulator, and
              an edge-AI robot running entirely offline. Different domains,
              same approach — define the problem precisely, build the
              pipeline, measure what happens.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-line px-3.5 py-1.5 font-mono text-xs text-ink-dim"
                >
                  {area}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
