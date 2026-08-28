"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, Phone, Wrench } from "lucide-react";
import { siteConfig } from "@/config/site";
import type { GarageContent } from "@/data/garage";
import { GarageLinkButton } from "@/components/garage/GarageButton";
import { telHref } from "@/lib/placeholders";

interface GarageHeroProps {
  content: GarageContent["hero"];
}

/**
 * Hero du gabarit "garage" : message direct sur la prise de rendez-vous,
 * pas de vidéo cinématique ni de parallaxe — la priorité est la vitesse de
 * compréhension et l'accès immédiat au téléphone, pour une clientèle qui
 * consulte souvent ce site depuis son téléphone, dans l'urgence.
 */
export function GarageHero({ content }: GarageHeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const phoneHref = telHref(siteConfig.contact.phone);

  return (
    <section className="relative overflow-hidden border-b border-brand-line bg-brand-charcoal">
      <Wrench
        aria-hidden="true"
        strokeWidth={1}
        className="pointer-events-none absolute -right-16 -top-16 hidden h-[26rem] w-[26rem] -rotate-12 text-brand-accent/[0.06] lg:block"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <motion.p
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-brand-black px-4 py-1.5 text-sm font-semibold text-brand-accent"
        >
          {content.eyebrow}
        </motion.p>

        <motion.h1
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-6 max-w-3xl text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-brand-ivory sm:text-5xl lg:text-6xl"
        >
          {content.title} <span className="text-brand-accent">{content.highlight}</span>
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-brand-silver"
        >
          {content.subtitle}
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <GarageLinkButton href={content.primaryCta.href} variant="primary" className="w-full sm:w-auto">
            {content.primaryCta.label}
          </GarageLinkButton>
          {phoneHref ? (
            <a
              href={phoneHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-brand-line bg-brand-black px-6 py-3.5 text-sm font-semibold text-brand-ivory transition-colors hover:border-brand-accent hover:text-brand-accent sm:w-auto"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {content.secondaryCta.label}
            </a>
          ) : null}
        </motion.div>

        <motion.ul
          initial={shouldReduceMotion ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
        >
          {content.quickFacts.map((fact) => (
            <li key={fact} className="flex items-center gap-1.5 text-sm font-medium text-brand-silver">
              <Check className="h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
              {fact}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
