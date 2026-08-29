"use client";

import { FormEvent, useEffect, useId, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import type { GarageService } from "@/data/garage";
import { AppointmentFormErrors, AppointmentFormValues } from "@/types/booking";
import { validateAppointmentForm } from "@/lib/validation";
import { submitAppointmentRequest } from "@/lib/booking-actions";
import { todayIso } from "@/lib/utils";
import { getWhatsAppUrl, isWhatsAppEnabled } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/icons";
import { GarageButton } from "@/components/garage/GarageButton";
import { cn } from "@/lib/utils";

const OTHER_SERVICE = "autre";

const initialValues: AppointmentFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "",
  vehicleBrand: "",
  vehicleModel: "",
  preferredDate: "",
  preferredTime: "peu-importe",
  message: "",
  consent: false,
};

interface GarageAppointmentFormProps {
  services: GarageService[];
  /** Pré-sélectionne une prestation (ex. depuis /prestations#<slug>) */
  defaultServiceSlug?: string;
}

/**
 * Formulaire de rendez-vous "intelligent" : la prestation vient directement
 * du catalogue de services de l'agence (pas de texte libre à deviner), la
 * date minimale est la journée en cours, et un récapitulatif WhatsApp
 * pré-rempli est proposé pour ceux qui préfèrent finaliser par message plutôt
 * que par formulaire — utile pour une demande urgente (pneu crevé, panne).
 */
export function GarageAppointmentForm({ services, defaultServiceSlug }: GarageAppointmentFormProps) {
  const [values, setValues] = useState<AppointmentFormValues>({
    ...initialValues,
    service: defaultServiceSlug ?? "",
  });
  const [errors, setErrors] = useState<AppointmentFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const formId = useId();

  // Page prérendue statiquement : voir la même précaution dans
  // ShowroomBookingForm — ne calculer "aujourd'hui" qu'après le montage pour
  // éviter un mismatch d'hydratation entre le HTML figé au build et le client.
  const [minDate, setMinDate] = useState<string | undefined>(undefined);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMinDate(todayIso());
  }, []);

  function updateField<K extends keyof AppointmentFormValues>(
    field: K,
    value: AppointmentFormValues[K],
  ) {
    setValues((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validateAppointmentForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    setSuccessMessage(null);
    try {
      const result = await submitAppointmentRequest(values);
      if (result.success) {
        setSuccessMessage(result.message);
        setValues(initialValues);
        setErrors({});
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  const selectedService = services.find((service) => service.slug === values.service);
  const serviceLabel = selectedService?.name ?? "une prestation";
  const timeLabel =
    values.preferredTime === "matin"
      ? "le matin"
      : values.preferredTime === "apres-midi"
        ? "l'après-midi"
        : "à tout moment";
  const recapMessage = `Bonjour ${siteConfig.name}, je souhaite prendre rendez-vous pour ${serviceLabel}${
    values.vehicleBrand ? ` (${values.vehicleBrand}${values.vehicleModel ? ` ${values.vehicleModel}` : ""})` : ""
  }${values.preferredDate ? `, si possible le ${values.preferredDate} ${timeLabel}` : ""}.`;

  if (successMessage) {
    return (
      <div role="status" className="rounded-xl border border-brand-accent/40 bg-brand-accent/5 p-8">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
          <Check className="h-5 w-5" aria-hidden="true" />
        </span>
        <p className="mt-5 text-xl font-bold text-brand-ivory">Demande envoyée.</p>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-brand-silver">{successMessage}</p>
        <button
          type="button"
          onClick={() => setSuccessMessage(null)}
          className="mt-6 rounded-md border border-brand-line px-5 py-2.5 text-sm font-semibold text-brand-ivory transition-colors hover:border-brand-accent hover:text-brand-accent"
        >
          Faire une autre demande
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl border border-brand-line bg-brand-black p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field id={`${formId}-service`} label="Prestation souhaitée" error={errors.service} required>
          <select
            id={`${formId}-service`}
            value={values.service}
            onChange={(event) => updateField("service", event.target.value)}
            aria-invalid={!!errors.service}
            className={inputClass(!!errors.service)}
          >
            <option value="">Sélectionner une prestation</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.name}
              </option>
            ))}
            <option value={OTHER_SERVICE}>Autre / je ne sais pas encore</option>
          </select>
        </Field>

        <div className="grid grid-cols-2 gap-3">
          <Field id={`${formId}-brand`} label="Marque" error={errors.vehicleBrand} required>
            <input
              id={`${formId}-brand`}
              type="text"
              placeholder="Ex. Volkswagen"
              value={values.vehicleBrand}
              onChange={(event) => updateField("vehicleBrand", event.target.value)}
              aria-invalid={!!errors.vehicleBrand}
              className={inputClass(!!errors.vehicleBrand)}
            />
          </Field>
          <Field id={`${formId}-model`} label="Modèle" error={errors.vehicleModel} required>
            <input
              id={`${formId}-model`}
              type="text"
              placeholder="Ex. Golf"
              value={values.vehicleModel}
              onChange={(event) => updateField("vehicleModel", event.target.value)}
              aria-invalid={!!errors.vehicleModel}
              className={inputClass(!!errors.vehicleModel)}
            />
          </Field>
        </div>

        <Field id={`${formId}-date`} label="Date souhaitée" error={errors.preferredDate} required>
          <input
            id={`${formId}-date`}
            type="date"
            min={minDate}
            value={values.preferredDate}
            onChange={(event) => updateField("preferredDate", event.target.value)}
            aria-invalid={!!errors.preferredDate}
            className={inputClass(!!errors.preferredDate)}
          />
        </Field>

        <Field id={`${formId}-time`} label="Créneau préféré">
          <select
            id={`${formId}-time`}
            value={values.preferredTime}
            onChange={(event) =>
              updateField("preferredTime", event.target.value as AppointmentFormValues["preferredTime"])
            }
            className={inputClass(false)}
          >
            <option value="peu-importe">Peu importe</option>
            <option value="matin">Matin</option>
            <option value="apres-midi">Après-midi</option>
          </select>
        </Field>

        <Field id={`${formId}-firstName`} label="Prénom" error={errors.firstName} required>
          <input
            id={`${formId}-firstName`}
            type="text"
            autoComplete="given-name"
            value={values.firstName}
            onChange={(event) => updateField("firstName", event.target.value)}
            aria-invalid={!!errors.firstName}
            className={inputClass(!!errors.firstName)}
          />
        </Field>

        <Field id={`${formId}-lastName`} label="Nom" error={errors.lastName} required>
          <input
            id={`${formId}-lastName`}
            type="text"
            autoComplete="family-name"
            value={values.lastName}
            onChange={(event) => updateField("lastName", event.target.value)}
            aria-invalid={!!errors.lastName}
            className={inputClass(!!errors.lastName)}
          />
        </Field>

        <Field id={`${formId}-email`} label="E-mail" error={errors.email} required>
          <input
            id={`${formId}-email`}
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            aria-invalid={!!errors.email}
            className={inputClass(!!errors.email)}
          />
        </Field>

        <Field id={`${formId}-phone`} label="Téléphone" error={errors.phone} required>
          <input
            id={`${formId}-phone`}
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            aria-invalid={!!errors.phone}
            className={inputClass(!!errors.phone)}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field id={`${formId}-message`} label="Précisions (facultatif)">
          <textarea
            id={`${formId}-message`}
            rows={3}
            placeholder="Symptôme, bruit, message d'alerte au tableau de bord…"
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
            className={inputClass(false)}
          />
        </Field>
      </div>

      <div className="mt-6">
        <label className="flex items-start gap-3 text-sm text-brand-silver">
          <input
            type="checkbox"
            checked={values.consent}
            onChange={(event) => updateField("consent", event.target.checked)}
            aria-invalid={!!errors.consent}
            className="mt-1 h-4 w-4 shrink-0 rounded border-brand-line accent-[var(--color-brand-accent)]"
          />
          <span>
            J&apos;accepte que mes informations soient utilisées pour traiter ma demande de
            rendez-vous, conformément à la{" "}
            <a href="/confidentialite" className="text-brand-accent hover:underline">
              politique de confidentialité
            </a>
            .
          </span>
        </label>
        {errors.consent ? <ErrorText>{errors.consent}</ErrorText> : null}
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <GarageButton type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Envoi en cours…
            </>
          ) : (
            "Envoyer la demande de rendez-vous"
          )}
        </GarageButton>

        {isWhatsAppEnabled() ? (
          <a
            href={getWhatsAppUrl(recapMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-silver transition-colors hover:text-brand-accent"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" aria-hidden="true" />
            Ou écrire directement sur WhatsApp
          </a>
        ) : null}
      </div>
    </form>
  );
}

function inputClass(hasError: boolean): string {
  return cn(
    "w-full rounded-md border bg-brand-black px-3 py-2.5 text-sm text-brand-ivory placeholder:text-brand-silver/60",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent",
    hasError ? "border-red-500" : "border-brand-line",
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return (
    <p role="alert" className="mt-1.5 text-sm text-red-600">
      {children}
    </p>
  );
}

function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-wide text-brand-silver">
        {label}
        {required ? <span className="text-brand-accent"> *</span> : null}
      </label>
      <div className="mt-1.5">{children}</div>
      {error ? <ErrorText>{error}</ErrorText> : null}
    </div>
  );
}
