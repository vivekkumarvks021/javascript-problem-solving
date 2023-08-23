let arr = [1, 3, 5, 7, 8, 9, 10];
let element = 3;

const binarySearch = function (arr, number, start, end) {
  // Base Condition
  if (start > end) return false;

  // Find the middle index
  let mid = Math.floor((start + end) / 2);

  // Compare mid with given key x
  if (arr[mid] === number) {
    console.log(`element found at index ${mid}`);
    return true;
  }

  if (arr[mid] > number) {
    return binarySearch(arr, number, start, mid - 1);
  } else {
    return binarySearch(arr, number, mid + 1, end);
  }
};

if (binarySearch(arr, element, 0, arr.length - 1))
  console.log("Element found!");
else console.log("Element not found!");

x = 7;

if (binarySearch(arr, x, 0, arr.length - 1)) console.log("Element found!");
else console.log("Element not found!");
