import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { GaragePrestationsPage } from "@/components/garage/GaragePrestationsPage";

export const metadata: Metadata = {
  title: "Nos prestations",
  description: `Découvrez les prestations de ${siteConfig.name} : révision, pneus, freins, diagnostic électronique, préparation à l'expertise et climatisation.`,
  alternates: { canonical: "/prestations" },
};

export default function PrestationsPage() {
  // Route propre au gabarit "garage" : sans objet pour les autres agences.
  if (siteConfig.template !== "garage") {
    notFound();
  }

  return <GaragePrestationsPage />;
}
