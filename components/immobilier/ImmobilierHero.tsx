"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Calculator, Search } from "lucide-react";
import { siteConfig } from "@/config/site";
import type { ImmobilierContent } from "@/data/immobilier";

interface ImmobilierHeroProps {
  content: ImmobilierContent["hero"];
}

/**
 * Hero du gabarit "immobilier" : une grande photo de bien en fond (villa ou
 * appartement avec vue), avec deux parcours distincts dès l'arrivée — parcourir
 * les biens ou demander une estimation — comme le hero du gabarit "dealer"
 * (acheter/vendre), transposé à l'immobilier.
 */
export function ImmobilierHero({ content }: ImmobilierHeroProps) {
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <motion.p
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-brand-accent-soft backdrop-blur-sm"
        >
          {content.eyebrow}
        </motion.p>

        <motion.h1
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-display mt-7 max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]"
        >
          {content.title} <span className="text-brand-accent-soft italic">{content.highlight}</span>
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/75"
        >
          {content.subtitle}
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mt-11 grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          <HeroPathCard
            icon={Search}
            label={content.browseCta.label}
            description={content.browseCta.description}
            href={content.browseCta.href}
            emphasis
          />
          <HeroPathCard
            icon={Calculator}
            label={content.estimateCta.label}
            description={content.estimateCta.description}
            href={content.estimateCta.href}
          />
        </motion.div>

        <motion.ul
          initial={shouldReduceMotion ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.36 }}
          className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-7"
        >
          {content.quickFacts.map((fact) => (
            <li key={fact} className="flex items-center gap-2 text-sm font-medium text-white/80">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent-soft" aria-hidden="true" />
              {fact}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

function HeroPathCard({
  icon: Icon,
  label,
  description,
  href,
  emphasis = false,
}: {
  icon: typeof Search;
  label: string;
  description: string;
  href: string;
  emphasis?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group relative flex flex-col gap-3 overflow-hidden rounded-xl border p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent-soft ${
        emphasis
          ? "border-brand-accent shadow-xl shadow-brand-accent/20 hover:shadow-2xl hover:shadow-brand-accent/35"
          : "border-white/15 bg-white/[0.06] hover:border-white/30 hover:bg-white/[0.09]"
      }`}
      style={
        emphasis
          ? {
              backgroundImage:
                "linear-gradient(135deg, var(--color-brand-accent) 0%, var(--color-brand-accent-soft) 100%)",
            }
          : undefined
      }
    >
      {emphasis ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.3)_50%,transparent_65%)] transition-transform duration-700 ease-out group-hover:translate-x-full motion-reduce:hidden"
        />
      ) : null}
      <span
        className={`relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-lg ${
          emphasis ? "bg-white/15 text-white" : "bg-white/10 text-brand-accent-soft"
        }`}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="relative z-10 flex items-center gap-2 text-lg font-bold text-white">
        {label}
        <ArrowUpRight
          className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </span>
      <span className={`relative z-10 text-sm leading-relaxed ${emphasis ? "text-white/85" : "text-white/65"}`}>
        {description}
      </span>
    </Link>
  );
}
