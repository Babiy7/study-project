// var test1 = "abcdef";
// var test2 = 123;
// var test3 = true;
// var test4 = {};
// var test5 = [];
// var test6;
// var test7 = { abcdef: 123 };
// var test8 = ["abcdef", 123];

// function test9() {
//   return "abcdef";
// }

// var test10 = null;

// console.log(typeof test1 + " string");
// console.log(typeof test2 + " number");

// console.log(typeof test3 + " boolean");
// console.log(typeof test4 + " object");
// console.log(typeof test5 + " array");
// console.log(typeof test6 + " not init");
// console.log(typeof test7 + " object");
// console.log(typeof test8 + " array");
// console.log(typeof test9 + " function");
// console.log(typeof test10 + " null");
// console.log([] + 1 + 2); // 12
// console.log({} + 1 + 2); // 3
// console.log((1,5 - 1) * 2); // 8
// console.log((1.5 - 1) * 2); // 2

let user = {
  sayHi: function() {
    console.log(this);
  }
};

(user.sayBye = user.sayHi)();
(user.sayBye)()

if (0) {
  console.log(true);
} else {
  console.log(false);
}
