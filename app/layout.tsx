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
  description: "Servicio profesional de mantenimiento de piscinas en Santa Cruz de Tenerife. Recupera tu tiempo libre con AtlanPool. Primera inspección de balance químico GRATIS. Agua cristalina garantizada.",
  keywords: [
    "mantenimiento piscinas",
    "limpieza piscinas",
    "balance químico piscina",
    "servicio piscinas Tenerife",
    "mantenimiento piscinas Santa Cruz de Tenerife",
    "piscinas Santa Cruz",
  ],
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
    description: "¿Tu piscina es un placer o una carga? Recupera tu tiempo libre con nuestro servicio profesional en Santa Cruz de Tenerife. Inspección GRATIS.",
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
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
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
  name: "AtlanPool",
  url: "https://www.atlanpool.es",
  logo: "https://www.atlanpool.es/atlanpool-logo.png",
  telephone: "+34643902918",
  email: "info@atlanpool.es",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santa Cruz de Tenerife",
    addressCountry: "ES",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={poppins.variable}>
      <head>
        {/* Resource hints for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
