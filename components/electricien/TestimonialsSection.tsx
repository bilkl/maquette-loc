import { Star } from "lucide-react";
import type { ElectricienContent, ElectricienTestimonial } from "@/data/electricien";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface TestimonialsSectionProps {
  content: ElectricienContent["testimonials"];
}

export function TestimonialsSection({ content }: TestimonialsSectionProps) {
  return (
    <section id="avis" className="scroll-mt-20 border-b border-brand-line bg-brand-black py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.intro}
          align="left"
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {content.items.map((testimonial) => (
            <TestimonialCard key={testimonial.author} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: ElectricienTestimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-xl border border-brand-line bg-brand-charcoal p-6">
      <div className="flex items-center gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={
              index < testimonial.rating
                ? "h-4 w-4 fill-brand-accent text-brand-accent"
                : "h-4 w-4 text-brand-line"
            }
          />
        ))}
      </div>
      <span className="sr-only">{testimonial.rating} étoiles sur 5</span>

      <blockquote className="mt-4 flex-1 text-base leading-relaxed text-brand-ivory">
        « {testimonial.quote} »
      </blockquote>

      <figcaption className="mt-5 border-t border-brand-line pt-4 text-sm">
        <span className="font-semibold text-brand-ivory">{testimonial.author}</span>
        {testimonial.context ? (
          <span className="block text-brand-silver">{testimonial.context}</span>
        ) : null}
      </figcaption>
    </figure>
  );
}
