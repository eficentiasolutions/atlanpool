import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import dynamic from "next/dynamic";

// Defer CookieBanner loading to improve LCP
const CookieBanner = dynamic(() => import("@/components/CookieBanner"));

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.atlanpool.es"),
  title: {
    default: "AtlanPool | Mantenimiento Profesional de Piscinas",
    template: "%s | AtlanPool",
  },
  description: "Mantenimiento de piscinas en el Sur de Tenerife. Balance químico, limpieza y técnico fijo. Primera inspección GRATIS. Agua cristalina garantizada.",
  authors: [{ name: "AtlanPool" }],
  creator: "AtlanPool",
  publisher: "AtlanPool",
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
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.atlanpool.es",
    title: "AtlanPool | Mantenimiento Profesional de Piscinas",
    description: "¿Tu piscina es un placer o una carga? Servicio de mantenimiento en el Sur de Tenerife. Técnico fijo, informe digital. Inspección GRATIS.",
    siteName: "AtlanPool",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AtlanPool - Mantenimiento Profesional de Piscinas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AtlanPool | Mantenimiento de Piscinas",
    description: "Servicio profesional de mantenimiento de piscinas en Tenerife. Primera inspección GRATIS.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
  },
  manifest: "/site.webmanifest",
};

// Organization Schema Markup
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.atlanpool.es/#organization",
  name: "AtlanPool",
  url: "https://www.atlanpool.es",
  logo: "https://www.atlanpool.es/atlanpool-logo.png",
  telephone: "+34631230569",
  email: "info@atlanpool.es",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Adeje",
    addressRegion: "Tenerife",
    addressCountry: "ES",
  },
  sameAs: [
    "https://www.facebook.com/share/1CMksZtzTW/",
    "https://www.instagram.com/atlanpool.es",
    "https://www.google.com/maps/search/?api=1&query=AtlanPool&query_place_id=ChIJ5y8Xg1PIRGMRXtzZcEEx0mA",
  ],
};

// WebSite Schema Markup
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.atlanpool.es/#website",
  name: "AtlanPool",
  url: "https://www.atlanpool.es",
  publisher: {
    "@id": "https://www.atlanpool.es/#organization",
  },
  inLanguage: "es",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.atlanpool.es/?s={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={poppins.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
        <CookieBanner />
        <SpeedInsights />
      </body>
    </html>
  );
}
