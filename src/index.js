// import * as $ from 'jquery';

import './js/swiper';
import "./js/smooth-scroll-menu";

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

const menu = document.querySelector('.menu');
const menuBtn = document.querySelectorAll('.js-burger-toggle');
const menuLink = document.querySelectorAll('.js-menu-link');
const feedback = document.querySelector('.feedback');
const btnFeedback = document.querySelectorAll('.js-feedback-toggle');
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
