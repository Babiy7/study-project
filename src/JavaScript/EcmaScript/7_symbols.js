const logger = Symbol('symbol');

const test = {
  id: '2312312',
  city: 'Lviv',
  [logger]: 'my logs',
};

console.log(Object.keys(test));
