const card = document.getElementById("card");

const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );

if (!isMobile) {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  });

  card.addEventListener("mouseleave", () => {
    card.style.setProperty("--x", "-100%");
    card.style.setProperty("--y", "-100%");
  });
}
