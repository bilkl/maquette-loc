"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Search, Tag } from "lucide-react";
import type { DealerContent } from "@/data/dealer";

interface DealerHeroProps {
  content: DealerContent["hero"];
}

/**
 * Hero du gabarit "dealer" : deux parcours distincts dès l'arrivée (acheter /
 * vendre-reprendre). Fond sombre et atmosphérique construit en SVG/CSS —
 * horizon du Léman au crépuscule, sans dépendre d'une photographie — pour une
 * première impression premium sans basculer dans le cinématique ni ralentir
 * l'accès à l'action.
 */
export function DealerHero({ content }: DealerHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-brand-ivory">
      <LakeAtDusk />

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
          className="mt-7 max-w-3xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]"
        >
          {content.title} <span className="text-brand-accent-soft">{content.highlight}</span>
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
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
      className={`group flex flex-col gap-3 rounded-xl border p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent-soft ${
        emphasis
          ? "border-brand-accent bg-brand-accent shadow-xl shadow-brand-accent/20 hover:shadow-2xl hover:shadow-brand-accent/30"
          : "border-white/15 bg-white/[0.06] hover:border-white/30 hover:bg-white/[0.09]"
      }`}
    >
      <span
        className={`inline-flex h-11 w-11 items-center justify-center rounded-lg ${
          emphasis ? "bg-white/15 text-white" : "bg-white/10 text-brand-accent-soft"
        }`}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className={`flex items-center gap-2 text-lg font-bold ${emphasis ? "text-white" : "text-white"}`}>
        {label}
        <ArrowUpRight
          className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </span>
      <span className={`text-sm leading-relaxed ${emphasis ? "text-white/85" : "text-white/65"}`}>
        {description}
      </span>
    </Link>
  );
}

/**
 * Horizon du Léman au crépuscule, entièrement en SVG/CSS : dégradé de nuit,
 * silhouette de rive et reflet sur l'eau. Construit pour ce composant plutôt
 * que via une photographie de démonstration — un fond décoratif reste
 * cohérent quelle que soit l'agence, là où une fausse photo de lac serait
 * trompeuse avant personnalisation.
 */
function LakeAtDusk() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0b1a2b 0%, #12283f 38%, #1d3b57 62%, #2a5273 100%)",
        }}
      />
      <svg
        className="absolute inset-x-0 bottom-0 h-[42%] w-full"
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 120 L120 100 L260 130 L400 90 L560 115 L720 70 L900 110 L1080 85 L1240 120 L1440 95 L1440 300 L0 300 Z"
          fill="#0e2338"
          opacity="0.9"
        />
        <path d="M0 150 L1440 130 L1440 300 L0 300 Z" fill="#0a1a2b" />
        <g stroke="#dce9f5" strokeOpacity="0.12" strokeWidth="2">
          <line x1="300" y1="185" x2="420" y2="185" />
          <line x1="620" y1="205" x2="800" y2="205" />
          <line x1="960" y1="180" x2="1120" y2="180" />
          <line x1="180" y1="225" x2="340" y2="225" />
          <line x1="760" y1="240" x2="960" y2="240" />
          <line x1="1080" y1="255" x2="1300" y2="255" />
        </g>
      </svg>
      <div
        className="absolute inset-x-0 bottom-[38%] h-40 opacity-60 blur-2xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(140,185,225,0.35) 0%, rgba(140,185,225,0) 70%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/10" />
    </div>
  );
}
