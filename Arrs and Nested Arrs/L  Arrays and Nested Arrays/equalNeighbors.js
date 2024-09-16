function equalNeighborPairs(matrix) {
  let count = 0;

  let rows = matrix.length;
  let cols = matrix[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (col < cols - 1 && matrix[row][col] === matrix[row][col + 1]) {
        count++;
      }

      if (row < rows - 1 && matrix[row][col] === matrix[row + 1][col]) {
        count++;
      }
    }
  }

  return count;
}
console.log(
  equalNeighborPairs([
    ["2", "3", "4", "7", "0"],
    ["4", "0", "5", "3", "4"],
    ["2", "3", "5", "4", "2"],
    ["9", "8", "7", "5", "4"],
  ])
);
