import Link from "next/link";
import Container from "./Container";
import { footerCopy, siteConfig } from "@/content/site";

export default function Footer() {
  return (
    <footer className="mt-32 border-t hairline">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-4 py-10">
        <p className="font-mono text-[11px] uppercase tracking-widest2 text-ink-faint">
          {footerCopy.madeBy}
        </p>
        <Link
          href="/"
          className="font-display text-lg font-semibold text-ink link-quiet"
        >
          {footerCopy.versionTag}
        </Link>
      </Container>
    </footer>
  );
}
