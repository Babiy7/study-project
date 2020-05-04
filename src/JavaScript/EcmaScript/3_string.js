const title = "   Hello";

const template = `

<h1 id='title' style="color: red" >${title}</h1>

`;

////////methods

// console.log(`${title}/`.repeat(3).split("/").join(" "));
// console.log(title.startsWith("t"));
// console.log(title.endsWith("o"));
// console.log(title.includes("ell"));
// console.log(title.trimLeft());
// console.log(title.trimRight());
// console.log(
//   title.padStart(title.length + 5, "-").padEnd(title.length + 10, "-")
// );

console.log(reapet("Owen", 10, 12, 3, 4));

function reapet(word, times = 1, ...args) {
  console.log(...args);
  if (!word) {
    return false;
  }

  return `${word}/`.repeat(times).split("/").join(" ");
}
