/**
 * Logique d'envoi des formulaires, isolée du reste de l'interface.
 *
 * Pour cette maquette, les données sont simplement journalisées dans la console
 * et une réponse de succès simulée est renvoyée après un court délai.
 *
 * Pour brancher un service réel, remplacez le contenu des fonctions ci-dessous par
 * un appel à Resend, Formspree, une API personnalisée, un workflow n8n,
 * Google Sheets ou un CRM. La signature des fonctions peut rester identique.
 */
import { siteConfig } from "@/config/site";

export interface SubmissionResult {
  success: boolean;
  message: string;
}

async function simulateNetworkDelay(ms = 900): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

export async function submitBookingRequest(
  values: unknown,
): Promise<SubmissionResult> {
  await simulateNetworkDelay();
  console.log(`[${siteConfig.name}] Nouvelle demande de réservation :`, values);

  return {
    success: true,
    message:
      "Votre demande a bien été envoyée. Notre équipe vous recontactera rapidement pour confirmer les conditions.",
  };
}

export async function submitContactRequest(
  values: unknown,
): Promise<SubmissionResult> {
  await simulateNetworkDelay();
  console.log(`[${siteConfig.name}] Nouveau message de contact :`, values);

  return {
    success: true,
    message: "Votre message a bien été envoyé. Nous vous répondrons dans les meilleurs délais.",
  };
}

export async function submitLongTermRequest(
  values: unknown,
): Promise<SubmissionResult> {
  await simulateNetworkDelay();
  console.log(`[${siteConfig.name}] Nouvelle demande de location longue durée :`, values);

  return {
    success: true,
    message:
      `Votre demande a bien été transmise. Un conseiller ${siteConfig.name} vous contactera pour construire une offre personnalisée.`,
  };
}
