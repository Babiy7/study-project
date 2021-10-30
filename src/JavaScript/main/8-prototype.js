class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    Animal.instance = this;
  }

  getName() {
    return this.name;
  }
}

const person = {
  name: 'Oleg',
  age: 23,
};
export function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.prototype.sitting = false;

Dog.prototype.bark = function () {
  if (this.weight > 25) {
    console.log(`${this.name} says Woof!`);
  } else {
    console.log(`${this.name} says Yip!`);
  }
};

Dog.prototype.run = function () {
  console.log('run!');
};

Dog.prototype.wag = function () {
  console.log('wag!');
};

Dog.prototype.sit = function () {
  if (this.sitting) {
    console.log(`${this.name} is already sitting!`);
  } else {
    this.sitting = true;
    console.log(`${this.name} is now sitting!`);
  }
};

const dog = new Dog('name', 'breed', 'weight');
const animal = new Animal('Гарфілд', 5);

console.log('person literal', person);
console.log('animal class', animal);
console.log('dog constructor', dog);

function Main() {}
Main.prototype = { protected: true };

const obj1 = new Main();
Main.prototype = { protected: false };

const obj2 = new Main();

console.log('Object1 protection: ', obj1.protected);
console.log('Object2 protection: ', obj2.protected);


// console.log('person', person);
// console.log('dog', dog);

// function compareLength(first, second) {
//   return first.length === second.length;
// }

// function compareKeys(first, second) {
//   return first.join('') === second.join('');
// }

// function compareValues(first, second) {
//   return (
//     Object.values(first).join('').toLowerCase()
//     === Object.values(second).join('').toLowerCase()
//   );
// }

// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);

//   if (!compareLength(keys1, keys2)) {
//     return false;
//   }

//   if (!compareKeys(keys1, keys2)) {
//     return false;
//   }

//   return compareValues(obj1, obj2);
// }

// testSpeed(compareObjects);

// function testSpeed(func) {
//   console.time('Func');
//   //   func(obj, obj1);
//   console.timeEnd('Func');
// }

// function compareObjects1(obj1, obj2) {
//   const keys1 = Object.entries(obj1);
//   const keys2 = Object.entries(obj2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (let i = 0; i < keys1.length; i++) {
//     const entrie1 = keys1[i];
//     const entrie2 = keys2[i];

//     if (!(entrie1[0] === entrie2[0] && entrie1[1] === entrie2[1])) {
//       return false;
//     }
//   }

//   return true;
// }

// String.prototype.name = 'Oleg';

// console.log('name', ''.name);
