import { getActiveBrand } from "@/config/brands";
import { Vehicle } from "@/types/vehicle";
import { vehicles as bullrent } from "./bullrent";
import { vehicles as eagledrive } from "./eagledrive";
import { vehicles as elegancyrent } from "./elegancyrent";
import { vehicles as luxurcars } from "./luxurcars";
import { vehicles as luxurydrive } from "./luxurydrive";
import { vehicles as nlprestige } from "./nlprestige";
import { vehicles as slgrent } from "./slgrent";
import { vehicles as swisselite } from "./swisselite";
import { vehicles as swisslocrent } from "./swisslocrent";

const vehiclesByBrand: Record<string, Vehicle[]> = {
  nlprestige,
  swisslocrent,
  swisselite,
  bullrent,
  eagledrive,
  elegancyrent,
  slgrent,
  luxurydrive,
  luxurcars,
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
