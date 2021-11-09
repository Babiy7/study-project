// функція вищого порядку

// 1. приймає функцію як аргумент
// 2. повертає функцію

const array = [1, 2, 5, 8, 5];
array.forEach((item) => {
  console.log(item);
});

function setup(a) {
  return (b) => a + b;
}

const plus = setup(5);

console.log(plus(10));
