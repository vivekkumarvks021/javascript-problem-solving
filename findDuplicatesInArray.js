let input = [2, 3, 4, 3, 8, 7, 3, 2, 4, 9, 1, 2, 5, 5];

const findDuplicates = (arr) => {
  const counts = new Map();

  arr.forEach((number) => {
    if (!counts.has(number)) {
      counts.set(number, 1);
    } else {
      counts.set(number, counts.get(number) + 1);
    }
  });

  let duplicates = [];
  counts.forEach((value, key) => {
    if (value > 1) {
      duplicates.push(key);
    }
  });

  return duplicates;
};
console.log(findDuplicates(input));
