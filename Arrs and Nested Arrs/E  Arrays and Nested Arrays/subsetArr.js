function subsetArr(arr) {
  let curNum = arr.shift();
  let newArr = [];
  newArr.push(curNum);
  for (const num of arr) {
    if (num >= curNum) {
      newArr.push(num);
      curNum = num;
    }
  }
  return newArr;
}
console.log(subsetArr([1, 3, 8, 4, 10, 12, 3, 2, 24]));
