"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, PanInfo } from "framer-motion";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  price_change_percentage_24h: number;
}

// --- FUNGSI DIPERBARUI: Mengambil data dari beberapa halaman sekaligus ---
const fetchTopCoins = async (pagesToFetch: number = 4, limit: number = 250) => {
  const fetchPromises = [];
  // Membuat beberapa permintaan fetch secara bersamaan untuk 4 halaman (total 1000 koin)
  for (let i = 1; i <= pagesToFetch; i++) {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${limit}&page=${i}&sparkline=false`;
    fetchPromises.push(fetch(url).then(res => {
      if (!res.ok) {
        if (res.status === 429) {
          console.error(`Rate limit terlampaui untuk page ${i}.`);
          return [];
        }
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    }));
  }

  try {
    const results = await Promise.all(fetchPromises);
    // Menggabungkan semua hasil dari setiap halaman menjadi satu array besar
    const allCoins = results.flat().filter(coin => coin);
    return allCoins;
  } catch (error) {
    console.error(`Gagal mengambil data koin:`, error);
    return [];
  }
};

export default function CryptoBubbleMap() {
  const [rowOneCoins, setRowOneCoins] = useState<Coin[]>([]);
  const [rowTwoCoins, setRowTwoCoins] = useState<Coin[]>([]);
  const [rowThreeCoins, setRowThreeCoins] = useState<Coin[]>([]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const controlsTop = useAnimation();
  const controlsMiddle = useAnimation();
  const controlsBottom = useAnimation();

  const ITEM_WIDTH = isMobile ? 160 : 240;
  const IMAGE_SIZE = isMobile ? 48 : 96;
  const SYMBOL_FONT_SIZE = isMobile ? "text-lg" : "text-xl";
  const PERCENT_FONT_SIZE = isMobile ? "text-base" : "text-lg";

  const startAnimation = (
    controls: any,
    totalWidth: number,
    reverse = false,
    currentX = 0
  ) => {
    if (totalWidth <= 0) return;
    const distance = totalWidth / 2;
    controls.start({
      x: reverse ? [currentX, currentX + distance] : [currentX, currentX - distance],
      transition: {
        ease: "linear",
        duration: 180 * (distance / 1000),
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  };

  // --- LOGIKA UTAMA DIPERBARUI ---
  useEffect(() => {
    fetchTopCoins().then((allCoins) => {
      if (allCoins.length === 0) return;

      // 1. Filter untuk mendapatkan koin yang hijau
      const greenCoins = allCoins.filter(coin => coin.price_change_percentage_24h >= 0);
      
      // 2. Terapkan logika fallback
      // Jika koin hijau kurang dari 21, tampilkan 60 koin teratas.
      // Jika tidak, tampilkan semua koin hijau yang ada.
      const displayCoins = greenCoins.length < 21 ? allCoins.slice(0, 60) : greenCoins;

      // 3. Bagi koin yang akan ditampilkan menjadi 3 baris
      const third = Math.ceil(displayCoins.length / 3);
      setRowOneCoins(displayCoins.slice(0, third));
      setRowTwoCoins(displayCoins.slice(third, third * 2));
      setRowThreeCoins(displayCoins.slice(third * 2, displayCoins.length));
    });
  }, []);

  useEffect(() => {
    if (rowOneCoins.length > 0) {
      const topWidth = rowOneCoins.length * ITEM_WIDTH * 2;
      startAnimation(controlsTop, topWidth, false, 0);
    }
  }, [rowOneCoins, controlsTop, isMobile]);

  useEffect(() => {
    if (rowTwoCoins.length > 0) {
      const middleWidth = rowTwoCoins.length * ITEM_WIDTH * 2;
      const middleHalfWidth = middleWidth / 2;
      startAnimation(controlsMiddle, middleWidth, true, -middleHalfWidth);
    }
  }, [rowTwoCoins, controlsMiddle, isMobile]);

  useEffect(() => {
    if (rowThreeCoins.length > 0) {
      const bottomWidth = rowThreeCoins.length * ITEM_WIDTH * 2;
      startAnimation(controlsBottom, bottomWidth, false, 0);
    }
  }, [rowThreeCoins, controlsBottom, isMobile]);

  const renderRow = (
    coinsRow: Coin[],
    controls: any,
    reverse = false
  ) => {
    const rowRef = useRef<HTMLDivElement>(null);
    const dragStartX = useRef(0);
    if (!coinsRow || coinsRow.length === 0) return null;

    const duplicatedCoins = [...coinsRow, ...coinsRow];
    const halfWidth = coinsRow.length * ITEM_WIDTH;
    const totalWidth = halfWidth * 2;

    return (
      <motion.div
        ref={rowRef}
        animate={controls}
        drag="x"
        dragElastic={0.05}
        dragConstraints={{ left: -halfWidth, right: 0 }}
        initial={{ x: reverse ? -halfWidth : 0 }}
        onDragStart={() => {
          controls.stop();
          if (rowRef.current) {
            const transform = window.getComputedStyle(rowRef.current).transform;
            const matrix = new DOMMatrixReadOnly(transform);
            dragStartX.current = matrix.m41;
          }
        }}
        onDragEnd={(event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
          const currentX = dragStartX.current + info.offset.x;
          const finalX = ((currentX % halfWidth) + halfWidth) % halfWidth - halfWidth;
          startAnimation(controls, totalWidth, reverse, finalX);
        }}
        className="flex min-w-max cursor-grab select-none gap-4 px-4 py-2 active:cursor-grabbing"
        style={{ width: totalWidth }}
      >
        {duplicatedCoins.map((coin, i) => (
          <div
            key={`${coin.id}-${i}`}
            className="flex flex-shrink-0 items-center gap-4 rounded-full bg-black/65 px-5 py-3"
            style={{ minWidth: 'fit-content' }}
          >
            <Image
              src={coin.image}
              alt={coin.name}
              width={IMAGE_SIZE}
              height={IMAGE_SIZE}
              className="rounded-full"
              draggable={false}
              unoptimized
            />
            <span className={`font-medium ${SYMBOL_FONT_SIZE}`}>{coin.symbol.toUpperCase()}</span>
            {/* --- Tampilan persentase diperbarui untuk menangani warna merah & hijau --- */}
            <span
              className={`font-bold ${PERCENT_FONT_SIZE} ${
                coin.price_change_percentage_24h >= 0
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {coin.price_change_percentage_24h >= 0 ? '+' : ''}
              {coin.price_change_percentage_24h?.toFixed(2) ?? "0.00"}%
            </span>
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className="w-full select-none overflow-hidden py-6">
      <div className="flex flex-col gap-4 md:gap-6">
        {renderRow(rowOneCoins, controlsTop, false)}
        {renderRow(rowTwoCoins, controlsMiddle, true)}
        {renderRow(rowThreeCoins, controlsBottom, false)}
      </div>
    </div>
  );
}

