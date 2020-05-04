//об'явлення функції
function x() {}

//функціональний вираз
const y = () => {};

export function context() {
   // const number = 42;
   const user = {
      name: 'Oleg',
      age: 23,
   };
   // document.cookie = JSON.stringify(user);
   // document.cookie = JSON.stringify(user);
   // sessionStorage.setItem("user", JSON.stringify(user));
   // localStorage.setItem("number", number);
   // window.addEventListener("storage", (e) => {
   //   console.log(e.url);
   // });

   // function deleteElements(array, number) {
   //   const newArray = [...array];
   //   newArray.splice(array.length - number, number);

   //   return newArray;
   // }

   // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

   let y = 1;

   let arr = [1, 2, 3, 4, 5, 6];

   function pure(array) {
      array.forEach((item, i) => {
         array[i] = item + 1;
      });

      return array;
   }

   function notPure() {
      y = y + 1;

      return y;
   }
}
