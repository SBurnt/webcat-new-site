// import Swiper from 'swiper';
import Swiper from '../../node_modules/swiper/js/swiper';
import '../../node_modules/swiper/css/swiper.min.css';
// var Swiper = require('../../node_modules/swiper/js/swiper.js');

var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1.1,
  spaceBetween: 5,
  // freeMode: true,
  // loop: true,
  // centeredSlides: true,
  slidesPerGroup: 1,
  clickable: true,
  type: 'progressbar',
  // effect: 'coverflow',
  // coverflowEffect: {
  //   rotate: 50,
  //   stretch: 0,
  //   depth: 100,
  //   modifier: 1,
  //   slideShadows : true,
  // },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
    // stopOnLastSlide: true,
    // reverseDirection: true,
  },
  breakpoints: {
    // when window width is >= 375px
    375: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2.0,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    // hide: true,
  },

  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  //   type: 'progressbar',
  // },
});
