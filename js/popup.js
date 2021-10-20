import {generateDataArray} from './data.js';

const array =  generateDataArray();
const cardTemplate = document.querySelector('#card');
const descriptionOfTypes = {
  flat : 'Квартира',
  bungalow : 'Бунгало',
  house : 'Дом',
  palace : 'Двроец',
  hotel : 'Отель',
};

const listCardFragment = document.createDocumentFragment();

array.forEach ((element) => {
  const cardElement = cardTemplate.content.cloneNode(true);
  cardElement.querySelector('.popup__title').textContent = element.title;
  cardElement.querySelector('.popup__text--address').textContent = element.address;
  cardElement.querySelector('.popup__text--price').textContent = `${element.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = descriptionOfTypes[element.type];
  cardElement.querySelector('.popup__text--capacity').textContent = `${element.rooms} комнаты для ${element.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${element.checkin}, выезд до ${element.checkout}`;
  element.features.forEach ();
  // cardElement.querySelectorAll('.popup__features').textContent = element.features;
  cardElement.querySelector('.popup__description').textContent = element.description;
  element.photos.forEach ((photo) => {
    const sel = document.querySelector('img ~ .popup__photo');
    const selClone = sel.content.cloneNode(true);
    selClone.src = element.photos[photo];
  });
  cardElement.querySelector('.popup__avatar').src = element.avatar;

  // const CheckCardElement = function () {


  // };


  listCardFragment.appendChild(cardElement);
});
cardTemplate.appendChild(listCardFragment);


