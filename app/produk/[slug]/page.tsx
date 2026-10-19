import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { formatRupiah, getProduct, products } from "@/data/products";
import { productOrderLink } from "@/lib/whatsapp";

type Props = { params: Promise<{ slug: string }> };

// Memberi tahu Next.js halaman apa saja yang dibuat saat build
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Produk tidak ditemukan" };
  return {
    title: `${product.name} | Kopi Nusantara`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const others = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Link href="/#menu" className="text-sm font-medium text-stone-600 hover:text-amber-900">
        ← Kembali ke menu
      </Link>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <div className="flex aspect-square items-center justify-center rounded-3xl bg-amber-100 text-amber-900">
          <svg
            viewBox="0 0 120 120"
            className="h-40 w-40 opacity-70"
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

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-800">
            {product.category}
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 text-3xl font-bold text-amber-900">{formatRupiah(product.price)}</p>
          <p className="mt-5 text-lg text-stone-600">{product.description}</p>

          <WhatsAppButton href={productOrderLink(product.name)} className="mt-8 w-full sm:w-auto">
            Pesan {product.name} via WhatsApp
          </WhatsAppButton>

          <div className="mt-10 rounded-2xl border border-stone-200 bg-white p-5">
            <p className="font-semibold">Cara pesan</p>
            <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-stone-600">
              <li>Klik tombol pesan di atas.</li>
              <li>Kirim pesan yang sudah terisi otomatis di WhatsApp.</li>
              <li>Tim kami akan mengonfirmasi pesananmu.</li>
            </ol>
          </div>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight">Menu lainnya</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}