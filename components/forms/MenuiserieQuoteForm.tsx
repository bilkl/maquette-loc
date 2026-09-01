"use client";

import { FormEvent, useEffect, useId, useMemo, useState } from "react";
import { Check, ImagePlus, Loader2, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import type { MenuiserieFamily } from "@/data/menuiserie";
import { MenuiserieQuoteFormErrors, MenuiserieQuoteFormValues } from "@/types/booking";
import { validateMenuiserieQuoteForm } from "@/lib/validation";
import { submitMenuiserieQuoteRequest } from "@/lib/booking-actions";
import { todayIso } from "@/lib/utils";
import { getWhatsAppUrl, isWhatsAppEnabled } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/icons";
import { MenuiserieButton } from "@/components/menuiserie/MenuiserieButton";
import { cn } from "@/lib/utils";

const OTHER_PROJECT = "autre";
const MAX_PHOTOS = 6;

const initialValues: MenuiserieQuoteFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  projectType: "",
  description: "",
  preferredDate: "",
  preferredTime: "peu-importe",
  consent: false,
};

interface MenuiserieQuoteFormProps {
  families: MenuiserieFamily[];
  /** Pré-sélectionne une famille de savoir-faire (ex. depuis /prestations#<slug>) */
  defaultFamilySlug?: string;
}

/**
 * Formulaire de devis "intelligent" : le type de projet vient directement du
 * catalogue de savoir-faire, la description est requise pour qu'un devis
 * puisse être préparé, et des photos peuvent être jointes pour donner une
 * première idée du projet — gérées en local (aperçu + nom de fichier) plutôt
 * que réellement envoyées : voir submitMenuiserieQuoteRequest pour ce qu'il
 * faudrait brancher pour un vrai stockage de fichiers.
 */
export function MenuiserieQuoteForm({ families, defaultFamilySlug }: MenuiserieQuoteFormProps) {
  const [values, setValues] = useState<MenuiserieQuoteFormValues>({
    ...initialValues,
    projectType: defaultFamilySlug ?? "",
  });
  const [errors, setErrors] = useState<MenuiserieQuoteFormErrors>({});
  const [photos, setPhotos] = useState<File[]>([]);
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

  // Une seule URL d'objet par fichier, mémoïsée : les créer directement dans
  // le JSX en recréerait une nouvelle à chaque rendu (ex. à chaque frappe
  // dans un autre champ) sans jamais révoquer les précédentes.
  const photoPreviews = useMemo(() => photos.map((file) => URL.createObjectURL(file)), [photos]);
  useEffect(() => {
    return () => {
      photoPreviews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [photoPreviews]);

  function updateField<K extends keyof MenuiserieQuoteFormValues>(
    field: K,
    value: MenuiserieQuoteFormValues[K],
  ) {
    setValues((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: undefined }));
  }

  function handleFilesSelected(fileList: FileList | null) {
    if (!fileList) return;
    const incoming = Array.from(fileList).filter((file) => file.type.startsWith("image/"));
    setPhotos((previous) => [...previous, ...incoming].slice(0, MAX_PHOTOS));
  }

  function removePhoto(index: number) {
    setPhotos((previous) => previous.filter((_, i) => i !== index));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validateMenuiserieQuoteForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    setSuccessMessage(null);
    try {
      const result = await submitMenuiserieQuoteRequest({
        ...values,
        photoCount: photos.length,
        photoNames: photos.map((file) => file.name),
      });
      if (result.success) {
        setSuccessMessage(result.message);
        setValues(initialValues);
        setPhotos([]);
        setErrors({});
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  const selectedFamily = families.find((family) => family.slug === values.projectType);
  const projectLabel = selectedFamily?.name ?? "un projet";
  const recapMessage = `Bonjour ${siteConfig.name}, je souhaite un devis pour ${projectLabel}. ${values.description || "Je vous donne plus de détails ici."}`;

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
      className="rounded-xl border border-brand-line bg-brand-charcoal p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field id={`${formId}-projectType`} label="Type de projet" error={errors.projectType} required>
          <select
            id={`${formId}-projectType`}
            value={values.projectType}
            onChange={(event) => updateField("projectType", event.target.value)}
            aria-invalid={!!errors.projectType}
            className={inputClass(!!errors.projectType)}
          >
            <option value="">Sélectionner un type de projet</option>
            {families.map((family) => (
              <option key={family.slug} value={family.slug}>
                {family.name}
              </option>
            ))}
            <option value={OTHER_PROJECT}>Autre / je ne sais pas encore</option>
          </select>
        </Field>

        <Field id={`${formId}-date`} label="Disponibilité pour une visite (facultatif)" error={errors.preferredDate}>
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

        {values.preferredDate ? (
          <Field id={`${formId}-time`} label="Créneau préféré">
            <select
              id={`${formId}-time`}
              value={values.preferredTime}
              onChange={(event) =>
                updateField("preferredTime", event.target.value as MenuiserieQuoteFormValues["preferredTime"])
              }
              className={inputClass(false)}
            >
              <option value="peu-importe">Peu importe</option>
              <option value="matin">Matin</option>
              <option value="apres-midi">Après-midi</option>
            </select>
          </Field>
        ) : null}
      </div>

      <div className="mt-5">
        <Field id={`${formId}-description`} label="Décrivez votre projet" error={errors.description} required>
          <textarea
            id={`${formId}-description`}
            rows={4}
            placeholder="Type de pièce ou d'espace, dimensions approximatives, essence de bois envisagée, style recherché…"
            value={values.description}
            onChange={(event) => updateField("description", event.target.value)}
            aria-invalid={!!errors.description}
            className={inputClass(!!errors.description)}
          />
        </Field>
      </div>

      <div className="mt-5">
        <label className="text-sm font-semibold uppercase tracking-wide text-brand-silver">
          Photos à joindre (facultatif)
        </label>
        <div className="mt-1.5 flex flex-wrap gap-3">
          {photos.map((file, index) => (
            <div
              key={`${file.name}-${index}`}
              className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-lg border border-brand-line bg-brand-black"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- aperçu local d'un fichier sélectionné, pas une image optimisable par next/image */}
              <img src={photoPreviews[index]} alt="" className="h-full w-full object-cover" />
              <button
                type="button"
                onClick={() => removePhoto(index)}
                aria-label={`Retirer ${file.name}`}
                className="absolute right-1 top-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/70 text-white"
              >
                <X className="h-3 w-3" aria-hidden="true" />
              </button>
            </div>
          ))}

          {photos.length < MAX_PHOTOS ? (
            <label className="flex h-20 w-20 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-dashed border-brand-line text-brand-silver transition-colors hover:border-brand-accent hover:text-brand-accent">
              <ImagePlus className="h-5 w-5" aria-hidden="true" />
              <span className="text-[0.65rem] font-semibold uppercase">Ajouter</span>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(event) => handleFilesSelected(event.target.files)}
                className="sr-only"
              />
            </label>
          ) : null}
        </div>
        <p className="mt-2 text-xs text-brand-silver/70">
          Jusqu&apos;à {MAX_PHOTOS} photos. Pour des fichiers plus lourds, vous pouvez aussi nous les
          envoyer directement par WhatsApp ou e-mail.
        </p>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
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
            J&apos;accepte que mes informations (et les photos jointes) soient utilisées pour traiter
            ma demande, conformément à la{" "}
            <a href="/confidentialite" className="text-brand-accent hover:underline">
              politique de confidentialité
            </a>
            .
          </span>
        </label>
        {errors.consent ? <ErrorText>{errors.consent}</ErrorText> : null}
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <MenuiserieButton type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Envoi en cours…
            </>
          ) : (
            "Envoyer la demande de devis"
          )}
        </MenuiserieButton>

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
