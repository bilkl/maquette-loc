"use client";

import { FormEvent, useId, useState } from "react";
import { Loader2 } from "lucide-react";
import { LongTermFormErrors, LongTermFormValues } from "@/types/booking";
import { validateLongTermForm } from "@/lib/validation";
import { submitLongTermRequest } from "@/lib/booking-actions";
import { Button } from "@/components/ui/Button";
import { vehicles } from "@/data/vehicles";

const initialValues: LongTermFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  profile: "",
  duration: "",
  vehicle: "",
  message: "",
  consent: false,
};

export function LongTermForm() {
  const [values, setValues] = useState<LongTermFormValues>(initialValues);
  const [errors, setErrors] = useState<LongTermFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const formId = useId();

  function updateField<K extends keyof LongTermFormValues>(field: K, value: LongTermFormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validateLongTermForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    setSuccessMessage(null);
    try {
      const result = await submitLongTermRequest(values);
      if (result.success) {
        setSuccessMessage(result.message);
        setValues(initialValues);
        setErrors({});
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {successMessage ? (
        <p
          role="status"
          className="rounded-xl border border-brand-red/40 bg-brand-red/10 px-4 py-3 text-sm text-brand-red-soft"
        >
          {successMessage}
        </p>
      ) : null}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formId}-firstName`} className="text-xs font-medium uppercase tracking-wide text-brand-silver">
            Prénom <span className="text-brand-red">*</span>
          </label>
          <input
            id={`${formId}-firstName`}
            type="text"
            autoComplete="given-name"
            value={values.firstName}
            onChange={(e) => updateField("firstName", e.target.value)}
            aria-invalid={!!errors.firstName}
            className={inputClass(!!errors.firstName)}
          />
          {errors.firstName ? <p role="alert" className="mt-1.5 text-sm text-red-400">{errors.firstName}</p> : null}
        </div>

        <div>
          <label htmlFor={`${formId}-lastName`} className="text-xs font-medium uppercase tracking-wide text-brand-silver">
            Nom <span className="text-brand-red">*</span>
          </label>
          <input
            id={`${formId}-lastName`}
            type="text"
            autoComplete="family-name"
            value={values.lastName}
            onChange={(e) => updateField("lastName", e.target.value)}
            aria-invalid={!!errors.lastName}
            className={inputClass(!!errors.lastName)}
          />
          {errors.lastName ? <p role="alert" className="mt-1.5 text-sm text-red-400">{errors.lastName}</p> : null}
        </div>

        <div>
          <label htmlFor={`${formId}-email`} className="text-xs font-medium uppercase tracking-wide text-brand-silver">
            E-mail <span className="text-brand-red">*</span>
          </label>
          <input
            id={`${formId}-email`}
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => updateField("email", e.target.value)}
            aria-invalid={!!errors.email}
            className={inputClass(!!errors.email)}
          />
          {errors.email ? <p role="alert" className="mt-1.5 text-sm text-red-400">{errors.email}</p> : null}
        </div>

        <div>
          <label htmlFor={`${formId}-phone`} className="text-xs font-medium uppercase tracking-wide text-brand-silver">
            Téléphone <span className="text-brand-red">*</span>
          </label>
          <input
            id={`${formId}-phone`}
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            aria-invalid={!!errors.phone}
            className={inputClass(!!errors.phone)}
          />
          {errors.phone ? <p role="alert" className="mt-1.5 text-sm text-red-400">{errors.phone}</p> : null}
        </div>

        <div>
          <label htmlFor={`${formId}-profile`} className="text-xs font-medium uppercase tracking-wide text-brand-silver">
            Votre profil <span className="text-brand-red">*</span>
          </label>
          <input
            id={`${formId}-profile`}
            type="text"
            placeholder="Particulier, indépendant, entreprise…"
            value={values.profile}
            onChange={(e) => updateField("profile", e.target.value)}
            aria-invalid={!!errors.profile}
            className={inputClass(!!errors.profile)}
          />
          {errors.profile ? <p role="alert" className="mt-1.5 text-sm text-red-400">{errors.profile}</p> : null}
        </div>

        <div>
          <label htmlFor={`${formId}-duration`} className="text-xs font-medium uppercase tracking-wide text-brand-silver">
            Durée souhaitée <span className="text-brand-red">*</span>
          </label>
          <input
            id={`${formId}-duration`}
            type="text"
            placeholder="Ex : 6 mois, 12 mois…"
            value={values.duration}
            onChange={(e) => updateField("duration", e.target.value)}
            aria-invalid={!!errors.duration}
            className={inputClass(!!errors.duration)}
          />
          {errors.duration ? <p role="alert" className="mt-1.5 text-sm text-red-400">{errors.duration}</p> : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={`${formId}-vehicle`} className="text-xs font-medium uppercase tracking-wide text-brand-silver">
            Véhicule d&apos;intérêt (facultatif)
          </label>
          <select
            id={`${formId}-vehicle`}
            value={values.vehicle}
            onChange={(e) => updateField("vehicle", e.target.value)}
            className={inputClass(false)}
          >
            <option value="">Aucune préférence</option>
            {vehicles.map((vehicle) => (
              <option key={vehicle.slug} value={vehicle.slug}>
                {vehicle.brand} {vehicle.model}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={`${formId}-message`} className="text-xs font-medium uppercase tracking-wide text-brand-silver">
          Message (facultatif)
        </label>
        <textarea
          id={`${formId}-message`}
          rows={4}
          value={values.message}
          onChange={(e) => updateField("message", e.target.value)}
          className={inputClass(false)}
        />
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-brand-silver">
          <input
            type="checkbox"
            checked={values.consent}
            onChange={(e) => updateField("consent", e.target.checked)}
            aria-invalid={!!errors.consent}
            className="mt-1 h-4 w-4 shrink-0 rounded border-brand-line bg-brand-black text-brand-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red"
          />
          <span>
            J&apos;accepte que mes informations soient utilisées pour traiter ma demande,
            conformément à la{" "}
            <a href="/confidentialite" className="text-brand-red hover:underline">
              politique de confidentialité
            </a>
            .
          </span>
        </label>
        {errors.consent ? <p role="alert" className="mt-2 text-sm text-red-400">{errors.consent}</p> : null}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Envoi en cours…
          </>
        ) : (
          "Envoyer ma demande personnalisée"
        )}
      </Button>
    </form>
  );
}

function inputClass(hasError: boolean): string {
  return [
    "w-full rounded-lg border bg-brand-black px-3 py-2.5 text-sm text-brand-ivory placeholder:text-brand-silver/60",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red",
    hasError ? "border-red-400" : "border-brand-line",
  ].join(" ");
}
