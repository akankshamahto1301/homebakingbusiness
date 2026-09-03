import { Instagram as InstagramIcon, MessageCircle, Phone } from 'lucide-react';
import { bakeryConfig, waLink, telLink } from '@/data/bakery';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-cocoa-600 px-6 py-14 text-cream-200 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-cream-100">
              {bakeryConfig.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-cream-300">
              Homemade with love in {bakeryConfig.city} ♡
            </p>

            {/* Social icons */}
            <div className="mt-6 flex gap-3">
              <a
                href={bakeryConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-100/10 text-cream-200 transition-colors hover:bg-blush-400 hover:text-white"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={waLink(`Hi! I would like to place an order from ${bakeryConfig.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-100/10 text-cream-200 transition-colors hover:bg-blush-400 hover:text-white"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={telLink()}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-100/10 text-cream-200 transition-colors hover:bg-blush-400 hover:text-white"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              Quick Links
            </h4>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream-300 transition-colors hover:text-cream-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              Get in Touch
            </h4>
            <ul className="space-y-2 text-sm text-cream-300">
              <li>{bakeryConfig.city}</li>
              <li>
                <a href={telLink()} className="transition-colors hover:text-cream-100">
                  {bakeryConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={bakeryConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cream-100"
                >
                  {bakeryConfig.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream-100/10 pt-6 sm:flex-row">
          <p className="text-xs text-cream-300">
            © {new Date().getFullYear()} {bakeryConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-cream-300">
            Made with ♡ for sweet moments.
          </p>
        </div>
      </div>
    </footer>
  );
}
