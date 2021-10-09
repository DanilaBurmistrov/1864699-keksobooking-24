const RANDOM_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const RANDOM_CHECKINS = ['12:00', '13:00', '14:00'];
const RANDOM_CHECKOUTS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const AVATARS = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
const MAX_USER_ADS = 10;
const MIN_PRICE = 1000;
const MAX_PRICE = 10000;
const MIN_ROOMS = 1;
const MAX_ROOMS = 5;
const MIN_GUESTS = 1;
const MAX_GUESTS = 5;
const AVATAR_BASE_URL = 'img/avatars/';
const AVATAR_FORMAT = 'png';


function getRandomNumberInRange (from, to) {
  if (to <= from) {
    throw new Error('ошибка, максимальное значение не может быть меньше минимального');
  }
  if (from < 0 || to < 0) {
    throw new Error('ошибка, значения не могут быть отрицательными числами');
  }
  return Math.random() * (to - from + 1) + from;
}


function getRandomFloatFromRange(min, max, numberAfterComma) {
  return getRandomNumberInRange(min, max).toFixed(numberAfterComma);
}


function getRandomIntFromRange(min, max) {
  return Math.floor(getRandomNumberInRange(min, max));
}


function getRandomElementOfArray (randomElement) {
  const calculatedElement = randomElement[getRandomNumberInRange (0, randomElement.length - 1)];
  return calculatedElement;
}

function getRandomArrayFromArray(transmittedArray) {
  const maxLength = transmittedArray.length;
  const lengthOfArray = getRandomIntFromRange(1, maxLength);
  const array = [];

  while (array.length < lengthOfArray) {
    const indexOfElement = getRandomIntFromRange(0, maxLength - 1);
    const element = transmittedArray[indexOfElement];

    if (!array.includes(element)) {
      array.push(element);
    }
  }
  return array;
}

const takenAvatars = [];

function getAvatarUrl() {
  function getRandomAvatar() {
    let found = false;
    while (!found) {
      const key = getRandomIntFromRange(0, AVATARS.length - 1);
      if (!takenAvatars.includes(AVATARS[key])) {
        takenAvatars.push(AVATARS[key]);
        found = true;
        return AVATARS[key];
      }
    }
  }
  const avatarUrl = `${AVATAR_BASE_URL}user${getRandomAvatar()}.${AVATAR_FORMAT}`;
  return avatarUrl;
}

function generateDataArray () {
  const resthouses  = [];
  function generateNewObject () {
    const lat = getRandomFloatFromRange(35.65000, 35.70000, 5);
    const lng = getRandomFloatFromRange(139.70000, 139.80000, 5);
    const newObject = {
      offer: {
        title: 'Место для отдыха',
        address: `${lat, lng}`,
        price: getRandomIntFromRange(MIN_PRICE, MAX_PRICE),
        type: getRandomElementOfArray(RANDOM_TYPES),
        rooms: getRandomIntFromRange(MIN_ROOMS, MAX_ROOMS),
        guests: getRandomIntFromRange(MIN_GUESTS, MAX_GUESTS),
        checkin: getRandomElementOfArray(RANDOM_CHECKINS),
        checkout: getRandomElementOfArray(RANDOM_CHECKOUTS),
        features: getRandomArrayFromArray(FEATURES),
        description: 'Лучшее предложение',
        photos: getRandomArrayFromArray(PHOTOS),
      },
      author: {
        avatar: getAvatarUrl(),
      },
      location: {
        lat,
        lng,
      },
    };
    return newObject;
  }
  for (let int = 0; int < MAX_USER_ADS; int++) {
    resthouses.push(generateNewObject ());
  }
  return resthouses;
}
generateDataArray ();
