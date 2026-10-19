const points = [
  { title: "Biji Lokal Pilihan", text: "Dipilih langsung dari petani di sekitar Jawa Timur." },
  { title: "Sangrai Segar", text: "Disangrai dalam jumlah kecil supaya aroma tetap terjaga." },
  { title: "Pesan Mudah", text: "Cukup kirim chat, pesananmu kami siapkan." },
];

export default function About() {
  return (
    <section id="tentang" className="scroll-mt-20 bg-amber-50 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-800">
            Tentang Kami
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-stone-900">
            Kopi sederhana, dibuat dengan sepenuh hati.
          </h2>
          <p className="mt-4 text-stone-600">
            Kopi Nusantara berawal dari kecintaan pada kopi lokal Malang. Kami ingin
            setiap cangkir terasa dekat: bijinya dari petani sekitar, diseduh oleh
            orang yang peduli rasanya.
          </p>
          <p className="mt-3 text-stone-600">
            Kamu tidak perlu antre atau install aplikasi. Pilih menu, kirim pesan
            lewat WhatsApp, dan pesananmu kami siapkan.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-amber-200 bg-white p-5">
              <p className="font-semibold text-stone-900">{p.title}</p>
              <p className="mt-1 text-sm text-stone-600">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}