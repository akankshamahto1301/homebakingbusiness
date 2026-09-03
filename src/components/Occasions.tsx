import { Cake, Heart, Baby, GraduationCap, Gift } from 'lucide-react';
import { occasions } from '@/data/bakery';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, typeof Cake> = {
  Cake,
  Heart,
  Baby,
  GraduationCap,
  Gift,
};

export default function Occasions() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-cream-50">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl ${isVisible ? 'is-visible' : ''} reveal`}
      >
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="heading-eyebrow">Occasions</p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-cocoa-600 sm:text-4xl lg:text-5xl">
            Made For Every Celebration
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cocoa-400 lg:text-lg">
            Whatever the moment, we'll make it sweeter. Click any occasion to explore custom options.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {occasions.map((occ, idx) => {
            const Icon = iconMap[occ.icon] ?? Heart;
            return (
              <a
                key={occ.label}
                href="#menu"
                className="group flex flex-col items-center gap-3 rounded-2xl bg-cream-100 p-6 text-center shadow-sm shadow-cocoa-900/5 transition-all duration-500 hover:-translate-y-1.5 hover:bg-blush-50 hover:shadow-lg hover:shadow-blush-400/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blush-100 text-blush-400 transition-colors duration-300 group-hover:bg-blush-400 group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium text-cocoa-500 transition-colors group-hover:text-cocoa-600">
                  {occ.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
