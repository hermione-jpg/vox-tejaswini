import Link from "next/link";
import { siteConfig } from "@/content/site";
import Footer from "@/components/Footer";

export default function FundamentalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur border-b hairline">
        <div className="flex items-center gap-6 px-6 md:px-10 h-14">
          <Link
            href="/"
            className="font-mono text-[11px] uppercase tracking-widest2 text-ink-faint link-quiet"
          >
            ← Home
          </Link>
          <Link href="/" className="font-display text-xl font-semibold text-ink">
            {siteConfig.name}
          </Link>
        </div>
      </header>
      {children}
      <Footer />
    </>
  );
}
