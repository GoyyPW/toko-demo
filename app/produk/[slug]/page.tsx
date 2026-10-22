import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard, { tone } from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { formatRupiah, getProduct, products } from "@/data/products";
import { productOrderLink } from "@/lib/whatsapp";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Produk tidak ditemukan" };
  return { title: `${product.name} | Kopi Nusantara`, description: product.description };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const others = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Link
        href="/#menu"
        className="pop pop-press inline-block rounded-full bg-white px-4 py-2 text-sm font-bold"
      >
        ← Kembali ke menu
      </Link>

      <div className="mt-8 grid gap-12 md:grid-cols-2">
        <div
          className={`pop flex aspect-square items-center justify-center rounded-[2rem] ${tone[product.category]}`}
        >
          <svg
            viewBox="0 0 120 120"
            className="h-40 w-40 text-ink"
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
          <p className="inline-block rounded-full border-2 border-ink px-3 py-1 text-sm font-semibold">
            {product.category}
          </p>
          <h1 className="font-display mt-3 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {product.name}
          </h1>
          <p className="font-display pop mt-5 inline-block -rotate-2 rounded-2xl bg-lemon px-4 py-2 text-3xl font-extrabold">
            {formatRupiah(product.price)}
          </p>
          <p className="mt-6 max-w-md text-lg text-ink/80">{product.description}</p>

          <WhatsAppButton href={productOrderLink(product.name)} className="mt-8 w-full sm:w-auto">
            Pesan {product.name} via WhatsApp
          </WhatsAppButton>

          <div className="pop mt-10 rounded-2xl bg-white p-5">
            <p className="font-display text-lg font-bold">Cara pesan</p>
            <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-ink/80">
              <li>Klik tombol pesan di atas.</li>
              <li>Kirim pesan yang sudah terisi otomatis di WhatsApp.</li>
              <li>Tim kami akan mengonfirmasi pesananmu.</li>
            </ol>
          </div>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="font-display text-3xl font-extrabold tracking-tight">Menu lainnya</h2>
        <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}