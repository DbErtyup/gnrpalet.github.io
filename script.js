document.addEventListener("DOMContentLoaded", () => {
  const phoneBox = document.getElementById("phoneBox");
  const togglePhone = document.getElementById("togglePhone");

  if (togglePhone) {
    togglePhone.onclick = () => {
      phoneBox.classList.toggle("open");
    };
  }
});
