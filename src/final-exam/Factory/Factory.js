import FullTime from './FullTime';
import PartTime from './PartTime';
import Temporary from './Temporary';
import { FULL_TIME, PART_TIME, TEMPORARY } from './enums';

class Employee {
  constructor() {
    this.employee = null;
  }

  create(type, person) {
    let { employee } = this;

    switch (type) {
      case FULL_TIME: {
        employee = new FullTime(person);
        break;
      }
      case PART_TIME: {
        employee = new PartTime(person);
        break;
      }
      case TEMPORARY: {
        employee = new Temporary(person);
        break;
      }
      default: {
        employee = new FullTime(person);
      }
    }

    employee.type = type;
    employee.say = function () {
      console.log(`${this.name}: ${this.email}`);
      console.log(`${this.type}: rate ${this.rate}/hour`);
      console.log('====================================');
    };

    return employee;
  }
}

export default Employee;
