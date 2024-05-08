const radixSort = (array) => {
  const max = Math.max(...array);
  const maxDigitCount = String(max).length;

  for (let k = 0; k < maxDigitCount; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < array.length; i++) {
      const digit = Math.floor(Math.abs(array[i]) / Math.pow(10, k)) % 10;

      digitBuckets[digit].push(array[i]);
    }

    array = digitBuckets.flat();
  }

  return array;
};

const array = [170, 45, 75, 90, 802, 24, 2, 66];
console.log('sorted array:', radixSort(array));
