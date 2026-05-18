import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SwarmShield | The drone defense command layer for critical infrastructure",
  description:
    "SwarmShield is the drone defense command layer for critical infrastructure. Detect, score, coordinate, and document drone incidents in real time.",
  openGraph: {
    title: "SwarmShield | Airspace security, built like cybersecurity.",
    description:
      "The drone defense command layer for critical infrastructure.",
    url: "https://swarmshield.local",
    siteName: "SwarmShield",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#030814] text-slate-100 flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
