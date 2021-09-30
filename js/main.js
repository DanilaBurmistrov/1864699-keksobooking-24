function getRandomFromRange(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(getRandomFromRange(0, 10));

function getRandomIntFromRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandomIntFromRange(0, 10));
