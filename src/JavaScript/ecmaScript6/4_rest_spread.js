// rest
function name(...args) {
  return (args.reduce((prev, next) => prev + next, 0) / args.length).toFixed(2);
}
// console.log(name(1, 2, 3, 4, 2, 1));

// spread

const array = [1, 2, 3, 5, 8, 13];

// console.log(Math.max(...array));

const fib = [1, ...array];

// console.log(fib);

// Destructuring

const [a, ...restArray] = array;

console.log('restArray', restArray);

const address = {
  street: "Melnuchyca",
  city: "Lviv",
  country: "Ukraine",
  module: {
    section: 1,
  },
};

const { street, country } = address;

// console.log(street, country);
