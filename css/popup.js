import {generateDataArray} from './data.js';

const CheckCardElement = function (element, property, propertyValue) {
  if (propertyValue) {
    element[property] = propertyValue;
  } else {
    element.style.display = 'none';
  }
};

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
const getUserData = function() {
  array.forEach ((element) => {
    const cardElement = cardTemplate.content.cloneNode(true);
    CheckCardElement (cardElement.querySelector('.popup__title'), 'textContent', element.offer.title);
    CheckCardElement (cardElement.querySelector('.popup__text--address'), 'textContent', element.offer.address);
    CheckCardElement (cardElement.querySelector('.popup__text--price'), 'textContent', `${element.offer.price} ₽/ночь`);
    CheckCardElement (cardElement.querySelector('.popup__type'), 'textContent', descriptionOfTypes[element.offer.type]);
    CheckCardElement (cardElement.querySelector('.popup__text--capacity'), 'textContent', `${element.offer.rooms} комнаты для ${element.offer.guests} гостей`);
    CheckCardElement (cardElement.querySelector('.popup__text--time'), 'textContent', `Заезд после ${element.offer.checkin}, выезд до ${element.offer.checkout}`);
    CheckCardElement (cardElement.querySelector('.popup__description'), 'textContent', element.offer.description);
    CheckCardElement (cardElement.querySelector('.popup__avatar'), 'src', element.author.avatar);

    const featuresList = cardElement.querySelector('.popup__features');
    for (const featureElement of featuresList.children) {
      const isFeatureActive = element.offer.features.some ((feature) => featureElement.classList.contains(`popup__feature--${feature}`));
      if (!isFeatureActive) {
        featureElement.style.display = 'none';
      }
    }

    element.offer.photos.forEach ((photo) => {
      const sel = cardElement.querySelector('.popup__photo');
      const selClone = sel.cloneNode(true);
      selClone.src = photo;
      cardElement.querySelector('.popup__photos').appendChild(selClone);
    });
  });
  document.querySelector('.map__canvas').appendChild(listCardFragment);
};

export {getUserData};
