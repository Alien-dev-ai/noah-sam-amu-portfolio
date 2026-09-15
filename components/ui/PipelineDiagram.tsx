type PipelineDiagramProps = {
  steps: string[];
};

/**
 * An honest, hand-built visual: a labeled pipeline diagram rendered in
 * HTML/CSS. Used in place of a screenshot for architecture-heavy projects
 * that don't have one — never presented as an actual product screenshot.
 *
 * Deliberately a single vertical flow at every viewport: these diagrams
 * live inside fairly narrow cards, and a consistent vertical stack reads
 * more cleanly there than a row that wraps unpredictably.
 */
export default function PipelineDiagram({ steps }: PipelineDiagramProps) {
  return (
    <ol className="flex flex-col items-stretch">
      {steps.map((step, i) => (
        <li key={step} className="flex flex-col items-start">
          <div className="flex w-full items-center gap-3 rounded-lg border border-line bg-surface-raised px-4 py-3">
            <span className="font-mono text-[11px] text-ink-faint">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-mono text-[12.5px] leading-snug text-ink-dim">
              {step}
            </span>
          </div>
          {i < steps.length - 1 && (
            <span
              aria-hidden
              className="my-1 ml-[1.65rem] h-4 w-px bg-line"
            />
          )}
        </li>
      ))}
    </ol>
  );
}
