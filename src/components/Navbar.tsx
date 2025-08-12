"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // --- Data untuk link agar mudah diubah ---
  const whatsappLink = "https://wa.me/6281232540296";
  const telegramLink = "https://t.me/+TSS5KSrrXao2Nzhl";

  return (
    <nav className="bg-[#0d0f1a] text-white px-4 py-3 flex items-center justify-between relative z-50">
      {/* Logo + Brand */}
      <div className="flex items-center space-x-6">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="PMC Logo" width={32} height={32} />
          <span className="text-xl font-bold">PMC</span>
        </Link>
      </div>

      {/* Tombol Aksi untuk Desktop */}
      <div className="hidden md:flex items-center space-x-4">
        {/* Tombol Telegram */}
        <Link
          href={telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full font-semibold flex items-center space-x-2
            bg-blue-500/10 border border-blue-400 text-white hover:bg-blue-500/20
            transition shadow-lg shadow-blue-400/40"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
            alt="Telegram"
            width={18}
            height={18}
          />
          <span>MVP Group</span>
        </Link>
        
        {/* Tombol Join Now (WhatsApp) */}
        <Link
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full font-semibold flex items-center space-x-2
            bg-green-500/10 border border-green-400 text-white hover:bg-green-500/20
            transition shadow-lg shadow-green-400/40"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            width={18}
            height={18}
          />
          <span>Join Now</span>
        </Link>
      </div>

      {/* Hamburger menu button mobile */}
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Dropdown menu mobile */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0d0f1a] text-white flex flex-col space-y-4 p-4 md:hidden">
          {/* Tombol Telegram Mobile */}
          <Link
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 px-4 py-2 rounded-full font-semibold 
              bg-blue-500/10 border border-blue-400 hover:bg-blue-500/20 transition shadow-lg shadow-blue-400/40"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
              alt="Telegram"
              width={18}
              height={18}
            />
            <span>MVP Group</span>
          </Link>

          {/* Tombol Join Now Mobile */}
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 px-4 py-2 rounded-full font-semibold 
              bg-green-500/10 border border-green-400 hover:bg-green-500/20 transition shadow-lg shadow-green-400/40"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              width={18}
              height={18}
            />
            <span>Join Now</span>
          </Link>
        </div>
      )}
    </nav>
  );
}

