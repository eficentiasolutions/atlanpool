// Reviews de Google Business Profile
// Actualiza estos datos con tus reviews reales de Google

export interface GoogleReview {
  author: string;
  rating: number;
  text: string;
  date?: string; // Formato: "2024-03-15"
  profileUrl?: string; // URL al perfil de Google del reviewer
}

export interface GoogleReviewsConfig {
  businessName: string;
  businessUrl: string; // URL completa de tu Google Business Profile
  rating: number; // Rating actual (ej: 4.8)
  totalReviews: number; // Número total de reviews
  reviews: GoogleReview[];
}

// ========================================================================
// ⚠️ ACTUALIZA ESTOS DATOS CON TUS REVIEWS REALES DE GOOGLE
// ========================================================================

export const googleReviewsConfig: GoogleReviewsConfig = {
  businessName: "AtlanPool",
  // PEGA AQUÍ LA URL DE TU GOOGLE BUSINESS PROFILE
  businessUrl: "https://www.google.com/maps/search/?api=1&query=AtlanPool+Santa+Cruz+de+Tenerife",

  // TU RATING ACTUAL EN GOOGLE (ej: 4.8, 5.0)
  rating: 5.0,

  // NÚMERO TOTAL DE REVIEWS EN GOOGLE
  totalReviews: 5,

  // AÑADE AQUÍ TUS REVIEWS REALES DE GOOGLE
  // Puedes copiarlas directamente desde tu Google Business Profile
  reviews: [
    {
      author: "Carlos M.",
      rating: 5,
      text: "Servicio excelente. Desde que AtlanPool lleva el mantenimiento de mi piscina el agua siempre está perfecta. Son puntuales, profesionales y muy serios con su trabajo. Totalmente recomendables.",
      date: "2025-03-10",
    },
    {
      author: "María José R.",
      rating: 5,
      text: "Tenía el agua verde y en dos visitas la dejaron cristalina. Diagnosticaron el problema rápidamente y lo resolvieron sin complicaciones. El trato es muy cercano y responden enseguida. 100% recomendados.",
      date: "2025-02-28",
    },
    {
      author: "Alejandro G.",
      rating: 5,
      text: "Contraté el plan de mantenimiento mensual y la diferencia es brutal. Antes pasaba los fines de semana peleando con la piscina, ahora solo me preocupo de disfrutarla. Profesionales de verdad.",
      date: "2025-02-14",
    },
    {
      author: "Lucía T.",
      rating: 5,
      text: "Muy buen servicio desde el primer día. Llegaron a tiempo, explicaron todo lo que iban a hacer y dejaron la piscina impecable. El balance químico siempre perfecto. Sin duda los recomiendo.",
      date: "2025-01-30",
    },
    {
      author: "Antonio P.",
      rating: 5,
      text: "Rápidos, eficaces y muy profesionales. Detectaron una fuga que llevaba meses sin encontrar y la resolvieron en una visita. Excelente relación calidad-precio. Repetiré seguro.",
      date: "2025-01-15",
    },
  ],
};

// ========================================================================
// FIN DE CONFIGURACIÓN
// ========================================================================

// Función para generar el schema markup válido para Google
export function generateReviewSchema(config: GoogleReviewsConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    mainEntity: {
      "@type": "LocalBusiness",
      name: config.businessName,
      image: "https://www.atlanpool.es/og-image.jpg",
      telephone: "+34643902918",
      email: "info@atlanpool.es",
      url: "https://www.atlanpool.es",
      sameAs: config.businessUrl,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santa Cruz de Tenerife",
        addressCountry: "ES",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: config.rating.toString(),
        reviewCount: config.totalReviews.toString(),
        bestRating: "5",
        worstRating: "1",
      },
      review: config.reviews.map((review) => ({
        "@type": "Review",
        author: {
          "@type": "Person",
          name: review.author,
          url: review.profileUrl,
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: review.rating.toString(),
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody: review.text,
        datePublished: review.date,
      })),
    },
  };
}

// Función para formatear la fecha relativa (ej: "hace 2 semanas")
export function formatRelativeDate(dateString?: string): string {
  if (!dateString) return "";

  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return weeks === 1 ? "hace 1 semana" : `hace ${weeks} semanas`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return months === 1 ? "hace 1 mes" : `hace ${months} meses`;
  } else {
    const years = Math.floor(diffDays / 365);
    return years === 1 ? "hace 1 año" : `hace ${years} años`;
  }
}
