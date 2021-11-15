import {getMapPoints} from './map.js';

const MAX_POINTS_MAP = 10;
const MIN_POINTS_MAP = 0;

const formFilters = document.querySelector('.map__filters');
const housingType = formFilters.querySelector('#housing-type');
const housingPrice = formFilters.querySelector('#housing-price');
const housingRooms = formFilters.querySelector('#housing-rooms');
const housingGuests = formFilters.querySelector('#housing-guests');
const housingFeatures = formFilters.querySelector('#housing-features');

const keyHousingPrice = {
  any: {
    min: 0,
    max: 1000000,
  },
  middle: {
    min: 10000,
    max: 50000,
  },
  low: {
    min: 0,
    max: 10000,
  },
  high: {
    min: 50000,
    max: 1000000,
  },
};

const isTypeValid = (item) =>
  ((item.offer.type === housingType.value) || (housingType.value === 'any'));

const isPriceValid = (item) =>
  (((item.offer.price >= keyHousingPrice[housingPrice.value].min) &&
  (item.offer.price <= keyHousingPrice[housingPrice.value].max)) ||
  (housingPrice.value === 'any'));

const isRoomsValid = (item) =>
  ((item.offer.rooms === Number(housingRooms.value)) || (housingRooms.value === 'any'));

const isGuestsValid = (item) =>
  ((item.offer.guests === Number(housingGuests.value)) || (housingGuests.value === 'any'));

const isFeaturesValid = (item) => {
  const featuresCheckedList = housingFeatures.querySelectorAll('input:checked');
  let flag = !featuresCheckedList.length >= 1;
  if (item.offer.features && featuresCheckedList.length >= 1) {
    for (let i = 0; i < featuresCheckedList.length; i++) {
      if (!item.offer.features.includes(featuresCheckedList[i].value)) {
        return false;
      }
    }
    flag = true;
  }
  return flag;
};

const isCardValid = (item) =>
  (isTypeValid(item) &&
  isPriceValid(item) &&
  isRoomsValid(item) &&
  isGuestsValid(item) &&
  isFeaturesValid(item));

export const getFilteredData = (data) => {
  if (data) {
    const array = data
      .slice()
      .filter(isCardValid);
    getMapPoints(array.slice(MIN_POINTS_MAP, MAX_POINTS_MAP));
  }
};

export const formFilterListener = (cb) => {
  formFilters.addEventListener('change', cb);
};

