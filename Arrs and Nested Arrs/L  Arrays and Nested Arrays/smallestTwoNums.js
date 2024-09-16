function smallestTwoNums(arr) {
  let newSort = [];

  arr.sort((a, b) => a - b);
  let fPop = arr.shift();
  let sPop = arr.shift();

  newSort.push(fPop, sPop);

  return newSort.join(" ");
}
console.log(smallestTwoNums([30, 15, 50, 5]));
