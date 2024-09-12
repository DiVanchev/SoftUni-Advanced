function aggregateElements(arr) {
  let sum = 0;
  let inversSum = 0;
  let concatenate = '';
  for (const num of arr) {
    sum += num;
  }
  for (let i = 0; i < arr.length; i++) {
    inversSum += 1 / arr[i];
  }
  for (const concat of arr) {
   let stringifiedConcat = String(concat);
   concatenate += stringifiedConcat;
  }
  console.log(sum);
  console.log(inversSum);
  console.log(concatenate);
  
}
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);
