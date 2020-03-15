const btnSendFormFooter = document.querySelector('.js-send-form-footer');
const btnSendFormFeedback = document.querySelector('.js-send-form-feedback');
const formFooter = document.querySelector('.footer__form');
const formFeedback = document.querySelector('.feedback__form');
const thanks = document.querySelector('.thanks');
const btnThanksBack = document.querySelector('.js-thanks__btn');
const html = document.querySelector('html');
const body = document.querySelector('body');

btnSendFormFooter.addEventListener('click', e => {
  // e.preventDefault();
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
