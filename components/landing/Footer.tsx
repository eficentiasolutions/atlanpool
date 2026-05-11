import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <div>
                <Image
                  src="/atlanpool-logo.png"
                  alt="AtlanPool"
                  width={720}
                  height={244}
                  className="w-40 md:w-64 h-auto object-contain brightness-0 invert"
                />
              </div>
            </div>
            <p className="text-white/70 mb-4 md:mb-6 max-w-md text-sm md:text-base">
              Redefinimos la experiencia de tener piscina. Nuestro enfoque técnico y proactivo garantiza un agua saludable y cristalina siempre, para que tú solo te ocupes de lo importante: disfrutarla.
            </p>
            <div className="flex gap-3 md:gap-4">
              {/* Redes sociales */}
              {[
                { Icon: Facebook, href: "https://www.facebook.com/share/1CMksZtzTW/", label: "Facebook" },
                { Icon: Instagram, href: "https://www.instagram.com/atlanpool.es", label: "Instagram" },
              ].map(({ Icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              ))}
            </div>

            {/* NAP — Name, Address, Phone para Local SEO */}
            <div className="mt-4 space-y-1 text-white/60 text-xs md:text-sm">
              <p>📍 Sur de Tenerife (Adeje, Las Américas, El Médano...)</p>
              <p>
                <a href="tel:+34631230569" className="hover:text-white transition-colors">
                  📞 +34 631 230 569
                </a>
              </p>
              <p>
                <a href="mailto:info@atlanpool.es" className="hover:text-white transition-colors">
                  ✉️ info@atlanpool.es
                </a>
              </p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Servicios</h4>
            <ul className="space-y-2 md:space-y-3 text-white/70 text-xs md:text-sm">
              <li>
                <a href="/servicios" className="hover:text-secondary transition-colors">
                  Todos los Servicios
                </a>
              </li>
              <li>
                <a href="/servicios/mantenimiento-piscinas-tenerife" className="hover:text-secondary transition-colors">
                  Mantenimiento de Piscinas
                </a>
              </li>
              <li>
                <a href="/servicios/limpieza-piscinas-tenerife" className="hover:text-secondary transition-colors">
                  Limpieza de Piscinas
                </a>
              </li>
              <li>
                <a href="/#servicios" className="hover:text-secondary transition-colors">
                  Balance Químico
                </a>
              </li>
              <li>
                <a href="/#servicios" className="hover:text-secondary transition-colors">
                  Reparaciones
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Legal</h4>
            <ul className="space-y-2 md:space-y-3 text-white/70 text-xs md:text-sm">
              <li>
                <a href="/aviso-legal" className="hover:text-secondary transition-colors">
                  Aviso Legal
                </a>
              </li>
              <li>
                <a href="/privacidad" className="hover:text-secondary transition-colors">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="/cookies" className="hover:text-secondary transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
          <p className="text-white/50 text-xs md:text-sm">
            © {new Date().getFullYear()} AtlanPool. Todos los derechos reservados.
          </p>
          <p className="text-white/50 text-xs md:text-sm">
            Hecho por <a href="https://eficentiasolutions.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">Eficentia Solutions</a> para AtlanPool.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
