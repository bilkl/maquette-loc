import { CarFront, MessageSquareText, Send } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const steps = [
  {
    icon: CarFront,
    title: "Choisissez votre véhicule",
    description: "Parcourez notre sélection et repérez le véhicule adapté à votre besoin.",
  },
  {
    icon: Send,
    title: "Envoyez votre demande",
    description: "Complétez le formulaire de réservation ou contactez-nous directement via WhatsApp.",
  },
  {
    icon: MessageSquareText,
    title: "Prenez la route",
    description: "Après confirmation des conditions, récupérez votre véhicule préparé et partez.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-brand-black py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Simplicité" title="Comment fonctionne la location" />

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <div key={title} className="relative pl-16">
              <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-brand-accent/40 text-base font-semibold text-brand-accent">
                {index + 1}
              </span>
              <Icon className="mb-4 h-6 w-6 text-brand-accent" aria-hidden="true" />
              <h3 className="text-lg font-semibold text-brand-ivory">{title}</h3>
              <p className="mt-3 text-base leading-relaxed text-brand-silver">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
