class ProtoStudent {}

class Student {
  constructor(name) {
    this.name = name;
  }
}

const Student2 = (...args) =>
  Reflect.construct(Student, [...args], ProtoStudent);

let obj = {};

console.log(
  Reflect.defineProperty(obj, "name", {
    value: "Foo",
    writable: true,
    configurable: true,
    enumerable: true,
  })
);
console.log(obj);

console.log(Reflect.get(obj, "name"));

console.log(obj);

// const student = Reflect.construct(Student, ["Oleg"], ProtoStudent);

// const student1 = new Student("Oleg");

// student1.__proto__ = new ProtoStudent();

const student = Student2("Oleg");
const student1 = Student2("Sofia");

// console.log(student, student1);

// console.log(Reflect.getPrototypeOf(student) === student.__proto__);

function s(a, b) {
  return this.value + a + b;
}

const method = (s, value, ...args) =>
  Reflect.apply(s, { value: value }, [...args]);

// console.log(method(s, 20, 2, 3));
