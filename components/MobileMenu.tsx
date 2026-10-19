"use client";

import Link from "next/link";
import { useState } from "react";

type Item = { label: string; href: string };

export default function MobileMenu({ items, orderHref }: { items: Item[]; orderHref: string }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium"
      >
        {open ? "Tutup" : "Menu"}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 rounded-xl border border-stone-200 bg-white p-2 shadow-lg">
          {items.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              onClick={close}
              className="block rounded-lg px-3 py-3 text-sm text-stone-700 hover:bg-stone-100"
            >
              {m.label}
            </Link>
          ))}
          <a
            href={orderHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="mt-1 block rounded-lg bg-amber-800 px-3 py-3 text-center text-sm font-semibold text-white"
          >
            Pesan via WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}