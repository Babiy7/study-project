// функція першого класу

// функція яка себе веде як змінна, тобто можна присвоювати її змінній і передавати як аргумент
//

const hof = function (a, b) {
  return a + b;
};

console.log(hof(2, 4));
