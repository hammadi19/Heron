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
  title: "Heron Marketing | Growth Systems for Ambitious Brands",
  description:
    "Heron Marketing builds high-clarity growth systems across strategy, creative, paid media, search, lifecycle marketing, and analytics.",
  icons: {
    icon: "/heron-logo-mark.png",
  },
  openGraph: {
    title: "Heron Marketing | Growth Systems for Ambitious Brands",
    description:
      "A next-level marketing agency for ambitious brands ready to turn attention into measurable demand.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
