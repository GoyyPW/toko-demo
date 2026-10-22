import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProductGrid() {
  return (
    <section id="menu" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-12">
      <div className="mb-10">
        <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          Mau minum apa hari ini?
        </h2>
        <p className="mt-3 text-lg text-ink/70">
          Tinggal pilih, tekan Pesan, lalu ngobrol di WhatsApp.
        </p>
      </div>

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
}