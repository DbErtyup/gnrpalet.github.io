const panel = document.getElementById("main-panel");
const glow = document.querySelector(".mouse-glow");
const isMobile = window.matchMedia("(max-width: 768px)").matches;

panel.addEventListener("mousemove", (e) => {
  const rect = panel.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  panel.style.setProperty("--x", `${x}px`);
  panel.style.setProperty("--y", `${y}px`);
});

panel.addEventListener("mouseenter", () => {
  glow.style.transition = "opacity 0.4s ease, transform 0.4s ease-out";

  setTimeout(() => {
    glow.style.transition = "opacity 0.4s ease";
  }, 400);
});

if (!isMobile) {
  panel.addEventListener("mousemove", (e) => {
    const rect = panel.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    panel.style.setProperty("--x", `${x}px`);
    panel.style.setProperty("--y", `${y}px`);
  });
} else {
  document.querySelector(".mouse-glow").style.display = "none";
}
