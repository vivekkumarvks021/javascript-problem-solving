let input = [1, 3, 2, 2, 3, 4, 4, 5];
const removeDuplicates = (arr) => {
  let output = [];
  arr.forEach((element) => {
    let findNumber = output.find((data) => data === element);
    if (!findNumber) {
      output.push(element);
    }
  });

  return output;
};
console.log(removeDuplicates(input));

const removeDuplicates1 = (arr) => {
  let data = new Set();
  let output = [];
  arr.forEach((element) => {
    if (!data.has(element)) {
      output.push(element);
      data.add(element);
    }
  });
  return output;
};

console.log(removeDuplicates1(input), "remove duplicates in optimized way");
