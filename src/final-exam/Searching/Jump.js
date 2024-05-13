const { print } = require('./print');

const jumpSearch = (array, searchedValue) => {
  let { length } = array;
  let step = Math.floor(Math.sqrt(length));
  let prev = 0;

  while (array[Math.min(step, length) - 1] < searchedValue) {
    prev = step;
    step += Math.floor(Math.sqrt(length));

    if (prev >= length) {
      return -1;
    }
  }

  while (array[prev] < searchedValue) {
    prev++;
  }

  if (array[prev] === searchedValue) {
    return prev;
  }

  return -1;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const searchedValue = 7;

print(jumpSearch(array, searchedValue), searchedValue);
