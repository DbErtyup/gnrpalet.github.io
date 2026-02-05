const panel = document.getElementById("main-panel");

panel.addEventListener("mousemove", (e) => {
  const rect = panel.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  panel.style.setProperty("--x", `${x}px`);
  panel.style.setProperty("--y", `${y}px`);
});

panel.addEventListener("mouseleave", () => {
  panel.style.setProperty("--x", "-100%");
  panel.style.setProperty("--y", "-100%");
});
