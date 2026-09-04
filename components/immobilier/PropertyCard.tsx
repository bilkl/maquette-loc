import Image from "next/image";
import { BedDouble, Ruler } from "lucide-react";
import type { Property } from "@/types/property";
import { formatChf } from "@/lib/utils";
import { ImmobilierLinkButton } from "@/components/immobilier/ImmobilierButton";
import { propertyTypeIcons } from "@/components/immobilier/icons";

interface PropertyCardProps {
  property: Property;
  priority?: boolean;
}

export function PropertyCard({ property, priority = false }: PropertyCardProps) {
  const TypeIcon = propertyTypeIcons[property.type];

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-brand-line bg-brand-black shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/50 hover:shadow-xl hover:shadow-black/[0.06]">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-charcoal">
        <Image
          src={property.coverImage}
          alt={property.title}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-brand-black/85 px-3 py-1 text-xs font-semibold text-brand-ivory backdrop-blur">
          <TypeIcon className="h-3.5 w-3.5" aria-hidden="true" />
          {property.type}
        </span>
        {property.status !== "à vendre" ? (
          <span className="absolute right-3 top-3 rounded-full bg-brand-black/85 px-3 py-1 text-xs font-semibold capitalize text-brand-silver backdrop-blur">
            {property.status}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <h3 className="font-display text-lg font-semibold text-brand-ivory">{property.title}</h3>
          <p className="mt-1 text-sm text-brand-silver">{property.location}</p>
          <p className="mt-1.5 text-xl font-extrabold tabular-nums text-brand-accent">
            {formatChf(property.price)}
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-brand-silver">
          <li className="flex items-center gap-1.5">
            <Ruler className="h-4 w-4 text-brand-accent" aria-hidden="true" />
            {property.surface} m²
          </li>
          {property.bedrooms ? (
            <li className="flex items-center gap-1.5">
              <BedDouble className="h-4 w-4 text-brand-accent" aria-hidden="true" />
              {property.bedrooms} chambre{property.bedrooms > 1 ? "s" : ""}
            </li>
          ) : null}
        </ul>

        <ImmobilierLinkButton href={`/biens/${property.slug}`} variant="secondary" className="mt-auto w-full">
          Voir le bien
        </ImmobilierLinkButton>
      </div>
    </article>
  );
}
