const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArray = array.map((item) => item + 1);

// console.log('array', array);
// console.log('newArray', newArray);

// some

const some = [2, 'dsvk', 7];

const resultSome = some.some((item) => typeof item === 'boolean');

// console.log(resultSome);

// every

const every = [2, 9, 7];

const resultEvery = every.some((item) => typeof item === 'number');

// console.log(resultEvery);

// reduce

const reduce = [2, 1, 4, 9];

const resultReduce = reduce.reduce((sum, current) => sum + current, 'apple');

console.log(resultReduce);

const obj = {
  ivan: 'person',
  oleg: 'person',
  cat: 'animal',
  elephant: 'animal',
};

const entries = Object.entries(obj);

const filtered = entries.filter((array) => {
  if (array[1] === 'person') {
    return array;
  }

  return false;
});

const obj1 = {};

const changed = filtered.forEach((item) => {
  obj1[item[0]] = item[1];
});

console.log(entries);
console.log(filtered);
console.log(obj1);
