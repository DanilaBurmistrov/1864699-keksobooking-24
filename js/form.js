import {sendData} from './fetch.js';
import {resetAdFormLocation} from './map.js';
import {getPopupSuccess, getPopupError} from './modal.js';

const MAX_APARTMENTS = 100;
const MIN_VISITORS = 0;
const TIME_IN = 'timein';
const TIME_OUT = 'timeout';
const DEFAULT_COORDINATES = '135.00000, 86.66666';

const adForm = document.querySelector('.ad-form');
const inputTitle = adForm.querySelector('#title');

const minTitleLength = inputTitle.minLength;
const maxTitleLength = inputTitle.maxLength;

export const titleValidator = () => {
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

inputTitle.addEventListener('input', titleValidator);

const numberOfRoomsAdForm = adForm.querySelector('#room_number');
const capacityOfRoomsAdForm = adForm.querySelector('#capacity');

export const capacityAndRoomsValidator = () => {
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

numberOfRoomsAdForm.addEventListener('change', capacityAndRoomsValidator);
capacityOfRoomsAdForm.addEventListener('change', capacityAndRoomsValidator);

const housingTypeAdForm = adForm.querySelector('#type');
const priceAdForm = adForm.querySelector('#price');
const minHousingPrice = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  hotel: 3000,
  palace: 10000,
};

const priceRoomValidator = () => {
  const minPrice = minHousingPrice[housingTypeAdForm.value];
  priceAdForm.placeholder = minPrice;
  if (priceAdForm.value < minPrice) {
    priceAdForm.setCustomValidity(`Минимальная цена данного типа жилья ${minPrice} рублей`);
  } else {
    priceAdForm.setCustomValidity('');
  }
};

priceAdForm.addEventListener('input', priceRoomValidator);
housingTypeAdForm.addEventListener('change', priceRoomValidator);

const timeinAdForm = adForm.querySelector('#timein');
const timeoutAdForm = adForm.querySelector('#timeout');

const timeValidator = (evt) => {
  if (evt.target.name === TIME_OUT || evt.target.name === TIME_IN) {
    timeinAdForm.value = evt.target.value;
    timeoutAdForm.value = evt.target.value;
  }
};

timeinAdForm.addEventListener('change', timeValidator);
timeoutAdForm.addEventListener('change', timeValidator);

const adressInput = adForm.querySelector('#address');

const setAddress = () => {
  adressInput.value = DEFAULT_COORDINATES;
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
