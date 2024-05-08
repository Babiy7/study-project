function countingSort(array) {
  const max = Math.max(...array);
  const min = Math.min(...array);
  const countArray = new Array(max - min + 1).fill(0);

  for (let i = 0; i < array.length; i++) {
    countArray[array[i] - min]++;
  }

  let index = 0;

  for (let i = 0; i < countArray.length; i++) {
    while (countArray[i] > 0) {
      array[index++] = i + min;
      countArray[i]--;
    }
  }

  return array;
}

const array = [4, 2, 2, 8, 25, 3, 3, 1];
console.log('sorted array:', countingSort(array));
