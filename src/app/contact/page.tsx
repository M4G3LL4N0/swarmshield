import { Footer } from "@/components/site/Footer";
import { SubpageVisual } from "@/components/SubpageVisual";
import { Header } from "@/components/site/Header";

export default function ContactPage() {
  return (
    <main>
      <SubpageVisual variant="contact" />
      <Header />
      <section className="mx-auto w-full max-w-4xl px-5 py-14">
        <h1 className="text-4xl font-semibold text-white">Contact security team</h1>
        <p className="mt-3 text-slate-300">
          Request a controlled pilot for your site, event, or multi-site portfolio.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="glass-card rounded-2xl p-5 text-slate-300">
            <p>Email: security@swarmshield.ai</p>
            <p className="mt-2">Pilot briefings: 45 minutes</p>
            <p className="mt-2">Coverage: airports, ports, energy, stadiums, public events</p>
          </div>
          <form className="glass-card rounded-2xl p-5">
            <label className="mb-3 block text-sm text-slate-300">
              Organization
              <input className="mt-1 w-full rounded-xl border border-white/15 bg-slate-950/70 p-3 text-white" placeholder="City Port Authority" />
            </label>
            <label className="mb-3 block text-sm text-slate-300">
              Work email
              <input className="mt-1 w-full rounded-xl border border-white/15 bg-slate-950/70 p-3 text-white" placeholder="ops@organization.com" />
            </label>
            <label className="block text-sm text-slate-300">
              What do you need to protect?
              <textarea className="mt-1 h-24 w-full rounded-xl border border-white/15 bg-slate-950/70 p-3 text-white" placeholder="Share site type, concerns, and pilot timeline." />
            </label>
            <button type="button" className="cta-primary mt-4 rounded-full px-5 py-3 text-sm font-semibold">
              Request briefing
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
