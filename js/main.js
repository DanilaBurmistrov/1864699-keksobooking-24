function getRandomFloatFromRange(min, max, numberAfterComma) {
  if (max <= min) {
    min = 0;
  }
  return Math.random() * (max - min) + min.toFixed(numberAfterComma);
}

getRandomFloatFromRange(0, 10, 5);

function getRandomIntFromRange(min, max) {
  if (max <= min) {
    min = 0;
  }
  return Math.floor(Math.random() * (max - min) + min);
}

getRandomIntFromRange(0, 10);


