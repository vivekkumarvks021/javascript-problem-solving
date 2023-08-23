let arr = [3, 2, 1, 5, 7, 5, 9];

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min_index = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min_index]) {
        min_index = j;
      }
      if (j === arr.length - 1) {
        [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
      }
    }
  }

  return arr;
};
console.log(selectionSort(arr), "Sorted using selection sort in my way");

const selectionSort1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min_index = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min_index]) {
        min_index = j;
      }
    }
    if (min_index !== i) {
      [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
    }
  }

  return arr;
};

console.log(
  selectionSort1(arr),
  "Sorted using selection sort in more efficient way"
);
