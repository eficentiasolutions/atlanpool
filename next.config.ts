import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Redirects: non-www → www (canonical) + old URLs → new service URLs
  async redirects() {
    return [
      // Canonical: forzar siempre https://www.atlanpool.es
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'atlanpool.es' }],
        destination: 'https://www.atlanpool.es/:path*',
        permanent: true,
      },
      // Norte → Sur (zone update)
      {
        source: '/servicios/mantenimiento-piscinas-norte-tenerife',
        destination: '/servicios/mantenimiento-piscinas-sur-tenerife',
        permanent: true,
      },
      // Puerto de la Cruz (página con identidad rota) → Sur de Tenerife
      {
        source: '/servicios/mantenimiento-piscinas-puerto-de-la-cruz',
        destination: '/servicios/mantenimiento-piscinas-sur-tenerife',
        permanent: true,
      },
      // Old service URLs → estructura actual bajo /servicios/
      {
        source: '/mantenimiento-piscinas-tenerife',
        destination: '/servicios/mantenimiento-piscinas-tenerife',
        permanent: true,
      },
      {
        source: '/limpieza-piscinas-tenerife',
        destination: '/servicios/limpieza-piscinas-tenerife',
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
    ];
  },

  // Image optimization for better performance
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'maps.googleapis.com' },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2592000,
  },

  trailingSlash: false,

  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: true,

  // Experimental features for performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
