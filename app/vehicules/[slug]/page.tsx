import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarCheck, CheckCircle2, Fuel, Gauge, MessageCircle, Users } from "lucide-react";
import { getVehicleBySlug, vehicles } from "@/data/vehicles";
import { formatChf } from "@/lib/utils";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { VehicleGallery } from "@/components/vehicles/VehicleGallery";
import { BookingForm } from "@/components/forms/BookingForm";

interface VehiclePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({ slug: vehicle.slug }));
}

export async function generateMetadata({ params }: VehiclePageProps): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    return { title: "Véhicule introuvable" };
  }

  const title = `${vehicle.brand} ${vehicle.model}`;
  const description = `Louez la ${vehicle.brand} ${vehicle.model} en Suisse avec NL Prestige, à partir de ${formatChf(vehicle.pricePerDay)} par jour.`;

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
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <VehicleGallery images={vehicle.gallery} alt={`${vehicle.brand} ${vehicle.model}`} />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
            {vehicle.category}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ivory sm:text-4xl">
            {vehicle.brand} {vehicle.model}
          </h1>

          <div className="mt-6 flex flex-wrap items-baseline gap-3">
            <span className="text-2xl font-semibold text-brand-red">
              {formatChf(vehicle.pricePerDay)}
            </span>
            <span className="text-sm text-brand-silver">/ jour</span>
          </div>
          <p className="mt-1 text-sm text-brand-silver">
            Tarif longue durée sur demande, adapté à votre profil et à la durée souhaitée.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-4 text-sm text-brand-silver sm:grid-cols-3">
            <li className="flex items-center gap-2">
              <Users className="h-4 w-4 text-brand-red" aria-hidden="true" />
              {vehicle.seats} places
            </li>
            <li className="flex items-center gap-2">
              <Gauge className="h-4 w-4 text-brand-red" aria-hidden="true" />
              {vehicle.transmission}
            </li>
            <li className="flex items-center gap-2">
              <Fuel className="h-4 w-4 text-brand-red" aria-hidden="true" />
              {vehicle.fuel}
            </li>
          </ul>

          <p className="mt-8 text-sm leading-relaxed text-brand-silver">{vehicle.description}</p>

          <div className="mt-8">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-ivory">
              Caractéristiques
            </h2>
            <ul className="mt-3 space-y-2">
              {vehicle.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2 text-sm text-brand-silver">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-ivory">
              Options disponibles
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {vehicle.options.map((option) => (
                <li
                  key={option}
                  className="rounded-full border border-brand-line/60 px-3 py-1 text-xs text-brand-silver"
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 rounded-2xl border border-brand-line/60 bg-brand-charcoal/40 p-5">
            <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-ivory">
              <CalendarCheck className="h-4 w-4 text-brand-red" aria-hidden="true" />
              Conditions essentielles
            </h2>
            <ul className="mt-3 space-y-2">
              {vehicle.essentialConditions.map((condition) => (
                <li key={condition} className="text-sm text-brand-silver">
                  {condition}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-brand-silver/70">
              Les conditions exactes peuvent varier selon le véhicule. Elles vous seront confirmées
              avant la réservation.
            </p>
          </div>

          <a
            href={getWhatsAppUrl(
              `Bonjour NL Prestige, je souhaiterais obtenir des informations concernant la location de la ${vehicle.brand} ${vehicle.model}.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-none border border-[#25D366] bg-[#25D366] px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-black hover:shadow-lg hover:shadow-black/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Discuter sur WhatsApp
          </a>
        </div>
      </div>

      <div id="reservation" className="mx-auto mt-20 max-w-3xl scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight text-brand-ivory">
          Demander une réservation
        </h2>
        <p className="mt-2 text-sm text-brand-silver">
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
