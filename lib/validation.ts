import { AppointmentFormErrors, AppointmentFormValues, BookingFormErrors, BookingFormValues, ContactFormErrors, ContactFormValues, ElectricienQuoteFormErrors, ElectricienQuoteFormValues, LongTermFormErrors, LongTermFormValues, MenuiserieQuoteFormErrors, MenuiserieQuoteFormValues, PlombierQuoteFormErrors, PlombierQuoteFormValues, SellVehicleFormErrors, SellVehicleFormValues } from "@/types/booking";
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

/**
 * Validation du formulaire de devis du gabarit "electricien" :
 * - la date souhaitée ne peut pas être dans le passé, sauf demande marquée urgente
 *   (une urgence n'attend pas un créneau planifié — voir isUrgent) ;
 * - le type d'intervention est requis pour orienter la demande.
 */
export function validateElectricienQuoteForm(
  values: ElectricienQuoteFormValues,
): ElectricienQuoteFormErrors {
  const errors: ElectricienQuoteFormErrors = {};

  if (!values.interventionType.trim()) errors.interventionType = "Veuillez sélectionner un type d'intervention.";
  if (!values.isUrgent) {
    if (!values.preferredDate) {
      errors.preferredDate = "Veuillez indiquer une date souhaitée.";
    } else if (values.preferredDate < todayIso()) {
      errors.preferredDate = "La date souhaitée ne peut pas être dans le passé.";
    }
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

/**
 * Validation du formulaire de devis du gabarit "plombier" : mêmes règles que
 * le gabarit "electricien" (voir validateElectricienQuoteForm) — une urgence
 * (fuite d'eau) dispense de choisir une date.
 */
export function validatePlombierQuoteForm(values: PlombierQuoteFormValues): PlombierQuoteFormErrors {
  const errors: PlombierQuoteFormErrors = {};

  if (!values.problemType.trim()) errors.problemType = "Veuillez sélectionner un type de problème.";
  if (!values.isUrgent) {
    if (!values.preferredDate) {
      errors.preferredDate = "Veuillez indiquer une date souhaitée.";
    } else if (values.preferredDate < todayIso()) {
      errors.preferredDate = "La date souhaitée ne peut pas être dans le passé.";
    }
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

/**
 * Validation du formulaire de devis du gabarit "menuiserie" : pas de champ
 * "urgence" (contrairement aux gabarits electricien/plombier — un projet de
 * menuiserie ne se traite pas dans l'urgence), la disponibilité pour une
 * visite reste facultative, mais la description du projet est requise pour
 * qu'un devis puisse être préparé.
 */
export function validateMenuiserieQuoteForm(
  values: MenuiserieQuoteFormValues,
): MenuiserieQuoteFormErrors {
  const errors: MenuiserieQuoteFormErrors = {};

  if (!values.projectType.trim()) errors.projectType = "Veuillez sélectionner un type de projet.";
  if (!values.description.trim()) errors.description = "Veuillez décrire brièvement votre projet.";
  if (values.preferredDate && values.preferredDate < todayIso()) {
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

const CURRENT_YEAR = new Date().getFullYear();

/**
 * Validation du formulaire "vendre ou reprendre mon véhicule" du gabarit
 * "dealer" : année plausible et kilométrage numérique, en plus des règles
 * communes de coordonnées.
 */
export function validateSellVehicleForm(values: SellVehicleFormValues): SellVehicleFormErrors {
  const errors: SellVehicleFormErrors = {};

  if (!values.vehicleBrand.trim()) errors.vehicleBrand = "La marque du véhicule est requise.";
  if (!values.vehicleModel.trim()) errors.vehicleModel = "Le modèle du véhicule est requis.";

  const year = Number(values.year);
  if (!values.year.trim()) {
    errors.year = "L'année du véhicule est requise.";
  } else if (!Number.isInteger(year) || year < 1980 || year > CURRENT_YEAR + 1) {
    errors.year = "Veuillez indiquer une année valide.";
  }

  const mileage = Number(values.mileage);
  if (!values.mileage.trim()) {
    errors.mileage = "Le kilométrage est requis.";
  } else if (!Number.isFinite(mileage) || mileage < 0) {
    errors.mileage = "Veuillez indiquer un kilométrage valide.";
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
