import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("glass-card airspace-glow rounded-2xl p-5 hover-lift", className)}>
      {children}
    </div>
  );
}
