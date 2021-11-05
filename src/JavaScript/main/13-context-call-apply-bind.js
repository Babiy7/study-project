function hello() {
  console.log('Hello', this);
}

const arrowHello = () => {
  console.log('Hello', this);
};

const person = {
  name: 'oleg',
  age: 25,
  sayHello: hello,
  sayHelloArrow: arrowHello,
  logInfo(job, phone) {
    console.group(`${this.name} log:`);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.log(this);
    console.groupEnd();
  },
};

const sofia = {
  name: 'Sofia',
  age: 15,
};

// person.logInfo.bind(sofia, 'Fontend', '+380963434345')();
// person.logInfo.bind(sofia)('Fontend', '+380963434345');
person.logInfo.call(sofia, 'Fontend', '+380963434345');
person.logInfo.apply(sofia, ['Fontend', '+380963434345']);

// ========== Втрата контексту ==========

let user = {
  name: 'Oleg',
  sayHi() {
    console.log(`Hi, ${this.name}`);
  },
};

const sayHi = user.sayHi.bind(user);


user = {
  name: 'Sofia',
  sayHi() {
    console.log(`Hi, ${this.name}`);
  },
};

setTimeout(() => sayHi(), 1000);

// ========== Кастомний bind, call, apply ==========

const human = {
  name: 'Oleg',
  age: 25,
};


function print(job, status) {
  console.log(this.name, this.age, job, status);

  return 1;
}
  // 
  //  реалізація bind без встроєних методів
  //
  //  function bind(fn, context, ...rest) {
  //   return function (...status) {
  //     const uniqeId = Symbol("id");

  //     context[uniqeId] = fn;

  //     context[uniqeId](...rest, ...status);

  //     delete context[uniqeId];
  //   };
  // }

  // 
  //  реалізація bind з встроєними методами
  //
  function bind(fn, context) {
    const rest = Array.prototype.slice.call(arguments, 2);
    return function () {
      const args = Array.prototype.slice.call(arguments);

      return fn.apply(context, rest.concat(args));
    };
  }

  // console.log(bind(print, person, "Frontend", "name", "job")("worker"));
  // bind(print, person)("Frontend", "worker");

  // Call

  function call(fn, context, ...rest) {
    const uniqeId = Symbol('id');

    context[uniqeId] = fn;

    context[uniqeId](...rest);

    delete context[uniqeId];
  }

  call(print, human, 'Frontend', 'I am not looking for a job');

  // Apply

  function apply(fn, context, args) {
    const uniqeId = Symbol('id');

    context[uniqeId] = fn;

    const result = context[uniqeId](...args);

    delete context[uniqeId];

    return result;
  }

  console.log(apply(print, human, ['Frontend', 'worker']));
