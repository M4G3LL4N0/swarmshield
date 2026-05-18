import { Card } from "@/components/ui/Card";

export function AfterActionReport({ report }: { report: string }) {
  return (
    <Card>
      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">After-action report generator</p>
      <pre className="mt-4 whitespace-pre-wrap rounded-xl border border-slate-700/70 bg-slate-900/60 p-4 text-sm leading-7 text-slate-200">
        {report}
      </pre>
    </Card>
  );
}
