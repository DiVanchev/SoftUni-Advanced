function magicMatrices(arrs) {
  const targetSum = arrs[0].reduce((acc, num) => acc + num, 0);

  for (let i = 0; i < arrs.length; i++) {
    const rowSum = arrs[i].reduce((acc, num) => acc + num, 0);

    let colSum = 0;
    for (let j = 0; j < arrs.length; j++) {
      colSum += arrs[j][i];
    }

    if (rowSum !== targetSum || colSum !== targetSum) {
      return false;
    }
  }

  return true;
}
console.log(
  magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ])
);

console.log(
  magicMatrices([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
