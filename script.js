const navToggle = document.querySelector(".nav-toggle-btn");
const menu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
  navToggle.classList.toggle("active");
});

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
