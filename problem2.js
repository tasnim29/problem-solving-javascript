function countVowels(str) {
  const vowels = "aeiou";
  let myVowels = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        myVowels += str[i];
      }
    }
  }
  return myVowels.length;
}
const result = countVowels("mangoae");
console.log(result);
