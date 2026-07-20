import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { LegalDisclaimer } from "@/components/legal/LegalDisclaimer";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales de ${siteConfig.name}.`,
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

export default function LegalNoticePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-brand-ivory">Mentions légales</h1>

      <div className="mt-8">
        <LegalDisclaimer />
      </div>

      <div className="space-y-8 text-sm leading-relaxed text-brand-silver">
        <section>
          <h2 className="text-lg font-semibold text-brand-ivory">Éditeur du site</h2>
          <p className="mt-2">
            {siteConfig.legalName}
            <br />
            {siteConfig.address.street}, {siteConfig.address.postalCode} {siteConfig.address.city},{" "}
            {siteConfig.address.country}
            <br />
            E-mail : {siteConfig.contact.email}
            <br />
            Téléphone : {siteConfig.contact.phone}
          </p>
          <p className="mt-2 text-xs text-brand-silver/70">
            {/* TODO: remplacer par l'information officielle de l'agence */}
            Numéro d&apos;identification des entreprises (IDE), forme juridique et lieu
            d&apos;immatriculation à compléter par {siteConfig.name}.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-brand-ivory">Hébergement</h2>
          <p className="mt-2 text-xs text-brand-silver/70">
            {/* TODO: remplacer par l'information officielle de l'agence */}
            Nom, adresse et contact de l&apos;hébergeur à compléter avant publication.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-brand-ivory">Propriété intellectuelle</h2>
          <p className="mt-2">
            L&apos;ensemble des éléments du site (textes, images, logos, mise en page) est protégé
            par le droit d&apos;auteur. Toute reproduction sans autorisation préalable est interdite,
            sauf mention contraire.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-brand-ivory">Responsabilité</h2>
          <p className="mt-2">
            {siteConfig.name} s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées sur ce
            site, sans pouvoir garantir l&apos;absence d&apos;erreurs ou d&apos;omissions.
          </p>
        </section>
      </div>
    </div>
  );
}
