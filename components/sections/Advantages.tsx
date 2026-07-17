import { CalendarCheck, Car, Headset, Timer } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const advantages = [
  {
    icon: Car,
    title: "Véhicules sélectionnés",
    description: "Une gamme de véhicules de prestige choisis pour leur standing et leur fiabilité.",
  },
  {
    icon: CalendarCheck,
    title: "Réservation simple",
    description: "Un formulaire clair et une prise de contact rapide par WhatsApp ou e-mail.",
  },
  {
    icon: Headset,
    title: "Service personnalisé",
    description: "Un accompagnement dédié pour définir la formule la plus adaptée à vos besoins.",
  },
  {
    icon: Timer,
    title: "Courte et longue durée",
    description: "Des formules flexibles, du week-end à la location prolongée sur plusieurs mois.",
  },
];

export function Advantages() {
  return (
    <section className="bg-brand-charcoal py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Pourquoi NL Prestige" title="Une expérience de location pensée pour vous" />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-brand-line/60 bg-brand-black/40 p-6 transition-colors hover:border-brand-red/50"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-red/10">
                <Icon className="h-5 w-5 text-brand-red" aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold text-brand-ivory">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-silver">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
