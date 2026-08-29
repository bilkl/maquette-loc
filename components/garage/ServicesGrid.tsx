"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import type { GarageContent, GarageService } from "@/data/garage";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { serviceIcons } from "@/components/garage/icons";
import { cn } from "@/lib/utils";

interface ServicesGridProps {
  content: GarageContent["services"];
  /** Sur la page d'accueil, chaque carte pointe vers son ancre sur /prestations */
  linkToDetails?: boolean;
}

export function ServicesGrid({ content, linkToDetails = true }: ServicesGridProps) {
  return (
    <section id="prestations" className="scroll-mt-20 border-b border-brand-line bg-brand-black py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.intro}
          align="left"
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item, index) => (
            <ServiceCard key={item.slug} service={item} index={index} linkToDetails={linkToDetails} />
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-sm text-brand-silver">{content.pricingNote}</p>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  linkToDetails,
}: {
  service: GarageService;
  index: number;
  linkToDetails: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = serviceIcons[service.icon];

  const card = (
    <div
      className={cn(
        "group flex h-full flex-col rounded-xl border border-brand-line bg-brand-charcoal p-6 transition-all hover:border-brand-accent",
        siteConfig.premium && "hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20",
      )}
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-lg font-bold text-brand-ivory">{service.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-silver">{service.shortDescription}</p>
      {service.startingPrice ? (
        <p className="mt-4 text-sm font-semibold text-brand-accent">{service.startingPrice}</p>
      ) : null}
    </div>
  );

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
    >
      {linkToDetails ? (
        <Link
          href={`/prestations#${service.slug}`}
          className="block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
        >
          {card}
        </Link>
      ) : (
        card
      )}
    </motion.div>
  );
}
