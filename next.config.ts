import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Les visuels de démonstration sont des SVG générés localement.
    // À retirer si toutes les images sont remplacées par des JPG/WebP.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
