import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getMenuiserieContent } from "@/data/menuiserie";
import { MenuiserieGalleryPage } from "@/components/menuiserie/MenuiserieGalleryPage";

const isMenuiserie = siteConfig.template === "menuiserie";

export const metadata: Metadata = isMenuiserie
  ? {
      title: "Réalisations",
      description: `Découvrez les réalisations de ${siteConfig.name} en grand format : ${getMenuiserieContent()
        .gallery.items.map((item) => item.title.toLowerCase())
        .join(", ")}.`,
      alternates: { canonical: "/realisations" },
    }
  : {};

/** Route propre au gabarit "menuiserie" : galerie de réalisations en grand format. */
export default function RealisationsPage() {
  if (!isMenuiserie) {
    notFound();
  }

  return <MenuiserieGalleryPage />;
}
