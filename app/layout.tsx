import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = 'https://ilead.hu'; // TODO: Replace with actual domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "iLead Institute - A vezetésfejlesztés kiválósági központja",
    template: "%s | iLead Institute"
  },
  description: "Vezetőket és menedzsereket viszünk magasabb szintre. A tudományos ismereteket a gyakorlattal kapcsoljuk össze. MIT partnerség, szakértői képzések, executive programok.",
  keywords: ["vezetésfejlesztés", "menedzsment képzés", "executive program", "MIT partnerség", "vezetői képzés", "stratégiai menedzsment", "üzleti képzés", "Magyarország"],
  authors: [{ name: "iLead Institute" }],
  creator: "iLead Institute",
  publisher: "iLead Institute",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    url: siteUrl,
    siteName: 'iLead Institute',
    title: 'iLead Institute - A vezetésfejlesztés kiválósági központja',
    description: 'Vezetőket és menedzsereket viszünk magasabb szintre. MIT partnerség, szakértői képzések, executive programok.',
    images: [
      {
        url: '/ilead-icon.png',
        width: 800,
        height: 600,
        alt: 'iLead Institute Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iLead Institute - A vezetésfejlesztés kiválósági központja',
    description: 'Vezetőket és menedzsereket viszünk magasabb szintre. MIT partnerség, szakértői képzések.',
    images: ['/ilead-icon.png'],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "iLead Institute",
    "url": siteUrl,
    "logo": `${siteUrl}/ilead-icon.png`,
    "description": "Vezetőket és menedzsereket viszünk magasabb szintre. A vezetésfejlesztés kiválósági központja Magyarországon.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "HU"
    },
    "sameAs": []
  };

  return (
    <html lang="hu">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="pt-24">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
