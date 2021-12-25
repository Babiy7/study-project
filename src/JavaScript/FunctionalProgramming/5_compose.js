const arrNum = (arr = []) => [1, 2, 3, 4, 5, 6, 7, 8, 9].concat(arr);

console.log(arrNum().reduce((acc, value) => acc + value, 0));

const log = (results) => console.log(results);

const fnFilter = (arr) => arr.filter((x) => x > 5);

const compose = (fns) => (val) => fns.reduce((fn1, fn2) => fn2(fn1), val);

const composed = compose([arrNum, fnFilter, log]);

composed([10, 11, 12, 13]);
