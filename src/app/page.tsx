import { CommandCenter } from "@/components/product/CommandCenter";
import { MarketingGraphicsStack } from "@/components/MarketingGraphicsStack";
import { TrustStrip } from "@/components/TrustStrip";
import { DashboardPreview } from "@/components/product/DashboardPreview";
import { CTA } from "@/components/site/CTA";
import { FAQ } from "@/components/site/FAQ";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Pricing } from "@/components/site/Pricing";
import { Roadmap } from "@/components/site/Roadmap";
import { Section } from "@/components/site/Section";
import { UseCases } from "@/components/site/UseCases";

export default function HomePage() {
  return (
    <main>
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <TrustStrip />
        </div>

      <Header />
      <Hero />
      <Section id="problem" kicker="Problem" title="Cheap drones changed the economics of security.">
        <p className="max-w-4xl text-slate-300 leading-8">
          A low-cost drone can trigger expensive disruption, shutdowns, emergency response, and compliance burden.
          Point-defense alone does not scale against fast, distributed activity.
        </p>
      </Section>
      <Section id="solution" kicker="Solution" title="One command layer for detection, scoring, and response.">
        <p className="max-w-4xl text-slate-300 leading-8">
          SwarmShield unifies sensor feeds, map context, risk scoring, response workflow, and after-action reporting
          into a real-time operating system for defensive airspace incidents.
        </p>
      </Section>
      <Section id="how" kicker="How It Works" title="Detect. Score. Coordinate. Document.">
        <DashboardPreview />
      </Section>
      <Section id="demo" kicker="Product Demo" title="Interactive Drone Threat Command Center">
        <p className="mb-6 max-w-4xl text-sm leading-7 text-slate-400">
          Walk the detect → score → coordinate → document loop in the command surface below. Sample tracks and sites are for product walkthrough only.
        </p>
        <CommandCenter />
      </Section>
      <Section id="features" kicker="Features" title="Built for command confidence under pressure.">
        <FeatureGrid />
      </Section>
      <Section id="use-cases" kicker="Use Cases" title="Designed for infrastructure teams that cannot afford ambiguity.">
        <UseCases />
      </Section>
      <Section id="buyers" kicker="Who It Is For" title="Security directors, operators, analysts, and compliance teams.">
        <p className="max-w-5xl text-slate-300 leading-8">
          Buyers include airport security directors, stadium and event operators, energy and port security teams,
          defense innovation units, public safety agencies, and private contractors. End users include command center
          operators, site managers, emergency coordinators, analysts, and compliance officers.
        </p>
      </Section>
      <Section id="why-now" kicker="Why Now" title="Drone incidents are becoming distributed systems problems.">
        <p className="max-w-5xl text-slate-300 leading-8">
          As drone costs collapse and swarm coordination improves, organizations need software-first command systems to
          keep response costs under control, preserve evidence quality, and reduce operational uncertainty.
        </p>
      </Section>
      <Section id="pricing" kicker="Pricing" title="Productized plans from simulation to multi-site operations.">
        <Pricing />
      </Section>
      <Section id="roadmap" kicker="Roadmap" title="A practical expansion path from MVP to deployment-ready platform.">
        <Roadmap />
      </Section>
      <Section id="faq" kicker="FAQ" title="Common questions from security and infrastructure teams.">
        <FAQ />
      </Section>
      <CTA />
      <Footer />
    <MarketingGraphicsStack />
    </main>
  );
}
