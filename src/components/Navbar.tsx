import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { bakeryConfig, waLink } from '@/data/bakery';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-100/95 backdrop-blur-md shadow-sm shadow-cocoa-900/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <a
          href="#home"
          className="font-serif text-xl font-semibold tracking-tight text-cocoa-600 transition-colors hover:text-cocoa-500 md:text-2xl"
        >
          {bakeryConfig.name}
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm font-medium text-cocoa-500 transition-colors hover:text-cocoa-600"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={waLink(`Hi! I would like to place an order from ${bakeryConfig.name}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-blush-400 px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-blush-500 hover:shadow-md hover:shadow-blush-400/30 lg:inline-flex"
        >
          <MessageCircle className="h-4 w-4" />
          Order on WhatsApp
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-cocoa-600 transition-colors hover:bg-cream-200 lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-cocoa-900/40 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute right-0 top-0 flex h-full w-80 max-w-[85vw] flex-col bg-cream-100 shadow-2xl transition-transform duration-400 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-cream-300 px-6 py-5">
            <span className="font-serif text-lg font-semibold text-cocoa-600">
              {bakeryConfig.shortName}
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-cocoa-600 transition-colors hover:bg-cream-200"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <ul className="flex flex-col gap-1 px-4 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-cocoa-500 transition-colors hover:bg-cream-200 hover:text-cocoa-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto px-6 pb-8">
            <a
              href={waLink(`Hi! I would like to place an order from ${bakeryConfig.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-blush-400 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-blush-500"
            >
              <MessageCircle className="h-4 w-4" />
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
