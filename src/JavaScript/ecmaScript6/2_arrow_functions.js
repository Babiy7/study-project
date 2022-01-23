/* eslint-disable prefer-arrow-callback */
const sum = (a, b) => a + b;

// context

const person = {
  name: 'Oleg',
  year: 23,
  printPerson() {
    console.log('printPerson', this);
  },
  printWindowOrGlobal: () => {
    console.log('printWindowOrGlobal', this);
  },
  print() {
    const printPerson = () => console.log('print printPerson', this);
    printPerson();
  },
  delayWithArrowCallback() {
    setTimeout(() => {
      // силається на person
      console.log('delayWithArrowCallback', this);
    }, 500);
  },
  delayWithDeclarativeFunction() {
    setTimeout(function () {
      // силається на window
      console.log('delayWithDeclarativeFunction', this);
    }, 500);
  }
};

person.delayWithArrowCallback();
person.delayWithDeclarativeFunction();

// person.log();
// person.arrowLog();

// class Person {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//     this.log = this.log.bind(this);
//   }

//   log() {
//     console.log(this);
//   }
// }

// function Person(name, year) {
//   this.name = name;
//   this.year = year;
//   this.log = function () {
//     console.log(this);
//   };
// }
