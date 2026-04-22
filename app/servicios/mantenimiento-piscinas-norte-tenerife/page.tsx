import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Droplets, Shield, MapPin, Phone, Sun, ArrowRight } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

export const metadata: Metadata = {
  title: "Mantenimiento de Piscinas Santa Cruz de Tenerife y alrededores | AtlanPool",
  description: "Servicio especializado de mantenimiento y limpieza de piscinas en el Santa Cruz de Tenerife y alrededores. Cubrimos Santa Cruz de Tenerife, La Laguna, El Rosario, La Laguna, Candelaria y toda la zona norte. Primera revisión GRATIS.",
  keywords: [
    "mantenimiento piscinas Santa Cruz de Tenerife",
    "mantenimiento de piscinas Santa Cruz de Tenerife y alrededores",
    "empresa piscinas Santa Cruz de Tenerife",
    "limpieza piscinas Santa Cruz de Tenerife",
    "servicio piscina Santa Cruz de Tenerife",
    "mantenimiento piscina Santa Cruz de Tenerife La Laguna",
  ],
  alternates: {
    canonical: "https://www.atlanpool.es/servicios/mantenimiento-piscinas-norte-tenerife",
  },
  openGraph: {
    title: "Mantenimiento de Piscinas Santa Cruz de Tenerife y alrededores | AtlanPool",
    description: "Especialistas en mantenimiento de piscinas en el Santa Cruz de Tenerife y alrededores. Santa Cruz de Tenerife, La Laguna, El Rosario, La Laguna y más. Primera revisión GRATIS.",
    url: "https://www.atlanpool.es/servicios/mantenimiento-piscinas-norte-tenerife",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mantenimiento de Piscinas Santa Cruz de Tenerife y alrededores | AtlanPool",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mantenimiento de Piscinas en el Santa Cruz de Tenerife y alrededores",
  description: "Servicio especializado en mantenimiento y limpieza de piscinas en el Santa Cruz de Tenerife y alrededores. Cubre Santa Cruz de Tenerife, La Laguna, El Rosario, La Laguna, Candelaria y toda la zona norte de la isla.",
  url: "https://www.atlanpool.es/servicios/mantenimiento-piscinas-norte-tenerife",
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
  areaServed: [
    { "@type": "City", name: "Santa Cruz de Tenerife" },
    { "@type": "City", name: "La Laguna" },
    { "@type": "City", name: "El Rosario" },
    { "@type": "City", name: "San Cristóbal de La Laguna" },
    { "@type": "City", name: "Candelaria" },
    { "@type": "City", name: "El Sauzal" },
    { "@type": "City", name: "Santa Úrsula" },
    { "@type": "City", name: "Güímar" },
    { "@type": "City", name: "Tegueste" },
    { "@type": "City", name: "San Juan de la Rambla" },
    { "@type": "City", name: "Arafo" },
    { "@type": "City", name: "La Esperanza" },
  ],
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
      name: "Mantenimiento de Piscinas Santa Cruz de Tenerife y alrededores",
      item: "https://www.atlanpool.es/servicios/mantenimiento-piscinas-norte-tenerife",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué municipios del Santa Cruz de Tenerife y alrededores cubrís con el mantenimiento de piscinas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AtlanPool cubre todos los municipios principales del Santa Cruz de Tenerife y alrededores: Santa Cruz de Tenerife, La Laguna, El Rosario, San Cristóbal de La Laguna, Candelaria, El Sauzal, Santa Úrsula, Güímar, Tegueste, San Juan de la Rambla, Arafo y La Esperanza. También llegamos a zonas estratégicas como La Paz, Martiánez, El Mayorazgo, La Perdoma, Aguamansa, La Longuera, Cruz Santa, Mesa del Mar, Agua García y San Marcos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Tiene ventajas contratar mantenimiento de piscinas en el norte frente al sur de Tenerife?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El norte y el sur de Tenerife tienen características climáticas diferentes que afectan al mantenimiento de las piscinas. En el norte, el clima atlántico con más humedad y vientos del noreste deposita más polvo y materia orgánica en el agua, lo que requiere un control más frecuente del balance químico. AtlanPool está especializada en las condiciones del norte de la isla, lo que nos permite adaptar los tratamientos a la realidad de cada zona.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta el mantenimiento de piscinas en el Santa Cruz de Tenerife y alrededores?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El precio del mantenimiento de piscinas en el Santa Cruz de Tenerife y alrededores depende del tamaño de la piscina, el tipo de tratamiento y la frecuencia de visitas. En AtlanPool hacemos la primera revisión gratuita y sin compromiso para evaluar el estado de tu piscina y ofrecerte un presupuesto personalizado. Nuestros planes empiezan desde 60€ por visita.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se usan las piscinas todo el año en el Santa Cruz de Tenerife y alrededores?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, el clima subtropical del Santa Cruz de Tenerife y alrededores permite el uso de la piscina prácticamente los 12 meses del año. En invierno las temperaturas del agua bajan algo más que en el sur, pero con una bomba de calor o sistemas de calefacción la piscina se puede usar cómodamente en cualquier época. Por eso el mantenimiento anual es fundamental: no existe temporada de 'cierre' como en la Península.",
      },
    },
  ],
};

const municipios = [
  { name: "Santa Cruz de Tenerife", link: "/servicios/mantenimiento-piscinas-puerto-de-la-cruz" },
  { name: "La Laguna", link: null },
  { name: "El Rosario", link: null },
  { name: "San Cristóbal de La Laguna", link: null },
  { name: "Candelaria", link: null },
  { name: "El Sauzal", link: null },
  { name: "Santa Úrsula", link: null },
  { name: "Güímar", link: null },
  { name: "Tegueste", link: null },
  { name: "San Juan de la Rambla", link: null },
  { name: "Arafo", link: null },
  { name: "La Esperanza", link: null },
];

export default function MantenimientoPiscinasNorteTenerife() {
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
                <span className="text-foreground font-medium">Santa Cruz de Tenerife y alrededores</span>
              </nav>

              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary rounded-full px-4 py-2 text-sm font-semibold mb-6">
                  <MapPin className="w-4 h-4" />
                  Santa Cruz de Tenerife y alrededores — Islas Canarias
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-800 leading-[1.1] mb-6 tracking-tight">
                  Mantenimiento de Piscinas en el{" "}
                  <span className="text-secondary">Santa Cruz de Tenerife y alrededores</span>
                </h1>

                <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                  Especialistas en mantenimiento de piscinas en el Santa Cruz de Tenerife y alrededores. Cubrimos Santa Cruz de Tenerife, La Laguna, El Rosario, La Laguna, Candelaria y más de 12 municipios. Técnico local, agua cristalina garantizada todo el año.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/34643902918?text=Hola,%20me%20interesa%20el%20mantenimiento%20de%20piscinas%20en%20el%20norte%20de%20Tenerife"
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

          {/* Ventajas del norte */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Por qué las piscinas del Santa Cruz de Tenerife y alrededores{" "}
                  <span className="text-secondary">necesitan cuidado especial</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  El clima atlántico del norte tiene sus particularidades. Conocerlas marca la diferencia entre una empresa genérica y un especialista local
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {[
                  {
                    icon: Sun,
                    title: "Uso durante todo el año",
                    desc: "A diferencia de la Península, en el Santa Cruz de Tenerife y alrededores no existe una temporada de cierre de piscinas. Las temperaturas suaves permiten el baño los 12 meses, por lo que el mantenimiento debe ser continuo y sin interrupciones.",
                  },
                  {
                    icon: Droplets,
                    title: "Viento del noreste y calima",
                    desc: "Los vientos del noreste y los episodios de calima depositan polvo y partículas en suspensión que alteran el balance químico del agua. En el norte es frecuente tener que reforzar el tratamiento tras una jornada de viento fuerte.",
                  },
                  {
                    icon: Shield,
                    title: "Humedad atlántica",
                    desc: "El Santa Cruz de Tenerife y alrededores tiene más humedad que el sur. Esto favorece la proliferación de algas en las paredes y bordes de la piscina, especialmente en invierno, cuando el mantenimiento puede ser descuidado.",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Agua dura de la red",
                    desc: "El agua del Santa Cruz de Tenerife y alrededores tiene una dureza media-alta que puede generar incrustaciones calcáreas en las paredes, filtros y equipos si no se controla correctamente el nivel de calcio y alcalinidad.",
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

          {/* Municipios */}
          <section className="py-16 md:py-20 bg-muted/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Municipios del Santa Cruz de Tenerife y alrededores{" "}
                  <span className="text-secondary">donde operamos</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Más de 12 municipios en el norte y noreste de la isla cubiertos por nuestro equipo
                </p>
              </div>

              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
                {municipios.map((municipio) => (
                  <div
                    key={municipio.name}
                    className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-sm"
                  >
                    <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                    {municipio.link ? (
                      <Link
                        href={municipio.link}
                        className="font-medium text-secondary hover:underline"
                      >
                        Mantenimiento piscinas {municipio.name}
                      </Link>
                    ) : (
                      <span className="font-medium">Mantenimiento piscinas {municipio.name}</span>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-center text-muted-foreground text-sm mt-8 max-w-2xl mx-auto">
                ¿Tu municipio no aparece? Probablemente también llegamos.{" "}
                <a href="tel:+34643902918" className="text-secondary font-semibold hover:underline">
                  Llámanos al 643 902 918
                </a>{" "}
                para confirmarlo.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Preguntas frecuentes sobre el{" "}
                  <span className="text-secondary">Santa Cruz de Tenerife y alrededores</span>
                </h2>
              </div>

              <div className="max-w-3xl mx-auto space-y-4">
                {[
                  {
                    q: "¿Qué municipios del Santa Cruz de Tenerife y alrededores cubrís?",
                    a: "AtlanPool cubre todos los municipios del norte: Santa Cruz de Tenerife, La Laguna, El Rosario, San Cristóbal de La Laguna, Candelaria, El Sauzal, Santa Úrsula, Güímar, Tegueste, San Juan de la Rambla, Arafo y La Esperanza. También zonas como La Paz, Martiánez, El Mayorazgo, La Perdoma, Aguamansa, Cruz Santa, Mesa del Mar y San Marcos.",
                  },
                  {
                    q: "¿Tiene ventajas contratar mantenimiento en el norte frente al sur de Tenerife?",
                    a: "El norte y el sur tienen características climáticas muy diferentes que afectan al agua de las piscinas. En el norte, la humedad atlántica y los vientos del noreste requieren un control más frecuente del balance químico. AtlanPool está especializada en las condiciones del norte, lo que nos permite adaptar los tratamientos a la realidad de cada zona y municipio.",
                  },
                  {
                    q: "¿Cuánto cuesta el mantenimiento en el Santa Cruz de Tenerife y alrededores?",
                    a: "El precio depende del tamaño, el tipo de tratamiento y la frecuencia. Hacemos la primera revisión completamente gratis y sin compromiso para ofrecerte un presupuesto personalizado. Nuestros planes empiezan desde 60€ por visita.",
                  },
                  {
                    q: "¿Se usan las piscinas todo el año en el Santa Cruz de Tenerife y alrededores?",
                    a: "Sí, el clima subtropical del Santa Cruz de Tenerife y alrededores permite el uso de la piscina prácticamente los 12 meses del año. No existe temporada de cierre como en la Península. Por eso el mantenimiento continuo es fundamental para mantener el agua en perfectas condiciones durante todo el año.",
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
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                <div className="bg-card rounded-2xl p-8 shadow-sm flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-bold">Servicio en Santa Cruz de Tenerife</h3>
                  <p className="text-muted-foreground text-sm flex-1">
                    Página específica con toda la información sobre nuestro servicio en Santa Cruz de Tenerife.
                  </p>
                  <Link
                    href="/servicios/mantenimiento-piscinas-puerto-de-la-cruz"
                    className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all"
                  >
                    Ver página de Santa Cruz de Tenerife <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-sm flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Droplets className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-bold">Servicio de mantenimiento completo</h3>
                  <p className="text-muted-foreground text-sm flex-1">
                    Consulta todos los detalles del servicio de mantenimiento para toda Tenerife.
                  </p>
                  <Link
                    href="/servicios/mantenimiento-piscinas-tenerife"
                    className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all"
                  >
                    Ver servicio completo <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 text-secondary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Tienes una piscina en el Santa Cruz de Tenerife y alrededores?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Solicita tu primera revisión gratuita. Sin compromiso. Te llamamos en menos de 24 horas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/34643902918?text=Hola,%20me%20interesa%20el%20mantenimiento%20de%20piscinas%20en%20el%20norte%20de%20Tenerife"
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
