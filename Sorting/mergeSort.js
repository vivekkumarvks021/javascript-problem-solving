const mergeArray = (arr1, arr2) => {
  let pointer1 = 0;
  let pointer2 = 0;

  let newArr = [];
  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    if (arr1[pointer1] < arr2[pointer2]) {
      newArr.push(arr1[pointer1]);
      pointer1++;
    } else {
      newArr.push(arr2[pointer2]);
      pointer2++;
    }
  }

  while (pointer1 < arr1.length) {
    newArr.push(arr1[pointer1]);
    pointer1++;
  }

  while (pointer2 < arr2.length) {
    newArr.push(arr2[pointer2]);
    pointer2++;
  }

  return newArr;
};

function mergeSort(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }
  let middleIndex = Math.floor(arr.length / 2);
  let rightArray = arr.slice(0, middleIndex);
  let leftArray = arr.slice(middleIndex);

  leftArray = mergeSort(leftArray);
  rightArray = mergeSort(rightArray);
  return mergeArray(leftArray, rightArray);
}

let arr = [12, 11, 13, 5, 6, 8];

console.log(mergeSort(arr), "Sorted Array is Here");
