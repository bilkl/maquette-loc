import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { vehicles } from "@/data/vehicles";
import { vehicles as occasionVehicles } from "@/data/occasion-vehicles";

export default function sitemap(): MetadataRoute.Sitemap {
  const isGarage = siteConfig.template === "garage";
  const isDealer = siteConfig.template === "dealer";

  const commonRoutes = ["", "/a-propos", "/contact", "/mentions-legales", "/confidentialite", "/conditions-generales"];
  const templateRoutes = isGarage ? ["/prestations"] : isDealer ? ["/vehicules"] : ["/vehicules", "/longue-duree"];

  const staticRoutes = [...commonRoutes, ...templateRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  if (isGarage) {
    return staticRoutes;
  }

  if (isDealer) {
    const occasionRoutes = occasionVehicles.map((vehicle) => ({
      url: `${siteConfig.url}/vehicules/${vehicle.slug}`,
      lastModified: new Date(),
    }));
    return [...staticRoutes, ...occasionRoutes];
  }

  const vehicleRoutes = vehicles.map((vehicle) => ({
    url: `${siteConfig.url}/vehicules/${vehicle.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...vehicleRoutes];
}
