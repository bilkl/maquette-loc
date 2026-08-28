import type { OccasionVehicle } from "@/types/occasionVehicle";
import { DealerVehicleCard } from "@/components/dealer/DealerVehicleCard";

interface DealerVehicleGridProps {
  vehicles: OccasionVehicle[];
}

export function DealerVehicleGrid({ vehicles }: DealerVehicleGridProps) {
  if (vehicles.length === 0) {
    return (
      <div className="rounded-xl border border-brand-line bg-brand-charcoal p-12 text-center">
        <p className="text-brand-silver">
          Aucun véhicule ne correspond à ces critères pour le moment. Modifiez vos filtres ou
          contactez-nous directement.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {vehicles.map((vehicle, index) => (
        <DealerVehicleCard key={vehicle.slug} vehicle={vehicle} priority={index === 0} />
      ))}
    </div>
  );
}
