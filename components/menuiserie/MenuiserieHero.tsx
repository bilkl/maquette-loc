"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { siteConfig } from "@/config/site";
import type { MenuiserieContent } from "@/data/menuiserie";
import { MenuiserieLinkButton } from "@/components/menuiserie/MenuiserieButton";
import { cn } from "@/lib/utils";

interface MenuiserieHeroProps {
  content: MenuiserieContent["hero"];
}

/**
 * Hero du gabarit "menuiserie" : une grande photo de réalisation en fond,
 * pas de vidéo ni de motif décoratif — ici le rendu visuel du travail du bois
 * doit primer, avec juste assez de dégradé pour garder le texte lisible.
 */
export function MenuiserieHero({ content }: MenuiserieHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-brand-line bg-brand-charcoal">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={siteConfig.images.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[34rem] max-w-7xl flex-col justify-end px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <motion.p
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm"
        >
          {content.eyebrow}
        </motion.p>

        <motion.h1
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="font-display mt-6 max-w-2xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {content.title} <span className="text-brand-accent-soft italic">{content.highlight}</span>
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/85"
        >
          {content.subtitle}
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <MenuiserieLinkButton href={content.primaryCta.href} variant="primary" className="w-full sm:w-auto">
            {content.primaryCta.label}
          </MenuiserieLinkButton>
          <MenuiserieLinkButton
            href={content.secondaryCta.href}
            variant="secondary"
            className={cn(
              "w-full !border-white/30 !bg-white/10 !text-white backdrop-blur-sm hover:!border-white hover:!bg-white/20 sm:w-auto",
            )}
          >
            {content.secondaryCta.label}
          </MenuiserieLinkButton>
        </motion.div>

        <motion.ul
          initial={shouldReduceMotion ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
        >
          {content.quickFacts.map((fact) => (
            <li key={fact} className="flex items-center gap-1.5 text-sm font-medium text-white/80">
              <Check className="h-4 w-4 shrink-0 text-brand-accent-soft" aria-hidden="true" />
              {fact}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
