import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarCheck, CheckCircle2, Fuel, Gauge, MessageCircle, Users } from "lucide-react";
import { getVehicleBySlug, vehicles } from "@/data/vehicles";
import { getOccasionVehicleBySlug, vehicles as occasionVehicles } from "@/data/occasion-vehicles";
import { siteConfig } from "@/config/site";
import { formatChf, formatKm } from "@/lib/utils";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { VehicleGallery } from "@/components/vehicles/VehicleGallery";
import { BookingForm } from "@/components/forms/BookingForm";
import { ShowroomVehicleDetail } from "@/components/showroom/ShowroomVehicleDetail";
import { DealerVehicleDetail } from "@/components/dealer/DealerVehicleDetail";

interface VehiclePageProps {
  params: Promise<{ slug: string }>;
}

const isGarage = siteConfig.template === "garage";
const isDealer = siteConfig.template === "dealer";
const isShowroom = siteConfig.template === "showroom";

export function generateStaticParams() {
  // Route sans objet pour les gabarits "garage", "electricien" et "plombier" (pas de flotte à louer ou vendre).
  if (isGarage || siteConfig.template === "electricien" || siteConfig.template === "plombier") return [];
  // "dealer" a son propre catalogue (data/occasion-vehicles), distinct de la
  // flotte de location (data/vehicles) utilisée par "classic"/"showroom".
  if (isDealer) return occasionVehicles.map((vehicle) => ({ slug: vehicle.slug }));
  return vehicles.map((vehicle) => ({ slug: vehicle.slug }));
}

export async function generateMetadata({ params }: VehiclePageProps): Promise<Metadata> {
  const { slug } = await params;

  if (isDealer) {
    const vehicle = getOccasionVehicleBySlug(slug);
    if (!vehicle) return { title: "Véhicule introuvable" };

    const title = `${vehicle.brand} ${vehicle.model}`;
    return {
      title,
      description: `${vehicle.brand} ${vehicle.model} (${vehicle.year}) — ${formatChf(vehicle.price)}, ${formatKm(vehicle.mileage)}, chez ${siteConfig.name}.`,
      alternates: { canonical: `/vehicules/${vehicle.slug}` },
      openGraph: {
        title,
        description: vehicle.description,
        images: [{ url: vehicle.coverImage }],
      },
    };
  }

  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    return { title: "Véhicule introuvable" };
  }

  const title = `${vehicle.brand} ${vehicle.model}`;
  const description = isShowroom
    ? `${vehicle.brand} ${vehicle.model} — ${vehicle.description} Location et remise en main propre avec ${siteConfig.name}.`
    : `Louez la ${vehicle.brand} ${vehicle.model} en Suisse avec ${siteConfig.name}, à partir de ${formatChf(vehicle.pricePerDay)} par jour.`;

  return {
    title,
    description,
    alternates: { canonical: `/vehicules/${vehicle.slug}` },
    openGraph: {
      title,
      description,
      images: [{ url: vehicle.coverImage }],
    },
  };
}

export default async function VehiclePage({ params }: VehiclePageProps) {
  if (isGarage || siteConfig.template === "electricien" || siteConfig.template === "plombier") {
    notFound();
  }

  const { slug } = await params;

  if (isDealer) {
    const vehicle = getOccasionVehicleBySlug(slug);
    if (!vehicle) notFound();
    return <DealerVehicleDetail vehicle={vehicle} />;
  }

  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    notFound();
  }

  // Le gabarit est choisi par agence dans config/brands/<id>.ts.
  if (isShowroom) {
    return <ShowroomVehicleDetail vehicle={vehicle} />;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <VehicleGallery images={vehicle.gallery} alt={`${vehicle.brand} ${vehicle.model}`} />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">
            {vehicle.category}
          </p>
          <h1 className="font-display mt-4 text-4xl font-semibold leading-tight tracking-tight text-brand-ivory sm:text-5xl">
            {vehicle.brand} {vehicle.model}
          </h1>

          <div className="mt-7 flex flex-wrap items-baseline gap-3">
            <span className="text-3xl font-semibold text-brand-accent">
              {formatChf(vehicle.pricePerDay)}
            </span>
            <span className="text-base text-brand-silver">/ jour</span>
          </div>
          <p className="mt-2 text-base text-brand-silver">
            Tarif longue durée sur demande, adapté à votre profil et à la durée souhaitée.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-4 text-base text-brand-silver sm:grid-cols-3">
            <li className="flex items-center gap-2">
              <Users className="h-4 w-4 text-brand-accent" aria-hidden="true" />
              {vehicle.seats} places
            </li>
            <li className="flex items-center gap-2">
              <Gauge className="h-4 w-4 text-brand-accent" aria-hidden="true" />
              {vehicle.transmission}
            </li>
            <li className="flex items-center gap-2">
              <Fuel className="h-4 w-4 text-brand-accent" aria-hidden="true" />
              {vehicle.fuel}
            </li>
          </ul>

          <p className="mt-8 text-base leading-relaxed text-brand-silver">{vehicle.description}</p>

          <div className="mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-ivory">
              Caractéristiques
            </h2>
            <ul className="mt-4 space-y-2.5">
              {vehicle.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2 text-base text-brand-silver">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-ivory">
              Options disponibles
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {vehicle.options.map((option) => (
                <li
                  key={option}
                  className="rounded-full border border-brand-line/60 px-3.5 py-1.5 text-sm text-brand-silver"
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 rounded-2xl border border-brand-line/60 bg-brand-charcoal/40 p-6">
            <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-ivory">
              <CalendarCheck className="h-4 w-4 text-brand-accent" aria-hidden="true" />
              Conditions essentielles
            </h2>
            <ul className="mt-4 space-y-2.5">
              {vehicle.essentialConditions.map((condition) => (
                <li key={condition} className="text-base text-brand-silver">
                  {condition}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-brand-silver/70">
              Les conditions exactes peuvent varier selon le véhicule. Elles vous seront confirmées
              avant la réservation.
            </p>
          </div>

          <a
            href={getWhatsAppUrl(
              `Bonjour ${siteConfig.name}, je souhaiterais obtenir des informations concernant la location de la ${vehicle.brand} ${vehicle.model}.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-none border border-[#25D366] bg-[#25D366] px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-black hover:shadow-lg hover:shadow-black/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Discuter sur WhatsApp
          </a>
        </div>
      </div>

      <div id="reservation" className="mx-auto mt-24 max-w-3xl scroll-mt-24">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-ivory">
          Demander une réservation
        </h2>
        <p className="mt-3 text-base text-brand-silver">
          Indiquez vos dates souhaitées, nous revenons vers vous rapidement pour confirmer la
          disponibilité et les conditions.
        </p>
        <div className="mt-8 rounded-2xl border border-brand-line/60 bg-brand-charcoal/40 p-6 sm:p-8">
          <BookingForm defaultVehicleSlug={vehicle.slug} />
        </div>
      </div>
    </div>
  );
}
