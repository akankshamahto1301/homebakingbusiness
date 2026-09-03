import { ArrowRight } from 'lucide-react';
import { bakeryConfig } from '@/data/bakery';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding bg-cream-50">
      <div
        ref={ref}
        className={`mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
          isVisible ? 'is-visible' : ''
        } reveal`}
      >
        {/* Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] rounded-br-[5rem] shadow-xl shadow-cocoa-900/10">
            <img
              src="https://images.pexels.com/photos/8477755/pexels-photo-8477755.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Hands decorating a cake with frosting"
              className="h-[320px] w-full object-cover sm:h-[400px] lg:h-[460px]"
              loading="lazy"
            />
          </div>
          {/* Small accent image */}
          <div className="absolute -bottom-8 -right-4 hidden h-32 w-32 overflow-hidden rounded-2xl border-4 border-cream-50 shadow-lg sm:block lg:-right-8">
            <img
              src="https://images.pexels.com/photos/6958023/pexels-photo-6958023.jpeg?auto=compress&cs=tinysrgb&h=300&w=300"
              alt="Dusting powdered sugar on a cake"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="heading-eyebrow">Our Story</p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-cocoa-600 sm:text-4xl lg:text-5xl">
            A Little Bakery Made With Love ♡
          </h2>
          <p className="mt-6 text-base leading-relaxed text-cocoa-400 lg:text-lg">
            What started as a passion for baking for family and friends has grown into a small home
            bakery where every order is prepared fresh, with care and attention to the little details
            that make each celebration memorable.
          </p>
          <p className="mt-4 text-base leading-relaxed text-cocoa-400 lg:text-lg">
            From birthday cakes to gift boxes of brownies, everything is made in small batches using
            quality ingredients — never frozen, never mass-produced. Just honest, homemade goodness.
          </p>

          <a href="#contact" className="btn-secondary mt-8">
            Know More
            <ArrowRight className="h-4 w-4" />
          </a>

          {/* Small stats */}
          <div className="mt-10 flex gap-8 border-t border-cream-300 pt-6">
            <div>
              <p className="font-serif text-2xl font-semibold text-cocoa-600">100%</p>
              <p className="text-xs uppercase tracking-wider text-cocoa-300">Homemade</p>
            </div>
            <div className="w-px bg-cream-300" />
            <div>
              <p className="font-serif text-2xl font-semibold text-cocoa-600">Fresh</p>
              <p className="text-xs uppercase tracking-wider text-cocoa-300">Made to Order</p>
            </div>
            <div className="w-px bg-cream-300" />
            <div>
              <p className="font-serif text-2xl font-semibold text-cocoa-600">♡</p>
              <p className="text-xs uppercase tracking-wider text-cocoa-300">Crafted with Care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
