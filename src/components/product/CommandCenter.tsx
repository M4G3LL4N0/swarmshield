"use client";

import { useMemo, useState } from "react";
import { scenarios, siteOptions, SiteType } from "@/lib/data";
import { calculateThreatScore, getSeverity, severityTone } from "@/lib/scoring";
import { generateAfterActionReport, generatePlaybook, generateTimeline } from "@/lib/reports";

export function CommandCenter() {
  const [site, setSite] = useState<SiteType>("airport");
  const [scenarioId, setScenarioId] = useState(scenarios[0].id);
  const scenario = scenarios.find((entry) => entry.id === scenarioId) ?? scenarios[0];
  const score = useMemo(() => calculateThreatScore(site, scenario), [scenario, site]);
  const severity = getSeverity(score);
  const playbook = useMemo(() => generatePlaybook(severity, site), [severity, site]);
  const timeline = useMemo(() => generateTimeline(scenario), [scenario]);
  const report = useMemo(() => generateAfterActionReport({ site, scenario, score, severity }), [site, scenario, score, severity]);

  const stats = [
    { label: "Active incidents", value: scenario.drones > 4 ? "4" : "2" },
    { label: "Avg response time", value: "03m 42s" },
    { label: "Protected assets", value: String(report.assetsAffected.length) },
    { label: "Sensor health", value: "98.6%" },
    { label: "False positive reduction", value: "34%" },
    { label: "Threat intel notes", value: "7 open" },
  ];

  return (
    <div className="grid gap-6">
      <div className="glass-card rounded-3xl p-5 md:p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm text-slate-300">
            Protected site
            <select value={site} onChange={(event) => setSite(event.target.value as SiteType)} className="mt-2 w-full rounded-xl border border-white/15 bg-slate-950/75 p-3 text-slate-100">
              {siteOptions.map((entry) => (
                <option key={entry.id} value={entry.id}>
                  {entry.label}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm text-slate-300">
            Simulated incident
            <select value={scenarioId} onChange={(event) => setScenarioId(event.target.value as typeof scenarioId)} className="mt-2 w-full rounded-xl border border-white/15 bg-slate-950/75 p-3 text-slate-100">
              {scenarios.map((entry) => (
                <option key={entry.id} value={entry.id}>
                  {entry.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <section className="glass-card airspace-glow rounded-3xl p-5 md:p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Threat map and risk context</h3>
            <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${severityTone(severity)}`}>{severity}</span>
          </div>
          <div className="bg-mesh relative h-72 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.18),transparent_55%)]" />
            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/40" />
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20" />
            <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300" />
            <div className="radar-pulse absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/60" />
            <div className="absolute bottom-4 left-4 rounded-lg border border-white/10 bg-black/40 px-2 py-1 text-xs text-slate-300">{scenario.summary}</div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-300 md:grid-cols-4">
            <StatTile label="Threat score" value={`${score}/100`} />
            <StatTile label="Drone count" value={String(scenario.drones)} />
            <StatTile label="Distance" value={`${scenario.distance}m`} />
            <StatTile label="Velocity" value={`${scenario.speed} m/s`} />
          </div>
        </section>

        <section className="glass-card rounded-3xl p-5 md:p-6">
          <h3 className="text-lg font-semibold text-white">Response playbook</h3>
          <p className="mt-2 text-sm text-slate-300">Safe defensive steps for incident coordination and compliance.</p>
          <ol className="mt-4 space-y-2 text-sm text-slate-200">
            {playbook.map((step, index) => (
              <li key={step} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <span className="mr-2 text-cyan-300">{index + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
        </section>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <section className="glass-card rounded-3xl p-5 md:p-6">
          <h3 className="text-lg font-semibold text-white">Incident timeline</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-200">
            {timeline.map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="glass-card rounded-3xl p-5 md:p-6">
          <h3 className="text-lg font-semibold text-white">After-action report</h3>
          <p className="mt-3 text-sm text-slate-300">{report.incidentSummary}</p>
          <div className="mt-4 grid gap-2 text-sm text-slate-200">
            <p><strong className="text-white">Risk:</strong> {report.riskScore}</p>
            <p><strong className="text-white">Assets:</strong> {report.assetsAffected.join(", ")}</p>
            <p><strong className="text-white">Compliance:</strong> {report.complianceNotes.join(" ")}</p>
            <p><strong className="text-white">Evidence checklist:</strong> {report.evidenceChecklist.join(", ")}</p>
          </div>
        </section>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {stats.map((stat) => (
          <StatTile key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </div>
    </div>
  );
}

function StatTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
      <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-2 text-base font-semibold text-white">{value}</p>
    </div>
  );
}
