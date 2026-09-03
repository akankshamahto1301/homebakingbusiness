import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { menu, waLink } from '@/data/bakery';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(menu[0].id);
  const { ref, isVisible } = useScrollReveal();

  const current = menu.find((c) => c.id === activeCategory) ?? menu[0];

  return (
    <section id="menu" className="section-padding bg-cream-100">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div
          ref={ref}
          className={`mx-auto mb-12 max-w-2xl text-center ${isVisible ? 'is-visible' : ''} reveal`}
        >
          <p className="heading-eyebrow">Our Menu</p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-cocoa-600 sm:text-4xl lg:text-5xl">
            Sweet Treats for Every Craving
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cocoa-400 lg:text-lg">
            Every item is made fresh to order. Prices vary by size and customisation — reach out on WhatsApp for details.
          </p>
        </div>

        {/* Category tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {menu.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 sm:px-7 sm:py-3 ${
                activeCategory === cat.id
                  ? 'bg-cocoa-500 text-cream-100 shadow-md shadow-cocoa-500/20'
                  : 'bg-cream-200 text-cocoa-400 hover:bg-cream-300 hover:text-cocoa-500'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div
          key={activeCategory}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
        >
          {current.items.map((item, idx) => (
            <article
              key={item.name}
              className="group flex flex-col overflow-hidden rounded-2xl bg-cream-50 shadow-md shadow-cocoa-900/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-cocoa-900/10"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cocoa-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-serif text-lg font-semibold text-cocoa-600">
                  {item.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-cocoa-400">
                  {item.description}
                </p>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="text-sm font-medium text-gold-600">
                    Starting from {item.price}
                  </span>
                </div>

                <a
                  href={waLink(`Hi! I would like to order ${item.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-blush-50 px-5 py-2.5 text-sm font-medium text-blush-500 transition-all duration-300 hover:bg-blush-400 hover:text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  Order This
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
