"use client";

import { FormEvent, useEffect, useId, useState } from "react";
import { Check, Droplet, Loader2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import type { PlombierService } from "@/data/plombier";
import { PlombierQuoteFormErrors, PlombierQuoteFormValues } from "@/types/booking";
import { validatePlombierQuoteForm } from "@/lib/validation";
import { submitPlombierQuoteRequest } from "@/lib/booking-actions";
import { todayIso } from "@/lib/utils";
import { getWhatsAppUrl, isWhatsAppEnabled } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/icons";
import { PlombierButton } from "@/components/plombier/PlombierButton";
import { cn } from "@/lib/utils";

const OTHER_PROBLEM = "autre";

const initialValues: PlombierQuoteFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  problemType: "",
  isUrgent: false,
  preferredDate: "",
  preferredTime: "peu-importe",
  message: "",
  consent: false,
};

interface PlombierQuoteFormProps {
  services: PlombierService[];
  /** Pré-sélectionne un type de problème (ex. depuis /prestations#<slug>) */
  defaultProblemSlug?: string;
}

/**
 * Formulaire de devis "intelligent" : le type de problème vient directement
 * du catalogue de prestations, une case "urgence immédiate" (fuite d'eau)
 * dispense de choisir une date/un créneau, et un récapitulatif WhatsApp
 * pré-rempli est proposé pour ceux qui préfèrent finaliser par message.
 */
export function PlombierQuoteForm({ services, defaultProblemSlug }: PlombierQuoteFormProps) {
  const [values, setValues] = useState<PlombierQuoteFormValues>({
    ...initialValues,
    problemType: defaultProblemSlug ?? "",
  });
  const [errors, setErrors] = useState<PlombierQuoteFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const formId = useId();

  // Page prérendue statiquement : ne calculer "aujourd'hui" qu'après le
  // montage pour éviter un mismatch d'hydratation (voir GarageAppointmentForm).
  const [minDate, setMinDate] = useState<string | undefined>(undefined);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMinDate(todayIso());
  }, []);

  function updateField<K extends keyof PlombierQuoteFormValues>(
    field: K,
    value: PlombierQuoteFormValues[K],
  ) {
    setValues((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validatePlombierQuoteForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    setSuccessMessage(null);
    try {
      const result = await submitPlombierQuoteRequest(values);
      if (result.success) {
        setSuccessMessage(result.message);
        setValues(initialValues);
        setErrors({});
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  const selectedProblem = services.find((service) => service.slug === values.problemType);
  const problemLabel = selectedProblem?.name ?? "une intervention";
  const timeLabel =
    values.preferredTime === "matin"
      ? "le matin"
      : values.preferredTime === "apres-midi"
        ? "l'après-midi"
        : "à tout moment";
  const recapMessage = values.isUrgent
    ? `Bonjour ${siteConfig.name}, j'ai une urgence : ${problemLabel}. Merci de me rappeler rapidement.`
    : `Bonjour ${siteConfig.name}, je souhaite un devis pour ${problemLabel}${
        values.preferredDate ? `, si possible le ${values.preferredDate} ${timeLabel}` : ""
      }.`;

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
      <label
        className={cn(
          "flex cursor-pointer items-start gap-3 rounded-lg border p-4 text-sm transition-colors",
          values.isUrgent
            ? "border-orange-600 bg-orange-600/10 text-brand-ivory"
            : "border-brand-line text-brand-silver hover:border-orange-600/60",
        )}
      >
        <input
          type="checkbox"
          checked={values.isUrgent}
          onChange={(event) => updateField("isUrgent", event.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 rounded border-brand-line accent-orange-600"
        />
        <span className="flex items-start gap-2">
          <Droplet className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" aria-hidden="true" />
          Urgence immédiate (fuite d&apos;eau) — pas besoin de proposer une date, contactez-moi dès
          que possible.
        </span>
      </label>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field id={`${formId}-problemType`} label="Type de problème" error={errors.problemType} required>
          <select
            id={`${formId}-problemType`}
            value={values.problemType}
            onChange={(event) => updateField("problemType", event.target.value)}
            aria-invalid={!!errors.problemType}
            className={inputClass(!!errors.problemType)}
          >
            <option value="">Sélectionner un type de problème</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.name}
              </option>
            ))}
            <option value={OTHER_PROBLEM}>Autre / je ne sais pas encore</option>
          </select>
        </Field>

        {!values.isUrgent ? (
          <>
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
                  updateField(
                    "preferredTime",
                    event.target.value as PlombierQuoteFormValues["preferredTime"],
                  )
                }
                className={inputClass(false)}
              >
                <option value="peu-importe">Peu importe</option>
                <option value="matin">Matin</option>
                <option value="apres-midi">Après-midi</option>
              </select>
            </Field>
          </>
        ) : null}

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
            placeholder="Localisation du problème, type de logement, contexte…"
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
            J&apos;accepte que mes informations soient utilisées pour traiter ma demande,
            conformément à la{" "}
            <a href="/confidentialite" className="text-brand-accent hover:underline">
              politique de confidentialité
            </a>
            .
          </span>
        </label>
        {errors.consent ? <ErrorText>{errors.consent}</ErrorText> : null}
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <PlombierButton type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Envoi en cours…
            </>
          ) : (
            "Envoyer la demande"
          )}
        </PlombierButton>

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
      <label htmlFor={id} className="text-sm font-semibold uppercase tracking-wide text-brand-silver">
        {label}
        {required ? <span className="text-brand-accent"> *</span> : null}
      </label>
      <div className="mt-1.5">{children}</div>
      {error ? <ErrorText>{error}</ErrorText> : null}
    </div>
  );
}
