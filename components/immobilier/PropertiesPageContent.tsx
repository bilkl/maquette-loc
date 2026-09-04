"use client";

import { useMemo, useState } from "react";
import { properties, propertyTypes, propertyLocations } from "@/data/properties";
import { PropertyFilters, PropertyFiltersState } from "@/components/immobilier/PropertyFilters";
import { PropertyGrid } from "@/components/immobilier/PropertyGrid";

const maxPriceLimit = properties.length > 0 ? Math.max(...properties.map((p) => p.price)) : 0;
const maxSurfaceLimit = properties.length > 0 ? Math.max(...properties.map((p) => p.surface)) : 0;

const defaultFilters: PropertyFiltersState = {
  type: "tous",
  location: "toutes",
  maxPrice: maxPriceLimit,
  maxSurface: maxSurfaceLimit,
};

export function PropertiesPageContent() {
  const [filters, setFilters] = useState<PropertyFiltersState>(defaultFilters);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      if (filters.type !== "tous" && property.type !== filters.type) return false;
      if (filters.location !== "toutes" && property.location !== filters.location) return false;
      if (property.price > filters.maxPrice) return false;
      if (property.surface > filters.maxSurface) return false;
      return true;
    });
  }, [filters]);

  return (
    <div className="space-y-6">
      <PropertyFilters
        types={propertyTypes}
        locations={propertyLocations}
        maxPriceLimit={maxPriceLimit}
        maxSurfaceLimit={maxSurfaceLimit}
        filters={filters}
        onChange={setFilters}
      />
      <p className="text-sm text-brand-silver">
        {filteredProperties.length} bien{filteredProperties.length > 1 ? "s" : ""} correspondant
        {filteredProperties.length > 1 ? "s" : ""} à votre recherche
      </p>
      <PropertyGrid properties={filteredProperties} />
    </div>
  );
}
