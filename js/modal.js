import {isEscEvent} from './util.js';

const successTemplateFragment = document.querySelector('#success').content;
const successFragment = successTemplateFragment.querySelector('.success');
const popupSuccess = successFragment.cloneNode(true);
document.body.append(popupSuccess);
popupSuccess.classList.add('hidden');

const errorTemplateFragment = document.querySelector('#error').content;
const errorFragment = errorTemplateFragment.querySelector('.error');
const popupError = errorFragment.cloneNode(true);
document.body.append(popupError);
const errorButton = document.querySelector('.error__button');
popupError.classList.add('hidden');


const closePopup = () => {
  popupSuccess.classList.add('hidden');
  popupError.classList.add('hidden');
  removePopupListener();
};

const popupEscDownHandler = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closePopup();
  }
};

const popupClickHandler = () => {
  closePopup();
};

export const getPopupSuccess = () => {
  popupSuccess.classList.remove('hidden');
  document.addEventListener('click', popupClickHandler);
  document.addEventListener('keydown', popupEscDownHandler);
};

export const getPopupError = () => {
  popupError.classList.remove('hidden');
  document.addEventListener('click', popupClickHandler);
  document.addEventListener('keydown', popupEscDownHandler);
};

const errorButtonClickHandler = () => {
  popupError.classList.remove('hidden');
};

errorButton.addEventListener('click', errorButtonClickHandler);

function removePopupListener () {
  document.removeEventListener('click', popupClickHandler);
  document.removeEventListener('keydown', popupEscDownHandler);
  errorButton.removeEventListener('click', errorButtonClickHandler);
}


