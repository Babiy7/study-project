import { ProductBuilder } from './Builder';

const myProduct = new ProductBuilder('My Product')
  .setPrice(100)
  .setColor('Blue')
  .setWeight(500)
  .build();

console.log('product', myProduct);
