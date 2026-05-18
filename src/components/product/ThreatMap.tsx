import { DroneEvent, SiteType } from "@/lib/data";
import { Card } from "@/components/ui/Card";

export function ThreatMap({ site, event }: { site: SiteType; event: DroneEvent }) {
  return (
    <Card className="relative overflow-hidden">
      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Simulated protected zone</p>
      <div className="mt-4 rounded-2xl border border-slate-700/70 bg-[#020612] p-5">
        <div className="bg-mesh relative h-56 overflow-hidden rounded-xl border border-cyan-900/40">
          <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/70" />
          <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/40 radar-pulse" />
          {Array.from({ length: Math.min(event.drones, 8) }).map((_, idx) => (
            <div
              key={idx}
              className="absolute h-3 w-3 rounded-full bg-red-400"
              style={{
                left: `${20 + idx * 9}%`,
                top: `${18 + ((idx * 13) % 55)}%`,
              }}
            />
          ))}
        </div>
      </div>
      <p className="mt-3 text-sm text-slate-300">
        Monitoring <span className="text-cyan-200">{site}</span> airspace with {event.drones} active simulated track(s).
      </p>
    </Card>
  );
}
