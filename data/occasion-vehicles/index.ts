import { getActiveBrand } from "@/config/brands";
import { OccasionVehicle } from "@/types/occasionVehicle";
import { vehicles as topcarsoccasions } from "./topcarsoccasions";

const vehiclesByBrand: Record<string, OccasionVehicle[]> = {
  topcarsoccasions,
};

export const vehicles: OccasionVehicle[] = vehiclesByBrand[getActiveBrand().id] ?? [];

export function getOccasionVehicleBySlug(slug: string): OccasionVehicle | undefined {
  return vehicles.find((vehicle) => vehicle.slug === slug);
}

export function getFeaturedOccasionVehicles(count = 6): OccasionVehicle[] {
  return vehicles.slice(0, count);
}

export const occasionBrands = Array.from(new Set(vehicles.map((v) => v.brand))).sort();
export const occasionCategories = Array.from(new Set(vehicles.map((v) => v.category))).sort();
export const occasionFuels = Array.from(new Set(vehicles.map((v) => v.fuel))).sort();
