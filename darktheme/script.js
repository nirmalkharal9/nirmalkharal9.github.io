document.addEventListener("DOMContentLoaded", function () {
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const body = document.body;
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");

  themeToggleBtn.addEventListener("click", function () {
    body.classList.toggle("dark-theme");
    themeToggleBtn.textContent = body.classList.contains("dark-theme")
      ? "☀️"
      : "🌙";
  });

  mobileMenu.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});
