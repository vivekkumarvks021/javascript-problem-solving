const arr = [1, 2, 3, 4, 1, 9, 4, 3, 8, 6];
const arr1 = [5, 1, 9, 4, 3, 1, 6];
// output = [1, 3, 4, 1, 9, 6];

const intersection = (array1, array2) => {
  const commonArray = [];
  array1.forEach((number1) => {
    array2.every((number2, index) => {
      if (number1 === number2) {
        commonArray.push(number1);
        array2[index] = "matched";
        return false;
      }
      return true;
    });
  });
  return commonArray;
};
// console.log(intersection(arr, arr1));

const arr2 = [1, 2, 3, 4, 1, 9, 4, 3, 8, 6];
const arr3 = [5, 1, 9, 4, 3, 1, 6];

const uniqueIntersection = (array1, array2) => {
  const set = new Set(array2);
  const commonArray = [];

  array1.forEach((number) => {
    if (set.has(number)) {
      commonArray.push(number);
      set.delete(number);
    }
  });

  return commonArray;
};

console.log(uniqueIntersection(arr2, arr3));
