"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Droplet, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import type { PlombierContent } from "@/data/plombier";
import { PlombierLinkButton } from "@/components/plombier/PlombierButton";
import { telHref } from "@/lib/placeholders";
import { cn } from "@/lib/utils";

interface PlombierHeroProps {
  content: PlombierContent["hero"];
  emergency: PlombierContent["emergency"];
}

/**
 * Hero du gabarit "plombier" : message direct sur l'intervention rapide et
 * la confiance, avec le bouton d'urgence répété juste sous le titre — une
 * fuite d'eau ne laisse pas le temps de chercher un numéro dans le menu.
 */
export function PlombierHero({ content, emergency }: PlombierHeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const phoneHref = telHref(siteConfig.contact.phone);
  const premium = siteConfig.premium;

  return (
    <section className="relative overflow-hidden border-b border-brand-line bg-brand-charcoal">
      {premium ? (
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src={siteConfig.images.hero}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/10" />
        </div>
      ) : null}

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="flex flex-wrap items-center gap-3">
          <motion.p
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-brand-black px-4 py-1.5 text-sm font-semibold text-brand-accent"
          >
            {content.eyebrow}
          </motion.p>

          {phoneHref ? (
            <motion.a
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.04 }}
              href={phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-4 py-1.5 text-sm font-bold text-white shadow-md shadow-orange-600/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-500"
            >
              <Droplet className="h-4 w-4" aria-hidden="true" />
              {emergency.label}
            </motion.a>
          ) : null}
        </div>

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
          <PlombierLinkButton href={content.primaryCta.href} variant="primary" className="w-full sm:w-auto">
            {content.primaryCta.label}
          </PlombierLinkButton>
          {phoneHref ? (
            <a
              href={phoneHref}
              className={cn(
                "inline-flex w-full items-center justify-center gap-2 rounded-lg border border-brand-line bg-brand-black px-6 py-3.5 text-sm font-semibold text-brand-ivory transition-colors hover:border-brand-accent hover:text-brand-accent sm:w-auto",
              )}
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
