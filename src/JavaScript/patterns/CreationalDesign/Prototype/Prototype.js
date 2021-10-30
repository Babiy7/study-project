const car = {
  wheels: 4,
  init() {
    console.log(`Кількість коліс ${this.wheels} Власник ${this.owner}`);
  },
};

const carWithOwner = Object.create(car, {
  owner: {
    value: 'Oleg',
  },
});

console.log('carWithOwner', carWithOwner);

carWithOwner.init();
