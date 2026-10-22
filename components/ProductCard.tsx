import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import { formatRupiah, type Product } from "@/data/products";
import { productOrderLink } from "@/lib/whatsapp";

export const tone: Record<Product["category"], string> = {
  Kopi: "bg-bubble",
  "Non-Kopi": "bg-mint",
  "Biji Kopi": "bg-lemon",
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="pop pop-press flex flex-col overflow-hidden rounded-3xl bg-white odd:-rotate-1 even:rotate-1 hover:rotate-0">
      <Link href={`/produk/${product.slug}`} className="block">
        <div
          className={`relative flex aspect-[4/3] items-center justify-center border-b-[2.5px] border-ink ${tone[product.category]}`}
        >
          <svg
            viewBox="0 0 120 120"
            className="h-20 w-20 text-ink"
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
          <span className="font-display absolute right-3 top-3 rotate-3 rounded-full border-2 border-ink bg-white px-3 py-1 text-sm font-extrabold">
            {formatRupiah(product.price)}
          </span>
        </div>

        <div className="p-4">
          <p className="inline-block rounded-full border-2 border-ink px-2.5 py-0.5 text-xs font-semibold">
            {product.category}
          </p>
          <h3 className="font-display mt-2 text-xl font-extrabold leading-tight">{product.name}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-ink/70">{product.description}</p>
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