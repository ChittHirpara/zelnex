import type { Metadata, Viewport } from "next";
import { Montserrat, Outfit } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { RfqCartProvider } from "@/context/RfqCartContext";
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
  metadataBase: new URL("https://zelnexpharma.com"),
  title: {
    default: "Zelnex Pharmaceuticals Pvt. Ltd. | Global Generic Formulations & Export",
    template: "%s | Zelnex Pharmaceuticals",
  },
  description:
    "Zelnex Pharmaceuticals is a premier export-oriented pharmaceutical powerhouse delivering high-quality, WHO-GMP certified generic formulations, CTD/eCTD dossiers, and turnkey supply to 10+ countries worldwide.",
  applicationName: "Zelnex Pharmaceuticals",
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
    "Pharma Exporter Surat Gujarat",
    "Finished Generics Supplier Africa Asia LATAM",
  ],
  authors: [{ name: "Zelnex Pharmaceuticals Pvt. Ltd." }],
  creator: "Zelnex Pharmaceuticals Pvt. Ltd.",
  publisher: "Zelnex Pharmaceuticals Pvt. Ltd.",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
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
      "Delivering high-quality, affordable, and globally compliant healthcare solutions across 10+ countries. WHO-GMP, ISO 9001:2015, and complete CTD dossier readiness.",
    images: [
      {
        url: "/brand/zelnex-hd-logo.png",
        width: 1200,
        height: 630,
        alt: "Zelnex Pharmaceuticals - Global Pharmaceutical Exporter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zelnex Pharmaceuticals Pvt. Ltd. | Caring for Life",
    description:
      "Export-oriented pharmaceutical powerhouse delivering WHO-GMP certified generic medicines & eCTD dossiers worldwide.",
    images: ["/brand/zelnex-hd-logo.png"],
  },
  icons: {
    icon: [
      { url: "/brand/zelnex-icon.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico" },
    ],
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

import dynamic from "next/dynamic";
import { CorporationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";

const FloatingWhatsApp = dynamic(
  () => import("@/components/FloatingWhatsApp").then((m) => m.FloatingWhatsApp)
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${outfit.variable} ${montserrat.variable} h-full antialiased`}
    >
      <head>
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://unpkg.com" />
        <link rel="dns-prefetch" href="https://raw.githubusercontent.com" />
        <CorporationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className="min-h-full flex flex-col font-sans text-slate overflow-x-hidden">
        <LanguageProvider>
          <RfqCartProvider>
            {children}
            <FloatingWhatsApp />
          </RfqCartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
