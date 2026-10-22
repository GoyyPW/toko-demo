import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";
import { orderLink } from "@/lib/whatsapp";

const menu = [
  { label: "Beranda", href: "/" },
  { label: "Menu", href: "/#menu" },
  { label: "Tentang", href: "/#tentang" },
  { label: "Kontak", href: "/#kontak" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-[2.5px] border-ink bg-paper">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link
          href="/"
          className="font-display pop pop-press -rotate-2 rounded-full bg-lemon px-4 py-1.5 text-lg font-extrabold"
        >
          Kopi Nusantara
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {menu.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              className="rounded-full px-4 py-2 text-sm font-semibold hover:bg-lemon"
            >
              {m.label}
            </Link>
          ))}
          <a
            href={orderLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="pop pop-press ml-2 rounded-full bg-cobalt px-5 py-2 text-sm font-bold text-white"
          >
            Pesan
          </a>
        </nav>

        <MobileMenu items={menu} orderHref={orderLink()} />
      </div>
    </header>
  );
}