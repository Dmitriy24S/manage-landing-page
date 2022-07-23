// Navigation menu
const navToggle = document.querySelector(".nav-toggle-btn");
const menu = document.querySelector(".nav-menu-container");
const navMobileOverlay = document.querySelector(".nav-menu-mobile-overlay ");

navToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
  navToggle.classList.toggle("active");
});

// Close mobile nav menu when click on overlay/backdrop
navMobileOverlay.addEventListener("click", () => {
  menu.classList.toggle("show");
  navToggle.classList.toggle("active");
});

// Swiper carousel slider
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  loopFillGroupWithBlank: true,
  breakpoints: {
    // when window width is >= 640px
    320: {
      width: 314,
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    // when window width is >= 768px
    768: {
      width: 640,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    // when window width is >= 1078px
    1024: {
      width: 950,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Input form email validation error message
const form = document.querySelector(".email-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailInputValue = e.target[0].value;

  if (!validateEmail(emailInputValue)) {
    form.classList.add("input-error");
  } else {
    form.classList.remove("input-error");
  }
});

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
