function countingSort(arr) {
  const max = Math.max(...arr); // Знаходимо максимальне значення у масиві
  const min = Math.min(...arr); // Знаходимо мінімальне значення у масиві
  const count = new Array(max - min + 1).fill(0); // Створюємо масив для підрахунку входжень

  // Підраховуємо кількість входжень кожного елемента у масиві
  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - min]++;
  }

  // Відновлюємо вихідний масив з відсортованих елементів
  let index = 0;
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      arr[index++] = i + min;
      count[i]--;
    }
  }

  return arr;
}

// Приклад використання:
const arr = [4, 2, 2, 8, 3, 3, 1];
console.log('Не відсортований масив:', arr);
console.log('Відсортований масив:', countingSort(arr));
