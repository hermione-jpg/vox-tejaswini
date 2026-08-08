import { redirect } from "next/navigation";
import { lessons } from "@/content/fundamentals";

export const metadata = { title: "Fundamentals — VOX" };

// Mirrors the source site, which opens Fundamentals directly on
// the first lesson rather than a separate landing page.
export default function FundamentalsIndex() {
  redirect(`/fundamentals/${lessons[0].slug}`);
}
