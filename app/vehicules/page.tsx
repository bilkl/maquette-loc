import type { Metadata } from "next";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { VehiclesPageContent } from "@/components/vehicles/VehiclesPageContent";
import { ShowroomCollectionPage } from "@/components/showroom/ShowroomCollectionPage";
import { siteConfig } from "@/config/site";

const isShowroom = siteConfig.template === "showroom";

export const metadata: Metadata = {
  title: isShowroom ? "La collection" : "Nos véhicules",
  description: isShowroom
    ? `Découvrez la collection ${siteConfig.name} : chaque modèle présenté avec son caractère, son usage et ses conditions de location.`
    : `Parcourez la sélection de véhicules de prestige ${siteConfig.name} disponibles en location courte et longue durée en Suisse.`,
  alternates: { canonical: "/vehicules" },
};

export default function VehiculesPage() {
  if (isShowroom) {
    return <ShowroomCollectionPage />;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Notre flotte"
        title="Nos véhicules"
        description="Une sélection de véhicules de démonstration présentée à titre d'exemple. Filtrez par marque, catégorie, prix, disponibilité ou type de location."
        align="left"
      />

      <div className="mt-14">
        <VehiclesPageContent />
      </div>
    </div>
  );
}
