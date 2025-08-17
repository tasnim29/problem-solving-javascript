function removeDuplicate(arr) {
  let noDuplicate = [];
  for (let i = 0; i < arr.length; i++) {
    if (!noDuplicate.includes(arr[i])) {
      noDuplicate.push(arr[i]);
    }
  }

  return noDuplicate;
}
const result = removeDuplicate([1, 2, 1, 3, 2, 3, 2, 1, 3, 2]);
console.log(result);
