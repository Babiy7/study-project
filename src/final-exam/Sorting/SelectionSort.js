const selectionSort = (array) => {
  const { length } = array;

  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      const currentValue = array[i];

      array[i] = array[minIndex];
      array[minIndex] = currentValue;
    }
  }

  return array;
};

const array = [64, 25, 12, 22, 11];
const sortedArray = selectionSort(array);

console.log('sorted array:', sortedArray);
