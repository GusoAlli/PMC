'use client';

import { useState, useEffect } from 'react';

// Helper components... (CheckIcon, CardLogo, formatTime)
const CheckIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 flex-shrink-0 text-white bg-gray-700 rounded-full p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> );
const CardLogo = () => ( <svg className="h-16 w-16 text-gray-400/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg> );
const formatTime = (time: number) => time.toString().padStart(2, '0');


export default function PricingCard() {
    const initialTime = 2 * 60 * 60;
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        if (timeLeft <= 0) return;
        const intervalId = setInterval(() => {
            setTimeLeft((prevTime) => prevTime > 0 ? prevTime - 1 : 0);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    // --- LOGIC BARU ---
    // Fungsi ini akan dijalankan saat tombol diklik
    const handleJoinNow = () => {
        const phoneNumber = "6281232540296";
        // Pesan default yang akan muncul di WhatsApp
        const message = "Halo, saya tertarik untuk bergabung dengan MVP Group."; 
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        // Membuka URL WhatsApp di tab baru
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="border border-gray-700/50 rounded-2xl p-8 flex flex-col gap-6 bg-black/70 backdrop-blur-lg relative max-w-lg mx-auto w-full h-full justify-between">
            <div>
                <div className="absolute top-8 right-8">
                    <CardLogo />
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                    <p className="text-base font-semibold text-gray-300 tracking-widest">PROMO BERAKHIR DALAM</p>
                    <div className="flex items-center gap-2 bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 mt-1">
                        <span className="text-4xl font-mono font-bold text-white animate-pulse">{formatTime(hours)}</span>
                        <span className="text-3xl font-bold text-gray-500 pb-1">:</span>
                        <span className="text-4xl font-mono font-bold text-white animate-pulse">{formatTime(minutes)}</span>
                        <span className="text-3xl font-bold text-gray-500 pb-1">:</span>
                        <span className="text-4xl font-mono font-bold text-white animate-pulse">{formatTime(seconds)}</span>
                    </div>
                </div>
                <div className="flex flex-col mt-4">
                    <h2 className="text-3xl font-semibold text-white">Most Valuable Private (MVP) Group</h2>
                    <s className="text-2xl text-gray-500 mt-4">Rp5.000.000</s>
                    <p className="text-5xl font-bold text-white">Rp2.500.000</p>
                </div>
                <ul className="flex flex-col gap-4 text-gray-200 text-lg mt-6">
                    <li className="flex items-start gap-4"> <CheckIcon /> <span>Forum tanya-jawab & diskusi langsung</span> </li>
                    <li className="flex items-start gap-4"> <CheckIcon /> <span>In-depth market updates & on-chain analysis secara berkala</span> </li>
                    <li className="flex items-start gap-4"> <CheckIcon /> <span>Akses ke banyak materi edukasi dan puluhan materi</span> </li>
                    <li className="flex items-start gap-4"> <CheckIcon /> <span>Annual Offline Gathering</span> </li>
                </ul>
            </div>
            {/* --- PERBAIKAN: Menambahkan event handler onClick --- */}
            <button 
                onClick={handleJoinNow}
                className="w-full bg-white text-black font-bold py-4 rounded-lg text-xl hover:bg-gray-300 transition-colors mt-auto"
            >
                Join Now
            </button>
        </div>
    );
}

