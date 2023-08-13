const number = "12321";
const isPalindrome = (string) => {
  let rev = string.split("").reverse().join("");
  return rev === string;
};

console.log(isPalindrome(number));

function isPalindrome1(number) {
  if (number < 0 || (number !== 0 && number % 10 === 0)) {
    // Negative numbers and numbers ending with 0 are not palindromes
    return false;
  }

  let reversed = 0;
  let original = number;

  while (original > 0) {
    const digit = original % 10;
    reversed = reversed * 10 + digit;
    original = Math.floor(original / 10);
  }

  return reversed === number;
}

// Example usage
const number1 = 121;
const number2 = 12345;

console.log(isPalindrome1(number1)); // Output: true
console.log(isPalindrome1(number2));

const isPalindrome2 = (str) => {
  let arr = Array.from(str);

  midIndex = !(arr.length % 2)
    ? Math.floor(arr.length / 2) - 1
    : Math.floor(arr.length / 2);
  for (let i = 0; i <= midIndex; i++) {
    let lastIndex = arr.length - i - 1;
    if (arr[i] !== arr[lastIndex]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome2("1234321"));
