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
    CheckCardElement (cardElement.querySelector('.popup__title'), 'textContent', element.title);
    CheckCardElement (cardElement.querySelector('.popup__text--address'), 'textContent', element.address);
    CheckCardElement (cardElement.querySelector('.popup__text--price'), 'textContent', `${element.price} ₽/ночь`);
    CheckCardElement (cardElement.querySelector('.popup__type'), 'textContent', descriptionOfTypes[element.type]);
    CheckCardElement (cardElement.querySelector('.popup__text--capacity'), 'textContent', `${element.rooms} комнаты для ${element.guests} гостей`);
    CheckCardElement (cardElement.querySelector('.popup__text--time'), 'textContent', `Заезд после ${element.checkin}, выезд до ${element.checkout}`);
    CheckCardElement (cardElement.querySelector('.popup__description'), 'textContent', element.description);
    CheckCardElement (cardElement.querySelector('.popup__avatar'), 'src', element.avatar);

    const featuresList = cardElement.querySelector('.popup__features');
    featuresList.children.forEach ((featureElement) => {
      const isFeatureActive = element.features.some ((feature) => featureElement.classList.contains(`popup__feature--${feature}`));
      if (!isFeatureActive) {
        featureElement.style.display = 'none';
      }
    });

    element.photos.forEach ((photo) => {
      const sel = document.querySelector('.popup__photo');
      const selClone = sel.content.cloneNode(true);
      selClone.src = photo;
    });

    listCardFragment.appendChild(cardElement);
  });
  cardTemplate.appendChild(listCardFragment);
};

export {getUserData};
