import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import { orderLink } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-20">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-800">
          Kopi lokal Malang
        </p>
        <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-stone-900 md:text-5xl">
          Secangkir kopi terbaik, dipesan semudah kirim chat.
        </h1>
        <p className="mt-4 max-w-md text-lg text-stone-600">
          Biji pilihan dari petani lokal, disangrai segar dan diseduh sepenuh hati. Pesan langsung lewat WhatsApp.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton href={orderLink()}>Pesan via WhatsApp</WhatsAppButton>
          <Link
            href="/#menu"
            className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-800 transition hover:bg-stone-100"
          >
            Lihat Menu
          </Link>
        </div>
      </div>

      {/* Visual placeholder: nanti bisa diganti foto asli */}
      <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl bg-amber-100">
        <div className="absolute -right-12 -top-12 h-60 w-60 rounded-full bg-amber-200" />
        <div className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-amber-300/60" />
        <svg
          viewBox="0 0 120 120"
          className="relative h-40 w-40 text-amber-900"
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
        <div className="absolute bottom-5 left-5 rounded-2xl bg-white px-4 py-3 text-sm font-medium shadow">
          Disangrai segar setiap hari
        </div>
      </div>
    </section>
  );
}