const validator = {
  get: (target, prop, receiver) => {
    return prop in target ? Reflect.get(target, prop, receiver) : prop;
  },

  set: (target, prop, value) => {
    if (value.length > 2) {
      Reflect.set(target, prop, value);
    } else {
      console.error("Please type more symbols!");
    }
  },
};

let user = {
  _userName: "admin",
  _password: "123456",

  get userName() {
    return this._userName;
  },
};

user = new Proxy(user, validator);

// console.log(user.userName);

let admin = {
  __proto__: user,
  _userName: "oleg",
};

let person = {
  __proto__: admin,
  _userName: "babiy",
};

// console.log(admin.userName);

// console.log(person.userName);

// let numbers = [];

// numbers = new Proxy(numbers, {
//   set(target, prop, value) {
//     if (typeof value === "number") {
//       return (target[prop] = value);
//     } else {
//       return false;
//     }
//   },
// });

// numbers.push(1);
// numbers.push(2);
// numbers.push(3);

// console.log(numbers);

// console.log(userProxy["user"]);

// userProxy.password = "14";

// console.log(userProxy);

function proxyLog(message) {
  console.log("Log:", message);
}

const validatorFunc = {
  apply: (target, thisArg, argArray) => {
    if (argArray.length === 1) {
      Reflect.apply(target, thisArg, argArray);
    } else {
      console.error("You pass wrong parametrs");
    }
  },
};

const proxy = new Proxy(proxyLog, validatorFunc);

// proxy("My logs");

// function wrap(target) {
//   return new Proxy(target, {
//     get: function (target, prop, receiver) {
//       if (prop in target) {
//         return Reflect.get(target, prop, receiver);
//       } else {
//         throw new ReferenceError(`This key does not exist ${prop}`);
//       }
//     },
//   });
// }

let car = {
  year: 1967,
  color: "red",
  model: "GT",
};

// car = wrap(car);

// console.log(car.color);
// console.log(car.colors);

let arr = [1, 2, 3, 4, 5, 6, 7];

arr = new Proxy(arr, {
  get: function (target, prop) {
    if (prop < 0) {
      prop = -prop;
      prop = target.length - prop;
    }
    return Reflect.get(target, prop);
  },
});

// console.log(arr[-1]);

let handlers = Symbol("handlers");

function makeObservable(target) {
  target[handlers] = [];

  target.observe = function (handler) {
    this[handlers].push(handler);
  };

  return new Proxy(target, {
    set: function (target, prop, value) {
      target[handlers].forEach((handler) => handler(prop, value));
      return Reflect.set(...arguments);
    },
  });
}

car = makeObservable(car);

car.observe((prop, value) => console.log(`${prop}: ${value}`));

car.color = "green";
car.color = "blue";
