import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Droplets, Shield, Clock, MapPin, Phone, ArrowRight } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

export const metadata: Metadata = {
  title: "Mantenimiento de Piscinas en Santa Cruz de Tenerife | AtlanPool",
  description: "Servicio profesional de mantenimiento y limpieza de piscinas en Santa Cruz de Tenerife, Tenerife. Técnico local, visitas semanales, balance químico y revisión de equipos. Primera revisión GRATIS. Llama al 643 902 918.",
  keywords: [
    "mantenimiento piscinas Santa Cruz de Tenerife",
    "mantenimiento de piscinas Santa Cruz de Tenerife",
    "limpieza piscinas Santa Cruz de Tenerife",
    "empresa piscinas Santa Cruz de Tenerife",
    "servicio piscina Puerto Cruz Tenerife",
    "mantenimiento piscina Santa Cruz de Tenerife",
  ],
  alternates: {
    canonical: "https://www.atlanpool.es/servicios/mantenimiento-piscinas-puerto-de-la-cruz",
  },
  openGraph: {
    title: "Mantenimiento de Piscinas en Santa Cruz de Tenerife | AtlanPool",
    description: "Técnico local de piscinas en Santa Cruz de Tenerife. Visitas semanales, balance químico y resultado garantizado. Primera revisión GRATIS.",
    url: "https://www.atlanpool.es/servicios/mantenimiento-piscinas-puerto-de-la-cruz",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mantenimiento de Piscinas en Santa Cruz de Tenerife | AtlanPool",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mantenimiento de Piscinas en Santa Cruz de Tenerife",
  description: "Servicio profesional de mantenimiento y limpieza de piscinas en Santa Cruz de Tenerife, Tenerife. Técnico local con visitas semanales, balance químico completo y revisión de equipos.",
  url: "https://www.atlanpool.es/servicios/mantenimiento-piscinas-puerto-de-la-cruz",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.atlanpool.es",
    name: "AtlanPool",
    url: "https://www.atlanpool.es",
    telephone: "+34643902918",
    email: "info@atlanpool.es",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Santa Cruz de Tenerife",
      addressRegion: "Tenerife",
      addressCountry: "ES",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "10",
      bestRating: "5",
      worstRating: "1",
    },
  },
  areaServed: {
    "@type": "City",
    name: "Santa Cruz de Tenerife",
    addressCountry: "ES",
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
    {
      "@type": "ListItem",
      position: 3,
      name: "Mantenimiento de Piscinas en Santa Cruz de Tenerife",
      item: "https://www.atlanpool.es/servicios/mantenimiento-piscinas-puerto-de-la-cruz",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Ofrecéis mantenimiento de piscinas en Santa Cruz de Tenerife?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, AtlanPool es una empresa de mantenimiento de piscinas especializada en el Santa Cruz de Tenerife y alrededores y con base de operaciones en Santa Cruz de Tenerife. Realizamos visitas semanales o quincenales con el mismo técnico de referencia que conoce tu piscina a fondo. Cubrimos Martiánez, La Paz, Punta Brava, El Mayorazgo, La Laguna, El Rosario y toda la zona.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta el mantenimiento de una piscina en Santa Cruz de Tenerife?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El precio del mantenimiento de piscinas en Santa Cruz de Tenerife depende del tamaño, el tipo de tratamiento y la frecuencia. En AtlanPool hacemos la primera revisión de balance químico completamente gratis, sin compromiso, para darte un presupuesto personalizado. Nuestros planes empiezan desde 60€ por visita.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué zonas de Santa Cruz de Tenerife cubrís?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En Santa Cruz de Tenerife cubrimos todas las zonas: Martiánez, La Paz, Punta Brava, El Mayorazgo, La Ranilla, Loro Parque, San Felipe, San Telmo, La Laguna, El Rosario, Cruz Santa y alrededores. Si tienes dudas sobre si llegamos a tu dirección concreta, llámanos al 643 902 918.",
      },
    },
    {
      "@type": "Question",
      name: "¿Con qué frecuencia necesita mantenimiento una piscina en Santa Cruz de Tenerife?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En Santa Cruz de Tenerife, con el clima atlántico del Santa Cruz de Tenerife y alrededores, recomendamos visitas semanales. El viento del norte puede depositar polvo y residuos en el agua, y las temperaturas suaves permiten el uso de la piscina prácticamente todo el año. Un mantenimiento semanal garantiza agua siempre en perfectas condiciones.",
      },
    },
  ],
};

export default function MantenimientoPiscinasPuertoDelaCruz() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <WhatsAppButton />

        <main>
          {/* Hero */}
          <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-white">
            <div className="absolute top-10 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-56 h-56 bg-brand-teal/10 rounded-full blur-3xl" />

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                <Link href="/" className="hover:text-secondary transition-colors">Inicio</Link>
                <span>/</span>
                <Link href="/servicios" className="hover:text-secondary transition-colors">Servicios</Link>
                <span>/</span>
                <span className="text-foreground font-medium">Santa Cruz de Tenerife</span>
              </nav>

              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary rounded-full px-4 py-2 text-sm font-semibold mb-6">
                  <MapPin className="w-4 h-4" />
                  Santa Cruz de Tenerife · Santa Cruz de Tenerife y alrededores
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-800 leading-[1.1] mb-6 tracking-tight">
                  Mantenimiento de Piscinas en{" "}
                  <span className="text-secondary">Santa Cruz de Tenerife</span>
                </h1>

                <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                  Empresa local especializada en mantenimiento de piscinas en Santa Cruz de Tenerife y toda la zona Santa Cruz de Tenerife y alrededores. Técnico de referencia fijo, visitas semanales y agua cristalina garantizada.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/34643902918?text=Hola,%20me%20interesa%20el%20mantenimiento%20de%20piscinas%20en%20Puerto%20de%20la%20Cruz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-8 py-4 font-semibold text-white shadow-lg hover:scale-105 hover:bg-[#128C7E] transition-all"
                  >
                    💬 Primera Revisión GRATIS
                  </a>
                  <a
                    href="tel:+34643902918"
                    className="inline-flex items-center justify-center rounded-xl border-2 border-secondary bg-white px-8 py-4 font-semibold text-secondary hover:bg-secondary/5 transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    643 902 918
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Por qué elegirnos en Santa Cruz de Tenerife */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Tu empresa de piscinas de confianza{" "}
                  <span className="text-secondary">en Santa Cruz de Tenerife</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Conocemos las particularidades del Santa Cruz de Tenerife y alrededores: el viento, la calima, la humedad atlántica y el uso intensivo de las piscinas durante todo el año
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    icon: MapPin,
                    title: "Base Local en el Norte",
                    desc: "Operamos desde Santa Cruz de Tenerife. Conocemos cada barrio, cada urbanización y las condiciones específicas del clima atlántico del Santa Cruz de Tenerife y alrededores.",
                  },
                  {
                    icon: Clock,
                    title: "Técnico de Referencia Fijo",
                    desc: "Siempre el mismo profesional para tu piscina. Aprende las necesidades concretas de tu sistema de filtrado, tu tipo de agua y tus hábitos de uso.",
                  },
                  {
                    icon: Droplets,
                    title: "Agua Cristalina Todo el Año",
                    desc: "En Santa Cruz de Tenerife la piscina se usa los 12 meses. Nuestro mantenimiento semanal garantiza el balance químico perfecto en cada estación.",
                  },
                  {
                    icon: Shield,
                    title: "Resultado Garantizado",
                    desc: "Si el agua no está perfecta después de nuestra visita, volvemos sin coste adicional. Tu satisfacción es nuestra garantía.",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Primera Revisión Gratis",
                    desc: "Visitamos tu piscina sin compromiso, evaluamos el estado y te damos un presupuesto personalizado. Sin letra pequeña, sin sorpresas.",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Cientos de Clientes en Tenerife",
                    desc: "Más de cientos de familias en el Santa Cruz de Tenerife y alrededores ya confían en AtlanPool. Valoración media de 5.0 en Google Reviews.",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                    <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Qué incluye */}
          <section className="py-16 md:py-20 bg-muted/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  ¿Qué incluye el{" "}
                  <span className="text-secondary">mantenimiento de tu piscina</span>?
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Cada visita en Santa Cruz de Tenerife es completa — no dejamos nada al azar
                </p>
              </div>

              <div className="max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-12 shadow-lg">
                <div className="space-y-5">
                  {[
                    "Limpieza completa de fondo y paredes con aspiradora profesional",
                    "Vaciado y limpieza de skimmers y cestillos",
                    "Balance químico completo (pH, cloro, alcalinidad y dureza del agua)",
                    "Limpieza de prefiltros, cestas y backwash cuando sea necesario",
                    "Revisión del sistema de circulación y bomba de filtración",
                    "Control de nivel de agua y aportación si es necesario",
                    "Revisión de cloradora salina y electrodos (piscinas de sal)",
                    "Informe digital tras cada visita con todos los parámetros medidos",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Zonas de Santa Cruz de Tenerife */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Zonas de{" "}
                  <span className="text-secondary">Santa Cruz de Tenerife</span>{" "}
                  donde operamos
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Conocemos Santa Cruz de Tenerife calle a calle. Cubrimos todas las urbanizaciones y barrios del municipio
                </p>
              </div>

              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
                {[
                  "Martiánez",
                  "La Paz",
                  "Punta Brava",
                  "El Mayorazgo",
                  "La Ranilla",
                  "San Felipe",
                  "San Telmo",
                  "Loro Parque",
                  "Cruz Santa",
                  "La Longuera",
                  "La Vera",
                  "La Laguna (zona alta)",
                ].map((zona) => (
                  <div
                    key={zona}
                    className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-sm"
                  >
                    <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span className="font-medium">{zona}</span>
                  </div>
                ))}
              </div>

              <p className="text-center text-muted-foreground text-sm mt-8 max-w-2xl mx-auto">
                ¿Tu zona no aparece? Cúbrimos también{" "}
                <Link href="/servicios/mantenimiento-piscinas-tenerife" className="text-secondary font-semibold hover:underline">
                  todo el Santa Cruz de Tenerife y alrededores
                </Link>
                . Consúltanos para confirmar disponibilidad.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 md:py-20 bg-muted/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Preguntas frecuentes sobre el mantenimiento en{" "}
                  <span className="text-secondary">Santa Cruz de Tenerife</span>
                </h2>
              </div>

              <div className="max-w-3xl mx-auto space-y-4">
                {[
                  {
                    q: "¿Ofrecéis mantenimiento de piscinas en Santa Cruz de Tenerife?",
                    a: "Sí, AtlanPool es una empresa de mantenimiento de piscinas con base en Santa Cruz de Tenerife y especializada en el Santa Cruz de Tenerife y alrededores. Realizamos visitas semanales o quincenales con técnico fijo. Cubrimos Martiánez, La Paz, Punta Brava, El Mayorazgo, La Laguna, El Rosario y toda la zona norte.",
                  },
                  {
                    q: "¿Cuánto cuesta el mantenimiento de una piscina en Santa Cruz de Tenerife?",
                    a: "El precio depende del tamaño, el tipo de tratamiento y la frecuencia. Hacemos la primera revisión de balance químico completamente gratis, sin compromiso, para darte un presupuesto personalizado. Nuestros planes empiezan desde 60€ por visita.",
                  },
                  {
                    q: "¿Qué zonas de Santa Cruz de Tenerife cubrís?",
                    a: "En Santa Cruz de Tenerife cubrimos todas las zonas: Martiánez, La Paz, Punta Brava, El Mayorazgo, La Ranilla, Loro Parque, San Felipe, San Telmo, La Laguna, El Rosario y Cruz Santa. Si tienes dudas sobre si llegamos a tu dirección, llámanos al 643 902 918.",
                  },
                  {
                    q: "¿Con qué frecuencia necesita mantenimiento una piscina en Santa Cruz de Tenerife?",
                    a: "En Santa Cruz de Tenerife recomendamos visitas semanales. El viento del norte deposita polvo y residuos en el agua, y el clima permite usar la piscina todo el año. Un mantenimiento semanal garantiza el agua siempre en perfectas condiciones.",
                  },
                ].map((faq) => (
                  <details key={faq.q} className="group bg-card rounded-2xl shadow-sm">
                    <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-foreground hover:text-secondary transition-colors">
                      <span className="pr-4">{faq.q}</span>
                      <span className="text-muted-foreground group-open:rotate-45 transition-transform text-xl flex-shrink-0">+</span>
                    </summary>
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-border pt-4">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Cross-links */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                <div className="bg-card rounded-2xl p-8 shadow-sm flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Droplets className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-bold">Mantenimiento en todo Tenerife</h3>
                  <p className="text-muted-foreground text-sm flex-1">
                    Consulta toda la información sobre nuestro servicio de mantenimiento para toda la isla de Tenerife.
                  </p>
                  <Link
                    href="/servicios/mantenimiento-piscinas-tenerife"
                    className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all"
                  >
                    Ver servicio completo <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-sm flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-bold">¿Piscina verde en Santa Cruz de Tenerife?</h3>
                  <p className="text-muted-foreground text-sm flex-1">
                    Ofrecemos servicio de limpieza y recuperación de agua verde con resultado garantizado.
                  </p>
                  <Link
                    href="/servicios/limpieza-piscinas-tenerife"
                    className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all"
                  >
                    Ver limpieza profesional <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 text-secondary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Tienes una piscina en Santa Cruz de Tenerife?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Solicita tu primera revisión gratuita. Sin compromiso. Llegamos a toda la zona Santa Cruz de Tenerife y alrededores.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/34643902918?text=Hola,%20me%20interesa%20el%20mantenimiento%20de%20piscinas%20en%20Puerto%20de%20la%20Cruz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-8 py-4 font-semibold text-white shadow-lg hover:scale-105 hover:bg-[#128C7E] transition-all"
                >
                  💬 WhatsApp Directo
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
