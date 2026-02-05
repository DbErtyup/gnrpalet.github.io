const panel = document.getElementById("main-panel");

panel.addEventListener("mousemove", (e) => {
  // Panelin ekran üzerindeki konumunu al
  const rect = panel.getBoundingClientRect();

  // Mouse koordinatlarını panelin içine göre hesapla
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Koordinatları CSS değişkeni olarak gönder
  panel.style.setProperty("--x", `${x}px`);
  panel.style.setProperty("--y", `${y}px`);
});

// Fare panelden çıkınca parlamayı gizle
panel.addEventListener("mouseleave", () => {
  panel.style.setProperty("--x", "-100%");
  panel.style.setProperty("--y", "-100%");
});
