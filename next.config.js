/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Konfigurasi lama Anda
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.coingecko.com",
        pathname: "/coins/images/**",
      },
      {
        protocol: "https",
        hostname: "coin-images.coingecko.com",
        pathname: "/coins/images/**",
      },

      // --- DOMAIN BARU UNTUK PARTNER ---
      // PENJELASAN: Menambahkan semua hostname dari URL logo agar Next.js mengizinkan gambar ditampilkan.
      { protocol: "https", hostname: "trive.com" },
      { protocol: "https", hostname: "indodax.com" },
      { protocol: "https", hostname: "www.tokocrypto.com" },
      { protocol: "https", hostname: "pintu.co.id" },
      { protocol: "https", hostname: "pluang.com" },
      { protocol: "https", hostname: "public.bnbstatic.com" },
      { protocol: "https", hostname: "static.okx.com" },
      { protocol: "https", hostname: "www.bitget.com" },
      { protocol: "https", hostname: "www.mexc.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
};

module.exports = nextConfig;

