import { faqItems } from "@/data/faq";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FAQAccordion } from "@/components/sections/FAQAccordion";

export function DealerFAQSection() {
  return (
    <section id="faq" className="scroll-mt-20 border-t border-brand-line bg-brand-black py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Questions fréquentes"
          title="Ce que l'on nous demande le plus souvent"
          description="Une autre question ? Contactez-nous directement par téléphone ou WhatsApp."
        />
        <div className="mt-10">
          <FAQAccordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
