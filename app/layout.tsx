import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://your-domain.com"; // ← replace with your real domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Master Frontend Development in the AI Era",
  description:
    "Join thousands of developers receiving one practical frontend tip every week — React, Next.js, AI-assisted development, performance, architecture, and career growth.",
  keywords: [
    "frontend roadmap",
    "frontend developer newsletter",
    "react",
    "next.js",
    "AI for developers",
    "frontend career",
  ],
  openGraph: {
    title: "Master Frontend Development in the AI Era",
    description:
      "One practical frontend tip every week. React, Next.js, AI integration, performance, and career growth.",
    url: siteUrl,
    siteName: "Frontend Roadmap",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Master Frontend Development in the AI Era",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Frontend Development in the AI Era",
    description:
      "One practical frontend tip every week. React, Next.js, AI integration, performance, and career growth.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="bg-white font-sans text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-50">
        {children}
      </body>
    </html>
  );
}
