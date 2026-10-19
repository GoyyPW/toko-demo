import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProductGrid() {
  return (
    <section id="menu" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-stone-900">Menu Kami</h2>
        <p className="mt-2 text-stone-600">Pilih favoritmu, lalu pesan langsung lewat WhatsApp.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
}