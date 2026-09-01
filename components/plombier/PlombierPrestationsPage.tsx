import { Check } from "lucide-react";
import { getPlombierContent } from "@/data/plombier";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PlombierLinkButton } from "@/components/plombier/PlombierButton";
import { serviceIcons } from "@/components/plombier/icons";
import { AppointmentSection } from "@/components/plombier/AppointmentSection";

/** Page "Nos prestations" : le détail de chaque service, avec un tarif indicatif. */
export function PlombierPrestationsPage() {
  const content = getPlombierContent();

  return (
    <>
      <section className="border-b border-brand-line bg-brand-charcoal py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow={content.servicesPage.eyebrow}
            title={content.servicesPage.title}
            description={content.servicesPage.intro}
            align="left"
          />
        </div>
      </section>

      <section className="bg-brand-black py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col divide-y divide-brand-line">
            {content.services.items.map((service) => {
              const Icon = serviceIcons[service.icon];
              return (
                <article
                  key={service.slug}
                  id={service.slug}
                  className="scroll-mt-24 grid grid-cols-1 gap-6 py-10 first:pt-0 last:pb-0 lg:grid-cols-[1fr_1.4fr] lg:items-start lg:gap-14"
                >
                  <div>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h2 className="mt-4 text-2xl font-extrabold text-brand-ivory">{service.name}</h2>
                    <p className="mt-2 text-base leading-relaxed text-brand-silver">
                      {service.shortDescription}
                    </p>
                    {service.startingPrice ? (
                      <p className="mt-4 text-base font-bold text-brand-accent">
                        {service.startingPrice}
                      </p>
                    ) : null}
                    <PlombierLinkButton
                      href="/#devis"
                      variant="secondary"
                      className="mt-5 w-full sm:w-auto"
                    >
                      Demander une intervention
                    </PlombierLinkButton>
                  </div>

                  <ul className="space-y-2.5">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5 text-sm text-brand-ivory">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <p className="mt-10 max-w-2xl text-sm text-brand-silver">{content.services.pricingNote}</p>
        </div>
      </section>

      <AppointmentSection content={content.appointment} services={content.services.items} />
    </>
  );
}
