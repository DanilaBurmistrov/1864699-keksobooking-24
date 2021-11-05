import {generateDataArray} from './data.js';

const checkCardElement = function (element, property, propertyValue) {
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
  palace : 'Дворец',
  hotel : 'Отель',
};

const listCardFragment = document.createDocumentFragment();
const getUserData = function() {
  array.forEach ((element) => {
    const cardElement = cardTemplate.content.cloneNode(true);
    checkCardElement (cardElement.querySelector('.popup__title'), 'textContent', element.offer.title);
    checkCardElement (cardElement.querySelector('.popup__text--address'), 'textContent', element.offer.address);
    checkCardElement (cardElement.querySelector('.popup__text--price'), 'textContent', `${element.offer.price} ₽/ночь`);
    checkCardElement (cardElement.querySelector('.popup__type'), 'textContent', descriptionOfTypes[element.offer.type]);
    checkCardElement (cardElement.querySelector('.popup__text--capacity'), 'textContent', `${element.offer.rooms} комнаты для ${element.offer.guests} гостей`);
    checkCardElement (cardElement.querySelector('.popup__text--time'), 'textContent', `Заезд после ${element.offer.checkin}, выезд до ${element.offer.checkout}`);
    checkCardElement (cardElement.querySelector('.popup__description'), 'textContent', element.offer.description);
    checkCardElement (cardElement.querySelector('.popup__avatar'), 'src', element.author.avatar);

    const featuresList = cardElement.querySelector('.popup__features');
    for (const featureElement of featuresList.children) {
      const isFeatureActive = element.offer.features.some ((feature) => featureElement.classList.contains(`popup__feature--${feature}`));
      if (!isFeatureActive) {
        featureElement.style.display = 'none';
      }
    }

    const popupPhotosEl = cardElement.querySelector('.popup__photos');
    const img = popupPhotosEl.querySelector('img');
    popupPhotosEl.innerHTML = '';
    element.offer.photos.forEach ((photo) => {
      const selClone = img.cloneNode(true);
      selClone.src = photo;
      popupPhotosEl.appendChild(selClone);
    });
    listCardFragment.appendChild(cardElement);
  });
};

export {getUserData};
