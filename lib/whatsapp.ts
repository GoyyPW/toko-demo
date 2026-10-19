// Ganti dengan nomor bisnis asli (awali 62, tanpa + atau 0)
export const WA_NUMBER = "6281234567890";

export function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const orderLink = () =>
  waLink("Halo Kopi Nusantara, saya mau pesan.");

export const productOrderLink = (productName: string) =>
  waLink(`Halo Kopi Nusantara, saya mau pesan ${productName}.`);