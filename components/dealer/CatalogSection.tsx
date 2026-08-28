import type { DealerContent } from "@/data/dealer";
import { getFeaturedOccasionVehicles } from "@/data/occasion-vehicles";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { DealerVehicleCard } from "@/components/dealer/DealerVehicleCard";
import { DealerLinkButton } from "@/components/dealer/DealerButton";

interface CatalogSectionProps {
  content: DealerContent["catalog"];
}

/** Aperçu du catalogue sur la page d'accueil, avec lien vers /vehicules pour la liste complète et les filtres. */
export function CatalogSection({ content }: CatalogSectionProps) {
  const featured = getFeaturedOccasionVehicles(6);

  return (
    <section className="border-b border-brand-line bg-brand-black py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle eyebrow={content.eyebrow} title={content.title} description={content.intro} align="left" />
          <DealerLinkButton href="/vehicules" variant="secondary" className="shrink-0">
            Voir tout le catalogue
          </DealerLinkButton>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((vehicle, index) => (
            <DealerVehicleCard key={vehicle.slug} vehicle={vehicle} priority={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
