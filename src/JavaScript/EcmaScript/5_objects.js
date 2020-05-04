const obj = {
  name: "Owen",
  year: 23,
  toString: function () {
    return Object.entries(this)
      .filter((entrie) => entrie[0] !== "toString")
      .map((entrie) => `${entrie[0]}: ${entrie[1]}`)
      .join(", ");
  },
};

// console.log(obj.toString());

//    methods

//entries, keys, values, assign

const obj1 = {
  a: 2,
};

// console.log(obj1);

const obj2 = {
  b: 5,
};

console.log(Object.assign({}));

// console.log(obj1);
