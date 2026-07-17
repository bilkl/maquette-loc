import { Vehicle } from "@/types/vehicle";
import { VehicleCard } from "@/components/vehicles/VehicleCard";

interface VehicleGridProps {
  vehicles: Vehicle[];
}

export function VehicleGrid({ vehicles }: VehicleGridProps) {
  if (vehicles.length === 0) {
    return (
      <div className="rounded-2xl border border-brand-line/60 bg-brand-charcoal/40 p-12 text-center">
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
        <VehicleCard key={vehicle.slug} vehicle={vehicle} priority={index === 0} />
      ))}
    </div>
  );
}
