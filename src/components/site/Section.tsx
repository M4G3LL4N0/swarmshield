import { cn } from "@/lib/utils";

export function Section({
  id,
  title,
  kicker,
  children,
  className,
}: {
  id?: string;
  title: string;
  kicker?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("mx-auto max-w-7xl px-5 py-12 md:py-16", className)}>
      {kicker ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/85">{kicker}</p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
