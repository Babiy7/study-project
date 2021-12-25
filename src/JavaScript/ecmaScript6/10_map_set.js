const map = new Map([
  ['0', 1],
  ['1', '2'],
  ['2', '3'],
  ['3', 4],
  ['4', 5],
]);

console.log(map.get('0'));

// const arr = [];

for (const value of map.keys()) {
  console.log(value);
}

// console.log(arr);

const set = new Set([
  1,
  1,
  2,
  3,
  5,
  8,
  13,
  13,
  8,
  { name: 'nama' },
  { name: 'nama' },
]);

console.log('set', set);

const fibs = [];
const numbers = {};

numbers[8] = 7;

// for (const iterator of set) {
//   fibs.push(iterator);
// }

forEach(fibs, (value, i) => {
  numbers[i] = value;
});

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
}

console.log(numbers);
