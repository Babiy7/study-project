const bubbleSort = (array) => {
  const { length } = array;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      const currentValue = array[j];
      const nextValue = array[j + 1];

      if (currentValue > nextValue) {
        array[j] = nextValue;
        array[j + 1] = currentValue;
      }
    }
  }

  return array;
};

const array = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(array);
console.log('sorted array:', sortedArray);
