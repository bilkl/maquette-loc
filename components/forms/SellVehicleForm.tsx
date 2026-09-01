"use client";

import { FormEvent, useId, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SellVehicleFormErrors, SellVehicleFormValues, VehicleConditionInput } from "@/types/booking";
import { validateSellVehicleForm } from "@/lib/validation";
import { submitSellVehicleRequest } from "@/lib/booking-actions";
import { getWhatsAppUrl, isWhatsAppEnabled } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/icons";
import { DealerButton } from "@/components/dealer/DealerButton";
import { cn } from "@/lib/utils";

const conditionOptions: { value: VehicleConditionInput; label: string }[] = [
  { value: "excellent", label: "Excellent état" },
  { value: "tres-bon", label: "Très bon état" },
  { value: "bon", label: "Bon état" },
  { value: "a-revoir", label: "À revoir / défauts connus" },
];

const initialValues: SellVehicleFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  vehicleBrand: "",
  vehicleModel: "",
  year: "",
  mileage: "",
  condition: "tres-bon",
  message: "",
  consent: false,
};

/**
 * Formulaire "vendre ou reprendre mon véhicule" : marque, modèle, année,
 * kilométrage et état suffisent à préparer une première estimation, envoyée
 * sous 24h par l'équipe. Un récapitulatif WhatsApp pré-rempli est proposé en
 * alternative pour une réponse plus rapide.
 */
export function SellVehicleForm() {
  const [values, setValues] = useState<SellVehicleFormValues>(initialValues);
  const [errors, setErrors] = useState<SellVehicleFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const formId = useId();

  function updateField<K extends keyof SellVehicleFormValues>(field: K, value: SellVehicleFormValues[K]) {
    setValues((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validateSellVehicleForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    setSuccessMessage(null);
    try {
      const result = await submitSellVehicleRequest(values);
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
  const recapMessage = `Bonjour ${siteConfig.name}, je souhaite une estimation pour mon véhicule ${
    values.vehicleBrand || "[marque]"
  } ${values.vehicleModel || "[modèle]"}${values.year ? ` de ${values.year}` : ""}${
    values.mileage ? `, ${values.mileage} km` : ""
  } (${conditionLabel}).`;

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
    <form onSubmit={handleSubmit} noValidate className="rounded-xl border border-brand-line bg-brand-black p-6 shadow-sm sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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

        <Field id={`${formId}-year`} label="Année" error={errors.year} required>
          <input
            id={`${formId}-year`}
            type="number"
            inputMode="numeric"
            placeholder="Ex. 2019"
            value={values.year}
            onChange={(event) => updateField("year", event.target.value)}
            aria-invalid={!!errors.year}
            className={inputClass(!!errors.year)}
          />
        </Field>

        <Field id={`${formId}-mileage`} label="Kilométrage" error={errors.mileage} required>
          <input
            id={`${formId}-mileage`}
            type="number"
            inputMode="numeric"
            placeholder="Ex. 65000"
            value={values.mileage}
            onChange={(event) => updateField("mileage", event.target.value)}
            aria-invalid={!!errors.mileage}
            className={inputClass(!!errors.mileage)}
          />
        </Field>

        <div className="sm:col-span-2">
          <Field id={`${formId}-condition`} label="État général" required>
            <select
              id={`${formId}-condition`}
              value={values.condition}
              onChange={(event) => updateField("condition", event.target.value as VehicleConditionInput)}
              className={inputClass(false)}
            >
              {conditionOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </Field>
        </div>

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
            placeholder="Options, historique d'entretien, défauts à signaler…"
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
        <DealerButton type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Envoi en cours…
            </>
          ) : (
            "Recevoir mon estimation"
          )}
        </DealerButton>

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
