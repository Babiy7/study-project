console.log("loading...");

// const data = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Data");
//   }, 2000);
// });

// data.then((data) => {
//   console.log(data);
// });

function delay(seconds) {
  return new Promise((resolve, reject) => {
    const number = Math.round(Math.random());
    setTimeout(() => {
      if (number) {
        resolve("Success");
      } else {
        reject("Error");
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
