function maxNumber(arr) {
  let maxNum = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (maxNum < arr[i]) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}
const result = maxNumber([1, 2, 11, 4, 5]);
console.log(result);
