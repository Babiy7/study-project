//об'єктний літерал
const obj1 = {};

//constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.print = function () {
    console.log(this.age);
  };
}

let person = new Person("Oleg", 23);

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

export function myContext() {
  const array = [1, 2, 3, 4, 5];

  const person = {
    name: "Oleg",
    age: 23,
  };

  function print(job, status) {
    console.log(this.name, this.age, job, status);

    return 1;
  }

  // function bind(fn, context, ...rest) {
  //   return function (...status) {
  //     const uniqeId = Symbol("id");

  //     context[uniqeId] = fn;

  //     context[uniqeId](...rest, ...status);

  //     delete context[uniqeId];
  //   };
  // }

  function bind(fn, context) {
    const rest = Array.prototype.slice.call(arguments, 2);

    return function () {
      const args = Array.prototype.slice.call(arguments);

      return fn.apply(context, rest.concat(args));
    };
  }

  // console.log(bind(print, person, "Frontend")("worker"));
  // bind(print, person)("Frontend", "worker");

  //Call

  function call(fn, context, ...rest) {
    const uniqeId = Symbol("id");

    context[uniqeId] = fn;

    context[uniqeId](...rest);

    delete context[uniqeId];
  }

  call(print, person, "Frontend", "I am not looking for a job");

  //Apply

  function apply(fn, context, args) {
    const uniqeId = Symbol("id");

    context[uniqeId] = fn;

    const result = context[uniqeId](...args);

    delete context[uniqeId];

    return result;
  }

  console.log(apply(print, person, ["Frontend", "worker"]));
}
