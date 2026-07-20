import type { Metadata } from "next";
import { LegalDisclaimer } from "@/components/legal/LegalDisclaimer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Conditions générales de location",
  description: `Conditions générales de location applicables aux véhicules ${siteConfig.name}.`,
  alternates: { canonical: "/conditions-generales" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-brand-ivory">
        Conditions générales de location
      </h1>

      <div className="mt-8">
        <LegalDisclaimer />
      </div>

      <div className="space-y-8 text-sm leading-relaxed text-brand-silver">
        <section>
          <h2 className="text-lg font-semibold text-brand-ivory">1. Objet</h2>
          <p className="mt-2">
            Les présentes conditions générales encadrent la location de véhicules proposée par{" "}
            {siteConfig.name}, en courte comme en longue durée. Elles seront acceptées par le client
            avant toute confirmation de réservation.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-brand-ivory">2. Conditions de location</h2>
          <p className="mt-2 text-xs text-brand-silver/70">
            {/* TODO: remplacer par l'information officielle de l'agence */}
            Âge minimum, ancienneté du permis, documents requis et modalités de caution à définir
            précisément par {siteConfig.name} pour chaque catégorie de véhicule.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-brand-ivory">3. Réservation et annulation</h2>
          <p className="mt-2 text-xs text-brand-silver/70">
            {/* TODO: remplacer par l'information officielle de l'agence */}
            Modalités de réservation, d&apos;acompte et de politique d&apos;annulation à confirmer par{" "}
            {siteConfig.name}.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-brand-ivory">4. Utilisation du véhicule</h2>
          <p className="mt-2 text-xs text-brand-silver/70">
            {/* TODO: remplacer par l'information officielle de l'agence */}
            Règles d&apos;usage (kilométrage, sortie du territoire, conducteurs additionnels)
            à préciser selon chaque véhicule.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-brand-ivory">5. Assurance et responsabilité</h2>
          <p className="mt-2 text-xs text-brand-silver/70">
            {/* TODO: remplacer par l'information officielle de l'agence */}
            Couverture d&apos;assurance, franchises et responsabilités en cas de sinistre à définir
            par {siteConfig.name} avant publication.
          </p>
        </section>
      </div>
    </div>
  );
}
