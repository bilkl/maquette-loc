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
 * Construit une URL wa.me avec un message pré-rempli.
 * Le numéro et le message par défaut sont centralisés dans config/site.ts.
 *
 * Tant que le numéro n'est qu'un espace réservé (maquette non personnalisée),
 * on renvoie l'URL wa.me sans destinataire : WhatsApp s'ouvre malgré tout avec
 * le message pré-rempli et l'utilisateur choisit le contact, plutôt que
 * d'aboutir sur un lien cassé.
 */
export function getWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(message ?? siteConfig.contact.whatsappDefaultMessage);
  return `https://wa.me/${whatsappDigits()}?text=${text}`;
}
