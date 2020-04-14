// //global environment

// const secret = "007";

// function x() {
//   //x environment
//   const secret = "008";

//   function y() {
//     //y environment
//     const secret = "009";

//     function z() {
//       //z environment
//       return secret;
//     }

//     return z;
//   }

//   return y;
// }

// const getValue = x();

// const y = getValue();

// console.log(y());

function x(func) {
  const secret = "007";
  return func();
}

function makeCounter() {
  var count = 0;

  return {
    increment: () => {
      count++;
      return count;
    },
    decrement: () => {
      count--;
      return count;
    },
  };
}

const processCount = makeCounter();

function makePassword(password) {
  return (passwordGuess) => passwordGuess === password;
}

const confirmPassword = makePassword("12345");

function multN(n) {
  return (number) => number * n;
}

const getNumber = multN(2);

function handler() {
  alert(doneMessage);
}

function makeTimer(doneMessage, sec) {
  setTimeout(() => alert(doneMessage), sec * 1000);

  doneMessage = "Babii";
}

// makeTimer("Cookies are done", 2);

window.onload = () => {
  let count = 0;

  const message = document.getElementById("message");
  const button = document.getElementById("button");

  button.onclick = () => {
    count++;
    message.innerHTML = `You clicked on button ${count} times!`;
  };
};

const cook = function (food) {
  if (food === "cookies") {
    alert("More please");
  } else if (food === "cake") {
    alert("Yum yum");
  }
};

function make(cook) {
  cook("cookies");
  cook("cake");
}

make(cook);
