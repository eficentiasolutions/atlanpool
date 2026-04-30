import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

export const metadata: Metadata = {
  title: "Mantenimiento de Piscinas en el Sur de Tenerife | AtlanPool",
  description: "Mantenimiento profesional de piscinas en el Sur de Tenerife: Adeje, Arona, Granadilla, San Miguel, Guía de Isora y más. Primera revisión GRATIS.",
  keywords: [
    "mantenimiento piscinas sur Tenerife",
    "mantenimiento piscinas Adeje",
    "mantenimiento piscinas Arona",
    "mantenimiento piscinas Granadilla de Abona",
    "mantenimiento piscinas San Miguel de Abona",
    "empresa piscinas sur Tenerife",
  ],
  alternates: {
    canonical: "https://www.atlanpool.es/servicios/mantenimiento-piscinas-sur-tenerife",
  },
  openGraph: {
    title: "Mantenimiento de Piscinas en el Sur de Tenerife | AtlanPool",
    description: "Servicio profesional de mantenimiento de piscinas en el Sur de Tenerife. Adeje, Las Américas, El Médano, Granadilla y más. Primera revisión GRATIS.",
    url: "https://www.atlanpool.es/servicios/mantenimiento-piscinas-sur-tenerife",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Mantenimiento de Piscinas en el Sur de Tenerife | AtlanPool" }],
  },
  robots: { index: true, follow: true },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mantenimiento de Piscinas en el Sur de Tenerife",
  description: "Servicio profesional de mantenimiento de piscinas en el Sur de Tenerife. Adeje, La Caleta, Las Américas, San Eugenio, El Médano, Abades, Granadilla de Abona, San Miguel de Abona y Golf del Sur.",
  url: "https://www.atlanpool.es/servicios/mantenimiento-piscinas-sur-tenerife",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 5.0,
    reviewCount: 10,
    bestRating: 5,
    worstRating: 1,
  },
  provider: {
    "@type": "LocalBusiness",
    name: "AtlanPool",
    telephone: "+34631230569",
    email: "info@atlanpool.es",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sur de Tenerife",
      addressRegion: "Tenerife",
      addressCountry: "ES",
    },
    sameAs: [
      "https://www.facebook.com/share/1CMksZtzTW/",
      "https://www.instagram.com/atlanpool.es",
      "https://www.google.com/maps/search/?api=1&query=AtlanPool&query_place_id=ChIJ5y8Xg1PIRGMRXtzZcEEx0mA",
    ],
  },
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
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.atlanpool.es" },
    { "@type": "ListItem", position: 2, name: "Servicios", item: "https://www.atlanpool.es/servicios" },
    { "@type": "ListItem", position: 3, name: "Sur de Tenerife", item: "https://www.atlanpool.es/servicios/mantenimiento-piscinas-sur-tenerife" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué municipios del Sur de Tenerife cubrís?",
      acceptedAnswer: { "@type": "Answer", text: "Cubrimos todo el Sur de Tenerife: Adeje, La Caleta, Las Américas, San Eugenio, El Médano, Abades, Granadilla de Abona, San Miguel de Abona y Golf del Sur. Si tienes dudas sobre tu zona concreta, llámanos al 631 230 569." },
    },
    {
      "@type": "Question",
      name: "¿Tiene ventajas el clima del Sur de Tenerife para las piscinas?",
      acceptedAnswer: { "@type": "Answer", text: "El sur de Tenerife tiene más horas de sol y temperaturas más altas durante todo el año, lo que permite un uso intensivo de las piscinas. Esto hace que el control del cloro y el balance químico sea más crítico, ya que el calor y la radiación UV degradan más rápidamente los tratamientos. AtlanPool está especializada en las condiciones del sur de la isla." },
    },
    {
      "@type": "Question",
      name: "¿Con qué frecuencia necesita mantenimiento una piscina en el Sur de Tenerife?",
      acceptedAnswer: { "@type": "Answer", text: "En el Sur de Tenerife, con el clima seco y soleado, recomendamos visitas semanales. El sol intenso degrada el cloro rápidamente y el polvo de calima puede afectar la calidad del agua. Un mantenimiento semanal garantiza agua siempre cristalina y segura para el baño." },
    },
    {
      "@type": "Question",
      name: "¿Ofrecéis revisión gratuita en el Sur de Tenerife?",
      acceptedAnswer: { "@type": "Answer", text: "Sí, ofrecemos una primera revisión gratuita en toda la zona sur de Tenerife sin compromiso. Analizamos el estado del agua y de los equipos, y te damos un presupuesto personalizado. Llama al 631 230 569 o escríbenos por WhatsApp." },
    },
  ],
};

const municipiosSur = [
  { name: "Adeje", link: null },
  { name: "Costa Adeje", link: null },
  { name: "Arona", link: null },
  { name: "Los Cristianos", link: null },
  { name: "Playa de las Américas", link: null },
  { name: "Granadilla de Abona", link: null },
  { name: "El Médano", link: null },
  { name: "Los Abrigos", link: null },
  { name: "San Miguel de Abona", link: null },
  { name: "Golf del Sur", link: null },
  { name: "Guía de Isora", link: null },
  { name: "Alcalá", link: null },
  { name: "Playa San Juan", link: null },
  { name: "Santiago del Teide", link: null },
  { name: "Los Gigantes", link: null },
  { name: "Puerto de Santiago", link: null },
  { name: "Vilaflor", link: null },
  { name: "Arico", link: null },
];

const WA_SVG = `<svg viewBox="0 0 24 24" className="w-5 h-5 fill-current flex-shrink-0" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

export default function MantenimientoPiscinasSurTenerife() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-background">
        <Navbar />
        <WhatsAppButton />
        <main>
          {/* Hero */}
          <section className="relative pt-32 md:pt-36 pb-20 md:pb-28 overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-white">
            <div className="absolute top-20 right-10 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-brand-primary/10 rounded-full blur-3xl" />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="max-w-3xl mx-auto text-center">
                <nav className="text-xs text-muted-foreground mb-6 flex items-center justify-center gap-1">
                  <Link href="/" className="hover:text-primary">Inicio</Link>
                  <span>›</span>
                  <Link href="/servicios" className="hover:text-primary">Servicios</Link>
                  <span>›</span>
                  <span className="text-foreground font-medium">Sur de Tenerife</span>
                </nav>
                <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary rounded-full px-4 py-2 text-sm font-semibold mb-6">
                  ✅ Zona Sur de Tenerife
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark leading-[1.1] mb-6 tracking-tight">
                  Mantenimiento de Piscinas en el{" "}
                  <span className="text-secondary">Sur de Tenerife</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  Servicio profesional en Adeje, La Caleta, Las Américas, San Eugenio, El Médano, Abades, Granadilla de Abona, San Miguel de Abona y Golf del Sur. Técnico de referencia fijo, visitas semanales y agua cristalina garantizada.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/34631230569?text=Hola,%20me%20interesa%20el%20mantenimiento%20de%20piscinas%20en%20el%20sur%20de%20Tenerife"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold text-white shadow-lg hover:scale-105 hover:opacity-90 transition-all"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    {WA_SVG}
                    Primera Revisión GRATIS
                  </a>
                  <a href="tel:+34631230569"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-secondary bg-white px-8 py-4 font-semibold text-secondary hover:bg-secondary/5 transition-colors">
                    <Phone className="w-5 h-5" />
                    631 230 569
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Municipios */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Municipios del Sur de Tenerife que cubrimos
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Más de 18 zonas en el sur y suroeste de la isla
                </p>
              </div>
              <div className="max-w-3xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {municipiosSur.map((m) => (
                  <div key={m.name} className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-sm border border-border/50">
                    <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                    <span className="font-medium text-sm">Mantenimiento piscinas {m.name}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-muted-foreground text-sm mt-8">
                ¿No ves tu municipio?{" "}
                <a href="tel:+34631230569" className="text-secondary font-semibold hover:underline">Llámanos</a>{" "}
                y confirmamos cobertura.
              </p>
            </div>
          </section>

          {/* Por qué elegirnos */}
          <section className="py-16 md:py-20 bg-muted/50">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                Especialistas en el clima del{" "}
                <span className="text-secondary">Sur de Tenerife</span>
              </h2>
              <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
                {[
                  { titulo: "Sol intenso todo el año", desc: "El sur de Tenerife tiene más de 300 días de sol. La radiación UV degrada el cloro más rápido, por lo que el control semanal es imprescindible." },
                  { titulo: "Polvo de calima", desc: "Los episodios de calima depositan finas partículas en el agua que alteran el pH y enturbian la piscina. Actuamos de forma preventiva." },
                  { titulo: "Uso intensivo", desc: "Con temperaturas cálidas durante todo el año, las piscinas del sur se usan más. Más bañistas significa más control químico necesario." },
                  { titulo: "Técnico local fijo", desc: "Siempre el mismo técnico para tu piscina. Conoce su historial, sus equipos y sus particularidades. Sin rotaciones." },
                ].map((item) => (
                  <div key={item.titulo} className="bg-card rounded-2xl p-6 shadow-sm border border-border/50">
                    <h3 className="font-bold text-foreground mb-2">{item.titulo}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                Preguntas frecuentes — Sur de Tenerife
              </h2>
              <div className="max-w-2xl mx-auto space-y-4">
                {faqSchema.mainEntity.map((item) => (
                  <div key={item.name} className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
                    <h3 className="font-bold text-foreground mb-2">{item.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA final */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 text-secondary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Tienes una piscina en el Sur de Tenerife?</h2>
              <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">Pide tu primera revisión gratuita sin compromiso. Te contactamos en menos de 24 horas.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/34631230569?text=Hola,%20me%20interesa%20el%20mantenimiento%20de%20piscinas%20en%20el%20sur%20de%20Tenerife"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold text-white shadow-lg hover:scale-105 hover:opacity-90 transition-all"
                  style={{ backgroundColor: "#25D366" }}
                >
                  {WA_SVG}
                  WhatsApp Directo
                </a>
                <a href="tel:+34631230569"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-colors">
                  📞 631 230 569
                </a>
              </div>
            </div>
          </section>

          {/* Cross-links */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 text-center">
              <p className="text-muted-foreground text-sm mb-4">También te puede interesar:</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/servicios/mantenimiento-piscinas-tenerife" className="text-secondary hover:underline text-sm font-medium">
                  Mantenimiento de Piscinas en Tenerife →
                </Link>
                <Link href="/servicios/limpieza-piscinas-tenerife" className="text-secondary hover:underline text-sm font-medium">
                  Limpieza de Piscinas →
                </Link>
                <Link href="/servicios" className="text-secondary hover:underline text-sm font-medium">
                  Ver todos los servicios →
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
