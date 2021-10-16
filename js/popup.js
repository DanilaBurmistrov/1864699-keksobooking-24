import {generateDataArray} from './main.js';

const array =  generateDataArray();
const cardTemplate = document.querySelector('#card');
const descriptionOfTypes = {
  flat : 'Квартира',
  bungalow : 'Бунгало',
  house : 'Дом',
  palace : 'Двроец',
  hotel : 'Отель',
};
const listCardElement = document.querySelector('.card_content');
const listCardFragment = document.createDocumentFragment();

array.forEach ((element) => {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.popup__title').textContent = element.title;
  cardElement.querySelector('.popup__text--address').textContent = element.address;
  cardElement.querySelector('.popup__text--price').textContent = `${element.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = descriptionOfTypes[element.type];
  cardElement.querySelector('.popup__text--capacity').textContent = `${element.rooms} комнаты для ${element.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${element.checkin}, выезд до ${element.checkout}`;
  cardElement.querySelectorAll('.popup__features').textContent = element.features;
  cardElement.querySelector('.popup__description').textContent = element.description;
  cardElement.querySelectorAll('.popup__photos').src = element.photos;
  cardElement.querySelector('.popup__avatar').src = element.avatar;

  if (cardElement === undefined) {
    cardElement.classList.add('hidden');
  }
  listCardFragment.appendChild(cardElement);
});
listCardElement.appendChild(listCardFragment);
