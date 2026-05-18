import { Card } from "@/components/ui/Card";

const useCases = [
  "Airports",
  "Stadiums",
  "Energy sites",
  "Ports",
  "Data centers",
  "Military installations",
  "Public events",
  "Private security firms",
];

export function UseCases() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {useCases.map((item) => (
        <Card key={item}>
          <h3 className="text-lg font-semibold text-white">{item}</h3>
          <p className="mt-2 text-sm text-slate-300">
            Shared command visibility, incident workflows, and defensible reporting for high-pressure teams.
          </p>
        </Card>
      ))}
    </div>
  );
}
