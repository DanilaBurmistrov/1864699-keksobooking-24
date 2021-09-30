function getRandomFromRange(min, max, number) {
  return (Math.random() * (max - min) + min).toFixed(number);
}

getRandomFromRange(0, 10, 5);

function getRandomIntFromRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

getRandomIntFromRange(0, 10);
