const glass = document.getElementById("glass");

document.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  const { left, top, width, height } = glass.getBoundingClientRect();

  // Mouse pozisyonu (Glow için)
  const x = ((clientX - left) / width) * 100;
  const y = ((clientY - top) / height) * 100;

  glass.style.setProperty("--mouse-x", `${x}%`);
  glass.style.setProperty("--mouse-y", `${y}%`);

  // 3D Tilt (Eğilme)
  const rotateX = (height / 2 - (clientY - top)) / 15;
  const rotateY = (clientX - left - width / 2) / 15;

  glass.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Resetleme
document.addEventListener("mouseleave", () => {
  glass.style.transform = "rotateX(0deg) rotateY(0deg)";
  glass.style.transition = "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
});

glass.addEventListener("mouseenter", () => {
  glass.style.transition = "none";
});
