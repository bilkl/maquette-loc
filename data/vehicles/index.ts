import { getActiveBrand } from "@/config/brands";
import { Vehicle } from "@/types/vehicle";
import { vehicles as nlprestige } from "./nlprestige";
import { vehicles as swisslocrent } from "./swisslocrent";

const vehiclesByBrand: Record<string, Vehicle[]> = {
  nlprestige,
  swisslocrent,
};

export const vehicles: Vehicle[] = vehiclesByBrand[getActiveBrand().id] ?? nlprestige;

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return vehicles.find((vehicle) => vehicle.slug === slug);
}

export function getFeaturedVehicles(count = 6): Vehicle[] {
  return vehicles.slice(0, count);
}

export const vehicleBrands = Array.from(new Set(vehicles.map((v) => v.brand))).sort();
export const vehicleCategories = Array.from(new Set(vehicles.map((v) => v.category))).sort();
