import { faqItems } from "@/data/faq";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { isWhatsAppEnabled } from "@/lib/whatsapp";

export function PlombierFAQSection() {
  return (
    <section id="faq" className="scroll-mt-20 border-t border-brand-line bg-brand-charcoal py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Questions fréquentes"
          title="Ce que l'on nous demande le plus souvent"
          description={
            isWhatsAppEnabled()
              ? "Une autre question ? Contactez-nous directement par téléphone ou WhatsApp."
              : "Une autre question ? Contactez-nous directement par téléphone ou e-mail."
          }
        />

        <div className="mt-10">
          <FAQAccordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
