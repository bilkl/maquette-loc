"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { MenuiserieContent, MenuiserieFamily, MenuiserieGalleryItem } from "@/data/menuiserie";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MenuiserieLinkButton } from "@/components/menuiserie/MenuiserieButton";
import { BeforeAfterSlider } from "@/components/menuiserie/BeforeAfterSlider";
import { familyIcons } from "@/components/menuiserie/icons";

interface GallerySectionProps {
  content: MenuiserieContent["gallery"];
  families: MenuiserieFamily[];
  /** Nombre d'éléments affichés — la page d'accueil n'en montre qu'un aperçu, /realisations les montre tous */
  limit?: number;
  /** Masque le bouton "Voir toutes les réalisations", pertinent uniquement sur l'aperçu de la page d'accueil */
  showCta?: boolean;
}

/**
 * Galerie "Réalisations" en grand format : pas de grille de petites
 * vignettes, chaque réalisation occupe une large photo avec sa légende — le
 * rendu visuel du travail du bois prime sur la densité d'information.
 */
export function GallerySection({ content, families, limit, showCta = true }: GallerySectionProps) {
  const items = typeof limit === "number" ? content.items.slice(0, limit) : content.items;

  return (
    <section id="realisations" className="scroll-mt-20 border-b border-brand-line bg-brand-charcoal py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.intro}
          align="left"
        />

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {items.map((item, index) => (
            <GalleryCard key={item.slug} item={item} family={families.find((f) => f.slug === item.familySlug)} index={index} />
          ))}
        </div>

        {showCta ? (
          <div className="mt-10">
            <MenuiserieLinkButton href={content.cta.href} variant="secondary">
              {content.cta.label}
            </MenuiserieLinkButton>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function GalleryCard({
  item,
  family,
  index,
}: {
  item: MenuiserieGalleryItem;
  family: MenuiserieFamily | undefined;
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = family ? familyIcons[family.icon] : null;

  return (
    <motion.article
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.3) }}
    >
      {item.beforeImage ? (
        <BeforeAfterSlider before={item.beforeImage} after={item.image} alt={item.title} />
      ) : (
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-brand-line sm:aspect-[16/10]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}

      <div className="mt-4 flex items-start gap-3">
        {Icon ? (
          <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
            <Icon className="h-4 w-4" aria-hidden="true" />
          </span>
        ) : null}
        <div>
          <h3 className="font-display text-lg font-semibold text-brand-ivory">{item.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-brand-silver">{item.description}</p>
        </div>
      </div>
    </motion.article>
  );
}
