const sum = (a, b) => {
  return a + b;
};

// context

function log() {
  console.log(this);
}

const arrowLog = () => {
  console.log(this);
};

const person = {
  name: "Oleg",
  year: 23,
  log: log,
  arrowLog: function () {
    arrowLog();
  },
  delay: function () {
    setTimeout(() => {
      console.log(this.name, this.year);
    }, 500);
  },
};

// person.log();
// person.arrowLog();

// class Person {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//     this.log = this.log.bind(this);
//   }

//   log() {
//     console.log(this);
//   }
// }

// function Person(name, year) {
//   this.name = name;
//   this.year = year;
//   this.log = function () {
//     console.log(this);
//   };
// }
