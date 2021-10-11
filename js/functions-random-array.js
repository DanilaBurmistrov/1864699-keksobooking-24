import {getRandomIntFromRange} from './functions-random-number.js';

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

export {getRandomArrayFromArray};
