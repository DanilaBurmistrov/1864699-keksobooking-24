
const checkCardElement = function (element, property, propertyValue) {
  if (propertyValue) {
    element[property] = propertyValue;
  } else {
    element.style.display = 'none';
  }
};

const cardTemplate = document.querySelector('#card');
const descriptionOfTypes = {
  flat : 'Квартира',
  bungalow : 'Бунгало',
  house : 'Дом',
  palace : 'Дворец',
  hotel : 'Отель',
};

export const renderPopup = function(ad) {
  const popup = cardTemplate.content.cloneNode(true);
  checkCardElement (popup.querySelector('.popup__title'), 'textContent', ad.offer.title);
  checkCardElement (popup.querySelector('.popup__text--address'), 'textContent', ad.offer.address);
  checkCardElement (popup.querySelector('.popup__text--price'), 'textContent', `${ad.offer.price} ₽/ночь`);
  checkCardElement (popup.querySelector('.popup__type'), 'textContent', descriptionOfTypes[ad.offer.type]);
  checkCardElement (popup.querySelector('.popup__text--capacity'), 'textContent', `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей`);
  checkCardElement (popup.querySelector('.popup__text--time'), 'textContent', `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`);
  checkCardElement (popup.querySelector('.popup__description'), 'textContent', ad.offer.description);
  checkCardElement (popup.querySelector('.popup__avatar'), 'src', ad.author.avatar);

  const featuresList = popup.querySelector('.popup__features');
  for (const featureElement of featuresList.children) {
    if (!ad.offer.features) {
      featureElement.style.display = 'none';
    } else {
      ad.offer.features.some ((feature) => featureElement.classList.contains(`popup__feature--${feature}`));
    }
  }

  const popupPhotosEl = popup.querySelector('.popup__photos');
  const img = popupPhotosEl.querySelector('img');
  popupPhotosEl.innerHTML = '';
  if (ad.offer.photos) {
    const fragment = document.createDocumentFragment();
    ad.offer.photos.forEach ((photo) => {
      const selClone = img.cloneNode(true);
      selClone.src = photo;
      fragment.appendChild(selClone);
      popupPhotosEl.appendChild(fragment);
    });
  }
  return popup;
};
