import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import CaseStudyCard from "@/components/CaseStudyCard";
import { featuredProjects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="border-t border-line-soft py-24 sm:py-28"
    >
      <div className="mx-auto max-w-content container-px">
        <SectionHeading
          eyebrow="Featured Work"
          title="Systems I've built, end to end."
          description="Each one below is a real pipeline with a specific problem behind it — not a demo. Diagrams are hand-built to show how each system is architected."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 60}>
              <CaseStudyCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
