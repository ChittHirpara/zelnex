import type { Metadata } from "next";
import { Montserrat, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zelnex Pharmaceuticals Pvt. Ltd. | Caring for Life",
  description:
    "Zelnex Pharmaceuticals delivers high-quality, affordable, and globally compliant healthcare solutions—export-oriented medicines from WHO-GMP certified partners.",
  icons: {
    icon: "/brand/zelnex-icon.png",
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
      className={`${outfit.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-slate overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
