// Interface Segregation Principle

//
// це порушує даний принцип тому що не всі потомки можуть наслідувати певні методи,
// тому їх потрібно виносити в окремі класи або об'єкти.
//

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   walk() {
//     console.log(`${this.name} can walk`);
//   }

//   fly() {
//     console.log(`${this.name} can fly`);
//   }

//   swim() {
//     console.log(`${this.name} can swim`);
//   }
// }

// class Dog extends Animal {
//   fly() {
//     return null;
//   }
// }

// class Eagle extends Animal {
//   swim() {
//     return null;
//   }
// }

// class Whale extends Animal {
//   walk() {
//     return null;
//   }

//   fly() {
//     return null;
//   }
// }

// const dog = new Dog('Spike');
// dog.walk();
// dog.fly();
// dog.swim();

// const eagle = new Eagle('Large bird');
// eagle.walk();
// eagle.fly();
// eagle.swim();

// const whale = new Whale('Blue fish');
// whale.walk();
// whale.fly();
// whale.swim();

class CorrectAnimal {
  constructor(name) {
    this.name = name;
  }
}

class CorrectDog extends CorrectAnimal {
}

class CorrectEagle extends CorrectAnimal {
}

class CorrectWhale extends CorrectAnimal {
}

const flyer = {
  fly() {
    console.log(`${this.name} can fly`);
  },
};

const walker = {
  walk() {
    console.log(`${this.name} can walk`);
  },
};

const swimer = {
  swim() {
    console.log(`${this.name} can swim`);
  },
};

Object.assign(CorrectDog.prototype, walker, swimer);
Object.assign(CorrectEagle.prototype, walker, flyer);
Object.assign(CorrectWhale.prototype, swimer);

const correctDog = new CorrectDog('Spike');
correctDog.walk();
correctDog.swim();

const correctEagle = new CorrectEagle('Large bird');
correctEagle.walk();
correctEagle.fly();

const correctWhale = new CorrectWhale('Blue fish');
correctWhale.swim();

console.log('correctDog', correctDog);
