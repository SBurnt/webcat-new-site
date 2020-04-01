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
const confidentiality = document.querySelector('.confidentiality');
const btnConfidentiality = document.querySelectorAll('.js-confidentiality-toggle');
// const html = document.querySelector('html');
const body = document.querySelector('body');

// ---------- show mobile menu start ----------
menuBtn.forEach(items => {
  items.addEventListener('click', () => {
    menu.classList.toggle('active');
    // html.classList.toggle('overflow-hidden');
    body.classList.toggle('overflow-hidden');
  });
});

menuLink.forEach(items => {
  items.addEventListener('click', () => {
    menu.classList.toggle('active');
    // html.classList.toggle('overflow-hidden');
    body.classList.toggle('overflow-hidden');
  });
});
// ---------- show mobile menu end ----------

// ---------- show feedback start ----------
btnFeedback.forEach(items => {
  items.addEventListener('click', () => {
    feedback.classList.toggle('active');
    // html.classList.toggle('overflow-hidden');
    body.classList.toggle('overflow-hidden');
  });
});
// ---------- show feedback end ----------

// ---------- show confidentiality start ----------
btnConfidentiality.forEach(items => {
  items.addEventListener('click', () => {
    confidentiality.classList.toggle('active');
    // html.classList.toggle('overflow-hidden');
    body.classList.toggle('overflow-hidden');
  });
});
// ---------- show confidentiality end ----------
