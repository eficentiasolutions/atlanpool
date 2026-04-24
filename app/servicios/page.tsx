import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Droplets, Sparkles, Phone } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

export const metadata: Metadata = {
  title: "Servicios de Piscinas en Tenerife | AtlanPool",
  description: "Descubre todos los servicios de piscinas de AtlanPool en Tenerife. Mantenimiento profesional, limpieza integral y más. cientos de familias satisfechas. ¡Llama ya!",
  keywords: [
    "servicios de piscinas en Tenerife",
    "mantenimiento de piscinas en Tenerife",
    "limpieza de piscinas en Tenerife",
    "servicio piscinas Tenerife",
    "empresa piscinas Tenerife",
  ],
  alternates: {
    canonical: "https://www.atlanpool.es/servicios",
  },
  openGraph: {
    title: "Servicios de Piscinas en Tenerife | AtlanPool",
    description: "Mantenimiento, limpieza y más. Todos los servicios profesionales de piscinas en Tenerife. cientos de familias satisfechas.",
    url: "https://www.atlanpool.es/servicios",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Servicios de Piscinas en Tenerife | AtlanPool",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Servicios de Piscinas en Tenerife",
  description: "Servicios profesionales de mantenimiento y limpieza de piscinas en Tenerife. Más de cientos de familias satisfechas en toda la isla.",
  provider: {
    "@type": "LocalBusiness",
    name: "AtlanPool",
    telephone: "+34643902918",
    email: "info@atlanpool.es",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 28.416,
      longitude: -16.5425,
    },
    geoRadius: "20000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Piscinas",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mantenimiento de Piscinas",
          url: "https://www.atlanpool.es/servicios/mantenimiento-piscinas-tenerife",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Limpieza de Piscinas",
          url: "https://www.atlanpool.es/servicios/limpieza-piscinas-tenerife",
        },
      },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://www.atlanpool.es",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Servicios",
      item: "https://www.atlanpool.es/servicios",
    },
  ],
};

const services = [
  {
    badge: "Servicio recurrente · Limpieza · Balance químico",
    title: "Mantenimiento de Piscinas en Tenerife",
    description:
      "Servicio profesional de mantenimiento periódico de piscinas en Tenerife. Incluye limpieza, análisis del agua, ajuste químico y revisión de equipos. Más de cientos de familias ya confían en nosotros.",
    bullets: [
      "Limpieza de fondo y paredes",
      "Análisis del agua in situ",
      "Balance químico completo",
      "Revisión de equipos de depuración",
      "Informe digital tras cada visita",
      "Primera revisión GRATIS",
    ],
    cta: "Ver servicio completo",
    href: "/servicios/mantenimiento-piscinas-tenerife",
    icon: Droplets,
    popular: true,
  },
  {
    badge: "Limpieza profunda · Fondo · Paredes · Filtros",
    title: "Limpieza de Piscinas en Tenerife",
    description:
      "Servicio profesional de limpieza integral de piscinas. Devolvemos el brillo cristalino a tu piscina con limpieza de fondo, paredes, filtros y sistema completo. Resultado garantizado.",
    bullets: [
      "Limpieza de fondo y paredes",
      "Limpieza de filtros y skimmers",
      "Limpieza de línea de agua",
      "Puesta en marcha post-invierno",
      "Productos profesionales certificados",
      "Resultado garantizado",
    ],
    cta: "Ver servicio completo",
    href: "/servicios/limpieza-piscinas-tenerife",
    icon: Sparkles,
    popular: false,
  },
];

export default function ServiciosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <WhatsAppButton />

        <main>
          {/* Hero Section */}
          <section className="relative min-h-[85vh] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50" />
            <Image
              src="/hero-pool.jpg"
              alt="Servicios profesionales de piscinas en Tenerife"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />

            {/* Overlays — mismo estilo que el hero principal */}
            <div className="absolute inset-0 bg-brand-dark/15" />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 via-transparent to-brand-teal/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />

            <div className="absolute top-20 left-10 w-32 h-32 bg-brand-teal/20 rounded-full blur-3xl mix-blend-multiply" />
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-brand-primary/10 rounded-full blur-3xl mix-blend-multiply" />

            {/* pt-32 md:pt-36 para clearear la navbar fija */}
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-[85vh] pt-32 md:pt-36 pb-24">
              <div className="w-full max-w-4xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-800 leading-[1.1] mb-8 md:mb-10 tracking-tight">
                  Servicios de Piscinas en{" "}
                  <span className="font-extrabold text-secondary">Tenerife</span>
                </h1>

                <div className="mb-10 md:mb-14">
                  <div className="inline-block bg-white/90 backdrop-blur-md rounded-2xl px-6 py-5 md:px-10 md:py-7 border border-brand-primary/10 shadow-2xl">
                    <p className="text-base sm:text-lg md:text-xl font-bold text-brand-dark leading-snug">
                      Empresa especializada en piscinas privadas y de comunidades<br className="hidden sm:block" /> en Santa Cruz de Tenerife y alrededores.
                    </p>
                    <p className="text-brand-primary/80 text-sm mt-3 font-medium">
                      Más de cientos de familias ya disfrutan de su piscina sin preocupaciones.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+34643902918"
                    className="btn-solid inline-flex items-center justify-center gap-2 py-4 px-8"
                  >
                    <Phone className="w-5 h-5" />
                    Revisión Gratuita
                  </a>
                  <a
                    href="https://wa.me/34643902918?text=Hola,%20me%20interesa%20información%20sobre%20los%20servicios%20de%20piscinas%20en%20Tenerife"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold text-white shadow-lg hover:scale-105 hover:opacity-90 transition-all"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    {/* WhatsApp oficial SVG */}
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp Directo
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Service Cards */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Todos nuestros servicios de{" "}
                  <span className="gradient-text">piscinas en Tenerife</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Elige el servicio que mejor se adapta a las necesidades de tu piscina
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-8">
                {services.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <div
                      key={service.href}
                      className="bg-card rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow border border-border/50 relative"
                    >
                      {service.popular && (
                        <span className="absolute -top-3 left-6 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                          Más solicitado
                        </span>
                      )}

                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-7 h-7 text-secondary" />
                        </div>

                        <div className="flex-1">
                          <span className="text-xs font-medium text-muted-foreground">
                            {service.badge}
                          </span>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground mt-1 mb-3">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {service.description}
                          </p>

                          <ul className="space-y-2 mb-6">
                            {service.bullets.map((bullet) => (
                              <li
                                key={bullet}
                                className="flex items-center gap-2 text-sm"
                              >
                                <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>

                          <Link
                            href={service.href}
                            className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all"
                          >
                            {service.cta}
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 text-secondary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿No sabes qué servicio necesitas?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Cuéntanos el estado de tu piscina y te recomendamos la solución más adecuada sin compromiso. Te asesoramos gratis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/34643902918?text=Hola,%20necesito%20asesoramiento%20sobre%20mi%20piscina%20en%20Tenerife"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold text-white shadow-lg hover:scale-105 hover:opacity-90 transition-all"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Directo
                </a>
                <a
                  href="tel:+34643902918"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  📞 643 902 918
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
