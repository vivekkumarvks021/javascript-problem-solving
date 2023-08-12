const number = "12321";
const isPlaindrome = (number) => {
  let rev = number.split("").reverse().join("");
  return rev === number;
};

console.log(isPlaindrome(number));
