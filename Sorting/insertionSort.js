const insertionSort = (arr) => {
  let i, j;
  for (i = 1; i < arr.length; i++) {
    let currentNumber = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > currentNumber) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = currentNumber;
  }
  return arr;
};

const array = [8, 3, 5, 1, 4, 7];
console.log(insertionSort(array));
