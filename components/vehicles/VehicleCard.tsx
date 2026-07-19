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
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-brand-line/60 bg-brand-charcoal/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/60 hover:shadow-2xl hover:shadow-black/50">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={vehicle.coverImage}
          alt={`${vehicle.brand} ${vehicle.model}`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-brand-black/70 px-3 py-1 text-xs font-medium uppercase tracking-wide text-brand-ivory backdrop-blur">
          {vehicle.category}
        </span>
        {!vehicle.available ? (
          <span className="absolute right-3 top-3 rounded-full bg-brand-black/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-brand-silver">
            Indisponible
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6">
        <div>
          <h3 className="font-display text-xl font-semibold text-brand-ivory">
            {vehicle.brand} {vehicle.model}
          </h3>
          <p className="mt-2 text-base text-brand-silver">
            À partir de{" "}
            <span className="text-lg font-semibold text-brand-red">
              {formatChf(vehicle.pricePerDay)}
            </span>{" "}
            / jour
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-brand-silver">
          <li className="flex items-center gap-1.5">
            <Users className="h-4 w-4 text-brand-red" aria-hidden="true" />
            {vehicle.seats} places
          </li>
          <li className="flex items-center gap-1.5">
            <Gauge className="h-4 w-4 text-brand-red" aria-hidden="true" />
            {vehicle.transmission}
          </li>
          <li className="flex items-center gap-1.5">
            <Fuel className="h-4 w-4 text-brand-red" aria-hidden="true" />
            {vehicle.fuel}
          </li>
        </ul>

        <div className="mt-auto flex flex-col gap-3 pt-2">
          <LinkButton
            href={`/vehicules/${vehicle.slug}#reservation`}
            variant="primary"
            className="w-full"
          >
            Réserver
          </LinkButton>
          <LinkButton href={`/vehicules/${vehicle.slug}`} variant="secondary" className="w-full">
            Voir le véhicule
          </LinkButton>
        </div>
      </div>
    </article>
  );
}
