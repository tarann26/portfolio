import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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
    "CS student at Case Western Reserve, building at the intersection of AI, FinTech, and human-centered design. Creator of Invoke, SeeCare, and more.",
  keywords: [
    "Taranveer Anand",
    "software developer",
    "AI",
    "FinTech",
    "full stack",
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
      "CS student at Case Western Reserve, building at the intersection of AI, FinTech, and human-centered design.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taranveer Anand | Developer & Founder",
    description:
      "CS student at Case Western Reserve, building at the intersection of AI, FinTech, and human-centered design.",
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
      </body>
    </html>
  );
}
