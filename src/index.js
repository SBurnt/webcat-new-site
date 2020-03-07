import * as $ from 'jquery';
import './styles/main.scss';

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
const body = document.querySelector('body');

// ---------- show mobile menu start ----------
menuBtn.forEach(items => {
  items.addEventListener('click', item => {
    menu.classList.toggle('active');
    // menuBtnСhangeIcon.classList.toggle('active');
    body.classList.toggle('overflow-hidden');
  });
});

menuLink.forEach(items => {
  items.addEventListener('click', item => {
    menu.classList.toggle('active');
    body.classList.toggle('overflow-hidden');
  });
});
// ---------- show mobile menu end ----------

// ---------- show feedback start ----------
btnFeedback.forEach(items => {
  items.addEventListener('click', item => {
    feedback.classList.toggle('active');
    body.classList.toggle('overflow-hidden');
  });
});
// ---------- show feedback end ----------
