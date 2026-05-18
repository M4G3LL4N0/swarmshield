import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ThreatScoreResult } from "@/lib/scoring";

export function ThreatScoreCard({ result }: { result: ThreatScoreResult }) {
  return (
    <Card>
      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Threat scoring</p>
      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="text-4xl font-semibold text-white">{result.score}</p>
        <Badge severity={result.severity} />
      </div>
      <div className="mt-4 h-2 rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-300 via-amber-300 to-red-400"
          style={{ width: `${result.score}%` }}
        />
      </div>
      <ul className="mt-4 space-y-1 text-sm text-slate-300">
        {result.reasons.map((reason) => (
          <li key={reason}>- {reason}</li>
        ))}
      </ul>
    </Card>
  );
}
