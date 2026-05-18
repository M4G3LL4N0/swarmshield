export type SiteType =
  | "airport"
  | "stadium"
  | "energy"
  | "port"
  | "data-center"
  | "military-base"
  | "public-event";

export type ScenarioId =
  | "single-unknown"
  | "near-restricted"
  | "multiple-approaching"
  | "perimeter-probing"
  | "asset-flight-path"
  | "swarm-pattern";

export type Severity = "Low" | "Guarded" | "Elevated" | "High" | "Critical";

export interface ThreatScenario {
  id: ScenarioId;
  label: string;
  drones: number;
  speed: number;
  distance: number;
  trajectoryRisk: number;
  confidence: number;
  priorPattern: number;
  timeSensitivity: number;
  summary: string;
}

export const siteOptions: { id: SiteType; label: string; sensitivity: number; assets: string[] }[] = [
  { id: "airport", label: "Airport", sensitivity: 95, assets: ["Runway 2", "Control tower", "Fuel zone"] },
  { id: "stadium", label: "Stadium", sensitivity: 80, assets: ["North gate", "Crowd bowl", "Broadcast deck"] },
  { id: "energy", label: "Energy Facility", sensitivity: 98, assets: ["Substation A", "Control room", "Transformer yard"] },
  { id: "port", label: "Port", sensitivity: 88, assets: ["Berth 4", "Cargo crane line", "Customs zone"] },
  { id: "data-center", label: "Data Center", sensitivity: 90, assets: ["Cooling plant", "Power ingress", "Perimeter fence"] },
  { id: "military-base", label: "Military Base", sensitivity: 100, assets: ["Flight line", "Hangar block", "Command office"] },
  { id: "public-event", label: "Public Event", sensitivity: 86, assets: ["Main stage", "Medical tent", "VIP corridor"] },
];

export const scenarios: ThreatScenario[] = [
  { id: "single-unknown", label: "Single unknown drone", drones: 1, speed: 18, distance: 760, trajectoryRisk: 0.34, confidence: 0.62, priorPattern: 0.2, timeSensitivity: 0.5, summary: "Unidentified drone hovering near outer perimeter." },
  { id: "near-restricted", label: "Drone near restricted zone", drones: 1, speed: 23, distance: 290, trajectoryRisk: 0.61, confidence: 0.84, priorPattern: 0.44, timeSensitivity: 0.71, summary: "Low-altitude track entering restricted corridor." },
  { id: "multiple-approaching", label: "Multiple drones approaching", drones: 4, speed: 27, distance: 420, trajectoryRisk: 0.74, confidence: 0.86, priorPattern: 0.52, timeSensitivity: 0.76, summary: "Cluster movement converging on protected zone." },
  { id: "perimeter-probing", label: "Repeated perimeter probing", drones: 2, speed: 15, distance: 550, trajectoryRisk: 0.57, confidence: 0.77, priorPattern: 0.82, timeSensitivity: 0.68, summary: "Pattern matches prior reconnaissance behavior." },
  { id: "asset-flight-path", label: "Suspicious flight path near asset", drones: 2, speed: 31, distance: 250, trajectoryRisk: 0.81, confidence: 0.88, priorPattern: 0.6, timeSensitivity: 0.83, summary: "Path intersects high-value asset corridor." },
  { id: "swarm-pattern", label: "Swarm-like pattern", drones: 8, speed: 33, distance: 350, trajectoryRisk: 0.93, confidence: 0.9, priorPattern: 0.85, timeSensitivity: 0.92, summary: "Coordinated vectoring behavior consistent with swarm pattern." },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/demo", label: "Demo" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const featureList = [
  "Real-Time Airspace Dashboard",
  "AI Threat Scoring",
  "Sensor Fusion Layer",
  "Swarm Pattern Detection",
  "Response Workflow Engine",
  "After-Action Reports",
  "Compliance Evidence Logs",
  "Multi-Site Intelligence",
];

export type DroneEvent = {
  key: string;
  drones: number;
  speedMps: number;
  distanceMeters: number;
  trajectoryRisk: number;
  confidence: number;
  priorPattern: number;
  timeSensitivity: number;
  notes: string;
};

export const siteTypes = siteOptions.map((site) => site.id);
