// Nama file: components/ExchangePartner.js

"use client";

import Image from "next/image";
import Link from "next/link"; // Mengimpor komponen Link

// --- INTERFACE DAN DATA UNTUK EXCHANGE PARTNER ---
interface Partner {
  name: string;
  logo: string; // Path ke logo lokal
  url: string;  // URL ke website official
}

// PENJELASAN: Data diperbarui untuk menggunakan path lokal dan URL official.
const partnersRow1: Partner[] = [
    { name: "Indodax", logo: "/icons/indodax.png", url: "https://indodax.com/ref/elguso/1" },
    { name: "Tokocrypto", logo: "/icons/tokocrypto.png", url: "https://www.tokocrypto.com/" },
    { name: "Pintu", logo: "/icons/pintu.png", url: "https://pintu.co.id/" },
    { name: "Pluang", logo: "/icons/pluang.png", url: "https://pluang.com/" },
    { name: "Triv", logo: "/icons/triv.png", url: "https://triv.co.id/aff/4h7z30d6rdil4" },
];

const partnersRow2: Partner[] = [
    { name: "Binance", logo: "/icons/binance.png", url: "https://www.bmwweb.biz/referral/earn-together/refer-in-hotsummer/claim?hl=en&ref=GRO_20338_EWBMT&utm_source=Lite_web_footer" },
    { name: "OKX", logo: "/icons/okx.png", url: "https://okx.ac/join/44916686" },
    { name: "Bitget", logo: "/icons/bitget.png", url: "https://www.bitget.com/" },
    { name: "MEXC", logo: "/icons/mexc.png", url: "https://www.mexc.com/" },
    { name: "BingX", logo: "/icons/bingx.png", url: "https://bingx.com/" },
];

export default function ExchangePartner() {
  return (
    <div className="w-full py-10 text-center">
      <h2 className="mb-8 text-2xl font-bold text-white">Exchange Partner</h2>
      
      {/* Baris Pertama */}
      <div className="mb-6 flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {partnersRow1.map((partner) => (
          // --- PERBAIKAN: Menambahkan styling pada wrapper Link ---
          <Link 
            key={partner.name} 
            href={partner.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex h-20 w-40 items-center justify-center rounded-2xl bg-gray-900/50 p-3 transition-all hover:scale-105 hover:bg-gray-800/60 border border-gray-700/50"
          >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={130}
                height={40}
                className="object-contain"
              />
          </Link>
        ))}
      </div>

      {/* Baris Kedua */}
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {partnersRow2.map((partner) => (
          // --- PERBAIKAN: Menambahkan styling pada wrapper Link ---
          <Link 
            key={partner.name} 
            href={partner.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex h-20 w-40 items-center justify-center rounded-2xl bg-gray-900/50 p-3 transition-all hover:scale-105 hover:bg-gray-800/60 border border-gray-700/50"
          >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={130}
                height={40}
                className="object-contain"
              />
          </Link>
        ))}
      </div>
    </div>
  );
};

