import { getDealerContent } from "@/data/dealer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { DealerVehiclesPageContent } from "@/components/dealer/DealerVehiclesPageContent";

/** Page /vehicules du gabarit "dealer" : catalogue complet avec filtres. */
export function DealerCatalogPage() {
  const content = getDealerContent();

  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow={content.catalog.eyebrow}
        title={content.catalog.title}
        description={content.catalog.intro}
        align="left"
      />

      <div className="mt-12">
        <DealerVehiclesPageContent />
      </div>
    </div>
  );
}
