export type Product = {
  slug: string;
  name: string;
  price: number;
  description: string;
  category: "Kopi" | "Non-Kopi" | "Biji Kopi";
};

export const products: Product[] = [
  { slug: "kopi-susu-gula-aren", name: "Kopi Susu Gula Aren", price: 22000, category: "Kopi", description: "Espresso, susu segar, dan gula aren yang manis dan legit." },
  { slug: "espresso", name: "Espresso", price: 15000, category: "Kopi", description: "Shot espresso pekat dengan crema tebal dari biji Arabika." },
  { slug: "americano", name: "Americano", price: 18000, category: "Kopi", description: "Espresso dengan air panas, ringan dan bersih di lidah." },
  { slug: "cappuccino", name: "Cappuccino", price: 24000, category: "Kopi", description: "Espresso dengan susu steam dan foam lembut." },
  { slug: "v60-arabika-malang", name: "V60 Arabika Malang", price: 28000, category: "Kopi", description: "Seduh manual V60, rasa buah dan asam yang segar." },
  { slug: "kopi-tubruk", name: "Kopi Tubruk", price: 12000, category: "Kopi", description: "Kopi tubruk khas, pekat dan harum, diseduh tradisional." },
  { slug: "matcha-latte", name: "Matcha Latte", price: 26000, category: "Non-Kopi", description: "Matcha dengan susu, creamy dan tidak terlalu manis." },
  { slug: "biji-kopi-arabika-250g", name: "Biji Kopi Arabika 250g", price: 85000, category: "Biji Kopi", description: "Biji sangrai segar, bisa digiling sesuai alat seduhmu." },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export const formatRupiah = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);