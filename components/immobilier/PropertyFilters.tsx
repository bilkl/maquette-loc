"use client";

import type { PropertyType } from "@/types/property";
import { formatChf } from "@/lib/utils";

export interface PropertyFiltersState {
  type: PropertyType | "tous";
  location: string;
  maxPrice: number;
  maxSurface: number;
}

interface PropertyFiltersProps {
  types: PropertyType[];
  locations: string[];
  maxPriceLimit: number;
  maxSurfaceLimit: number;
  filters: PropertyFiltersState;
  onChange: (filters: PropertyFiltersState) => void;
}

export function PropertyFilters({
  types,
  locations,
  maxPriceLimit,
  maxSurfaceLimit,
  filters,
  onChange,
}: PropertyFiltersProps) {
  return (
    <div className="rounded-xl border border-brand-line bg-brand-charcoal p-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label htmlFor="filter-type" className="text-xs font-semibold uppercase tracking-wide text-brand-silver">
            Type de bien
          </label>
          <select
            id="filter-type"
            value={filters.type}
            onChange={(event) => onChange({ ...filters, type: event.target.value as PropertyFiltersState["type"] })}
            className="mt-2 w-full rounded-md border border-brand-line bg-brand-black px-3 py-2.5 text-sm text-brand-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent"
          >
            <option value="tous">Tous les types</option>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="filter-location"
            className="text-xs font-semibold uppercase tracking-wide text-brand-silver"
          >
            Localisation
          </label>
          <select
            id="filter-location"
            value={filters.location}
            onChange={(event) => onChange({ ...filters, location: event.target.value })}
            className="mt-2 w-full rounded-md border border-brand-line bg-brand-black px-3 py-2.5 text-sm text-brand-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent"
          >
            <option value="toutes">Toutes les localisations</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
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
            step={50000}
            value={filters.maxPrice}
            onChange={(event) => onChange({ ...filters, maxPrice: Number(event.target.value) })}
            className="mt-4 w-full accent-[var(--color-brand-accent)]"
          />
        </div>

        <div>
          <label
            htmlFor="filter-surface"
            className="text-xs font-semibold uppercase tracking-wide text-brand-silver"
          >
            Surface max. : {filters.maxSurface} m²
          </label>
          <input
            id="filter-surface"
            type="range"
            min={0}
            max={maxSurfaceLimit}
            step={10}
            value={filters.maxSurface}
            onChange={(event) => onChange({ ...filters, maxSurface: Number(event.target.value) })}
            className="mt-4 w-full accent-[var(--color-brand-accent)]"
          />
        </div>
      </div>
    </div>
  );
}
