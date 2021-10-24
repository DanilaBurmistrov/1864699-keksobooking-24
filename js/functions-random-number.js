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
  const calculatedElement = randomElement[Math.floor(Math.random() * randomElement.length)];
  return calculatedElement;
}

export {getRandomIntFromRange, getRandomFloatFromRange, getRandomElementOfArray};
