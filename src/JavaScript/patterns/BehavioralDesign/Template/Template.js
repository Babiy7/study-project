/* eslint-disable class-methods-use-this */
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  responsibilities() {}

  work() {
    return `${this.name} is doing ${this.responsibilities()}`;
  }

  getPaid() {
    return `${this.name} gets ${this.salary}`;
  }
}

class Developer extends Employee {
  responsibilities() {
    return 'a program';
  }
}

class Tester extends Employee {
  responsibilities() {
    return 'a test of program';
  }
}

const developer = new Developer('Oleg', 100000);
console.log(developer.work());
console.log(developer.getPaid());

const tester = new Tester('Ivan', 90000);
console.log(tester.work());
console.log(tester.getPaid());
