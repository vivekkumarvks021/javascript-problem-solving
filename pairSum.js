let array = [1, 3, 6, 2, 5, 4, 3, 2, 4];
let targetSum = 7;

const pairSum = (array, sum) => {
  let result = [];
  let found = new Map();
  const checkPair = (i, j) => {
    if (
      (found.has(i) && found.get(i) === j) ||
      (found.has(j) && found.get(j) === i)
    ) {
      return false;
    } else {
      return true;
    }
  };

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] === sum && checkPair(i, j)) {
        result.push([array[i], array[j]]);
        found.set(i, j);
      }
    }
  }

  return result;
};
console.log(pairSum(array, targetSum));

const pairSumIndex = () => {
  const indexMap = new Map();
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const complement = targetSum - array[i];

    if (indexMap.has(complement)) {
      const complementIndex = indexMap.get(complement);
      result.push([complementIndex, i]);
    }

    indexMap.set(array[i], i);
  }
  return result;
};

console.log(pairSumIndex(array, targetSum));
