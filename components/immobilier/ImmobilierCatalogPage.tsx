import { getImmobilierContent } from "@/data/immobilier";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PropertiesPageContent } from "@/components/immobilier/PropertiesPageContent";

/** Page /biens du gabarit "immobilier" : catalogue complet avec filtres. */
export function ImmobilierCatalogPage() {
  const content = getImmobilierContent();

  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow={content.catalog.eyebrow}
        title={content.catalog.title}
        description={content.catalog.intro}
        align="left"
      />

      <div className="mt-12">
        <PropertiesPageContent />
      </div>
    </div>
  );
}
