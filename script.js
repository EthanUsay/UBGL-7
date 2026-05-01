// main.js
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".card-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const url = btn.getAttribute("data-url");
      if (!url) return;

      // Simple behavior: open in a new tab
      window.open(url, "_blank", "noopener,noreferrer");
    });
  });
});
