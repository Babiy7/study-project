function bucketSort(arr, bucketSize = 5) {
  if (arr.length === 0) {
    return arr;
  }

  // Знаходимо мінімальне та максимальне значення масиву
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }

  // Створюємо відра
  const bucketCount = Math.floor((max - min) / bucketSize) + 1;
  const buckets = new Array(bucketCount);
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  // Розподіляємо елементи по відрам
  for (let i = 0; i < arr.length; i++) {
    const bucketIndex = Math.floor((arr[i] - min) / bucketSize);
    buckets[bucketIndex].push(arr[i]);
  }

  // Сортуємо кожне відро та об'єднуємо їх
  const sortedArray = [];
  for (let i = 0; i < buckets.length; i++) {
    insertionSort(buckets[i]); // Використовуємо вставкове сортування для сортування відра
    sortedArray.push(...buckets[i]);
  }

  return sortedArray;
}

// Допоміжна функція вставкового сортування для сортування відра
function insertionSort(arr) {
  const { length } = arr;
  for (let i = 1; i < length; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// Приклад використання:
const arr = [12, 11, 13, 5, 6, 7];
console.log('Не відсортований масив:', arr);
console.log('Відсортований масив:', bucketSort(arr));
