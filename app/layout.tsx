import type { Metadata, Viewport } from "next";
import { Montserrat, Outfit } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: "#082B61",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Zelnex Pharmaceuticals Pvt. Ltd. | Global Generic Formulations & Export",
  description:
    "Zelnex Pharmaceuticals is a premier export-oriented pharmaceutical powerhouse delivering high-quality, WHO-GMP certified generic formulations, CTD/eCTD dossiers, and turnkey supply to 50+ countries worldwide.",
  keywords: [
    "Zelnex Pharmaceuticals",
    "Pharmaceutical Manufacturer India",
    "Generic Medicine Exporter",
    "WHO-GMP Certified Formulations",
    "CTD Dossier Compilation",
    "eCTD Regulatory Support",
    "Oral Solid Dosage",
    "Sterile Injectables",
    "Lyophilized Vials",
    "Zone IVb Stability Testing",
    "Pharmaceutical Contract Manufacturing",
  ],
  authors: [{ name: "Zelnex Pharmaceuticals Pvt. Ltd." }],
  creator: "Zelnex Pharmaceuticals Pvt. Ltd.",
  publisher: "Zelnex Pharmaceuticals Pvt. Ltd.",
  metadataBase: new URL("https://zelnexpharma.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zelnexpharma.com",
    siteName: "Zelnex Pharmaceuticals",
    title: "Zelnex Pharmaceuticals Pvt. Ltd. | Global Generic Formulations & Export",
    description:
      "Delivering high-quality, affordable, and globally compliant healthcare solutions across 50+ countries. WHO-GMP, ISO 9001:2015, and complete CTD dossier readiness.",
    images: [
      {
        url: "/brand/zelnex-logo.png",
        width: 800,
        height: 600,
        alt: "Zelnex Pharmaceuticals Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zelnex Pharmaceuticals Pvt. Ltd. | Caring for Life",
    description:
      "Export-oriented pharmaceutical powerhouse delivering WHO-GMP certified generic medicines & eCTD dossiers worldwide.",
    images: ["/brand/zelnex-logo.png"],
  },
  icons: {
    icon: "/brand/zelnex-icon.png",
    shortcut: "/brand/zelnex-icon.png",
    apple: "/brand/zelnex-icon.png",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zelnex Pharmaceuticals Pvt. Ltd.",
  url: "https://zelnexpharma.com",
  logo: "https://zelnexpharma.com/brand/zelnex-logo.png",
  description:
    "Leading export-oriented pharmaceutical company delivering WHO-GMP certified generic medicines and CTD/eCTD dossiers to 50+ global markets.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "India",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support & Export Inquiries",
    email: "export@zelnexpharma.com",
  },
  sameAs: [
    "https://www.linkedin.com/company/zelnex-pharmaceuticals",
  ],
};

import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${montserrat.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://unpkg.com" />
        <link rel="dns-prefetch" href="https://raw.githubusercontent.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans text-slate overflow-x-hidden">
        <LanguageProvider>
          {children}
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
