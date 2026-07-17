import { BookingFormErrors, BookingFormValues, ContactFormErrors, ContactFormValues, LongTermFormErrors, LongTermFormValues } from "@/types/booking";

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
