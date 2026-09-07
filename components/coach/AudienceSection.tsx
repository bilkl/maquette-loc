"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CoachContent, CoachPoint } from "@/data/coach";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { coachIcons } from "@/components/coach/icons";

interface AudienceSectionProps {
  content: CoachContent["audience"];
}

/** Section "Pour qui" : ciblage clair des +40 ans, sans méthode brutale. */
export function AudienceSection({ content }: AudienceSectionProps) {
  return (
    <section id="pour-qui" className="scroll-mt-20 border-b border-brand-line bg-brand-charcoal py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.intro}
          align="left"
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {content.points.map((point, index) => (
            <PointCard key={point.title} point={point} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PointCard({ point, index }: { point: CoachPoint; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = coachIcons[point.icon];

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.3) }}
      className="flex h-full gap-4 rounded-xl border border-brand-line bg-brand-black p-6"
    >
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div>
        <h3 className="text-base font-bold text-brand-ivory">{point.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-silver">{point.description}</p>
      </div>
    </motion.div>
  );
}
