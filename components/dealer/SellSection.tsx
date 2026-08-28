import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import type { DealerContent } from "@/data/dealer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ContactValue } from "@/components/showroom/ContactValue";
import { SellVehicleForm } from "@/components/forms/SellVehicleForm";
import { WhatsAppIcon } from "@/components/ui/icons";
import { externalHref, mailtoHref, telHref } from "@/lib/placeholders";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface SellSectionProps {
  content: DealerContent["sell"];
}

export function SellSection({ content }: SellSectionProps) {
  const mapsUrl = externalHref(siteConfig.address.mapsUrl);

  return (
    <section id="vendre" className="scroll-mt-20 bg-brand-charcoal py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <SectionTitle eyebrow={content.eyebrow} title={content.title} align="left" />
            <p className="mt-5 text-base leading-relaxed text-brand-silver">{content.intro}</p>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-accent/40 bg-brand-accent/10 px-4 py-1.5 text-sm font-semibold text-brand-accent">
              {content.responseTime}
            </p>

            <ul className="mt-7 space-y-3">
              {content.reassurances.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-brand-ivory">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-brand-line pt-6">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-lg border border-brand-line bg-brand-black px-4 py-3 text-sm font-semibold text-brand-ivory transition-colors hover:border-brand-accent hover:text-brand-accent"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" aria-hidden="true" />
                {content.whatsappLabel}
              </a>

              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                  <ContactValue value={siteConfig.contact.phone} href={telHref(siteConfig.contact.phone)} />
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                  <ContactValue value={siteConfig.contact.email} href={mailtoHref(siteConfig.contact.email)} />
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                  <ContactValue
                    value={`${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city}`}
                    href={mapsUrl}
                    external
                  />
                </li>
              </ul>
            </div>
          </div>

          <SellVehicleForm />
        </div>
      </div>
    </section>
  );
}
