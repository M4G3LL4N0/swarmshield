import { Pricing } from "@/components/site/Pricing";
import { SubpageVisual } from "@/components/SubpageVisual";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

const tiers = [
  {
    name: "Free Demo",
    price: "$0",
    points: ["Simulated command center", "Sample reports", "Basic threat scoring"],
  },
  {
    name: "Site Pro",
    price: "$2,500/month",
    points: ["Single-site command center", "Incident workflows", "Security operations dashboard"],
  },
  {
    name: "Multi-Site Team",
    price: "$12,000/month",
    points: ["Portfolio command view", "Role-based access", "Integration planning workspace"],
  },
  {
    name: "Enterprise / Government",
    price: "Custom",
    points: ["Custom integrations", "Compliance workflows", "Dedicated deployment support"],
  },
  {
    name: "Event Security",
    price: "From $10,000/event",
    points: ["Temporary command center", "Event-specific risk model", "After-action reporting kit"],
  },
];

export default function PricingPage() {
  return (
    <main>
      <SubpageVisual variant="pricing" />
      <Header />
      <section className="mx-auto w-full max-w-7xl px-5 py-14">
        <h1 className="text-4xl font-semibold text-white">Pricing built for real operators</h1>
        <p className="mt-3 max-w-3xl text-slate-300">
          Start with simulation, then expand to private sites, multi-site operations, and procurement-grade enterprise deployments.
        </p>
        <div className="mt-8">
          <Pricing />
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className="glass-card rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white">{tier.name}</h2>
              <p className="mt-2 text-cyan-200">{tier.price}</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {tier.points.map((point) => (
                  <li key={point}>- {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
