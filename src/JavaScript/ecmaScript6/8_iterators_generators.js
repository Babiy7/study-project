/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable require-yield */

//
// ========== CUSTOM ITERATOR ==========
//
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

//
// =================================================================
//

//
// ========== ITERATORS ==========
//
const countries = {
  map: ['ru', 'use', 'en', 'uk'],
  [Symbol.iterator]() {
    let i = 0;
    const { map } = this;

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
  teams: ['real', 'barca', 'atletico', 'betis', 'levante'],
  [Symbol.iterator]() {
    let i = 0;
    const { teams } = this;

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

//
// =================================================================
//

//
//  =========== GENERATORS ===========
//

function get(callback, url, isSuccess) {
  return callback(url, isSuccess);
}

function put(response) {
  return response;
}

function request(url) {
  let promise = null;
  const isSuccess = Math.round(Math.random() * 1);

  if (isSuccess) {
    promise = Promise.resolve([{ title: 'news' }, { title: 'news' }, { title: 'news' }]);
  } else {
    promise = Promise.reject(`error ${url}`);
  }

  return promise;
}

function* getPosts() {
  try {
    const response = yield get(request, 'https//google.com/feed');
    yield put(response);
  } catch (e) {
    yield put(e);
  }
}

const generator = getPosts(5);

generator.next().value
  .then((res) => console.log(generator.next(res).value))
  .catch((e) => console.log(generator.next(e)));

// console.log(generator.next());
// console.log(
//   generator.next([{ title: 'news' }, { title: 'news' }, { title: 'news' }]),
// );
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

function* gen() {
  return 'Oleg';
}

console.log(gen().next());

const array = [10, 20, 30, 40, 50];

const iter = array[Symbol.iterator]();

console.log(iter.next());
