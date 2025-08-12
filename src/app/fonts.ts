import localFont from 'next/font/local'

// PERUBAHAN: Seluruh definisi font Signika telah dihapus.
// Sekarang file ini hanya mendefinisikan dan mengekspor font Inter.
const inter = localFont({
  src: './font/Inter-VariableFont_opsz,wght.ttf',
  display: 'swap',
  variable: '--font-inter',
})

// Ekspor hanya font Inter untuk digunakan di seluruh aplikasi
export { inter }

