import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import { formatRupiah, type Product } from "@/data/products";
import { productOrderLink } from "@/lib/whatsapp";

const tone: Record<Product["category"], string> = {
  Kopi: "bg-amber-100 text-amber-900",
  "Non-Kopi": "bg-emerald-100 text-emerald-900",
  "Biji Kopi": "bg-stone-200 text-stone-800",
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition hover:shadow-lg">
      {/* Link hanya membungkus gambar dan teks, bukan tombol WhatsApp */}
      <Link href={`/produk/${product.slug}`} className="block">
        <div className={`flex aspect-[4/3] items-center justify-center ${tone[product.category]}`}>
          <svg
            viewBox="0 0 120 120"
            className="h-20 w-20 opacity-70"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M25 50h60v20a25 25 0 0 1-25 25h-10a25 25 0 0 1-25-25z" />
            <path d="M85 56h8a10 10 0 0 1 0 20h-10" />
            <path d="M45 20c-4 6 4 10 0 18M62 20c-4 6 4 10 0 18" />
          </svg>
        </div>

        <div className="p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-stone-500">
            {product.category}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-stone-900">{product.name}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-stone-600">{product.description}</p>
          <p className="mt-3 text-lg font-bold text-amber-900">{formatRupiah(product.price)}</p>
        </div>
      </Link>

      <div className="mt-auto px-4 pb-4">
        <WhatsAppButton href={productOrderLink(product.name)} className="w-full">
          Pesan
        </WhatsAppButton>
      </div>
    </article>
  );
}