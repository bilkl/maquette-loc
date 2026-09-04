import type { Property } from "@/types/property";
import { PropertyCard } from "@/components/immobilier/PropertyCard";

interface PropertyGridProps {
  properties: Property[];
}

export function PropertyGrid({ properties }: PropertyGridProps) {
  if (properties.length === 0) {
    return (
      <div className="rounded-xl border border-brand-line bg-brand-charcoal p-12 text-center">
        <p className="text-brand-silver">
          Aucun bien ne correspond à ces critères pour le moment. Modifiez vos filtres ou
          contactez-nous directement.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {properties.map((property, index) => (
        <PropertyCard key={property.slug} property={property} priority={index === 0} />
      ))}
    </div>
  );
}
