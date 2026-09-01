"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Phone, Siren } from "lucide-react";
import { siteConfig } from "@/config/site";
import type { ElectricienContent } from "@/data/electricien";
import { ElectricienLinkButton } from "@/components/electricien/ElectricienButton";
import { telHref } from "@/lib/placeholders";
import { cn } from "@/lib/utils";

interface ElectricienHeroProps {
  content: ElectricienContent["hero"];
  emergency: ElectricienContent["emergency"];
}

/**
 * Hero du gabarit "electricien" : message direct sur l'intervention rapide et
 * la conformité, priorité à la vitesse de compréhension et à l'accès
 * immédiat au téléphone — une clientèle qui consulte souvent ce site depuis
 * son téléphone, en pleine panne.
 */
export function ElectricienHero({ content, emergency }: ElectricienHeroProps) {
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>
      ) : null}

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="flex flex-wrap items-center gap-3">
          <motion.p
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold text-brand-accent backdrop-blur-sm",
              premium ? "border-white/15 bg-white/5" : "border-brand-line bg-brand-black",
            )}
          >
            {content.eyebrow}
          </motion.p>

          {phoneHref ? (
            <motion.a
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.04 }}
              href={phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-1.5 text-sm font-bold text-black shadow-md shadow-amber-500/25 hover:bg-amber-400"
            >
              <Siren className="h-4 w-4" aria-hidden="true" />
              {emergency.label}
            </motion.a>
          ) : null}
        </div>

        <motion.h1
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className={cn(
            "mt-6 max-w-3xl text-balance text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl",
            premium ? "text-white" : "text-brand-ivory",
          )}
        >
          {content.title} <span className="text-brand-accent">{content.highlight}</span>
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className={cn(
            "mt-6 max-w-xl text-lg leading-relaxed",
            premium ? "text-white/75" : "text-brand-silver",
          )}
        >
          {content.subtitle}
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <ElectricienLinkButton href={content.primaryCta.href} variant="primary" className="w-full sm:w-auto">
            {content.primaryCta.label}
          </ElectricienLinkButton>
          {phoneHref ? (
            <a
              href={phoneHref}
              className={cn(
                "inline-flex w-full items-center justify-center gap-2 rounded-lg border px-6 py-3.5 text-sm font-semibold transition-colors sm:w-auto",
                premium
                  ? "border-white/15 bg-white/5 text-white backdrop-blur-sm hover:border-white/30 hover:bg-white/10"
                  : "border-brand-line bg-brand-black text-brand-ivory hover:border-brand-accent hover:text-brand-accent",
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
            <li
              key={fact}
              className={cn(
                "flex items-center gap-1.5 text-sm font-medium",
                premium ? "text-white/70" : "text-brand-silver",
              )}
            >
              <Check className="h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
              {fact}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
