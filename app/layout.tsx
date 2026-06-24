import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kirtan Patel — Cloud & AI Engineer",
  description:
    "Portfolio of Kirtan Patel — AWS-certified Cloud and Backend Engineer building scalable systems with AWS, React, Python, and FastAPI.",
  keywords: [
    "Kirtan Patel",
    "Kirtankumar Patel",
    "Cloud Engineer",
    "AWS Certified",
    "Full Stack Developer",
    "AI Engineer",
    "Portfolio",
    "React",
    "Next.js",
    "Python",
    "FastAPI",
    "Harrisburg University",
  ],
  authors: [{ name: "Kirtankumar Patel" }],
  openGraph: {
    title: "Kirtan Patel — Cloud & AI Engineer",
    description:
      "AWS-certified Cloud and Backend Engineer building scalable cloud-native and AI-powered applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kirtan Patel — Cloud & AI Engineer",
    description:
      "AWS-certified Cloud and Backend Engineer building scalable cloud-native and AI-powered applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} bg-[#050810] text-[#e6edf3] antialiased font-sans`}>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
