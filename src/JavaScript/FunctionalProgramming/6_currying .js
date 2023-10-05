const _ = require('lodash');

function partial(fn, ...args) {
  console.log('args', args);
  return function (..._args) {
    console.log('_args', _args);
    return fn(...args, ..._args);
  };
}

function setName(firsName, secondName, lastName) {
  return `${firsName}, ${secondName}, ${lastName}`;
}

const fn1 = partial(setName, 'oleg');
const fn2 = fn1('Oleg', 'Ihorovich');
console.log(fn2);

// console.log('partial test 1', partial(setName, 'Babiy')('Oleg'));

const curried = _.curry(setName);

console.log(curried('Babiy')('Oleg')('Ihorovich'));
console.log(curried('Babiy', 'Oleg')('Ihorovich'));
console.log(curried('Babiy', 'Oleg', 'Ihorovich'));
