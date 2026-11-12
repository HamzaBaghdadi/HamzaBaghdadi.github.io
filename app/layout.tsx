import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Noto_Sans_Arabic } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/content/profile";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const arabic = Noto_Sans_Arabic({
  variable: "--font-arabic-sans",
  subsets: ["arabic"],
  weight: ["500"],
  preload: false,
});

const title = `${profile.name}, ${profile.role}`;
const description = `${profile.name} is a frontend engineer building fast, accessible web apps with React, Next.js, Angular and TypeScript.`;

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title,
  description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: siteUrl }],
  keywords: [
    "Hamza Baghdadi",
    "Frontend Engineer",
    "Frontend Developer",
    "React",
    "Next.js",
    "Angular",
    "TypeScript",
    "Portfolio",
  ],
  alternates: { canonical: "./" },
  openGraph: {
    type: "profile",
    url: "./",
    siteName: profile.name,
    title,
    description,
    locale: "en_US",
    firstName: "Hamza",
    lastName: "Baghdadi",
    images: [{ url: "og.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbfc" },
    { media: "(prefers-color-scheme: dark)", color: "#08090a" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable} ${arabic.variable} antialiased`}
    >
      <body className="min-h-dvh">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
