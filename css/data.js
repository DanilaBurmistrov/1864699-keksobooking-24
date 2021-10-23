import {RANDOM_TYPES,
  RANDOM_CHECKINS,
  RANDOM_CHECKOUTS,
  FEATURES,
  PHOTOS,
  MAX_USER_ADS,
  MIN_PRICE,
  MAX_PRICE,
  MIN_ROOMS,
  MAX_ROOMS,
  MIN_GUESTS,
  MAX_GUESTS} from './constants.js';

import {getAvatarUrl} from './functions-random-avatar.js';

import {getRandomArrayFromArray} from './functions-random-array.js';

import {getRandomIntFromRange,
  getRandomFloatFromRange,
  getRandomElementOfArray} from './functions-random-number.js';


export function generateDataArray () {
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
