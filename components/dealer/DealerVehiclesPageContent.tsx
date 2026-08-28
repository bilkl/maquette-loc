"use client";

import { useMemo, useState } from "react";
import { vehicles, occasionBrands, occasionFuels } from "@/data/occasion-vehicles";
import { DealerVehicleFilters, DealerVehicleFiltersState } from "@/components/dealer/DealerVehicleFilters";
import { DealerVehicleGrid } from "@/components/dealer/DealerVehicleGrid";

const maxPriceLimit = vehicles.length > 0 ? Math.max(...vehicles.map((v) => v.price)) : 0;
const maxMileageLimit = vehicles.length > 0 ? Math.max(...vehicles.map((v) => v.mileage)) : 0;

const defaultFilters: DealerVehicleFiltersState = {
  brand: "toutes",
  fuel: "tous",
  maxPrice: maxPriceLimit,
  maxMileage: maxMileageLimit,
};

export function DealerVehiclesPageContent() {
  const [filters, setFilters] = useState<DealerVehicleFiltersState>(defaultFilters);

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => {
      if (filters.brand !== "toutes" && vehicle.brand !== filters.brand) return false;
      if (filters.fuel !== "tous" && vehicle.fuel !== filters.fuel) return false;
      if (vehicle.price > filters.maxPrice) return false;
      if (vehicle.mileage > filters.maxMileage) return false;
      return true;
    });
  }, [filters]);

  return (
    <div className="space-y-6">
      <DealerVehicleFilters
        brands={occasionBrands}
        fuels={occasionFuels}
        maxPriceLimit={maxPriceLimit}
        maxMileageLimit={maxMileageLimit}
        filters={filters}
        onChange={setFilters}
      />
      <p className="text-sm text-brand-silver">
        {filteredVehicles.length} véhicule{filteredVehicles.length > 1 ? "s" : ""} correspondant
        {filteredVehicles.length > 1 ? "s" : ""} à votre recherche
      </p>
      <DealerVehicleGrid vehicles={filteredVehicles} />
    </div>
  );
}
