"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Carlos M.",
    role: "Cliente en Santa Cruz de Tenerife",
    initials: "CM",
    color: "bg-blue-600",
    rating: 5,
    quote:
      "Desde que AtlanPool lleva el mantenimiento de mi piscina el agua siempre está perfecta. Son puntuales, profesionales y muy serios con su trabajo. Me despreocupé completamente del tema.",
  },
  {
    name: "María José R.",
    role: "Cliente en La Laguna",
    initials: "MJ",
    color: "bg-teal-600",
    rating: 5,
    quote:
      "Tenía el agua verde y en dos visitas la dejaron cristalina. Diagnosticaron el problema rápidamente y lo resolvieron sin complicaciones. El trato es muy cercano y responden enseguida.",
  },
  {
    name: "Alejandro G.",
    role: "Cliente en El Rosario",
    initials: "AG",
    color: "bg-indigo-600",
    rating: 5,
    quote:
      "Contraté el plan mensual y la diferencia es brutal. Antes pasaba los fines de semana peleando con la piscina, ahora solo me preocupo de disfrutarla. Profesionales de verdad.",
  },
  {
    name: "Lucía T.",
    role: "Cliente en Candelaria",
    initials: "LT",
    color: "bg-purple-600",
    rating: 5,
    quote:
      "Muy buen servicio desde el primer día. Llegaron a tiempo, explicaron todo lo que iban a hacer y dejaron la piscina impecable. El balance químico siempre perfecto. Los recomiendo.",
  },
  {
    name: "Antonio P.",
    role: "Cliente en Santa Cruz de Tenerife",
    initials: "AP",
    color: "bg-cyan-700",
    rating: 5,
    quote:
      "Rápidos, eficaces y muy profesionales. Detectaron una fuga que llevaba meses sin encontrar y la resolvieron en una visita. Excelente relación calidad-precio. Repetiré seguro.",
  },
  {
    name: "Sara F.",
    role: "Comunidad de vecinos, La Laguna",
    initials: "SF",
    color: "bg-blue-500",
    rating: 5,
    quote:
      "Gestionan la piscina de nuestra comunidad y estamos encantados. Siempre puntual, el agua en perfecto estado y nos avisan de cualquier incidencia antes de que se convierta en problema.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setItemsPerView(3);
      else if (window.innerWidth >= 768) setItemsPerView(2);
      else setItemsPerView(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / itemsPerView);
  const maxIndex = totalSlides - 1;

  const next = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goToSlide = useCallback(
    (index: number) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  // Auto-play cada 5 segundos
  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, isInView]);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 50 : -50, opacity: 0, scale: 0.95 }),
    center: { zIndex: 1, x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ zIndex: 0, x: dir < 0 ? 50 : -50, opacity: 0, scale: 0.95 }),
  };

  const visible = testimonials.slice(
    currentIndex * itemsPerView,
    currentIndex * itemsPerView + itemsPerView
  );

  return (
    <section ref={ref} className="py-12 md:py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="flex justify-center mb-8">
            <Image
              src="/atlanpool-logo.png"
              alt="AtlanPool Logo"
              width={308}
              height={240}
              className="h-28 w-auto"
            />
          </div>
          <span className="inline-block text-secondary font-semibold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
            💬 Testimonios
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 px-2">
            Lo que Dicen Nuestros{" "}
            <span className="gradient-text">Clientes Felices</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
            Historias reales de propietarios que recuperaron su tiempo libre en Tenerife
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 },
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-2"
              >
                {visible.map((t, idx) => (
                  <div
                    key={`${currentIndex}-${idx}`}
                    className="testimonial-card group hover:shadow-xl transition-all duration-300 relative pt-6"
                  >
                    <div className="flex items-start gap-3 md:gap-4 mb-4">
                      <div
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base flex-shrink-0 ${t.color}`}
                      >
                        {t.initials}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground">{t.name}</h4>
                        <div className="flex items-center gap-0.5 mt-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 md:w-3.5 md:h-3.5 ${
                                i < t.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "fill-gray-200 text-gray-200"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <Quote className="w-6 h-6 md:w-8 md:h-8 text-secondary/20 mb-2 md:mb-3 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {t.quote}
                    </p>

                    <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-12 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-border flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-12 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-border flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2.5 rounded-full transition-all ${
                  idx === currentIndex
                    ? "bg-secondary w-8"
                    : "bg-gray-300 hover:bg-gray-400 w-2.5"
                }`}
                aria-label={`Ir a slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
