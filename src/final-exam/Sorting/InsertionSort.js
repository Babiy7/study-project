function insertionSort(array) {
  const { length } = array;

  for (let i = 1; i < length; i++) {
    const currentValue = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > currentValue) {
      array[j + 1] = array[j];
      j -= 1;
    }

    array[j + 1] = currentValue;
  }

  return array;
}

const array = [12, 11, 13, 5, 6];
const sortedArray = insertionSort(array);

console.log('sorted array:', sortedArray);
