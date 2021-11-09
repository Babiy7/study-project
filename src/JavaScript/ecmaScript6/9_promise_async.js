function delay(seconds) {
  return new Promise((resolve, reject) => {
    const number = Math.round(Math.random());
    setTimeout(() => {
      if (number) {
        resolve('Success');
      } else {
        reject('Error');
      }
    }, seconds * 1000);
  });
}

delay(3)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

function request(delay, isRejected) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isRejected) {
        reject(`${delay} was rejected`);
      } else {
        resolve(`${delay} was resolved`);
      }
    }, delay * 1000);
  });
}

const data = [
  {
    value: 1,
    isRejected: false,
  },
  {
    value: 3,
    isRejected: false,
  },
  {
    value: 2,
    isRejected: false,
  },
];

const promises = data.map(({ value, isRejected }) => {
  return request(value, isRejected);
});

console.log('promises', promises);

// Promise.all(promises)
//   .then(console.log)
//   .catch(console.log);

// Promise.allSettled(promises)
//   .then(console.log)
//   .catch(console.log);

Promise.race(promises)
  .then(console.log)
  .catch(console.log);

async function fetchCustom() {
  let result;
  try {
    await Promise.reject('erro').catch(console.log);
    // result = await Promise.resolve('success');
  } catch(e) {
    console.log('e', e);
  }

  return result;
}

fetchCustom();
  // .catch(e => console.log(e));

