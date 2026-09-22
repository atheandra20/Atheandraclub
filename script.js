/* =========================================================
   ATHEANDRA — script.js
   Data anggota, alur login → mood → birthday → home
   ========================================================= */

/* ---------- 1. DATA ANGGOTA ---------- */
/* day/month = null jika tanggal lahir belum diketahui */
const MEMBERS = [
  { name: "Afina Churin'in",           day: 10, month: 5 },
  { name: "Aisyah Mujahiddah Fillah",  day: null, month: null },
  { name: "Alicia Kirana C. I.",       day: 30, month: 11 },
  { name: "Alifah Sahlaa",             day: null, month: null },
  { name: "Alvinatun Ni'mah A.",       day: 27, month: 4 },
  { name: "Amelia Sinta Dewi",         day: null, month: 12 },
  { name: "Amita Siti Maryam",         day: 13, month: 3 },
  { name: "Anis Shofa",                day: 27, month: 2 },
  { name: "Arrofiu Inayatul A.",       day: 7,  month: 9 },
  { name: "Aulia Firda D.",            day: 27, month: 8 },
  { name: "Bahriyatul Lathifa A.",     day: 22, month: 9 },
  { name: "Barirotul Fuadiyyah",       day: null, month: 6 },
  { name: "Bilqis Zakiyyah",           day: 27, month: 10 },
  { name: "Cahya Niswa Kusuma",        day: 3,  month: 5 },
  { name: "Cahyaning Millati",         day: 22, month: 7 },
  { name: "Cika Nurossoba",            day: 20, month: 12 },
  { name: "Diandra Nasywa A.",         day: 26, month: 8 },
  { name: "Dwi Aisyah M.",             day: 23, month: 2 },
  { name: "Dzakhwa Pradhia Ulaulia",   day: 8,  month: 8 },
  { name: "Echa Afriana",              day: 28, month: 11 },
  { name: "Hidayatul Ulya",            day: 12, month: 3 },
  { name: "I'i Abilahni",              day: null, month: null },
  { name: "Iftitach Farah A.",         day: 14, month: 6 },
  { name: "Kayla Fakhira F.",          day: null, month: 11 },
  { name: "Khoirunnisa Ayunda",        day: null, month: 3 },
  { name: "Lanaa 'Ainunnajah",         day: 10, month: 2 },
  { name: "Ma'rifatus Zahro",          day: 11, month: 11 },
  { name: "Marcella Novia Yolanda",    day: null, month: 11 },
  { name: "Marsya Nariswari S.",       day: 26, month: 12 },
  { name: "Meidiana Alfadinova",       day: 1,  month: 5 },
  { name: "Muyassaroh",                day: 10, month: 1 },
  { name: "Nabila Apriliana Intan",    day: 20, month: 4 },
  { name: "Nadia Zahrotus S.",         day: null, month: null },
  { name: "Nadin Faizzatul M.",        day: null, month: null },
  { name: "Nafacha Mufidah",           day: 22, month: 9 },
  { name: "Nailal Muna H",             day: 25, month: 1 },
  { name: "Najwa Aulia Z.",            day: 18, month: 6 },
  { name: "Nasywa Azkiyyah N.",        day: 21, month: 4 },
  { name: "Nasywa Nafillah F.",        day: 14, month: 9 },
  { name: "Nasywa Salsabila",          day: 16, month: 2 },
  { name: "Nihayatul Maghfiroh",       day: 7,  month: 8 },
  { name: "Nilna Marama",              day: 3,  month: 5 },
  { name: "Nina Syafitri",             day: 5,  month: 3 },
  { name: "Niswatul Munawwaroh",       day: 9,  month: 3 },
  { name: "Putri Alifah Anggun",       day: 27, month: 12 },
  { name: "Putri Khumairoh",           day: 10, month: 6 },
  { name: "Putri Rahmawati",           day: null, month: null },
  { name: "Qarera Qothrunnada",        day: 21, month: 7 },
  { name: "Ro'i Fatmalatullayyin",     day: 11, month: 7 },
  { name: "Robiatul Adawiyyah",        day: null, month: null },
  { name: "Sa'adatuz Zainiyyah",       day: 21, month: 2 },
  { name: "Salsabila Muizzatsani",     day: null, month: 8 },
  { name: "Salsabila Triputri",        day: null, month: 4 },
  { name: "Sanaya Aulia A.",           day: 20, month: 4 },
  { name: "Sandya Farah S.",           day: 1,  month: 3 },
  { name: "Saraswati Alifya D.",       day: null, month: null },
  { name: "Shelfi Nadian P.",          day: 30, month: 7 },
  { name: "Shofia Wulida H.",          day: 6,  month: 3 },
  { name: "Shofwatin Ni'mah",          day: 26, month: 4 },
  { name: "Shofy Agustina",            day: 17, month: 8 },
  { name: "Silla Adyalova",            day: null, month: 11 },
  { name: "Yusrul Hana Q.",            day: 7,  month: 11 },
  { name: "Zahra Salsabila",           day: 9,  month: 8 },
  { name: "Zakiyyah Aulia Nameer",     day: 21, month: 4 },
];

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
  showScreen("screen-login");
});
