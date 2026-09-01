"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import type { MenuiserieContent, MenuiserieFamily } from "@/data/menuiserie";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { familyIcons } from "@/components/menuiserie/icons";

interface ServicesGridProps {
  content: MenuiserieContent["services"];
  /** Sur la page d'accueil, chaque carte pointe vers son ancre sur /prestations */
  linkToDetails?: boolean;
}

/**
 * Grille "Nos savoir-faire" : quatre grandes familles plutôt qu'une liste
 * exhaustive de prestations tarifées à l'unité — l'entrée par famille invite
 * à parcourir la galerie de réalisations correspondante.
 */
export function ServicesGrid({ content, linkToDetails = true }: ServicesGridProps) {
  return (
    <section id="savoir-faire" className="scroll-mt-20 border-b border-brand-line bg-brand-black py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.intro}
          align="left"
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {content.items.map((item, index) => (
            <FamilyCard key={item.slug} family={item} index={index} linkToDetails={linkToDetails} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FamilyCard({
  family,
  index,
  linkToDetails,
}: {
  family: MenuiserieFamily;
  index: number;
  linkToDetails: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = familyIcons[family.icon];

  const card = (
    <div className="group flex h-full flex-col rounded-xl border border-brand-line bg-brand-charcoal p-7 transition-all hover:-translate-y-1 hover:border-brand-accent hover:shadow-lg hover:shadow-black/5 sm:p-8">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="font-display mt-5 text-xl font-semibold text-brand-ivory">{family.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-silver">{family.shortDescription}</p>
      <ul className="mt-5 space-y-2">
        {family.examples.slice(0, 2).map((example) => (
          <li key={example} className="flex items-start gap-2 text-sm text-brand-ivory">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
            {example}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.3) }}
    >
      {linkToDetails ? (
        <Link
          href={`/prestations#${family.slug}`}
          className="block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
        >
          {card}
        </Link>
      ) : (
        card
      )}
    </motion.div>
  );
}
