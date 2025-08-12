"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Apakah PMC cocok untuk pemula?",
    answer:
      "Sangat cocok, karena terdapat materi edukasi, mengajarkan berbagai materi dari yang pemula hingga expert.",
  },
  {
    question: "Apakah PMC memberikan sinyal jual beli?",
    answer:
      "Tidak, semua yang terkandung di layanan PMC hanya ditujukan untuk edukasi dan bukan rekomendasi untuk jual beli maupun nasehat keuangan.",
  },
  {
    question: "Apakah dengan belajar di PMC saya digaransi akan cuan?",
    answer:
      "Tidak, meskipun mayoritas dari member PMC mengalami keuntungan, tetapi niat belajar dari setiap member berbeda, sehingga hasilnya pun beda untuk setiap member. Tidak ada yang pasti dalam dunia crypto, karena aset crypto beresiko tinggi.",
  },
  {
    question: "Apa rekening resmi PMC?",
    answer:
      "Pembayaran dapat dilakukan dapat melakukan transfer ke nomor rekening resmi, Bank Atau akun DANA Resmi Dari Mentor.",
  },
  {
    question: "Apakah ada aturan yang harus diikuti di PMC?",
    answer: (
      <>
        Ada, agar pengalaman di MVP PMC tetap nyaman, ada beberapa aturan yang perlu dipatuhi. Jika melanggar, akun bisa terkena suspend atau banned. Beberapa hal-hal yang perlu diperhatikan:
        <ul className="list-disc list-inside mt-2 space-y-1 text-cyan-400">
          <li>Selalu mengikuti kebijakan dan peraturan PMC.</li>
          <li>Menghindari tindakan yang dapat merugikan PMC, baik secara materiil maupun imateriil.</li>
          <li>Tidak melakukan tindakan yang menyinggung, menyerang, atau bersikap tidak pantas terhadap PMC.</li>
          <li>
            Jika akun terkena suspend:
            <ul className="list-disc list-inside ml-5 mt-1 space-y-1 text-cyan-300">
              <li>Tidak ada refund yang diberikan.</li>
              <li>Akun tidak dapat dialihkan atau digantikan oleh pengguna lain.</li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl py-16 sm:py-24">
      <h1 className="text-4xl font-extrabold mb-10 text-cyan-400 tracking-wide text-center drop-shadow-lg">
        FAQ - Pertanyaan yang Sering Diajukan
      </h1>

      <div className="space-y-4">
        {faqs.map(({ question, answer }, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className="bg-[#121527]/80 backdrop-blur-sm rounded-xl border border-cyan-700/50 shadow-[0_0_15px_rgb(0,255,255,0.2)]
                transition-all duration-500 ease-in-out"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center px-6 py-4 cursor-pointer select-none
                  text-white text-lg font-semibold hover:text-cyan-400 transition-colors duration-300"
                aria-expanded={isOpen}
                aria-controls={`faq-content-${idx}`}
              >
                <span>{question}</span>
                <ChevronDown
                  className={`text-cyan-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  size={24}
                />
              </button>
              <div
                id={`faq-content-${idx}`}
                className={`grid transition-all duration-500 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                  <div className="overflow-hidden">
                      <div className="px-6 pb-6 text-cyan-200 text-base leading-relaxed">
                          {answer}
                      </div>
                  </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

