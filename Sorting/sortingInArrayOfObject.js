const data = [
  { id: 2, name: "Alice" },
  { id: 3, name: "Bob" },
  { id: 5, name: "Charlie" },
  { id: 4, name: "Eve" },
  { id: 1, name: "John" },
];

const sortArray = data.sort((a, b) => a.id - b.id);
// const check = data.sort((current, prev) =>
//   console.log(current, "element", prev)
// );

console.log(sortArray);
