import Image from "next/image";
import { Fuel, Gauge, Users } from "lucide-react";
import { Vehicle } from "@/types/vehicle";
import { formatChf } from "@/lib/utils";
import { LinkButton } from "@/components/ui/Button";

interface VehicleCardProps {
  vehicle: Vehicle;
  priority?: boolean;
}

export function VehicleCard({ vehicle, priority = false }: VehicleCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-brand-line/60 bg-brand-charcoal/60 backdrop-blur-sm transition-colors duration-300 hover:border-brand-red/60">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={vehicle.coverImage}
          alt={`${vehicle.brand} ${vehicle.model}`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-brand-black/70 px-3 py-1 text-xs font-medium tracking-wide text-brand-ivory backdrop-blur">
          {vehicle.category}
        </span>
        {!vehicle.available ? (
          <span className="absolute right-3 top-3 rounded-full bg-brand-black/80 px-3 py-1 text-xs font-medium tracking-wide text-brand-silver">
            Indisponible
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <h3 className="text-lg font-semibold text-brand-ivory">
            {vehicle.brand} {vehicle.model}
          </h3>
          <p className="mt-1 text-sm text-brand-silver">
            À partir de{" "}
            <span className="font-semibold text-brand-red">
              {formatChf(vehicle.pricePerDay)}
            </span>{" "}
            / jour
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-brand-silver">
          <li className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-brand-red" aria-hidden="true" />
            {vehicle.seats} places
          </li>
          <li className="flex items-center gap-1.5">
            <Gauge className="h-3.5 w-3.5 text-brand-red" aria-hidden="true" />
            {vehicle.transmission}
          </li>
          <li className="flex items-center gap-1.5">
            <Fuel className="h-3.5 w-3.5 text-brand-red" aria-hidden="true" />
            {vehicle.fuel}
          </li>
        </ul>

        <div className="mt-auto flex flex-col gap-2 pt-2 sm:flex-row">
          <LinkButton href={`/vehicules/${vehicle.slug}`} variant="secondary" className="flex-1">
            Voir le véhicule
          </LinkButton>
          <LinkButton
            href={`/vehicules/${vehicle.slug}#reservation`}
            variant="primary"
            className="flex-1"
          >
            Réserver
          </LinkButton>
        </div>
      </div>
    </article>
  );
}
