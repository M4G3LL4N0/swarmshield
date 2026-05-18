import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020611]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-5 py-10 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
        <p>SwarmShield - Airspace security, built like cybersecurity.</p>
        <div className="flex gap-5">
          <Link href="/about" className="hover:text-white">
            About
          </Link>
          <Link href="/pricing" className="hover:text-white">
            Pricing
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
