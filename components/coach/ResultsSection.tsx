"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Info } from "lucide-react";
import type { CoachContent, CoachResultExample } from "@/data/coach";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { coachIcons } from "@/components/coach/icons";

interface ResultsSectionProps {
  content: CoachContent["results"];
}

/**
 * Section "Résultats" : volontairement sans aucune photo, réelle ou
 * générique. La structure "avant/après" est représentée par un visuel
 * abstrait (deux barres), jamais par une photo qui pourrait laisser croire
 * qu'un client a été photographié et publié sans son consentement — voir
 * l'avertissement explicite en tête de section et `content.disclaimer`.
 */
export function ResultsSection({ content }: ResultsSectionProps) {
  return (
    <section id="resultats" className="scroll-mt-20 border-b border-brand-line bg-brand-charcoal py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.intro}
          align="left"
        />

        <dl className="mt-10 grid grid-cols-3 gap-4 border-y border-brand-line py-8">
          {content.stats.map((stat) => (
            <div key={stat.label}>
              <dd className="text-3xl font-black tabular-nums text-brand-accent sm:text-4xl">
                {stat.value}
              </dd>
              <dt className="mt-1 text-xs font-medium text-brand-silver sm:text-sm">{stat.label}</dt>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex items-start gap-3 rounded-xl border border-brand-accent/30 bg-brand-accent/5 p-4">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-brand-silver">{content.disclaimer}</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {content.examples.map((example, index) => (
            <ExampleCard key={example.title} example={example} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExampleCard({ example, index }: { example: CoachResultExample; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = coachIcons[example.icon];

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.08, 0.3) }}
      className="rounded-xl border border-brand-line bg-brand-black p-6"
    >
      <AbstractProgress />

      <div className="mt-5 flex items-start gap-3">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-sm font-bold text-brand-ivory">{example.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-brand-silver">{example.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Représentation purement abstraite d'une progression "avant/après" — deux
 * barres, aucune silhouette ni photo — pour illustrer le principe sans
 * jamais suggérer une vraie photo de client.
 */
function AbstractProgress() {
  return (
    <div aria-hidden="true" className="flex h-24 items-end justify-center gap-3">
      <div className="flex flex-col items-center gap-2">
        <div className="h-12 w-10 rounded-t-md bg-brand-line" />
        <span className="text-[0.65rem] font-bold uppercase tracking-wide text-brand-silver">Avant</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="h-20 w-10 rounded-t-md bg-brand-accent" />
        <span className="text-[0.65rem] font-bold uppercase tracking-wide text-brand-accent">Après</span>
      </div>
    </div>
  );
}
