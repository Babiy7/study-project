import Fulltime from './FullTime';
import PartTime from './PartTime';
import Temporary from './Temporary';

class Employee {
  constructor() {
    this.employee = null;
  }

  create(type) {
    let { employee } = this;

    switch (type) {
      case 'fulltime': {
        employee = new Fulltime();
        break;
      }
      case 'parttime': {
        employee = new PartTime();
        break;
      }
      case 'temporary': {
        employee = new Temporary();
        break;
      }
      default: {
        employee = new Fulltime();
      }
    }

    employee.type = type;
    employee.say = function () {
      console.log(`${this.type}: rate ${this.rate}/hour`);
    };

    return employee;
  }
}

export default Employee;
