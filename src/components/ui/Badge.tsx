import { cn } from "@/lib/utils";
import { Severity } from "@/lib/scoring";

const severityColors: Record<Severity, string> = {
  Low: "bg-slate-500/20 text-slate-200 border-slate-300/25",
  Guarded: "bg-emerald-500/15 text-emerald-200 border-emerald-300/35",
  Elevated: "bg-amber-500/20 text-amber-200 border-amber-300/35",
  High: "bg-orange-500/20 text-orange-200 border-orange-300/35",
  Critical: "bg-red-500/20 text-red-200 border-red-300/40",
};

export function Badge({ severity }: { severity: Severity }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]",
        severityColors[severity]
      )}
    >
      {severity}
    </span>
  );
}
