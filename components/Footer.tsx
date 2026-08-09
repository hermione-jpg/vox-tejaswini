import Link from "next/link";
import { footerCopy } from "@/content/site";

export default function Footer() {
  return (
    <footer className="mt-0 bg-[#55798f]">
      <div className="flex flex-col items-center justify-center py-6 text-center">
        <Link
          href="/"
          className="font-display text-[28px] font-semibold leading-none text-white"
        >
          VOX. <span className="text-[16px]">v1</span>
        </Link>

        <p className="mt-4 text-[16px] font-medium text-white">
          {footerCopy.madeBy}
        </p>
      </div>
    </footer>
  );
}