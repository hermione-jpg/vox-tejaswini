"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Krona_One } from "next/font/google";
import { siteConfig } from "@/content/site";

const krona = Krona_One({
  weight: "400",
  subsets: ["latin"],
});

export default function SiteSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:fixed md:inset-y-0 md:left-0 md:flex md:w-[260px] md:flex-col md:bg-card md:px-8 md:py-14">
        
        {/* VOX Logo */}
        <Link
          href="/"
          className={`${krona.className} text-center text-[28px] text-ink`}
        >
          VOX
        </Link>

        {/* Navigation */}
        <nav className="mt-20 flex flex-col gap-1">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`-mx-1 rounded-md px-3 py-2 text-center text-[15px] transition-all ${
                isActive(item.href)
                  ? "bg-paper text-ink font-medium shadow-sm"
                  : "text-ink-soft hover:bg-paper/70 hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Flexible space */}
        <div className="flex-1" />

        {/* Pinned Design System */}
        <a
          href={siteConfig.figmaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border hairline bg-[#F7FAFB] p-4 text-ink-soft transition-shadow hover:shadow-md"
        >
          {/* Pinned label */}
          <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest2 text-ink-faint">
            Pinned
          </span>

          {/* Image */}
          <div className="overflow-hidden rounded-md">
            <img
              src="/images/vox-pinned.png"
              alt="VOX Design System"
              className="block w-full"
            />
          </div>

          {/* Card description */}
          <div className="mt-3 flex items-start justify-between gap-2">
            <span className="text-[13px] leading-snug text-ink-soft">
              A Design System for Voice AI
              <br />
              &amp; Conversational Interfaces
            </span>

            {/* External link icon */}
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-white text-[12px] text-ink-faint">
              ↗
            </span>
          </div>
        </a>

        {/* Last Updated */}
        <p className="mt-6 text-center font-mono text-[10px] text-ink-soft">
          Last Updated - 31-07-2026
        </p>
      </aside>

      {/* Mobile Header */}
      <header className="sticky top-0 z-40 border-b hairline bg-card/95 backdrop-blur md:hidden">
        
        {/* Mobile Logo */}
        <div className="flex h-14 items-center justify-center px-5">
          <Link
            href="/"
            className={`${krona.className} text-[21px] text-ink`}
          >
            VOX
          </Link>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex gap-5 overflow-x-auto px-5 pb-3">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap text-[12px] ${
                isActive(item.href)
                  ? "font-medium text-ink"
                  : "text-ink-faint"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}