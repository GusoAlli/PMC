import './../styles/globals.css'
import type { Metadata } from 'next'
import { inter } from './fonts' // PERUBAHAN: Impor font 'inter' yang baru
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Portfolite - Branding Agency',
  description: 'Branding that you need Indeed',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // PERUBAHAN: Terapkan variabel font 'inter' ke seluruh halaman
    <html lang="en" className={inter.variable}>
      {/* PERUBAHAN: Tambahkan 'font-sans' agar Tailwind menggunakan font default yang baru */}
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}

