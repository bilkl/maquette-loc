import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { vehicles } from "@/data/vehicles";

export default function sitemap(): MetadataRoute.Sitemap {
  const isGarage = siteConfig.template === "garage";

  const commonRoutes = ["", "/a-propos", "/contact", "/mentions-legales", "/confidentialite", "/conditions-generales"];
  const templateRoutes = isGarage ? ["/prestations"] : ["/vehicules", "/longue-duree"];

  const staticRoutes = [...commonRoutes, ...templateRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  if (isGarage) {
    return staticRoutes;
  }

  const vehicleRoutes = vehicles.map((vehicle) => ({
    url: `${siteConfig.url}/vehicules/${vehicle.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...vehicleRoutes];
}
