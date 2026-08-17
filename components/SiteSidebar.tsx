"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Krona_One } from "next/font/google";
import { useState } from "react";
import { siteConfig } from "@/content/site";

const krona = Krona_One({
  weight: "400",
  subsets: ["latin"],
});

export default function SiteSidebar() {
  const pathname = usePathname();

  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({
    beginner: true,
    intermediate: false,
    advanced: false,
  });

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const NavLink = ({
    label,
    href,
  }: {
    label: string;
    href: string;
  }) => (
    <Link
      href={href}
      className={`block rounded-md px-3 py-2 text-[14px] transition-all ${
        isActive(href)
          ? "bg-paper text-ink font-medium shadow-sm"
          : "text-ink-soft hover:bg-paper/70 hover:text-ink"
      }`}
    >
      {label}
    </Link>
  );

  const SectionHeader = ({
    label,
    section,
  }: {
    label: string;
    section: string;
  }) => (
    <button
      onClick={() => toggleSection(section)}
      className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-[13px] font-medium text-ink transition-all hover:bg-paper/50"
    >
      <span>{label}</span>

      <span
        className={`text-[11px] transition-transform ${
          expandedSections[section] ? "rotate-180" : ""
        }`}
      >
        ▼
      </span>
    </button>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:fixed md:inset-y-0 md:left-0 md:flex md:w-[260px] md:flex-col md:overflow-y-auto md:bg-card md:px-8 md:py-14">
        {/* VOX Logo + Description */}
        <Link href="/" className="block text-center">
          <span
            className={`${krona.className} block text-[28px] text-ink`}
          >
            VOX
          </span>

          <span className="mt-2 block text-[11px] leading-4 text-ink">
            A framework for designing
            <br />
            voice AI.
          </span>
        </Link>

        {/* Navigation */}
        <nav className="mt-12 flex flex-col gap-0.5">
          {/* BEGINNER */}
          <div>
            <SectionHeader
              label="Beginner"
              section="beginner"
            />

            {expandedSections.beginner && (
              <div className="ml-2 flex flex-col gap-1 border-l border-paper/30 py-1 pl-3">
                <NavLink
                  label="Fundamentals"
                  href="/fundamentals"
                />

                <NavLink
                  label="Glossary"
                  href="/dict"
                />

                <NavLink
                  label="VOX System"
                  href="/vox-system"
                />
              </div>
            )}
          </div>

          {/* INTERMEDIATE */}
          <div className="mt-3">
            <SectionHeader
              label="Intermediate"
              section="intermediate"
            />

            {expandedSections.intermediate && (
              <div className="ml-2 flex flex-col gap-1 border-l border-paper/30 py-1 pl-3">
                <NavLink
                  label="Voice UX"
                  href="/voice-ux"
                />
              </div>
            )}
          </div>

          {/* ADVANCED */}
          <div className="mt-3">
            <SectionHeader
              label="Advanced"
              section="advanced"
            />

            {expandedSections.advanced && (
              <div className="ml-2 flex flex-col gap-1 border-l border-paper/30 py-1 pl-3">
                <NavLink
                  label="Experiments"
                  href="/experiments"
                />
              </div>
            )}
          </div>

          {/* OVERVIEW */}
          <div className="mt-4 border-t border-paper/20 pt-4">
            <NavLink
              label="Overview"
              href="/overview"
            />
          </div>
        </nav>

        {/* Flexible space */}
        <div className="flex-1" />

        {/* Last Updated */}
        <p className="text-center font-mono text-[10px] text-ink-soft">
          Last Updated - 17-08-2026
        </p>
      </aside>

      {/* Mobile Header */}
      <header className="sticky top-0 z-40 border-b hairline bg-card/95 backdrop-blur md:hidden">
        {/* Mobile Logo */}
        <div className="flex h-14 items-center justify-center px-5">
          <Link href="/" className="text-center">
            <span
              className={`${krona.className} block text-[21px] text-ink`}
            >
              VOX
            </span>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex gap-5 overflow-x-auto px-5 pb-3">
          <Link
            href="/fundamentals"
            className={`whitespace-nowrap text-[12px] ${
              isActive("/fundamentals")
                ? "font-medium text-ink"
                : "text-ink-faint"
            }`}
          >
            Fundamentals
          </Link>

          <Link
            href="/dict"
            className={`whitespace-nowrap text-[12px] ${
              isActive("/dict")
                ? "font-medium text-ink"
                : "text-ink-faint"
            }`}
          >
            Glossary
          </Link>

          <Link
            href="/voice-ux"
            className={`whitespace-nowrap text-[12px] ${
              isActive("/voice-ux")
                ? "font-medium text-ink"
                : "text-ink-faint"
            }`}
          >
            Voice UX
          </Link>

          <Link
            href="/experiments"
            className={`whitespace-nowrap text-[12px] ${
              isActive("/experiments")
                ? "font-medium text-ink"
                : "text-ink-faint"
            }`}
          >
            Experiments
          </Link>

          <Link
            href="/vox-system"
            className={`whitespace-nowrap text-[12px] ${
              isActive("/vox-system")
                ? "font-medium text-ink"
                : "text-ink-faint"
            }`}
          >
            VOX System
          </Link>

          <Link
            href="/overview"
            className={`whitespace-nowrap text-[12px] ${
              isActive("/overview")
                ? "font-medium text-ink"
                : "text-ink-faint"
            }`}
          >
            Overview
          </Link>
        </nav>
      </header>
    </>
  );
}