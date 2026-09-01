import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getGarageContent } from "@/data/garage";
import { getElectricienContent } from "@/data/electricien";
import { getPlombierContent } from "@/data/plombier";
import { getMenuiserieContent } from "@/data/menuiserie";
import { GaragePrestationsPage } from "@/components/garage/GaragePrestationsPage";
import { ElectricienPrestationsPage } from "@/components/electricien/ElectricienPrestationsPage";
import { PlombierPrestationsPage } from "@/components/plombier/PlombierPrestationsPage";
import { MenuiseriePrestationsPage } from "@/components/menuiserie/MenuiseriePrestationsPage";

const isGarage = siteConfig.template === "garage";
const isElectricien = siteConfig.template === "electricien";
const isPlombier = siteConfig.template === "plombier";
const isMenuiserie = siteConfig.template === "menuiserie";

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
    : isPlombier
      ? {
          title: "Nos prestations",
          description: `Découvrez les prestations de ${siteConfig.name} : ${getPlombierContent()
            .services.items.map((service) => service.name.toLowerCase())
            .join(", ")}.`,
          alternates: { canonical: "/prestations" },
        }
      : isMenuiserie
        ? {
            title: "Nos savoir-faire",
            description: `Découvrez les savoir-faire de ${siteConfig.name} : ${getMenuiserieContent()
              .services.items.map((family) => family.name.toLowerCase())
              .join(", ")}.`,
            alternates: { canonical: "/prestations" },
          }
        : {};

export default function PrestationsPage() {
  // Route propre aux gabarits "garage", "electricien", "plombier" et "menuiserie" : sans objet pour les autres agences.
  if (isGarage) {
    return <GaragePrestationsPage />;
  }
  if (isElectricien) {
    return <ElectricienPrestationsPage />;
  }
  if (isPlombier) {
    return <PlombierPrestationsPage />;
  }
  if (isMenuiserie) {
    return <MenuiseriePrestationsPage />;
  }

  notFound();
}
