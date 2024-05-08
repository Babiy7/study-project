const { print } = require('./print');

const binarySearch = (array, target) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const middleValue = array[middle];

    if (middleValue === target) {
      return middle;
    }

    if (middleValue < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
};

const array = [2, 4, 7, 10, 15, 20, 23];
const target = 15;

print(binarySearch(array, target), target);
