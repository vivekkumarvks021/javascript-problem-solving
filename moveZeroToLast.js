let input = [8, 0, 0, 0, 0, 2, 4, 0, 0, 6];
// output = [8, 2, 4, 6, 0, 0, 0]
const moveZeroToLast = (arr) => {
  let zeroIndex = arr.length - 1;
  let nonZeroIndex = 0;
  let output = [];
  arr.forEach((element) => {
    if (element === 0) {
      output[zeroIndex] = 0;
      zeroIndex--;
    } else {
      output[nonZeroIndex] = element;
      nonZeroIndex++;
    }
  });

  return output;
};
console.log(moveZeroToLast(input), "Solved question in my way.");

const moveZeroToLast1 = (arr) => {
  let nonZeroIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      // Swapping nonZero number to non-zero Index
      [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
      nonZeroIndex++;
    }
  }

  return arr;
};

console.log(
  moveZeroToLast1(input),
  "Move zero to last in optimized way by using swapping"
);
