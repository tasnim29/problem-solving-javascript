function factorial(num) {
  let factorialResult = 1;
  for (let i = 1; i <= num; i++) {
    factorialResult = factorialResult * i;
    console.log(factorialResult);
  }
  return factorialResult;
}
const result = factorial(5);
console.log(result);
