function insertionSort(arr) {
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    const key = arr[i];
    let j = i - 1;
    // Переміщуємо всі елементи більші за ключ вправо
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// Приклад використання
const arr = [12, 11, 13, 5, 6];
console.log('Масив до сортування:', arr);
const sortedArr = insertionSort(arr);
console.log('Масив після сортування:', sortedArr);
