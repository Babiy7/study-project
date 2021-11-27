const _ = require('lodash');

function partial(fn, ...args) {
  return function (..._args) {
    return fn(...args, ..._args);
  };
}

function setName(firsName, secondName, lastName) {
  return `${firsName}, ${secondName}, ${lastName}`;
}

// const fn1 = partial(setName, 'Babiy');
// const fn2 = fn1('Oleg', 'Ihorovich');
// console.log(fn2);

const curried = _.curry(setName);

console.log(curried('Babiy')('Oleg')('Ihorovich'));
console.log(curried('Babiy', 'Oleg')('Ihorovich'));
console.log(curried('Babiy', 'Oleg', 'Ihorovich'));
