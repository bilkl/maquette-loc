import type { Metadata } from "next";
import { LegalDisclaimer } from "@/components/legal/LegalDisclaimer";
import { siteConfig } from "@/config/site";

const isGarage = siteConfig.template === "garage";
const isDealer = siteConfig.template === "dealer";
const isElectricien = siteConfig.template === "electricien";
const isPlombier = siteConfig.template === "plombier";
const pageTitle = isGarage
  ? "Conditions générales de service"
  : isDealer
    ? "Conditions générales de vente"
    : isElectricien
      ? "Conditions générales de prestation"
      : isPlombier
        ? "Conditions générales de prestation"
        : "Conditions générales de location";

export const metadata: Metadata = {
  title: pageTitle,
  description: isGarage
    ? `Conditions générales applicables aux prestations d'entretien et de réparation de ${siteConfig.name}.`
    : isDealer
      ? `Conditions générales applicables à l'achat, la vente et la reprise de véhicules d'occasion chez ${siteConfig.name}.`
      : isElectricien
        ? `Conditions générales applicables aux prestations d'installation, de contrôle et de dépannage électrique de ${siteConfig.name}.`
        : isPlombier
          ? `Conditions générales applicables aux prestations d'installation, de dépannage et de rénovation sanitaire de ${siteConfig.name}.`
          : `Conditions générales de location applicables aux véhicules ${siteConfig.name}.`,
  alternates: { canonical: "/conditions-generales" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  if (isDealer) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-brand-ivory">{pageTitle}</h1>

        <div className="mt-8">
          <LegalDisclaimer />
        </div>

        <div className="space-y-8 text-sm leading-relaxed text-brand-silver">
          <section>
            <h2 className="text-lg font-bold text-brand-ivory">1. Objet</h2>
            <p className="mt-2">
              Les présentes conditions générales encadrent la vente de véhicules d&apos;occasion et la
              reprise de véhicules par {siteConfig.name}. Elles s&apos;appliquent à toute transaction
              conclue à la suite d&apos;une offre publiée sur ce site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-ivory">2. État du véhicule et garantie</h2>
            <p className="mt-2 text-xs text-brand-silver/70">
              {/* TODO: remplacer par l'information officielle de l'agence */}
              Portée exacte des contrôles effectués avant la vente et durée/étendue de la garantie
              incluse à préciser par {siteConfig.name} pour chaque véhicule.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-ivory">3. Paiement et livraison</h2>
            <p className="mt-2 text-xs text-brand-silver/70">
              {/* TODO: remplacer par l'information officielle de l'agence */}
              Modalités de paiement, d&apos;acompte et de livraison dans toute la Suisse (délais, frais
              éventuels) à confirmer par {siteConfig.name}.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-ivory">4. Reprise d&apos;un véhicule</h2>
            <p className="mt-2 text-xs text-brand-silver/70">
              {/* TODO: remplacer par l'information officielle de l'agence */}
              Modalités d&apos;estimation, de contrôle et de déduction de la valeur de reprise sur le
              prix d&apos;achat à préciser par {siteConfig.name}.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-ivory">5. Financement et leasing</h2>
            <p className="mt-2 text-xs text-brand-silver/70">
              {/* TODO: remplacer par l'information officielle de l'agence */}
              Conditions d&apos;octroi, partenaires financiers et taux applicables aux offres de crédit
              ou de leasing à définir par {siteConfig.name} avant publication.
            </p>
          </section>
        </div>
      </div>
    );
  }

  if (isGarage) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-brand-ivory">{pageTitle}</h1>

        <div className="mt-8">
          <LegalDisclaimer />
        </div>

        <div className="space-y-8 text-sm leading-relaxed text-brand-silver">
          <section>
            <h2 className="text-lg font-bold text-brand-ivory">1. Objet</h2>
            <p className="mt-2">
              Les présentes conditions générales encadrent les prestations d&apos;entretien, de
              réparation et de préparation à l&apos;expertise proposées par {siteConfig.name}. Elles
              s&apos;appliquent à toute intervention réalisée sur rendez-vous ou après acceptation
              d&apos;un devis.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-ivory">2. Devis et acceptation</h2>
            <p className="mt-2 text-xs text-brand-silver/70">
              {/* TODO: remplacer par l'information officielle du garage */}
              Un devis est communiqué avant toute intervention non couverte par le rendez-vous
              initial. Modalités d&apos;acceptation (signature, confirmation orale ou écrite) à
              préciser par {siteConfig.name}.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-ivory">3. Rendez-vous et délais</h2>
            <p className="mt-2 text-xs text-brand-silver/70">
              {/* TODO: remplacer par l'information officielle du garage */}
              Modalités de prise, de report et d&apos;annulation de rendez-vous, ainsi que les délais
              indicatifs de remise du véhicule, à confirmer par {siteConfig.name}.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-ivory">4. Pièces et garantie des travaux</h2>
            <p className="mt-2 text-xs text-brand-silver/70">
              {/* TODO: remplacer par l'information officielle du garage */}
              Origine des pièces utilisées (constructeur ou équivalentes) et durée de garantie
              applicable aux travaux effectués à préciser par {siteConfig.name}.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-ivory">5. Responsabilité</h2>
            <p className="mt-2 text-xs text-brand-silver/70">
              {/* TODO: remplacer par l'information officielle du garage */}
              Étendue de la responsabilité du garage, conditions de prise en charge du véhicule sur
              site et modalités en cas de désaccord sur une intervention à définir par{" "}
              {siteConfig.name} avant publication.
            </p>
          </section>
        </div>
      </div>
    );
  }

  if (isElectricien) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-brand-ivory">{pageTitle}</h1>

        <div className="mt-8">
          <LegalDisclaimer />
        </div>

        <div className="space-y-8 text-sm leading-relaxed text-brand-silver">
          <section>
            <h2 className="text-lg font-bold text-brand-ivory">1. Objet</h2>
            <p className="mt-2">
              Les présentes conditions générales encadrent les prestations d&apos;installation,
              de contrôle (OIBT) et de dépannage électrique proposées par {siteConfig.name}.
              Elles s&apos;appliquent à toute intervention réalisée sur rendez-vous, en urgence,
              ou après acceptation d&apos;un devis.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-ivory">2. Devis et acceptation</h2>
            <p className="mt-2 text-xs text-brand-silver/70">
              {/* TODO: remplacer par l'information officielle de l'entreprise */}
              Un devis est communiqué avant toute intervention non couverte par le rendez-vous
              initial. Modalités d&apos;acceptation (signature, confirmation orale ou écrite) à
              préciser par {siteConfig.name}.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-ivory">3. Interventions d&apos;urgence</h2>
            <p className="mt-2 text-xs text-brand-silver/70">
              {/* TODO: remplacer par l'information officielle de l'entreprise */}
              Conditions de prise en charge, majoration éventuelle et délais indicatifs
              d&apos;intervention en dehors des horaires habituels à préciser par {siteConfig.name}.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-ivory">4. Matériel et garantie des travaux</h2>
            <p className="mt-2 text-xs text-brand-silver/70">
              {/* TODO: remplacer par l'information officielle de l'entreprise */}
              Origine du matériel utilisé et durée de garantie applicable aux installations et
              réparations effectuées à préciser par {siteConfig.name}.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-ivory">5. Responsabilité</h2>
            <p className="mt-2 text-xs text-brand-silver/70">
              {/* TODO: remplacer par l'information officielle de l'entreprise */}
              Étendue de la responsabilité de l&apos;entreprise, conformité aux normes OIBT en
              vigueur et modalités en cas de désaccord sur une intervention à définir par{" "}
              {siteConfig.name} avant publication.
            </p>
          </section>
        </div>
      </div>
    );
  }

  if (isPlombier) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-brand-ivory">{pageTitle}</h1>

        <div className="mt-8">
          <LegalDisclaimer />
        </div>

        <div className="space-y-8 text-sm leading-relaxed text-brand-silver">
          <section>
            <h2 className="text-lg font-bold text-brand-ivory">1. Objet</h2>
            <p className="mt-2">
              Les présentes conditions générales encadrent les prestations d&apos;installation,
              de dépannage et de rénovation sanitaire proposées par {siteConfig.name}. Elles
              s&apos;appliquent à toute intervention réalisée sur rendez-vous, en urgence, ou
              après acceptation d&apos;un devis.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-ivory">2. Devis et acceptation</h2>
            <p className="mt-2 text-xs text-brand-silver/70">
              {/* TODO: remplacer par l'information officielle de l'entreprise */}
              Un devis est communiqué avant toute intervention non couverte par le rendez-vous
              initial. Modalités d&apos;acceptation (signature, confirmation orale ou écrite) à
              préciser par {siteConfig.name}.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-ivory">3. Interventions d&apos;urgence</h2>
            <p className="mt-2 text-xs text-brand-silver/70">
              {/* TODO: remplacer par l'information officielle de l'entreprise */}
              Conditions de prise en charge, majoration éventuelle et délais indicatifs
              d&apos;intervention en dehors des horaires habituels à préciser par {siteConfig.name}.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-ivory">4. Matériel et garantie des travaux</h2>
            <p className="mt-2 text-xs text-brand-silver/70">
              {/* TODO: remplacer par l'information officielle de l'entreprise */}
              Origine du matériel utilisé et durée de garantie applicable aux installations et
              réparations effectuées à préciser par {siteConfig.name}.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-ivory">5. Responsabilité</h2>
            <p className="mt-2 text-xs text-brand-silver/70">
              {/* TODO: remplacer par l'information officielle de l'entreprise */}
              Étendue de la responsabilité de l&apos;entreprise et modalités en cas de désaccord
              sur une intervention à définir par {siteConfig.name} avant publication.
            </p>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-brand-ivory">{pageTitle}</h1>

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
