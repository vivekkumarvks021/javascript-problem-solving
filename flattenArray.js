let input = [1, [2, [3, 4], 5], 6];
const input1 = [1, [2, [3, [4, 5], 6], 7], 8];

const flatTheInput = (arr) => {
  let output = [];
  arr.forEach((element) => {
    if (typeof element === "object") {
      let data = element.flat();
      output = [...output, ...data];
    } else {
      output.push(element);
    }
  });
  return output;
};
console.log(
  flatTheInput(input),
  "It will not work for more than 3 inside array"
);

function flattenArray(arr) {
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flattenArray(val) : val);
  }, []);
}

const flattened = flattenArray(input1);
console.log(flattened, "Flattened array in optimized way");

const flatTheArray = (arr) => {
  let output = [];
  arr.map((element) => {
    if (Array.isArray(element)) {
      output = output.concat(flatTheArray(element));
    } else {
      output.push(element);
    }
  });
  return output;
};

console.log(flatTheArray(input1), "Flattened the array in my way.");
