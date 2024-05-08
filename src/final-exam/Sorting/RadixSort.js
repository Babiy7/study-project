function radixSort(arr) {
  const max = Math.max(...arr);
  const maxDigitCount = String(max).length;

  for (let k = 0; k < maxDigitCount; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < arr.length; i++) {
      const digit = Math.floor(Math.abs(arr[i]) / Math.pow(10, k)) % 10;

      digitBuckets[digit].push(arr[i]);
    }

    arr = digitBuckets.flat();
  }

  return arr;
}

const array = [170, 45, 75, 90, 802, 24, 2, 66];
console.log('sorted array:', radixSort(array));
