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
  { name: "Kayla Fakhira F.",          day: null, month: 11, institution: "UINMA", city: "Malang" },
  { name: "Khoirunnisa Ayunda",        day: null, month: 3, institution: null, city: null },
  { name: "Lanaa 'Ainunnajah",         day: 10, month: 2,  institution: null, city: null },
  { name: "Ma'rifatus Zahro",          day: 11, month: 11, institution: "UINKHAS", city: "Jember" },
  { name: "Marcella Novia Yolanda",    day: null, month: 11, institution: "UNESA", city: "Surabaya" },
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
  { name: "Sanaya Aulia A.",           day: 20, month: 4,  institution: "Universitas Muhammadiyah Malang", city: "Malang" },
  { name: "Sandya Farah S.",           day: 1,  month: 3,  institution: "UINSA", city: "Surabaya" },
  { name: "Saraswati Alifya D.",       day: null, month: null, institution: "UINSA", city: "Surabaya" },
  { name: "Shelfi Nadian P.",          day: 30, month: 7,  institution: "UINMA", city: "Malang" },
  { name: "Shofia Wulida H.",          day: 6,  month: 3,  institution: "UIN Syaikh Wasil", city: "Kediri" },
  { name: "Shofwatin Ni'mah",          day: 26, month: 4,  institution: "UNWAHA", city: "Jombang" },
  { name: "Shofy Agustina",            day: 17, month: 8,  institution: "UNESA", city: "Surabaya" },
  { name: "Silla Adyalova",            day: null, month: 11, institution: "Poltekkes Surabaya", city: "Surabaya" },
  { name: "Yusrul Hana Q.",            day: 7,  month: 11, institution: "UINSA", city: "Surabaya" },
  { name: "Zahra Salsabila",           day: 9,  month: 8,  institution: null, city: null },
  { name: "Zakiyyah Aulia Nameer",     day: 21, month: 4,  institution: "Madrasah Muallimin Muallimat Bahrul Ulum", city: "Jombang" },
];

/* Koordinat kota (lat, lon) untuk titik pada peta "Where We Learn" */
const CITY_COORDS = {
  "Surabaya":     { lat: -7.2575, lon: 112.7521, country: "Indonesia" },
  "Jombang":      { lat: -7.5461, lon: 112.2384, country: "Indonesia" },
  "Yogyakarta":   { lat: -7.7956, lon: 110.3695, country: "Indonesia" },
  "Malang":       { lat: -7.9666, lon: 112.6326, country: "Indonesia" },
  "Bojonegoro":   { lat: -7.1503, lon: 111.8817, country: "Indonesia" },
  "Karawang":     { lat: -6.3227, lon: 107.3376, country: "Indonesia" },
  "Bandung":      { lat: -6.9175, lon: 107.6191, country: "Indonesia" },
  "Jember":       { lat: -8.1844, lon: 113.7040, country: "Indonesia" },
  "Lamongan":     { lat: -7.1225, lon: 112.4211, country: "Indonesia" },
  "Gresik":       { lat: -7.1547, lon: 112.6541, country: "Indonesia" },
  "Tulungagung":  { lat: -8.0645, lon: 111.9027, country: "Indonesia" },
  "Semarang":     { lat: -6.9667, lon: 110.4167, country: "Indonesia" },
  "Mojokerto":    { lat: -7.4664, lon: 112.4335, country: "Indonesia" },
  "Jakarta":      { lat: -6.2088, lon: 106.8456, country: "Indonesia" },
  "Kediri":       { lat: -7.8480, lon: 112.0178, country: "Indonesia" },
  "Cairo":        { lat: 30.0444, lon: 31.2357,  country: "Egypt" },
};

/* Anggota yang punya kartu ulang tahun bergambar asli */
const BIRTHDAY_CARD_ASSETS = {
  "Bahriyatul Lathifa A.": {
    front: "assets/birthdays/bahriyatul/front.jpg",
    back: "assets/birthdays/bahriyatul/back.jpg",
  },
  "Nafacha Mufidah": {
    front: "assets/birthdays/nafacha/front.jpg",
    back: "assets/birthdays/nafacha/back.jpg",
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

function getTodaysBirthdays() {
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

  function toggle() {
    flip.classList.toggle("flipped");
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
    });
  });
}

function enterHome() {
  $("#home-greeting-name").textContent = state.currentUser.split(" ")[0];
  $("#home-date").textContent = todayLabel();
  showScreen("screen-home");
}

/* ---------- 10b. WHERE WE LEARN — WORLD MAP ---------- */
const MAP_VIEWBOX = { w: 1000, h: 500 };

function projectLatLon(lat, lon) {
  const x = ((lon + 180) / 360) * MAP_VIEWBOX.w;
  const y = ((90 - lat) / 180) * MAP_VIEWBOX.h;
  return { x, y };
}

/* hash string -> 0..1, dipakai untuk offset yang stabil (tidak berubah tiap reload) */
function hashUnit(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return (Math.abs(h) % 1000) / 1000;
}

function buildMapPoints() {
  const withLocation = MEMBERS.filter((m) => m.city && CITY_COORDS[m.city]);

  /* kelompokkan per kota */
  const byCity = new Map();
  withLocation.forEach((m) => {
    if (!byCity.has(m.city)) byCity.set(m.city, []);
    byCity.get(m.city).push(m);
  });

  const points = [];

  byCity.forEach((cityMembers, city) => {
    const coord = CITY_COORDS[city];
    const cityPoint = projectLatLon(coord.lat, coord.lon);

    /* kelompokkan per institusi dalam kota yang sama */
    const byInstitution = new Map();
    cityMembers.forEach((m) => {
      const key = m.institution || "—";
      if (!byInstitution.has(key)) byInstitution.set(key, []);
      byInstitution.get(key).push(m);
    });

    const institutions = Array.from(byInstitution.keys());
    const instCount = institutions.length;
    const instRadius = instCount > 1 ? 12 + Math.min(instCount, 8) * 4.2 : 0;

    institutions.forEach((institution, iIdx) => {
      let instX = cityPoint.x;
      let instY = cityPoint.y;
      if (instCount > 1) {
        const angle = (iIdx / instCount) * Math.PI * 2 + hashUnit(city) * Math.PI * 2;
        instX += Math.cos(angle) * instRadius;
        instY += Math.sin(angle) * instRadius * 0.6; /* sedikit gepeng biar pas proporsi peta */
      }

      const members = byInstitution.get(institution);
      const n = members.length;
      const personRadius = n > 1 ? 6 + Math.min(n, 10) * 3 : 0;

      members.forEach((m, pIdx) => {
        let px = instX;
        let py = instY;
        if (n > 1) {
          const angle = (pIdx / n) * Math.PI * 2 + hashUnit(m.name) * Math.PI * 2;
          px += Math.cos(angle) * personRadius;
          py += Math.sin(angle) * personRadius * 0.6;
        }
        points.push({
          name: m.name,
          institution: m.institution,
          city,
          country: coord.country,
          x: px,
          y: py,
        });
      });
    });
  });

  return points;
}

function initWorldMap() {
  const dotsLayer = $("#map-dots");
  const svg = $("#world-map");
  const popup = $("#map-popup");
  const popupName = $("#map-popup-name");
  const popupInst = $("#map-popup-inst");
  const popupLoc = $("#map-popup-loc");
  const statsEl = $("#map-stats");
  if (!dotsLayer || !svg) return;

  const points = buildMapPoints();

  /* statistik dinamis: jumlah orang & jumlah lokasi (kota+negara unik) */
  const peopleCount = points.length;
  const uniqueLocations = new Set(points.map((p) => `${p.city}|${p.country}`));
  if (statsEl) {
    statsEl.textContent = `${peopleCount} PEOPLE · ${uniqueLocations.size} LOCATIONS`;
  }

  dotsLayer.innerHTML = "";
  points.forEach((pt, idx) => {
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", "map-dot");
    g.setAttribute("tabindex", "0");
    g.setAttribute("role", "button");
    g.setAttribute("aria-label", `${pt.name}, ${pt.institution || ""}, ${pt.city}`);
    g.style.setProperty("--dot-delay", `${Math.min(idx * 28, 900)}ms`);

    const glow = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    glow.setAttribute("class", "map-dot-glow");
    glow.setAttribute("cx", pt.x);
    glow.setAttribute("cy", pt.y);
    glow.setAttribute("r", 5.5);

    const core = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    core.setAttribute("class", "map-dot-core");
    core.setAttribute("cx", pt.x);
    core.setAttribute("cy", pt.y);
    core.setAttribute("r", 1.8);

    const hit = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    hit.setAttribute("class", "map-dot-hit");
    hit.setAttribute("cx", pt.x);
    hit.setAttribute("cy", pt.y);
    hit.setAttribute("r", 6.5);

    g.appendChild(hit);
    g.appendChild(glow);
    g.appendChild(core);
    dotsLayer.appendChild(g);

    function openPopup() {
      $$(".map-dot", dotsLayer).forEach((d) => d.classList.remove("active"));
      g.classList.add("active");
      popupName.textContent = pt.name.toUpperCase();
      popupInst.textContent = pt.institution || "";
      popupLoc.textContent = `${pt.city}, ${pt.country}`;
      popup.classList.remove("hidden");
      popup.classList.remove("as-sheet");

      if (window.matchMedia("(min-width: 760px)").matches) {
        const svgRect = svg.getBoundingClientRect();
        const px = svgRect.left + (pt.x / MAP_VIEWBOX.w) * svgRect.width;
        const py = svgRect.top + (pt.y / MAP_VIEWBOX.h) * svgRect.height;
        const wrapRect = $("#map-wrap").getBoundingClientRect();
        let left = px - wrapRect.left + 14;
        let top = py - wrapRect.top - 10;
        popup.style.left = left + "px";
        popup.style.top = top + "px";
        popup.style.right = "auto";
        popup.style.bottom = "auto";

        /* clamp supaya popup tidak keluar kontainer */
        requestAnimationFrame(() => {
          const popRect = popup.getBoundingClientRect();
          if (popRect.right > wrapRect.right) {
            popup.style.left = px - wrapRect.left - popRect.width - 14 + "px";
          }
          if (popRect.bottom > wrapRect.bottom) {
            popup.style.top = wrapRect.height - popRect.height - 10 + "px";
          }
          if (popRect.top < wrapRect.top) {
            popup.style.top = "10px";
          }
        });
      } else {
        popup.classList.add("as-sheet");
        popup.style.left = "";
        popup.style.top = "";
      }
    }

    g.addEventListener("click", (e) => {
      e.stopPropagation();
      openPopup();
    });
    g.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openPopup();
      }
    });
  });

  function closePopup() {
    popup.classList.add("hidden");
    $$(".map-dot", dotsLayer).forEach((d) => d.classList.remove("active"));
  }

  svg.addEventListener("click", closePopup);
  $("#map-wrap").addEventListener("click", (e) => {
    if (e.target.id === "map-wrap") closePopup();
  });
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
  showScreen("screen-login");
});
