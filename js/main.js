/* ═══════════════════════════════════════
   CURSOR — SVG 3D arrow follows mouse
═══════════════════════════════════════ */
const cur = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  cur.style.transform = `translate(${e.clientX - 1}px, ${e.clientY - 1}px)`;
});
document.addEventListener("mouseleave", () => cur.classList.add("hidden"));
document.addEventListener("mouseenter", () => cur.classList.remove("hidden"));

document
  .querySelectorAll("a, button, .proj, .stat, .stack-item, .tag")
  .forEach((el) => {
    el.addEventListener("mouseenter", () => cur.classList.add("big"));
    el.addEventListener("mouseleave", () => cur.classList.remove("big"));
  });

/* ═══════════════════════════════════════
   WAVE CANVAS — animated dot grid
═══════════════════════════════════════ */
const wc = document.getElementById("wave-canvas");
const wctx = wc.getContext("2d");
const STEP = 28;
const DOT_R = 1.4;

function resizeWave() {
  wc.width = wc.parentElement.offsetWidth;
  wc.height = wc.parentElement.offsetHeight;
}
resizeWave();
window.addEventListener("resize", resizeWave, { passive: true });

let wt = 0;
function drawWave() {
  wctx.clearRect(0, 0, wc.width, wc.height);
  wt++;

  const cols = Math.ceil(wc.width / STEP) + 1;
  const rows = Math.ceil(wc.height / STEP) + 1;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const x = i * STEP;
      const y = j * STEP;

      // Y displacement — two overlapping sine waves
      const dy =
        Math.sin(i * 0.38 + wt * 0.036) * 5.5 +
        Math.sin(i * 0.18 + j * 0.28 + wt * 0.022) * 3.5;

      // Brightness wave — drives opacity + radius
      const bright =
        (Math.sin(i * 0.32 + wt * 0.034) + 1) * 0.42 +
        (Math.sin(j * 0.22 + i * 0.12 + wt * 0.019) + 1) * 0.14;

      const opacity = 0.04 + bright * 0.24;
      const radius = DOT_R + bright * 0.95;

      wctx.beginPath();
      wctx.arc(x, y + dy, radius, 0, Math.PI * 2);
      wctx.fillStyle = `rgba(168,255,62,${opacity.toFixed(3)})`;
      wctx.fill();
    }
  }
  requestAnimationFrame(drawWave);
}
requestAnimationFrame(drawWave);

/* ═══════════════════════════════════════
   NAV — blur on scroll
═══════════════════════════════════════ */
const nav = document.getElementById("nav");
window.addEventListener(
  "scroll",
  () => {
    nav.classList.toggle("scrolled", scrollY > 40);
  },
  { passive: true },
);

/* ═══════════════════════════════════════
   SCROLL REVEAL — IntersectionObserver
═══════════════════════════════════════ */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("v");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".r").forEach((el) => observer.observe(el));
