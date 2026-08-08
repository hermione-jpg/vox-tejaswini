import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="font-mono text-[11px] uppercase tracking-widest2 text-ink-faint">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl font-semibold text-ink">
        Page not found
      </h1>
      <Link
        href="/"
        className="mt-8 inline-block font-mono text-[11px] uppercase tracking-widest2 link-quiet"
      >
        ← Back home
      </Link>
    </Container>
  );
}
