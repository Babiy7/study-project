const { print } = require('./print');

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
};

const array = [5, 3, 9, 7, 2, 8];
const target = 7;

print(linearSearch(array, target), target);
