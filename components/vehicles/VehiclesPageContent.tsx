"use client";

import { useMemo, useState } from "react";
import { vehicles, vehicleBrands, vehicleCategories } from "@/data/vehicles";
import { VehicleFilters, VehicleFiltersState } from "@/components/vehicles/VehicleFilters";
import { VehicleGrid } from "@/components/vehicles/VehicleGrid";

const maxPriceLimit = Math.max(...vehicles.map((v) => v.pricePerDay));

const defaultFilters: VehicleFiltersState = {
  brand: "toutes",
  category: "toutes",
  maxPrice: maxPriceLimit,
  availableOnly: false,
  duration: "toutes",
};

export function VehiclesPageContent() {
  const [filters, setFilters] = useState<VehicleFiltersState>(defaultFilters);

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => {
      if (filters.brand !== "toutes" && vehicle.brand !== filters.brand) return false;
      if (filters.category !== "toutes" && vehicle.category !== filters.category) return false;
      if (vehicle.pricePerDay > filters.maxPrice) return false;
      if (filters.availableOnly && !vehicle.available) return false;
      if (filters.duration !== "toutes" && !vehicle.durations.includes(filters.duration)) {
        return false;
      }
      return true;
    });
  }, [filters]);

  return (
    <div className="space-y-8">
      <VehicleFilters
        brands={vehicleBrands}
        categories={vehicleCategories}
        maxPriceLimit={maxPriceLimit}
        filters={filters}
        onChange={setFilters}
      />
      <p className="text-sm text-brand-silver">
        {filteredVehicles.length} véhicule{filteredVehicles.length > 1 ? "s" : ""} correspondant
        {filteredVehicles.length > 1 ? "s" : ""} à votre recherche
      </p>
      <VehicleGrid vehicles={filteredVehicles} />
    </div>
  );
}
