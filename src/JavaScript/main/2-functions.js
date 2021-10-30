/* eslint-disable prefer-rest-params */
// Function Declaration
function x() {}

x();

// Function Expression
const y = () => {};

// export function context() {
//   // const number = 42;
//   const user = {
//     name: 'Oleg',
//     age: 23,
//   };
//   // document.cookie = JSON.stringify(user);
//   // document.cookie = JSON.stringify(user);
//   // sessionStorage.setItem("user", JSON.stringify(user));
//   // localStorage.setItem("number", number);
//   // window.addEventListener("storage", (e) => {
//   //   console.log(e.url);
//   // });

//   // function deleteElements(array, number) {
//   //   const newArray = [...array];
//   //   newArray.splice(array.length - number, number);

//   //   return newArray;
//   // }

//   // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   let y = 1;

//   const arr = [1, 2, 3, 4, 5, 6];

//   function pure(array) {
//     array.forEach((item, i) => {
//       array[i] = item + 1;
//     });

//     return array;
//   }

//   function notPure() {
//     y += 1;

//     return y;
//   }
//   const x = 4;
// }

const test = {
  name: 'test object',
  createAnonFunction() {
    return function () {
      console.log(this.name);
      console.log(arguments);
    };
  },

  createArrowFunction() {
    return () => {
      console.log(this.name);
      console.log(arguments);
    };
  },
};

test.createAnonFunction('name', 'Oleg')();
test.createArrowFunction('name', 'Oleg')();

// 1) Звичайна функція: this = window, global. Use strict = undefined;

// Втрата контексту

let user = {
  name: 'Oleg',
  sayHi() {
    console.log(`Hi, ${this.name}`);
  },
};

const sayHi = user.sayHi.bind(user);

setTimeout(sayHi, 1000);

user = {
  sayHi() {
    console.log(`Hi, ${this.name}`);
  },
};
