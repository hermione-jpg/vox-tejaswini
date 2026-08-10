import { redirect } from "next/navigation";
import { getFundamentals } from "@/lib/getFundamentals";

export const metadata = { title: "Fundamentals — VOX" };

// Mirrors the source site, which opens Fundamentals directly on
// the first lesson rather than a separate landing page.
export default async function FundamentalsIndex() {
  const lessons = await getFundamentals();
  redirect(`/fundamentals/${lessons[0].slug}`);
}
