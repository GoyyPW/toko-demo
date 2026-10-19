import { orderLink, WA_NUMBER } from "@/lib/whatsapp";

const hours = [
  { day: "Senin - Jumat", time: "08.00 - 22.00" },
  { day: "Sabtu - Minggu", time: "07.00 - 23.00" },
];

export default function Footer() {
  return (
    <footer id="kontak" className="mt-20 scroll-mt-20 bg-stone-900 text-stone-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-white">Kopi Nusantara</p>
          <p className="mt-2 text-sm text-stone-400">
            Kopi lokal pilihan dari Malang, diseduh dengan sepenuh hati.
          </p>
        </div>

        <div>
          <p className="font-semibold text-white">Jam Buka</p>
          <ul className="mt-3 space-y-1 text-sm">
            {hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4 md:max-w-xs">
                <span>{h.day}</span>
                <span className="text-stone-400">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Kontak</p>
          <p className="mt-3 text-sm text-stone-400">Jl. Contoh No. 1, Malang, Jawa Timur</p>
          <a
            href={orderLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-medium text-amber-400 hover:text-amber-300"
          >
            WhatsApp: +{WA_NUMBER}
          </a>
        </div>
      </div>

      <div className="border-t border-stone-800 py-4 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} Kopi Nusantara. Website demo.
      </div>
    </footer>
  );
}