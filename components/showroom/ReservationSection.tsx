import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import type { ShowroomContent } from "@/data/showroom";
import { Reveal } from "@/components/showroom/Reveal";
import { Container, DisplayTitle, Eyebrow } from "@/components/showroom/primitives";
import { ContactValue } from "@/components/showroom/ContactValue";
import { ShowroomBookingForm } from "@/components/forms/ShowroomBookingForm";
import { WhatsAppIcon } from "@/components/ui/icons";
import { externalHref, mailtoHref, telHref } from "@/lib/placeholders";
import { getWhatsAppUrl, isWhatsAppEnabled } from "@/lib/whatsapp";

interface ReservationSectionProps {
  content: ShowroomContent["reservation"];
  /** Pré-sélectionne un modèle lorsque la section est intégrée à une fiche */
  defaultVehicleSlug?: string;
}

export function ReservationSection({ content, defaultVehicleSlug }: ReservationSectionProps) {
  const mapsUrl = externalHref(siteConfig.address.mapsUrl);

  return (
    <section
      id="reservation"
      className="scroll-mt-24 border-t border-brand-line/60 bg-brand-charcoal/40 py-20 sm:py-28"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <DisplayTitle className="mt-6">{content.title}</DisplayTitle>
            <p className="mt-6 text-base leading-relaxed text-brand-silver">{content.intro}</p>

            <ul className="mt-8 space-y-3.5">
              {content.reassurances.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-brand-silver">
                  <span aria-hidden="true" className="mt-2.5 h-px w-5 shrink-0 bg-brand-accent/70" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-brand-line/60 pt-8">
              {isWhatsAppEnabled() ? (
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-brand-line px-5 py-3.5 text-sm text-brand-ivory transition-colors hover:border-brand-accent hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366]" aria-hidden="true" />
                  {content.whatsappLabel}
                </a>
              ) : null}

              <ul className="mt-8 space-y-3 text-sm">
                <li className="flex items-start gap-2.5">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                  <ContactValue
                    value={siteConfig.contact.phone}
                    href={telHref(siteConfig.contact.phone)}
                  />
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                  <ContactValue
                    value={siteConfig.contact.email}
                    href={mailtoHref(siteConfig.contact.email)}
                  />
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                  <ContactValue
                    value={`${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city}`}
                    href={mapsUrl}
                    external
                  />
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ShowroomBookingForm defaultVehicleSlug={defaultVehicleSlug} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
