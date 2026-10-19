import Link from "next/link";
import { orderLink } from "@/lib/whatsapp";
import MobileMenu from "@/components/MobileMenu";

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
        <MobileMenu items={menu} orderHref={orderLink()} />
      </div>
    </header>
  );
}