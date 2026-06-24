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
    "AWS-certified Cloud and Backend Engineer building scalable systems with AWS, React, Python, and FastAPI.",
  keywords: [
    "Kirtan Patel",
    "Cloud Engineer",
    "AWS Certified",
    "Full Stack Developer",
    "AI Engineer",
  ],
  authors: [{ name: "Kirtankumar Patel" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-black text-white antialiased font-sans`}
      >
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
