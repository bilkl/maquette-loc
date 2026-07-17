import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { vehicles } from "@/data/vehicles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/vehicules",
    "/longue-duree",
    "/a-propos",
    "/contact",
    "/mentions-legales",
    "/confidentialite",
    "/conditions-generales",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const vehicleRoutes = vehicles.map((vehicle) => ({
    url: `${siteConfig.url}/vehicules/${vehicle.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...vehicleRoutes];
}
