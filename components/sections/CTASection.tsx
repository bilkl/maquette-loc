import { LinkButton } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-brand-charcoal py-28 lg:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-brand-ivory sm:text-5xl lg:text-6xl">
          Prêt à prendre le volant d&apos;un véhicule d&apos;exception ?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-brand-silver">
          Envoyez votre demande dès maintenant, notre équipe revient vers vous rapidement pour
          confirmer la disponibilité et les conditions de location.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
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
