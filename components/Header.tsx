import Link from "next/link";
import { orderLink } from "@/lib/whatsapp";

const menu = [
  { label: "Beranda", href: "/" },
  { label: "Menu", href: "/#menu" },
  { label: "Tentang", href: "/#tentang" },
  { label: "Kontak", href: "/#kontak" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-amber-900">
          Kopi Nusantara
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {menu.map((m) => (
            <Link key={m.href} href={m.href} className="text-sm font-medium text-stone-600 hover:text-amber-900">
              {m.label}
            </Link>
          ))}
          <a
            href={orderLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-amber-800 px-5 py-2 text-sm font-semibold text-white hover:bg-amber-900"
          >
            Pesan
          </a>
        </nav>

        {/* Mobile: pakai <details> bawaan HTML, tanpa JavaScript */}
        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-lg border border-stone-300 px-3 py-2 text-sm font-medium">
            Menu
          </summary>
          <div className="absolute right-0 mt-2 w-52 rounded-xl border border-stone-200 bg-white p-2 shadow-lg">
            {menu.map((m) => (
              <Link key={m.href} href={m.href} className="block rounded-lg px-3 py-2 text-sm text-stone-700 hover:bg-stone-100">
                {m.label}
              </Link>
            ))}
            <a
              href={orderLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block rounded-lg bg-amber-800 px-3 py-2 text-center text-sm font-semibold text-white"
            >
              Pesan via WhatsApp
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}