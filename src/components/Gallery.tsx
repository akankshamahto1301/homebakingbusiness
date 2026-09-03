import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { gallery } from '@/data/bakery';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollReveal();

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? prev : (prev - 1 + gallery.length) % gallery.length));
  }, []);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? prev : (prev + 1) % gallery.length));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  return (
    <section id="gallery" className="section-padding bg-cream-50">
      <div className="mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`mx-auto mb-12 max-w-2xl text-center ${isVisible ? 'is-visible' : ''} reveal`}
        >
          <p className="heading-eyebrow">Gallery</p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-cocoa-600 sm:text-4xl lg:text-5xl">
            Moments Worth Savoring
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cocoa-400 lg:text-lg">
            A glimpse of the sweet creations that have come out of our kitchen.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4 [&>*]:mb-4">
          {gallery.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              className="group relative block w-full overflow-hidden rounded-2xl break-inside-avoid"
            >
              <img
                src={img.image}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-cocoa-900/70 via-cocoa-900/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="p-4 text-left text-sm font-medium text-cream-100">
                  {img.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-cocoa-900/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-cream-100/10 text-cream-100 transition-colors hover:bg-cream-100/20"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full bg-cream-100/10 text-cream-100 transition-colors hover:bg-cream-100/20 sm:left-6"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          {/* Image */}
          <img
            src={gallery[lightboxIndex].image}
            alt={gallery[lightboxIndex].alt}
            className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full bg-cream-100/10 text-cream-100 transition-colors hover:bg-cream-100/20 sm:right-6"
            aria-label="Next image"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          {/* Label */}
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-cream-100/10 px-5 py-2 text-sm text-cream-100">
            {gallery[lightboxIndex].label} — {lightboxIndex + 1} / {gallery.length}
          </span>
        </div>
      )}
    </section>
  );
}
