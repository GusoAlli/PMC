'use client';

import HeroText from "@/components/HeroText";
import HeroImage from "@/components/HeroImage";
import PricingCard from "@/components/PricingCard";
import CryptoBubbleMap from "@/components/CryptoBubbleMap";
import FAQSection from '@/components/FAQSection';
import ExchangePartner from '@/components/ExchangePartner';

export default function HomePage() {
  return (
    // --- PERBAIKAN: Menambahkan kelas bg-black/60 untuk latar belakang hitam transparan ---
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden bg-black/60 px-4 text-white sm:px-6 lg:px-8">
      <div className="flex w-full max-w-screen-xl flex-col items-center gap-8 py-12 lg:min-h-[90vh]">
        
        <div className="text-center">
          <HeroText />
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-8 lg:flex-row lg:items-stretch">
          
          <div className="flex w-full justify-center lg:w-auto lg:justify-end">
            <div className="w-full max-w-lg">
              <PricingCard />
            </div>
          </div>
          
          <div className="flex w-full justify-center lg:w-auto lg:justify-start">
            <HeroImage />
          </div>

        </div>
      </div>

      <CryptoBubbleMap />

      {/* --- Urutan komponen sudah benar --- */}
      <FAQSection />
      <ExchangePartner /> 
    </main>
  );
}

