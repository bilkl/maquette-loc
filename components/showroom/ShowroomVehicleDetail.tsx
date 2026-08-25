import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Vehicle } from "@/types/vehicle";
import { siteConfig } from "@/config/site";
import { getShowroomContent } from "@/data/showroom";
import { Container, DisplayTitle, Eyebrow, HairLine } from "@/components/showroom/primitives";
import { Reveal } from "@/components/showroom/Reveal";
import { ShowroomGallery } from "@/components/showroom/ShowroomGallery";
import { ReservationSection } from "@/components/showroom/ReservationSection";
import { WhatsAppIcon } from "@/components/ui/icons";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { formatChf } from "@/lib/utils";

interface ShowroomVehicleDetailProps {
  vehicle: Vehicle;
}

/**
 * Fiche modèle du gabarit "showroom" : le récit avant la fiche technique,
 * le tarif en bas de page, la réservation en pied de fiche.
 */
export function ShowroomVehicleDetail({ vehicle }: ShowroomVehicleDetailProps) {
  const content = getShowroomContent();
  const specs = [
    vehicle.power ? { label: "Puissance", value: vehicle.power } : null,
    vehicle.acceleration ? { label: "Accélération", value: vehicle.acceleration } : null,
    vehicle.topSpeed ? { label: "Vitesse maximale", value: vehicle.topSpeed } : null,
    { label: "Places", value: `${vehicle.seats}` },
    { label: "Motorisation", value: vehicle.fuel },
    { label: "Transmission", value: vehicle.transmission },
  ].filter((spec): spec is { label: string; value: string } => spec !== null);

  return (
    <>
      <section className="pt-10 sm:pt-16">
        <Container>
          <Link
            href="/vehicules"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-brand-silver transition-colors hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            La collection
          </Link>

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <Reveal>
              <ShowroomGallery
                images={vehicle.gallery}
                alt={`${vehicle.brand} ${vehicle.model}`}
              />
            </Reveal>

            <Reveal delay={0.1}>
              <Eyebrow>{vehicle.category}</Eyebrow>
              <DisplayTitle as="h1" className="mt-6">
                {vehicle.brand} <span className="text-brand-silver">{vehicle.model}</span>
              </DisplayTitle>

              {vehicle.signature ? (
                <p className="font-display mt-5 text-xl italic leading-snug text-brand-accent sm:text-2xl">
                  « {vehicle.signature} »
                </p>
              ) : null}

              <p className="mt-7 text-base leading-relaxed text-brand-silver">
                {vehicle.description}
              </p>

              <dl className="mt-9 grid grid-cols-2 gap-px border border-brand-line/60 bg-brand-line/60 sm:grid-cols-3">
                {specs.map((spec) => (
                  <div key={spec.label} className="bg-brand-black px-4 py-5">
                    <dt className="text-xs uppercase tracking-[0.2em] text-brand-silver/70">
                      {spec.label}
                    </dt>
                    <dd className="font-display mt-2 text-base text-brand-ivory">{spec.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
                <p className="text-sm text-brand-silver">
                  À partir de{" "}
                  <span className="font-display text-xl text-brand-accent">
                    {formatChf(vehicle.pricePerDay)}
                  </span>{" "}
                  / jour
                </p>
                <a
                  href={getWhatsAppUrl(
                    `Bonjour ${siteConfig.name}, je souhaite des informations sur la ${vehicle.brand} ${vehicle.model}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 border border-brand-line px-5 py-3 text-sm uppercase tracking-[0.2em] text-brand-ivory transition-colors hover:border-brand-accent hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366]" aria-hidden="true" />
                  Poser une question
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {vehicle.story ? (
        <section className="py-16 sm:py-24">
          <Container>
            <HairLine />
            <Reveal className="mt-14 max-w-3xl">
              <Eyebrow>Le modèle, raconté</Eyebrow>
              <p className="font-display mt-7 text-xl font-normal leading-relaxed text-brand-ivory/90 sm:text-2xl">
                {vehicle.story}
              </p>
            </Reveal>
          </Container>
        </section>
      ) : null}

      <section className="pb-20 sm:pb-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-10">
            <Reveal>
              <h2 className="text-sm uppercase tracking-[0.28em] text-brand-accent">
                Ce qui la définit
              </h2>
              <ul className="mt-6 space-y-3">
                {vehicle.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-sm text-brand-silver">
                    <span aria-hidden="true" className="mt-2.5 h-px w-5 shrink-0 bg-brand-accent/70" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="text-sm uppercase tracking-[0.28em] text-brand-accent">
                Options à la demande
              </h2>
              <ul className="mt-6 space-y-3">
                {vehicle.options.map((option) => (
                  <li key={option} className="flex items-start gap-3 text-sm text-brand-silver">
                    <span aria-hidden="true" className="mt-2.5 h-px w-5 shrink-0 bg-brand-accent/70" />
                    {option}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.16}>
              <h2 className="text-sm uppercase tracking-[0.28em] text-brand-accent">
                Conditions essentielles
              </h2>
              <ul className="mt-6 space-y-3">
                {vehicle.essentialConditions.map((condition) => (
                  <li key={condition} className="flex items-start gap-3 text-sm text-brand-silver">
                    <span aria-hidden="true" className="mt-2.5 h-px w-5 shrink-0 bg-brand-accent/70" />
                    {condition}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-brand-silver/70">
                Les conditions exactes vous sont confirmées avec le devis, avant toute réservation
                ferme.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <ReservationSection content={content.reservation} defaultVehicleSlug={vehicle.slug} />
    </>
  );
}
