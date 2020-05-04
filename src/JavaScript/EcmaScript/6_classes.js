// set, get, static

class Animal {
  constructor(name, breed) {
    this._name = name;
    this._breed = breed;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }
}

Animal.prototype._years = 23;

class Cat extends Animal {
  constructor(name, breed) {
    super(name, breed);
  }

  static sayHello() {
    console.log(this.name);
  }

  hello() {
    console.log(this._name, this._breed);
  }
}

Cat.sayHello();

const cat = new Cat("Tom", "cat");

cat.hello();
