function biggestElement(arr) {
    let combinedArr = arr.flat();

    return Math.max(...combinedArr);
}
console.log(
  biggestElement([
    [20, 50, 10],
    [8, 33, 145],
  ])
);
