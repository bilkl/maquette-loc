"use client";

import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/ui/icons";
import { getWhatsAppUrl, hasWhatsAppNumber } from "@/lib/whatsapp";

/**
 * Lien WhatsApp flottant du gabarit "showroom" : pastille sombre à filet doré
 * plutôt que le bouton vert standard, pour rester dans la direction artistique.
 *
 * Tant que le numéro n'est pas renseigné dans config/brands/<id>.ts, le lien
 * ouvre WhatsApp avec le message pré-rempli mais sans destinataire
 * (voir lib/whatsapp.ts).
 */
export function ShowroomWhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Écrire à ${siteConfig.name} sur WhatsApp`}
      title={
        hasWhatsAppNumber()
          ? undefined
          : "Numéro WhatsApp à renseigner avant publication (config/brands/luxurcars.ts)"
      }
      className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 border border-brand-accent/60 bg-brand-black/90 px-4 py-3 text-brand-ivory shadow-lg shadow-black/50 backdrop-blur transition-all duration-300 hover:border-brand-accent hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent sm:bottom-8 sm:right-8"
    >
      <WhatsAppIcon className="h-5 w-5 text-[#25D366]" aria-hidden="true" />
      <span className="hidden text-sm font-medium uppercase tracking-[0.24em] sm:inline">
        WhatsApp
      </span>
    </a>
  );
}
