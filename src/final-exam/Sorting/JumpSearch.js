function jumpSearch(array, target) {
  const n = array.length;
  let step = Math.floor(Math.sqrt(n)); // Обчислюємо крок стрибка

  let prev = 0;
  while (array[Math.min(step, n) - 1] < target) {
    prev = step; // Зберігаємо попередню позицію
    step += Math.floor(Math.sqrt(n)); // Збільшуємо крок
    if (prev >= n) {
      return -1; // Вихід, якщо перевищено розмір масиву
    }
  }

  // Здійснюємо бінарний пошук всередині блоку
  let left = prev - step;
  let right = Math.min(prev, n);
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      return mid; // Повертаємо індекс, якщо елемент знайдено
    }
    if (array[mid] < target) {
      left = mid + 1; // Зміщуємо ліву межу
    } else {
      right = mid - 1; // Зміщуємо праву межу
    }
  }

  return -1; // Повертаємо -1, якщо елемент не знайдено
}

const myArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const targetElement = 13;
jumpSearch(myArray, targetElement);
