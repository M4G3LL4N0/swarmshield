import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-800/70">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-12 h-56 w-56 rounded-full bg-cyan-400/15 blur-3xl ambient" />
        <div className="absolute right-[12%] top-18 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#030814] to-transparent" />
      </div>
      <div className="bg-mesh mx-auto grid max-w-7xl gap-8 px-5 py-18 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24">
        <div className="relative">
          <p className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-100">
            Airspace security, built like cybersecurity.
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            The drone defense command layer for critical infrastructure.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            SwarmShield helps airports, stadiums, ports, energy sites, and security teams detect, score,
            coordinate, and document drone threats in real time.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/dashboard">Open Command Center</Button>
            <Button href="/demo" className="bg-slate-100 text-slate-900 hover:bg-white">
              View Demo
            </Button>
            <Button href="/contact" className="bg-slate-800 text-slate-100 hover:bg-slate-700">
              Talk to Security Team
            </Button>
          </div>
        </div>
        <div className="glass-card rounded-3xl p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Core narrative</p>
          <p className="mt-4 text-lg leading-8 text-slate-200">
            Cheap drones changed the economics of security. The old model of expensive point-defense does not
            scale against fast, distributed drone threats. SwarmShield becomes the system of record and system
            of action for defensive drone incidents.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-3">
            {[
              ["Detection", "Sensor + map layer"],
              ["Incident workflows", "Score, assign, close"],
              ["Multi-site visibility", "One command view"],
              ["After-action reports", "Evidence package"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl border border-slate-700/70 bg-slate-900/55 p-3">
                <p className="text-xs uppercase tracking-[0.14em] text-slate-400">{k}</p>
                <p className="mt-2 text-lg font-semibold text-cyan-200">{v}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500">Capabilities of the command-center demo. Not live field measurements.</p>
        </div>
      </div>
    </section>
  );
}
