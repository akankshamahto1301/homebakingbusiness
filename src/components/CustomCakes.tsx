import { Sparkles, MessageCircle } from 'lucide-react';
import { customCakes, waLink } from '@/data/bakery';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function CustomCakes() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-cocoa-600 text-cream-100">
      <div className="mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`mx-auto mb-12 max-w-2xl text-center ${isVisible ? 'is-visible' : ''} reveal`}
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-gold-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            <Sparkles className="h-3.5 w-3.5" />
            Bespoke Creations
          </div>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-cream-100 sm:text-4xl lg:text-5xl">
            Dream Cake? Let's Create It.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cream-300 lg:text-lg">
            Have a theme, colour or design in mind? Tell us what you want and we'll create a cake specially for your celebration.
          </p>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {customCakes.map((cake, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-2xl ${
                idx === 0 ? 'col-span-2 lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <img
                src={cake.image}
                alt={cake.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  idx === 0 ? 'h-64 sm:h-80 lg:h-full lg:min-h-[400px]' : 'h-40 sm:h-52 lg:h-52'
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={waLink('Hi! I would like to request a custom cake. Here are my details: ')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blush-400 px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-blush-500 hover:shadow-lg hover:shadow-blush-400/30 active:scale-95"
          >
            <MessageCircle className="h-4 w-4" />
            Request a Custom Cake
          </a>
        </div>
      </div>
    </section>
  );
}
