const _ = require('lodash');

/* eslint-disable prefer-arrow-callback */
function memo(fn) {
  const cache = {};

  return (...args) => {
    let result = null;

    const prop = args.join(', ');

    if (prop in cache) {
      return cache[prop];
    }

    result = fn(...args);
    cache[prop] = result;

    return result;
  };
}

const factorial = _.memoize((x) => {
  console.log('x', x);
  return (!x || x === 1) ? 1 : x * factorial(x - 1);
});

factorial(10);
factorial(10);
console.log(factorial(10));

// console.time('start');
// factorial(500);
// factorial(500);
// factorial(500);
// factorial(500);
// console.timeEnd('start');

// console.log(`result = ${factorial(5)}`);
// console.log(`result = ${factorial(6)}`);
// console.log(`result = ${factorial(6)}`);

// const plus = memo((x, y, z = 0) => {
//   console.log(`arguments: ${x}, ${y}`);
//   return x + y + z;
// });

// console.log(`results: ${plus(10, 10)}`);
// console.log(`results: ${plus(10, 10)}`);
// console.log(`results: ${plus(10, 10, 10)}`);
