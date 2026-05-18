import { Card } from "@/components/ui/Card";

const roadmap = [
  ["Now", "Command center MVP, scenario simulator, scoring engine, and reports"],
  ["Q3", "Sensor adapter toolkit and configurable policy engine for site SOPs"],
  ["Q4", "Multi-site intelligence graph with role-based workflows and audit exports"],
  ["Q1", "Procurement-ready deployment packages and public safety integration pilots"],
];

export function Roadmap() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {roadmap.map(([phase, item]) => (
        <Card key={phase}>
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{phase}</p>
          <p className="mt-3 text-base text-slate-200">{item}</p>
        </Card>
      ))}
    </div>
  );
}
