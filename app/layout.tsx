import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
 metadataBase: new URL("https://hudashah-portfolio.vercel.app"),
 title: "Noor Ul Huda Shah | UI/UX Designer Portfolio",
 description:
  "Portfolio of Noor Ul Huda Shah, a creative and detail-oriented UI/UX Designer specializing in user-centric digital experiences.",
 keywords: [
  "Huda Shah",
  "Huda Shah Portfolio",
  "Huda Shah Graphic Designer",
  "Huda Shah UI",
  "UX Designer",
  "Huda Shah Designer",
  "Huda Shah UI/UX Designer",
  "Noor Ul Huda Shah",
  "UI/UX Design",
  "Product Design",
 ],
 authors: [{ name: "Noor Ul Huda Shah" }],
 openGraph: {
  title: "Noor Ul Huda Shah | UI/UX Designer Portfolio",
  description:
   "Explore the portfolio of Noor Ul Huda Shah - Designing intuitive digital experiences that balance user needs and business goals.",
  url: "https://hudashah-portfolio.vercel.app",
  siteName: "Noor Ul Huda Shah Portfolio",
  images: ["/og-image.png"],
  locale: "en_US",
  type: "website",
 },
 twitter: {
  card: "summary_large_image",
  title: "Noor Ul Huda Shah | UI/UX Designer Portfolio",
  description:
   "Designing intuitive digital experiences that balance user needs and business goals.",
  images: ["/og-image.png"],
 },
 robots: {
  index: true,
  follow: true,
  googleBot: {
   index: true,
   follow: true,
   "max-video-preview": -1,
   "max-image-preview": "large",
   "max-snippet": -1,
  },
 },
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en" className="dark scroll-smooth">
   <body
    className={`${inter.variable} antialiased bg-background text-foreground overflow-x-hidden`}>
    <Preloader />
    {children}
   </body>
  </html>
 );
}
