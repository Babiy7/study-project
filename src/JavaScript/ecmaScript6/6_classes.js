// set, get, static

// class Animal {
//   constructor(name, breed) {
//     this._name = name;
//     this._breed = breed;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(name) {
//     this._name = name;
//   }
// }

// Animal.prototype._years = 23;

// class Cat extends Animal {
//   constructor(name, breed) {
//     super(name, breed);
//   }

//   static sayHello() {
//     console.log(this.name);
//   }

//   hello() {
//     console.log(this._name, this._breed);
//   }
// }

// Cat.sayHello();

// const cat = new Cat('Tom', 'cat');

// cat.hello();


class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  print() {
    console.log(`name ${this.name}, age ${this.age}`);
  }
}

class Worker extends Human {
  constructor(name, age, job, salary) {
    super(name, age);
    this.job = job;
    this.salary = salary;
  }

  get workerJob() {
    return this.job;
  }

  set workerJob(job) {
    this.job = job;
  }
}

const oleg = new Worker('Oleg', 23, 'React js developer', '700$');

console.log(oleg);
console.log(oleg.workerJob);
oleg.workerJob = 'Web developer';
console.log(oleg.workerJob);
