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

getRandomFloatFromRange();


function getRandomIntFromRange(min, max) {
  return Math.floor(getRandomNumberInRange(min, max));
}

getRandomIntFromRange();

function getRandomType () {
  const randomTypes = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
  const randomType = randomTypes[Math.floor(Math.random()*randomTypes.length)];
  return randomType;
}
getRandomType();

function getRandomCheckin () {
  const randomCheckins = ['12:00', '13:00', '14:00'];
  const randomCheckin = randomCheckins[Math.floor(Math.random()*randomCheckins.length)];
  return randomCheckin;
}
getRandomCheckin();

function getRandomCheckout () {
  const randomCheckouts = ['12:00', '13:00', '14:00'];
  const randomCheckout = randomCheckouts[Math.floor(Math.random()*randomCheckouts.length)];
  return randomCheckout;
}
getRandomCheckout();

const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

function getRandomFeatures() {
  const maxLength = features.length;
  const lengthOfArray = getRandomIntFromRange(1, maxLength);
  const array = [];

  while (array.length < lengthOfArray) {
    const indexOfElement = getRandomIntFromRange(0, maxLength - 1);
    const element = features[indexOfElement];

    if (!array.includes(element)) {
      array.push(element);
    }
  }
  return array;
}

getRandomFeatures();

const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

function getARandomPhotos() {
  const maxLength = photos.length;
  const lengthOfArray = getRandomIntFromRange(1, maxLength);
  const array = [];

  while (array.length < lengthOfArray) {
    const indexOfElement = getRandomIntFromRange(0, maxLength - 1);
    const element = photos[indexOfElement];

    if (!array.includes(element)) {
      array.push(element);
    }
  }
  return array;
}

getARandomPhotos();

const avatar = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];

const taken = [];

function getRandomAvatar() {
  let found = false;
  while (!found) {
    const key = getRandomIntFromRange(0, avatar.length - 1);
    if (!taken.includes(avatar[key])) {
      taken.push(avatar[key]);
      found = true;
      return avatar[key];
    }
  }
}

getRandomAvatar();

const resthouse = [];


for (let i = 0; i < 10; i++) {
  const newObject = {
    offer: {
      title: 'Место для отдыха',
      address: `${getRandomFloatFromRange(35.65000, 35.70000, 5), getRandomFloatFromRange(139.70000, 139.80000, 5)}`,
      price: getRandomIntFromRange(1000, 10000),
      type: getRandomType(),
      rooms: getRandomIntFromRange(1, 5),
      guests: getRandomIntFromRange(1, 5),
      checkin: getRandomCheckin(),
      checkout: getRandomCheckout(),
      features: getRandomFeatures(),
      description: 'Лучшее предложение',
      photos: getARandomPhotos(),
    },
    author: {
      avatar: `img/avatars/user${getRandomAvatar()}.png`,
    },
    location: {
      lat: getRandomFloatFromRange(35.65000, 35.70000, 5),
      lng: getRandomFloatFromRange(139.70000, 139.80000, 5),
    },
  };
  resthouse.push(newObject);
}
console.log(resthouse);


