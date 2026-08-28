"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Search, Tag } from "lucide-react";
import type { DealerContent } from "@/data/dealer";

interface DealerHeroProps {
  content: DealerContent["hero"];
}

/**
 * Hero du gabarit "dealer" : deux parcours distincts dès l'arrivée (acheter /
 * vendre-reprendre), sans vidéo ni animation lourde — la priorité est de
 * router immédiatement le visiteur vers la bonne action.
 */
export function DealerHero({ content }: DealerHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="border-b border-brand-line bg-brand-charcoal">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
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
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          <HeroPathCard
            icon={Search}
            label={content.buyCta.label}
            description={content.buyCta.description}
            href={content.buyCta.href}
            emphasis
          />
          <HeroPathCard
            icon={Tag}
            label={content.sellCta.label}
            description={content.sellCta.description}
            href={content.sellCta.href}
          />
        </motion.div>

        <motion.ul
          initial={shouldReduceMotion ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="mt-9 flex flex-wrap gap-x-6 gap-y-2"
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
      className={`group flex flex-col gap-3 rounded-xl border p-6 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent ${
        emphasis
          ? "border-brand-accent bg-brand-accent text-white hover:bg-brand-accent-soft"
          : "border-brand-line bg-brand-black text-brand-ivory hover:border-brand-accent"
      }`}
    >
      <span
        className={`inline-flex h-11 w-11 items-center justify-center rounded-lg ${
          emphasis ? "bg-white/15" : "bg-brand-accent/10 text-brand-accent"
        }`}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="flex items-center gap-2 text-lg font-bold">
        {label}
        <ArrowUpRight
          className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </span>
      <span className={`text-sm leading-relaxed ${emphasis ? "text-white/85" : "text-brand-silver"}`}>
        {description}
      </span>
    </Link>
  );
}
