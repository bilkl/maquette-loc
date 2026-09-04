import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getPropertyBySlug, properties } from "@/data/properties";
import { ImmobilierPropertyDetail } from "@/components/immobilier/ImmobilierPropertyDetail";
import { formatChf } from "@/lib/utils";

const isImmobilier = siteConfig.template === "immobilier";

interface PropertyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  if (!isImmobilier) return [];
  return properties.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  if (!isImmobilier) return {};

  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return { title: "Bien introuvable" };

  const title = property.title;
  const description = `${property.title} — ${property.type} à ${property.location}, ${formatChf(property.price)}, ${property.surface} m², chez ${siteConfig.name}.`;

  return {
    title,
    description,
    alternates: { canonical: `/biens/${property.slug}` },
    openGraph: {
      title,
      description,
      images: [{ url: property.coverImage }],
    },
  };
}

/** Route propre au gabarit "immobilier" : fiche détaillée d'un bien. */
export default async function PropertyPage({ params }: PropertyPageProps) {
  if (!isImmobilier) {
    notFound();
  }

  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) {
    notFound();
  }

  return <ImmobilierPropertyDetail property={property} />;
}
