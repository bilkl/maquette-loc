import Link from "next/link";
import { ArrowLeft, BedDouble, Check, DoorOpen, Ruler } from "lucide-react";
import type { Property } from "@/types/property";
import { siteConfig } from "@/config/site";
import { VehicleGallery } from "@/components/vehicles/VehicleGallery";
import { ImmobilierLinkButton } from "@/components/immobilier/ImmobilierButton";
import { propertyTypeIcons } from "@/components/immobilier/icons";
import { WhatsAppIcon } from "@/components/ui/icons";
import { formatChf } from "@/lib/utils";
import { getWhatsAppUrl, isWhatsAppEnabled } from "@/lib/whatsapp";

interface ImmobilierPropertyDetailProps {
  property: Property;
}

export function ImmobilierPropertyDetail({ property }: ImmobilierPropertyDetailProps) {
  const TypeIcon = propertyTypeIcons[property.type];
  const specs = [
    { icon: Ruler, label: "Surface", value: `${property.surface} m²` },
    property.rooms ? { icon: DoorOpen, label: "Pièces", value: String(property.rooms) } : null,
    property.bedrooms
      ? { icon: BedDouble, label: "Chambres", value: String(property.bedrooms) }
      : null,
  ].filter((spec): spec is { icon: typeof Ruler; label: string; value: string } => spec !== null);

  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <Link
        href="/biens"
        className="inline-flex items-center gap-2 text-sm font-semibold text-brand-silver transition-colors hover:text-brand-accent"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Retour aux biens
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <VehicleGallery images={property.gallery} alt={property.title} />

        <div>
          <p className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent">
            <TypeIcon className="h-4 w-4" aria-hidden="true" />
            {property.type} · {property.location}
          </p>
          <h1 className="font-display mt-3 text-3xl font-semibold leading-tight tracking-tight text-brand-ivory sm:text-4xl">
            {property.title}
          </h1>

          <p className="mt-5 text-3xl font-extrabold tabular-nums text-brand-accent">
            {formatChf(property.price)}
          </p>
          {property.status !== "à vendre" ? (
            <p className="mt-2 text-sm font-semibold capitalize text-brand-silver">
              Bien {property.status}
            </p>
          ) : null}

          <dl className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {specs.map((spec) => (
              <div key={spec.label} className="rounded-lg border border-brand-line bg-brand-charcoal p-3.5">
                <dt className="flex items-center gap-1.5 text-xs font-medium text-brand-silver">
                  <spec.icon className="h-3.5 w-3.5 text-brand-accent" aria-hidden="true" />
                  {spec.label}
                </dt>
                <dd className="mt-1 text-sm font-bold tabular-nums text-brand-ivory">{spec.value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 text-base leading-relaxed text-brand-silver">{property.description}</p>

          <div className="mt-8">
            <h2 className="text-sm font-bold text-brand-ivory">Points forts</h2>
            <ul className="mt-3 space-y-2">
              {property.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2.5 text-sm text-brand-ivory">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {isWhatsAppEnabled() ? (
              <a
                href={getWhatsAppUrl(
                  `Bonjour ${siteConfig.name}, je suis intéressé(e) par le bien « ${property.title} » (${property.location}).`,
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
            ) : null}
            <ImmobilierLinkButton href="/contact" variant="secondary">
              Nous contacter
            </ImmobilierLinkButton>
          </div>

          <p className="mt-5 text-sm text-brand-silver">
            Vous souhaitez vendre un bien similaire ?{" "}
            <Link href="/#estimation" className="text-brand-accent hover:underline">
              Demander une estimation gratuite
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
