// //global environment

// const secret = "007";

// function x() {
//   //x environment
//   const secret = "008";

//   function y() {
//     //y environment
//     const secret = "009";

//     function z() {
//       //z environment
//       return secret;
//     }

//     return z;
//   }

//   return y;
// }

// const getValue = x();

// const y = getValue();

// console.log(y());

function x(func) {
  const secret = "007";
  return func();
}

function makeCounter() {
  var count = 0;

  return {
    getCount: () => count,
    increment: () => {
      count++;
      return count;
    },
    decrement: () => {
      count--;
      return count;
    },
  };
}

// const processCount = makeCounter();
// console.log(processCount.getCount());
// processCount.increment();
// console.log(processCount.getCount());

function makePassword(password) {
  return (passwordGuess) => passwordGuess === password;
}

const confirmPassword = makePassword("12345");

function multN(n) {
  return (number) => number * n;
}

const getNumber = multN(2);

const fib = [1, 2, 3, 5, 8, 13];

function loop() {
  for (var i = 0; i < 5000000000; i++) {
    // (function (k) {
    //   setTimeout(function () {
    //     console.log(k, fib[k]);
    //   }, 1500);
    // })(i);
  }
}

console.time("Log");
loop();
console.timeEnd("Log");
