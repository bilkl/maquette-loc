import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ContactForm } from "@/components/forms/ContactForm";
import { InstagramIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contactez ${siteConfig.name} par formulaire, e-mail ou WhatsApp pour toute question sur la location de véhicules de prestige en Suisse.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Contact"
        title="Parlons de votre projet de location"
        description="Une question, une demande spécifique ? Notre équipe vous répond rapidement."
      />

      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="space-y-6 rounded-2xl border border-brand-line/60 bg-brand-charcoal/40 p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden="true" />
              <div>
                <p className="text-base font-medium text-brand-ivory">E-mail</p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-base text-brand-silver hover:text-brand-accent"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden="true" />
              <div>
                <p className="text-base font-medium text-brand-ivory">Téléphone</p>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="text-base text-brand-silver hover:text-brand-accent"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden="true" />
              <div>
                <p className="text-base font-medium text-brand-ivory">WhatsApp</p>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-brand-silver hover:text-brand-accent"
                >
                  Discuter avec {siteConfig.name}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden="true" />
              <div>
                <p className="text-base font-medium text-brand-ivory">Adresse</p>
                <p className="text-base text-brand-silver">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.postalCode} {siteConfig.address.city}
                  <br />
                  {siteConfig.address.country}
                </p>
                <p className="mt-1 text-xs text-brand-silver/60">
                  Emplacement générique — à remplacer par l&apos;adresse officielle de {siteConfig.name}.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden="true" />
              <div>
                <p className="text-base font-medium text-brand-ivory">Horaires</p>
                <ul className="mt-1 space-y-1 text-base text-brand-silver">
                  {siteConfig.hours.map((slot) => (
                    <li key={slot.day} className="flex justify-between gap-4">
                      <span>{slot.day}</span>
                      <span>{slot.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <InstagramIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden="true" />
              <div>
                <p className="text-base font-medium text-brand-ivory">Instagram</p>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-brand-silver hover:text-brand-accent"
                >
                  @nl.prestige
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-brand-line/60 bg-brand-charcoal/40 p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
