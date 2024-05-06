import Employee from './Factory';
import { FULL_TIME, PART_TIME, TEMPORARY } from './enums';

const employeeFactory = new Employee();

const employeeFullTime = employeeFactory.create(FULL_TIME, { name: 'Oleh', email: 'oleh@gmail.com' });
const employeePartTime = employeeFactory.create(PART_TIME, { name: 'Rostic', email: 'rostic@gmail.com' });
const employeeTemporary = employeeFactory.create(TEMPORARY, { name: 'Sofia', email: 'sofia@gmail.com' });

employeeFullTime.say();
employeePartTime.say();
employeeTemporary.say();
