import { Severity, SiteType, ThreatScenario, siteOptions } from "@/lib/data";

export function generatePlaybook(severity: Severity, _site: SiteType): string[] {
  const baseSteps = [
    "Notify site security operations lead and start defensive incident workflow.",
    "Verify detection with secondary sensor source before elevating status.",
    "Preserve camera evidence and sensor logs for compliance chain of custody.",
    "Restrict outdoor operations where policy requires temporary safety controls.",
    "Alert public safety authorities if escalation threshold is met.",
    "Document all decisions, timestamps, and communications in incident timeline.",
    "Escalate to approved response partner per site response policy.",
    "Generate after-action report with compliance notes and evidence checklist.",
  ];

  if (severity === "Low") return baseSteps.slice(0, 5);
  if (severity === "Guarded") return baseSteps.slice(0, 6);
  if (severity === "Elevated") return baseSteps.slice(0, 7);
  return baseSteps;
}

export function generateTimeline(scenario: ThreatScenario): string[] {
  return [
    "00:00 - Initial sensor signal detected near perimeter.",
    "00:25 - EO/IR sensor correlation confirms aerial object track.",
    `01:05 - Pattern analysis flags "${scenario.label.toLowerCase()}" profile.`,
    "01:40 - Site command channel notified and incident owner assigned.",
    "02:15 - Response workflow launched with evidence preservation.",
    "03:20 - Escalation decision recorded and report package prepared.",
  ];
}

export function generateAfterActionReport(args: {
  site: SiteType;
  scenario: ThreatScenario;
  score: number;
  severity: Severity;
}) {
  const siteMeta = siteOptions.find((item) => item.id === args.site);
  return {
    incidentSummary: `${siteMeta?.label ?? "Protected site"} observed ${args.scenario.label.toLowerCase()} with defensive workflow activated.`,
    riskScore: `${args.score}/100 (${args.severity})`,
    assetsAffected: siteMeta?.assets ?? [],
    timeline: generateTimeline(args.scenario),
    recommendedNextSteps: [
      "Run post-incident operator review within 24 hours.",
      "Tune detection thresholds for similar trajectory signatures.",
      "Verify sensor uptime targets and alert channel latency.",
    ],
    complianceNotes: [
      "Evidence package retained under site retention policy.",
      "Public safety escalation path logged with timestamped approvals.",
      "No offensive or unauthorized countermeasure guidance issued.",
    ],
    evidenceChecklist: [
      "Sensor telemetry export",
      "Camera snapshots and video clips",
      "Operator chat and escalation log",
      "Incident command notes",
    ],
  };
}

export const buildTimeline = generateTimeline;

export function generateAfterAction(args: {
  site: SiteType;
  event: ThreatScenario;
  score: number;
  severity: Severity;
}): string {
  const report = generateAfterActionReport({
    site: args.site,
    scenario: args.event,
    score: args.score,
    severity: args.severity,
  });

  return [
    `Incident Summary: ${report.incidentSummary}`,
    `Risk Score: ${report.riskScore}`,
    `Assets Affected: ${report.assetsAffected.join(", ")}`,
    `Timeline: ${report.timeline.join(" -> ")}`,
    `Recommended Next Steps: ${report.recommendedNextSteps.join("; ")}`,
    `Compliance Notes: ${report.complianceNotes.join("; ")}`,
    `Evidence Checklist: ${report.evidenceChecklist.join(", ")}`,
  ].join("\n");
}
