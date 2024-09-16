function sumDiagonals(matrix) {
  let mainDiagonalSum = 0;
  let secondaryDiagonalSum = 0;
  let matrixLength = matrix.length;

  for (let i = 0; i < matrixLength; i++) {
    mainDiagonalSum += matrix[i][i]; 
    secondaryDiagonalSum += matrix[i][matrixLength - 1 - i];
  }

  console.log(mainDiagonalSum + " " + secondaryDiagonalSum);
}

sumDiagonals([
  [20, 40],
  [10, 60],
]);
sumDiagonals([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
