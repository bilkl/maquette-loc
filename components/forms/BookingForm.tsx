"use client";

import { FormEvent, useId, useState } from "react";
import { Loader2 } from "lucide-react";
import { vehicles } from "@/data/vehicles";
import { BookingFormErrors, BookingFormValues } from "@/types/booking";
import { validateBookingForm } from "@/lib/validation";
import { submitBookingRequest } from "@/lib/booking-actions";
import { Button } from "@/components/ui/Button";

const initialValues: BookingFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  vehicle: "",
  startDate: "",
  endDate: "",
  rentalType: "courte-duree",
  location: "",
  driverAge: "",
  message: "",
  consent: false,
};

interface BookingFormProps {
  defaultVehicleSlug?: string;
}

export function BookingForm({ defaultVehicleSlug }: BookingFormProps) {
  const [values, setValues] = useState<BookingFormValues>({
    ...initialValues,
    vehicle: defaultVehicleSlug ?? "",
  });
  const [errors, setErrors] = useState<BookingFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const formId = useId();

  function updateField<K extends keyof BookingFormValues>(field: K, value: BookingFormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validateBookingForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setSuccessMessage(null);
    try {
      const result = await submitBookingRequest(values);
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
    <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-describedby={successMessage ? `${formId}-success` : undefined}>
      {successMessage ? (
        <p
          id={`${formId}-success`}
          role="status"
          className="rounded-xl border border-brand-red/40 bg-brand-red/10 px-4 py-3 text-sm text-brand-red-soft"
        >
          {successMessage}
        </p>
      ) : null}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          id={`${formId}-firstName`}
          label="Prénom"
          error={errors.firstName}
          required
        >
          <input
            id={`${formId}-firstName`}
            type="text"
            autoComplete="given-name"
            value={values.firstName}
            onChange={(e) => updateField("firstName", e.target.value)}
            className={inputClass(!!errors.firstName)}
            aria-invalid={!!errors.firstName}
          />
        </Field>

        <Field id={`${formId}-lastName`} label="Nom" error={errors.lastName} required>
          <input
            id={`${formId}-lastName`}
            type="text"
            autoComplete="family-name"
            value={values.lastName}
            onChange={(e) => updateField("lastName", e.target.value)}
            className={inputClass(!!errors.lastName)}
            aria-invalid={!!errors.lastName}
          />
        </Field>

        <Field id={`${formId}-email`} label="E-mail" error={errors.email} required>
          <input
            id={`${formId}-email`}
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={inputClass(!!errors.email)}
            aria-invalid={!!errors.email}
          />
        </Field>

        <Field id={`${formId}-phone`} label="Téléphone" error={errors.phone} required>
          <input
            id={`${formId}-phone`}
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={inputClass(!!errors.phone)}
            aria-invalid={!!errors.phone}
          />
        </Field>

        <Field id={`${formId}-vehicle`} label="Véhicule souhaité" error={errors.vehicle} required>
          <select
            id={`${formId}-vehicle`}
            value={values.vehicle}
            onChange={(e) => updateField("vehicle", e.target.value)}
            className={inputClass(!!errors.vehicle)}
            aria-invalid={!!errors.vehicle}
          >
            <option value="">Sélectionner un véhicule</option>
            {vehicles.map((vehicle) => (
              <option key={vehicle.slug} value={vehicle.slug}>
                {vehicle.brand} {vehicle.model}
              </option>
            ))}
          </select>
        </Field>

        <Field id={`${formId}-rentalType`} label="Type de location" required>
          <select
            id={`${formId}-rentalType`}
            value={values.rentalType}
            onChange={(e) => updateField("rentalType", e.target.value as BookingFormValues["rentalType"])}
            className={inputClass(false)}
          >
            <option value="courte-duree">Courte durée</option>
            <option value="longue-duree">Longue durée</option>
          </select>
        </Field>

        <Field id={`${formId}-startDate`} label="Date de départ" error={errors.startDate} required>
          <input
            id={`${formId}-startDate`}
            type="date"
            value={values.startDate}
            onChange={(e) => updateField("startDate", e.target.value)}
            className={inputClass(!!errors.startDate)}
            aria-invalid={!!errors.startDate}
          />
        </Field>

        <Field id={`${formId}-endDate`} label="Date de retour" error={errors.endDate} required>
          <input
            id={`${formId}-endDate`}
            type="date"
            value={values.endDate}
            onChange={(e) => updateField("endDate", e.target.value)}
            className={inputClass(!!errors.endDate)}
            aria-invalid={!!errors.endDate}
          />
        </Field>

        <Field id={`${formId}-location`} label="Lieu souhaité" error={errors.location} required>
          <input
            id={`${formId}-location`}
            type="text"
            placeholder="Ville de prise en charge"
            value={values.location}
            onChange={(e) => updateField("location", e.target.value)}
            className={inputClass(!!errors.location)}
            aria-invalid={!!errors.location}
          />
        </Field>

        <Field id={`${formId}-driverAge`} label="Âge du conducteur" error={errors.driverAge} required>
          <input
            id={`${formId}-driverAge`}
            type="number"
            min={18}
            max={99}
            value={values.driverAge}
            onChange={(e) => updateField("driverAge", e.target.value)}
            className={inputClass(!!errors.driverAge)}
            aria-invalid={!!errors.driverAge}
          />
        </Field>
      </div>

      <Field id={`${formId}-message`} label="Message (facultatif)">
        <textarea
          id={`${formId}-message`}
          rows={4}
          value={values.message}
          onChange={(e) => updateField("message", e.target.value)}
          className={inputClass(false)}
        />
      </Field>

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
        {errors.consent ? (
          <p className="mt-2 text-sm text-red-400">{errors.consent}</p>
        ) : null}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Envoi en cours…
          </>
        ) : (
          "Envoyer la demande de réservation"
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

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

function Field({ id, label, error, required, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-medium uppercase tracking-wide text-brand-silver">
        {label}
        {required ? <span className="text-brand-red"> *</span> : null}
      </label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p role="alert" className="mt-1.5 text-sm text-red-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}
