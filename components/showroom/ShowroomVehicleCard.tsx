import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Vehicle } from "@/types/vehicle";
import { formatChf } from "@/lib/utils";

interface ShowroomVehicleCardProps {
  vehicle: Vehicle;
  priority?: boolean;
}

/**
 * Carte modèle du gabarit "showroom" : l'image et le récit priment, le tarif
 * reste présent mais discret — la page n'est pas un comparateur de prix.
 */
export function ShowroomVehicleCard({ vehicle, priority = false }: ShowroomVehicleCardProps) {
  return (
    <Link
      href={`/vehicules/${vehicle.slug}`}
      className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent"
    >
      <article>
        <div className="relative aspect-[16/10] w-full overflow-hidden border border-brand-line/70 bg-brand-charcoal">
          <Image
            src={vehicle.coverImage}
            alt={`${vehicle.brand} ${vehicle.model} — image de démonstration`}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 34vw, (min-width: 640px) 50vw, 92vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
          <span className="absolute left-0 top-0 bg-brand-black/80 px-3 py-1.5 text-xs uppercase tracking-[0.24em] text-brand-accent backdrop-blur">
            {vehicle.category}
          </span>
        </div>

        <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-brand-line/60 pt-4">
          <h3 className="font-display text-xl font-normal text-brand-ivory transition-colors duration-300 group-hover:text-brand-accent sm:text-2xl">
            {vehicle.brand} <span className="text-brand-silver">{vehicle.model}</span>
          </h3>
          {vehicle.power ? (
            <span className="shrink-0 text-xs uppercase tracking-[0.2em] text-brand-accent">
              {vehicle.power}
            </span>
          ) : null}
        </div>

        {vehicle.signature ? (
          <p className="font-display mt-3 text-base italic leading-relaxed text-brand-silver">
            « {vehicle.signature} »
          </p>
        ) : null}

        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-sm uppercase tracking-[0.16em] text-brand-silver/80">
          {vehicle.acceleration ? <li>{vehicle.acceleration}</li> : null}
          <li>{vehicle.seats} places</li>
          <li>{vehicle.fuel}</li>
        </ul>

        <p className="mt-5 flex items-center justify-between gap-4 text-sm text-brand-silver/80">
          <span>
            Dès {formatChf(vehicle.pricePerDay)} <span className="text-brand-silver/60">/ jour</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-brand-accent">
            Découvrir
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </p>
      </article>
    </Link>
  );
}
