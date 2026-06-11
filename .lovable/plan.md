## Masalah
Garis vertikal di tengah timeline section Experience nggak muncul karena pakai class `bg-gradient-to-b` — di Tailwind CSS v4 (yang dipakai project ini) class itu udah di-rename jadi `bg-linear-to-b`. Jadi gradient-nya nggak ter-render sama sekali, alhasil `<div>` line-nya transparan.

## Yang Mau Diubah
File: `src/components/portfolio/experience.tsx`

Ganti:
```
bg-gradient-to-b from-transparent via-gold/40 to-transparent
```
jadi:
```
bg-linear-to-b from-transparent via-gold/40 to-transparent
```

Sekaligus aku akan sapu file lain yang masih pakai `bg-gradient-to-*` (hero, projects, certifications) supaya gradient-nya ikut nyala dengan benar — biar konsisten dan nggak ada efek visual lain yang diam-diam ilang.

## Hasil
Garis emas tipis di tengah timeline Experience muncul lagi, nyambungin antar item kayak di preview awal, plus semua gradient lain di section lain ke-render normal.

Approve plan-nya kalau setuju, nanti aku langsung apply.