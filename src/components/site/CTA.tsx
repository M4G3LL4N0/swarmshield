import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <div className="glass-card rounded-3xl p-8 text-center md:p-12">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Final call to action</p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          Detect drone threats before cheap attacks become expensive incidents.
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-slate-300">
          SwarmShield gives command teams a shared operating picture, trusted scoring, and a defensive incident
          workflow designed for airports, energy, events, and critical infrastructure.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button href="/dashboard">Open Command Center</Button>
          <Button href="/contact" className="bg-slate-100 text-slate-900 hover:bg-white">
            Book Security Briefing
          </Button>
        </div>
      </div>
    </section>
  );
}
