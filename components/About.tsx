const notes = [
  { title: "Biji lokal pilihan", text: "Dipilih langsung dari petani di sekitar Jawa Timur.", bg: "bg-lemon", tilt: "-rotate-2" },
  { title: "Disangrai segar", text: "Sedikit-sedikit, supaya aromanya masih juara.", bg: "bg-bubble", tilt: "rotate-2" },
  { title: "Pesan tanpa ribet", text: "Kirim chat, pesananmu kami siapkan.", bg: "bg-mint", tilt: "-rotate-1" },
];

export default function About() {
  return (
    <section id="tentang" className="mt-16 scroll-mt-16 overflow-x-clip border-y-[2.5px] border-ink bg-cobalt py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Dari Malang, buat kamu yang suka ngopi.
          </h2>
          <p className="mt-5 max-w-md text-lg text-white/90">
            Kopi Nusantara berawal dari kecintaan pada kopi lokal. Bijinya dari petani
            sekitar, diseduh oleh orang yang peduli rasanya.
          </p>
          <p className="mt-3 max-w-md text-lg text-white/90">
            Nggak perlu antre atau install aplikasi. Pilih menu, kirim pesan lewat
            WhatsApp, selesai.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {notes.map((n) => (
            <div key={n.title} className={`pop ${n.bg} ${n.tilt} rounded-2xl p-5 text-ink`}>
              <p className="font-display text-xl font-extrabold">{n.title}</p>
              <p className="mt-1 text-sm">{n.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}