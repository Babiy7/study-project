function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return 'Немає цільового елементу';
}

const array = [5, 3, 9, 7, 2, 8];

console.log('result:', linearSearch(array, 7));
