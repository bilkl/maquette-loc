import { faqItems } from "@/data/faq";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FAQAccordion } from "@/components/sections/FAQAccordion";

export function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-24 bg-brand-black py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Questions fréquentes"
          title="Tout ce qu'il faut savoir avant de réserver"
          description="Les conditions exactes peuvent varier selon le véhicule. Elles vous seront confirmées avant la réservation."
        />

        <div className="mt-12">
          <FAQAccordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
