"use client";

import type { OccasionFuel } from "@/types/occasionVehicle";
import { formatChf, formatKm } from "@/lib/utils";

export interface DealerVehicleFiltersState {
  brand: string;
  fuel: OccasionFuel | "tous";
  maxPrice: number;
  maxMileage: number;
}

interface DealerVehicleFiltersProps {
  brands: string[];
  fuels: OccasionFuel[];
  maxPriceLimit: number;
  maxMileageLimit: number;
  filters: DealerVehicleFiltersState;
  onChange: (filters: DealerVehicleFiltersState) => void;
}

export function DealerVehicleFilters({
  brands,
  fuels,
  maxPriceLimit,
  maxMileageLimit,
  filters,
  onChange,
}: DealerVehicleFiltersProps) {
  return (
    <div className="rounded-xl border border-brand-line bg-brand-charcoal p-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label htmlFor="filter-brand" className="text-xs font-semibold uppercase tracking-wide text-brand-silver">
            Marque
          </label>
          <select
            id="filter-brand"
            value={filters.brand}
            onChange={(event) => onChange({ ...filters, brand: event.target.value })}
            className="mt-2 w-full rounded-md border border-brand-line bg-brand-black px-3 py-2.5 text-sm text-brand-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent"
          >
            <option value="toutes">Toutes les marques</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="filter-fuel" className="text-xs font-semibold uppercase tracking-wide text-brand-silver">
            Carburant
          </label>
          <select
            id="filter-fuel"
            value={filters.fuel}
            onChange={(event) => onChange({ ...filters, fuel: event.target.value as DealerVehicleFiltersState["fuel"] })}
            className="mt-2 w-full rounded-md border border-brand-line bg-brand-black px-3 py-2.5 text-sm text-brand-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent"
          >
            <option value="tous">Tous carburants</option>
            {fuels.map((fuel) => (
              <option key={fuel} value={fuel}>
                {fuel}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="filter-price" className="text-xs font-semibold uppercase tracking-wide text-brand-silver">
            Prix maximum : {formatChf(filters.maxPrice)}
          </label>
          <input
            id="filter-price"
            type="range"
            min={0}
            max={maxPriceLimit}
            step={500}
            value={filters.maxPrice}
            onChange={(event) => onChange({ ...filters, maxPrice: Number(event.target.value) })}
            className="mt-4 w-full accent-[var(--color-brand-accent)]"
          />
        </div>

        <div>
          <label htmlFor="filter-mileage" className="text-xs font-semibold uppercase tracking-wide text-brand-silver">
            Kilométrage max. : {formatKm(filters.maxMileage)}
          </label>
          <input
            id="filter-mileage"
            type="range"
            min={0}
            max={maxMileageLimit}
            step={5000}
            value={filters.maxMileage}
            onChange={(event) => onChange({ ...filters, maxMileage: Number(event.target.value) })}
            className="mt-4 w-full accent-[var(--color-brand-accent)]"
          />
        </div>
      </div>
    </div>
  );
}
