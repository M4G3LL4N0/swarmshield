import { Card } from "@/components/ui/Card";

const stats = [
  ["Active incidents", "6"],
  ["Average response time", "4m 22s"],
  ["Protected assets", "37"],
  ["Sensor health", "98.4%"],
  ["False positive reduction", "31%"],
  ["Threat intelligence notes", "12 open"],
];

export function DashboardPreview() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map(([label, value]) => (
        <Card key={label}>
          <p className="text-xs uppercase tracking-[0.16em] text-slate-400">{label}</p>
          <p className="mt-3 text-3xl font-semibold text-cyan-200">{value}</p>
        </Card>
      ))}
    </div>
  );
}
