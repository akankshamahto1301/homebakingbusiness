import { ArrowRight, MessageCircle } from 'lucide-react';
import { bakeryConfig, waLink } from '@/data/bakery';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream-100 pt-20 lg:pt-24">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-40 h-72 w-72 rounded-full bg-blush-100 blur-3xl opacity-60" />
        <div className="absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-cream-200 blur-3xl opacity-70" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-12 md:px-12 lg:grid-cols-2 lg:gap-8 lg:pb-24 lg:pt-20">
        {/* Text */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blush-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blush-500">
            <span className="h-1.5 w-1.5 rounded-full bg-blush-400" />
            Home Bakery
          </div>

          <h1 className="text-balance font-serif text-4xl font-semibold leading-tight text-cocoa-600 sm:text-5xl lg:text-6xl">
            Freshly Baked,
            <br />
            <span className="italic text-blush-400">Made With Love.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-cocoa-400 lg:mx-0 lg:text-lg">
            Homemade cakes, brownies, cookies and sweet treats made especially for your special moments.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#menu" className="btn-primary w-full sm:w-auto">
              View Menu
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={waLink(`Hi! I would like to place an order from ${bakeryConfig.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Order on WhatsApp
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex items-center justify-center gap-6 text-xs font-medium uppercase tracking-wider text-cocoa-300 lg:justify-start">
            <span className="flex items-center gap-1.5">
              <span className="text-gold-400">✦</span> Fresh Ingredients
            </span>
            <span className="h-3 w-px bg-cream-300" />
            <span className="flex items-center gap-1.5">
              <span className="text-gold-400">✦</span> Made to Order
            </span>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2">
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] rounded-tl-[5rem] shadow-2xl shadow-cocoa-900/15">
              <img
                src="https://images.pexels.com/photos/19940993/pexels-photo-19940993.png?auto=compress&cs=tinysrgb&h=800&w=1000"
                alt="Rich chocolate cake slices with frosting"
                className="h-[340px] w-full object-cover sm:h-[420px] lg:h-[520px]"
                loading="eager"
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-5 left-4 rounded-2xl bg-cream-50/95 px-5 py-3 shadow-xl shadow-cocoa-900/10 backdrop-blur-sm sm:left-8 lg:-left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blush-100 text-lg">
                  ♡
                </div>
                <div>
                  <p className="font-serif text-sm font-semibold text-cocoa-600">Baked Fresh Daily</p>
                  <p className="text-xs text-cocoa-300">Small batches, big love</p>
                </div>
              </div>
            </div>

            {/* Gold accent ring */}
            <div className="absolute -right-3 -top-3 h-20 w-20 rounded-full border-2 border-gold-300/50 lg:-right-6 lg:-top-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
