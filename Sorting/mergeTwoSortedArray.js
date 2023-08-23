let arr1 = [27, 38];
let arr2 = [1, 2, 10, 43];
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

console.log(mergeArray(arr1, arr2));
