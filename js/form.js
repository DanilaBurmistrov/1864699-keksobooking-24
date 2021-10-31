import {MAX_APARTMENTS,
  MIN_VISITORS} from './constants.js';

const formsAttributes = document.querySelector('.ad-form');
const mapsAttributes = document.querySelector('.map__filters');
const fieldsetElements = document.querySelectorAll('fieldset');
const selectElements = document.querySelectorAll('select');

const toggleFormState = (isDisabled) => {
  if (isDisabled) {
    formsAttributes.classList.add('ad-form--disabled');
    mapsAttributes.classList.add('map__filters--disabled');
    fieldsetElements.forEach ((fieldsetElement) => {
      fieldsetElement.setAttribute('disabled', true);
    });
    selectElements.forEach ((selectElement) => {
      selectElement.setAttribute('disabled', true);
    });
  } else {
    formsAttributes.classList.remove('ad-form--disabled');
    mapsAttributes.classList.remove('map__filters--disabled');
    fieldsetElements.forEach ((fieldsetElement) => {
      fieldsetElement.removeAttribute('disabled', false);
    });
    selectElements.forEach ((selectElement) => {
      selectElement.removeAttribute('disabled', false);
    });
  }
};

export {toggleFormState};

const adForm = document.querySelector('.ad-form');
const inputTitle = adForm.querySelector('#title');

const minTitleLength = inputTitle.minLength;
const maxTitleLength = inputTitle.maxLength;

export const getAllowedValueOfTitle = () => {
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

inputTitle.addEventListener('input', getAllowedValueOfTitle);

const numberOfRoomsAdForm = adForm.querySelector('#room_number');
const capacityOfRoomsAdForm = adForm.querySelector('#capacity');

export const getValidateCapacityAndRooms = () => {
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
  numberOfRoomsAdForm.reportValidity();
};

numberOfRoomsAdForm.addEventListener('change', getValidateCapacityAndRooms);
capacityOfRoomsAdForm.addEventListener('change', getValidateCapacityAndRooms);

export const generateValidityError = function (evt) {
  const field = evt.target;
  if (!field.validity.valid) {
    field.style.outline = '2px solid red';
  } else {
    field.style = '';
  }
};

