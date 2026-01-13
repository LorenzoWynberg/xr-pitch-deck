import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XR Studio | Investor Pitch Deck 2026",
  description:
    "Latin America's Premier Live Experience Platform. Structured debt opportunity of up to USD $700,000 with 24% annual returns.",
  keywords: [
    "XR Studio",
    "Electric Animals",
    "Blockchain Jungle",
    "Investment",
    "Costa Rica",
    "Live Events",
    "Music Festival",
  ],
  openGraph: {
    title: "XR Studio | Investor Pitch Deck 2026",
    description:
      "Latin America's Premier Live Experience Platform. Investment opportunity.",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
