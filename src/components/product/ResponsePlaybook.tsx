import { Card } from "@/components/ui/Card";

export function ResponsePlaybook({ steps }: { steps: string[] }) {
  return (
    <Card>
      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Response playbook generator</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-300">
        {steps.map((step, idx) => (
          <li key={step} className="rounded-xl border border-slate-700/70 bg-slate-900/60 p-3">
            <span className="mr-2 text-cyan-300">{idx + 1}.</span>
            {step}
          </li>
        ))}
      </ul>
    </Card>
  );
}
