gusopowered/
├── public/
│   ├── icons/              # Folder untuk semua ikon kecil
│   │   ├── eth.png
│   │   ├── sol.png
│   │   └── ... (dan ikon lainnya)
│   ├── background.png      # Gambar latar belakang global
│   └── logo.png            # Logo utama proyek
│
├── src/
│   ├── app/                  # ✅ FOLDER UTAMA UNTUK SEMUA RUTE (HALAMAN & API)
│   │   ├── api/              # Folder untuk semua rute API backend
│   │   │   └── auth/
│   │   │       └── [...nextauth]/
│   │   │           └── route.ts  # "Otak" dari sistem login Google
│   │   │
│   │   ├── dashboard/        # Halaman /dashboard untuk poin pengguna
│   │   │   └── page.tsx
│   │   ├── dex/              # Halaman /dex (CEX)
│   │   │   ├── layout.tsx    # Layout khusus untuk menyembunyikan Navbar
│   │   │   └── page.tsx
│   │   ├── faq/              # Halaman /faq
│   │   │   └── page.tsx
│   │   ├── font/             # Folder untuk file font lokal
│   │   │   └── ...
│   │   ├── howtobuy/         # Halaman /howtobuy
│   │   │   └── page.tsx
│   │   ├── roadmap/          # Halaman /roadmap
│   │   │   └── page.tsx
│   │   └── tokenomics/       # Halaman /tokenomics
│   │       └── page.tsx
│   │   │
│   │   ├── layout.tsx        # Layout Global (dengan provider & logika Navbar)
│   │   └── page.tsx          # Halaman Utama (/)
│   │
│   ├── components/
│   │   ├── ui/               # Komponen UI kecil
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Input.tsx
│   │   │
│   │   ├── AuthProvider.tsx    # Komponen untuk mengelola sesi login
│   │   ├── Countdown.tsx
│   │   ├── DexPlus.tsx
│   │   ├── Faq.tsx
│   │   ├── HowToBuy.tsx
│   │   ├── Navbar.tsx        # Komponen Navbar (dinamis)
│   │   ├── Notifications.tsx
│   │   ├── PresaleBox.tsx
│   │   ├── Roadmap.tsx
│   │   └── Tokenomics.tsx
│   │
│   ├── config/
│   │   └── presaleConfig.ts  # Konfigurasi presale
│   │
│   ├── hooks/
│   │   └── usePresale.ts     # Logika utama presale
│   │
│   ├── lib/
│   │   └── actions.ts        # Logika backend (database, wallet, dll.)
│   │
│   ├── styles/
│   │   └── globals.css       # Gaya global
│   │
│   ├── types/
│   │   └── next-auth.d.ts    # File untuk tipe data sesi
│   │
│   └── utils/
│       └── format.ts         # Fungsi bantuan
│
├── .env.local              # File untuk menyimpan kunci rahasia (API Keys)
├── next.config.js          # Konfigurasi Next.js
├── package.json            # Daftar dependensi dan skrip proyek
└── tailwind.config.ts      # Konfigurasi Tailwind CSS

gusopowered@gusopowered:~/web/gusopowered$ tree -a -I 'node_modules|.next|.git|.vscode'

