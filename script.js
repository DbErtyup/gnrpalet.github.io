const panel = document.getElementById("main-panel");
const glow = document.querySelector(".mouse-glow");

panel.addEventListener("mousemove", (e) => {
  const rect = panel.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Koordinatları set ediyoruz
  panel.style.setProperty("--x", `${x}px`);
  panel.style.setProperty("--y", `${y}px`);
});

// Fare içeri girdiğinde bir anlık yumuşama ekleyip sonra kaldırmak için:
panel.addEventListener("mouseenter", () => {
  glow.style.transition = "opacity 0.4s ease, transform 0.4s ease-out";
  // Kısa bir süre sonra takibi anlık (real-time) yapması için transition'ı azaltıyoruz
  setTimeout(() => {
    glow.style.transition = "opacity 0.4s ease";
  }, 400);
});
