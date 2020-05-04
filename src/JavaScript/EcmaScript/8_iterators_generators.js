function makeIterator(array) {
  let nextIndex = 0;

  return {
    next() {
      return nextIndex < array.length
        ? {
            value: array[nextIndex++],
            done: false,
          }
        : {
            done: true,
          };
    },
  };
}

const iterator = makeIterator([1, 2, 4, 5, 6, 6]);

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

const countries = {
  map: ["ru", "use", "en", "uk"],
  [Symbol.iterator]: function () {
    let i = 0;
    let map = this.map;

    return {
      next() {
        return i < map.length
          ? {
              value: `${i + 1}. ${map[i++]}`,
              done: false,
            }
          : {
              done: true,
            };
      },
    };
  },
};

// for (const iterator of countries) {
//   console.log(iterator);
// }

const championship = {
  teams: ["real", "barca", "atletico", "betis", "levante"],
  [Symbol.iterator]: function () {
    let i = 0;
    const teams = this.teams;

    return {
      next() {
        return {
          value: teams[i++],
          done: i > teams.length,
        };
      },
    };
  },
};

// for (const iterator of championship) {
//   console.log(iterator);
// }

// console.log(Object.keys(countries).join());

//   generators

function get(url) {
  return url;
}

function* myGenerator(number = 10) {
  const name = yield get("https//google.com/feed");
  console.log(name);
}

const generator = myGenerator(5);

console.log(generator.next());
console.log(
  generator.next([{ title: "news" }, { title: "news" }, { title: "news" }])
);
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
