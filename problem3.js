function isPalindrome(str) {
  let word = "";
  for (let i = str.length - 1; i >= 0; i--) {
    word += str[i];
  }
  if (word === str) {
    return "The word is a palindrome";
  } else {
    return "The word is not a palindrome";
  }
}
const result = isPalindrome("abcba");
console.log(result);
