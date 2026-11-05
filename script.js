/* Penanda versi: dibaca oleh index.html untuk mendeteksi script.js yang belum ter-update */
window.ATHEANDRA_SCRIPT_VERSION = "8";

/* =========================================================
   ATHEANDRA — script.js
   Data anggota, alur login → mood → birthday → home
   ========================================================= */

/* ---------- 1. DATA ANGGOTA ---------- */
/* day/month = null jika tanggal lahir belum diketahui */
/* institution/city = null jika lokasi belajar belum diketahui */
const MEMBERS = [
  { name: "Afina Churin'in",           day: 10, month: 5,  institution: "UNESA", city: "Surabaya" },
  { name: "Aisyah Mujahiddah Fillah",  day: null, month: null, institution: "Ma'had 'Aly Hasyim Asy'ari", city: "Jombang" },
  { name: "Alicia Kirana C. I.",       day: 30, month: 11, institution: "UINSA", city: "Surabaya" },
  { name: "Alifah Sahlaa",             day: null, month: null, institution: "UNDAR", city: "Jombang" },
  { name: "Alvinatun Ni'mah A.",       day: 27, month: 4,  institution: "UPN Veteran", city: "Surabaya" },
  { name: "Amelia Sinta Dewi",         day: null, month: 12, institution: null, city: null },
  { name: "Amita Siti Maryam",         day: 13, month: 3,  institution: null, city: null },
  { name: "Anis Shofa",                day: 27, month: 2,  institution: "UNSURI", city: "Surabaya" },
  { name: "Arrofiu Inayatul A.",       day: 7,  month: 9,  institution: "UNESA", city: "Surabaya" },
  { name: "Aulia Firda D.",            day: 27, month: 8,  institution: "UNESA", city: "Surabaya" },
  { name: "Bahriyatul Lathifa A.",     day: 22, month: 9,  institution: "Al-Azhar University", city: "Cairo" },
  { name: "Barirotul Fuadiyyah",       day: null, month: 6, institution: "Universitas Terbuka", city: "Bojonegoro" },
  { name: "Bilqis Zakiyyah",           day: 27, month: 10, institution: "UINSA", city: "Surabaya" },
  { name: "Cahya Niswa Kusuma",        day: 3,  month: 5,  institution: "UNUSA", city: "Surabaya" },
  { name: "Cahyaning Millati",         day: 22, month: 7,  institution: "Madrasah Muallimin Muallimat Bahrul Ulum", city: "Jombang" },
  { name: "Cika Nurossoba",            day: 20, month: 12, institution: "UINSIKA", city: "Karawang" },
  { name: "Diandra Nasywa A.",         day: 26, month: 8,  institution: "Madrasah Muallimin Muallimat Bahrul Ulum", city: "Jombang" },
  { name: "Dwi Aisyah M.",             day: 23, month: 2,  institution: "UINSUKA", city: "Yogyakarta" },
  { name: "Dzakhwa Pradhia Ulaulia",   day: 8,  month: 8,  institution: "UIN Sunan Gunung Djati", city: "Bandung" },
  { name: "Echa Afriana",              day: 28, month: 11, institution: "Madrasah Muallimin Muallimat Bahrul Ulum", city: "Jombang" },
  { name: "Hidayatul Ulya",            day: 12, month: 3,  institution: null, city: null },
  { name: "I'i Abilahni",              day: null, month: null, institution: "UNUGIRI", city: "Bojonegoro" },
  { name: "Iftitach Farah A.",         day: 14, month: 6,  institution: "Telkom University", city: "Surabaya" },
  { name: "Kayla Fakhira F.",          day: 6,  month: 11, institution: "UINMA", city: "Malang" },
  { name: "Khoirunnisa Ayunda",        day: null, month: 3, institution: null, city: null },
  { name: "Lanaa 'Ainunnajah",         day: 10, month: 2,  institution: null, city: null },
  { name: "Ma'rifatus Zahro",          day: 11, month: 11, institution: "UINKHAS", city: "Jember" },
  { name: "Marcella Novia Yolanda",    day: 18, month: 11, institution: "UNESA", city: "Surabaya" },
  { name: "Marsya Nariswari S.",       day: 26, month: 12, institution: null, city: null },
  { name: "Meidiana Alfadinova",       day: 1,  month: 5,  institution: "Universitas Muhammadiyah Lamongan", city: "Lamongan" },
  { name: "Muyassaroh",                day: 10, month: 1,  institution: "UINMA", city: "Malang" },
  { name: "Nabila Apriliana Intan",    day: 20, month: 4,  institution: "UIZ", city: "Gresik" },
  { name: "Nadia Zahrotus S.",         day: null, month: null, institution: "UINSA", city: "Surabaya" },
  { name: "Nadin Faizzatul M.",        day: null, month: null, institution: null, city: null },
  { name: "Nafacha Mufidah",           day: 22, month: 9,  institution: "UPN Veteran", city: "Surabaya" },
  { name: "Nailal Muna H",             day: 25, month: 1,  institution: null, city: null },
  { name: "Najwa Aulia Z.",            day: 18, month: 6,  institution: "UINMA", city: "Malang" },
  { name: "Nasywa Azkiyyah N.",        day: 21, month: 4,  institution: "Madrasah Muallimin Muallimat Bahrul Ulum", city: "Jombang" },
  { name: "Nasywa Nafillah F.",        day: 14, month: 9,  institution: "UIN SATU", city: "Tulungagung" },
  { name: "Nasywa Salsabila",          day: 16, month: 2,  institution: "UNEJ", city: "Jember" },
  { name: "Nihayatul Maghfiroh",       day: 7,  month: 8,  institution: "UIN Walisongo", city: "Semarang" },
  { name: "Nilna Marama",              day: 3,  month: 5,  institution: null, city: null },
  { name: "Nina Syafitri",             day: 5,  month: 3,  institution: "UINSA", city: "Surabaya" },
  { name: "Niswatul Munawwaroh",       day: 9,  month: 3,  institution: "UNESA", city: "Surabaya" },
  { name: "Putri Alifah Anggun",       day: 27, month: 12, institution: "UINMA", city: "Malang" },
  { name: "Putri Khumairoh",           day: 10, month: 6,  institution: "Universitas Abdul Chalim", city: "Mojokerto" },
  { name: "Putri Rahmawati",           day: null, month: null, institution: "UNJ", city: "Jakarta" },
  { name: "Qarera Qothrunnada",        day: 21, month: 7,  institution: "UIN Syarif Hidayatullah", city: "Jakarta" },
  { name: "Ro'i Fatmalatullayyin",     day: 11, month: 7,  institution: "UINSUKA", city: "Yogyakarta" },
  { name: "Robiatul Adawiyyah",        day: null, month: null, institution: "UNESA", city: "Surabaya" },
  { name: "Sa'adatuz Zainiyyah",       day: 21, month: 2,  institution: "UINSUKA", city: "Yogyakarta" },
  { name: "Salsabila Muizzatsani",     day: null, month: 8, institution: "UINSA", city: "Surabaya" },
  { name: "Salsabila Triputri",        day: null, month: 4, institution: "UNESA", city: "Surabaya" },
  { name: "Sanaya Aulia A.",           day: 20, month: 4,  institution: "Universitas Negeri Malang", city: "Malang" },
  { name: "Sandya Farah S.",           day: 1,  month: 3,  institution: "UINSA", city: "Surabaya" },
  { name: "Saraswati Alifya D.",       day: null, month: null, institution: "UINSA", city: "Surabaya" },
  { name: "Shelfi Nadian P.",          day: 30, month: 7,  institution: "UINMA", city: "Malang" },
  { name: "Shofia Wulida H.",          day: 6,  month: 3,  institution: "UIN Syaikh Wasil", city: "Kediri" },
  { name: "Shofwatin Ni'mah",          day: 26, month: 4,  institution: "UNWAHA", city: "Jombang" },
  { name: "Shofy Agustina",            day: 17, month: 8,  institution: "UNESA", city: "Surabaya" },
  { name: "Silla Adyalova",            day: 10, month: 11, institution: "Poltekkes Surabaya", city: "Surabaya" },
  { name: "Yusrul Hana Q.",            day: 7,  month: 11, institution: "UINSA", city: "Surabaya" },
  { name: "Zahra Salsabila",           day: 9,  month: 8,  institution: null, city: null },
  { name: "Zakiyyah Aulia Nameer",     day: 21, month: 4,  institution: "Madrasah Muallimin Muallimat Bahrul Ulum", city: "Jombang" },
];

/* Data institusi untuk peta "Where We Learn".
   Kunci = nilai field `institution` pada MEMBERS (harus sama persis).
   Satu institusi = satu koordinat kampus, dipakai bersama oleh semua anggota di institusi itu.
   Untuk menambah lokasi anggota baru: isi `institution` pada MEMBERS, lalu tambahkan
   institusinya di sini kalau belum ada.

   verified: false  -> koordinat BELUM dicek ke sumber resmi / peta (perkiraan titik kampus).
   Ubah ke true setelah dicek di Google Maps / OpenStreetMap, dan perbaiki lat/lon bila perlu. */
const INSTITUTIONS = {
  /* ---- Surabaya ---- */
  "UNESA": {
    name: "Universitas Negeri Surabaya", city: "Surabaya", country: "Indonesia",
    lat: -7.3002, lon: 112.6730, verified: false,
    note: "Kampus Lidah Wetan. Kampus Ketintang berjarak sekitar 7 km di sisi timur.",
  },
  "UINSA": {
    name: "UIN Sunan Ampel Surabaya", city: "Surabaya", country: "Indonesia",
    lat: -7.3139, lon: 112.7326, verified: false,
  },
  "UPN Veteran": {
    name: "UPN Veteran Jawa Timur", city: "Surabaya", country: "Indonesia",
    lat: -7.3336, lon: 112.7882, verified: false,
  },
  "UNSURI": {
    name: "Universitas Sunan Giri Surabaya", city: "Surabaya", country: "Indonesia",
    lat: -7.3490, lon: 112.7295, verified: false,
    note: "Alamat resminya Jl. Brigjen Katamso II, Waru, Sidoarjo (berbatasan dengan Surabaya).",
  },
  "UNUSA": {
    name: "Universitas Nahdlatul Ulama Surabaya", city: "Surabaya", country: "Indonesia",
    lat: -7.3365, lon: 112.7465, verified: false,
    note: "Kampus B, Jl. Jemursari.",
  },
  "Telkom University": {
    name: "Telkom University Surabaya", city: "Surabaya", country: "Indonesia",
    lat: -7.3149, lon: 112.7254, verified: false,
  },
  "Poltekkes Surabaya": {
    name: "Poltekkes Kemenkes Surabaya", city: "Surabaya", country: "Indonesia",
    lat: -7.2770, lon: 112.7535, verified: false,
  },

  /* ---- Jombang ---- */
  "Ma'had 'Aly Hasyim Asy'ari": {
    name: "Ma'had 'Aly Hasyim Asy'ari", city: "Jombang", country: "Indonesia",
    lat: -7.6029, lon: 112.2345, verified: false,
    note: "Titik di area Pesantren Tebuireng.",
  },
  "UNDAR": {
    name: "Universitas Darul 'Ulum", city: "Jombang", country: "Indonesia",
    lat: -7.5330, lon: 112.2940, verified: false,
    note: "Titik di area Rejoso, Peterongan. Kepercayaan lokasi paling rendah di Jombang.",
  },
  "UNWAHA": {
    name: "Universitas KH. A. Wahab Hasbullah", city: "Jombang", country: "Indonesia",
    lat: -7.5601, lon: 112.2108, verified: false,
    note: "Area Tambakberas.",
  },
  "Madrasah Muallimin Muallimat Bahrul Ulum": {
    name: "Madrasah Muallimin Muallimat Bahrul Ulum", city: "Jombang", country: "Indonesia",
    lat: -7.5610, lon: 112.2120, verified: false,
    note: "Area Pesantren Bahrul Ulum, Tambakberas.",
  },

  /* ---- Malang ---- */
  "UINMA": {
    name: "UIN Maulana Malik Ibrahim Malang", city: "Malang", country: "Indonesia",
    lat: -7.9525, lon: 112.6082, verified: false,
  },
  "Universitas Negeri Malang": {
    name: "Universitas Negeri Malang", city: "Malang", country: "Indonesia",
    lat: -7.9604, lon: 112.6167, verified: false,
  },

  /* ---- Kota / kabupaten lain di Jawa ---- */
  "Universitas Terbuka": {
    name: "Universitas Terbuka", city: "Bojonegoro", country: "Indonesia",
    lat: -7.1536, lon: 111.8820, verified: false,
    note: "Titik perkiraan di Bojonegoro; lokasi layanan UT belum diketahui pastinya.",
  },
  "UNUGIRI": {
    name: "Universitas Nahdlatul Ulama Sunan Giri", city: "Bojonegoro", country: "Indonesia",
    lat: -7.1626, lon: 111.8748, verified: false,
  },
  "UINSIKA": {
    name: "UINSIKA", city: "Karawang", country: "Indonesia",
    lat: -6.3318, lon: 107.3040, verified: false,
    note: "Nama 'UINSIKA' belum bisa dicocokkan dengan institusi resmi. Titik ini memakai perkiraan kampus UNSIKA (Universitas Singaperbangsa Karawang). Mohon dikonfirmasi.",
  },
  "UINSUKA": {
    name: "UIN Sunan Kalijaga", city: "Yogyakarta", country: "Indonesia",
    lat: -7.7824, lon: 110.3926, verified: false,
  },
  "UIN Sunan Gunung Djati": {
    name: "UIN Sunan Gunung Djati", city: "Bandung", country: "Indonesia",
    lat: -6.9319, lon: 107.7183, verified: false,
    note: "Kampus Cibiru.",
  },
  "UINKHAS": {
    name: "UIN Kiai Haji Achmad Siddiq Jember", city: "Jember", country: "Indonesia",
    lat: -8.1990, lon: 113.6320, verified: false,
  },
  "UNEJ": {
    name: "Universitas Jember", city: "Jember", country: "Indonesia",
    lat: -8.1650, lon: 113.7170, verified: false,
  },
  "Universitas Muhammadiyah Lamongan": {
    name: "Universitas Muhammadiyah Lamongan", city: "Lamongan", country: "Indonesia",
    lat: -7.1045, lon: 112.3790, verified: false,
  },
  "UIZ": {
    name: "UIZ", city: "Gresik", country: "Indonesia",
    lat: -7.1547, lon: 112.6541, verified: false,
    note: "Nama 'UIZ' belum bisa dicocokkan dengan institusi resmi. Titik ini hanya perkiraan pusat Kota Gresik. Mohon dikonfirmasi.",
  },
  "UIN SATU": {
    name: "UIN Sayyid Ali Rahmatullah Tulungagung", city: "Tulungagung", country: "Indonesia",
    lat: -8.0774, lon: 111.9025, verified: false,
  },
  "UIN Walisongo": {
    name: "UIN Walisongo Semarang", city: "Semarang", country: "Indonesia",
    lat: -7.0522, lon: 110.3467, verified: false,
    note: "Kampus Ngaliyan.",
  },
  "Universitas Abdul Chalim": {
    name: "Universitas Abdul Chalim", city: "Mojokerto", country: "Indonesia",
    lat: -7.6520, lon: 112.5270, verified: false,
    note: "Area Pacet.",
  },
  "UNJ": {
    name: "Universitas Negeri Jakarta", city: "Jakarta", country: "Indonesia",
    lat: -6.1947, lon: 106.8815, verified: false,
    note: "Kampus Rawamangun.",
  },
  "UIN Syarif Hidayatullah": {
    name: "UIN Syarif Hidayatullah Jakarta", city: "Jakarta", country: "Indonesia",
    lat: -6.3057, lon: 106.7527, verified: false,
    note: "Kampus Ciputat.",
  },
  "UIN Syaikh Wasil": {
    name: "UIN Syaikh Wasil Kediri", city: "Kediri", country: "Indonesia",
    lat: -7.8093, lon: 112.0245, verified: false,
  },

  /* ---- Luar negeri ---- */
  "Al-Azhar University": {
    name: "Al-Azhar University", city: "Cairo", country: "Egypt",
    lat: 30.0765, lon: 31.3345, verified: false,
    note: "Titik di area Nasr City. Kampus Al-Azhar tersebar di beberapa lokasi di Kairo.",
  },
};

/* Anggota yang punya kartu ulang tahun bergambar asli.
   front/back  = gambar untuk tampilan di layar (ringan)
   frontHD/backHD = gambar resolusi tinggi, hanya dimuat saat Download / Share
   Kartu baru: tambahkan satu entri di sini (kunci = nama persis di MEMBERS). Tombol Download & Share otomatis ikut. */
const BIRTHDAY_CARD_ASSETS = {
  "Bahriyatul Lathifa A.": {
    front: "assets/birthdays/bahriyatul/front.jpg",
    back: "assets/birthdays/bahriyatul/back.jpg",
    frontHD: "assets/birthdays/bahriyatul/front-hd.jpg",
    backHD: "assets/birthdays/bahriyatul/back-hd.jpg",
  },
  "Nafacha Mufidah": {
    front: "assets/birthdays/nafacha/front.jpg",
    back: "assets/birthdays/nafacha/back.jpg",
    frontHD: "assets/birthdays/nafacha/front-hd.jpg",
    backHD: "assets/birthdays/nafacha/back-hd.jpg",
  },
  "Bilqis Zakiyyah": {
    front: "assets/birthdays/bilqis/front.jpg",
    back: "assets/birthdays/bilqis/back.jpg",
    frontHD: "assets/birthdays/bilqis/front-hd.jpg",
    backHD: "assets/birthdays/bilqis/back-hd.jpg",
  },
  "Yusrul Hana Q.": {
    front: "assets/birthdays/hana/front.jpg",
    back: "assets/birthdays/hana/back.jpg",
    frontHD: "assets/birthdays/hana/front-hd.jpg",
    backHD: "assets/birthdays/hana/back-hd.jpg",
  },
  "Kayla Fakhira F.": {
    front: "assets/birthdays/kayla/front.jpg",
    back: "assets/birthdays/kayla/back.jpg",
    frontHD: "assets/birthdays/kayla/front-hd.jpg",
    backHD: "assets/birthdays/kayla/back-hd.jpg",
  },
};

/* ---------- 2. DATA MOOD ---------- */
const MOODS = [
  {
    id: "happy",
    label: "Happy",
    sub: "Feeling good today",
    title: "Senang mendengarnya.",
    message:
      "Semoga rasa bahagia yang kamu rasakan hari ini bertahan lebih lama. Semoga ada banyak hal kecil yang membuatmu tersenyum, bersyukur, dan merasa bahwa hari ini layak dikenang.",
    icon: "happy",
  },
  {
    id: "calm",
    label: "Calm",
    sub: "Taking it slow",
    title: "Nikmati tenangnya hari ini.",
    message:
      "Tidak semua hal harus dilakukan dengan tergesa-gesa. Semoga hari ini berjalan dengan lembut, dan kamu punya cukup ruang untuk menikmati setiap langkahnya.",
    icon: "calm",
  },
  {
    id: "sad",
    label: "A Little Sad",
    sub: "A little heavy today",
    title: "Nggak apa-apa kalau hari ini terasa berat.",
    message:
      "Kamu nggak harus selalu baik-baik saja. Semoga setelah ini ada hal kecil yang membuatmu merasa sedikit lebih ringan. Pelan-pelan saja, ya.",
    icon: "sad",
  },
  {
    id: "tired",
    label: "Tired",
    sub: "Running low on energy",
    title: "Kamu boleh berhenti sebentar.",
    message:
      "Kalau hari ini terasa melelahkan, beri dirimu waktu untuk beristirahat. Kamu sudah berusaha sejauh yang kamu bisa. Semoga setelah lelah ini, ada hari yang terasa lebih ringan.",
    icon: "tired",
  },
  {
    id: "okay",
    label: "Just Okay",
    sub: "Just an ordinary day",
    title: "Nggak semua hari harus istimewa.",
    message:
      "Ada hari yang hanya perlu dijalani sebagaimana adanya, dan itu juga nggak apa-apa. Semoga besok membawa sesuatu yang baik, meski kecil.",
    icon: "okay",
  },
  {
    id: "notmyday",
    label: "Not My Day",
    sub: "Not really my day",
    title: "Tarik napas dulu.",
    message:
      "Nggak semua hal harus diselesaikan hari ini. Kalau hari ini bukan harimu, biarkan ia berlalu. Besok masih punya ruang untuk dimulai lagi.",
    icon: "notmyday",
  },
];

/* ---------- 3. ICON SET (line-art, monokrom) ---------- */
const MOOD_ICONS = {
  happy: `<circle cx="32" cy="32" r="21"/><path d="M23 29c.6-1.8 3-1.8 3.6 0" stroke-linecap="round"/><path d="M37.4 29c.6-1.8 3-1.8 3.6 0" stroke-linecap="round"/><path d="M22.5 36c2.6 4.6 7.2 7 9.5 7s6.9-2.4 9.5-7" stroke-linecap="round"/>`,
  calm: `<circle cx="32" cy="32" r="21"/><path d="M22.5 29.5c1.8 1.6 4.6 1.6 6.4 0" stroke-linecap="round"/><path d="M35.1 29.5c1.8 1.6 4.6 1.6 6.4 0" stroke-linecap="round"/><path d="M25 39c2.4 2 4.8 3 7 3s4.6-1 7-3" stroke-linecap="round"/><path d="M32 8.5c-1.6 2.2-1.6 4.4 0 6.2" stroke-linecap="round"/>`,
  sad: `<circle cx="32" cy="32" r="21"/><path d="M23 30.5c.6-1.8 3-1.8 3.6 0" stroke-linecap="round"/><path d="M37.4 30.5c.6-1.8 3-1.8 3.6 0" stroke-linecap="round"/><path d="M23.5 43c2.4-4 6.8-6 8.5-6s6.1 2 8.5 6" stroke-linecap="round"/>`,
  tired: `<circle cx="32" cy="32" r="21"/><path d="M21.5 29.5l5-2.2M26.5 29.5l-5-2.2" stroke-linecap="round"/><path d="M42.5 29.5l-5-2.2M37.5 29.5l5-2.2" stroke-linecap="round"/><ellipse cx="32" cy="40" rx="4.5" ry="3.2"/><path d="M43 15l3 3M46 12l3 3M45 19l3-1" stroke-linecap="round"/>`,
  okay: `<circle cx="32" cy="32" r="21"/><circle cx="24.6" cy="29" r="1.4" fill="currentColor" stroke="none"/><circle cx="39.4" cy="29" r="1.4" fill="currentColor" stroke="none"/><path d="M24 39.5h16" stroke-linecap="round"/>`,
  notmyday: `<circle cx="32" cy="32" r="21"/><path d="M23 30.5l3.6 2.4M26.6 30.5l-3.6 2.4" stroke-linecap="round"/><path d="M37.4 30.5l3.6 2.4M41 30.5l-3.6 2.4" stroke-linecap="round"/><path d="M24 42c2.6-3.4 6-5 8-5s5.4 1.6 8 5" stroke-linecap="round"/><path d="M29 12.5c1.6 1.6 4.2 1.6 6.6 0 2 1.7 5 1.4 6.4-1" stroke-linecap="round"/>`,
};

function moodIconSVG(iconKey, extraClass) {
  return `<svg class="mood-icon${extraClass ? " " + extraClass : ""}" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" xmlns="http://www.w3.org/2000/svg">${MOOD_ICONS[iconKey]}</svg>`;
}

/* ---------- 4. STATE ---------- */
const state = {
  currentUser: null,
  currentMood: null,
  birthdayPeople: [],
  isUserBirthday: false,
};

/* ---------- 5. HELPERS ---------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

function showScreen(id) {
  $$(".screen").forEach((s) => s.classList.remove("active"));
  const target = $("#" + id);
  target.classList.add("active");
  target.scrollTop = 0;
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

function todayLabel() {
  const today = new Date();
  const days = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
  const months = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
  return `${days[today.getDay()]}, ${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;
}

/* Mode preview (khusus pengujian): buka index.html?preview=bilqis
   Beberapa nama bisa dipisah koma: ?preview=bilqis,nafacha
   Tanpa parameter ini, deteksi ulang tahun memakai tanggal perangkat seperti biasa. */
function getPreviewBirthdays() {
  const param = new URLSearchParams(window.location.search).get("preview");
  if (!param) return null;
  const keys = param.toLowerCase().split(",").map((k) => k.trim()).filter(Boolean);
  if (!keys.length) return null;
  return MEMBERS.filter((mem) => keys.some((k) => mem.name.toLowerCase().includes(k)));
}

function getTodaysBirthdays() {
  const preview = getPreviewBirthdays();
  if (preview) return preview;
  const today = new Date();
  const d = today.getDate();
  const m = today.getMonth() + 1;
  return MEMBERS.filter((mem) => mem.day === d && mem.month === m);
}

/* ---------- 6. LOGIN — NAME PICKER ---------- */
function initNamePicker() {
  const trigger = $("#name-trigger");
  const sheet = $("#name-sheet");
  const overlay = $("#name-sheet-overlay");
  const searchInput = $("#name-search");
  const list = $("#name-list");
  const closeBtn = $("#name-sheet-close");
  const continueBtn = $("#login-continue");

  function renderList(filter = "") {
    const f = filter.trim().toLowerCase();
    list.innerHTML = "";
    MEMBERS
      .filter((m) => m.name.toLowerCase().includes(f))
      .forEach((m) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "name-item";
        btn.textContent = m.name;
        if (state.currentUser === m.name) btn.classList.add("selected");
        btn.addEventListener("click", () => {
          state.currentUser = m.name;
          trigger.querySelector(".name-trigger-value").textContent = m.name;
          trigger.classList.add("filled");
          continueBtn.disabled = false;
          closeSheet();
        });
        list.appendChild(btn);
      });
    if (!list.children.length) {
      const empty = document.createElement("p");
      empty.className = "name-empty";
      empty.textContent = "Nama tidak ditemukan.";
      list.appendChild(empty);
    }
  }

  function openSheet() {
    sheet.classList.add("open");
    overlay.classList.add("open");
    document.body.classList.add("no-scroll");
    searchInput.value = "";
    renderList();
    setTimeout(() => searchInput.focus(), 220);
  }

  function closeSheet() {
    sheet.classList.remove("open");
    overlay.classList.remove("open");
    document.body.classList.remove("no-scroll");
  }

  trigger.addEventListener("click", openSheet);
  overlay.addEventListener("click", closeSheet);
  closeBtn.addEventListener("click", closeSheet);
  searchInput.addEventListener("input", (e) => renderList(e.target.value));

  continueBtn.addEventListener("click", () => {
    if (!state.currentUser) return;
    localStorage.setItem("atheandra_user", state.currentUser);
    goToMood();
  });
}

/* ---------- 7. MOOD SCREEN ---------- */
function initMoodScreen() {
  $("#mood-date").textContent = todayLabel();
  const grid = $("#mood-grid");
  grid.innerHTML = "";
  MOODS.forEach((mood) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "mood-card";
    card.dataset.id = mood.id;
    card.innerHTML = `
      ${moodIconSVG(mood.icon)}
      <span class="mood-label">${mood.label}</span>
      <span class="mood-sub">${mood.sub}</span>
    `;
    card.addEventListener("click", () => {
      $$(".mood-card", grid).forEach((c) => c.classList.remove("selected"));
      card.classList.add("selected");
      state.currentMood = mood;
      $("#mood-continue").disabled = false;
    });
    grid.appendChild(card);
  });
}

function goToMood() {
  showScreen("screen-mood");
}

/* ---------- 8. MOOD MESSAGE SCREEN ---------- */
function renderMoodMessage() {
  const mood = state.currentMood;
  if (!mood) return;
  $("#mood-message-icon").innerHTML = moodIconSVG(mood.icon, "mood-icon-lg");
  $("#mood-message-title").textContent = `${mood.title} ♡`;
  $("#mood-message-text").textContent = mood.message;
}

/* ---------- 9. BIRTHDAY FLOW ---------- */
function runBirthdayCheck() {
  const todays = getTodaysBirthdays();
  state.isUserBirthday = todays.some((m) => m.name === state.currentUser);
  state.birthdayPeople = todays.filter((m) => m.name !== state.currentUser);

  const noneView = $("#birthday-none");
  const othersView = $("#birthday-others");
  const selfView = $("#birthday-self");
  [noneView, othersView, selfView].forEach((v) => v.classList.add("hidden"));

  const btnEnter = $("#btn-enter-atheandra");
  const btnSee = $("#btn-see-celebrating");
  const btnShow = $("#btn-show-me");
  [btnEnter, btnSee, btnShow].forEach((b) => b.classList.add("hidden"));

  if (state.isUserBirthday) {
    selfView.classList.remove("hidden");
    btnShow.classList.remove("hidden");
  } else if (state.birthdayPeople.length > 0) {
    othersView.classList.remove("hidden");
    btnSee.classList.remove("hidden");
    setOthersGateCopy(state.birthdayPeople.length);
  } else {
    noneView.classList.remove("hidden");
    btnEnter.classList.remove("hidden");
  }
}

function setOthersGateCopy(count) {
  const titleEl = $("#birthday-others-title");
  const textEl = $("#birthday-others-text");
  if (count === 1) {
    titleEl.textContent = "Someone is celebrating today. ♡";
    textEl.textContent = "Ada seseorang yang sedang bertambah usia hari ini.";
  } else if (count === 2) {
    titleEl.textContent = "Two people are celebrating today. ♡";
    textEl.textContent = "Ada dua orang yang sedang merayakan hari spesialnya hari ini.";
  } else {
    titleEl.textContent = `${count} people are celebrating today. ♡`;
    textEl.textContent = `Ada ${count} orang yang sedang merayakan hari spesialnya hari ini.`;
  }
}

function renderBirthdayCards(list) {
  const wrap = $("#birthday-card-list");
  wrap.innerHTML = "";
  list.forEach((member) => {
    wrap.appendChild(buildBirthdayCardEl(member.name));
  });
}

function buildBirthdayCardEl(name) {
  const assets = BIRTHDAY_CARD_ASSETS[name];
  const wrap = document.createElement("div");
  wrap.className = "bday-card-block";

  const hint = document.createElement("p");
  hint.className = "tap-hint";
  hint.textContent = "TAP THE PHOTO";
  wrap.appendChild(hint);

  const flip = document.createElement("div");
  flip.className = "flip-card";
  flip.setAttribute("role", "button");
  flip.setAttribute("tabindex", "0");
  flip.setAttribute("aria-label", `Kartu ulang tahun ${name}, ketuk untuk membalik`);

  const inner = document.createElement("div");
  inner.className = "flip-card-inner";

  const front = document.createElement("div");
  front.className = "flip-card-face flip-card-front";
  const back = document.createElement("div");
  back.className = "flip-card-face flip-card-back";

  if (assets) {
    front.innerHTML = `<img src="${assets.front}" alt="Kartu ulang tahun ${name} - depan">`;
    back.innerHTML = `<img src="${assets.back}" alt="Kartu ulang tahun ${name} - belakang">`;
  } else {
    front.appendChild(genericCardFace(name, "front"));
    back.appendChild(genericCardFace(name, "back"));
  }

  inner.appendChild(front);
  inner.appendChild(back);
  flip.appendChild(inner);
  wrap.appendChild(flip);

  const nameLabel = document.createElement("p");
  nameLabel.className = "bday-name";
  nameLabel.textContent = name;
  wrap.appendChild(nameLabel);

  /* ----- aksi: pilih sisi, Download Card, Share to Instagram (berlaku untuk semua kartu) ----- */
  const actions = document.createElement("div");
  actions.className = "card-actions";

  const sideGroup = document.createElement("div");
  sideGroup.className = "card-side";
  sideGroup.setAttribute("role", "group");
  sideGroup.setAttribute("aria-label", "Pilih sisi kartu");
  const sideBtns = {};
  [["front", "Front"], ["back", "Inside"]].forEach(([key, label]) => {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = label;
    b.addEventListener("click", () => setSide(key));
    sideBtns[key] = b;
    sideGroup.appendChild(b);
  });

  const row = document.createElement("div");
  row.className = "card-action-row";
  const dlBtn = document.createElement("button");
  dlBtn.type = "button";
  dlBtn.className = "card-btn is-primary";
  dlBtn.textContent = "Download Card";
  const shBtn = document.createElement("button");
  shBtn.type = "button";
  shBtn.className = "card-btn is-outline";
  shBtn.textContent = "Share to Instagram";
  row.append(dlBtn, shBtn);

  const status = document.createElement("p");
  status.className = "card-status";
  status.setAttribute("aria-live", "polite");

  actions.append(sideGroup, row, status);
  wrap.appendChild(actions);

  let currentSide = "front";
  let warmTimer = null;
  function setSide(side) {
    currentSide = side;
    flip.classList.toggle("flipped", side === "back");
    Object.keys(sideBtns).forEach((k) => sideBtns[k].setAttribute("aria-pressed", String(k === side)));
    status.textContent = "";
    /* siapkan PNG di latar belakang agar Share/Download terasa instan */
    clearTimeout(warmTimer);
    warmTimer = setTimeout(() => { getCardBlob(name, side).catch(() => {}); }, 900);
  }

  async function runAction(kind) {
    const side = currentSide;
    dlBtn.disabled = shBtn.disabled = true;
    status.textContent = "Menyiapkan kartu…";
    try {
      if (kind === "download") {
        await downloadCard(name, side);
        status.textContent = `Kartu (${side === "front" ? "front" : "inside"}) diunduh sebagai PNG.`;
      } else {
        const result = await shareCard(name, side);
        status.textContent =
          result === "shared" ? "Siap dibagikan. ♡"
          : result === "downloaded" ? "Perangkat ini belum bisa berbagi langsung. Kartu diunduh sebagai PNG — buka Instagram lalu unggah ke Story."
          : result === "retry" ? "Kartu sudah siap. Ketuk Share to Instagram sekali lagi."
          : "";
      }
    } catch (err) {
      console.error("[Birthday Card] Ekspor gagal:", err);
      status.textContent = "Kartu belum bisa disiapkan. Coba lagi sebentar.";
    } finally {
      dlBtn.disabled = shBtn.disabled = false;
    }
  }
  dlBtn.addEventListener("click", () => runAction("download"));
  shBtn.addEventListener("click", () => runAction("share"));
  setSide("front");

  function toggle() {
    setSide(currentSide === "front" ? "back" : "front");
  }
  flip.addEventListener("click", toggle);
  flip.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  });

  return wrap;
}

function genericCardFace(name, side) {
  const el = document.createElement("div");
  el.className = "generic-card";
  if (side === "front") {
    el.innerHTML = `
      <img class="generic-card-logo" src="assets/logo-atheandra.png" alt="Logo Atheandra">
      <p class="generic-card-eyebrow">est. 2020</p>
      <h3 class="generic-card-name">${name}</h3>
      <p class="generic-card-tag">is celebrating today ♡</p>
    `;
  } else {
    el.innerHTML = `
      <p class="generic-card-back-text">Selamat bertambah usia. Semoga tahun ini membawa lebih banyak hal baik untukmu, ${name.split(" ")[0]}.</p>
      <p class="generic-card-back-sign">— ATHEANDRA</p>
    `;
  }
  return el;
}

/* ---------- 9b. EXPORT KARTU: Download + Share to Instagram ---------- */
/* Satu sistem ekspor untuk semua kartu: kartu digambar ke canvas dengan resolusi tinggi,
   sudut dibulatkan (di luar sudut benar-benar transparan), lalu dikeluarkan sebagai PNG.
   Download dan Share memakai file PNG yang sama persis. */
const CARD_CORNER_RATIO = 0.0933; /* = radius kartu di layar (28px) / lebar kartu (300px) */
const CARD_EXPORT_WIDTH = 1600;
const cardBlobCache = new Map();

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function loadImageFile(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Gambar gagal dimuat: ${src}`));
    img.src = src;
  });
}

function roundedRectPath(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function wrapCanvasText(ctx, text, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let line = "";
  words.forEach((word) => {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  });
  if (line) lines.push(line);
  return lines;
}

/* Kartu tanpa gambar asli (kartu generik) digambar dengan desain yang sama seperti di layar */
async function drawGenericCard(ctx, w, h, name, side) {
  try {
    await Promise.all([document.fonts.load("500 40px Fraunces"), document.fonts.load("italic 400 40px Fraunces"), document.fonts.load("400 24px Inter")]);
  } catch (e) { /* font cadangan dipakai */ }
  ctx.fillStyle = "#26251f";
  ctx.fillRect(0, 0, w, h);
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";
  const serif = "Fraunces, Georgia, serif";
  const sans = "Inter, -apple-system, 'Segoe UI', sans-serif";
  if (side === "front") {
    try {
      const logo = await loadImageFile("assets/logo-atheandra.png");
      const size = w * 0.24;
      ctx.drawImage(logo, (w - size) / 2, h * 0.3, size, size);
    } catch (e) { /* tanpa logo */ }
    ctx.fillStyle = "#b8b2a1";
    ctx.font = `400 ${w * 0.026}px ${sans}`;
    if ("letterSpacing" in ctx) ctx.letterSpacing = `${w * 0.006}px`;
    ctx.fillText("est. 2020", w / 2, h * 0.3 + w * 0.24 + w * 0.07);
    if ("letterSpacing" in ctx) ctx.letterSpacing = "0px";
    ctx.fillStyle = "#f2ece0";
    ctx.font = `500 ${w * 0.075}px ${serif}`;
    const lines = wrapCanvasText(ctx, name, w * 0.8);
    let y = h * 0.3 + w * 0.24 + w * 0.17;
    lines.forEach((ln) => { ctx.fillText(ln, w / 2, y); y += w * 0.095; });
    ctx.fillStyle = "#b8b2a1";
    ctx.font = `400 ${w * 0.034}px ${sans}`;
    ctx.fillText("is celebrating today ♡", w / 2, y + w * 0.02);
  } else {
    ctx.fillStyle = "#f2ece0";
    ctx.font = `italic 400 ${w * 0.052}px ${serif}`;
    const msg = `Selamat bertambah usia. Semoga tahun ini membawa lebih banyak hal baik untukmu, ${name.split(" ")[0]}.`;
    const lines = wrapCanvasText(ctx, msg, w * 0.74);
    const lh = w * 0.08;
    let y = h / 2 - (lines.length * lh) / 2 + lh * 0.6;
    lines.forEach((ln) => { ctx.fillText(ln, w / 2, y); y += lh; });
    ctx.fillStyle = "#b8b2a1";
    ctx.font = `400 ${w * 0.026}px ${sans}`;
    if ("letterSpacing" in ctx) ctx.letterSpacing = `${w * 0.005}px`;
    ctx.fillText("— ATHEANDRA", w / 2, y + lh * 0.6);
    if ("letterSpacing" in ctx) ctx.letterSpacing = "0px";
  }
}

async function renderCardBlob(name, side) {
  const assets = BIRTHDAY_CARD_ASSETS[name];
  let img = null;
  let w = CARD_EXPORT_WIDTH;
  let h = Math.round(CARD_EXPORT_WIDTH * (5462 / 3875)); /* proporsi kartu asli */
  if (assets) {
    const hd = side === "front" ? assets.frontHD : assets.backHD;
    const normal = side === "front" ? assets.front : assets.back;
    try {
      img = await loadImageFile(hd || normal);
    } catch (e) {
      img = await loadImageFile(normal); /* HD gagal: pakai gambar tampilan */
    }
    w = img.naturalWidth;
    h = img.naturalHeight;
  }
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, w, h);
  ctx.save();
  roundedRectPath(ctx, 0, 0, w, h, w * CARD_CORNER_RATIO);
  ctx.clip();
  if (img) {
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, 0, 0, w, h);
  } else {
    await drawGenericCard(ctx, w, h, name, side);
  }
  ctx.restore();
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error("Gagal membuat PNG"))), "image/png");
  });
}

function getCardBlob(name, side) {
  const key = `${name}|${side}`;
  if (!cardBlobCache.has(key)) {
    const p = renderCardBlob(name, side);
    p.catch(() => cardBlobCache.delete(key));
    cardBlobCache.set(key, p);
  }
  return cardBlobCache.get(key);
}

function cardFileName(name, side) {
  return `atheandra-birthday-${slugify(name)}-${side === "front" ? "front" : "inside"}.png`;
}

function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}

async function downloadCard(name, side) {
  const blob = await getCardBlob(name, side);
  triggerDownload(blob, cardFileName(name, side));
}

/* Share: Web Share API (berbagi gambar) bila didukung; kalau tidak, unduh PNG yang sama.
   Hasil: "shared" | "downloaded" | "retry" | "cancelled" */
async function shareCard(name, side) {
  const blob = await getCardBlob(name, side);
  const filename = cardFileName(name, side);
  const file = new File([blob], filename, { type: "image/png" });
  if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({ files: [file], title: `Kartu ulang tahun ${name}` });
      return "shared";
    } catch (err) {
      if (err && err.name === "AbortError") return "cancelled";
      if (err && err.name === "NotAllowedError") return "retry"; /* gesture kadaluarsa; kartu sudah siap di cache */
      /* error lain: lanjut ke unduhan */
    }
  }
  triggerDownload(blob, filename);
  return "downloaded";
}

/* ---------- 10. HOME / NAVIGATION ---------- */
function initHomeNav() {
  const navButtons = $$(".nav-btn");
  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      navButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const view = btn.dataset.view;
      $$(".home-view").forEach((v) => v.classList.remove("active"));
      $("#view-" + view).classList.add("active");
      if (view === "home") showWorldMap();
    });
  });
}

function enterHome() {
  $("#home-greeting-name").textContent = state.currentUser.split(" ")[0];
  $("#home-date").textContent = todayLabel();
  showScreen("screen-home");
  showWorldMap();
}

/* ---------- 10b. WHERE WE LEARN — PETA GEOGRAFIS (Leaflet + OpenStreetMap) ---------- */
/* Sumber tile peta (semuanya tanpa API key).
   Default: Esri "World Dark Gray Base" — abu gelap monokrom, cocok dengan palet charcoal.
   Cadangan otomatis: OpenStreetMap (digelapkan dengan CSS).
   CATATAN: sejak akhir Agustus 2026 CARTO memberi watermark "API KEY REQUIRED" pada SEMUA tile raster tanpa key,
   termasuk dark_all dan dark_nolabels. Karena itu CARTO tidak dipakai sebagai default.
   Untuk mencoba sumber lain tanpa mengubah kode, tambahkan ke alamat website: ?tiles=esri | osm | carto */
const MAP_CARTO_KEY = ""; /* opsional: isi dengan API key CARTO gratis (carto.com/basemaps/apikey) bila ingin memakai CARTO */
const MAP_TILE_SOURCES = {
  esri: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
    options: {
      maxZoom: 18,
      maxNativeZoom: 16,
      noWrap: true,
      attribution: "Sources: Esri, HERE, Garmin, © OpenStreetMap contributors, and the GIS User Community",
    },
  },
  osm: {
    url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    options: {
      maxZoom: 18,
      noWrap: true,
      className: "tiles-osm",
      attribution: '© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
    },
  },
  carto: {
    url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" + (MAP_CARTO_KEY ? `?key=${MAP_CARTO_KEY}` : ""),
    options: {
      subdomains: "abcd",
      maxZoom: 18,
      noWrap: true,
      attribution: '© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions" target="_blank" rel="noopener">CARTO</a>',
    },
  },
};

/* Urutan sumber tile: yang dipilih dulu, lalu cadangan bila tile gagal dimuat sama sekali */
function getTileChain() {
  const wanted = new URLSearchParams(window.location.search).get("tiles");
  if (wanted === "carto") return ["carto", "esri", "osm"];
  if (wanted === "osm") return ["osm"];
  return ["esri", "osm"];
}
const MAP_WORLD_VIEW = [[-58, -180], [80, 180]];
const MAP_OVERLAP_PX = 12;      /* titik yang jaraknya <= 12px dianggap bertumpuk */
const MAP_SPIDER_MIN_ZOOM = 16; /* di atas zoom ini, grup tidak di-zoom lagi tapi langsung di-spiderfy */

let mapPoints = [];
let worldMapState = null;

/* Satu anggota yang punya institusi terdaftar = satu titik. Tanpa institusi/koordinat = tanpa titik. */
function buildMapPoints() {
  const points = [];
  MEMBERS.forEach((m) => {
    if (!m.institution) return;
    const inst = INSTITUTIONS[m.institution];
    if (!inst || typeof inst.lat !== "number" || typeof inst.lon !== "number") {
      console.warn(`[Where We Learn] Koordinat belum ada untuk "${m.institution}" (${m.name}); titik tidak ditampilkan.`);
      return;
    }
    points.push({
      name: m.name,
      institution: inst.name || m.institution,
      city: inst.city,
      country: inst.country,
      lat: inst.lat,
      lon: inst.lon,
      verified: inst.verified === true,
    });
  });
  return points;
}

function updateMapStats(points) {
  const statsEl = $("#map-stats");
  if (!statsEl) return;
  const locations = new Set(points.map((p) => `${p.city}|${p.country}`));
  statsEl.textContent = `${points.length} PEOPLE · ${locations.size} LOCATIONS`;
}

/* Versi file: harus sama di index.html (meta atheandra-version), style.css (--app-version), dan script.js.
   Dipakai untuk mendeteksi kalau ada file yang belum ter-update di hosting. */
const APP_VERSION = "8";

function checkAppVersions() {
  const stale = [];
  const meta = document.querySelector('meta[name="atheandra-version"]');
  if (!meta || meta.content !== APP_VERSION) stale.push("index.html");
  const cssV = getComputedStyle(document.documentElement).getPropertyValue("--app-version").replace(/["'\s]/g, "");
  if (cssV !== APP_VERSION) stale.push("style.css");
  return stale;
}

/* Tampilkan pesan di kartu peta (dibuat sendiri kalau index.html masih versi lama) */
function showMapNotice(text) {
  let fb = $("#map-fallback");
  if (!fb) {
    const host = $(".map-card") || $("#view-home");
    if (!host) return;
    fb = document.createElement("p");
    fb.id = "map-fallback";
    fb.style.cssText = "padding:18px;margin:0;text-align:center;font-size:.85rem;line-height:1.5;color:#cdc6b6;";
    host.insertBefore(fb, host.firstChild);
  }
  fb.textContent = text;
  fb.classList.remove("hidden");
}

function showMapFallback(detail) {
  showMapNotice(
    "Peta belum bisa dimuat." + (detail ? ` (${detail})` : "") + " Periksa koneksi internet, lalu muat ulang halaman."
  );
}

let mapBlocked = false;

/* Dipanggil sekali saat halaman dimuat: hitung data & statistik (belum membuat peta). */
function initWorldMap() {
  mapPoints = buildMapPoints();
  updateMapStats(mapPoints);

  const stale = checkAppVersions();
  if (stale.length) {
    mapBlocked = true;
    showMapNotice(
      `Peta belum bisa tampil karena file website belum ter-update semua. Yang masih versi lama: ${stale.join(", ")}. ` +
      "Ganti file itu di GitHub dengan versi terbaru, lalu muat ulang halaman (Ctrl+Shift+R)."
    );
    return;
  }

  const hint = $("#map-hint");
  if (hint && window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
    hint.textContent = "Tap a light to see who's there. Use two fingers to move the map.";
  }
}

/* Peta dibuat saat Home benar-benar tampil (Leaflet butuh ukuran container yang valid). */
function showWorldMap() {
  if (mapBlocked || !$("#leaflet-map")) return;
  requestAnimationFrame(() => {
    if (!worldMapState) {
      try {
        worldMapState = createWorldMap();
      } catch (err) {
        console.error("[Where We Learn] Peta gagal dibuat:", err);
        showMapFallback(err && err.message ? err.message : "kesalahan tidak dikenal");
      }
    } else {
      worldMapState.refresh();
    }
  });
}

function createWorldMap() {
  if (typeof L === "undefined") {
    showMapFallback("library peta Leaflet tidak termuat");
    return null;
  }

  const mapEl = $("#leaflet-map");
  const wrap = $("#map-wrap");
  const popup = $("#map-popup");
  const popupName = $("#map-popup-name");
  const popupInst = $("#map-popup-inst");
  const popupLoc = $("#map-popup-loc");
  const popupCoord = $("#map-popup-coord");
  const popupClose = $("#map-popup-close");

  /* pengaman: pastikan container punya tinggi (misal browser lama tanpa aspect-ratio) */
  if (mapEl.clientHeight < 150 && mapEl.clientWidth > 0) {
    mapEl.style.height = `${Math.round(mapEl.clientWidth * 0.75)}px`;
  }

  const touchOnly = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
  const worldBounds = L.latLngBounds(MAP_WORLD_VIEW);

  const map = L.map(mapEl, {
    zoomSnap: 0.25,
    zoomDelta: 1,
    maxZoom: 18,
    maxBounds: [[-85, -200], [85, 200]],
    maxBoundsViscosity: 0.7,
    worldCopyJump: false,
    scrollWheelZoom: false, /* aktif hanya setelah peta difokuskan, supaya scroll halaman tidak terganggu */
    dragging: !touchOnly,   /* di layar sentuh: 1 jari = scroll halaman, 2 jari = geser/zoom peta */
    attributionControl: false,
    zoomControl: true,
  });

  /* Attribution mengikuti sumber tile yang sedang dipakai (diatur lewat opsi tile layer) */
  L.control.attribution({ prefix: '<a href="https://leafletjs.com" target="_blank" rel="noopener">Leaflet</a>' }).addTo(map);

  const tileChain = getTileChain();
  let tileIdx = 0;
  let tiles = null;
  let tilesLoaded = 0;
  let tilesFailed = 0;

  function mountTiles(idx) {
    const src = MAP_TILE_SOURCES[tileChain[idx]];
    tilesLoaded = 0;
    tilesFailed = 0;
    tiles = L.tileLayer(src.url, src.options).addTo(map);
    tiles.on("tileload", () => { tilesLoaded++; });
    tiles.on("tileerror", () => {
      tilesFailed++;
      /* tidak ada satu pun tile yang berhasil dimuat: pindah ke sumber cadangan berikutnya */
      if (tilesLoaded === 0 && tilesFailed >= 4 && tileIdx < tileChain.length - 1) {
        tileIdx++;
        map.removeLayer(tiles);
        mountTiles(tileIdx);
      }
    });
  }
  mountTiles(tileIdx);

  map.fitBounds(worldBounds, { animate: false });
  map.setMinZoom(map.getBoundsZoom(worldBounds));

  /* Tombol reset ke tampilan dunia */
  const ResetControl = L.Control.extend({
    options: { position: "topleft" },
    onAdd() {
      const bar = L.DomUtil.create("div", "leaflet-bar ath-reset");
      const btn = L.DomUtil.create("a", "", bar);
      btn.href = "#";
      btn.setAttribute("role", "button");
      btn.setAttribute("title", "Reset to world view");
      btn.setAttribute("aria-label", "Reset to world view");
      btn.innerHTML =
        '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.6 2.4 4 5.3 4 8.5s-1.4 6.1-4 8.5c-2.6-2.4-4-5.3-4-8.5s1.4-6.1 4-8.5z"/></svg>';
      L.DomEvent.disableClickPropagation(bar);
      L.DomEvent.on(btn, "click", (e) => {
        L.DomEvent.preventDefault(e);
        resetView();
      });
      return bar;
    },
  });
  new ResetControl().addTo(map);

  /* ----- marker: satu anggota = satu marker ----- */
  const entries = mapPoints.map((pt, idx) => {
    const latLng = L.latLng(pt.lat, pt.lon);
    const marker = L.marker(latLng, {
      icon: L.divIcon({
        className: "ath-marker",
        html: `<span class="ath-dot" style="--dot-delay:${Math.min(idx * 28, 900)}ms"></span>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      }),
      keyboard: true,
    }).addTo(map);
    const el = marker.getElement();
    if (el) {
      el.setAttribute("role", "button");
      el.setAttribute("aria-label", `${pt.name}, ${pt.institution}, ${pt.city}`);
    }
    const entry = { pt, marker, origLatLng: latLng, spiderfied: false };
    marker.on("click", () => onMarkerClick(entry));
    return entry;
  });

  let activeEntry = null;
  let spider = null;

  /* ----- popup ----- */
  function setActiveClass(entry) {
    entries.forEach((e) => {
      const el = e.marker.getElement();
      if (el) el.classList.toggle("active", e === entry);
    });
  }

  function closePopup() {
    activeEntry = null;
    popup.classList.add("hidden");
    setActiveClass(null);
  }

  function positionPopup() {
    if (!activeEntry || popup.classList.contains("hidden")) return;
    if (popup.classList.contains("as-sheet")) {
      popup.style.left = "";
      popup.style.top = "";
      return;
    }
    const p = map.latLngToContainerPoint(activeEntry.marker.getLatLng());
    const w = popup.offsetWidth;
    const h = popup.offsetHeight;
    const W = wrap.clientWidth;
    const H = wrap.clientHeight;
    let left = p.x + 18;
    if (left + w > W - 8) left = p.x - w - 18;
    left = Math.max(8, Math.min(left, W - w - 8));
    const top = Math.max(8, Math.min(p.y - h / 2, H - h - 8));
    popup.style.left = `${left}px`;
    popup.style.top = `${top}px`;
  }

  function openPopup(entry) {
    activeEntry = entry;
    const { pt } = entry;
    popupName.textContent = pt.name.toUpperCase();
    popupInst.textContent = pt.institution;
    popupLoc.textContent = `${pt.city}, ${pt.country}`;
    popupCoord.textContent = `${pt.lat.toFixed(4)}, ${pt.lon.toFixed(4)}`;
    const desktop = window.matchMedia("(min-width: 760px)").matches;
    popup.classList.toggle("as-sheet", !desktop);
    popup.classList.remove("hidden");
    setActiveClass(entry);
    positionPopup();
  }

  /* ----- spiderfy: tebar marker yang bertumpuk tanpa mengubah koordinat aslinya ----- */
  function spiderOffsets(n) {
    const offsets = [];
    if (n <= 8) {
      const r = Math.max(34, (n * 34) / (2 * Math.PI));
      for (let i = 0; i < n; i++) {
        const a = -Math.PI / 2 + (i * 2 * Math.PI) / n;
        offsets.push(L.point(Math.cos(a) * r, Math.sin(a) * r));
      }
    } else {
      const golden = 2.399963;
      for (let i = 0; i < n; i++) {
        const r = 24 * Math.sqrt(i + 0.6);
        offsets.push(L.point(Math.cos(i * golden) * r, Math.sin(i * golden) * r));
      }
    }
    return offsets;
  }

  function animateSpider() {
    mapEl.classList.add("spider-anim");
    window.clearTimeout(animateSpider._t);
    animateSpider._t = window.setTimeout(() => mapEl.classList.remove("spider-anim"), 420);
  }

  function collapseSpider() {
    if (!spider) return;
    animateSpider();
    spider.group.forEach((e) => {
      e.spiderfied = false;
      e.marker.setLatLng(e.origLatLng);
      e.marker.setZIndexOffset(0);
    });
    map.removeLayer(spider.lines);
    spider = null;
  }

  function spiderfy(group) {
    collapseSpider();
    animateSpider();
    const lat = group.reduce((s, e) => s + e.origLatLng.lat, 0) / group.length;
    const lng = group.reduce((s, e) => s + e.origLatLng.lng, 0) / group.length;
    const center = L.latLng(lat, lng);
    const centerPt = map.latLngToLayerPoint(center);
    const offsets = spiderOffsets(group.length);
    const lines = L.layerGroup().addTo(map);
    L.circleMarker(center, {
      radius: 2.5, color: "#f2ece0", weight: 1, fillColor: "#f2ece0", fillOpacity: 0.6, interactive: false,
    }).addTo(lines);
    group.forEach((e, i) => {
      const target = map.layerPointToLatLng(centerPt.add(offsets[i]));
      e.spiderfied = true;
      e.marker.setLatLng(target);
      e.marker.setZIndexOffset(1000);
      L.polyline([center, target], { color: "#f2ece0", opacity: 0.35, weight: 1, interactive: false }).addTo(lines);
    });
    spider = { group, lines };
  }

  function overlappingGroup(entry) {
    const p0 = map.latLngToContainerPoint(entry.marker.getLatLng());
    return entries.filter(
      (e) => !e.spiderfied && map.latLngToContainerPoint(e.marker.getLatLng()).distanceTo(p0) <= MAP_OVERLAP_PX
    );
  }

  function onMarkerClick(entry) {
    if (entry.spiderfied) {
      openPopup(entry);
      return;
    }
    const group = overlappingGroup(entry);
    if (group.length > 1) {
      closePopup();
      const bounds = L.latLngBounds(group.map((g) => g.origLatLng));
      const spanMeters = bounds.getNorthEast().distanceTo(bounds.getSouthWest());
      if (spanMeters > 30 && map.getZoom() < MAP_SPIDER_MIN_ZOOM) {
        /* titik berbeda lokasi tapi tampak menumpuk: perbesar dulu ke wilayahnya */
        collapseSpider();
        map.flyToBounds(bounds, { padding: [48, 48], maxZoom: 17, duration: 0.9 });
      } else {
        /* koordinat kampus yang sama persis: tebar agar semua anggota bisa dipilih */
        spiderfy(group);
      }
      return;
    }
    collapseSpider();
    openPopup(entry);
  }

  function resetView() {
    collapseSpider();
    closePopup();
    map.flyToBounds(worldBounds, { duration: 0.9 });
  }

  function refresh() {
    map.invalidateSize({ animate: false });
    map.setMinZoom(map.getBoundsZoom(worldBounds));
    positionPopup();
  }

  /* ----- event peta ----- */
  map.on("click", () => {
    collapseSpider();
    closePopup();
  });
  map.on("zoomstart", () => {
    collapseSpider();
    closePopup();
  });
  map.on("move", positionPopup);
  map.on("moveend", () => {
    if (activeEntry && !map.getBounds().contains(activeEntry.marker.getLatLng())) closePopup();
  });
  map.on("focus", () => map.scrollWheelZoom.enable());
  map.on("blur", () => map.scrollWheelZoom.disable());

  popupClose.addEventListener("click", closePopup);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      collapseSpider();
      closePopup();
    }
  });
  window.addEventListener("resize", () => {
    window.clearTimeout(createWorldMap._rt);
    createWorldMap._rt = window.setTimeout(refresh, 150);
  });

  return { map, entries, refresh, resetView, closePopup, collapseSpider };
}

/* ---------- 10c. BIRTHDAY CALENDAR ---------- */
/* Konfigurasi per bulan. Tahap pertama: hanya November 2026.
   Untuk menambah bulan lain: tambahkan satu entri baru di CALENDAR_MONTHS (lihat panduan di bawah).
   `owner` pada tiap stiker = nama anggota PERSIS seperti di MEMBERS (null = belum dihubungkan). */
const CALENDAR_MONTHS = {
  11: {
    year: 2026,
    title: "NOVEMBER",
    caption: "November, a little celebration of us.",
    illustration: "assets/calendar/november/illustration.png?v=8",
    illustrationAlt: "Ilustrasi tujuh karakter chibi anggota ATHEANDRA yang berulang tahun di bulan November, piknik bersama",
    /* urutan stiker = urutan tanggal ulang tahun; owner = nama persis di MEMBERS */
    stickers: [
      { id: 1, src: "assets/stickers/november/sticker-1.png?v=8", owner: "Kayla Fakhira F." },
      { id: 2, src: "assets/stickers/november/sticker-2.png?v=8", owner: "Yusrul Hana Q." },
      { id: 3, src: "assets/stickers/november/sticker-3.png?v=8", owner: "Silla Adyalova" },
      { id: 4, src: "assets/stickers/november/sticker-4.png?v=8", owner: "Ma'rifatus Zahro" },
      { id: 5, src: "assets/stickers/november/sticker-5.png?v=8", owner: "Marcella Novia Yolanda" },
      { id: 6, src: "assets/stickers/november/sticker-6.png?v=8", owner: "Echa Afriana" },
      { id: 7, src: "assets/stickers/november/sticker-7.png?v=8", owner: "Alicia Kirana C. I." },
    ],
  },
};
const CALENDAR_VIEW = { month: 11 }; /* bulan yang ditampilkan di halaman Calendar */
const MONTH_NAMES_ID = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];
const WEEKDAYS_EN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/* Ambil anggota yang berulang tahun pada bulan tertentu langsung dari MEMBERS.
   Tanggal yang belum diketahui (day = null) TIDAK ditebak: masuk daftar `unknownDay`. */
function getMonthBirthdays(month, year) {
  const daysInMonth = new Date(year, month, 0).getDate();
  const byDay = new Map();
  const unknownDay = [];
  MEMBERS.forEach((m) => {
    if (m.month !== month) return;
    if (m.day === null || m.day === undefined) {
      unknownDay.push(m);
      return;
    }
    if (m.day < 1 || m.day > daysInMonth) {
      console.warn(`[Calendar] Tanggal tidak valid untuk ${m.name}: ${m.day}/${m.month}`);
      return;
    }
    if (!byDay.has(m.day)) byDay.set(m.day, []);
    byDay.get(m.day).push(m);
  });
  return { byDay, unknownDay };
}

function stickerForMember(cfg, name) {
  return cfg.stickers.find((s) => s.owner === name) || null;
}

function calEl(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function calCake(className) {
  const NS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("class", className);
  svg.setAttribute("viewBox", "0 0 64 64");
  svg.setAttribute("aria-hidden", "true");
  const use = document.createElementNS(NS, "use");
  use.setAttribute("href", "#cal-cake");
  svg.appendChild(use);
  return svg;
}

function formatCalDate(day, month, year) {
  return `${day} ${MONTH_NAMES_ID[month - 1]} ${year}`;
}

/* ----- popup / birthday card ----- */
let calModalState = null;

function ensureCalModal() {
  if (calModalState) return calModalState;
  const overlay = calEl("div", "cal-modal");
  overlay.setAttribute("aria-hidden", "true");
  const card = calEl("div", "cal-card");
  card.setAttribute("role", "dialog");
  card.setAttribute("aria-modal", "true");
  card.setAttribute("aria-label", "Ulang tahun anggota ATHEANDRA");
  const closeBtn = calEl("button", "cal-close", "✕");
  closeBtn.type = "button";
  closeBtn.setAttribute("aria-label", "Tutup");
  const dateEl = calEl("p", "cal-card-date");
  const titleEl = calEl("h3", "cal-card-title", "Happy Birthday");
  const list = calEl("ul", "cal-people");
  const note = calEl("p", "cal-card-note", "Selamat ulang tahun ♡");
  card.append(closeBtn, dateEl, titleEl, list, note);
  overlay.appendChild(card);
  document.body.appendChild(overlay);

  const state = { overlay, card, closeBtn, dateEl, list, lastFocus: null };
  const close = () => closeCalModal();
  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("open")) close();
  });
  calModalState = state;
  return state;
}

function openCalModal(cfg, day, members) {
  const st = ensureCalModal();
  st.lastFocus = document.activeElement;
  st.dateEl.textContent = formatCalDate(day, CALENDAR_VIEW.month, cfg.year).toUpperCase();
  st.list.innerHTML = "";
  st.list.className = "cal-people" + (members.length > 2 ? " is-many" : "");
  members.forEach((m, i) => {
    const li = calEl("li", "cal-person");
    const wrap = calEl("div", "cal-person-sticker");
    wrap.style.setProperty("--tilt", `${i % 2 === 0 ? -3 : 3}deg`);
    const sticker = stickerForMember(cfg, m.name);
    if (sticker) {
      const img = document.createElement("img");
      img.src = sticker.src;
      img.alt = `Stiker ${m.name}`;
      wrap.appendChild(img);
    } else {
      wrap.classList.add("is-cake");
      wrap.appendChild(calCake("cal-cake-lg"));
    }
    li.append(wrap, calEl("p", "cal-person-name", m.name));
    st.list.appendChild(li);
  });
  st.overlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  /* reflow agar transisi masuk berjalan */
  void st.overlay.offsetWidth;
  st.overlay.classList.add("open");
  st.closeBtn.focus();
}

function closeCalModal() {
  if (!calModalState) return;
  const st = calModalState;
  st.overlay.classList.remove("open");
  st.overlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
  if (st.lastFocus && st.lastFocus.focus) st.lastFocus.focus();
}

/* ----- render halaman kalender ----- */
function renderCalendar() {
  const root = $("#cal-root");
  if (!root) return;
  const month = CALENDAR_VIEW.month;
  const cfg = CALENDAR_MONTHS[month];
  root.innerHTML = "";
  if (!cfg) {
    root.appendChild(calEl("p", "cal-empty", "Kalender bulan ini belum tersedia."));
    return;
  }

  const { byDay, unknownDay } = getMonthBirthdays(month, cfg.year);
  const now = new Date();
  const todayDay = now.getFullYear() === cfg.year && now.getMonth() + 1 === month ? now.getDate() : null;

  const sheet = calEl("section", "cal-sheet");
  sheet.setAttribute("aria-label", `Birthday Calendar ${cfg.title} ${cfg.year}`);

  /* ilustrasi + teks kecil */
  const figure = calEl("figure", "cal-figure");
  const illu = document.createElement("img");
  illu.className = "cal-illustration";
  illu.src = cfg.illustration;
  illu.alt = cfg.illustrationAlt;
  figure.append(illu, calEl("figcaption", "cal-caption", cfg.caption));
  sheet.appendChild(figure);

  /* judul bulan */
  const head = calEl("div", "cal-head");
  head.append(calEl("h2", "cal-month", cfg.title), calEl("p", "cal-year", String(cfg.year)));
  sheet.appendChild(head);

  /* nama hari */
  const weekdays = calEl("div", "cal-weekdays");
  WEEKDAYS_EN.forEach((d, i) => {
    weekdays.appendChild(calEl("span", i === 0 ? "is-sun" : i === 6 ? "is-sat" : "", d));
  });
  sheet.appendChild(weekdays);

  /* grid tanggal: dimulai Minggu */
  const grid = calEl("div", "cal-grid");
  const offset = new Date(cfg.year, month - 1, 1).getDay();
  const daysInMonth = new Date(cfg.year, month, 0).getDate();
  for (let i = 0; i < offset; i++) grid.appendChild(calEl("span", "cal-day is-empty"));
  for (let day = 1; day <= daysInMonth; day++) {
    const weekday = (offset + day - 1) % 7;
    const members = byDay.get(day) || [];
    const hasBday = members.length > 0;
    const cls = ["cal-day"];
    if (weekday === 0) cls.push("is-sun");
    if (weekday === 6) cls.push("is-sat");
    if (day === todayDay) cls.push("is-today");
    if (hasBday) cls.push("has-bday");
    const cell = calEl(hasBday ? "button" : "span", cls.join(" "));
    cell.appendChild(calEl("span", "cal-num", String(day)));
    if (hasBday) {
      cell.type = "button";
      cell.appendChild(calCake("cal-cake"));
      if (members.length > 1) cell.appendChild(calEl("span", "cal-count", String(members.length)));
      cell.setAttribute(
        "aria-label",
        `${day} ${MONTH_NAMES_ID[month - 1]}: ${members.map((m) => m.name).join(", ")}`
      );
      cell.addEventListener("click", () => openCalModal(cfg, day, members));
    }
    grid.appendChild(cell);
  }
  sheet.appendChild(grid);
  sheet.appendChild(calEl("p", "cal-hint", "Tap a cake to see who's celebrating."));

  /* anggota bulan ini yang tanggalnya belum tercatat (tidak ditebak) */
  if (unknownDay.length) {
    const sec = calEl("div", "cal-unknown");
    sec.appendChild(calEl("h3", "cal-sub", "Tanggal belum diketahui"));
    sec.appendChild(calEl("p", "cal-sub-note", `Berulang tahun di bulan ${MONTH_NAMES_ID[month - 1]}, tanggalnya belum tercatat.`));
    const chips = calEl("ul", "cal-chips");
    unknownDay.forEach((m) => chips.appendChild(calEl("li", "cal-chip", m.name)));
    sec.appendChild(chips);
    sheet.appendChild(sec);
  }

  /* koleksi stiker */
  const coll = calEl("div", "cal-collection");
  coll.appendChild(calEl("h3", "cal-sub", `Stiker ${cfg.title.charAt(0) + cfg.title.slice(1).toLowerCase()}`));
  const strip = calEl("ul", "cal-sticker-strip");
  cfg.stickers.forEach((s, i) => {
    const li = calEl("li", "cal-sticker-item");
    const img = document.createElement("img");
    img.src = s.src;
    img.alt = s.owner ? `Stiker ${s.owner}` : `Stiker karakter ${s.id}`;
    img.style.setProperty("--tilt", `${[-4, 3, -2, 4, -3, 2][i % 6]}deg`);
    li.appendChild(img);
    if (s.owner) li.appendChild(calEl("span", "cal-sticker-name", s.owner.split(" ")[0]));
    strip.appendChild(li);
  });
  coll.appendChild(strip);
  sheet.appendChild(coll);

  root.appendChild(sheet);
}

function initCalendar() {
  try {
    renderCalendar();
  } catch (err) {
    console.error("[Calendar] Gagal membuat kalender:", err);
  }
}

/* ---------- 11. WIRE UP BUTTONS ---------- */
function initFlowButtons() {
  $("#mood-continue").addEventListener("click", () => {
    renderMoodMessage();
    showScreen("screen-mood-message");
  });

  $("#mood-message-continue").addEventListener("click", () => {
    runBirthdayCheck();
    showScreen("screen-birthday-gate");
  });

  $("#btn-enter-atheandra").addEventListener("click", enterHome);

  $("#btn-see-celebrating").addEventListener("click", () => {
    renderBirthdayCards(state.birthdayPeople);
    const count = state.birthdayPeople.length;
    $("#birthday-card-heading").textContent =
      count === 1
        ? "She's celebrating today"
        : count === 2
        ? "They're celebrating today"
        : `${count} people are celebrating today`;
    showScreen("screen-birthday-card");
  });

  $("#btn-show-me").addEventListener("click", () => {
    $("#self-birthday-name").textContent = state.currentUser;
    showScreen("screen-birthday-self-reveal");
  });

  $("#btn-self-reveal-continue").addEventListener("click", () => {
    renderBirthdayCards([{ name: state.currentUser }]);
    $("#birthday-card-heading").textContent = "Happy Birthday!";
    showScreen("screen-birthday-card");
  });

  $("#birthday-card-continue").addEventListener("click", enterHome);
}

/* ---------- 12. INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initNamePicker();
  initMoodScreen();
  initFlowButtons();
  initHomeNav();
  initWorldMap();
  initCalendar();
  showScreen("screen-login");
});
