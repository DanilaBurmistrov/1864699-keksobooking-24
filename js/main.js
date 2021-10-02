function getRandomNumberInRange (from, to) {
  if (to <= from) {
    throw new Error('ошибка, максимальное значение не может быть меньше минимального');
  }
  if (from < 0 || to < 0) {
    throw new Error('ошибка, значения не могут быть отрицательными числами');
  }
  return Math.random() * (to - from) + from;
}


function getRandomFloatFromRange(min, max, numberAfterComma) {
  return getRandomNumberInRange(min, max).toFixed(numberAfterComma);
}

getRandomFloatFromRange(0, 10, 5);


function getRandomIntFromRange(min, max) {
  return Math.floor(getRandomNumberInRange(min, max));
}

getRandomIntFromRange(0, 10);
