// Open Close Principle

class Shape {
  area() {
    throw new Error('Area method should be implemented');
  }
}

class Square extends Shape {
  constructor(size) {
    super();
    this.size = size;
    this.type = 'square';
  }

  area() {
    return (this.size ** 2) * Math.PI;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
    this.type = 'circle';
  }

  area() {
    return this.radius ** 2;
  }
}

class AreaCalculator {
  constructor(shapes = []) {
    this.shapes = shapes;
  }

  sum() {
    return this.shapes.reduce((acc, shape) => {        
      return acc + shape.area();
    })
  }
  //
  // Це не правильно тому що якщо з'являється новий функціонал нам потрібно змінювати метод sum додавати нові кейси, в такому випадку краще винести якусь
  // логіку окрему і імплементувати її в кожному класі.
  //
  // sum() {
  //   return this.shapes.reduce((acc, shape) => {
  //     switch(shape.type) {
  //       case 'square': {
  //         acc += (shape.size ** 2) * Math.PI;
  //         break;
  //       };
  //       case 'circle': {
  //         acc += shape.radius ** 2;
  //         break;
  //       }
  //     }

  //     return acc;
  //   })
  // }
}

const calculator = new AreaCalculator([
  new Circle(5),
  new Square(10),
]);

console.log('sum:', calculator.sum());
