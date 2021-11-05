// об'єктний літерал
const obj1 = {};

// constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.print = function () {
    console.log(this.age);
  };
}

const person = new Person('Oleg', 23);

person.print();

function Student(name, age) {
  Person.apply(this, [name, age]);
}
function print() {
  console.log(this);
}

// const printBind = print.bind(person);

// printBind();

// print();
