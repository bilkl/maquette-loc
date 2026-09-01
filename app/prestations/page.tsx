import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getGarageContent } from "@/data/garage";
import { getElectricienContent } from "@/data/electricien";
import { GaragePrestationsPage } from "@/components/garage/GaragePrestationsPage";
import { ElectricienPrestationsPage } from "@/components/electricien/ElectricienPrestationsPage";

const isGarage = siteConfig.template === "garage";
const isElectricien = siteConfig.template === "electricien";

export const metadata: Metadata = isGarage
  ? {
      title: "Nos prestations",
      description: `Découvrez les prestations de ${siteConfig.name} : ${getGarageContent()
        .services.items.map((service) => service.name.toLowerCase())
        .join(", ")}.`,
      alternates: { canonical: "/prestations" },
    }
  : isElectricien
    ? {
        title: "Nos prestations",
        description: `Découvrez les prestations de ${siteConfig.name} : ${getElectricienContent()
          .services.items.map((service) => service.name.toLowerCase())
          .join(", ")}.`,
        alternates: { canonical: "/prestations" },
      }
    : {};

export default function PrestationsPage() {
  // Route propre aux gabarits "garage" et "electricien" : sans objet pour les autres agences.
  if (isGarage) {
    return <GaragePrestationsPage />;
  }
  if (isElectricien) {
    return <ElectricienPrestationsPage />;
  }

  notFound();
}
