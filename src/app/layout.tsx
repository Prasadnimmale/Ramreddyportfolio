import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteData } from "@/lib/data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  style: ["normal"],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteData.domain),
  title: {
    default: "Medapati Rama Reddy | Advocate",
    template: "%s | Medapati Rama Reddy",
  },
  description:
    "Advocate Medapati Rama Reddy — legal professional offering services across drafting, litigation, family law, civil matters, RTI, bail matters, property and more. Based in Kakinada, Andhra Pradesh, India.",
  keywords: [
    "advocate",
    "lawyer",
    "Medapati Rama Reddy",
    "legal services",
    "Kakinada",
    "Andhra Pradesh",
    "civil lawyer",
    "matrimonial lawyer",
    "Drafting",
    "Litigation",
    "Bail",
    "RTI",
    "Property lawyer",
  ],
  authors: [{ name: "Medapati Rama Reddy" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Medapati Rama Reddy | Advocate",
    description:
      "Advocate and legal professional practicing across a wide range of matters including civil litigation, family law, drafting, RTI, and property cases. Based in Kakinada, Andhra Pradesh.",
    type: "website",
    locale: "en_IN",
    siteName: "Medapati Rama Reddy — Advocate",
    images: [
      {
        url: "/images/about.jpg",
        width: 1080,
        height: 747,
        alt: "Medapati Rama Reddy, Advocate in Kakinada",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medapati Rama Reddy | Advocate",
    description:
      "Advocate and legal professional. Based in Kakinada, Andhra Pradesh, India.",
    images: ["/images/about.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "lawyer",
  formatDetection: {
    telephone: false,
  },
  other: {
    "geo.region": "IN-AP",
    "geo.placename": "Kakinada, Andhra Pradesh",
    "geo.position": "16.989069; 82.247467",
    ICBM: "16.989069, 82.247467",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black">
        {children}
      </body>
    </html>
  );
}