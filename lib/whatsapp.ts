import { siteConfig } from "@/config/site";

/**
 * Construit une URL wa.me avec un message pré-rempli.
 * Le numéro et le message par défaut sont centralisés dans config/site.ts.
 */
export function getWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(message ?? siteConfig.contact.whatsappDefaultMessage);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${text}`;
}
