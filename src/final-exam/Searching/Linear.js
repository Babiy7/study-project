const { print } = require('./print');

const linearSearch = (array, searchedValue) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchedValue) {
      return i;
    }
  }

  return -1;
};

const array = [5, 3, 9, 7, 2, 8];
const searchedValue = 7;

print(linearSearch(array, searchedValue), searchedValue);
