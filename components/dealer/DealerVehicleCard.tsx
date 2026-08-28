import Image from "next/image";
import { Fuel, Gauge } from "lucide-react";
import type { OccasionVehicle } from "@/types/occasionVehicle";
import { formatChf, formatKm } from "@/lib/utils";
import { DealerLinkButton } from "@/components/dealer/DealerButton";

interface DealerVehicleCardProps {
  vehicle: OccasionVehicle;
  priority?: boolean;
}

export function DealerVehicleCard({ vehicle, priority = false }: DealerVehicleCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-brand-line bg-brand-black shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/50 hover:shadow-xl hover:shadow-black/[0.06]">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-charcoal">
        <Image
          src={vehicle.coverImage}
          alt={`${vehicle.brand} ${vehicle.model}`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        <span className="absolute left-3 top-3 rounded-full bg-brand-black/85 px-3 py-1 text-xs font-semibold text-brand-ivory backdrop-blur">
          {vehicle.year}
        </span>
        {!vehicle.available ? (
          <span className="absolute right-3 top-3 rounded-full bg-brand-black/85 px-3 py-1 text-xs font-semibold text-brand-silver backdrop-blur">
            Vendu
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <h3 className="text-lg font-bold text-brand-ivory">
            {vehicle.brand} {vehicle.model}
          </h3>
          <p className="mt-1.5 text-xl font-extrabold tabular-nums text-brand-accent">
            {formatChf(vehicle.price)}
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-brand-silver">
          <li className="flex items-center gap-1.5">
            <Gauge className="h-4 w-4 text-brand-accent" aria-hidden="true" />
            {formatKm(vehicle.mileage)}
          </li>
          <li className="flex items-center gap-1.5">
            <Fuel className="h-4 w-4 text-brand-accent" aria-hidden="true" />
            {vehicle.fuel}
          </li>
        </ul>

        <DealerLinkButton href={`/vehicules/${vehicle.slug}`} variant="secondary" className="mt-auto w-full">
          Voir le véhicule
        </DealerLinkButton>
      </div>
    </article>
  );
}
