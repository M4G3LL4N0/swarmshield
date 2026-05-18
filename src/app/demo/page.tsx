import { CommandCenter } from "@/components/product/CommandCenter";
import { SubpageVisual } from "@/components/SubpageVisual";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

export default function DemoPage() {
  return (
    <main>
      <SubpageVisual variant="demo" />
      <Header />
      <section className="mx-auto w-full max-w-7xl px-5 py-14">
        <h1 className="text-4xl font-semibold tracking-tight text-white">Drone Threat Command Center Demo</h1>
        <p className="mt-3 max-w-3xl text-slate-300">
          Simulate incidents, compute risk, generate defensive playbooks, and create after-action reports without external APIs.
        </p>
        <div className="mt-6">
          <CommandCenter />
        </div>
      </section>
      <Footer />
    </main>
  );
}
