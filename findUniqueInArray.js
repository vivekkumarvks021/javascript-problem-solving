let input = [2, 3, 4, 3, 8, 7, 3, 2, 4, 9, 1, 2, 5, 5];

// let output = [1, 7, 8, 9];
const nonRepeat = (numArray) => {
  let num = {};
  let nonRepeat = [];

  numArray.forEach((number) => {
    if (num[number]) {
      num[number]++;
    } else {
      num[number] = 1;
    }
  });

  for (let value in num) {
    if (num[value] === 1) {
      nonRepeat.push(+value);
    }
  }

  return nonRepeat;
};
console.log(nonRepeat(input));

// let input=  [2, 3, 4, 3, 8, 7, 3, 2, 4, 9, 1, 2, 5, 5];
// let output = [8, 7, 9, 1];
const nonRepeat1 = (numArray) => {
  let arrayWithRepeat = [];

  // Set is storing unique data inside
  let set = new Set();
  let nonRepeat = [];

  numArray.forEach((number) => {
    if (!set.has(number)) {
      arrayWithRepeat.push({ number, count: 1 });
      set.add(number);
    } else {
      arrayWithRepeat.map((item) => {
        if (item.number === number) {
          item = { number, count: item.count++ };
        }
      });
    }
  });

  for (let obj of arrayWithRepeat) {
    if (obj.count === 1) {
      nonRepeat.push(obj.number);
    }
  }

  return nonRepeat;
};
console.log(
  nonRepeat1(input),
  "Non-repeating problem with my way and It's Complexity is O(n^2)"
);

// let output = [8, 7, 9, 1];
const nonRepeat2 = (numArray) => {
  // Map is storing data in key -> value pair
  const counts = new Map();
  const nonRepeat = [];

  numArray.forEach((number) => {
    if (!counts.has(number)) {
      counts.set(number, 1);
    } else {
      counts.set(number, counts.get(number) + 1);
    }
    console.log("count Set", counts);
  });

  counts.forEach((count, number) => {
    if (count === 1) {
      nonRepeat.push(number);
    }
  });

  return nonRepeat;
};

console.log(
  nonRepeat2(input),
  "Non-repeating problem in Optimized way and Complexity is O(n)"
);
