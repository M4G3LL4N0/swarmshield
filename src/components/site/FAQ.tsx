import { Card } from "@/components/ui/Card";

const faqs = [
  {
    q: "Does SwarmShield provide offensive capabilities?",
    a: "No. SwarmShield is a defensive command, awareness, and incident-response platform focused on lawful operations.",
  },
  {
    q: "Can we use this without paid sensors?",
    a: "Yes. The MVP includes simulation mode and local scenario data, then supports sensor integration planning later.",
  },
  {
    q: "Who owns the incident data?",
    a: "The operating organization remains the data owner. SwarmShield provides structured evidence and audit workflows.",
  },
  {
    q: "How does escalation work?",
    a: "Escalation follows your site policy to public safety teams and approved response partners only.",
  },
];

export function FAQ() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {faqs.map((faq) => (
        <Card key={faq.q}>
          <h3 className="text-lg font-semibold text-white">{faq.q}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-300">{faq.a}</p>
        </Card>
      ))}
    </div>
  );
}
