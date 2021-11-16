import {MAX_APARTMENTS,
  MIN_VISITORS} from './constants.js';
import {sendData} from './fetch.js';
import {resetAdFormLocation} from './map.js';
import {getPopupSuccess, getPopupError} from './modal.js';


const TIME_IN = 'timein';
const TIME_OUT = 'timeout';

const adForm = document.querySelector('.ad-form');
const inputTitle = adForm.querySelector('#title');

const minTitleLength = inputTitle.minLength;
const maxTitleLength = inputTitle.maxLength;

export const validateTitle = () => {
  const valueLength = inputTitle.value.length;

  if (valueLength < minTitleLength) {
    inputTitle.setCustomValidity(`Минимальная длина — 30 символов, ещё ${minTitleLength - valueLength} символов`);
  } else if (valueLength > maxTitleLength) {
    inputTitle.setCustomValidity(`Максимальная длина — 100 символов, удалите лишние ${valueLength - maxTitleLength} символов`);
  } else {
    inputTitle.setCustomValidity('');
  }
  inputTitle.reportValidity();
};

inputTitle.addEventListener('input', validateTitle);

const numberOfRoomsAdForm = adForm.querySelector('#room_number');
const capacityOfRoomsAdForm = adForm.querySelector('#capacity');

export const validateCapacityAndRooms = () => {
  const rooms = Number(numberOfRoomsAdForm.value);
  const guests = Number(capacityOfRoomsAdForm.value);
  if (rooms === MAX_APARTMENTS && guests !== MIN_VISITORS) {
    numberOfRoomsAdForm.setCustomValidity('Такое колличество комнат не для гостей');
  } else if (rooms !== MAX_APARTMENTS && guests === MIN_VISITORS) {
    numberOfRoomsAdForm.setCustomValidity('Не для гостей" можно выбрать только 100 комнат');
  } else if (rooms < guests) {
    numberOfRoomsAdForm.setCustomValidity('Колличество комнат должно быть больше или равно колличеству гостей');
  } else {
    numberOfRoomsAdForm.setCustomValidity('');
  }
};

numberOfRoomsAdForm.addEventListener('change', validateCapacityAndRooms);
capacityOfRoomsAdForm.addEventListener('change', validateCapacityAndRooms);

export const generateValidityError = function (evt) {
  const field = evt.target;
  if (!field.validity.valid) {
    field.style.outline = '2px solid red';
  } else {
    field.style = '';
  }
};

const housingTypeAdForm = adForm.querySelector('#type');
const priceAdForm = adForm.querySelector('#price');
const minHousingPrice = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  hotel: 3000,
  palace: 10000,
};

const validatePriceRoom = () => {
  const minPrice = minHousingPrice[housingTypeAdForm.value];
  priceAdForm.placeholder = minPrice;
  if (priceAdForm.value < minPrice) {
    priceAdForm.setCustomValidity(`Минимальная цена данного типа жилья ${minPrice} рублей`);
  } else {
    priceAdForm.setCustomValidity('');
  }
};

priceAdForm.addEventListener('input', validatePriceRoom);
housingTypeAdForm.addEventListener('change', validatePriceRoom);

const timeinAdForm = adForm.querySelector('#timein');
const timeoutAdForm = adForm.querySelector('#timeout');

const validateTime = (evt) => {
  if (evt.target.name === TIME_OUT || evt.target.name === TIME_IN) {
    timeinAdForm.value = evt.target.value;
    timeoutAdForm.value = evt.target.value;
  }
};

timeinAdForm.addEventListener('change', validateTime);
timeoutAdForm.addEventListener('change', validateTime);


const adressInput = adForm.querySelector('#address');

const setAddress = () => {
  adressInput.value = '135.00000, 86.66666';
};

setAddress();

const mapFilters = document.querySelector('.map__filters');
const adFormReset = adForm.querySelector('.ad-form__reset');

const resetMapFilters = () => {
  mapFilters.reset();
};

const resetList = (onSuccess) => {
  adForm.reset();
  resetAdFormLocation();
  resetMapFilters();
  onSuccess ? getPopupSuccess() : !getPopupSuccess();
};

const adFormResetHandler = (evt) => {
  evt.preventDefault();
  resetList();
};

adFormReset.addEventListener('click', adFormResetHandler);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  sendData(
    resetList,
    getPopupError,
    new FormData(evt.target),
  );
});
