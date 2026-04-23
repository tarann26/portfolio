import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Taranveer Anand | Developer & Founder",
  description:
    "CS senior at Case Western Reserve. Building Shipped — an AI job application platform. Previously: SeeCare (Best Senior Project W25), Flyte, Cairn, OrderBook.",
  keywords: [
    "Taranveer Anand",
    "software developer",
    "AI",
    "FinTech",
    "distributed systems",
    "C++",
    "Shipped",
    "Case Western Reserve",
    "portfolio",
  ],
  authors: [{ name: "Taranveer Anand" }],
  creator: "Taranveer Anand",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://taranveeranand.com",
    siteName: "Taranveer Anand",
    title: "Taranveer Anand | Developer & Founder",
    description:
      "CS senior at Case Western Reserve. Building Shipped — an AI job application platform.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taranveer Anand | Developer & Founder",
    description:
      "CS senior at Case Western Reserve. Building Shipped — an AI job application platform.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
