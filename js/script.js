// inizializzazioni variabili del DOM
const formElement = document.getElementById('form-preventivo');

// elementi del form
const nameInputElement = document.getElementById('name');
const surnameInputElement = document.getElementById('surname')
const emailInputElement = document.getElementById('email');
const workTypeInputElement = document.getElementById('work-type');
const promoCodeInputElement = document.getElementById('promo-code');
const privacyPolicyInputElement = document.getElementById('privacy-policy');

// elementi prezzo finale preventivo
const finalPriceContainer = document.getElementById('final-price-container');
const unityElement = document.getElementById('unity');
const digitsElement = document.getElementById('digits');

// array di codici promozionali
const promoCodes = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24']

// prezzo orario dei servizi
const backendPrice = 20.50;
const frontendPrice = 15.30;
const analysisPrice = 33.60;

// verifica promo code
function isPromoCodeValid(code) {
  return promoCodes.includes(code);
}


// evento submit del form = 
formElement.addEventListener('submit', function (event) {
  // previene compartamento di default del submit form
  event.preventDefault();

  const promoCode = promoCodeInputElement.value;
  console.log(promoCode)
  // pulizia classi di validazione
  promoCodeInputElement.classList.remove('is-invalid', 'is-valid')

  if (isPromoCodeValid(promoCode)) {
    promoCodeInputElement.classList.add('is-valid')
  } else {
    promoCodeInputElement.classList.add('is-invalid')
  }

  // calcolo prezzo preventivo
  let hoursWork = 10;
  let workType = workTypeInputElement.value;
  let pricePreventive;

  switch (workType) {
    case ('backend'):
      pricePreventive = backendPrice * hoursWork;
      break;
    case ('frontend'):
      pricePreventive = frontendPrice * hoursWork;
      break
    case ('analysis'):
      pricePreventive = analysisPrice * hoursWork;
      break;
  }

  // applicazione sconto se valido
  if (isPromoCodeValid(promoCode)) {
    pricePreventive *= 0.75;
  }

});