import { Card } from "@/components/ui/Card";

export function IncidentTimeline({ timeline }: { timeline: string[] }) {
  return (
    <Card>
      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Incident timeline</p>
      <ol className="mt-4 space-y-3">
        {timeline.map((item, idx) => (
          <li key={item} className="rounded-xl border border-slate-700/70 bg-slate-900/60 p-3 text-sm text-slate-300">
            <span className="mr-2 text-cyan-300">T+{idx}</span>
            {item}
          </li>
        ))}
      </ol>
    </Card>
  );
}
