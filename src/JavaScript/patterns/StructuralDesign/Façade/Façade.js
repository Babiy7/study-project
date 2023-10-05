const { Service, Product } = {
  Service: 'Service',
  Product: 'Product'
};

class Complaints {
  constructor() {
    this.complaints = [];
  }

  reply(complaint) {}

  add(complaint) {
    this.complaints.push(complaint);

    return this.reply(complaint);
  }
}

class ProductComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Product: ${id}: ${customer} (${details})`;
  }
}

class ServiceComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Service: ${id}: ${customer} (${details})`;
  }
}

class ComplaintRegistry {
  register(customer, type, details) {
    const id = Date.now();
    let complaint;

    switch (type) {
      case Service: {
        complaint = new ServiceComplaints();
        break;
      }
      case Product: {
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

const registery = new ComplaintRegistry();

console.log(registery.register('Oleh', Service, 'unvailable'));
