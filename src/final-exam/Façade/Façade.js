import { SERVICE, PRODUCT } from './enums';
import { ProductComplaints } from './ProductComplaints';
import { ServiceComplaints } from './ServiceComplaints';

export class ComplaintRegistry {
  register(customer, type, details) {
    const id = Date.now();
    let complaint;

    switch (type) {
      case SERVICE: {
        complaint = new ServiceComplaints();
        break;
      }
      case PRODUCT: {
        complaint = new ProductComplaints();
        break;
      }
      default: {
        complaint = {
          add: () => 'Please add type to complaint!'
        };
      }
    }

    return complaint.add({ id, customer, details });
  }
}
