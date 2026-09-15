import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

// No production domain has been confirmed yet — leave metadataBase unset
// (Next.js falls back to relative URLs) rather than inventing one. Once
// this is deployed, set metadataBase: new URL("https://your-domain.com")
// here so Open Graph/Twitter image URLs resolve absolutely.

export const metadata: Metadata = {
  title: "Noah Sam Amu — AI Engineer",
  description:
    "AI Engineer building intelligent systems across agentic AI, LLMs, voice AI, computer vision, RAG, and edge AI.",
  keywords: [
    "Noah Sam Amu",
    "AI Engineer",
    "Agentic AI",
    "LLM Engineer",
    "RAG",
    "Computer Vision",
    "Voice AI",
    "Edge AI",
  ],
  authors: [{ name: "Noah Sam Amu" }],
  creator: "Noah Sam Amu",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    title: "Noah Sam Amu — AI Engineer",
    description:
      "AI Engineer building intelligent systems across agentic AI, LLMs, voice AI, computer vision, RAG, and edge AI.",
    siteName: "Noah Sam Amu",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noah Sam Amu — AI Engineer",
    description:
      "AI Engineer building intelligent systems across agentic AI, LLMs, voice AI, computer vision, RAG, and edge AI.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-base font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-base focus:font-medium"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
