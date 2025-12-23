// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
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

// Carousel buttons
const track = document.getElementById("track");
document.getElementById("prevBtn").addEventListener("click", () => {
  track.scrollBy({ left: -380, behavior: "smooth" });
});
document.getElementById("nextBtn").addEventListener("click", () => {
  track.scrollBy({ left: 380, behavior: "smooth" });
});

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("in");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// Demo form
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = new FormData(form).get("name");
  note.textContent = `Thanks, ${name}! (Demo only — no backend yet.)`;
  form.reset();
});
