const avengers = [
  { name: 'capt', age: 100 },
  { name: 'hulk', age: 47 },
  { name: 'thor', age: 3000 },
];

const avengersNameArr = avengers.map(function (avenger) {
  return avenger.name;
});

console.log(avengersNameArr);
