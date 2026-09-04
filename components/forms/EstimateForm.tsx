"use client";

import { FormEvent, useId, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import type { PropertyType } from "@/types/property";
import { EstimateFormErrors, EstimateFormValues, PropertyConditionInput } from "@/types/booking";
import { validateEstimateForm } from "@/lib/validation";
import { submitEstimateRequest } from "@/lib/booking-actions";
import { getWhatsAppUrl, isWhatsAppEnabled } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/icons";
import { ImmobilierButton } from "@/components/immobilier/ImmobilierButton";
import { cn } from "@/lib/utils";

const propertyTypeOptions: PropertyType[] = ["Appartement", "Villa", "Terrain", "Promotion"];

const conditionOptions: { value: PropertyConditionInput; label: string }[] = [
  { value: "neuf", label: "Neuf / récent" },
  { value: "tres-bon", label: "Très bon état" },
  { value: "bon", label: "Bon état" },
  { value: "a-renover", label: "À rénover" },
];

const initialValues: EstimateFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  propertyType: "",
  surface: "",
  location: "",
  condition: "tres-bon",
  message: "",
  consent: false,
};

/**
 * Formulaire d'estimation gratuite : type de bien, surface et localisation
 * suffisent à préparer une première estimation, envoyée sous 24h par
 * l'équipe. Un récapitulatif WhatsApp pré-rempli est proposé en alternative
 * (voir SellVehicleForm pour le même parti pris côté gabarit "dealer").
 */
export function EstimateForm() {
  const [values, setValues] = useState<EstimateFormValues>(initialValues);
  const [errors, setErrors] = useState<EstimateFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const formId = useId();

  function updateField<K extends keyof EstimateFormValues>(field: K, value: EstimateFormValues[K]) {
    setValues((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validateEstimateForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    setSuccessMessage(null);
    try {
      const result = await submitEstimateRequest(values);
      if (result.success) {
        setSuccessMessage(result.message);
        setValues(initialValues);
        setErrors({});
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  const conditionLabel = conditionOptions.find((option) => option.value === values.condition)?.label ?? "";
  const recapMessage = `Bonjour ${siteConfig.name}, je souhaite une estimation gratuite pour mon bien : ${
    values.propertyType || "[type de bien]"
  } de ${values.surface || "[surface]"} m² à ${values.location || "[localisation]"} (${conditionLabel}).`;

  if (successMessage) {
    return (
      <div role="status" className="rounded-xl border border-brand-accent/40 bg-brand-accent/5 p-8">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
          <Check className="h-5 w-5" aria-hidden="true" />
        </span>
        <p className="font-display mt-5 text-xl font-semibold text-brand-ivory">Demande envoyée.</p>
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
      className="rounded-xl border border-brand-line bg-brand-charcoal p-6 shadow-sm sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field id={`${formId}-propertyType`} label="Type de bien" error={errors.propertyType} required>
          <select
            id={`${formId}-propertyType`}
            value={values.propertyType}
            onChange={(event) => updateField("propertyType", event.target.value)}
            aria-invalid={!!errors.propertyType}
            className={inputClass(!!errors.propertyType)}
          >
            <option value="">Sélectionner un type de bien</option>
            {propertyTypeOptions.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>

        <Field id={`${formId}-surface`} label="Surface (m²)" error={errors.surface} required>
          <input
            id={`${formId}-surface`}
            type="number"
            inputMode="numeric"
            placeholder="Ex. 120"
            value={values.surface}
            onChange={(event) => updateField("surface", event.target.value)}
            aria-invalid={!!errors.surface}
            className={inputClass(!!errors.surface)}
          />
        </Field>

        <Field id={`${formId}-location`} label="Localisation" error={errors.location} required>
          <input
            id={`${formId}-location`}
            type="text"
            placeholder="Ex. Cologny, Genève"
            value={values.location}
            onChange={(event) => updateField("location", event.target.value)}
            aria-invalid={!!errors.location}
            className={inputClass(!!errors.location)}
          />
        </Field>

        <Field id={`${formId}-condition`} label="État général" required>
          <select
            id={`${formId}-condition`}
            value={values.condition}
            onChange={(event) => updateField("condition", event.target.value as PropertyConditionInput)}
            className={inputClass(false)}
          >
            {conditionOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
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
            placeholder="Nombre de pièces, année de construction, travaux récents…"
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
            J&apos;accepte que mes informations soient utilisées pour traiter ma demande
            d&apos;estimation, conformément à la{" "}
            <a href="/confidentialite" className="text-brand-accent hover:underline">
              politique de confidentialité
            </a>
            .
          </span>
        </label>
        {errors.consent ? <ErrorText>{errors.consent}</ErrorText> : null}
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <ImmobilierButton type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Envoi en cours…
            </>
          ) : (
            "Recevoir mon estimation"
          )}
        </ImmobilierButton>

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
