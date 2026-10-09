import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { mergedPRCount, mergedProjectCount } from "@/data/open-source";
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
  metadataBase: new URL("https://www.tarannn.me"),
  alternates: { canonical: "/" },
  title: "Taranveer Anand | Software Engineer & Founder",
  description:
    `Software engineer and founder working on medical imaging at Pulse Imaging and campaign pricing at Heron. ${mergedPRCount} merged open-source contributions across ${mergedProjectCount} projects.`,
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
    url: "https://www.tarannn.me",
    siteName: "Taranveer Anand",
    title: "Taranveer Anand | Software Engineer & Founder",
    description:
      `Software engineer and founder. Medical imaging at Pulse Imaging, campaign pricing at Heron, and merged contributions to ${mergedProjectCount} open-source projects.`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Taranveer Anand | Software Engineer & Founder",
    description:
      `Software engineer and founder. Medical imaging at Pulse Imaging, campaign pricing at Heron, and merged contributions to ${mergedProjectCount} open-source projects.`,
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
