// рекурсія

const userBalance = {
  balance: 4000,
  interest: 4,
  years: 5,
  transactions: {
    1: 100,
    2: 78,
    3: 388,
    largeTransctions: {
      1: 4000,
      2: 1000,
    },
  },
};

const calc = (obj) => {
  let amount = 0;

  Object.keys(obj).forEach((key) => {
    amount += 1;

    if (typeof obj[key] === 'object') {
      amount += calc(obj[key]);
    }
  });

  return amount;
};

console.log('amount', calc(userBalance));
