/* eslint-disable class-methods-use-this */
class OldCalc {
  operation(t1, t2, operator) {
    switch (operator) {
      case 'add': return t1 + t2;
      case 'sub': return t1 - t2;
      default: return NaN;
    }
  }
}

class NewCalc {
  add(t1, t2) {
    return t1 + t2;
  }

  sub(t1, t2) {
    return t1 - t2;
  }
}

class AdapterCalc {
  constructor() {
    this.calc = new NewCalc();
  }

  operation(t1, t2, operator) {
    switch (operator) {
      case 'add': return this.calc.add(t1, t2);
      case 'sub': return this.calc.sub(t1, t2);
      default: return NaN;
    }
  }
}

const old = new OldCalc();
console.log('old', old.operation(10, 10, 'add'));

const newCalc = new NewCalc();
console.log('newCalc', newCalc.add(10, 10));

const adapter = new AdapterCalc();
console.log('adapter', adapter.operation(10, 10, 'add'));
