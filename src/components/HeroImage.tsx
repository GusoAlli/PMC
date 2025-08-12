export default function HeroImage() {
  return (
    // PERUBAHAN 1: Layout Responsif
    // 'justify-center' akan membuat video berada di tengah pada layar kecil (mobile).
    // 'lg:justify-end' akan mengaktifkan 'justify-end' (mepet ke kanan) hanya
    // pada layar besar (lg) dan di atasnya.
    <div className="flex justify-center lg:justify-end">
      <video
        src="/smart.webm"
        autoPlay
        loop
        muted
        playsInline
        // PERUBAHAN UTAMA: Mencegah Video Terpotong
        // - 'object-cover' telah dihapus. Ini adalah penyebab utama video terpotong.
        // - 'h-[800px]' diubah menjadi 'h-auto'. Ini akan membuat tinggi video
        //   menyesuaikan secara otomatis sesuai dengan lebar yang ditetapkan (400px),
        //   sehingga aspek rasio asli video tetap terjaga dan tidak ada bagian yang terpotong.
        className="rounded-3xl w-[350px] h-auto"
      />
    </div>
  );
}

