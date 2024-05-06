import { Complaints } from './Complaints';

export class ProductComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Product: ${id}: ${customer} (${details})`;
  }
}
