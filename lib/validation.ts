import { AppointmentFormErrors, AppointmentFormValues, BookingFormErrors, BookingFormValues, ContactFormErrors, ContactFormValues, LongTermFormErrors, LongTermFormValues } from "@/types/booking";
import { todayIso } from "@/lib/utils";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateBookingForm(values: BookingFormValues): BookingFormErrors {
  const errors: BookingFormErrors = {};

  if (!values.firstName.trim()) errors.firstName = "Le prénom est requis.";
  if (!values.lastName.trim()) errors.lastName = "Le nom est requis.";
  if (!values.email.trim()) {
    errors.email = "L'e-mail est requis.";
  } else if (!EMAIL_REGEX.test(values.email)) {
    errors.email = "Le format de l'e-mail est invalide.";
  }
  if (!values.phone.trim()) errors.phone = "Le téléphone est requis.";
  if (!values.vehicle.trim()) errors.vehicle = "Veuillez sélectionner un véhicule.";
  if (!values.startDate) errors.startDate = "La date de départ est requise.";
  if (!values.endDate) errors.endDate = "La date de retour est requise.";
  if (values.startDate && values.endDate && values.endDate < values.startDate) {
    errors.endDate = "La date de retour doit être postérieure à la date de départ.";
  }
  if (!values.location.trim()) errors.location = "Le lieu souhaité est requis.";
  if (!values.driverAge.trim()) {
    errors.driverAge = "L'âge du conducteur est requis.";
  } else if (Number(values.driverAge) < 18 || Number(values.driverAge) > 99) {
    errors.driverAge = "Veuillez indiquer un âge valide.";
  }
  if (!values.consent) errors.consent = "Le consentement est requis pour envoyer la demande.";

  return errors;
}

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.firstName.trim()) errors.firstName = "Le prénom est requis.";
  if (!values.lastName.trim()) errors.lastName = "Le nom est requis.";
  if (!values.email.trim()) {
    errors.email = "L'e-mail est requis.";
  } else if (!EMAIL_REGEX.test(values.email)) {
    errors.email = "Le format de l'e-mail est invalide.";
  }
  if (!values.phone.trim()) errors.phone = "Le téléphone est requis.";
  if (!values.subject.trim()) errors.subject = "Le sujet est requis.";
  if (!values.message.trim()) errors.message = "Le message est requis.";
  if (!values.consent) errors.consent = "Le consentement est requis pour envoyer le message.";

  return errors;
}

export function validateLongTermForm(values: LongTermFormValues): LongTermFormErrors {
  const errors: LongTermFormErrors = {};

  if (!values.firstName.trim()) errors.firstName = "Le prénom est requis.";
  if (!values.lastName.trim()) errors.lastName = "Le nom est requis.";
  if (!values.email.trim()) {
    errors.email = "L'e-mail est requis.";
  } else if (!EMAIL_REGEX.test(values.email)) {
    errors.email = "Le format de l'e-mail est invalide.";
  }
  if (!values.phone.trim()) errors.phone = "Le téléphone est requis.";
  if (!values.profile.trim()) errors.profile = "Veuillez préciser votre profil.";
  if (!values.duration.trim()) errors.duration = "Veuillez préciser la durée souhaitée.";
  if (!values.consent) errors.consent = "Le consentement est requis pour envoyer la demande.";

  return errors;
}

/**
 * Validation du formulaire de réservation du gabarit "showroom".
 * Reprend les règles communes de `validateBookingForm` et y ajoute les
 * contraintes propres à une collection de supercars :
 * - âge minimum variable selon le modèle choisi ;
 * - date de départ jamais dans le passé.
 */
export function validateShowroomRequest(
  values: BookingFormValues,
  minDriverAge = 21,
): BookingFormErrors {
  const errors = validateBookingForm(values);

  const age = Number(values.driverAge);
  if (values.driverAge.trim() && Number.isFinite(age) && age < minDriverAge) {
    errors.driverAge = `Ce modèle est confié aux conducteurs de ${minDriverAge} ans et plus.`;
  }

  if (values.startDate && values.startDate < todayIso()) {
    errors.startDate = "La date de départ ne peut pas être dans le passé.";
  }

  return errors;
}

/** Restreint un ensemble d'erreurs aux seuls champs d'une étape du formulaire. */
export function pickErrors<T extends Record<string, string | undefined>>(
  errors: T,
  fields: Array<keyof T>,
): T {
  const picked = {} as T;
  for (const field of fields) {
    if (errors[field]) picked[field] = errors[field];
  }
  return picked;
}

/**
 * Validation du formulaire de rendez-vous du gabarit "garage" :
 * - la date souhaitée ne peut pas être dans le passé ;
 * - marque et modèle du véhicule sont requis pour préparer l'intervention.
 */
export function validateAppointmentForm(values: AppointmentFormValues): AppointmentFormErrors {
  const errors: AppointmentFormErrors = {};

  if (!values.service.trim()) errors.service = "Veuillez sélectionner une prestation.";
  if (!values.vehicleBrand.trim()) errors.vehicleBrand = "La marque du véhicule est requise.";
  if (!values.vehicleModel.trim()) errors.vehicleModel = "Le modèle du véhicule est requis.";
  if (!values.preferredDate) {
    errors.preferredDate = "Veuillez indiquer une date souhaitée.";
  } else if (values.preferredDate < todayIso()) {
    errors.preferredDate = "La date souhaitée ne peut pas être dans le passé.";
  }
  if (!values.firstName.trim()) errors.firstName = "Le prénom est requis.";
  if (!values.lastName.trim()) errors.lastName = "Le nom est requis.";
  if (!values.email.trim()) {
    errors.email = "L'e-mail est requis.";
  } else if (!EMAIL_REGEX.test(values.email)) {
    errors.email = "Le format de l'e-mail est invalide.";
  }
  if (!values.phone.trim()) errors.phone = "Le téléphone est requis.";
  if (!values.consent) errors.consent = "Le consentement est requis pour envoyer la demande.";

  return errors;
}
