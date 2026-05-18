import { Severity, SiteType, ThreatScenario, siteOptions } from "@/lib/data";

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export function calculateThreatScore(siteType: SiteType, scenario: ThreatScenario): number {
  const distanceFactor = clamp((1000 - scenario.distance) / 1000, 0, 1);
  const dronesFactor = clamp(scenario.drones / 10, 0, 1);
  const speedFactor = clamp(scenario.speed / 40, 0, 1);
  const siteFactor = (siteOptions.find((site) => site.id === siteType)?.sensitivity ?? 80) / 100;

  const weightedScore =
    distanceFactor * 0.22 +
    dronesFactor * 0.16 +
    speedFactor * 0.12 +
    scenario.trajectoryRisk * 0.16 +
    scenario.timeSensitivity * 0.12 +
    siteFactor * 0.1 +
    scenario.confidence * 0.07 +
    scenario.priorPattern * 0.05;

  return Math.round(clamp(weightedScore, 0, 1) * 100);
}

export function getSeverity(score: number): Severity {
  if (score >= 85) return "Critical";
  if (score >= 70) return "High";
  if (score >= 55) return "Elevated";
  if (score >= 35) return "Guarded";
  return "Low";
}

export function severityTone(severity: Severity): string {
  if (severity === "Critical") return "text-red-300 border-red-400/40 bg-red-500/10";
  if (severity === "High") return "text-amber-200 border-amber-300/40 bg-amber-500/10";
  if (severity === "Elevated") return "text-orange-200 border-orange-300/40 bg-orange-500/10";
  if (severity === "Guarded") return "text-cyan-200 border-cyan-300/40 bg-cyan-500/10";
  return "text-emerald-200 border-emerald-300/40 bg-emerald-500/10";
}

export type ThreatScoreResult = {
  score: number;
  severity: Severity;
  reasons: string[];
};

export function computeThreatScore(site: SiteType, scenario: ThreatScenario): ThreatScoreResult {
  const score = calculateThreatScore(site, scenario);
  const severity = getSeverity(score);
  return {
    score,
    severity,
    reasons: [
      `Observed ${scenario.drones} drone track(s)`,
      `Closest approach ${scenario.distance}m`,
      `Trajectory risk ${Math.round(scenario.trajectoryRisk * 100)}/100`,
      `Site sensitivity ${(siteOptions.find((entry) => entry.id === site)?.sensitivity ?? 80)}/100`,
    ],
  };
}

export type { Severity } from "@/lib/data";
