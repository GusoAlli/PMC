// app/test/page.js

"use client";

import CryptoBubbleMap from "@/components/CryptoBubbleMap";

export default function TestPage() {
  return (
    <div className="pt-20">
      <h1 className="text-center text-4xl font-bold text-white mb-8">
        Halaman Tes Isolasi
      </h1>
      <CryptoBubbleMap />
    </div>
  );
}
