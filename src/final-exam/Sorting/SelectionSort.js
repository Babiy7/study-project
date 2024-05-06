function selectionSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      // Обмін значень, якщо знайдено менший елемент
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

// Приклад використання
// const arr = [64, 25, 12, 22, 11];
// console.log('Масив до сортування:', arr);
// const sortedArr = selectionSort(arr);
// console.log('Масив після сортування:', sortedArr);

console.log('', Object.is({ name: '' }));