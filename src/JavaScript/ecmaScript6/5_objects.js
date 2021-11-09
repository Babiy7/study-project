const obj = {
  name: 'Owen',
  year: 23,
  toString() {
    return Object.entries(this)
      .filter((entrie) => entrie[0] !== 'toString')
      .map((entrie) => `${entrie[0]}: ${entrie[1]}`)
      .join(', ');
  },
};

// console.log(obj.toString());

//    methods

// entries, keys, values, assign

const obj1 = {
  a: 2,
};

// console.log(obj1);

const obj2 = {
  b: 5,
  person: {
    name: 'oleg',
  },
};

const obj2Copy = JSON.parse(JSON.stringify(obj2));

console.log(obj2.person === obj2Copy.person);

// console.log(obj1);

const person = {
  name: 'Oleg',
  age: 25,
};

Object.defineProperty(person, 'id', {
  value: 7896,
  enumerable: true,
  writable: false,
  configurable: false,
});

console.log('person', person);

Object.defineProperties()
