import Inputmask from 'inputmask';

const btnSendFormFooter = document.querySelector('.js-send-form-footer');
const btnSendFormFeedback = document.querySelector('.js-send-form-feedback');
const formFooter = document.querySelector('.footer__form');
const formFeedback = document.querySelector('.feedback__form');
const thanks = document.querySelector('.thanks');
const btnThanksBack = document.querySelector('.js-thanks__btn');
const phone = document.querySelectorAll('.phone-input');
const html = document.querySelector('html');
const body = document.querySelector('body');

Inputmask({
  mask: '+375 (XY) 999-99-99',
  definitions: {
    X: {
      validator: '2|3|4',
      placeholder: '_',
    },
    Y: {
      validator: '3|5|9|4',
      placeholder: '_',
    },
  },
}).mask(phone);

const regTel = /\+\d{3} \((25|29|33|44)\) \d{3}-\d{2}-\d{2}/;

btnSendFormFooter.addEventListener('click', e => {
  // e.preventDefault();

  let error = 0;
  const inputName = document.querySelector('.footer__form input[name=name]');
  const inputTel = document.querySelector('.footer__form input[name=tel]');
  console.log('inputName ', inputName.value);
  console.log('inputTel ', inputTel.value);

  if (inputName.value == '') {
    error++;
    inputName.style.border = '1px solid #ff0000';
  } else {
    inputName.style.border = 'none';
    inputName.style.borderBottom = '1px solid #ce0476';
  }

  if (regTel.exec(inputTel.value) == null) {
    error++;
    inputTel.style.border = '1px solid #ff0000';
  } else {
    inputTel.style.border = 'none';
    inputTel.style.borderBottom = '1px solid #ce0476';
  }

  if (error > 0) {
    return false;
  }

  btnSendFormFooter.disabled = true;
  let formData = new FormData(formFooter);

  const xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      console.log('send footer');
      thanks.classList.toggle('active');
      html.classList.toggle('overflow-hidden');
      body.classList.toggle('overflow-hidden');
    }
  };
  xmlHttp.open('POST', './send/send-base.php');
  xmlHttp.send(formData);
});

btnSendFormFeedback.addEventListener('click', e => {
  // e.preventDefault();

  let error = 0;
  const inputName = document.querySelector('.feedback__form input[name=name]');
  const inputTel = document.querySelector('.feedback__form input[name=tel]');
  console.log('inputName ', inputName.value);
  console.log('inputTel ', inputTel.value);

  if (inputName.value == '') {
    error++;
    inputName.style.border = '1px solid #ff0000';
  } else {
    inputName.style.border = 'none';
    inputName.style.borderBottom = '1px solid #ce0476';
  }

  if (regTel.exec(inputTel.value) == null) {
    error++;
    inputTel.style.border = '1px solid #ff0000';
  } else {
    inputTel.style.border = 'none';
    inputTel.style.borderBottom = '1px solid #ce0476';
  }

  if (error > 0) {
    return false;
  }

  btnSendFormFeedback.disabled = true;
  let formData = new FormData(formFeedback);

  const xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      console.log('send feedback');
      document.querySelector('.feedback').classList.toggle('active');
      thanks.classList.toggle('active');
      // html.classList.toggle('overflow-hidden');
      // body.classList.toggle('overflow-hidden');
    }
  };
  xmlHttp.open('POST', './send/send-base.php');
  xmlHttp.send(formData);
});

// ---------- show thanks start ----------
btnThanksBack.addEventListener('click', () => {
  thanks.classList.toggle('active');
  html.classList.toggle('overflow-hidden');
  body.classList.toggle('overflow-hidden');
});
// ---------- show thanks end ----------

// test
// btnSendFormFooter.addEventListener('click', e => {
//   // e.preventDefault();
//   btnSendFormFooter.disabled = true;

//   let formData = new FormData(formFooter);

//   for (key of formData.keys()) {
//     console.log(`${key}: ${formData.get(key)}`);
//   }

//   if (formData) {
//     console.log('send yes footer');
//     thanks.classList.toggle('active');
//     html.classList.toggle('overflow-hidden');
//     body.classList.toggle('overflow-hidden');
//   } else {
//     console.log('send no footer');
//   }
// });

// btnSendFormFeedback.addEventListener('click', e => {
//   // e.preventDefault();
//   btnSendFormFeedback.disabled = true;

//   let formData = new FormData(formFeedback);

//   for (key of formData.keys()) {
//     console.log(`${key}: ${formData.get(key)}`);
//   }

//   if (formData) {
//     console.log('send yes feedb');
//     document.querySelector('.feedback').classList.toggle('active');
//     thanks.classList.toggle('active');
//     // html.classList.toggle('overflow-hidden');
//     // body.classList.toggle('overflow-hidden');
//   } else {
//     console.log('send no feedb');
//   }
// });

// // ---------- show thanks start ----------
// btnThanksBack.addEventListener('click', () => {
//   thanks.classList.toggle('active');
//   html.classList.toggle('overflow-hidden');
//   body.classList.toggle('overflow-hidden');
// });
// // ---------- show thanks end ----------

// for (key of formData.keys()) {
//   console.log(`${key}: ${formData.get(key)}`);
// }

// fetch('./send/send-base.php', {
//   method: 'POST',
//   // body: new FormData(formData),
//   body: formData,
// })
//   .then(function(result) {
//     console.log('result postMusic', result);
//     return result;
//   })
//   .then(function(response) {
//     console.log('response postMusic', response);
//   });
