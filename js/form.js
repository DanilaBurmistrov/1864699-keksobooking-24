const formsAttributes = document.querySelector('.ad-form');
const mapsAttributes = document.querySelector('.map__filters');
const Fs =  document.querySelectorAll('fieldset');
const Sd = document.querySelectorAll('select');

const generateStatusOfOptions = function () {
  formsAttributes.classList.add('ad-form--disabled');
  mapsAttributes.classList.add('map__filters--disabled');
  Fs.setAttribute('disabled');
  Sd.setAttribute('disabled');
};

generateStatusOfOptions();

const generateStatusOfWindow = function () {
  formsAttributes.classList.remove('ad-form--disabled');
  mapsAttributes.classList.remove('map__filters--disabled');
  Fs.removeAttribute('disabled');
  Sd.removeAttribute('disabled');
};
generateStatusOfWindow();

