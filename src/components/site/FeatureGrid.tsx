import { Card } from "@/components/ui/Card";

const features = [
  "Real-Time Airspace Dashboard",
  "AI Threat Scoring",
  "Sensor Fusion Layer",
  "Swarm Pattern Detection",
  "Response Workflow Engine",
  "After-Action Reports",
  "Compliance Evidence Logs",
  "Multi-Site Intelligence",
];

export function FeatureGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature) => (
        <Card key={feature} className="min-h-28">
          <p className="text-sm uppercase tracking-[0.15em] text-slate-400">Feature</p>
          <h3 className="mt-3 text-lg font-semibold text-white">{feature}</h3>
        </Card>
      ))}
    </div>
  );
}
