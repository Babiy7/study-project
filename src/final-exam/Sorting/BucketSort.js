const { insertionSort } = require('./InsertionSort');
const { print } = require('./print');

const bucketSort = (arr, bucketSize) => {
  if (arr.length === 0) {
    return arr;
  }

  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const bucketCount = Math.floor((max - min) / bucketSize) + 1;
  const buckets = new Array(bucketCount).fill().map(() => []);

  for (let i = 0; i < arr.length; i++) {
    const bucketIndex = Math.floor((arr[i] - min) / bucketSize);

    buckets[bucketIndex].push(arr[i]);
  }

  const sortedArray = [];

  for (let j = 0; j < buckets.length; j++) {
    if (buckets[j].length > 0) {
      buckets[j] = insertionSort(buckets[j]);
      sortedArray.push(...buckets[j]);
    }
  }

  return sortedArray;
};

const array = [29, 17, 38, 4, 25, 11, 32];
print(bucketSort(array, 5), array);
