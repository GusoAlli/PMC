// Impor SponsorLogo tidak lagi diperlukan karena sudah dihapus.
// import SponsorLogo from "./SponsorLogo";

export default function HeroText() {
  return (
    // PERBAIKAN: Menghapus `lg:items-start` agar container tetap di tengah
    <div className="flex flex-col gap-8 mt-12 lg:mt-0 items-center">
      {/* PERBAIKAN: Menghapus `lg:text-left` agar teks selalu rata tengah */}
      <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold leading-normal text-center">
        Belajar Investasi Crypto <br />
        Dari 0, Sampai Bisa <br />
        Private Mentor Crypto
      </h1>
    </div>
  );
}

