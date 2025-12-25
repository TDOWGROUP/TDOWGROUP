// =========================
// Year
// =========================
document.getElementById("year").textContent = new Date().getFullYear();

// =========================
// Mobile menu
// =========================
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

// Close menu after click (mobile)
nav.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => nav.classList.remove("open"));
});

// =========================
// Carousel buttons
// =========================
const track = document.getElementById("track");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

if (track && prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => {
    track.scrollBy({ left: -380, behavior: "smooth" });
  });
  nextBtn.addEventListener("click", () => {
    track.scrollBy({ left: 380, behavior: "smooth" });
  });
}

// =========================
// Reveal on scroll
// =========================
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("in");
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// =========================
// Demo contact form
// =========================
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

if (form && note) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = new FormData(form).get("name");
    note.textContent = `Thanks, ${name}! (Demo only — no backend yet.)`;
    form.reset();
  });
}

// =========================
// THEME SWITCH
// Dark (Hero) → Light (from #about onwards)
// =========================
(function () {
  const root = document.documentElement;
  const about = document.getElementById("about");
  const hero = document.querySelector(".hero");

  if (!about || !hero) return;

  // Default theme
  root.setAttribute("data-theme", "dark");

  // Switch to light when About enters viewport
  const themeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          root.setAttribute("data-theme", "light");
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "-20% 0px -60% 0px"
    }
  );

  themeObserver.observe(about);

  // Switch back to dark ONLY when near hero
  window.addEventListener("scroll", () => {
    const heroBottom = hero.getBoundingClientRect().bottom;
    if (heroBottom > window.innerHeight * 0.6) {
      root.setAttribute("data-theme", "dark");
    }
  });
})();
