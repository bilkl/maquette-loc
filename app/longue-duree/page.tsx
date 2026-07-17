import type { Metadata } from "next";
import { Briefcase, Handshake, ShieldCheck, Wallet } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { LongTermForm } from "@/components/forms/LongTermForm";

export const metadata: Metadata = {
  title: "Location longue durée",
  description:
    "Découvrez la location longue durée NL Prestige : flexibilité, budget maîtrisé et services inclus pour un véhicule de prestige sans achat immédiat.",
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
  return (
    <div>
      <section className="border-b border-brand-line/60 bg-brand-charcoal py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Longue durée"
            title="Une solution automobile flexible, sans achat immédiat"
            description="La location longue durée NL Prestige s'adresse à celles et ceux qui souhaitent profiter d'un véhicule de prestige avec une grande souplesse, sans les contraintes de la propriété."
          />
        </div>
      </section>

      <section className="bg-brand-black py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-brand-line/60 bg-brand-charcoal/40 p-6"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-red/10">
                  <Icon className="h-5 w-5 text-brand-red" aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold text-brand-ivory">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-silver">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-charcoal py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-brand-ivory">
              Profils concernés
            </h2>
            <ul className="mt-6 space-y-3">
              {profiles.map((profile) => (
                <li
                  key={profile}
                  className="rounded-xl border border-brand-line/60 bg-brand-black/40 p-4 text-sm text-brand-silver"
                >
                  {profile}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-brand-ivory">
              Services inclus
            </h2>
            <ul className="mt-6 space-y-3">
              {includedServices.map((service) => (
                <li
                  key={service}
                  className="rounded-xl border border-brand-line/60 bg-brand-black/40 p-4 text-sm text-brand-silver"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-brand-black py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Demande personnalisée"
            title="Construisons ensemble votre offre longue durée"
            description="Décrivez votre besoin, un conseiller NL Prestige revient vers vous pour établir une proposition sur mesure."
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
