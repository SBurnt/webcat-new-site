import * as $ from 'jquery';
import Swiper from 'swiper';

import './styles/main.scss';

// Browser compatibility ie11 (forEach)
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function(callback, thisArg) {
    // eslint-disable-next-line no-param-reassign
    thisArg = thisArg || window;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

// одноременный scrollbar в блоке working
$(function() {
  $('.working__list-scrollbar').scroll(function() {
    $('.working__list').scrollLeft($('.working__list-scrollbar').scrollLeft());
  });
  $('.working__list').scroll(function() {
    $('.working__list-scrollbar').scrollLeft($('.working__list').scrollLeft());
  });
});

const menu = document.querySelector('.menu');
const menuBtn = document.querySelectorAll('.js-burger-toggle');
const menuLink = document.querySelectorAll('.js-menu-link');
const feedback = document.querySelector('.feedback');
const btnFeedback = document.querySelectorAll('.js-feedback-toggle');
// const menuBtnСhangeIcon = document.querySelector('.menu .js-burger-toggle');
const html = document.querySelector('html');
const body = document.querySelector('body');

// ---------- show mobile menu start ----------
menuBtn.forEach(items => {
  items.addEventListener('click', item => {
    menu.classList.toggle('active');
    html.classList.toggle('overflow-hidden');
    body.classList.toggle('overflow-hidden');
  });
});

menuLink.forEach(items => {
  items.addEventListener('click', item => {
    menu.classList.toggle('active');
    html.classList.toggle('overflow-hidden');
    body.classList.toggle('overflow-hidden');
  });
});
// ---------- show mobile menu end ----------

// ---------- show feedback start ----------
btnFeedback.forEach(items => {
  items.addEventListener('click', item => {
    feedback.classList.toggle('active');
    html.classList.toggle('overflow-hidden');
    body.classList.toggle('overflow-hidden');
  });
});
// ---------- show feedback end ----------

var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  // freeMode: true,
  // loop: true,
  centeredSlides: true,
  clickable: true,
  type: 'progressbar',
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    // when window width is >= 480px
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    // when window width is >= 640px
    1440: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 4.3,
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
