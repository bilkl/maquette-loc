import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Briefcase, Handshake, ShieldCheck, Wallet } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { LongTermForm } from "@/components/forms/LongTermForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Location longue durée",
  description: `Découvrez la location longue durée ${siteConfig.name} : flexibilité, budget maîtrisé et services inclus pour un véhicule de prestige sans achat immédiat.`,
  alternates: { canonical: "/longue-duree" },
};

const advantages = [
  {
    icon: Wallet,
    title: "Budget maîtrisé",
    description: "Un loyer mensuel clair, sans les contraintes financières liées à l'achat d'un véhicule.",
  },
  {
    icon: Handshake,
    title: "Souplesse contractuelle",
    description: "Des durées adaptées à votre situation, avec des conditions discutées selon vos besoins.",
  },
  {
    icon: ShieldCheck,
    title: "Accompagnement dédié",
    description: "Un interlocuteur unique pour construire une offre correspondant à votre usage.",
  },
  {
    icon: Briefcase,
    title: "Solution professionnelle",
    description: "Une réponse adaptée aux indépendants et entreprises souhaitant équiper leurs équipes.",
  },
];

const profiles = [
  "Particuliers souhaitant conduire un véhicule de prestige sans engagement d'achat",
  "Indépendants et professionnels ayant besoin d'un véhicule représentatif",
  "Entreprises souhaitant équiper une partie de leurs équipes",
  "Personnes en transition (déménagement, attente de livraison d'un véhicule commandé…)",
];

const includedServices = [
  "Véhicule préparé et contrôlé avant la remise",
  "Accompagnement personnalisé pendant toute la durée du contrat",
  "Conditions présentées clairement avant signature",
  "Assistance disponible en cas de besoin",
];

export default function LongTermPage() {
  // Route sans objet pour les gabarits "garage" et "dealer" (pas de location de véhicules).
  if (siteConfig.template === "garage" || siteConfig.template === "dealer") {
    notFound();
  }

  return (
    <div>
      <section className="border-b border-brand-line/60 bg-brand-charcoal py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Longue durée"
            title="Une solution automobile flexible, sans achat immédiat"
            description={`La location longue durée ${siteConfig.name} s'adresse à celles et ceux qui souhaitent profiter d'un véhicule de prestige avec une grande souplesse, sans les contraintes de la propriété.`}
          />
        </div>
      </section>

      <section className="bg-brand-black py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-brand-line/60 bg-brand-charcoal/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/50 hover:shadow-xl hover:shadow-black/30"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent/10">
                  <Icon className="h-6 w-6 text-brand-accent" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-brand-ivory">{title}</h3>
                <p className="mt-3 text-base leading-relaxed text-brand-silver">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-charcoal py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-ivory">
              Profils concernés
            </h2>
            <ul className="mt-7 space-y-3">
              {profiles.map((profile) => (
                <li
                  key={profile}
                  className="rounded-xl border border-brand-line/60 bg-brand-black/40 p-5 text-base text-brand-silver"
                >
                  {profile}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-ivory">
              Services inclus
            </h2>
            <ul className="mt-7 space-y-3">
              {includedServices.map((service) => (
                <li
                  key={service}
                  className="rounded-xl border border-brand-line/60 bg-brand-black/40 p-5 text-base text-brand-silver"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-brand-black py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Demande personnalisée"
            title="Construisons ensemble votre offre longue durée"
            description={`Décrivez votre besoin, un conseiller ${siteConfig.name} revient vers vous pour établir une proposition sur mesure.`}
            align="left"
          />
          <div className="mt-10 rounded-2xl border border-brand-line/60 bg-brand-charcoal/40 p-6 sm:p-8">
            <LongTermForm />
          </div>
        </div>
      </section>
    </div>
  );
}
