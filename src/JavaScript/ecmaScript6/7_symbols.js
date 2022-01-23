/* eslint-disable no-self-compare */

// Symbol - використовується для того щоб можна було добавити якесь поле до обєкта не ламаючи його.

const logger = Symbol('symbol');
const kanyeWest = Symbol.for('Kanye West');

const test = {
  id: '2312312',
  city: 'Lviv',
  [logger]: 'my logs',
};

console.log(Object.keys(test));

console.log('Symbol', logger === Symbol('symbol'));
console.log('Symbol for', kanyeWest === Symbol.for('Kanye West')); // повертається той самий символ, а не створюється новий тому true
