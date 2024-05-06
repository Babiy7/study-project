export class ProductBuilder {
  constructor(name) {
    this.product = { name };
  }

  setPrice(price) {
    this.product.price = price;
    return this;
  }

  setColor(color) {
    this.product.color = color;
    return this;
  }

  setWeight(weight) {
    this.product.weight = weight;
    return this;
  }

  build() {
    return this.product;
  }
}
