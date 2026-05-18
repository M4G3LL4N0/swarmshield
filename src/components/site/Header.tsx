"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#030814]/75 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white" onClick={() => setOpen(false)}>
          SwarmShield
        </Link>

        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "text-cyan-300" : "hover:text-white"}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/demo"
            className="hidden rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100 hover:bg-cyan-300/20 sm:inline-flex"
            onClick={() => setOpen(false)}
          >
            View demo
          </Link>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white md:hidden"
            aria-expanded={open}
            aria-controls="swarmshield-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden>{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="swarmshield-mobile-nav"
          className="border-t border-white/10 px-5 py-3 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm text-slate-200 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/demo"
              className="mt-1 rounded-lg border border-cyan-300/30 bg-cyan-400/10 px-3 py-2.5 text-center text-sm font-medium text-cyan-100"
              onClick={() => setOpen(false)}
            >
              View demo
            </Link>
            <p className="px-3 pt-2 text-[11px] leading-relaxed text-slate-500">
              Threat scores and playbooks are educational simulations — coordinate with your security team before
              incident response actions.
            </p>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
