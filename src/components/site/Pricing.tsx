import { Card } from "@/components/ui/Card";

const tiers = [
  {
    name: "Free Demo",
    price: "$0",
    points: ["Simulated command center", "Sample reports", "Basic threat scoring"],
  },
  {
    name: "Site Pro",
    price: "$2,500/month",
    points: [
      "Single-site command center",
      "Incident workflows",
      "Reporting and security dashboard",
    ],
  },
  {
    name: "Multi-Site Team",
    price: "$12,000/month",
    points: [
      "Portfolio dashboard",
      "Team roles and access",
      "Sensor integration planning",
    ],
  },
  {
    name: "Enterprise / Government",
    price: "Custom",
    points: [
      "Custom integrations",
      "Compliance workflows",
      "Government procurement support",
    ],
  },
  {
    name: "Event Security",
    price: "From $10,000/event",
    points: [
      "Temporary command center",
      "Event-specific risk model",
      "After-action report package",
    ],
  },
];

export function Pricing() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {tiers.map((tier) => (
        <Card key={tier.name}>
          <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
          <p className="mt-2 text-2xl font-semibold text-cyan-200">{tier.price}</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {tier.points.map((point) => (
              <li key={point}>- {point}</li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
