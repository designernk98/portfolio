import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
 title: "Noor Ul Huda Shah | UI/UX Designer Portfolio",
 description:
  "Portfolio of Noor Ul Huda Shah, a creative and detail-oriented UI/UX Designer.",
 openGraph: {
  title: "Noor Ul Huda Shah | UI/UX Designer Portfolio",
  description:
   "Designing intuitive digital experiences that balance user needs and business goals.",
  url: "https://portfolio.com",
  siteName: "Noor Ul Huda Shah Portfolio",
  images: [
   {
    url: "/og-image.png",
    width: 1200,
    height: 630,
   },
  ],
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
    {children}
   </body>
  </html>
 );
}
