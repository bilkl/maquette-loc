import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { CheckCircle2 } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "À propos",
  description: `${siteConfig.name} est un service suisse spécialisé dans la location de véhicules de prestige en courte et longue durée.`,
  alternates: { canonical: "/a-propos" },
};

const commitments = [
  "Une sélection de véhicules choisis pour leur standing et leur fiabilité",
  "Un accompagnement personnalisé à chaque étape de la location",
  "Des conditions présentées clairement avant toute confirmation",
  "Une disponibilité rapide par formulaire ou WhatsApp",
];

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-brand-line/60 bg-brand-charcoal py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow={`À propos de ${siteConfig.name}`}
            title="Un service suisse dédié à la location de véhicules de prestige"
            description={`${siteConfig.name} accompagne une clientèle exigeante à la recherche d'un véhicule d'exception, pour une occasion particulière ou pour une solution automobile flexible sur la durée.`}
          />
        </div>
      </section>

      <section className="bg-brand-black py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-brand-line/60">
            <Image
              src={siteConfig.images.about}
              alt={`Illustration de démonstration ${siteConfig.name}`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-ivory">
              Notre positionnement
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-silver">
              {siteConfig.name} propose un service de location de véhicules de prestige pensé pour la
              Suisse, avec une approche directe, transparente et personnalisée. Cette page présente
              le positionnement général de l&apos;entreprise ; les informations précises (historique,
              structure juridique, zone de couverture) seront complétées par {siteConfig.name} avant
              publication officielle.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-silver">
              Notre objectif est simple : rendre la location d&apos;un véhicule d&apos;exception aussi
              simple et rassurante qu&apos;un déplacement du quotidien, en s&apos;appuyant sur des
              échanges directs avec chaque client.
            </p>

            <ul className="mt-8 space-y-3">
              {commitments.map((commitment) => (
                <li key={commitment} className="flex items-start gap-2 text-base text-brand-silver">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                  {commitment}
                </li>
              ))}
            </ul>

            <LinkButton href="/contact" variant="primary" className="mt-8">
              Nous contacter
            </LinkButton>
          </div>
        </div>
      </section>
    </div>
  );
}
