import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Inter for both display and body — headings use a heavier weight
// and tighter tracking, body copy uses regular weight. Uppercase
// labels/eyebrows also use Inter (see .label-text in globals.css).
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "VOX",
  description:
    "VOX — A Design System for Voice AI & Conversational Interfaces.",
  openGraph: {
    title: "VOX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-body bg-paper text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
