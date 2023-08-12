let string = "Hello, I am Vivek, keviV ma I ,olleH";

// Reverse the string by using for loop
const reverse = (string) => {
  let newStr = "";
  for (let i = string.length; i > 0; i--) {
    newStr += string[i - 1];
  }
  return newStr;
};
console.log(reverse(string), "reversed by using for loop");

// Reverse the string using inbuilt reverse property
const reverse1 = (string) => {
  return string.split("").reverse().join("");
};

console.log(
  reverse1(string),
  "It is the simplest way by using inbuilt property"
);

// By Using Array.from which convert the string into ["s", "t", "r", "i", "n", "g"]
const reverse2 = (string) => {
  return Array.from(string).reverse().join("");
};

console.log(
  reverse2(string),
  "It is also simplest way to reverse a string by using Array.from"
);

// By recursively
const reverseRecursively = (str) => {
  //base case to exit from recursion
  if (str === "") return "";
  else return reverseRecursively(str.substr(1)) + str.charAt(0);
};

console.log(reverseRecursively(string), "Reverse the string recursively");
