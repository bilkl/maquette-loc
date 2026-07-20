import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { LegalDisclaimer } from "@/components/legal/LegalDisclaimer";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Politique de confidentialité de ${siteConfig.name} concernant les données personnelles.`,
  alternates: { canonical: "/confidentialite" },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-brand-ivory">
        Politique de confidentialité
      </h1>

      <div className="mt-8">
        <LegalDisclaimer />
      </div>

      <div className="space-y-8 text-sm leading-relaxed text-brand-silver">
        <section>
          <h2 className="text-lg font-semibold text-brand-ivory">Données collectées</h2>
          <p className="mt-2">
            Dans le cadre des formulaires de contact, de réservation et de demande de location
            longue durée, {siteConfig.name} peut collecter les données suivantes : identité, coordonnées de
            contact, informations relatives au véhicule souhaité et au projet de location.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-brand-ivory">Finalité du traitement</h2>
          <p className="mt-2">
            Ces données sont utilisées exclusivement pour traiter votre demande, vous recontacter et
            , le cas échéant, préparer un contrat de location.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-brand-ivory">Conservation des données</h2>
          <p className="mt-2 text-xs text-brand-silver/70">
            {/* TODO: remplacer par l'information officielle de l'agence */}
            Durée de conservation à définir par {siteConfig.name}, en conformité avec la législation suisse
            applicable (LPD).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-brand-ivory">Vos droits</h2>
          <p className="mt-2">
            Vous pouvez demander l&apos;accès, la rectification ou la suppression de vos données en
            nous contactant à l&apos;adresse suivante : {siteConfig.contact.email}.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-brand-ivory">Cookies</h2>
          <p className="mt-2 text-xs text-brand-silver/70">
            {/* TODO: remplacer par l'information officielle de l'agence */}
            Politique de cookies à préciser en fonction des outils de suivi retenus par {siteConfig.name}.
          </p>
        </section>
      </div>
    </div>
  );
}
