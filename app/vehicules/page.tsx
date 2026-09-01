import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { VehiclesPageContent } from "@/components/vehicles/VehiclesPageContent";
import { ShowroomCollectionPage } from "@/components/showroom/ShowroomCollectionPage";
import { DealerCatalogPage } from "@/components/dealer/DealerCatalogPage";
import { siteConfig } from "@/config/site";

const isShowroom = siteConfig.template === "showroom";
const isGarage = siteConfig.template === "garage";
const isDealer = siteConfig.template === "dealer";

export const metadata: Metadata = {
  title: isShowroom ? "La collection" : "Nos véhicules",
  description: isShowroom
    ? `Découvrez la collection ${siteConfig.name} : chaque modèle présenté avec son caractère, son usage et ses conditions de location.`
    : isDealer
      ? `Parcourez le catalogue de véhicules d'occasion ${siteConfig.name} : filtrez par marque, prix, kilométrage ou carburant.`
      : `Parcourez la sélection de véhicules de prestige ${siteConfig.name} disponibles en location courte et longue durée en Suisse.`,
  alternates: { canonical: "/vehicules" },
};

export default function VehiculesPage() {
  // Route sans objet pour les gabarits artisan (garage, electricien, plombier, menuiserie) : pas de flotte à louer ou vendre.
  if (
    isGarage ||
    siteConfig.template === "electricien" ||
    siteConfig.template === "plombier" ||
    siteConfig.template === "menuiserie"
  ) {
    notFound();
  }

  if (isShowroom) {
    return <ShowroomCollectionPage />;
  }

  if (isDealer) {
    return <DealerCatalogPage />;
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
