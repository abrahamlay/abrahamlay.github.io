import type { Metadata } from "next";
import localFont from "next/font/local";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bamboy.my.id"),
  title: "Abraham Lay — Senior Android Engineer",
  description:
    "Abraham Lay is a Senior Android Engineer building mobile products people depend on across payments, fintech, and EdTech.",
  authors: [{ name: "Abraham Lay" }],
  openGraph: {
    title: "Abraham Lay — Senior Android Engineer",
    description:
      "Building mobile products people depend on — and small tools I can run myself.",
    url: "https://bamboy.my.id",
    siteName: "bamboy.my.id",
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
