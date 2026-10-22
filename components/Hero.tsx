import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import { orderLink } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 overflow-x-clip px-4 py-12 md:grid-cols-2 md:py-20">
        <div>
          <h1 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Ngopi dulu, biar harimu nggak pahit.
          </h1>
          <p className="mt-6 max-w-md text-lg text-ink/80">
            Kopi lokal Malang yang disangrai segar. Pilih favoritmu, kirim chat, tinggal tunggu.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <WhatsAppButton href={orderLink()} className="text-base">
              Pesan via WhatsApp
            </WhatsAppButton>
            <Link
              href="/#menu"
              className="pop pop-press inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-bold"
            >
              Lihat Menu
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="pop flex aspect-square items-center justify-center rounded-[2.5rem] bg-cobalt">
            <svg
              viewBox="0 0 120 120"
              className="h-3/5 w-3/5 text-lemon"
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
          <p className="pop font-display absolute -left-3 top-8 -rotate-6 rounded-full bg-bubble px-4 py-2 text-sm font-extrabold">
            Disangrai segar!
          </p>
          <p className="pop font-display absolute -right-3 bottom-10 rotate-6 rounded-2xl bg-mint px-4 py-2 text-sm font-extrabold">
            Biji lokal Malang
          </p>
        </div>
      </section>

      <div className="overflow-x-clip py-6">
        <p className="font-display -mx-4 -rotate-1 border-y-[2.5px] border-ink bg-lemon px-4 py-3 text-center text-lg font-bold">
          Es kopi susu, V60, matcha, sampai biji sangrai. Semua bisa dipesan lewat WhatsApp.
        </p>
      </div>
    </>
  );
}