function capital(str) {
  let firstCapital = "";
  let words = str.split(" ");
  for (const word of words) {
    firstCapital += word[0].toUpperCase() + word.slice(1) + " ";
  }

  return firstCapital;
}
const result = capital("hello world");
console.log(result);
