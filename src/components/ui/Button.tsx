import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
};

export function Button({ href, children, className }: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition",
    "bg-cyan-400 text-slate-950 hover:bg-cyan-300",
    "shadow-[0_18px_50px_rgba(34,211,238,0.32)]",
    className
  );

  if (href) {
    return <Link href={href} className={styles}>{children}</Link>;
  }

  return <button className={styles}>{children}</button>;
}
