import type { ImmobilierContent } from "@/data/immobilier";
import { getFeaturedProperties } from "@/data/properties";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PropertyCard } from "@/components/immobilier/PropertyCard";
import { ImmobilierLinkButton } from "@/components/immobilier/ImmobilierButton";
import { Reveal } from "@/components/showroom/Reveal";

interface CatalogSectionProps {
  content: ImmobilierContent["catalog"];
}

/** Aperçu du catalogue sur la page d'accueil, avec lien vers /biens pour la liste complète et les filtres. */
export function CatalogSection({ content }: CatalogSectionProps) {
  const featured = getFeaturedProperties(6);

  return (
    <section id="biens" className="scroll-mt-20 border-b border-brand-line bg-brand-black py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle eyebrow={content.eyebrow} title={content.title} description={content.intro} align="left" />
          <ImmobilierLinkButton href="/biens" variant="secondary" className="shrink-0">
            Voir tous les biens
          </ImmobilierLinkButton>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((property, index) => (
            <Reveal key={property.slug} delay={Math.min(index * 0.06, 0.3)}>
              <PropertyCard property={property} priority={index === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
