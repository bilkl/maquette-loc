"use client";

import { FormEvent, useId, useState } from "react";
import { Loader2 } from "lucide-react";
import { ContactFormErrors, ContactFormValues } from "@/types/booking";
import { validateContactForm } from "@/lib/validation";
import { submitContactRequest } from "@/lib/booking-actions";
import { Button } from "@/components/ui/Button";

const initialValues: ContactFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  consent: false,
};

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const formId = useId();

  function updateField<K extends keyof ContactFormValues>(field: K, value: ContactFormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    setSuccessMessage(null);
    try {
      const result = await submitContactRequest(values);
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
          className="rounded-xl border border-brand-accent/40 bg-brand-accent/10 px-4 py-3 text-sm text-brand-accent-soft"
        >
          {successMessage}
        </p>
      ) : null}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formId}-firstName`} className="text-xs font-medium uppercase tracking-wide text-brand-silver">
            Prénom <span className="text-brand-accent">*</span>
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
            Nom <span className="text-brand-accent">*</span>
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
            E-mail <span className="text-brand-accent">*</span>
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
            Téléphone <span className="text-brand-accent">*</span>
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
      </div>

      <div>
        <label htmlFor={`${formId}-subject`} className="text-xs font-medium uppercase tracking-wide text-brand-silver">
          Sujet <span className="text-brand-accent">*</span>
        </label>
        <input
          id={`${formId}-subject`}
          type="text"
          value={values.subject}
          onChange={(e) => updateField("subject", e.target.value)}
          aria-invalid={!!errors.subject}
          className={inputClass(!!errors.subject)}
        />
        {errors.subject ? <p role="alert" className="mt-1.5 text-sm text-red-400">{errors.subject}</p> : null}
      </div>

      <div>
        <label htmlFor={`${formId}-message`} className="text-xs font-medium uppercase tracking-wide text-brand-silver">
          Message <span className="text-brand-accent">*</span>
        </label>
        <textarea
          id={`${formId}-message`}
          rows={5}
          value={values.message}
          onChange={(e) => updateField("message", e.target.value)}
          aria-invalid={!!errors.message}
          className={inputClass(!!errors.message)}
        />
        {errors.message ? <p role="alert" className="mt-1.5 text-sm text-red-400">{errors.message}</p> : null}
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-brand-silver">
          <input
            type="checkbox"
            checked={values.consent}
            onChange={(e) => updateField("consent", e.target.checked)}
            aria-invalid={!!errors.consent}
            className="mt-1 h-4 w-4 shrink-0 rounded border-brand-line bg-brand-black text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent"
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
        {errors.consent ? <p role="alert" className="mt-2 text-sm text-red-400">{errors.consent}</p> : null}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Envoi en cours…
          </>
        ) : (
          "Envoyer le message"
        )}
      </Button>
    </form>
  );
}

function inputClass(hasError: boolean): string {
  return [
    "w-full rounded-lg border bg-brand-black px-3 py-2.5 text-sm text-brand-ivory placeholder:text-brand-silver/60",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent",
    hasError ? "border-red-400" : "border-brand-line",
  ].join(" ");
}
