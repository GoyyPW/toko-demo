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
        className="pop pop-press rounded-full bg-lemon px-4 py-2 text-sm font-bold"
      >
        {open ? "Tutup" : "Menu"}
      </button>

      {open && (
        <div className="pop absolute right-0 mt-3 w-60 rounded-2xl bg-paper p-2">
          {items.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              onClick={close}
              className="block rounded-xl px-3 py-3 text-sm font-semibold hover:bg-lemon"
            >
              {m.label}
            </Link>
          ))}
          <a
            href={orderHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="pop mt-2 block rounded-xl bg-mint px-3 py-3 text-center text-sm font-bold"
          >
            Pesan via WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}