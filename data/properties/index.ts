import { getActiveBrand } from "@/config/brands";
import { Property } from "@/types/property";
import { properties as bmimmobilier } from "./bmimmobilier";

const propertiesByBrand: Record<string, Property[]> = {
  bmimmobilier,
};

export const properties: Property[] = propertiesByBrand[getActiveBrand().id] ?? [];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((property) => property.slug === slug);
}

export function getFeaturedProperties(count = 6): Property[] {
  return properties.slice(0, count);
}

export const propertyTypes = Array.from(new Set(properties.map((p) => p.type))).sort();
export const propertyLocations = Array.from(new Set(properties.map((p) => p.location))).sort();
