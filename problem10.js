function pingPong(num) {
  let numbers = [];

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      numbers.push("Ping Pong");
    } else if (i % 3 === 0) {
      numbers.push("Ping");
    } else if (i % 5 === 0) {
      numbers.push("Pong");
    } else {
      numbers.push(i);
    }
  }
  return numbers;
}
const result = pingPong(20);
console.log(result);
