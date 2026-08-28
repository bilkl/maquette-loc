import Link from "next/link";
import { ArrowLeft, Calendar, Check, Fuel, Gauge, Settings2, Users } from "lucide-react";
import type { OccasionVehicle } from "@/types/occasionVehicle";
import { siteConfig } from "@/config/site";
import { VehicleGallery } from "@/components/vehicles/VehicleGallery";
import { DealerLinkButton } from "@/components/dealer/DealerButton";
import { WhatsAppIcon } from "@/components/ui/icons";
import { formatChf, formatKm } from "@/lib/utils";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface DealerVehicleDetailProps {
  vehicle: OccasionVehicle;
}

export function DealerVehicleDetail({ vehicle }: DealerVehicleDetailProps) {
  const specs = [
    { icon: Calendar, label: "Année", value: String(vehicle.year) },
    { icon: Gauge, label: "Kilométrage", value: formatKm(vehicle.mileage) },
    { icon: Fuel, label: "Carburant", value: vehicle.fuel },
    { icon: Settings2, label: "Boîte", value: vehicle.transmission },
    { icon: Users, label: "Places", value: String(vehicle.seats) },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <Link
        href="/vehicules"
        className="inline-flex items-center gap-2 text-sm font-semibold text-brand-silver transition-colors hover:text-brand-accent"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Retour au catalogue
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <VehicleGallery images={vehicle.gallery} alt={`${vehicle.brand} ${vehicle.model}`} />

        <div>
          <p className="text-sm font-semibold text-brand-accent">
            {vehicle.category} · {vehicle.condition}
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-brand-ivory sm:text-4xl">
            {vehicle.brand} {vehicle.model}
          </h1>

          <p className="mt-5 text-3xl font-extrabold tabular-nums text-brand-accent">
            {formatChf(vehicle.price)}
          </p>
          {!vehicle.available ? (
            <p className="mt-2 text-sm font-semibold text-brand-silver">Ce véhicule a été vendu.</p>
          ) : null}

          <dl className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {specs.map((spec) => (
              <div key={spec.label} className="rounded-lg border border-brand-line bg-brand-charcoal/40 p-3.5">
                <dt className="flex items-center gap-1.5 text-xs font-medium text-brand-silver">
                  <spec.icon className="h-3.5 w-3.5 text-brand-accent" aria-hidden="true" />
                  {spec.label}
                </dt>
                <dd className="mt-1 text-sm font-bold tabular-nums text-brand-ivory">{spec.value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 text-base leading-relaxed text-brand-silver">{vehicle.description}</p>

          <div className="mt-8">
            <h2 className="text-sm font-bold text-brand-ivory">Points forts</h2>
            <ul className="mt-3 space-y-2">
              {vehicle.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2.5 text-sm text-brand-ivory">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-sm font-bold text-brand-ivory">Inclus avec ce véhicule</h2>
            <ul className="mt-3 space-y-2">
              {vehicle.included.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-brand-silver">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={getWhatsAppUrl(
                `Bonjour ${siteConfig.name}, je suis intéressé(e) par la ${vehicle.brand} ${vehicle.model} (${vehicle.year}).`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-accent/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-accent/35"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, var(--color-brand-accent) 0%, var(--color-brand-accent-soft) 100%)",
              }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.3)_50%,transparent_65%)] transition-transform duration-700 ease-out group-hover:translate-x-full motion-reduce:hidden"
              />
              <span className="relative z-10 inline-flex items-center gap-2">
                <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
                Poser une question sur WhatsApp
              </span>
            </a>
            <DealerLinkButton href="/contact" variant="secondary">
              Nous contacter
            </DealerLinkButton>
          </div>

          <p className="mt-5 text-sm text-brand-silver">
            Une reprise de votre ancien véhicule peut être déduite du prix d&apos;achat.{" "}
            <Link href="/#vendre" className="text-brand-accent hover:underline">
              Estimer ma reprise
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
