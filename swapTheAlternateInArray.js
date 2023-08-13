const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const swapAlternate = (arr) => {
  arr.forEach((element, index) => {
    if (index % 2 != 0) {
      [arr[index - 1], arr[index]] = [arr[index], arr[index - 1]];
    }
  });
  return arr;
};
console.log(swapAlternate(arr), "swapping the alternate in my way.");

// Alternate and better approach
const swapAlternate1 = (arr) => {
  for (let i = 1; i < arr.length; i += 2) {
    [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
  }
  return arr;
};
console.log(swapAlternate1(arr), "Swapping the alternate in optimized way.");
