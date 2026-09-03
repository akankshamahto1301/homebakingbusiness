/**
 * ============================================================
 *  BAKERY CONFIGURATION — Edit these values to customize your site
 * ============================================================
 */

export const bakeryConfig = {
  name: 'Sweet Whispers Bakery',
  shortName: 'Sweet Whispers',
  tagline: 'Freshly Baked, Made With Love',
  city: 'Bengaluru',
  phone: '+91 98765 43210',
  phoneRaw: '+919876543210',
  whatsapp: '919876543210',
  instagram: 'https://instagram.com/sweetwhispersbakery',
  instagramHandle: '@sweetwhispersbakery',
};

/**
 * Build a WhatsApp deep link with a pre-filled message.
 */
export function waLink(message: string): string {
  return `https://wa.me/${bakeryConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function telLink(): string {
  return `tel:${bakeryConfig.phoneRaw}`;
}

/**
 * ============================================================
 *  MENU DATA
 *  Replace image URLs and prices at your convenience.
 * ============================================================
 */

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  alt: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

export const menu: MenuCategory[] = [
  {
    id: 'cakes',
    label: 'Cakes',
    items: [
      {
        name: 'Chocolate Truffle Cake',
        description: 'Rich chocolate sponge layered with silky ganache and a glossy truffle glaze.',
        price: '₹XXX',
        image: 'https://images.pexels.com/photos/19940993/pexels-photo-19940993.png?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Chocolate truffle cake slice',
      },
      {
        name: 'Red Velvet Cake',
        description: 'Cocoa-kissed red velvet layers with smooth cream cheese frosting.',
        price: '₹XXX',
        image: 'https://images.pexels.com/photos/5112676/pexels-photo-5112676.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Red velvet cake slice with cream cheese frosting',
      },
      {
        name: 'Biscoff Cake',
        description: 'Caramelised Biscoff spread swirled into a light, spiced sponge.',
        price: '₹XXX',
        image: 'https://images.pexels.com/photos/10249465/pexels-photo-10249465.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Biscoff cheesecake with Lotus biscuit',
      },
      {
        name: 'Vanilla Cake',
        description: 'Classic vanilla bean sponge with whipped cream and fresh seasonal fruit.',
        price: '₹XXX',
        image: 'https://images.pexels.com/photos/12933560/pexels-photo-12933560.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Vanilla cream cake with strawberries',
      },
      {
        name: 'Fresh Fruit Cake',
        description: 'Light sponge topped with a medley of fresh fruit and velvety cream.',
        price: '₹XXX',
        image: 'https://images.pexels.com/photos/28254500/pexels-photo-28254500.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Fresh fruit cake with berries and cream',
      },
    ],
  },
  {
    id: 'brownies',
    label: 'Brownies',
    items: [
      {
        name: 'Classic Chocolate Brownie',
        description: 'Fudgy, gooey centre with a crackly top — pure chocolate indulgence.',
        price: '₹XXX',
        image: 'https://images.pexels.com/photos/33917898/pexels-photo-33917898.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Classic chocolate brownie',
      },
      {
        name: 'Walnut Brownie',
        description: 'Toasted walnuts folded into a dense, chewy chocolate base.',
        price: '₹XXX',
        image: 'https://images.pexels.com/photos/6390689/pexels-photo-6390689.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Walnut brownie with berries',
      },
      {
        name: 'Biscoff Brownie',
        description: 'Swirls of melted Biscoff through a rich, fudgy brownie slab.',
        price: '₹XXX',
        image: 'https://images.pexels.com/photos/28935534/pexels-photo-28935534.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Biscoff brownie with cream drizzle',
      },
    ],
  },
  {
    id: 'cookies',
    label: 'Cookies',
    items: [
      {
        name: 'Chocolate Chip Cookies',
        description: 'Buttery cookies with pools of melted dark chocolate chunks.',
        price: '₹XXX',
        image: 'https://images.pexels.com/photos/1196301/pexels-photo-1196301.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Chocolate chip cookies',
      },
      {
        name: 'Double Chocolate Cookies',
        description: 'Cocoa dough studded with white and dark chocolate chips.',
        price: '₹XXX',
        image: 'https://images.pexels.com/photos/5847092/pexels-photo-5847092.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Double chocolate chunk cookies',
      },
      {
        name: 'Butter Cookies',
        description: 'Melt-in-the-mouth shortbread-style cookies with a delicate crumb.',
        price: '₹XXX',
        image: 'https://images.pexels.com/photos/797761/pexels-photo-797761.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Butter cookies on a cooling rack',
      },
    ],
  },
  {
    id: 'cupcakes',
    label: 'Cupcakes',
    items: [
      {
        name: 'Chocolate Cupcake',
        description: 'Moist chocolate sponge topped with swirled chocolate buttercream.',
        price: '₹XXX',
        image: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Chocolate cupcake with frosting',
      },
      {
        name: 'Red Velvet Cupcake',
        description: 'Red velvet sponge with a cloud of cream cheese frosting.',
        price: '₹XXX',
        image: 'https://images.pexels.com/photos/6493067/pexels-photo-6493067.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Red velvet cupcake with pink frosting',
      },
      {
        name: 'Vanilla Cupcake',
        description: 'Light vanilla sponge with pastel buttercream and sprinkles.',
        price: '₹XXX',
        image: 'https://images.pexels.com/photos/14105/pexels-photo-14105.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Vanilla cupcake with colorful icing',
      },
    ],
  },
];

/**
 * ============================================================
 *  CUSTOM CAKES GALLERY
 * ============================================================
 */

export const customCakes = [
  {
    image: 'https://images.pexels.com/photos/34833097/pexels-photo-34833097.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Pink two-tier birthday cake with roses',
  },
  {
    image: 'https://images.pexels.com/photos/5691261/pexels-photo-5691261.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Yellow birthday cake with macarons',
  },
  {
    image: 'https://images.pexels.com/photos/28171622/pexels-photo-28171622.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'White floral celebration cake',
  },
  {
    image: 'https://images.pexels.com/photos/27176374/pexels-photo-27176374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'First birthday cake with cupcakes',
  },
];

/**
 * ============================================================
 *  GALLERY
 * ============================================================
 */

export interface GalleryImage {
  image: string;
  alt: string;
  label: string;
}

export const gallery: GalleryImage[] = [
  {
    image: 'https://images.pexels.com/photos/12616001/pexels-photo-12616001.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Decorated chocolate birthday cake',
    label: 'Birthday Cakes',
  },
  {
    image: 'https://images.pexels.com/photos/29051739/pexels-photo-29051739.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Elegant floral wedding cakes',
    label: 'Custom Cakes',
  },
  {
    image: 'https://images.pexels.com/photos/15896658/pexels-photo-15896658.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Colorful cupcakes with swirled icing',
    label: 'Cupcakes',
  },
  {
    image: 'https://images.pexels.com/photos/30353753/pexels-photo-30353753.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Fudgy brownies stacked on a plate',
    label: 'Brownies',
  },
  {
    image: 'https://images.pexels.com/photos/8837035/pexels-photo-8837035.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Homemade cookies close-up',
    label: 'Cookies',
  },
  {
    image: 'https://images.pexels.com/photos/10390457/pexels-photo-10390457.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Assorted dessert gift box',
    label: 'Dessert Boxes',
  },
  {
    image: 'https://images.pexels.com/photos/30575774/pexels-photo-30575774.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Homemade chocolate cake with pistachios',
    label: 'Custom Cakes',
  },
  {
    image: 'https://images.pexels.com/photos/28159640/pexels-photo-28159640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Luxury dessert platter',
    label: 'Dessert Boxes',
  },
];

/**
 * ============================================================
 *  WHY CHOOSE US
 * ============================================================
 */

export const whyChooseUs = [
  {
    icon: 'Wheat',
    title: 'Freshly Baked',
    description: 'Every order is baked fresh — never frozen, never sitting on a shelf.',
  },
  {
    icon: 'Heart',
    title: 'Made to Order',
    description: 'Each treat is crafted only after you place your order, just for you.',
  },
  {
    icon: 'Leaf',
    title: 'Quality Ingredients',
    description: 'Real butter, premium chocolate and fresh ingredients — no shortcuts.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Made With Love',
    description: 'Small-batch, home-baked goodness in every single bite.',
  },
];

/**
 * ============================================================
 *  OCCASIONS
 * ============================================================
 */

export const occasions = [
  { icon: 'Cake', label: 'Birthdays' },
  { icon: 'Heart', label: 'Anniversaries' },
  { icon: 'Baby', label: 'Baby Showers' },
  { icon: 'GraduationCap', label: 'Graduations' },
  { icon: 'Gift', label: 'Gifting' },
  { icon: 'Heart', label: 'Just Because' },
];

/**
 * ============================================================
 *  TESTIMONIALS — Edit these reviews freely
 * ============================================================
 */

export const testimonials = [
  {
    review: 'Absolutely loved the cake! It looked beautiful and tasted even better. The chocolate truffle was so rich and moist.',
    author: 'Priya S.',
    occasion: 'Birthday Order',
  },
  {
    review: 'Ordered brownies for a family get-together and they disappeared in minutes. Fudgy, gooey and absolutely divine.',
    author: 'Arjun M.',
    occasion: 'Brownie Box',
  },
  {
    review: 'The custom cake for our anniversary exceeded all expectations. Every detail was perfect. Thank you for making our day special.',
    author: 'Riya & Karan',
    occasion: 'Anniversary Cake',
  },
];

/**
 * ============================================================
 *  INSTAGRAM GRID
 * ============================================================
 */

export const instagramPosts = [
  'https://images.pexels.com/photos/19940993/pexels-photo-19940993.png?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/4555505/pexels-photo-4555505.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/1196301/pexels-photo-1196301.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/14105/pexels-photo-14105.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/34833097/pexels-photo-34833097.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/8211309/pexels-photo-8211309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];
