import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/bakery';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-cream-100">
      <div className="mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`mx-auto mb-12 max-w-2xl text-center ${isVisible ? 'is-visible' : ''} reveal`}
        >
          <p className="heading-eyebrow">Testimonials</p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-cocoa-600 sm:text-4xl lg:text-5xl">
            Sweet Words From Our Customers
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {testimonials.map((t, idx) => (
            <figure
              key={idx}
              className="relative flex flex-col rounded-2xl bg-cream-50 p-8 shadow-md shadow-cocoa-900/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-cocoa-900/10"
            >
              {/* Quote icon */}
              <div className="mb-4 flex items-center justify-between">
                <Quote className="h-8 w-8 text-blush-200" />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
              </div>

              <blockquote className="flex-1 text-base leading-relaxed text-cocoa-400">
                "{t.review}"
              </blockquote>

              <figcaption className="mt-6 border-t border-cream-300 pt-4">
                <p className="font-serif text-base font-semibold text-cocoa-600">
                  {t.author}
                </p>
                <p className="text-xs uppercase tracking-wider text-cocoa-300">
                  {t.occasion}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-cocoa-300">
          Reviews shown are editable placeholders — replace them with your own customer feedback.
        </p>
      </div>
    </section>
  );
}
