import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getGarageContent } from "@/data/garage";
import { GaragePrestationsPage } from "@/components/garage/GaragePrestationsPage";

export const metadata: Metadata =
  siteConfig.template === "garage"
    ? {
        title: "Nos prestations",
        description: `Découvrez les prestations de ${siteConfig.name} : ${getGarageContent()
          .services.items.map((service) => service.name.toLowerCase())
          .join(", ")}.`,
        alternates: { canonical: "/prestations" },
      }
    : {};

export default function PrestationsPage() {
  // Route propre au gabarit "garage" : sans objet pour les autres agences.
  if (siteConfig.template !== "garage") {
    notFound();
  }

  return <GaragePrestationsPage />;
}
