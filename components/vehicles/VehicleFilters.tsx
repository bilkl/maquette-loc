"use client";

import { RentalDuration } from "@/types/vehicle";
import { cn } from "@/lib/utils";

export interface VehicleFiltersState {
  brand: string;
  category: string;
  maxPrice: number;
  availableOnly: boolean;
  duration: RentalDuration | "toutes";
}

interface VehicleFiltersProps {
  brands: string[];
  categories: string[];
  maxPriceLimit: number;
  filters: VehicleFiltersState;
  onChange: (filters: VehicleFiltersState) => void;
}

const durationOptions: { value: VehicleFiltersState["duration"]; label: string }[] = [
  { value: "toutes", label: "Toutes durées" },
  { value: "courte", label: "Courte durée" },
  { value: "longue", label: "Longue durée" },
  { value: "courte-et-longue", label: "Courte et longue durée" },
];

export function VehicleFilters({
  brands,
  categories,
  maxPriceLimit,
  filters,
  onChange,
}: VehicleFiltersProps) {
  return (
    <div className="rounded-2xl border border-brand-line/60 bg-brand-charcoal/50 p-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label htmlFor="filter-brand" className="text-xs font-medium uppercase tracking-wide text-brand-silver">
            Marque
          </label>
          <select
            id="filter-brand"
            value={filters.brand}
            onChange={(event) => onChange({ ...filters, brand: event.target.value })}
            className="mt-2 w-full rounded-lg border border-brand-line bg-brand-black px-3 py-2 text-sm text-brand-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent"
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
          <label
            htmlFor="filter-category"
            className="text-xs font-medium uppercase tracking-wide text-brand-silver"
          >
            Catégorie
          </label>
          <select
            id="filter-category"
            value={filters.category}
            onChange={(event) => onChange({ ...filters, category: event.target.value })}
            className="mt-2 w-full rounded-lg border border-brand-line bg-brand-black px-3 py-2 text-sm text-brand-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent"
          >
            <option value="toutes">Toutes les catégories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="filter-duration"
            className="text-xs font-medium uppercase tracking-wide text-brand-silver"
          >
            Type de location
          </label>
          <select
            id="filter-duration"
            value={filters.duration}
            onChange={(event) =>
              onChange({ ...filters, duration: event.target.value as VehicleFiltersState["duration"] })
            }
            className="mt-2 w-full rounded-lg border border-brand-line bg-brand-black px-3 py-2 text-sm text-brand-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent"
          >
            {durationOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="filter-price"
            className="text-xs font-medium uppercase tracking-wide text-brand-silver"
          >
            Prix maximum : {filters.maxPrice} CHF / jour
          </label>
          <input
            id="filter-price"
            type="range"
            min={0}
            max={maxPriceLimit}
            step={10}
            value={filters.maxPrice}
            onChange={(event) => onChange({ ...filters, maxPrice: Number(event.target.value) })}
            className="mt-3 w-full accent-[var(--color-brand-accent)]"
          />
        </div>
      </div>

      <label className="mt-6 inline-flex cursor-pointer items-center gap-2 text-sm text-brand-silver">
        <input
          type="checkbox"
          checked={filters.availableOnly}
          onChange={(event) => onChange({ ...filters, availableOnly: event.target.checked })}
          className={cn(
            "h-4 w-4 rounded border-brand-line bg-brand-black text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent",
          )}
        />
        Afficher uniquement les véhicules disponibles
      </label>
    </div>
  );
}
