const arr = [1, 2, 3, 4, 5];
const sumOfArray = (arr) => {
  let sum = 0;
  arr.forEach((element) => (sum += element));
  return sum;
};
console.log(sumOfArray(arr));

// Alternate and Better approach
const sumOfArrayUsingReducer = (arr) => {
  return arr.reduce((acc, number) => {
    acc += number;
    return acc;
  }, 0);
};

console.log(sumOfArrayUsingReducer(arr), "Using reduce");
