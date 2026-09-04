import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { ImmobilierCatalogPage } from "@/components/immobilier/ImmobilierCatalogPage";

const isImmobilier = siteConfig.template === "immobilier";

export const metadata: Metadata = isImmobilier
  ? {
      title: "Nos biens",
      description: `Parcourez le catalogue de biens résidentiels ${siteConfig.name} : filtrez par type, prix, localisation ou surface.`,
      alternates: { canonical: "/biens" },
    }
  : {};

/** Route propre au gabarit "immobilier" : catalogue de biens avec filtres. */
export default function BiensPage() {
  if (!isImmobilier) {
    notFound();
  }

  return <ImmobilierCatalogPage />;
}
