import WhatsAppButton from "@/components/WhatsAppButton";
import { orderLink } from "@/lib/whatsapp";

const hours = [
  { day: "Senin - Jumat", time: "08.00 - 22.00" },
  { day: "Sabtu - Minggu", time: "07.00 - 23.00" },
];

export default function Footer() {
  return (
    <footer id="kontak" className="scroll-mt-16 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-display max-w-xl text-4xl font-extrabold leading-tight text-lemon sm:text-5xl">
          Mampir, atau chat aja.
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-bold">Alamat</p>
            <p className="mt-2 text-paper/80">Jl. Contoh No. 1, Malang, Jawa Timur</p>
          </div>

          <div>
            <p className="font-display text-lg font-bold">Jam buka</p>
            <ul className="mt-2 space-y-1 text-paper/80">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4 md:max-w-xs">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-lg font-bold">Pesan</p>
            <WhatsAppButton href={orderLink()} className="mt-3">
              Chat sekarang
            </WhatsAppButton>
          </div>
        </div>
      </div>

      <div className="border-t border-paper/20 py-4 text-center text-xs text-paper/60">
        © 2026 Kopi Nusantara. Website demo.
      </div>
    </footer>
  );
}