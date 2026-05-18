import { Footer } from "@/components/site/Footer";
import { SubpageVisual } from "@/components/SubpageVisual";
import { Header } from "@/components/site/Header";

export default function AboutPage() {
  return (
    <main>
      <SubpageVisual variant="about" />
      <Header />
      <section className="mx-auto w-full max-w-5xl px-5 py-14">
        <h1 className="text-4xl font-semibold text-white">About SwarmShield</h1>
        <p className="mt-4 text-slate-300">
          SwarmShield is building the command layer for drone-era defense: detect, classify, score, coordinate, and document airspace incidents for critical infrastructure.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="glass-card rounded-2xl p-5">
            <h2 className="text-xl font-semibold text-white">Why now</h2>
            <p className="mt-2 text-slate-300">
              Drone costs are falling while incident complexity is rising. Security teams need software infrastructure, not fragmented tools.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-5">
            <h2 className="text-xl font-semibold text-white">Safety posture</h2>
            <p className="mt-2 text-slate-300">
              SwarmShield focuses on lawful defensive operations, compliance reporting, evidence preservation, and approved response coordination only.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
