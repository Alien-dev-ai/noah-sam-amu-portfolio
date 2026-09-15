import type { MetricGroup } from "@/data/projects";

export default function MetricsTable({ groups }: { groups: MetricGroup[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {groups.map((group) => (
        <div
          key={group.title}
          className="rounded-xl border border-line bg-surface-raised p-5"
        >
          <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">
            {group.title}
          </p>
          <dl className="mt-4 space-y-2.5">
            {group.rows.map((row) => (
              <div
                key={row.label}
                className="flex items-baseline justify-between gap-4 border-b border-line-soft pb-2.5 last:border-none last:pb-0"
              >
                <dt className="text-sm text-ink-dim">{row.label}</dt>
                <dd className="font-mono text-sm text-ink">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
}
