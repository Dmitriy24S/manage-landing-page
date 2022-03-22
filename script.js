const navToggle = document.querySelector(".nav-toggle-btn");
const menu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
  navToggle.classList.toggle("active");
});
