/* =============================================
   SocialPro – Main Application JS
   ============================================= */

// ---- Expert Data ----
const EXPERTS = [
  {
    id: 1,
    name: "Alex Chen",
    handle: "@alexchen",
    avatar: "https://i.pravatar.cc/80?img=1",
    platforms: ["TikTok", "Instagram"],
    bio: "Former Head of Creator Partnerships at TikTok. Helped 200+ creators hit 1M+ followers through data-driven content strategy.",
    followers: "4.2M on TikTok",
    rating: 4.9,
    reviews: 312,
    price15: 45,
    price30: 85,
    price60: 160,
    specialties: ["TikTok Algorithm", "Viral Content", "Monetization"],
    reviewList: [
      { name: "Marcus T.", avatar: "https://i.pravatar.cc/32?img=11", stars: 5, text: "Alex completely transformed my content strategy. Hit 100K followers in 3 weeks following his advice." },
      { name: "Sophie L.", avatar: "https://i.pravatar.cc/32?img=21", stars: 5, text: "Worth every penny. He gave me an exact blueprint for going viral on TikTok." },
    ]
  },
  {
    id: 2,
    name: "Sarah Kim",
    handle: "@sarahkimcreates",
    avatar: "https://i.pravatar.cc/80?img=5",
    platforms: ["Instagram", "YouTube"],
    bio: "Award-winning content creator with 2.8M Instagram followers. Expert in aesthetic brand building, Reels strategy, and brand partnerships.",
    followers: "2.8M on Instagram",
    rating: 5.0,
    reviews: 198,
    price15: 55,
    price30: 100,
    price60: 190,
    specialties: ["Instagram Reels", "Brand Deals", "Aesthetic Branding"],
    reviewList: [
      { name: "Emma R.", avatar: "https://i.pravatar.cc/32?img=22", stars: 5, text: "Sarah's advice on Reels was game-changing. My engagement tripled in one month." },
      { name: "Lily M.", avatar: "https://i.pravatar.cc/32?img=33", stars: 5, text: "She landed me my first brand deal within 2 weeks of our session." },
    ]
  },
  {
    id: 3,
    name: "Jordan Wells",
    handle: "@jordanwellsyt",
    avatar: "https://i.pravatar.cc/80?img=3",
    platforms: ["YouTube"],
    bio: "YouTube strategist with 1.1M subscribers. Specializes in thumbnail psychology, title optimization, and long-form content strategy.",
    followers: "1.1M on YouTube",
    rating: 4.8,
    reviews: 145,
    price15: 35,
    price30: 65,
    price60: 120,
    specialties: ["YouTube SEO", "Thumbnails", "Audience Retention"],
    reviewList: [
      { name: "David K.", avatar: "https://i.pravatar.cc/32?img=44", stars: 5, text: "Jordan audited my thumbnails and my CTR went from 3% to 11% in a week." },
      { name: "Ryan P.", avatar: "https://i.pravatar.cc/32?img=55", stars: 4, text: "Great insights on SEO and discoverability. Already seeing more organic views." },
    ]
  },
  {
    id: 4,
    name: "Maya Patel",
    handle: "@mayapatellinked",
    avatar: "https://i.pravatar.cc/80?img=9",
    platforms: ["LinkedIn"],
    bio: "LinkedIn Top Voice with 480K followers. Helps founders and executives build thought leadership that generates inbound leads.",
    followers: "480K on LinkedIn",
    rating: 4.9,
    reviews: 89,
    price15: 50,
    price30: 95,
    price60: 180,
    specialties: ["LinkedIn Growth", "Personal Branding", "B2B Leads"],
    reviewList: [
      { name: "James W.", avatar: "https://i.pravatar.cc/32?img=66", stars: 5, text: "Maya helped me crack the LinkedIn algorithm. My posts now average 40K impressions." },
      { name: "Lisa H.", avatar: "https://i.pravatar.cc/32?img=77", stars: 5, text: "Closed two enterprise deals directly from leads I got after following her advice." },
    ]
  },
  {
    id: 5,
    name: "Tyler Brooks",
    handle: "@tylerbrooksx",
    avatar: "https://i.pravatar.cc/80?img=7",
    platforms: ["Twitter", "Monetization"],
    bio: "Built and monetized a 900K Twitter/X following from zero. Runs paid newsletters, cohort courses, and brand sponsorships generating $40K/month.",
    followers: "900K on Twitter/X",
    rating: 4.7,
    reviews: 211,
    price15: 40,
    price30: 75,
    price60: 140,
    specialties: ["Twitter/X", "Newsletter", "Creator Business"],
    reviewList: [
      { name: "Chris M.", avatar: "https://i.pravatar.cc/32?img=88", stars: 5, text: "Tyler's thread strategy got me 3K followers in my first week of implementing it." },
      { name: "Anna D.", avatar: "https://i.pravatar.cc/32?img=12", stars: 4, text: "Great monetization advice. Launched my newsletter and hit 1K paid subs in 60 days." },
    ]
  },
  {
    id: 6,
    name: "Priya Sharma",
    handle: "@priyasharma",
    avatar: "https://i.pravatar.cc/80?img=16",
    platforms: ["Instagram", "Monetization"],
    bio: "Full-time content creator & brand deal negotiator. Secured $2M+ in brand partnerships. Expert on rate negotiation, media kits, and UGC.",
    followers: "620K on Instagram",
    rating: 4.9,
    reviews: 167,
    price15: 50,
    price30: 90,
    price60: 170,
    specialties: ["Brand Deals", "UGC", "Rate Negotiation"],
    reviewList: [
      { name: "Sofia L.", avatar: "https://i.pravatar.cc/32?img=18", stars: 5, text: "Priya taught me how to price my brand deals. My rates went up 3x immediately." },
      { name: "Kai T.", avatar: "https://i.pravatar.cc/32?img=19", stars: 5, text: "The media kit template she shared alone was worth 10x the cost of the call." },
    ]
  },
  {
    id: 7,
    name: "Marcus Rivera",
    handle: "@marcusrivy",
    avatar: "https://i.pravatar.cc/80?img=13",
    platforms: ["TikTok", "YouTube"],
    bio: "Short-form video specialist. Grew multiple brand accounts to 500K+ on TikTok. Expert in hooks, pacing, trending audio, and B-roll strategy.",
    followers: "1.6M on TikTok",
    rating: 4.8,
    reviews: 203,
    price15: 42,
    price30: 80,
    price60: 150,
    specialties: ["TikTok", "Video Editing", "Hooks"],
    reviewList: [
      { name: "Ben K.", avatar: "https://i.pravatar.cc/32?img=24", stars: 5, text: "Marcus rewrote my hooks and my average view duration went from 8% to 62%." },
      { name: "Zoe P.", avatar: "https://i.pravatar.cc/32?img=25", stars: 5, text: "Best investment I've made in my creator career. Extremely practical advice." },
    ]
  },
  {
    id: 8,
    name: "Nadia Laurent",
    handle: "@nadialaurent",
    avatar: "https://i.pravatar.cc/80?img=47",
    platforms: ["Instagram", "YouTube"],
    bio: "Ex-Google UX designer turned full-time creator. Specializes in content systems, batch filming, and building sustainable creator workflows.",
    followers: "340K on YouTube",
    rating: 5.0,
    reviews: 74,
    price15: 38,
    price30: 70,
    price60: 130,
    specialties: ["YouTube", "Content Systems", "Productivity"],
    reviewList: [
      { name: "Hana M.", avatar: "https://i.pravatar.cc/32?img=26", stars: 5, text: "Nadia helped me go from posting once a month to posting 3x a week consistently." },
      { name: "Tom R.", avatar: "https://i.pravatar.cc/32?img=27", stars: 5, text: "Her batch filming system is incredible. I produce a month of content in 2 days." },
    ]
  },
  {
    id: 9,
    name: "Darius Kim",
    handle: "@dariuskimtech",
    avatar: "https://i.pravatar.cc/80?img=52",
    platforms: ["LinkedIn", "Twitter"],
    bio: "Tech founder turned creator. 200K+ on LinkedIn and 150K on X. Helps engineers and founders turn their expertise into audience and consulting revenue.",
    followers: "200K on LinkedIn",
    rating: 4.8,
    reviews: 92,
    price15: 60,
    price30: 110,
    price60: 200,
    specialties: ["LinkedIn", "Twitter/X", "Tech Creators"],
    reviewList: [
      { name: "Dev S.", avatar: "https://i.pravatar.cc/32?img=28", stars: 5, text: "Darius is the real deal. He helped me get 50K LinkedIn followers in 4 months." },
      { name: "Anu W.", avatar: "https://i.pravatar.cc/32?img=29", stars: 4, text: "Great framework for building credibility as a technical creator." },
    ]
  }
];

// ---- State ----
let currentFilter = "all";
let visibleCount = 6;
let selectedExpert = null;
let selectedDuration = null;
let selectedDate = null;
let selectedTime = null;
let currentBookingStep = 1;
let calendarMonth = new Date().getMonth();
let calendarYear = new Date().getFullYear();

// ---- Init ----
document.addEventListener("DOMContentLoaded", () => {
  renderExperts();
  setupNavScroll();
  setupFilterBtns();
  setupHamburger();
  setupModalClose();
  generateCalendar();
});

// =============================================
// EXPERTS RENDER
// =============================================
function renderExperts() {
  const grid = document.getElementById("expertsGrid");
  grid.innerHTML = "";

  const filtered = currentFilter === "all"
    ? EXPERTS
    : EXPERTS.filter(e => e.platforms.some(p => p.toLowerCase() === currentFilter.toLowerCase()));

  const toShow = filtered.slice(0, visibleCount);

  if (toShow.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:48px;color:var(--text-muted)">No experts found for this category yet. Try another filter.</div>`;
    return;
  }

  toShow.forEach((expert, i) => {
    const card = document.createElement("div");
    card.className = "expert-card animate-in";
    card.style.animationDelay = `${i * 0.07}s`;
    card.innerHTML = buildExpertCard(expert);
    grid.appendChild(card);
  });

  // Hide load more if all shown
  const loadMoreBtn = document.querySelector(".load-more-wrap button");
  if (loadMoreBtn) {
    loadMoreBtn.style.display = filtered.length <= visibleCount ? "none" : "block";
  }
}

function buildExpertCard(expert) {
  const platformBadges = expert.platforms.map(p => `<span class="platform-badge">${getPlatformEmoji(p)} ${p}</span>`).join("");
  return `
    <div class="expert-card-top" onclick="openProfile(${expert.id})">
      <div class="expert-avatar-wrap">
        <img src="${expert.avatar}" alt="${expert.name}" class="expert-avatar" loading="lazy" />
        <div class="expert-verified">✓</div>
      </div>
      <div class="expert-info">
        <div class="expert-name">${expert.name}</div>
        <div class="expert-handle">${expert.handle}</div>
        <div class="expert-rating">
          <span>⭐</span> ${expert.rating} <span style="color:var(--text-dim)">(${expert.reviews} reviews)</span>
        </div>
      </div>
    </div>
    <div class="expert-card-platforms">${platformBadges}</div>
    <div class="expert-card-bio">${expert.bio}</div>
    <div class="expert-card-footer">
      <div class="expert-price">from $${expert.price15}<span>/15min</span></div>
      <button class="btn-primary" onclick="event.stopPropagation(); openBooking(${expert.id})">Book Now</button>
    </div>
  `;
}

function getPlatformEmoji(platform) {
  const map = { Instagram: "📸", TikTok: "🎵", YouTube: "▶️", LinkedIn: "💼", Twitter: "🐦", Monetization: "💰" };
  return map[platform] || "🌐";
}

// =============================================
// FILTERS
// =============================================
function setupFilterBtns() {
  const btns = document.querySelectorAll(".filter-btn");
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      visibleCount = 6;
      renderExperts();
    });
  });
}

function filterByTag(tag) {
  currentFilter = tag;
  visibleCount = 6;
  const btns = document.querySelectorAll(".filter-btn");
  btns.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter.toLowerCase() === tag.toLowerCase() || (btn.dataset.filter === "all" && false));
  });
  renderExperts();
  scrollToExperts();
}

function loadMoreExperts() {
  visibleCount += 3;
  renderExperts();
}

// =============================================
// SEARCH
// =============================================
function handleSearch() {
  const query = document.getElementById("heroSearch").value.toLowerCase().trim();
  if (!query) { scrollToExperts(); return; }
  currentFilter = "all";
  visibleCount = EXPERTS.length;
  const grid = document.getElementById("expertsGrid");
  grid.innerHTML = "";
  const results = EXPERTS.filter(e =>
    e.name.toLowerCase().includes(query) ||
    e.bio.toLowerCase().includes(query) ||
    e.platforms.some(p => p.toLowerCase().includes(query)) ||
    e.specialties.some(s => s.toLowerCase().includes(query))
  );
  if (results.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:48px;color:var(--text-muted)">No experts found for "<strong>${query}</strong>".</div>`;
  } else {
    results.forEach((expert, i) => {
      const card = document.createElement("div");
      card.className = "expert-card animate-in";
      card.style.animationDelay = `${i * 0.07}s`;
      card.innerHTML = buildExpertCard(expert);
      grid.appendChild(card);
    });
  }
  scrollToExperts();
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("heroSearch");
  if (input) {
    input.addEventListener("keydown", e => { if (e.key === "Enter") handleSearch(); });
  }
});

// =============================================
// PROFILE MODAL
// =============================================
function openProfile(id) {
  const expert = EXPERTS.find(e => e.id === id);
  if (!expert) return;
  selectedExpert = expert;

  const reviews = expert.reviewList.map(r => `
    <div class="review-item">
      <div class="review-header">
        <img src="${r.avatar}" alt="${r.name}" class="review-avatar" />
        <div>
          <div class="review-name">${r.name}</div>
          <div class="review-stars">${"⭐".repeat(r.stars)}</div>
        </div>
      </div>
      <div class="review-text">${r.text}</div>
    </div>
  `).join("");

  const specialtyBadges = expert.specialties.map(s => `<span class="profile-badge">${s}</span>`).join("");
  const platformBadges = expert.platforms.map(p => `<span class="profile-badge">${getPlatformEmoji(p)} ${p}</span>`).join("");

  document.getElementById("profileContent").innerHTML = `
    <div class="profile-cover"></div>
    <img src="${expert.avatar}" alt="${expert.name}" class="profile-avatar-large" />
    <div class="profile-body">
      <div class="profile-name">${expert.name}</div>
      <div class="profile-handle">${expert.handle} · ${expert.followers}</div>
      <div class="profile-badges">${platformBadges}${specialtyBadges}</div>
      <div class="profile-bio">${expert.bio}</div>
      <div class="profile-stats">
        <div class="profile-stat"><strong>⭐ ${expert.rating}</strong><span>Rating</span></div>
        <div class="profile-stat"><strong>${expert.reviews}</strong><span>Reviews</span></div>
        <div class="profile-stat"><strong>$${expert.price15}+</strong><span>Starting price</span></div>
      </div>
      <div class="profile-reviews">
        <h4>Recent Reviews</h4>
        ${reviews}
      </div>
    </div>
    <div class="profile-book-bar">
      <div class="profile-book-price">
        <strong>from $${expert.price15}</strong>
        <span>per 15-min session</span>
      </div>
      <button class="btn-primary" onclick="closeModal('profileModal'); openBooking(${expert.id})">Book a Session</button>
    </div>
  `;

  openModal("profileModal");
}

// =============================================
// BOOKING MODAL
// =============================================
function openBooking(id) {
  const expert = EXPERTS.find(e => e.id === id);
  if (!expert) return;
  selectedExpert = expert;
  selectedDuration = null;
  selectedDate = null;
  selectedTime = null;
  currentBookingStep = 1;

  // Reset steps
  document.querySelectorAll(".booking-step").forEach(s => s.classList.remove("active"));
  document.getElementById("step1").classList.add("active");

  // Update prices
  document.getElementById("price15").textContent = `$${expert.price15}`;
  document.getElementById("price30").textContent = `$${expert.price30}`;
  document.getElementById("price60").textContent = `$${expert.price60}`;

  // Clear duration selection
  document.querySelectorAll(".duration-option").forEach(o => o.classList.remove("selected"));

  // Header
  document.getElementById("bookingHeader").innerHTML = `
    <img src="${expert.avatar}" alt="${expert.name}" />
    <div class="booking-header-info">
      <h4>${expert.name}</h4>
      <span>${expert.handle} · ⭐ ${expert.rating} (${expert.reviews} reviews)</span>
    </div>
  `;

  generateCalendar();
  openModal("bookingModal");
}

function selectDuration(mins, el) {
  selectedDuration = mins;
  document.querySelectorAll(".duration-option").forEach(o => o.classList.remove("selected"));
  el.classList.add("selected");
}

function nextBookingStep() {
  if (currentBookingStep === 1) {
    if (!selectedDuration) {
      // Auto-select 30min
      const opts = document.querySelectorAll(".duration-option");
      selectDuration(30, opts[1]);
    }
  }
  if (currentBookingStep === 2) {
    if (!selectedDate || !selectedTime) return;
    buildBookingSummary();
  }
  currentBookingStep++;
  showBookingStep(currentBookingStep);
}

function prevBookingStep() {
  currentBookingStep--;
  showBookingStep(currentBookingStep);
}

function showBookingStep(n) {
  document.querySelectorAll(".booking-step").forEach((s, i) => {
    s.classList.toggle("active", i + 1 === n);
  });
}

// =============================================
// CALENDAR
// =============================================
function generateCalendar() {
  const container = document.getElementById("calendarMini");
  if (!container) return;

  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const days = ["Su","Mo","Tu","We","Th","Fr","Sa"];

  const firstDay = new Date(calendarYear, calendarMonth, 1).getDay();
  const daysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();
  const today = new Date();

  let html = `
    <div class="calendar-header">
      <button class="cal-nav" onclick="changeMonth(-1)">‹</button>
      <span>${months[calendarMonth]} ${calendarYear}</span>
      <button class="cal-nav" onclick="changeMonth(1)">›</button>
    </div>
    <div class="cal-days-labels">${days.map(d => `<div class="cal-day-label">${d}</div>`).join("")}</div>
    <div class="cal-days">
  `;

  for (let i = 0; i < firstDay; i++) html += `<div class="cal-day empty"></div>`;
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(calendarYear, calendarMonth, d);
    const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const isToday = date.toDateString() === today.toDateString();
    const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
    let cls = "cal-day";
    if (isPast) cls += " past";
    if (isToday) cls += " today";
    if (isSelected) cls += " selected";
    html += `<div class="${cls}" onclick="selectDate(${d})">${d}</div>`;
  }
  html += `</div>`;
  container.innerHTML = html;
}

function changeMonth(dir) {
  calendarMonth += dir;
  if (calendarMonth > 11) { calendarMonth = 0; calendarYear++; }
  if (calendarMonth < 0) { calendarMonth = 11; calendarYear--; }
  generateCalendar();
}

function selectDate(day) {
  selectedDate = new Date(calendarYear, calendarMonth, day);
  selectedTime = null;
  generateCalendar();
  generateTimeSlots();

  const btn = document.getElementById("confirmTimeBtn");
  if (btn) { btn.textContent = "Select a Time"; btn.disabled = true; }
}

function generateTimeSlots() {
  const container = document.getElementById("timeSlots");
  if (!container) return;
  const times = ["9:00 AM","9:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","1:00 PM","1:30 PM","2:00 PM","2:30 PM","3:00 PM","4:00 PM","4:30 PM"];
  // Randomly remove a few to simulate unavailability
  const available = times.filter(() => Math.random() > 0.25);
  container.innerHTML = available.map(t => `
    <div class="time-slot" onclick="selectTime('${t}', this)">${t}</div>
  `).join("");
}

function selectTime(time, el) {
  selectedTime = time;
  document.querySelectorAll(".time-slot").forEach(s => s.classList.remove("selected"));
  el.classList.add("selected");
  const btn = document.getElementById("confirmTimeBtn");
  if (btn) { btn.textContent = "Continue → Confirm"; btn.disabled = false; }
}

// =============================================
// BOOKING SUMMARY & CONFIRM
// =============================================
function buildBookingSummary() {
  if (!selectedExpert) return;
  const price = selectedDuration === 15 ? selectedExpert.price15 : selectedDuration === 30 ? selectedExpert.price30 : selectedExpert.price60;
  const fee = Math.round(price * 0.05);
  const dateStr = selectedDate ? selectedDate.toLocaleDateString("en-US", { weekday: "short", month: "long", day: "numeric" }) : "";

  document.getElementById("bookingSummary").innerHTML = `
    <div class="booking-summary-row"><span>Expert</span><span>${selectedExpert.name}</span></div>
    <div class="booking-summary-row"><span>Session</span><span>${selectedDuration} minutes</span></div>
    <div class="booking-summary-row"><span>Date</span><span>${dateStr}</span></div>
    <div class="booking-summary-row"><span>Time</span><span>${selectedTime}</span></div>
    <div class="booking-summary-row"><span>Session fee</span><span>$${price}</span></div>
    <div class="booking-summary-row"><span>Platform fee</span><span>$${fee}</span></div>
    <div class="booking-summary-row"><span>Total</span><span>$${price + fee}</span></div>
  `;

  const btn = document.getElementById("payBtnText");
  if (btn) btn.textContent = `Confirm & Pay $${price + fee}`;
}

function confirmBooking() {
  const btn = document.getElementById("payBtnText");
  if (btn) {
    btn.textContent = "Processing…";
    const parent = btn.closest("button");
    if (parent) parent.disabled = true;
  }

  setTimeout(() => {
    const dateStr = selectedDate ? selectedDate.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }) : "";
    document.getElementById("successDetails").innerHTML = `
      <div style="margin-bottom:8px">📅 ${dateStr} at ${selectedTime}</div>
      <div style="margin-bottom:8px">👤 ${selectedExpert ? selectedExpert.name : "Expert"}</div>
      <div>📧 Calendar invite sent to your email</div>
    `;
    currentBookingStep = 4;
    showBookingStep(4);
  }, 1800);
}

// =============================================
// MODALS
// =============================================
function openModal(id) {
  const overlay = document.getElementById(id);
  if (overlay) overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  const overlay = document.getElementById(id);
  if (overlay) overlay.classList.remove("active");
  document.body.style.overflow = "";
}

function switchModal(closeId, openId) {
  closeModal(closeId);
  setTimeout(() => openModal(openId), 200);
}

function setupModalClose() {
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", e => {
      if (e.target === overlay) closeModal(overlay.id);
    });
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.active").forEach(o => closeModal(o.id));
    }
  });
}

// =============================================
// NAVBAR SCROLL
// =============================================
function setupNavScroll() {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  });
}

// =============================================
// HAMBURGER
// =============================================
function setupHamburger() {
  const btn = document.getElementById("hamburger");
  const links = document.getElementById("navLinks");
  if (!btn || !links) return;
  btn.addEventListener("click", () => {
    links.classList.toggle("mobile-open");
  });
  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => links.classList.remove("mobile-open"));
  });
}

// =============================================
// UTILS
// =============================================
function scrollToExperts() {
  const section = document.getElementById("experts");
  if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
}

// =============================================
// SCROLL ANIMATIONS (Intersection Observer)
// =============================================
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".step-card, .category-card, .testimonial-card, .pricing-card").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(el);
  });
});
