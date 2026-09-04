import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { vehicles } from "@/data/vehicles";
import { vehicles as occasionVehicles } from "@/data/occasion-vehicles";
import { properties } from "@/data/properties";

export default function sitemap(): MetadataRoute.Sitemap {
  const isGarage = siteConfig.template === "garage";
  const isDealer = siteConfig.template === "dealer";
  const isElectricien = siteConfig.template === "electricien";
  const isPlombier = siteConfig.template === "plombier";
  const isMenuiserie = siteConfig.template === "menuiserie";
  const isImmobilier = siteConfig.template === "immobilier";
  const isArtisan = isGarage || isElectricien || isPlombier || isMenuiserie;

  const commonRoutes = ["", "/a-propos", "/contact", "/mentions-legales", "/confidentialite", "/conditions-generales"];
  const templateRoutes = isMenuiserie
    ? ["/prestations", "/realisations"]
    : isImmobilier
      ? ["/biens"]
      : isArtisan
        ? ["/prestations"]
        : isDealer
          ? ["/vehicules"]
          : ["/vehicules", "/longue-duree"];

  const staticRoutes = [...commonRoutes, ...templateRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  if (isArtisan) {
    return staticRoutes;
  }

  if (isImmobilier) {
    const propertyRoutes = properties.map((property) => ({
      url: `${siteConfig.url}/biens/${property.slug}`,
      lastModified: new Date(),
    }));
    return [...staticRoutes, ...propertyRoutes];
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
