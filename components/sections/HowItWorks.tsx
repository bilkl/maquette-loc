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
    <section className="bg-brand-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Simplicité" title="Comment fonctionne la location" />

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <div key={title} className="relative pl-14">
              <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-brand-red/40 text-sm font-semibold text-brand-red">
                {index + 1}
              </span>
              <Icon className="mb-3 h-5 w-5 text-brand-red" aria-hidden="true" />
              <h3 className="text-base font-semibold text-brand-ivory">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-silver">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
