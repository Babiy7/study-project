const print = (result, target) => {
  if (result !== -1) {
    console.log(`Елемент ${target} знаходиться на позиції ${result} у масиві.`);
  } else {
    console.log(`Елемент ${target} не знайдено у масиві.`);
  }
};

module.exports = { print };
