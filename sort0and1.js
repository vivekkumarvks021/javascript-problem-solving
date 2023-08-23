let input = [0, 1, 1, 0, 1, 0, 1];
// output = [0, 0, 0, 1, 1, 1, 1];

const sort01 = (arr) => {
  let zeroIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      [arr[zeroIndex], arr[i]] = [arr[i], arr[zeroIndex]];
      zeroIndex++;
    }
  }
  return arr;
};

console.log(sort01(input));
