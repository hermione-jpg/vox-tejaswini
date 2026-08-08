"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site";

export default function SiteSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Desktop side panel */}
      <aside className="hidden md:flex md:fixed md:inset-y-0 md:left-0 md:w-sidebar md:flex-col md:justify-between md:border-r hairline md:bg-card md:px-8 md:py-10 md:z-40">
        <div>
          <Link href="/" className="inline-flex items-baseline gap-2">
            <span className="font-display text-2xl font-semibold tracking-tightest text-ink">
              {siteConfig.name}
            </span>
          </Link>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-widest2 text-ink-faint">
            {siteConfig.tagline}
          </p>

          <nav className="mt-14 flex flex-col gap-1">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 -mx-3 text-[15px] transition-colors ${
                  isActive(item.href)
                    ? "bg-paper text-ink font-medium"
                    : "text-ink-soft hover:bg-paper/70 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <a
          href={siteConfig.figmaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border hairline bg-paper px-4 py-3 text-[13px] leading-snug text-ink-soft hover:text-ink hover:border-ink-faint transition-colors"
        >
          <span className="block font-mono text-[10px] uppercase tracking-widest2 text-ink-faint mb-1">
            Pinned
          </span>
          A Design System for Voice AI &amp; Conversational Interfaces
        </a>
      </aside>

      {/* Mobile top bar */}
      <header className="md:hidden sticky top-0 z-40 bg-card/95 backdrop-blur border-b hairline">
        <div className="flex items-center justify-between px-5 h-14">
          <Link href="/" className="font-display text-xl font-semibold text-ink">
            {siteConfig.name}
          </Link>
        </div>
        <nav className="flex gap-5 overflow-x-auto px-5 pb-3 -mt-1">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap font-mono text-[11px] uppercase tracking-widest2 ${
                isActive(item.href) ? "text-ink" : "text-ink-faint"
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
