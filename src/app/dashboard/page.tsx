import { CommandCenter } from "@/components/product/CommandCenter";
import { SubpageVisual } from "@/components/SubpageVisual";
import { DashboardPreview } from "@/components/product/DashboardPreview";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

export default function DashboardPage() {
  return (
    <main>
      <SubpageVisual variant="dashboard" />
      <Header />
      <section className="mx-auto w-full max-w-7xl px-5 py-14">
        <div className="mb-6 rounded-2xl border border-cyan-300/20 bg-cyan-400/10 p-4 text-sm text-cyan-100">
          Live simulated environment for defensive airspace operations and incident response workflow testing.
        </div>
        <DashboardPreview />
        <div className="mt-6">
          <CommandCenter />
        </div>
      </section>
      <Footer />
    </main>
  );
}
