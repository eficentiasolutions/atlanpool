import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import PainSection from "@/components/landing/PainSection";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import AgitationBanner from "@/components/landing/AgitationBanner";
import SolutionSection from "@/components/landing/SolutionSection";
import Footer from "@/components/landing/Footer";

// Dynamic imports for heavy components to improve initial page load
// DataVizSection uses chart.js which is a large library
const DataVizSection = dynamic(
  () => import("@/components/landing/DataVizSection"),
  {
    loading: () => (
      <section className="py-20 bg-muted relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse inline-block h-8 w-48 bg-muted-foreground/20 rounded mb-4"></div>
            <div className="animate-pulse inline-block h-12 w-64 bg-muted-foreground/10 rounded"></div>
          </div>
        </div>
      </section>
    )
  }
);

const TestimonialsSection = dynamic(
  () => import("@/components/landing/TestimonialsSection"),
  {
    loading: () => (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="animate-pulse h-64 bg-muted/50 rounded-2xl"></div>
        </div>
      </section>
    )
  }
);

const PricingSection = dynamic(
  () => import("@/components/landing/PricingSection"),
  {
    loading: () => (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="animate-pulse h-96 bg-muted/50 rounded-2xl"></div>
        </div>
      </section>
    )
  }
);

const FAQSection = dynamic(
  () => import("@/components/landing/FAQSection"),
  {
    loading: () => (
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="animate-pulse h-64 bg-muted/50 rounded-2xl"></div>
        </div>
      </section>
    )
  }
);

const ContactSection = dynamic(
  () => import("@/components/landing/ContactSection"),
  {
    loading: () => (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="animate-pulse h-96 bg-muted/50 rounded-2xl"></div>
        </div>
      </section>
    )
  }
);

export const metadata: Metadata = {
  title: "Mantenimiento de Piscinas en Tenerife | AtlanPool",
  description: "Mantenimiento profesional de piscinas en el Sur de Tenerife: Adeje, Las Américas, El Médano, Granadilla y más. Balance químico, limpieza y reparaciones. Primera revisión GRATIS.",
  keywords: [
    "mantenimiento de piscinas en el sur de Tenerife",
    "mantenimiento piscinas sur Tenerife",
    "limpieza piscinas sur Tenerife",
    "servicio piscina Tenerife",
    "balance químico piscina",
    "mantenimiento piscina precio",
  ],
  alternates: {
    canonical: "https://www.atlanpool.es",
  },
  openGraph: {
    title: "Mantenimiento de Piscinas en el Sur de Tenerife | AtlanPool",
    description: "Servicio profesional de mantenimiento de piscinas en el Sur de Tenerife. Recupera tu tiempo libre. Primera revisión GRATIS.",
    url: "https://www.atlanpool.es",
  },
};

// FAQPage Schema Markup para SEO
const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué incluye la revisión gratuita?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La revisión gratuita incluye un análisis completo del balance químico de tu piscina (pH, cloro, alcalinidad, dureza), revisión visual del estado general, filtros y sistema de circulación, y un informe detallado con recomendaciones personalizadas. Sin compromiso de contratación.",
      },
    },
    {
      "@type": "Question",
      name: "¿Con qué frecuencia necesita mantenimiento mi piscina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En Tenerife, debido a nuestro clima privilegiado, la piscina se disfruta todo el año. Recomendamos mantenimiento semanal para garantizar la calidad del agua constante, aunque nuestros planes se adaptan si tienes un uso más estacional.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si no estoy satisfecho con el servicio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ofrecemos garantía de satisfacción total. Si en los primeros 30 días no estás completamente satisfecho, te devolvemos el 100% de tu dinero sin preguntas. Además, si detectas cualquier problema entre visitas, lo solucionamos sin coste adicional.",
      },
    },
    {
      "@type": "Question",
      name: "¿Utilizan productos seguros para niños y mascotas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutamente. Todos nuestros productos están certificados y son seguros para uso en piscinas familiares. Además, ofrecemos opciones eco-friendly para familias con sensibilidades especiales.",
      },
    },
    {
      "@type": "Question",
      name: "¿Trabajan en mi zona?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AtlanPool cubre toda la zona sur de Tenerife: Adeje, Costa Adeje, La Caleta, Las Américas, San Eugenio, Los Cristianos, Arona, El Médano, Abades, Granadilla de Abona, San Miguel de Abona, Golf del Sur y alrededores. Contáctanos para confirmar disponibilidad en tu ubicación específica.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo cambiar o cancelar mi plan en cualquier momento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El plan de mantenimiento premium tiene una permanencia de 12 meses, si en los primeros 30 días no estás conforme podrás cancelarlo sin haber pagado nada, ya que realizamos el servicio a mes vencido.",
      },
    },
  ],
};

// Schema Markup JSON-LD para LocalBusiness
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AtlanPool",
  image: "https://www.atlanpool.es/og-image.jpg",
  "@id": "https://www.atlanpool.es",
  url: "https://www.atlanpool.es",
  telephone: "+34631230569",
  email: "info@atlanpool.es",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Santa Cruz de Tenerife",
    addressLocality: "Santa Cruz de Tenerife",
    postalCode: "38001",
    addressRegion: "Tenerife",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.4636,
    longitude: -16.2519,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "19:00",
    },
  ],
  priceRange: "€€",
  areaServed: [
    { "@type": "City", name: "Adeje" },
    { "@type": "City", name: "La Caleta" },
    { "@type": "City", name: "Las Américas" },
    { "@type": "City", name: "San Eugenio" },
    { "@type": "City", name: "El Médano" },
    { "@type": "City", name: "Abades" },
    { "@type": "City", name: "Granadilla de Abona" },
    { "@type": "City", name: "San Miguel de Abona" },
    { "@type": "City", name: "Golf del Sur" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 5.0,
    reviewCount: 10,
    bestRating: 5,
    worstRating: 1,
  },
  sameAs: [
    "https://www.facebook.com/share/1CMksZtzTW/",
    "https://www.instagram.com/atlanpool.es",
    "https://www.google.com/maps/search/?api=1&query=AtlanPool&query_place_id=ChIJ5y8Xg1PIRGMRXtzZcEEx0mA",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <WhatsAppButton />

        <main>
          <HeroSection />
          <PainSection />
          <AgitationBanner />
          <section id="servicios">
            <SolutionSection />
          </section>
          <section id="resultados">
            <DataVizSection />
          </section>
          <TestimonialsSection />
          <PricingSection />
          <section id="faq">
            <FAQSection />
          </section>
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
