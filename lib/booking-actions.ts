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

/**
 * Demande de rendez-vous du gabarit "garage".
 *
 * Le rappel automatique par WhatsApp annoncé au client est une politique de
 * l'atelier, pas une action déclenchée par le navigateur : elle suppose un
 * envoi côté serveur (API WhatsApp Business, ou automatisation type n8n/Twilio)
 * déclenché à réception de cette demande. C'est ici que cet appel prendrait
 * place une fois un service réel branché.
 */
export async function submitAppointmentRequest(
  values: unknown,
): Promise<SubmissionResult> {
  await simulateNetworkDelay();
  console.log(`[${siteConfig.name}] Nouvelle demande de rendez-vous :`, values);

  return {
    success: true,
    message:
      "Votre demande de rendez-vous a bien été envoyée. Nous vous confirmons le créneau par téléphone ou WhatsApp dans les plus brefs délais.",
  };
}

/**
 * Demande de devis / rendez-vous du gabarit "electricien". Une demande
 * marquée urgente (voir ElectricienQuoteFormValues.isUrgent) mériterait, avec
 * un service réel branché, une notification prioritaire (SMS/appel) plutôt
 * qu'un simple accusé de réception — à adapter selon le canal retenu.
 */
export async function submitElectricienQuoteRequest(
  values: unknown,
): Promise<SubmissionResult> {
  await simulateNetworkDelay();
  console.log(`[${siteConfig.name}] Nouvelle demande de devis :`, values);

  return {
    success: true,
    message:
      "Votre demande a bien été envoyée. Nous vous recontactons par téléphone ou WhatsApp dans les plus brefs délais pour confirmer votre devis ou votre rendez-vous.",
  };
}

/**
 * Demande de devis / intervention du gabarit "plombier". Une demande marquée
 * urgente (fuite d'eau, voir PlombierQuoteFormValues.isUrgent) mériterait,
 * avec un service réel branché, une notification prioritaire (SMS/appel)
 * plutôt qu'un simple accusé de réception — à adapter selon le canal retenu.
 */
export async function submitPlombierQuoteRequest(
  values: unknown,
): Promise<SubmissionResult> {
  await simulateNetworkDelay();
  console.log(`[${siteConfig.name}] Nouvelle demande d'intervention :`, values);

  return {
    success: true,
    message:
      "Votre demande a bien été envoyée. Nous vous recontactons par téléphone ou WhatsApp dans les plus brefs délais pour confirmer votre devis ou votre intervention.",
  };
}

/**
 * Demande "vendre ou reprendre mon véhicule" du gabarit "dealer".
 * L'estimation sous 24h annoncée au client est traitée manuellement par
 * l'équipe une fois cette demande reçue ; brancher ici un service réel
 * (CRM, e-mail transactionnel) déclencherait la notification correspondante.
 */
export async function submitSellVehicleRequest(
  values: unknown,
): Promise<SubmissionResult> {
  await simulateNetworkDelay();
  console.log(`[${siteConfig.name}] Nouvelle demande d'estimation véhicule :`, values);

  return {
    success: true,
    message:
      "Votre demande a bien été envoyée. Nous vous transmettons une première estimation sous 24 heures.",
  };
}
