import { LinkButton } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="bg-brand-charcoal py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-brand-ivory sm:text-4xl">
          Prêt à prendre le volant d&apos;un véhicule d&apos;exception ?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-brand-silver">
          Envoyez votre demande dès maintenant, notre équipe revient vers vous rapidement pour
          confirmer la disponibilité et les conditions de location.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <LinkButton href="/contact" variant="primary">
            Demander une réservation
          </LinkButton>
          <LinkButton href="/vehicules" variant="secondary">
            Voir nos véhicules
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
