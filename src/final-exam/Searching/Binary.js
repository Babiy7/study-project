const { print } = require('./print');

const binarySearch = (array, searchedValue) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const middleValue = array[middle];

    if (middleValue === searchedValue) {
      return middle;
    }

    if (middleValue < searchedValue) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
};

const array = [2, 4, 7, 10, 15, 20, 23];
const searchedValue = 15;

print(binarySearch(array, searchedValue), searchedValue);
