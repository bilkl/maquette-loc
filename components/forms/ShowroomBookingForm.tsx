"use client";

import Image from "next/image";
import { FormEvent, useEffect, useId, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { vehicles } from "@/data/vehicles";
import { siteConfig } from "@/config/site";
import { BookingFormErrors, BookingFormValues } from "@/types/booking";
import { pickErrors, validateShowroomRequest } from "@/lib/validation";
import { submitBookingRequest } from "@/lib/booking-actions";
import { countRentalDays, formatChf, formatDateFr, todayIso } from "@/lib/utils";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

/** Valeur retenue quand le visiteur préfère être conseillé sur le modèle. */
const ADVICE_VALUE = "conseil";

/** Lieux de remise proposés ; "Autre" ouvre un champ libre. */
const DELIVERY_PRESETS = [
  "Showroom de Genève",
  "Aéroport de Genève",
  "Hôtel ou adresse privée",
];
const OTHER_DELIVERY = "__autre__";

const STEPS = [
  { title: "Le modèle", fields: ["vehicle"] },
  { title: "Les dates", fields: ["startDate", "endDate", "location"] },
  { title: "Vos coordonnées", fields: ["firstName", "lastName", "email", "phone", "driverAge", "consent"] },
] as const satisfies ReadonlyArray<{ title: string; fields: ReadonlyArray<keyof BookingFormValues> }>;

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

interface ShowroomBookingFormProps {
  /** Pré-sélectionne un modèle (fiche véhicule) */
  defaultVehicleSlug?: string;
}

/**
 * Formulaire de réservation du gabarit "showroom".
 *
 * « Intelligent » au sens où il s'adapte au choix du visiteur plutôt que de
 * lui demander de tout savoir à l'avance :
 * - le modèle se choisit visuellement, ou se délègue à l'agence ;
 * - la date de retour ne peut pas précéder le départ (correction automatique) ;
 * - la durée et l'estimation tarifaire se recalculent en direct ;
 * - l'âge minimum exigé dépend du modèle sélectionné ;
 * - chaque étape n'est validée que sur ses propres champs ;
 * - un relais WhatsApp reprend le récapitulatif déjà saisi.
 *
 * L'envoi passe par lib/booking-actions.ts (simulé dans la maquette).
 */
export function ShowroomBookingForm({ defaultVehicleSlug }: ShowroomBookingFormProps) {
  const [values, setValues] = useState<BookingFormValues>({
    ...initialValues,
    vehicle: defaultVehicleSlug ?? "",
  });
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<BookingFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isCustomDelivery, setIsCustomDelivery] = useState(false);
  const formId = useId();
  const shouldReduceMotion = useReducedMotion();

  // Cette page est prérendue statiquement : calculer "aujourd'hui" pendant le
  // rendu (build/SSR) figerait cette date dans le HTML jusqu'au prochain
  // déploiement, provoquant un mismatch d'hydratation dès le lendemain. On ne
  // calcule donc `min` qu'après le montage, côté client.
  const [minStartDate, setMinStartDate] = useState<string | undefined>(undefined);
  useEffect(() => {
    // Exception volontaire à react-hooks/set-state-in-effect : la règle
    // suppose un effet qui synchronise du state dérivé, alors qu'ici le seul
    // but est d'éviter le mismatch d'hydratation ci-dessus (rendre la même
    // chose — `undefined` — sur le serveur et au premier rendu client, puis
    // ne calculer "aujourd'hui" qu'une fois monté).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMinStartDate(todayIso());
  }, []);

  const selectedVehicle = useMemo(
    () => vehicles.find((vehicle) => vehicle.slug === values.vehicle),
    [values.vehicle],
  );
  const minDriverAge = selectedVehicle?.minDriverAge ?? 21;
  const rentalDays = countRentalDays(values.startDate, values.endDate);
  const estimate = selectedVehicle && rentalDays > 0 ? selectedVehicle.pricePerDay * rentalDays : 0;

  function updateField<K extends keyof BookingFormValues>(field: K, value: BookingFormValues[K]) {
    setValues((previous) => {
      const next = { ...previous, [field]: value };

      // La date de retour suit automatiquement la date de départ si elle
      // devient incohérente : le visiteur n'a pas à corriger lui-même.
      if (field === "startDate" && typeof value === "string") {
        if (!next.endDate || next.endDate < value) {
          next.endDate = value;
        }
      }

      return next;
    });
    setErrors((previous) => ({ ...previous, [field]: undefined }));
  }

  function goToStep(nextStep: number) {
    setStep(nextStep);
    setErrors({});
  }

  function handleNext() {
    const stepErrors = pickErrors(validateShowroomRequest(values, minDriverAge), [
      ...STEPS[step].fields,
    ]);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length === 0) {
      setStep((previous) => Math.min(previous + 1, STEPS.length - 1));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validateShowroomRequest(values, minDriverAge);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      // Ramène le visiteur à la première étape encore incomplète.
      const firstInvalidStep = STEPS.findIndex((currentStep) =>
        currentStep.fields.some((field) => validationErrors[field]),
      );
      if (firstInvalidStep >= 0) setStep(firstInvalidStep);
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
        setIsCustomDelivery(false);
        setStep(0);
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  const recapMessage = buildRecapMessage({
    values,
    vehicleLabel: selectedVehicle
      ? `${selectedVehicle.brand} ${selectedVehicle.model}`
      : values.vehicle === ADVICE_VALUE
        ? "un modèle à me conseiller"
        : "un modèle de la collection",
    rentalDays,
  });

  if (successMessage) {
    return (
      <div
        role="status"
        className="border border-brand-accent/40 bg-brand-accent/5 p-8 sm:p-10"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center border border-brand-accent/60 text-brand-accent">
          <Check className="h-5 w-5" aria-hidden="true" />
        </span>
        <p className="font-display mt-6 text-2xl font-normal text-brand-ivory">
          Demande transmise.
        </p>
        <p className="mt-3 max-w-lg text-base leading-relaxed text-brand-silver">
          {successMessage}
        </p>
        <button
          type="button"
          onClick={() => setSuccessMessage(null)}
          className="mt-8 border border-brand-line px-6 py-3 text-sm font-medium uppercase tracking-[0.22em] text-brand-ivory transition-colors hover:border-brand-accent hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
        >
          Faire une autre demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="border border-brand-line/70 bg-brand-charcoal/40">
      <ol className="grid grid-cols-3 border-b border-brand-line/70">
        {STEPS.map((currentStep, index) => {
          const isCurrent = index === step;
          const isDone = index < step;
          return (
            <li key={currentStep.title}>
              <button
                type="button"
                onClick={() => (index <= step ? goToStep(index) : handleNext())}
                aria-current={isCurrent ? "step" : undefined}
                className={cn(
                  "flex w-full flex-col gap-1.5 px-4 py-4 text-left transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand-accent sm:px-6",
                  isCurrent ? "bg-brand-black/60" : "hover:bg-brand-black/30",
                )}
              >
                <span
                  className={cn(
                    "text-xs uppercase tracking-[0.24em]",
                    isCurrent || isDone ? "text-brand-accent" : "text-brand-silver/60",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "text-sm uppercase tracking-[0.14em]",
                    isCurrent ? "text-brand-ivory" : "text-brand-silver",
                  )}
                >
                  {currentStep.title}
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <div className="p-6 sm:p-8">
        {/* Le changement de `key` remonte le bloc : la nouvelle étape s'anime à
            l'entrée sans dépendre de la fin d'une animation de sortie
            (AnimatePresence mode="wait" pouvait laisser l'étape précédente
            affichée si l'animation n'était jamais menée à son terme). */}
        <motion.div
          key={step}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {step === 0 ? (
            <fieldset>
              <legend className="text-sm uppercase tracking-[0.28em] text-brand-accent">
                Quel modèle vous fait envie ?
              </legend>
              <p className="mt-3 text-sm text-brand-silver">
                Sélectionnez une voiture, ou laissez-nous vous orienter selon l&apos;occasion.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {vehicles.map((vehicle) => {
                  const isSelected = values.vehicle === vehicle.slug;
                  return (
                    <button
                      key={vehicle.slug}
                      type="button"
                      onClick={() => updateField("vehicle", vehicle.slug)}
                      aria-pressed={isSelected}
                      className={cn(
                        "group flex items-center gap-4 border p-3 text-left transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent",
                        isSelected
                          ? "border-brand-accent bg-brand-accent/5"
                          : "border-brand-line/70 hover:border-brand-accent/60",
                      )}
                    >
                      <span className="relative h-14 w-20 shrink-0 overflow-hidden border border-brand-line/60">
                        <Image
                          src={vehicle.coverImage}
                          alt=""
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </span>
                      <span className="min-w-0">
                        <span className="font-display block truncate text-base text-brand-ivory">
                          {vehicle.brand} {vehicle.model}
                        </span>
                        <span className="mt-1 block text-xs uppercase tracking-[0.16em] text-brand-silver">
                          {vehicle.power ?? vehicle.category} · dès {formatChf(vehicle.pricePerDay)}/j
                        </span>
                      </span>
                    </button>
                  );
                })}

                <button
                  type="button"
                  onClick={() => updateField("vehicle", ADVICE_VALUE)}
                  aria-pressed={values.vehicle === ADVICE_VALUE}
                  className={cn(
                    "flex items-center gap-4 border border-dashed p-3 text-left transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent",
                    values.vehicle === ADVICE_VALUE
                      ? "border-brand-accent bg-brand-accent/5"
                      : "border-brand-line hover:border-brand-accent/60",
                  )}
                >
                  <span className="flex h-14 w-20 shrink-0 items-center justify-center border border-brand-line/60 text-brand-accent">
                    ?
                  </span>
                  <span>
                    <span className="font-display block text-base text-brand-ivory">
                      Conseillez-moi
                    </span>
                    <span className="mt-1 block text-xs uppercase tracking-[0.16em] text-brand-silver">
                      Selon l&apos;occasion et la saison
                    </span>
                  </span>
                </button>
              </div>

              {errors.vehicle ? <ErrorText>{errors.vehicle}</ErrorText> : null}

              {selectedVehicle?.minDriverAge ? (
                <p className="mt-5 border-l border-brand-accent/50 pl-4 text-sm text-brand-silver">
                  Ce modèle est confié aux conducteurs de {selectedVehicle.minDriverAge} ans et
                  plus, permis en poche depuis plusieurs années.
                </p>
              ) : null}
            </fieldset>
          ) : null}

          {step === 1 ? (
            <fieldset>
              <legend className="text-sm uppercase tracking-[0.28em] text-brand-accent">
                Quand, et où vous la remet-on ?
              </legend>

              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field id={`${formId}-startDate`} label="Date de départ" error={errors.startDate} required>
                  <input
                    id={`${formId}-startDate`}
                    type="date"
                    min={minStartDate}
                    value={values.startDate}
                    onChange={(event) => updateField("startDate", event.target.value)}
                    aria-invalid={!!errors.startDate}
                    className={inputClass(!!errors.startDate)}
                  />
                </Field>

                <Field id={`${formId}-endDate`} label="Date de retour" error={errors.endDate} required>
                  <input
                    id={`${formId}-endDate`}
                    type="date"
                    min={values.startDate || minStartDate}
                    value={values.endDate}
                    onChange={(event) => updateField("endDate", event.target.value)}
                    aria-invalid={!!errors.endDate}
                    className={inputClass(!!errors.endDate)}
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field id={`${formId}-location`} label="Lieu de remise" error={errors.location} required>
                  <select
                    id={`${formId}-location`}
                    value={isCustomDelivery ? OTHER_DELIVERY : values.location}
                    onChange={(event) => {
                      const choice = event.target.value;
                      if (choice === OTHER_DELIVERY) {
                        setIsCustomDelivery(true);
                        updateField("location", "");
                      } else {
                        setIsCustomDelivery(false);
                        updateField("location", choice);
                      }
                    }}
                    aria-invalid={!!errors.location}
                    className={inputClass(!!errors.location)}
                  >
                    <option value="">Sélectionner un lieu</option>
                    {DELIVERY_PRESETS.map((preset) => (
                      <option key={preset} value={preset}>
                        {preset}
                      </option>
                    ))}
                    <option value={OTHER_DELIVERY}>Autre adresse…</option>
                  </select>
                </Field>

                {isCustomDelivery ? (
                  <input
                    type="text"
                    aria-label="Adresse de remise souhaitée"
                    placeholder="Ville, adresse ou station"
                    value={values.location}
                    onChange={(event) => updateField("location", event.target.value)}
                    className={cn(inputClass(false), "mt-3")}
                  />
                ) : null}
              </div>

              <RentalSummary
                rentalDays={rentalDays}
                estimate={estimate}
                hasVehicle={Boolean(selectedVehicle)}
              />
            </fieldset>
          ) : null}

          {step === 2 ? (
            <fieldset>
              <legend className="text-sm uppercase tracking-[0.28em] text-brand-accent">
                Comment vous joindre ?
              </legend>

              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
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

                <Field
                  id={`${formId}-driverAge`}
                  label={`Âge du conducteur (min. ${minDriverAge} ans)`}
                  error={errors.driverAge}
                  required
                >
                  <input
                    id={`${formId}-driverAge`}
                    type="number"
                    min={minDriverAge}
                    max={99}
                    inputMode="numeric"
                    value={values.driverAge}
                    onChange={(event) => updateField("driverAge", event.target.value)}
                    aria-invalid={!!errors.driverAge}
                    className={inputClass(!!errors.driverAge)}
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field id={`${formId}-message`} label="Précisions (facultatif)">
                  <textarea
                    id={`${formId}-message`}
                    rows={3}
                    placeholder="Occasion, itinéraire prévu, options souhaitées…"
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
                    className="mt-1 h-4 w-4 shrink-0 border-brand-line bg-brand-black accent-[var(--color-brand-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent"
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

              <RentalSummary
                rentalDays={rentalDays}
                estimate={estimate}
                hasVehicle={Boolean(selectedVehicle)}
                vehicleLabel={
                  selectedVehicle
                    ? `${selectedVehicle.brand} ${selectedVehicle.model}`
                    : values.vehicle === ADVICE_VALUE
                      ? "Modèle à conseiller"
                      : undefined
                }
                startDate={values.startDate}
                endDate={values.endDate}
              />
            </fieldset>
          ) : null}
        </motion.div>

        <div className="mt-8 flex flex-col gap-4 border-t border-brand-line/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            {step > 0 ? (
              <button
                type="button"
                onClick={() => goToStep(step - 1)}
                className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.22em] text-brand-silver transition-colors hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                Retour
              </button>
            ) : null}
          </div>

          {step < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden border border-brand-accent bg-brand-accent px-8 py-4 text-sm font-medium uppercase tracking-[0.22em] text-brand-black transition-colors duration-300 hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 origin-left scale-x-0 bg-brand-black transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:hidden"
              />
              <span className="relative z-10 inline-flex items-center gap-2">
                Continuer
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden border border-brand-accent bg-brand-accent px-8 py-4 text-sm font-medium uppercase tracking-[0.22em] text-brand-black transition-colors duration-300 hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent disabled:pointer-events-none disabled:opacity-60"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 origin-left scale-x-0 bg-brand-black transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:hidden"
              />
              <span className="relative z-10 inline-flex items-center gap-2">
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Envoi en cours…
                  </>
                ) : (
                  "Envoyer la demande"
                )}
              </span>
            </button>
          )}
        </div>

        <p className="mt-6 text-sm text-brand-silver">
          <a
            href={getWhatsAppUrl(recapMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-silver transition-colors hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" aria-hidden="true" />
            Reprendre cette demande sur WhatsApp
          </a>
        </p>
      </div>
    </form>
  );
}

/** Récapitulatif recalculé en direct : durée, estimation, modèle, dates. */
function RentalSummary({
  rentalDays,
  estimate,
  hasVehicle,
  vehicleLabel,
  startDate,
  endDate,
}: {
  rentalDays: number;
  estimate: number;
  hasVehicle: boolean;
  vehicleLabel?: string;
  startDate?: string;
  endDate?: string;
}) {
  if (rentalDays === 0 && !vehicleLabel) return null;

  return (
    <dl
      aria-live="polite"
      className="mt-6 grid grid-cols-2 gap-4 border border-brand-line/60 bg-brand-black/40 p-5 sm:grid-cols-4"
    >
      {vehicleLabel ? (
        <div className="col-span-2">
          <dt className="text-xs uppercase tracking-[0.22em] text-brand-silver/70">Modèle</dt>
          <dd className="font-display mt-1.5 text-base text-brand-ivory">{vehicleLabel}</dd>
        </div>
      ) : null}

      {startDate && endDate ? (
        <div className="col-span-2">
          <dt className="text-xs uppercase tracking-[0.22em] text-brand-silver/70">Période</dt>
          <dd className="mt-1.5 text-sm text-brand-ivory">
            {formatDateFr(startDate)} → {formatDateFr(endDate)}
          </dd>
        </div>
      ) : null}

      <div>
        <dt className="text-xs uppercase tracking-[0.22em] text-brand-silver/70">Durée</dt>
        <dd className="font-display mt-1.5 text-base text-brand-ivory">
          {rentalDays > 0 ? `${rentalDays} jour${rentalDays > 1 ? "s" : ""}` : "—"}
        </dd>
      </div>

      <div className="col-span-1 sm:col-span-3">
        <dt className="text-xs uppercase tracking-[0.22em] text-brand-silver/70">
          Estimation indicative
        </dt>
        <dd className="mt-1.5 text-sm text-brand-silver">
          {hasVehicle && estimate > 0 ? (
            <>
              <span className="font-display text-base text-brand-accent">
                {formatChf(estimate)}
              </span>{" "}
              hors options — le devis définitif vous est confirmé sous 24 h.
            </>
          ) : (
            "Communiquée avec la confirmation de disponibilité."
          )}
        </dd>
      </div>
    </dl>
  );
}

function buildRecapMessage({
  values,
  vehicleLabel,
  rentalDays,
}: {
  values: BookingFormValues;
  vehicleLabel: string;
  rentalDays: number;
}): string {
  const parts = [`Bonjour ${siteConfig.name}, je souhaite réserver ${vehicleLabel}`];

  if (values.startDate && values.endDate) {
    parts.push(
      ` du ${formatDateFr(values.startDate)} au ${formatDateFr(values.endDate)} (${rentalDays} jour${
        rentalDays > 1 ? "s" : ""
      })`,
    );
  }
  if (values.location) {
    parts.push(`, remise à ${values.location}`);
  }

  return `${parts.join("")}.`;
}

function inputClass(hasError: boolean): string {
  return cn(
    "w-full border bg-brand-black px-3.5 py-3 text-sm text-brand-ivory placeholder:text-brand-silver/50",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px] focus-visible:outline-brand-accent",
    hasError ? "border-red-400/80" : "border-brand-line/70",
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return (
    <p role="alert" className="mt-2 text-sm text-red-400">
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
      <label
        htmlFor={id}
        className="text-xs font-medium uppercase tracking-[0.18em] text-brand-silver"
      >
        {label}
        {required ? <span className="text-brand-accent"> *</span> : null}
      </label>
      <div className="mt-2">{children}</div>
      {error ? <ErrorText>{error}</ErrorText> : null}
    </div>
  );
}
