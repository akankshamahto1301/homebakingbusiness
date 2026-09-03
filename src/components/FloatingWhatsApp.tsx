import { MessageCircle } from 'lucide-react';
import { waLink, bakeryConfig } from '@/data/bakery';

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink(`Hi! I would like to place an order from ${bakeryConfig.name}.`)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-blush-400 text-white shadow-lg shadow-blush-400/30 transition-all duration-300 hover:scale-110 hover:bg-blush-500 active:scale-95"
      aria-label="Order on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-blush-400 opacity-20" />
    </a>
  );
}
