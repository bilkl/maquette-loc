"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { siteConfig } from "@/config/site";
import type { CoachContent } from "@/data/coach";
import { CoachLinkButton } from "@/components/coach/CoachButton";

interface CoachHeroProps {
  content: CoachContent["hero"];
}

/**
 * Hero du gabarit "coach" : message fort en deux temps ("Je transforme les
 * corps." / "Je répare la fatigue.") sur une grande photo, avec un dégradé
 * sombre appuyé pour laisser le texte dominer — l'énergie vient de la
 * typographie et de l'accent, pas d'un fond photo trop présent.
 */
export function CoachHero({ content }: CoachHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-brand-line bg-brand-black">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={siteConfig.images.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <motion.p
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-brand-accent/40 bg-brand-accent/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-brand-accent"
        >
          {content.eyebrow}
        </motion.p>

        <motion.h1
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-7 max-w-3xl text-balance text-5xl font-black uppercase leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          {content.title}
          <br />
          <span className="text-brand-accent">{content.titleSecondary}</span>
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-white/80"
        >
          {content.subtitle}
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <CoachLinkButton href={content.primaryCta.href} variant="primary" className="w-full sm:w-auto">
            {content.primaryCta.label}
          </CoachLinkButton>
          {content.secondaryCta ? (
            <CoachLinkButton href={content.secondaryCta.href} variant="secondary" className="w-full sm:w-auto">
              {content.secondaryCta.label}
            </CoachLinkButton>
          ) : null}
        </motion.div>

        <motion.ul
          initial={shouldReduceMotion ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-x-8 gap-y-3"
        >
          {content.quickFacts.map((fact) => (
            <li key={fact} className="flex items-center gap-2 text-sm font-semibold text-white/80">
              <Check className="h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
              {fact}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
