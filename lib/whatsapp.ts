import { siteConfig } from "@/config/site";
import { isPlaceholder } from "@/lib/placeholders";

/** Numéro WhatsApp au format attendu par wa.me (chiffres uniquement). */
function whatsappDigits(): string {
  const raw = siteConfig.contact.whatsappNumber;
  return isPlaceholder(raw) ? "" : raw.replace(/\D/g, "");
}

/** `true` dès que l'agence a communiqué un numéro WhatsApp exploitable. */
export function hasWhatsAppNumber(): boolean {
  return whatsappDigits().length > 0;
}

/**
 * `true` uniquement quand un CTA WhatsApp peut réellement être affiché :
 * l'agence n'a pas explicitement désactivé WhatsApp (`contact.whatsappEnabled:
 * false`, ex. une entreprise qui ne communique que par téléphone/e-mail) ET a
 * renseigné un numéro exploitable (`hasWhatsAppNumber()`). Tant que le numéro
 * n'est qu'un espace réservé (maquette non personnalisée), un lien wa.me sans
 * destinataire (`wa.me/?text=…`) serait trompeur — mieux vaut masquer le CTA,
 * comme telHref()/mailtoHref() le font déjà pour le téléphone et l'e-mail.
 * Tous les CTA WhatsApp du site doivent être conditionnés par cette fonction.
 */
export function isWhatsAppEnabled(): boolean {
  return siteConfig.contact.whatsappEnabled !== false && hasWhatsAppNumber();
}

/**
 * Construit une URL wa.me avec un message pré-rempli. Le numéro et le message
 * par défaut sont centralisés dans config/site.ts.
 *
 * À n'appeler que derrière un `isWhatsAppEnabled()` vrai : sans numéro
 * exploitable, le résultat serait un lien wa.me sans destinataire.
 */
export function getWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(message ?? siteConfig.contact.whatsappDefaultMessage);
  return `https://wa.me/${whatsappDigits()}?text=${text}`;
}
